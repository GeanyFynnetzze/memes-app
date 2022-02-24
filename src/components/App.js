import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Memes from './Memes';
const url = 'https://api.imgflip.com/get_memes';
function App() {
  const [loading, setLoading] = useState(true);
  const [memes, setMemes] = useState([]);

  const fetchMemes = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      const firstItems = data.data.memes;
      const actualMemes = [];
      //Random indexes so we could get 5 random items every time we render
      const firstIndex = Math.floor(Math.random() * (firstItems.length - 5));
      const secondIndex = firstIndex + 5;
      //to fetch only a few items from the API since
      // the call does not support a limit
      firstItems.slice(firstIndex, secondIndex).map((item) => {
        return actualMemes.push(item);
      });
      setMemes(actualMemes);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMemes();
  }, []);
  const removeMeme = (id) => {
    const newMemes = memes.filter((meme) => meme.id !== id);
    setMemes(newMemes);
  };
  console.log(memes);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (memes.length === 0) {
    return (
      <div className="no-memes--container">
        <div className="no-memes--text">
          <h2>No memes left ☹️</h2>
          <button className="refresh--button" onClick={() => fetchMemes()}>
            Refresh List
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="app-section">
      <Memes memes={memes} removeMeme={removeMeme} />
    </div>
  );
}

export default App;
