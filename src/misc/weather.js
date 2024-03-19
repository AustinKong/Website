import { fetchWeatherApi } from 'openmeteo';
	
const params = {
	"latitude": 1.352083,
	"longitude": 103.819839,
	"current": ["temperature_2m", "precipitation"],
	"timezone": "Asia/Singapore",
	"forecast_days": 1
};
const url = "https://api.open-meteo.com/v1/forecast";

const currentTime = () => {
  let currentDate = new Date()
  let currentUTCTime = currentDate.getTime()

  // Singapore's timezone offset is UTC+8
  let singaporeTimezoneOffset = 8 * 60 * 60 * 1000
  let singaporeTime = new Date(currentUTCTime + singaporeTimezoneOffset)

  // Format the time to display in HH:MM:SS format
  let hours = singaporeTime.getUTCHours().toString().padStart(2, '0')
  let minutes = singaporeTime.getUTCMinutes().toString().padStart(2, '0')
  let seconds = singaporeTime.getUTCSeconds().toString().padStart(2, '0')

  let amPM = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)

  return hours + ":" + minutes + ":" + seconds + " " + amPM;
}

const fetchData = async () => {
  const responses = await fetchWeatherApi(url, params);
  const response = responses[0]
  const current = response.current();

  const data = {
    current: {
      time: currentTime(),
      temperature2m: current.variables(0).value(),
      precipitation: current.variables(1).value()
    },
  }
  return data
}

export default fetchData