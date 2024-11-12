
import Slider from "react-slick";
import Card from './Card';
import Bangkok from './Bangkok.jpg'; // Make sure the path is correct

const SliderWithCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const cardData = [
    { title: 'Card 1', description: 'Description 1', imageUrl: Bangkok },
    { title: 'Card 2', description: 'Description 2', imageUrl: Bangkok },
    { title: 'Card 3', description: 'Description 3', imageUrl: Bangkok },
    { title: 'Card 4', description: 'Description 4', imageUrl: Bangkok },
    { title: 'Card 5', description: 'Description 5', imageUrl: Bangkok },
    { title: 'Card 6', description: 'Description 6', imageUrl: Bangkok },
    // Add more cards as needed
  ];

  return (
    <Slider {...settings}>
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </Slider>
  );
};

export default SliderWithCards;
