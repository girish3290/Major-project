function getWeather() {
  var city = document.getElementById("cityInput").value;
  var apiKey = "API_KEY";
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  // Make a GET request to the API endpoint
  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error: " + response.status);
      }
    })
    .then(function (data) {
      displayWeather(data);
    })
    .catch(function (error) {
      console.log(error);
      document.getElementById("weatherInfo").innerHTML = "Error retrieving weather data.";
    });
}

function displayWeather(data) {
  var weatherInfo = document.getElementById("weatherInfo");
  weatherInfo.innerHTML = "";

  var cityName = document.createElement("h2");
  cityName.textContent = data.name;
  weatherInfo.appendChild(cityName);

  var temperature = document.createElement("p");
  temperature.innerHTML = "Temperature: " + (data.main.temp - 273.15).toFixed(2) + "°C";
  weatherInfo.appendChild(temperature);

  var humidity = document.createElement("p");
  humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
  weatherInfo.appendChild(humidity);

  var description = document.createElement("p");
  description.innerHTML = "Description: " + data.weather[0].description;
  weatherInfo.appendChild(description);
}
