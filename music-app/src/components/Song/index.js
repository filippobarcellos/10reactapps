import React from "react";
import { usePlayer } from "../../context/usePlayer";

import { Container } from "./styles";

function Song({ audioRef, song }) {
  const { currentSong, setCurrentSong, isPlaying } = usePlayer();

  const handlerCurrentSong = () => {
    setCurrentSong(song);

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <Container isActive={song === currentSong} onClick={handlerCurrentSong}>
      <img src={song.cover} alt={song.name} />
      <div>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </Container>
  );
}

export default Song;
