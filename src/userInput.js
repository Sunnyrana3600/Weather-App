import { geoLocation } from "./geoLocation";
export const userInput=()=>{
  // Limit google api to only cites 
    var options = {
      types: ["(cities)"],
    };
    const input = document.querySelector(".search-bar");
    let location=document.querySelector('.location-name');
    let weatherInformation=document.querySelector('.weather-information')
    let autocomplete = new google.maps.places.Autocomplete(input, options);

    // Shows cities as user types 
    google.maps.event.addListener(autocomplete, "place_changed", () => {
      const place = autocomplete.getPlace();
      // If empty do not do anything
      if (place == null) return;
      //gets the ladtidue and longitude from the location
      let ladtidue=place.geometry.location.lat();
      let longitude=place.geometry.location.lng();
      location.innerHTML=input.value;
      //resets search bar
      input.value='';
      // removes the display hidden and shows the location and values
      weatherInformation.classList.remove('weather-information');
      weatherInformation.classList.add('weather-info-show');
      geoLocation(ladtidue,longitude);
    });
}


    