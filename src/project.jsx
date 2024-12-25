import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="text-center py-16 bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Task Manager */}
        <div className="bg-primary p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Task Manager</h3>
          <p className="mt-2">
            A task management app that allows users to add, edit, and organize tasks based on priority.
          </p>
        </div>

        {/* Calculator */}
        <div className="bg-secondary p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Calculator</h3>
          <p className="mt-2">A fully functional calculator built using React.js.</p>
        </div>

        {/* BMI Calculator */}
        <div className="bg-accent p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">BMI Calculator</h3>
          <p className="mt-2">An app to calculate Body Mass Index (BMI) based on user input.</p>
        </div>

        {/* Digital Clock */}
        <div className="bg-primary p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Digital Clock</h3>
          <p className="mt-2">
            A live digital clock displaying the current time in HH:MM:SS format.
          </p>
        </div>

        {/* Number Guessing Game */}
        <div className="bg-secondary p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Number Guessing Game</h3>
          <p className="mt-2">
            A game where users guess a randomly generated number, with hints provided.
          </p>
        </div>

        {/* Background Color Switcher */}
        <div className="bg-accent p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Background Color Switcher</h3>
          <p className="mt-2">
            A simple app to switch background colors dynamically on button click.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;