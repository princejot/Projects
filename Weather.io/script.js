const apiKey = "99aca7c1eacd0400b59d5c9cc8c1bec4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".topbar input");
const searchBtn = document.querySelector(".topbar button");
const weatherIcon = document.querySelector(".mainContent img");
const mainContent = document.querySelector(".mainContent");
const topBar = document.querySelector(".topbar");
const para = document.createElement("p");
para.innerHTML = "City not found";
para.classList.add("err");

async function checkWeather(city) {
  const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  if (data.cod == "404") {
    mainContent.style.display = "none";
    topBar.insertAdjacentElement("afterend", para);
  }
  else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".hum").innerHTML = data.main.humidity + "%";
    document.querySelector(".winds").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./images/clear.png"
    }
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./images/cloud.png"
    }
    if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./images/drizzle.png"
    }
    if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./images/mist.png"
    }
    if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./images/rain.png"
    }
    if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./images/snow.png"
    } 
    mainContent.style.display = "block";
    para.remove();
  }
  
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
