import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/Firebase';
import { doc, getDoc } from 'firebase/firestore';

const useLogin = () => {
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const loginUser = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      console.log('error');
    }
    try {
      const userCred = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (userCred) {
        const docRef = doc(firestore, 'users', userCred.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem('user-info', JSON.stringify(docSnap.data()));
        console.log('ok');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { loading, error, loginUser };
};

export default useLogin;
