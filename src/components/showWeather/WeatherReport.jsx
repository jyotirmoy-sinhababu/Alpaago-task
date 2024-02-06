import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

import axios from 'axios';

const WeatherReport = () => {
  const [weatherData, setWeatherData] = useState();
  const [inputData, setInputData] = useState('');
  console.log(inputData);
  const callWeatherApi = async () => {
    if (inputData?.length)
      await axios
        .get(
          `https://api.weatherapi.com/v1/current.json?key=75666e7f563540b2997124805240602&q=${inputData}&aqi=no`
        )
        .then((res) => {
          console.log(res.data);
          setWeatherData(res.data);
        });
  };

  return (
    <div className='w-[830px] flex flex-col  bg-zinc-500 rounded-3xl h-[210px]'>
      <div className='pt-[12px] flex justify-around items-center'>
        <div className=''>
          <p className='text-3xl font-bold font-fontStyle'>Weather Report</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            callWeatherApi();
          }}
          className='flex item-center bg-slate-50 rounded-xl'
        >
          <input
            type='text'
            className='w-[387px] h-[51px] border-4 rounded-lg'
            onChange={(e) => {
              setInputData(e.target.value);
            }}
          />
          <button type='submit' className='text-[41px]'>
            <IoSearch />
          </button>
        </form>
      </div>
      {weatherData ? (
        <div className='flex justify-around  pt-4  w-[830px] pb-4'>
          <div>
            <p className='text-xl font-bold font-fontStyle'>
              <strong>Country</strong>: {weatherData.location.country}
            </p>
            <p className='text-xl font-bold font-fontStyle'>
              <strong>Latitude</strong>: {weatherData.location.lat}
            </p>
            <p className='text-xl font-bold font-fontStyle'>
              <strong>Longitude</strong>: {weatherData.location.lon}
            </p>
            <p className='text-xl font-bold font-fontStyle'>
              <strong>Region</strong>: {weatherData.location.region}
            </p>
          </div>
          <div>
            <p className='text-xl font-bold font-fontStyle'>
              <strong>Humidity</strong>:{' '}
              {weatherData.current.condition.humidity}
            </p>
            <p className='text-xl font-bold font-fontStyle'>
              <strong>Pressure</strong>: {weatherData.current.pressure_mb}
            </p>
            <p className='text-xl font-bold font-fontStyle'>
              <strong>Precipitation</strong>: {weatherData.current.precip_mm}
            </p>
            <p className='text-xl font-bold font-fontStyle'>
              <strong>Wind</strong>: {weatherData.current.wind_kph}
            </p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default WeatherReport;
