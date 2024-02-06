import { useState } from 'react';
import useGetUser from '../../hooks/useGetUser';
import { MdDelete, MdOutlineSaveAlt, MdOutlineCancel } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';

import Loading from '../../components/loading/Loading';

import useEditUserDtls from '../../hooks/useEditUserDtls';

const TableComp = () => {
  const { isLoading, allUser } = useGetUser();
  const [currentId, setCurrentId] = useState('');
  const [isEditing, setIsEDiting] = useState(false);

  const [editedInputs, setEditedInputs] = useState({
    userName: '',
    email: '',
  });

  const { editProfile, isUpdating } = useEditUserDtls();

  if (isLoading) <Loading />;
  return (
    <>
      {' '}
      <table className='w-[710px] text-xl text-left rtl:text-right text-gray-600 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Username
            </th>
            <th scope='col' className='px-6 py-3'>
              Added Date
            </th>
            <th scope='col' className='px-6 py-3'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {allUser.length > 0 ? (
            allUser.map((user) => {
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
                        <button className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                          <MdDelete />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <div className='flex justify-center items-center w-[710px] '>
              <p className=''>No user found</p>
            </div>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableComp;
