import "./App.css";
import Header from "./components/Header";
import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantie"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="ModelS"
          desc="$69,420"
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt=" Custom Order"
          leftBtnLink=""
          rightBtnTxt="Learn More"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item />
      </div>
    </div>
  );
}

export default App;
