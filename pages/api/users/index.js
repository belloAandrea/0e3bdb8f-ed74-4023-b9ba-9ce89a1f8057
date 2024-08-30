import { db } from '../../../lib/db';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const users = await db.user.findMany();
        res.status(200).json(users);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}