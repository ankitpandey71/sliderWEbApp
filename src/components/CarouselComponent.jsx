import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  return (
    <div>
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
        <div>
          <img
            src="https://images.pexels.com/photos/1375016/pexels-photo-1375016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            height="300px"
            width="500px"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/12492086/pexels-photo-12492086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            height="300px"
            width="500px"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            src="https://thumbs.dreamstime.com/z/tall-trees-kentucky-woods-332722998.jpg?ct=jpeg"
            height="300px"
            width="500px"
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
