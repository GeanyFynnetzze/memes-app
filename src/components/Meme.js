import React, { useState } from 'react';
function Meme({ id, name, url, removeMeme }) {
  const [readMore, setReadMore] = useState(false);
  const infoText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const toggleReadMore = () => {
    setReadMore((prevValue) => {
      return !prevValue;
    });
  };
  return (
    <div className="meme--section">
      <img src={url} alt={name} />
      <div className="meme--info">
        <h1>{name}</h1>
        <h2>
          {readMore ? infoText : `${infoText.substring(0, 147)}...`}
          <button className="meme--show" onClick={toggleReadMore}>
            {readMore ? 'Show less' : 'Show More'}
          </button>
        </h2>
        <button className="meme--button" onClick={() => removeMeme(id)}>
          Not interested
        </button>
      </div>
    </div>
  );
}

export default Meme;
