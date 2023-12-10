import v1 from "./exp1~2.mp4"

import React, { useState, useRef, useEffect } from 'react';
import VideoPlayer from 'react-video-markers';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./VideoMarker.css"
const VideoMarkers = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showQuiz2, setShowQuiz2] = useState(false);

  const [isOpend, setisOpend] = useState(false);
  const playerRef = useRef(null);



  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleVolume = (value) => {
    setVolume(value);
  };

  const handleTimeUpdate = (e) => {
    const ammar = localStorage.getItem("ammar")
    const ammar2 = localStorage.getItem("ammar2")

    // console.log("e", Math.round(e.timeStamp / 1000));
    console.log("eds", e.target.currentTime);
    console.log("ammar", ammar);
    // & Math.round(e.target.currentTime) < 11
    // && e.target.currentTime < 10.20
    const quizTime = 10;
    console.log("show", showQuiz);
    console.log("Isopend", isOpend);

    if (e.target.currentTime >= 10 && !showQuiz) {
      if (ammar === "false") {
        setIsPlaying(false);
        setShowQuiz(true);
      }
    }
    if (e.target.currentTime >= 100 && !showQuiz2) {
      if (ammar2 === "false" && ammar === "true") {
        setIsPlaying(false);
        setShowQuiz2(true);
      }
    }

  };

  const handelClick = (e) => {



    setShowQuiz(false);
    setIsPlaying(true);
    setisOpend(true);

  }
  return (<>
    <div
      style={{
        position: "relative",
        overflow: "hidden",

      }}
      className="w-100  rounded-4"
    >
      <VideoPlayer
        url={v1}
        // ref={playerRef}
        isPlaying={isPlaying}
        volume={volume}
        width="100%"
        height="auto"
        onPlay={handlePlay}
        onPause={handlePause}
        onVolume={handleVolume}
        onProgress={(e) => { handleTimeUpdate(e) }}
        // seekStep={1}
        timeStart={0}

        markers={[
          { id: 1, time: 5, color: '#ffc837', title: 'Marker 1' },
          { id: 1, time: 100, color: '#ffc837', title: 'Marker 2' }
        ]}
      />
      {showQuiz && (
        <div
          className='bg-body-secondary'
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <h1>quize 1</h1>
          <button onClick={(e) => {
            handelClick(e)
          }}>
            save
          </button>

        </div>
      )}
      {showQuiz2 && (
        <div
          className='bg-body-secondary'
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <h2 className="text-center">  quiz 2</h2>
          <button onClick={() => {

            setShowQuiz2(false);
            setIsPlaying(true);
          }}>
            save quize2
          </button>

        </div>
      )}
    </div >

  </>
  );
};

export default VideoMarkers;