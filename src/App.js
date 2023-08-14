import "./App.css";
import RoutesTable from "./components/AntDesign/AntDesign";
import Map from "./components/Leaflet/Leaflet";

function App() {
  return (
    <div className="App">
      <RoutesTable className="table" />
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
}

export default App;
