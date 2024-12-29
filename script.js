const apiKey = "7cacd3cd857d1c5fa3b2f866b74870bb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=chennai";
async function CheckWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
}