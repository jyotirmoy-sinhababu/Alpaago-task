import { useState } from 'react';

import { saveData } from '../components/slice/EditedSlice';
import { useDispatch } from 'react-redux';

import { firestore } from '../firebase/Firebase';
import { doc, updateDoc } from 'firebase/firestore';

const useEditUserDtls = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const dispatch = useDispatch();

  const editProfile = async (editedInput, user) => {
    setIsUpdating(true);
    const userDocRef = doc(firestore, 'users', user.uid);
    try {
      const updatedUser = {
        ...user,
        userName: editedInput.userName,
        email: editedInput.email,
      };

      await updateDoc(userDocRef, updatedUser);
      dispatch(saveData(updatedUser));
    } catch (error) {
      console.error(error);
    }
  };
  return { editProfile, isUpdating };
};

export default useEditUserDtls;
