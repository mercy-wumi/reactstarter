import React, { useState } from 'react';

const UseStateObject = () => {
  const [self, setSelf] = useState({
    fname: 'Mercy',
    lname: 'Adams',
    gender: 'Female',
    interest: 'Baking'
  })
  const handleClick = () => {
    setSelf({ ...self, interest: 'Tech' })
  }
  return (
    <>
      <div>
        <p>Name: {self.fname + ' ' + self.lname}</p>
        <p>Gender: {self.gender}</p>
        <p>Interest: {self.interest}</p>
      </div>
      <button onClick={handleClick} className='btn'>change Interest</button>
    </>
  );
};

export default UseStateObject;
