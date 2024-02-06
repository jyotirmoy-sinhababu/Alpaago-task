import useGetUser from '../../hooks/useGetUser';

import Loading from '../../components/loading/Loading';

import TableRowComp from './TableRowComp';

const TableComp = () => {
  const { isLoading, allUser } = useGetUser();

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
          {allUser.length > 0
            ? allUser.map((user) => {
                return <TableRowComp key={user.uid} user={user} />;
              })
            : null}
        </tbody>
      </table>
    </>
  );
};

export default TableComp;
