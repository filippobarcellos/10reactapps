import React, { createContext, useContext, useState } from "react";
import data from "../data";

const PlayerContext = createContext();

export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider = ({ children }) => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <PlayerContext.Provider
      value={{
        songs,
        currentSong,
        setCurrentSong,
        isPlaying,
        setIsPlaying,
        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
