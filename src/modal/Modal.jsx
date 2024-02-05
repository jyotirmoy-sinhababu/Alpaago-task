import ReactDOM from 'react-dom';
const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className='flex justify-center items-center w-[100vw] h-[100vh]'>
      {children}
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
