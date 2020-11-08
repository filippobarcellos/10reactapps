import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import { Container, TimeControl, PlayerControl } from "./styles";

function Player({ currentSong, audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);
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

  return (
    <Container>
      <TimeControl>
        <span>{formatTime(songInfo.currentTime)}</span>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          type="range"
          onChange={dragHandler}
        />
        <span>{formatTime(songInfo.duration)}</span>
      </TimeControl>

      <PlayerControl>
        <button>
          <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        </button>
        <button>
          <FontAwesomeIcon
            icon={isPlaying ? faPause : faPlay}
            size="2x"
            onClick={playSongHandler}
          />
        </button>
        <button>
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
