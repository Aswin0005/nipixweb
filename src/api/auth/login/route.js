"use server";
import { auth } from '../../../../firebaseConfig';

export async function POST(req, res) {
  const { email, password } = req.body;
  try {
    await auth.signInWithEmailAndPassword(email, password);
    res
      .status(200)
      .json({ message: 'User created successfully' }, { success: true });
  } catch (error) {
    res.status(500).json({ message: error.message }, { success: false });
  }
}
