import React from 'react';
import useGetUser from '../../hooks/useGetUser';
import { MdDelete } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';

import Loading from '../../components/loading/Loading';

const TableComp = () => {
  const { isLoading, allUser } = useGetUser();

  if (isLoading) <Loading />;
  return (
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
                <td className='px-6 py-4'>{user.userName}</td>
                <td className='px-6 py-4'>{user.email}</td>
                <td className='px-6 py-4 flex gap-[10px]'>
                  <button>
                    <CiEdit />
                  </button>
                  <button>
                    <MdDelete />
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          <p>No user found</p>
        )}
      </tbody>
    </table>
  );
};

export default TableComp;
