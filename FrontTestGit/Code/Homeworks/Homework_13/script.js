// Object with spaceship data
const spaceship = {
    name: 'MAH-220720',
    crew: ['Captain', '2 Officer', 'Board Engineer', 'Mechanic', 'Microbiologist', 'Doctor'],
    mission: 'Galaxy Exploration',
    speed: '1.08e+9',
    manufacturer: 'ALEX KRÜGER Conglomerate'
  };
  
  // Function to display spaceship information
  function displaySpaceshipInfo() {
    document.getElementById('name').textContent = spaceship.name;
    document.getElementById('crew').textContent = spaceship.crew.join(', ');
    document.getElementById('mission').textContent = spaceship.mission;
    document.getElementById('speed').textContent = spaceship.speed;
    document.getElementById('manufacturer').textContent = spaceship.manufacturer;
  }
  
  // Function to hide manufacturer information
  function hideManufacturer() {
    document.getElementById('manufacturer').style.display = 'none';
  }
  
  // Display spaceship information when the page loads
  window.onload = function() {
    displaySpaceshipInfo();
  
    // Add event listener to hide manufacturer button
    document.getElementById('hideManufacturerBtn').addEventListener('click', hideManufacturer);
  };
  