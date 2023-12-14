// HomePage.js
import React from 'react';
import '../CSS/home.css'
import image from '../CSS/nas.webp'

const HomePage = () => {
  return (
    <div className="home-page-container">
    <div className="info__section">
      <div className="image-container">
        <img src={image} alt="Description of the image" />
      </div>
      <div className="text-container">
        <h1><span>North American Stainless is part of the Acerinox Group </span></h1>
        <p>
          Founded in 1990, North American Stainless (NAS) has undertaken several phases of expansion to become the largest, fully integrated stainless steel producer in the U.S. Although we have achieved much in a short period of time, we remain focused on being the leading provider of high-quality stainless steel in the Western Hemisphere.
        </p>
      </div>
    </div>



      <div className="challenge-section card">
        <h1>"We have a great challenge: What we don’t manufacture using the Acerinox values will be made by others with less respect."</h1>
        <h2>"A company can’t change the world, but it can make a better world for those with whom it interacts." - Bernardo Valezquez.</h2>
      </div>

      <div className="card__container">

      
      <div className="mission-section card">
        <h1>Mission</h1>
        <p>To create the most appropriate high-performance materials for each application, thus contributing to the progress and quality of life of a sustainable society.</p>
      </div>

      <div className="vision-section card">
        <h1>Vision</h1>
        <p>To become a global supplier that responds to present and future needs with the widest choice of materials, solutions, and services, while placing the customer at the center of our business. To distinguish ourselves as part of the transition towards a new circular economy through the efficient production of stainless steels and high-performance alloys that respect the environment.</p>
      </div>

      

      <div className="values-section card">
        <h1>Values</h1>
        <p>Safety – Sustainability – Employer of Choice – Integrity – Commitment – Long-term Focus – Excellence – Innovation – Quality</p>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
