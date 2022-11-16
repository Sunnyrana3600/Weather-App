export function display(weatherInfo){
    // Take the weather data and display it on the screen 
    let weathercondition=document.querySelector('.condition');
    let currentTemp=document.querySelector('.current-temp');
    let highTemp=document.querySelector('.high');
    let lowTemp=document.querySelector('.low');
    let weatherIcon=document.querySelector('img');

    weathercondition.innerHTML= weatherInfo.weather[0].main;
    
    let imgURL=`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`;
    weatherIcon.src=imgURL;
    currentTemp.innerHTML=`Current: ${Math.round(weatherInfo.main.temp)}\u00B0`;
    highTemp.innerHTML=`High: ${Math.round(weatherInfo.main.temp_max)}\u00B0` ;
    lowTemp.innerHTML=`Low: ${Math.round(weatherInfo.main.temp_min)}\u00B0`;
    console.log(weatherInfo);
}