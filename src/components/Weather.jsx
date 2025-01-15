import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../ApiFetch.js";
import { Toaster } from "react-hot-toast";

function Weather() {
  const dispatch = useDispatch();
  const { weather } = useSelector((state) => state.weather);

  //fetching weather data
  useEffect(() => {
    //get user's current location
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      dispatch(fetchWeatherData(lat, lon)); 
    });
  }, []);

  return (
    // Weather component
    <div className=" flex flex-col items-center">
      <Toaster />
      <div className="w-full bg-[#141416] rounded-md p-4 my-4 shadow-md">
        {weather ? (
          <div className="w-full overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className=" text-center text-white bg-[#1E201E]">
                  <th className="px-4 py-2">City</th>
                  <th className="px-4 py-2">Temperature</th>
                  <th className="px-4 py-2">Humidity</th>
                  <th className="px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-white font-bold text-md text-center">
                  <td className="px-4 py-2">{weather.name}</td>
                  <td className="px-4 py-2">{weather.main.temp}°C</td>
                  <td className="px-4 py-2">{weather.main.humidity}</td>
                  <td className="px-4 py-2 capitalize">{weather.weather[0].description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="text-center text-xl font-bold text-white">Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default Weather;
