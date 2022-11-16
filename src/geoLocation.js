import { display } from "./display";
export async function geoLocation(ladtidue,longitude){
 const url=('http://localhost:8080/');
 // send data to the server with a post request 
 const geoCode={lat:ladtidue, lng:longitude}
 let data= await fetch(url,{
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({geoCode})
 }); 
// wait for the weather data to come back 
 let weatherInfo=await data.json();
 display(weatherInfo);
}