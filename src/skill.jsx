import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="text-center py-16 bg-gradient-to-r from-green-400 to-teal-500 text-white">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Skill Items */}
        <div className="bg-primary p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">JavaScript</h3>
          <p className="mt-2">Expertise in modern JavaScript (ES6+).</p>
        </div>

        <div className="bg-secondary p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">React.js</h3>
          <p className="mt-2">Experience in building dynamic web applications.</p>
        </div>

        <div className="bg-accent p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Tailwind CSS</h3>
          <p className="mt-2">Efficient styling with utility-first framework.</p>
        </div>

        <div className="bg-primary p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">MongoDB</h3>
          <p className="mt-2">Experience in NoSQL database design and management.</p>
        </div>

        <div className="bg-secondary p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">SQL</h3>
          <p className="mt-2">Proficiency in relational database queries.</p>
        </div>

        <div className="bg-accent p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Problem-Solving</h3>
          <p className="mt-2">Adept at solving complex technical challenges.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;