const express = require('express');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.post(
    '/',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid Email is required'),
        body('message').notEmpty().withMessage('Message is required'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { name, email, message } = req.body;

        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: email,
                to: process.env.EMAIL_USER,
                subject: `Contact Us Message from ${name}`,
                text: message,
            };

            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Message sent successfully' });
        } catch (err) {
            res.status(500).json({ message: 'Error sending message' });
        }
    }
);

module.exports = router;
