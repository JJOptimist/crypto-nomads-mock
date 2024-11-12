;import React, { useState } from 'react';

interface IconButtonProps {
  type: 'star' | 'checkmark';
}

const IconButton: React.FC<IconButtonProps> = ({ type }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const iconStyles = {
    fill: isActive ? (type === 'star' ? 'yellow' : 'green') : 'gray',
    cursor: 'pointer',
    width: '24px',
    height: '24px'
  };

  return (
    <div onClick={toggleActive}>
      {type === 'star' ? (
        <svg style={iconStyles} viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ) : (
        <svg style={iconStyles} viewBox="0 0 24 24">
          <path d="M9 16.2l-3.5-3.5L4 14l5 5 12-12-1.5-1.5L9 16.2z" />
        </svg>
      )}
    </div>
  );
};

export default IconButton; 