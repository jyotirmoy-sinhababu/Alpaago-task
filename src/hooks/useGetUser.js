import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { firestore } from '../firebase/Firebase';

const useGetUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allUser, setAllUser] = useState([]);
  const authUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    const getAllUsers = async () => {
      setIsLoading(true);
      try {
        debugger;
        const usersRef = collection(firestore, 'users');
        const q = query(
          usersRef,
          where('uid', 'not-in', [authUser.uid]),
          orderBy('uid'),
          limit(5)
        );

        const querySnapshot = await getDocs(q);
        const users = [];

        querySnapshot.forEach((doc) => {
          console.log(doc);
          users.push({ ...doc.data(), id: doc.id });
        });

        setAllUser(users);
      } catch (error) {
        console.log('error');
      } finally {
        setIsLoading(false);
      }
    };

    if (authUser) getAllUsers();
  }, [authUser]);

  return { isLoading, allUser };
};

export default useGetUser;
