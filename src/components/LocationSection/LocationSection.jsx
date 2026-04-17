import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../styles/home.css";

/* Fix Leaflet marker icon issue in React */
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const locations = [
  { name: "Mumbai", lat: 19.0760, lng: 72.8777 },
  { name: "Pune", lat: 18.5204, lng: 73.8567 },
  { name: "Bangalore", lat: 12.9716, lng: 77.5946 },
  { name: "Delhi", lat: 28.7041, lng: 77.1025 },
  { name: "Hyderabad", lat: 17.3850, lng: 78.4867 },
];

const LocationSection = () => {
  return (
    <section className="location section-padding" id="location">
      <div className="container location-container">

        {/* Left Content */}
        <div className="location-content reveal">
          <span className="hero-subtitle">Our Presence</span>

          <h2>We Are Now Available in 10 Locations</h2>

          <p>
            Expanding rapidly to bring world-class sports training to your
            doorstep. Our facilities are strategically located across major
            cities to ensure accessibility for all aspiring athletes.
          </p>

          <ul className="location-list">
            <li><span>📍</span> Mumbai</li>
            <li><span>📍</span> Pune</li>
            <li><span>📍</span> Bangalore</li>
            <li><span>📍</span> Delhi</li>
            <li><span>📍</span> Hyderabad</li>
          </ul>

          <button className="btn btn-primary">
            Find Your Nearest Center
          </button>
        </div>

        {/* Right Map */}
        <div className="location-map">
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            style={{ height: "400px", width: "100%" }}
          >

            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />

            {locations.map((loc, index) => (
              <Marker key={index} position={[loc.lat, loc.lng]}>
                <Popup>
                  <strong>{loc.name}</strong> <br />
                  Adip Sports Academy
                </Popup>
              </Marker>
            ))}

          </MapContainer>
        </div>

      </div>
    </section>
  );
};

export default LocationSection;