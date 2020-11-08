import React from "react";

import { Container } from "./styles";

function Song({ audioRef, song, setCurrentSong }) {
  const handlerCurrentSong = () => {
    setCurrentSong(song);
    audioRef.current.play();
  };

  return (
    <Container onClick={handlerCurrentSong}>
      <img src={song.cover} alt={song.name} />
      <div>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </Container>
  );
}

export default Song;
