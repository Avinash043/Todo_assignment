import toast  from "react-hot-toast"
import { fetchWeather } from "./redux/weatherReducer.js";    

// Fetch weather data from API
export const fetchWeatherData = (lat,lon) => async (dispatch) => {
  const API_KEY="cde8fad291b149bf985053a4d8ecf99c" 
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //Handling API request and error using toast
  try {
    const response = await fetch(
      `${URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    console.log("data",data)
    if (response.ok) {
      dispatch(fetchWeather(data));
    } else {
      toast.error(data.message || "Failed to fetch weather.");
    }
  } catch (error) {
    toast.error("An error occurred while fetching weather data.",error)
  }
};
