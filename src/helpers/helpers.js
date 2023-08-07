import axios from "axios";

// Функция для получения полилинии маршрута с API OSRM
export default async function fetchRoutePolyline(startPoint, endPoint) {
    const baseUrl = "http://router.project-osrm.org/route/v1"; // Базовый URL API OSRM
  const profile = "driving";
  const coordinates = `${startPoint[1]},${startPoint[0]};${endPoint[1]},${endPoint[0]}`;


  try {
    const response = await axios.get(`${baseUrl}/${profile}/${coordinates}`);
    const polyline = response.data.routes[0].geometry;
    return polyline;
  } catch (error) {
    console.error("Error fetching route:", error);
    throw error;
  }
}

// Пример использования функции
const startPoint = [59.84660399, 30.29496392]; // Широта и долгота начальной точки
const endPoint = [59.82934196, 30.42423701]; // Широта и долгота конечной точки

fetchRoutePolyline(startPoint, endPoint)
  .then((polyline) => {
    console.log("Route polyline:", polyline);
    // Далее вы можете использовать полученную полилинию для отображения маршрута на карте с помощью Leaflet
  })
  .catch((error) => {
    console.error("Error:", error);
  });
