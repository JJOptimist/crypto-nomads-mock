import React from 'react';
import './App.css'; // Import any global styles here
import SliderWithCards from './components/SliderWithCards'; // Adjust the path as needed
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App: React.FC = () => {
  return (
    <div className="App">
      {/* First Section: Main Events */}
      <div className="slider-section">
        <h2 className="section-title">Main Events</h2>
        <SliderWithCards />
      </div>

      {/* Second Section: Interested In */}
      <div className="slider-section">
        <h2 className="section-title">Interested In</h2>
        <SliderWithCards />
      </div>

      {/* Third Section: Going To */}
      <div className="slider-section">
        <h2 className="section-title">Going To</h2>
        <SliderWithCards />
      </div>
    </div>
  );
};

export default App;
