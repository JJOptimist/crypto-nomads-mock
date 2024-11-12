
import Slider from "react-slick";

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide"><h3>Slide 1</h3></div>
        <div className="slide"><h3>Slide 2</h3></div>
        <div className="slide"><h3>Slide 3</h3></div>
        <div className="slide"><h3>Slide 4</h3></div>
      </Slider>
    </div>
  );
};

export default CustomSlider;
