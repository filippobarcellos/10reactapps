import React, { useState, useRef } from "react";
import data from "./data";
import { GlobalStyle } from "./styles";

import Player from "./components/Player";
import SongInfo from "./components/SongInfo";
import Sidebar from "./components/Sidebar";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const audioRef = useRef(null);

  return (
    <div className="App">
      <GlobalStyle />
      <SongInfo currentSong={currentSong} />
      <Player audioRef={audioRef} currentSong={currentSong} />
      <Sidebar
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
