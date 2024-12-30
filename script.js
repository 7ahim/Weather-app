const apiKey = "7cacd3cd857d1c5fa3b2f866b74870bb";

const searchbtn = document.querySelector(".searchbtn1");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function CheckWeather(cityyy) {
    const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${cityyy}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        let data = await response.json();
        console.log(data);
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + " km/h";
        if (data.weather[0].main == "Clear") {
            weathericon = document.querySelector(".weather-icon");
            weathericon.src = "clear.png";
        }
        else if (data.weather[0].main == "Clouds") {
            weathericon = document.querySelector(".weather-icon");
            weathericon.src = "clouds.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon = document.querySelector(".weather-icon");
            weathericon.src = "drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weathericon = document.querySelector(".weather-icon");
            weathericon.src = "mist.png";
        }
        else if (data.weather[0].main == "Rain") {
            weathericon = document.querySelector(".weather-icon");
            weathericon.src = "rain.png";
        }
        else if (data.weather[0].main == "Snow") {
            weathericon = document.querySelector(".weather-icon");
            weathericon.src = "snow.png";
        }

    }
}
document.querySelector(".inputbox").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let cityy = document.querySelector(".inputbox").value;
        if (cityy) {
            CheckWeather(cityy);
        }
    }
});
searchbtn.addEventListener("click", () => {
    let cityy = document.querySelector(".inputbox").value;
    if (cityy) {
        CheckWeather(cityy);
    }
});


