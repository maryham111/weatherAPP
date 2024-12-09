// Use your API key here
const API_KEY = '86ce2819972ecbc23c794e183ff7a8d7';

function getWeatherData(lat, lon) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Could not fetch weather data. Please try again later.');
        });
}

function displayWeather(data) {
    document.getElementById('weather-info').style.display = 'block';
    document.getElementById('city-name').textContent = `City: ${data.name}`;
    document.getElementById('weather-description').textContent = `Weather: ${data.weather[0].description}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                getWeatherData(lat, lon);
            },
            error => {
                console.error('Error getting location:', error);
                alert('Could not get your location. Please allow location access.');
            }
        );
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

// Add click event listener to the button
document.getElementById('get-location-btn').addEventListener('click', getUserLocation);

// Calculator functions
function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    displayCalcResult(num1 + num2);
}

function subtract() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    displayCalcResult(num1 - num2);
}

function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    displayCalcResult(num1 * num2);
}

function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        alert('Cannot divide by zero');
    } else {
        displayCalcResult(num1 / num2);
    }
}

function displayCalcResult(result) {
    document.getElementById('calc-result').textContent = `Result: ${result}`;
}
