import React from "react";

import { Container } from "./styles";

function SongInfo({ currentSong }) {
  return (
    <Container>
      <img src={currentSong.cover} alt={currentSong.name} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </Container>
  );
}

export default SongInfo;
