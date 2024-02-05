import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/Firebase';
import { useState } from 'react';
import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { useDispatch } from 'react-redux';
import { login } from '../components/slice/AuthSlice';

const useSignUpWithEmailPassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const dispatch = useDispatch();

  const signUp = async (inputs) => {
    if (!inputs.email || !inputs.password || !inputs.userName) {
      console.log('error');
      return;
    }

    const usersRef = collection(firestore, 'users');

    const q = query(usersRef, where('username', '==', inputs.userName));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.log('error');
      return;
    }

    try {
      setIsLoading(true);
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) {
        console.log('error');
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          userName: inputs.userName,
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, 'users', newUser.user.uid), userDoc);
        setIsLoading(false);
        localStorage.setItem('user-info', JSON.stringify(userDoc));
        dispatch(login(userDoc));
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return { loading, error, signUp, isLoading };
};

export default useSignUpWithEmailPassword;
