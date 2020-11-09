import React from "react";
import { usePlayer } from "../../context/usePlayer";

import { Container } from "./styles";

function SongInfo() {
  const { currentSong } = usePlayer();

  return (
    <Container>
      <img src={currentSong.cover} alt={currentSong.name} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </Container>
  );
}

export default SongInfo;
