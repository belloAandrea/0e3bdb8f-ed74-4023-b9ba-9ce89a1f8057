import { sendPasswordResetEmail } from '../../../lib/emailService';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;
        // Call a function to generate a reset token and send email
        await sendPasswordResetEmail(email);
        res.status(200).json({ message: 'Recovery email sent' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}