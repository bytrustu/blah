import { NextApiRequest, NextApiResponse } from 'next';
import FirebaseAdmin from '@/models/firebaseAdmin';

const handler = async (request: NextApiRequest, res: NextApiResponse) => {
  const { uid, email, displayName, photoURL } = request.body;
  if (!uid) {
    res.status(400).json({ result: false, message: 'uid가 누락되었습니다.' });
  }
  if (!email) {
    res.status(400).json({ result: false, message: 'email이 누락되었습니다.' });
  }

  try {
    const addResult = await FirebaseAdmin.getInstance().Firestore.runTransaction(async (transaction) => {
      const screenName = (email as string).replace('@gmail.com', '');
      const memberRef = FirebaseAdmin.getInstance().Firestore.collection('members').doc(uid);
      const screenNameRef = FirebaseAdmin.getInstance().Firestore.collection('screen_names').doc(screenName);

      const memberDoc = await transaction.get(memberRef);
      if (memberDoc.exists) {
        return false;
      }

      const userData = {
        uid,
        email: email ?? '',
        displayName: displayName ?? '',
        photoURL: photoURL ?? '',
      };
      await transaction.set(memberRef, userData);
      await transaction.set(screenNameRef, userData);
      return true;
    });
    if (!addResult) {
      return res.status(201).json({ result: true, id: uid });
    }
    return res.status(200).json({ result: true, id: uid });
  } catch (e) {
    console.error(e);
    res.status(500).json({ result: false });
  }
};

export default handler;
