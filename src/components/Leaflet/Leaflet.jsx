import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
// import "./Map.css";

function Map() {
  const selectedRoute = useSelector(
    (state) => state.routes.selectedRoute,
    (prev, next) => prev === next // Ваша кастомная функция сравнения
  );

  useEffect(() => {
    // В этом блоке можно добавить логику, которая будет выполняться при изменении выбранного маршрута
    console.log("Selected route has changed:", selectedRoute);
    // Здесь можно также добавить обновление состояния, если это необходимо
  }, [selectedRoute]); // Указываем selectedRoute как зависимость

  return (
    <MapContainer center={[51.505, -0.09]} zoom={10} >
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
