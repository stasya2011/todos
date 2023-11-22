import { useState, useEffect, useCallback } from "react";
import env from "react-dotenv";

const WEATHER_API_KEY = env.WEATHER_API_KEY;

const Weather = () => {
  const [weather, setWeather] = useState<any>({});
  const featchData = useCallback(async (city: string) => {
    try {
      const data = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}&aqi=no`
      );
      const res = await data.json();

      setWeather(res);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    featchData("vilnius");
  }, []);

  return (
    <span className="weather">
      {weather.current ? (
        <>
          <ul className="weather_info">
            <li>
              {weather.current.condition ? weather.current.condition.text : ""},{" "}
              {weather.current.temp_c}
            </li>

            <li>{weather.location.name}</li>
          </ul>
          <div>
            {weather.current.condition.icon ? (
              <img src={weather.current.condition.icon} alt="Weather icon." />
            ) : null}
          </div>
        </>
      ) : (
        <h2>WEATHER</h2>
      )}
    </span>
  );
};

export default Weather;
