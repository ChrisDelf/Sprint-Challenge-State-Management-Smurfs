import React from 'react';

const SmurfCard = ({smurf}) => {
  console.log('SMurf', smurf);
  return (
    <div>
      <h2>{smurf.name}</h2>
      <h2>{smurf.age}</h2>
      <h2>{smurf.height}</h2>
    </div>
  );
};

export default SmurfCard;
