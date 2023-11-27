import React from "react";
import LearningSvg from "../assets/learning.svg";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 max-w-7xl mx-auto py-10 max-xl:px-10">
      <div className="hero-left flex flex-col justify-center items-center">
        <h2 className="text-4xl">
          Smarter Learning With AI Generated Flashcards
        </h2>
        <p className="text-lg mt-5">
          Welcome to our AI-Enhanced Flashcard Application - a revolutionary
          tool designed to transform learning and education. This application
          merges traditional flashcard learning with cutting-edge AI technology,
          offering a personalized and interactive learning experience. Whether
          you're a student, educator, or a lifelong learner, our application is
          tailored to fit your unique learning style.
        </p>
      </div>
      <div className="hero-right flex justify-center">
        <img src={LearningSvg} alt="Smarter learning with flashcards" className="max-xl:w-96" />
      </div>
    </div>
  );
};

export default Hero;
