const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

const router = express.Router();

// Signup Route
router.post(
    '/signup',
    [
        body('fullName').notEmpty().withMessage('Full Name is required'),
        body('email').isEmail().withMessage('Valid Email is required'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
        body('confirmPassword').custom((value, { req }) => {
            if (value !== req.body.password) throw new Error('Passwords must match');
            return true;
        }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { fullName, email, password } = req.body;

        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) return res.status(400).json({ message: 'Email already registered' });

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ fullName, email, password: hashedPassword });
            await newUser.save();

            res.status(201).json({ message: 'User registered successfully' });
        } catch (err) {
            res.status(500).json({ message: 'Server error' });
        }
    }
);

// Login Route
router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Valid Email is required'),
        body('password').notEmpty().withMessage('Password is required'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user) return res.status(404).json({ message: 'User not found' });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ token, message: 'Login successful' });
        } catch (err) {
            res.status(500).json({ message: 'Server error' });
        }
    }
);

module.exports = router;
