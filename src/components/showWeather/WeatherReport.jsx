import { useState, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';

import axios from 'axios';

const WeatherReport = () => {
  const [weatherData, setWeatherData] = useState({
    current: '',
    location: '',
  });
  useEffect(() => {
    axios
      .get(
        'https://api.weatherapi.com/v1/current.json?key=75666e7f563540b2997124805240602&q=india&aqi=no'
      )
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      <form className='flex item-center'>
        <input type='text' className='w-[387px] h-[51px] border-4 rounded-lg' />
        <button className='text-[41px]'>
          <IoSearch />
        </button>
      </form>
    </div>
  );
};

export default WeatherReport;
