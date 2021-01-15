import React from "react";
import { Link } from "react-router-dom";

const QuizEnd = ({ quizdata, score }) => {
  return (
    <div className="quiz-end">
      <h1>Your Quiz is Over, Your Score is : {score}</h1>
      <Link className="c-btn" to="/">
        Home
      </Link>
      <p>Corrrect answers for quiz are:</p>
      {quizdata.map((quiz) => (
        <div key={quiz.id}>
          <h4>{quiz.question}</h4>
          <p>{quiz.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default QuizEnd;
