import React from 'react';
import useGetUser from '../../hooks/useGetUser';

const TableComp = () => {
  const { isLoading, allUser } = useGetUser;

  console.log(allUser);

  return (
    <table className='table-auto'>
      <thead>
        <tr>
          <th>Username</th>
          <th>Added Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* {allUser.length > 0 ? (
          allUser.map((user) => {
            return (
              <tr key={user.uid}>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td></td>
                <td>
                  <button>Delete</button>
                  <button>Change Status</button>
                </td>
              </tr>
            );
          })
        ) : (
          <p>No user found</p>
        )} */}
      </tbody>
    </table>
  );
};

export default TableComp;
