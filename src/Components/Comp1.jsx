import React from 'react'

const Comp1 = ([Count, onClickHandler]) => {
    const handleClick = () => onClickHandler();
  return (
    <div>
      <p>{Count}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default Comp1
