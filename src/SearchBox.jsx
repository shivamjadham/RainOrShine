
  import TextField from '@mui/material/TextField';
  import Button from '@mui/material/Button';
  import SendIcon from '@mui/icons-material/Send';
  import {useState} from 'react';

  console.log(import.meta.env.WEATHER_API_URL);
      console.log(import.meta.env.WEATHER_API_KEY);

  import './SearchBox.css'
export default function SearchBox({updateInfo}){

      let [city,setCity] = useState("");
      let [error,setError] = useState(false);


      const API_URL = import.meta.env.WEATHER_API_URL;
      const API_KEY = import.meta.env.WEATHER_API_KEY;

      

             let getWeatherInfo = async () =>{
             try{
               let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
             let jsonResponse = await response.json();
             console.log(jsonResponse);

             let result = {
                city:city,
                temp: jsonResponse.main.temp,
                tempMax:jsonResponse.main.temp_max,
                tempMin:jsonResponse.main.temp_min,
                tempHumidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
             }

             console.log(result);
             return result;
             }catch(error){
              throw error;
             }
      }
    

  

    

    let handleChange = (event)=>{
        setCity(event.target.value);
    }


     
     let handleSubmit = async (event)=>{
           try{
              event.preventDefault();
             console.log(city);
             setCity("");
        let info = await getWeatherInfo();
             updateInfo(info);
           }catch{
            setError(true);
           }
   
   
  } 
   

    return (
        <div className='SearchBox'>
           
            <form  onSubmit={handleSubmit}  style={{display:"flex", flexDirection:"column" , alignItems:"center"}}>
                       <TextField id="standard-basic" label="City Name"  variant="standard"
                         required  value={city} onChange={handleChange}/>
                       <br></br><br></br>
                        <Button  type="submit" variant="contained" endIcon={<SendIcon />} 
                         >
        Search
      </Button>
      {error && <p style={{color:"red"}}>Sorry! We couldn't find the weather information for the given area.</p>}
            </form>
        </div>
    )
}