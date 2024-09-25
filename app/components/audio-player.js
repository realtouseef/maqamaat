import React, { useRef, useState, useEffect } from "react";
import {
  BackwardSVG,
  ForwardSVG,
  PauseSVG,
  PlaySVG,
  VolumeSVG,
} from "../assets/icons";

const CustomAudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // volume state (range: 0.0 to 1.0)

  // Toggle play/pause
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update current time as the audio plays
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Forward 10 seconds
  const handleForward = () => {
    audioRef.current.currentTime += 10;
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Rewind 10 seconds
  const handleRewind = () => {
    audioRef.current.currentTime -= 10;
  };

  // Set audio duration once it's loaded
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  // const increaseVolume = () => {
  //   let newVolume = Math.min(volume + 0.1, 1); // Increase volume in 0.1 steps
  //   audioRef.current.volume = newVolume;
  //   setVolume(newVolume);
  // };

  const decreaseVolume = () => {
    let newVolume = Math.max(volume - 0.1, 0); // Decrease volume in 0.1 steps
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  // Format time in mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 border shadow-xl p-4">
      <div className="flex items-center justify-center gap-x-5">
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          src={src} // Replace with your audio file
        />

        <div className="text-center space-x-5">
          <button onClick={handleRewind}>
            <BackwardSVG className="text-3xl" />
          </button>
          <button onClick={togglePlayPause}>
            {isPlaying ? <PauseSVG /> : <PlaySVG />}
          </button>
          <button onClick={handleForward}>
            <ForwardSVG />
          </button>
        </div>
        <div className="time-info">
          <span className="text-black font-bold text-xs">
            {formatTime(currentTime)}
          </span>{" "}
          /{" "}
          <span className="text-gray-600 font-bold text-xs">
            {formatTime(duration)}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className=" mt-2 h-1 bg-gray-500 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-gray-500"
        />

        <div className="flex items-center justify-between mt-4 space-x-4">
          <button onClick={decreaseVolume}>
            <VolumeSVG />
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-1 bg-gray-500 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-gray-500"
          />

          {/* <button
            onClick={increaseVolume}
            className="text-white bg-gray-700 p-2 rounded-full hover:bg-gray-600"
          >
            🔊
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CustomAudioPlayer;
