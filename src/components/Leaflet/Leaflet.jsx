import React from "react";
// import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";

function Map({ selectedRoute }) {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={1} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {selectedRoute && (
        <>
          <Polyline positions={selectedRoute.points.map((point) => [point.lat, point.lng])} />
        </>
      )}
    </MapContainer>
  );
}

export default Map;
