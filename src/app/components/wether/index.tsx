import { useState, useEffect, useCallback, useRef } from "react";
import env from "react-dotenv";

const WEATHER_API_KEY = env.WEATHER_API_KEY;

const Weather = () => {
  const [weather, setWeather] = useState<any>({
    name: "Vilnius",
    text: "",
    icon: "",
    temp: 0,
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const featchData = useCallback(async (city: string) => {
    try {
      const data = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}&aqi=no`
      );
      const res = await data.json();

      setWeather(() => ({
        text: res.current.condition.text,
        temp: res.current.temp_c,
        name: res.location.name,
        icon: res.current.condition.icon,
      }));
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    featchData(weather.name);
  }, []);

  return (
    <span className="weather">
      {weather ? (
        <>
          <ul className="weather_info">
            <li>
              {weather ? weather.text : ""},{weather.temp}
            </li>

            <li>
              <input
                type="text"
                value={weather.name}
                ref={inputRef}
                onBlur={() => featchData(weather.name)}
                onChange={(e) =>
                  setWeather((prev: any) => ({ ...prev, name: e.target.value }))
                }
                style={{
                  backgroundColor: "transparent",
                  color: "teal",
                  border: "none",
                  borderBottom: "1px solid teal",
                  padding: "5px",
                  width: "100px",
                }}
              />
            </li>
          </ul>
          <div>
            {weather.icon ? (
              <img src={weather.icon} alt="Weather icon." />
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
