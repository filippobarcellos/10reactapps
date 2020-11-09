import React from "react";
import { usePlayer } from "../../context/usePlayer";

import Song from "../Song";

import { Container, SongsList } from "./styles";

function Sidebar({ audioRef }) {
  const { songs, isSidebarOpen } = usePlayer();

  return (
    <Container isOpen={isSidebarOpen}>
      <h2>Library</h2>
      <SongsList>
        {songs.map((song) => (
          <Song audioRef={audioRef} key={song.id} song={song} />
        ))}
      </SongsList>
    </Container>
  );
}

export default Sidebar;
