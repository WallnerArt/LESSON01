function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '993dc03f2208aa3ad0fa2c01a8b2b69f'; // Мой API ключ от OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => console.error('Ошибка при получении данных:', error));
}

function displayWeather(data) {
    const weather = document.getElementById('weatherResult');
    if (data.cod !== 200) {
        weather.innerHTML = `<p>Ошибка: ${data.message}</p>`;
        return;
    }
    weather.innerHTML = `
        <h3>Погода в ${data.name}:</h3>
        <p>Температура: ${Math.round(data.main.temp)}°C</p>
        <p>Погода: ${data.weather[0].description}</p>
        <p>Давление: ${data.main.pressure} мм рт. ст.</p>
        <p>Скорость ветра: ${data.wind.speed} м/с</p>
    `;
}
