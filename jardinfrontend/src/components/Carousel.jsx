import Garden1 from "../assets/jardin1.jpg";
import Garden2 from "../assets/jardin2.jpg";
import Garden3 from "../assets/jardin3.jpg";
import Garden4 from "../assets/jardin4.jpg";

function Carousel() {
  return (
    <div className="carousel carousel-center w-196 h-96 p-4 space-x-4 bg-transparent rounded-box">
      <div className="carousel-item">
        <img
          src={Garden1}
          className="rounded-box w-auto h-auto object-contain"
          alt="Imagen 1"
        />
      </div>
      <div className="carousel-item">
        <img
          src={Garden2}
          className="rounded-box w-auto h-auto object-contain"
          alt="Imagen 1"
        />
      </div>
      <div className="carousel-item">
        <img
          src={Garden3}
          className="rounded-box w-auto h-auto object-contain"
          alt="Imagen 1"
        />
      </div>
      <div className="carousel-item">
        <img
          src={Garden4}
          className="rounded-box w-auto h-auto object-contain"
          alt="Imagen 1"
        />
      </div>
      <div className="carousel-item">
        <img
          src={Garden4}
          className="rounded-box w-auto h-auto object-contain"
          alt="Imagen 1"
        />
      </div>
      <div className="carousel-item">
        <img
          src={Garden4}
          className="rounded-box w-auto h-auto object-contain"
          alt="Imagen 1"
        />
      </div>
    </div>
  );
}

export default Carousel;
