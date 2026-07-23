import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  deleteUser,
} from 'firebase/auth';
import { ref, remove } from 'firebase/database';
import { auth, rtdb } from './firebaseConfig';

export async function signUp(email: string, password: string) 
{
  try 
  {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return { user: result.user, error: null };
  } catch (error: any) 
  {
    return { user: null, error: error.code };
  }
}

export async function login(email: string, password: string) 
{
  try 
  {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { user: result.user, error: null };
  } catch (error: any) 
  {
    return { user: null, error: error.code };
  }
}

export async function logout() 
{
  await signOut(auth);
}

export function subscribeToAuthChanges(callback: (user: User | null) => void) 
{
  return onAuthStateChanged(auth, callback);
}

export async function changePassword(currentPassword: string, newPassword: string) {
  const user = auth.currentUser;

  if (!user || !user.email) {
    return { success: false, error: 'no-user' };
  }

  try {
    const credential = EmailAuthProvider.credential(user.email, currentPassword);
    await reauthenticateWithCredential(user, credential);

    await updatePassword(user, newPassword);

    return { success: true, error: null };
  } catch (error: any) {
    return { success: false, error: error.code };
  }
}

export async function deleteFamily(currentPassword: string) {
  const user = auth.currentUser;

  if (!user || !user.email) {
    return { success: false, error: 'no-user' };
  }

  try {
    const credential = EmailAuthProvider.credential(user.email, currentPassword);
    await reauthenticateWithCredential(user, credential);

    await remove(ref(rtdb, user.uid));

    await deleteUser(user);

    return { success: true, error: null };
  } catch (error: any) {
    return { success: false, error: error.code };
};
}
