import React, { useState } from 'react';
import './all.css';
import IconButton from './IconButton';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onStatusChange: (status: 'main' | 'interested' | 'going') => void;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onStatusChange }) => {
  const [isStarActive, setIsStarActive] = useState(false);
  const [isCheckActive, setIsCheckActive] = useState(false);

  const updateStatus = () => {
    if (isCheckActive) {
      onStatusChange('going');
    } else if (isStarActive) {
      onStatusChange('interested');
    } else {
      onStatusChange('main');
    }
  };

  const handleStarToggle = (isActive: boolean) => {
    setIsStarActive(isActive);
    updateStatus();
  };

  const handleCheckToggle = (isActive: boolean) => {
    setIsCheckActive(isActive);
    updateStatus();
  };

  return (
    <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="card-content">
        <div className="card-text">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-icons">
          <IconButton type="star" onToggle={handleStarToggle} />
          <IconButton type="checkmark" onToggle={handleCheckToggle} />
        </div>
      </div>
    </div>
  );
};

export default Card;
