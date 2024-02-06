import Auth from '../../components/auth/Auth';

import computerImg from '../../assets/images/computer.jpg';

const AuthPage = () => {
  return (
    <div className='flex gap-[62px]'>
      <img src={computerImg} alt='login image' className=' w-[50%] h-[100vh]' />
      <Auth />
    </div>
  );
};

export default AuthPage;
