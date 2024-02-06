import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase/Firebase';

const useGetUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allUser, setAllUser] = useState([]);

  const authUser = useSelector((state) => state.auth.user);

  const editUser = useSelector((state) => state.edit.editedData);

  useEffect(() => {
    const getAllUsers = async () => {
      setIsLoading(true);
      try {
        const users = [];

        const querySnapshot = await getDocs(collection(firestore, 'users'));
        querySnapshot.forEach((doc) => {
          users.push({ ...doc.data() });
        });
        setAllUser(users);
      } catch (error) {
        console.log('error');
      } finally {
        setIsLoading(false);
      }
    };

    if (authUser) getAllUsers();
  }, [authUser, editUser.length]);

  return { isLoading, allUser };
};

export default useGetUser;
