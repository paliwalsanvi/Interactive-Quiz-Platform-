import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Quiz Platform!</h1>
      <Link to="/quiz">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default Home;
