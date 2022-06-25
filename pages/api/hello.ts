import { NextApiRequest, NextApiResponse } from 'next';
import FirebaseAdmin from '@/models/firebaseAdmin';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  FirebaseAdmin.getInstance().Firebase.collection('test');
  res.status(200).json({ name: 'bytrustu' });
}
