# flight-tracker

## Overview
This project is a flight tracking application that visualizes real-time flight data over Ukraine using a web interface.

## Features
- Displays real-time flight data on a map, updated every 2 minutes.
- Provides detailed information about each flight, including ICAO24, callsign, origin country, velocity, altitude, bearing, and squawk.

## Technologies Used
- Python (Flask)
- JavaScript (Leaflet.js)
- HTML/CSS
- OpenSky Network API

## Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Bravionics/flight-tracker.git
   ```
2. Navigate to the project directory:
   ```sh
   cd flight-tracker
   ```
3. Install the required Python packages:
   ```sh
   pip install -r requirements.txt
   ```
4. Run the application:
   ```sh
   python main.py
   ```

## Usage
1. Open a web browser and go to `http://127.0.0.1:5000/`.
2. The map will display real-time flight data over Ukraine.