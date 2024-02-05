import NavBar from '../../components/nav/NavBar';
import TableComp from '../../components/tableComp/TableComp';

const HomePage = () => {
  return (
    <div>
      <div className='flex justify-center pt-[12px]'>
        <NavBar />
      </div>
      <div className='flex pt-[109px] justify-center'>
        <TableComp />
      </div>
    </div>
  );
};

export default HomePage;
