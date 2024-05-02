const apiKey = '993dc03f2208aa3ad0fa2c01a8b2b69f';

function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            document.getElementById('weatherOutput').innerText = 'Ошибка: ' + error.message;
        });
}

function displayWeather(data) {
    const { main, weather } = data;
    const weatherDescription = weather[0].description;
    const temp = Math.round(main.temp);
    const pressure = main.pressure;

    const weatherInfo = `
        <strong>${data.name}</strong><br>
        Температура: ${temp}°C<br>
        Погода: ${weatherDescription}<br>
        Давление: ${pressure} hPa
    `;
    document.getElementById('weatherOutput').innerHTML = weatherInfo;
}
