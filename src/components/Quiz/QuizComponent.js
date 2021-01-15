import React, { useState, useEffect } from "react";
import "./Quiz.css";
import { CricketQuiz } from "./Quizdata";
import { WweQuiz } from "./Quizdata";
import { HockeyQuiz } from "./Quizdata";
import { BollywoodQuiz } from "./Quizdata";
import { FootballQuiz } from "./Quizdata";
import { CapitalQuiz } from "./Quizdata";
import QuizEnd from "./QuizEnd";
import Spinner from "./Spinner";

const QuizComponent = ({ match, history }) => {
  const [quizData, setQuizData] = useState();
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [quizEnd, setQuizEnd] = useState(false);

  useEffect(() => {
    if (match.params.quizid === "cricket") {
      setQuizData(CricketQuiz);
    } else if (match.params.quizid === "football") {
      setQuizData(FootballQuiz);
    } else if (match.params.quizid === "wwe") {
      setQuizData(WweQuiz);
    } else if (match.params.quizid === "bollywood") {
      setQuizData(BollywoodQuiz);
    } else if (match.params.quizid === "world-capital") {
      setQuizData(CapitalQuiz);
    } else if (match.params.quizid === "hockey") {
      setQuizData(HockeyQuiz);
    } else {
      history.pushState("/");
    }
  }, [quizData, history, match, quizData]);

  //to handle user's respinse
  const answerHandler = (response) => {
    setUserAnswer(response);
  };

  ////next button score handler
  const nextHandler = () => {
    if (quizData[index].answer === userAnswer) {
      setScore(1 + score);
    }
    setIndex(index + 1);
    setUserAnswer("");
  };

  const finishHandler = () => {
    if (quizData[index].answer === userAnswer) {
      setScore(1 + score);
    }
    setQuizEnd(true);
  };

  const Quiz =
    !quizData || quizData.length === 0 ? (
      <Spinner />
    ) : (
      <>
        <h1
          style={{
            textAlign: "center",
            color: "black",
            margin: "3px",
            textTransform: "uppercase",
          }}
        >
          {match.params.quizid} Quiz
        </h1>
        <p
          style={{
            width: "90%",
            margin: "6px auto",
            color: "rgb(13, 52, 58)",
            fontWeight: "bold",
          }}
        >
          Question {index + 1}/{quizData.length}
        </p>
        <section className="quiz-wrapper">
          <div className="question">
            <p>{quizData[index].question}</p>
          </div>
          <div className="options">
            <p
              className={`${
                quizData[index].option1 === userAnswer ? "selected" : null
              }`}
              onClick={() => answerHandler(quizData[index].option1)}
            >
              {quizData[index].option1}{" "}
            </p>
            <p
              className={`${
                quizData[index].option2 === userAnswer ? "selected" : null
              }`}
              onClick={() => answerHandler(quizData[index].option2)}
            >
              {quizData[index].option2}{" "}
            </p>
            <p
              className={`${
                quizData[index].option3 === userAnswer ? "selected" : null
              }`}
              onClick={() => answerHandler(quizData[index].option3)}
            >
              {quizData[index].option3}{" "}
            </p>
            <p
              className={`${
                quizData[index].option4 === userAnswer ? "selected" : null
              }`}
              onClick={() => answerHandler(quizData[index].option4)}
            >
              {quizData[index].option4}{" "}
            </p>
          </div>
          <div className="question-button">
            <button
              className={`${
                !userAnswer || index === quizData.length - 1 ? "disable" : null
              }`}
              disabled={!userAnswer || index === quizData.length - 1}
              onClick={nextHandler}
            >
              Next
            </button>
            <button
              className={`${
                !userAnswer || index < quizData.length - 1 ? "disable" : null
              }`}
              disabled={!userAnswer || index < quizData.length - 1}
              onClick={finishHandler}
            >
              Finish
            </button>
          </div>
        </section>
      </>
    );

  return !quizEnd ? Quiz : <QuizEnd quizdata={quizData} score={score} />;
};

export default QuizComponent;
