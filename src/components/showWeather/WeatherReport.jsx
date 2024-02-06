import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

import axios from 'axios';

const WeatherReport = () => {
  const [weatherData, setWeatherData] = useState();
  const [inputData, setInputData] = useState({ inputs: '' });

  const callWeatherApi = async () => {
    if (inputData?.inputs?.length)
      await axios
        .get(
          `https://api.weatherapi.com/v1/current.json?key=75666e7f563540b2997124805240602&q=${inputData?.inputs}&aqi=no`
        )
        .then((res) => {
          console.log(res.data);
          setWeatherData(res.data);
        });
  };

  return (
    <div className='w-[830px] flex flex-col justify-center items-center bg-zinc-700 rounded-3xl'>
      <div className='pt-[12px]'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            callWeatherApi();
          }}
          className='flex item-center'
        >
          <input
            type='text'
            className='w-[387px] h-[51px] border-4 rounded-lg'
            onChange={(e) => {
              setInputData({ ...inputData, inputs: e.target.value });
            }}
          />
          <button type='submit' className='text-[41px]'>
            <IoSearch />
          </button>
        </form>
      </div>
      {weatherData ? (
        <div className='flex justify-evenly pt-4  w-[620px] pb-4'>
          <div>
            <p>
              <strong>Country</strong>: {weatherData.location.country}
            </p>
            <p>
              <strong>Latitude</strong>: {weatherData.location.lat}
            </p>
            <p>
              <strong>Longitude</strong>: {weatherData.location.lon}
            </p>
            <p>
              <strong>Region</strong>: {weatherData.location.region}
            </p>
          </div>
          <div>
            <p>
              <strong>Humidity</strong>:{' '}
              {weatherData.current.condition.humidity}
            </p>
            <p>
              <strong>Pressure</strong>: {weatherData.current.pressure_mb}
            </p>
            <p>
              <strong>Precipitation</strong>: {weatherData.current.precip_mm}
            </p>
            <p>
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
