import React from 'react';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loading = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
      <p className='animate-spin'>
        <AiOutlineLoading3Quarters />
      </p>
    </div>
  );
};

export default Loading;
