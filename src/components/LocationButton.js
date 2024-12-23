import React from 'react';

const LocationButton = ({ locationName, onClick }) => {
  return (
    <button onClick={onClick} style={{ margin: '10px', padding: '10px 20px' }}>
      {locationName}
    </button>
  );
};

export default LocationButton;
