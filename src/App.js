import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import initialState from "./config/data";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Game from "./pages/Game";

import "./App.css";

export default function App() {
  const [quizzes, setQuizzes] = useState(initialState.quizzes);
  const [liveQuiz, setLiveQuiz] = useState([]);
  console.log(quizzes);

  useEffect(() => {
    console.log("app mounted");
    console.log("liveQuiz", liveQuiz);
  }, [liveQuiz]);

  const setCurrentQuiz = (quizId) => {
    quizzes.forEach((currentQuiz, index) => {
      if (currentQuiz.id === quizId) {
        console.log("quizzes[index]", quizzes[index]);
        setLiveQuiz([quizzes[index]]);
        console.log("liveQuiz", liveQuiz);
      }
    });
  };

  return (
    <Router>
      <div className="App container">
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
          <Route path={`/game/:quizId`}>
            <Game setCurrentQuiz={setCurrentQuiz} data={liveQuiz} />
          </Route>
          <Route path="/">
            <Home quizzes={quizzes} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
