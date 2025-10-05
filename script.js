const apiKey = "67db10c959bda5e57a32ed17b208acb1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weathericon = document.querySelector("weathericon");

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windy").innerHTML = data.wind.speed + " km/h";


}
searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})


