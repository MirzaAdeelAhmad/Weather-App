
let Apikey = "863242cfb2b1d357e6093d9a4df19a4b";
let ApiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherImage = document.querySelector("#weather-image");
async function checkWeather(city){
    let response = await fetch(ApiURL + city + `&appid=${Apikey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#windSpeed").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherImage.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherImage.src = "images/clear.png";
    }
    if(data.weather[0].main == "Rain"){
        weatherImage.src = "images/rain.png";
    }
    if(data.weather[0].main == "Drizzle"){
        weatherImage.src = "images/drizzle.png";
    }
    if(data.weather[0].main == "Mist"){
        weatherImage.src = "images/mist.png";
    }  ``

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

});