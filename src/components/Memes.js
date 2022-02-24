import React from 'react';
import Meme from './Meme';
function Memes({ memes, removeMeme }) {
  return (
    <div className="memes--section">
      <div className="memes--title">
        <h2>The Memes</h2>
        <div className="memes--underline"></div>
      </div>
      <div className="memes--content">
        {memes.map((meme) => {
          return <Meme key={meme.id} {...meme} removeMeme={removeMeme}></Meme>;
        })}
      </div>
    </div>
  );
}

export default Memes;
