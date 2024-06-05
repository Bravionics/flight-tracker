from flask import Flask, jsonify, render_template
from opensky_api import OpenSkyApi
import json

app = Flask(__name__)
api = OpenSkyApi()


def get_ukr_state_vectors():
    states = api.get_states(bbox=(39.9988, 54.8941, 16.8983, 50.5472))

    flight_data = []
    for s in states.states:
        flight = {
            "ICAO24": s.icao24,
            "Callsign": s.callsign,
            "OriginCountry": s.origin_country,
            "longitude": s.longitude,
            "latitude": s.latitude,
            "BaroAltitude": s.baro_altitude,
            "TrueTrack": s.true_track,
            "Velocity": s.velocity,
            "Squawk": s.squawk
        }
        flight_data.append(flight)

    # print(json.dumps(flight_data, indent=4))
    return flight_data

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/flights')
def flights():
    flight_data = get_ukr_state_vectors()
    return jsonify(flight_data)

if __name__ == '__main__':
    app.run(debug=True)
