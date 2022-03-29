import React, { useState } from 'react';

const ErrorExample = () => {
  const [language, setLanguage] = useState('English');
  const handleClick = () => {
    setLanguage('Spanish');
  }
  const style = {
    backgroundColor: 'teal',
    padding: '10px 20px',
    color: 'white',
    border: '0px',
    fontSize: '18px',
    borderRadius: '20px',
    cursor: 'pointer',
    marginTop: '20px'
  }
  return (
    <div>
      <h2>{language}</h2>
      <button style={style} onClick={handleClick}>Change Language</button>
    </div>

  )

};

export default ErrorExample;
