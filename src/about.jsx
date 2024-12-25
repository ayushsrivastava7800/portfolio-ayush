import React from 'react';

const About = () => {
  return (
    <section id="about" className="text-center py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="container mx-auto px-4">
        {/* Technical Engineering-Themed Image */}
        <div className="flex justify-center mb-8">
          <img 
            src="https://media.istockphoto.com/id/1502289545/vector/technology-of-software-development-web-design-programming-concept-program-code-on-screen.jpg?s=612x612&w=0&k=20&c=IjkXl6uCuINBjLKmCq95TnhSQaHSAcJE2HzcNK42tv4=" 
            alt="Technical Engineering" 
            className="rounded-lg shadow-lg w-80 h-50" 
          />
        </div>
        
        {/* About Text */}
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Ayush Srivastava</h1>
        <p className="text-lg leading-relaxed">
        "Motivated front-end developer with hands-on experience in building dynamic, user-friendly web applications and delivering seamless UI/UX designs.
         Proficient in HTML, CSS, JavaScript, and modern JavaScript frameworks like React.js, with knowledge of back-end technologies such as MongoDB and MySQL. 
         Proven ability to design and implement responsive, visually appealing interfaces, showcased through personal and professional projects. Strong collaboration skills and a passion for leveraging cutting-edge tools and techniques to enhance user experiences. 
         Dedicated to continuous learning and improving front-end development practices.".
        </p>
      </div>
    </section>
  );
};

export default About;


//    I’m a passionate frontend developer with a strong foundation in building clean, responsive, and user-friendly applications. 
//My expertise lies in React.js, Tailwind CSS, JavaScript, and database management. With a knack for problem-solving, 
//I thrive on creating efficient solutions to technical challenges.