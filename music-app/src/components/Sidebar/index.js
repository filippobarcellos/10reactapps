import React from "react";
import Song from "../Song";

import { Container, SongsList } from "./styles";

function Sidebar({ audioRef, songs, setCurrentSong }) {
  return (
    <Container>
      <h2>Library</h2>
      <SongsList>
        {songs.map((song) => (
          <Song
            audioRef={audioRef}
            key={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </SongsList>
    </Container>
  );
}

export default Sidebar;
