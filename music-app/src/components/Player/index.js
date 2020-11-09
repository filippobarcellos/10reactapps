import React, { useState } from "react";
import { usePlayer } from "../../context/usePlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import { Container, TimeControl, PlayerControl } from "./styles";

function Player({ audioRef }) {
  const {
    songs,
    currentSong,
    setCurrentSong,
    isPlaying,
    setIsPlaying,
  } = usePlayer();
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const updateTimeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
    });
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
  };

  const skipTrackHandler = (direction) => {
    const currentIndex = songs.findIndex((s) => s.id === currentSong.id);

    if (direction === "forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }

    if (direction === "back") {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }

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
    <Container>
      <TimeControl>
        <span>{formatTime(songInfo.currentTime)}</span>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
          onChange={dragHandler}
        />
        <span>{formatTime(songInfo.duration)}</span>
      </TimeControl>

      <PlayerControl>
        <button onClick={() => skipTrackHandler("back")}>
          <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        </button>
        <button>
          <FontAwesomeIcon
            icon={isPlaying ? faPause : faPlay}
            size="2x"
            onClick={playSongHandler}
          />
        </button>
        <button onClick={() => skipTrackHandler("forward")}>
          <FontAwesomeIcon icon={faAngleRight} size="2x" />
        </button>
        <audio
          ref={audioRef}
          src={currentSong.audio}
          onTimeUpdate={updateTimeHandler}
          onLoadedMetadata={updateTimeHandler}
        ></audio>
      </PlayerControl>
    </Container>
  );
}

export default Player;
