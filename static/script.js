// Initialize map centered around Ukraine
let map = L.map('map').setView([50.4501, 30.5234], 5);

// Add tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);



// Function to update markers
function updateMarkers() {
    fetch('/flights')
        .then(response => response.json())
        .then(flightData => {
            for (let flight of flightData) {
                // You may need to adjust latitude and longitude based on your data
                L.marker([flight.latitude, flight.longitude])
                    .addTo(map)
                    .bindPopup(`ICAO24: ${flight.ICAO24}<br>Callsign: ${flight.Callsign}<br>Origin: ${flight.OriginCountry}<br>Velocity: ${flight.Velocity} m/s<br>Altitude: ${flight.BaroAltitude} m<br>Bearing: ${flight.TrueTrack}°<br>Squawk: ${flight.Squawk}`);
            }
        });
}

// Initial marker update
updateMarkers();

// Set interval to update every 2 minutes
setInterval(updateMarkers, 120000);
