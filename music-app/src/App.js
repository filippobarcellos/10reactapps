import React, { useState, useRef } from "react";
import { PlayerProvider } from "./context/usePlayer";
import { GlobalStyle } from "./styles";

import Player from "./components/Player";
import SongInfo from "./components/SongInfo";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  return (
    <PlayerProvider>
      <GlobalStyle />
      <Menu />
      <SongInfo />
      <Player audioRef={audioRef} />
      <Sidebar audioRef={audioRef} />
    </PlayerProvider>
  );
}

export default App;
