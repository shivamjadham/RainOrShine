import './WeatherApp.css'
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import {useState} from 'react';

export default function WeatherApp() {

    const [weatherInfo,setWeatherInfo] = useState({
        city:"Delhi",
        temp: 30,
        tempMax: 35,
        tempMin: 25,
        tempHumidity: 60,
        feelsLike: 32,
        weather: "Sunny"
    });

    let updateInfo =(result)=>{
        setWeatherInfo(result);
    }

    return(
        <div className="weatherApp">
   <h1>Search For The Weather</h1>
    <SearchBox updateInfo={updateInfo}/>
   <InfoBox info={weatherInfo}/>
        </div>
      
    )
}