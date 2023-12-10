import ReactPlayer from "react-player";
import { useState, useRef, useEffect } from "react";
import v1 from "./exp1~2.mp4";
import QuizComponent from "./quizeCpmp";
import { useSelector, useDispatch } from "react-redux";
import { setShowQuize } from '../store/action'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const VideoPlayer = () => {
  const dispatch = useDispatch();









  const [currentTime, setCurrentTime] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [playing, setPlaying] = useState(true);
  const playerRef = useRef(null);
  const handleTimeUpdate = (e) => {
    setCurrentTime(e.playedSeconds);


    const quizTime = 10;
    if (e.playedSeconds >= quizTime && !showQuiz) {
      console.log("show quiz", !showQuiz);
      // showQuize = true;  
      setShowQuiz(true);
      // dispatch(setShowQuize("true"));
      setPlaying(false);
      playerRef.current.pause();



    }
  };

  const quizeStat = useSelector(state => state.showQuiz)
  // useEffect(() => {
  //   console.log("quizeStat", quizeStat);
  //   setShowQuiz(quizeStat)
  // }, [showQuiz])


  // const handelClick = () => {
  //   setShowQuiz(false)
  //   setPlaying(true);
  // }
  return (
    <>
      <div
        style={{
          position: "relative",
          overflow: "hidden",

        }}
        className="w-100  rounded-4"
      >
        {/* {!showQuiz ? */}
        <ReactPlayer
          ref={playerRef}
          url={v1}
          playing={playing}
          controls={true}
          width="100%"
          height="auto"
          style={{
            disabled: true, Width: "800px",
          }}
          onProgress={handleTimeUpdate}
        />
        {/* : */}

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
            {/* <QuizComponent /> */}
            <Form>
              <fieldset >
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
                  <Form.Control id="disabledTextInput" placeholder="الاهتزاز يولد الحركه"
                    onChange={(e) => {
                      dispatch(setQuize(e.target.value))
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <h1 className="text-black">ما هي الفكرة العامة ؟</h1>
                  <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
                  <Form.Select id="disabledSelect">
                    <option>"الاهتزاز يولد الحركة</option>
                    <option>اللاصق</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    id="disabledFieldsetCheck"
                    label="Can't check this"
                  />
                </Form.Group>
                <Button type="button" onClick={(e) => {
                  handelClick()
                }}>Submit</Button>
              </fieldset>
            </Form>
          </div>
        )}
      </div>
    </>
  );
};

export default VideoPlayer;
