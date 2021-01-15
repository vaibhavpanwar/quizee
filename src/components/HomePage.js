import React from "react";
import "./Home.css";
import cricketImage from "../assets/cricket.jpg";
import bollyImage from "../assets/bollywood.jpeg";
import footballImage from "../assets/football.jpg";
import { Link } from "react-router-dom";
import worldImage from "../assets/world.jpg";
import hockeyImage from "../assets/hockey.jpg";
import wweImage from "../assets/wwe.jpg";
const HomePage = () => {
  return (
    <>
      <section className="quiz-card-container">
        <div className="card">
          <img alt="fotu" src={worldImage} />
          <div className="info">
            <h1>World Capital Quiz</h1>
            <p>Lor fjfe fnrioef fir3of f3jrbfc ifcrobfc nfjir33bfh foi3rhf</p>
            <Link to="quiz/world-capital">Start Quiz</Link>
          </div>
        </div>
        <div className="card">
          <img alt="fotu" src={bollyImage} />
          <div className="info">
            <h1>Bollywood Quiz</h1>
            <p>Lor fjfe fnrioef fir3of f3jrbfc ifcrobfc nfjir33bfh foi3rhf</p>
            <Link to="quiz/bollywood">Start Quiz</Link>
          </div>
        </div>
        <div className="card">
          <img alt="fotu" src={cricketImage} />
          <div className="info">
            <h1>Cricket Quiz</h1>
            <p>Lor fjfe fnrioef fir3of f3jrbfc ifcrobfc nfjir33bfh foi3rhf</p>
            <Link to="quiz/cricket">Start Quiz</Link>
          </div>
        </div>
        <div className="card">
          <img alt="fotu" src={hockeyImage} />
          <div className="info">
            <h1>Hockey Quiz</h1>
            <p>Lor fjfe fnrioef fir3of f3jrbfc ifcrobfc nfjir33bfh foi3rhf</p>
            <Link to="quiz/hockey">Start Quiz</Link>
          </div>
        </div>
        <div className="card">
          <img alt="fotu" src={footballImage} />
          <div className="info">
            <h1>Football Quiz</h1>
            <p>Lor fjfe fnrioef fir3of f3jrbfc ifcrobfc nfjir33bfh foi3rhf</p>
            <Link to="quiz/football">Start Quiz</Link>
          </div>
        </div>
        <div className="card">
          <img alt="fotu" src={wweImage} />
          <div className="info">
            <h1>WWE Quiz</h1>
            <p>Lor fjfe fnrioef fir3of f3jrbfc ifcrobfc nfjir33bfh foi3rhf</p>
            <Link to="quiz/wwe">Start Quiz</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
