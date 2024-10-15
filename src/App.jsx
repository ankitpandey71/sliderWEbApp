import "./App.css";
import CarouselComponent from "./components/CarouselComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ImageSlider from "./components/ImageSlider";

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <CarouselComponent />
      <ImageSlider />
      <FooterComponent />
    </div>
  );
};

export default App;
