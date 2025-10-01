//javascript alone cannot make a web-request we need either a node or windoow environment to run it
document.addEventListener("DOMContentLoaded", () => {
  const city = document.getElementById("city");
  const input = document.getElementById("get-weather-btn");
  const weatherinfo = document.getElementById("weather-info");
  const cityinfo = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const errormessage = document.getElementById("error-message");
  const api_key = //insert your own api key from openweather app; //api key from open weather app {this is unique for everyone and can be charged money for if it is paid}
  input.addEventListener("click", async () => {
    const cityname = city.value.trim();
    if (!cityname) return;
    //whenever we make an api call the server can throw us some error
    //the server/database is always in different continent
    try {
      const weatherdata = await fetchweatherdata(cityname); //you can never use await without async
      displayweatherdata(weatherdata);
    } catch (error) {
      showError(error.message || "An error occurred. Please try again.");
    }
  });
  async function fetchweatherdata(cityname) {
    //gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api_key}`;

    const response = await fetch(url);
    console.log(typeof response);
    if (!response.ok) {
      throw new Error("City Not Found");
    }
    const data = await response.json();
    return data;
  }

  function displayweatherdata(data) {
    //displays the data
    console.log(data);
    const { name, main, weather } = data; //extracting information from data
    cityinfo.textContent = name;
    temperature.textContent = `Temperature: ${main.temp}`;
    description.textContent = `Weather:${weather[0].description}`;
    //unlock the display
    weatherinfo.classList.remove("hidden");
    errormessage.classList.add("hidden");
  }
  function showError() {
    weatherinfo.classList.remove("hidden"); //if it is already hidden this won't change anything but
    //but incase input is being shown from the last time this will hide that
    errormessage.classList.add("hidden");
  }
});
