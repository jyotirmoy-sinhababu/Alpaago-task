import React, { useState } from 'react';
import useGetUser from '../../hooks/useGetUser';

import { useDispatch } from 'react-redux';

import { MdDelete, MdOutlineSaveAlt, MdOutlineCancel } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';

import { firestore } from '../../firebase/Firebase';
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore';

const TableRowComp = ({ user }) => {
  console.log(user);
  const [currentId, setCurrentId] = useState('');
  const [isEditing, setIsEDiting] = useState(false);

  const [editedInputs, setEditedInputs] = useState({
    userName: user.userName,
    email: user.email,
  });

  const { setTriggerUser } = useGetUser();

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      const userRef = doc(firestore, 'users', user.uid);
      await deleteDoc(doc(firestore, 'users', user.uid));

      await updateDoc(userRef, {
        users: arrayRemove(user.uid),
      });
      setTriggerUser(true);
    } catch (error) {
    } finally {
    }
  };

  return (
    <tr
      className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
      key={user.uid}
    >
      <td className='px-6 py-4'>
        {isEditing && user?.uid === currentId ? (
          <input
            type='text'
            placeholder='Full Name'
            className='border-2 h-[35px] px-[10px]'
            value={editedInputs.userName}
            onChange={(e) => {
              setEditedInputs({
                ...editedInputs,
                userName: e.target.value,
              });
            }}
          />
        ) : (
          `${user?.userName}`
        )}
      </td>
      <td className='px-6 py-4'>
        {' '}
        {isEditing && user?.uid === currentId ? (
          <input
            type='text'
            placeholder='email'
            className='border-2 h-[35px] px-[10px]'
            value={editedInputs.email}
            onChange={(e) => {
              setEditedInputs({
                ...editedInputs,
                email: e.target.value,
              });
            }}
          />
        ) : (
          `${user?.email}`
        )}
      </td>
      <td className='px-6 py-4 flex gap-[10px]'>
        {isEditing && user?.uid === currentId ? (
          <div className='flex gap-3'>
            <button
              className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '
              type='button'
              onClick={() => {
                setIsEDiting(false);
                editProfile(editedInputs, user);
              }}
            >
              <MdOutlineSaveAlt />
            </button>
            <button
              onClick={() => {
                setIsEDiting(false);
              }}
              className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '
            >
              <MdOutlineCancel />
            </button>
          </div>
        ) : (
          <div className='flex gap-3'>
            <button
              className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '
              type='button'
              onClick={() => {
                setCurrentId(user.uid);
                setIsEDiting(true);
              }}
            >
              <CiEdit />
            </button>
            <button
              className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={() => {
                handleDelete();
              }}
            >
              <MdDelete />
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default TableRowComp;
