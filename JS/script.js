let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.querySelector(".search-input");
//fetch the Weather details from the Api
const getWeather = () => {
  let cityValue = cityRef.value;

  if (cityValue.lenght === 0) {
    result.innerHTML = `<h3>Please enter a city name</h3>`;
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${ApiKey}&units=metric`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt=""> 
        <h1>${data.main.temp} &#176</h1>
            <div class="temp-container">
                <div>
                  <h4 class="title">min</h4>
                  <h4 class="temp">${data.main.temp_min}&#176;</h4>
                </div> 
                <div>
                  <h4 class="title">humidity</h4>
                  <h4 class="temp">${data.main.humidity}&#176;</h4>
                </div>   
                <div>
                  <h4 class="title">max</h4>
                  <h4 class="temp">${data.main.temp_max}&#176;</h4>
                </div>
                <div>
                  <h4 class="title">pressure</h4>
                  <h4 class="temp">${data.main.pressure}&#176;</h4>
                </div>  
            </div>`;
      })
      .catch((err) => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
  }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
