
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import './InfoBox.css'
import './cardContainer.css'

export default function InfoBox({ info }) {

  let hotUrl = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let coldUrl = "https://images.unsplash.com/photo-1687265051328-3d9c67034cef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  let rainyUrl = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
   return (
    <div className='InfoBox'>
      <h1>Weather Information - {info.weather}</h1>

      <Card className="cardContainer" sx={{ maxWidth: 345 }}>


        <CardMedia
          component="img"
          height="140"
          image={info.tempHumidity>80?
                 rainyUrl:
                 info.temp>15 ?
                 hotUrl:
                 coldUrl
                 
          }
          alt="weather image"
        />

     <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{info.tempHumidity>80?
                 <ThunderstormIcon/>:
                 info.temp>15 ?
                 <SunnyIcon/>:
                 <AcUnitIcon/>
                 
          }
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div style={{ textAlign: "center" }}>

            </div>
            <p>Temperature:- {info.temp}&deg;</p>
            <p>Max Temperature:- {info.tempMax}&deg;</p>
            <p>Min Temperature:- {info.tempMin}&deg;</p>
            <p>Humidity:- {info.tempHumidity}%</p>
            <p>Feels Like:- {info.feelsLike}&deg;</p>
            <p>Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;</p>
          </Typography>
        </CardContent>

      </Card>
    </div>
  );
}