const axios=require('axios');
const express=require('express');
const app=express();
const PORT=8080;
require('dotenv').config();
app.use(express.json());
app.listen(PORT,()=>{console.log(`Running from ${PORT}`)});
app.use(express.static('dist'));

 

 app.post('/', async (req,res)=>{
    // try to get the weather information from OpenWeather Api and send it back to the client 
    try{
        const { geoCode } = req.body;
        let ladtidue = geoCode.lat;
        let longitude = geoCode.lng;
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${ladtidue}&lon=${longitude}&appid=${process.env.GEO_LOCATION_API}&units=imperial`;
        let weatherData = await axios.get(url);
        res.json({
          weather: weatherData.data.weather,
          main: weatherData.data.main,
        }); 

    }
    // If there is an error log it onto the console
    catch (error){
        console.log(error);
    }
    
});
 



/* let url=`https://api.openweathermap.org/data/2.5/weather?lat=${ladtidue}&lon=${longitude}&appid=${process.env.GEO_LOCATION}`;
let weatherData= await fetch(url);
let weatherDataJson=await weatherData.json();
res.json(weatherDataJson); */