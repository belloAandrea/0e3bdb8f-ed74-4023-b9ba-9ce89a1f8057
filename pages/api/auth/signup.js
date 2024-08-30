import bcrypt from 'bcrypt';
import { db } from '../../../lib/db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.user.create({ data: { email, password: hashedPassword } });
        res.status(201).json({ message: 'User created' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}