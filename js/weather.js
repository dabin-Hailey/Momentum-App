function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "7d9888ad51e37c503608695d782b8662";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `🌏 ${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = `@ ${data.name}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you 😢");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
