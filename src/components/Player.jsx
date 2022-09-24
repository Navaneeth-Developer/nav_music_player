import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faL,
} from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";

const Player = ({ currentSong,isPlaying, setIsPlaying }) => {
  // refs
  const audioRef = useRef(null);

  //EventHandlers
  const playSongHandler = () => {
    if(isPlaying){
        audioRef.current.pause();
        setIsPlaying(false);
    }else{
        audioRef.current.play();
        setIsPlaying(true);
    }
  };

  return (
    <div className="player">
      <div className="time-controller">
        <p>Start time</p>
        <input type="range" name="" id="" />
        <p>End time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={faPlay}
        />
        <FontAwesomeIcon className="skip-right" size="2x" icon={faAngleRight} />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
