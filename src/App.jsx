import "./App.css";
import CarouselComponent from "./components/CarouselComponent";
import HeaderComponent from "./components/HeaderComponent";
import ImageSlider from "./components/ImageSlider";

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <CarouselComponent />
      <ImageSlider />
    </div>
  );
};

export default App;
