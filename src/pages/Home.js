import React from "react";
import { useHistory } from "react-router-dom";
import CategoryCard from "../components/Cards/CategoryCard";
import FloatingActionButton from "../components/FloatingActionButton";
import Header from "../components/Header";

const Home = ({ quizzes }) => {
  console.log(quizzes);

  let history = useHistory();
  console.log({ history: history.location.pathname });

  const handleCreateNewQuiz = () => {
    history.push("/create");
  };

  const handleGoToGame = (event, quizId) => {
    console.log(quizId);
    history.push(`/game/${quizId}`);
  };

  return (
    <div className="page-home">
      <Header title="Exquizite" />
      <section className="select__quiz">
        {quizzes &&
          quizzes.map((quiz) => (
            <CategoryCard
              id={quiz.id}
              key={quiz.id}
              handleGoToGame={(event) => handleGoToGame(event, quiz.id)}
              name={quiz.name}
            />
          ))}
      </section>

      <FloatingActionButton to="create" handleClick={handleCreateNewQuiz} />
    </div>
  );
};

export default Home;
