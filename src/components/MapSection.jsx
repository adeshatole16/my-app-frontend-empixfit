import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/contact.css";

/* Fix marker icon issue */
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

/* Locations */
const locations = [
  { name: "Mumbai", lat: 19.076, lng: 72.8777 },
  { name: "Pune", lat: 18.5204, lng: 73.8567 },
  { name: "Bangalore", lat: 12.9716, lng: 77.5946 },
  { name: "Delhi", lat: 28.7041, lng: 77.1025 },
  { name: "Hyderabad", lat: 17.385, lng: 78.4867 },
];

const MapSection = () => {
  return (
    <section className="map-section reveal">
      <div className="container">

        <h2>Our Location</h2>

        <div className="map-wrapper">

          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            style={{ height: "450px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />

            {locations.map((loc, index) => (
              <Marker key={index} position={[loc.lat, loc.lng]}>
                <Popup>
                  <strong>{loc.name}</strong>
                  <br />
                  Adip Sports Academy
                </Popup>
              </Marker>
            ))}

          </MapContainer>

        </div>

        <p className="map-tagline">
          "We are expanding our sports training platform across multiple
          locations to help athletes and coaches connect and grow."
        </p>

      </div>
    </section>
  );
};

export default MapSection;