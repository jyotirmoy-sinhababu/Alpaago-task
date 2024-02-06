import NavBar from '../../components/nav/NavBar';
import WeatherReport from '../../components/showWeather/WeatherReport';
import TableComp from '../../components/tableComp/TableComp';

const HomePage = () => {
  return (
    <div className='flex justify-center items-center'>
      {' '}
      <div className='flex flex-col gap-[65px] border-x-2 border-orange-950 h-[100vh]'>
        <div className='flex flex-col justify-center p-[42px] items-center gap-5  '>
          <NavBar />
          <WeatherReport />
        </div>
        <div className='flex pt-[109px] justify-center'>
          <TableComp />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
