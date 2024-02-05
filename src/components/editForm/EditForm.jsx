import { useState, useEffect } from 'react';

const EditForm = ({ setIsOpen }) => {
  const [editedInputs, setEditedInputs] = useState({
    userName: '',
    email: '',
  });

  return (
    <form className='flex flex-col gap-8'>
      <input
        type='text'
        placeholder='Full Name'
        className='border-2 h-[55px] px-[10px]'
        value={editedInputs.userName}
        onChange={(e) => {
          setEditedInputs({ ...editedInputs, userName: e.target.value });
        }}
      />
      <input
        type='email'
        placeholder='User Email'
        className='border-2 h-[55px] px-[10px]'
        value={editedInputs.email}
        onChange={(e) => {
          setEditedInputs({ ...editedInputs, email: e.target.value });
        }}
      />
      <div className='flex justify-around'>
        {' '}
        <button
          className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          type='submit'
        >
          Save
        </button>
        <button
          className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          onClick={() => {
            setIsOpen(false);
          }}
          type='button'
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditForm;
