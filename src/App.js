import "./App.css";
import RoutesTable from "./components/AntDesign/AntDesign";
import Map from "./components/Leaflet/Leaflet";

function App() {
  return (
    <div className="App">
      <RoutesTable className="table"/>
      <Map />
    </div>
  );
}

export default App;
