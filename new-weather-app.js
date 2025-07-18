const text_input = document.querySelector(".text_input");
const search_button = document.querySelector(".search_button");
const clear = document.querySelector(".clear");
const temperature = document.querySelector(".temperature");
const city = document.querySelector(".city");
const wind_speed = document.querySelector(".wind_speed");
const humidity = document.querySelector(".humiditys");
const cover = document.querySelector("#cover");




const api_url = "https://api.openweathermap.org/data/2.5/weather?"
const apiKey = "f25d5c9587c0caa440fc87c947bd787a"


async function makeReq() {
    if (text_input !== "") {

        let value = text_input.value
        const req = await fetch(`${api_url}q=${value}&appid=${apiKey}`);
        const data = await req.json();
        console.log(data)
        console.log(data.main.temp)

        if (data.weather[0].main === "Clear") {
            clear.src = "pics/images/clear.png"
        }
        if (data.weather[0].main === "Clouds") {
            clear.src = "pics/images/clouds.png"
        }
        if (data.weather[0].main === "Drizzle") {
            clear.src = "pics/images/drizzle.png"
        }
        if (data.weather[0].main === "Mist") {
            clear.src = "pics/images/mist.png"
        } if (data.weather[0].main === "Rain") {
            clear.src = "pics/images/rain.png"
        } if (data.weather[0].main === "Snow") {
            clear.src = "pics/images/snow.png"
        }

        temperature.innerHTML = Math.floor(data.main.temp) + "*c"
        city.innerHTML = value
        humidity.innerHTML = data.main.humidity + "%"
        wind_speed.innerHTML = data.wind.speed
    }
}



search_button.addEventListener("click", () => {
    makeReq()
    cover.style.display = "block"
})