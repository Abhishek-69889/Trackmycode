import React from 'react';

const QuizSection = ({ onCardClick }) => {
  const items = [
  { title: 'Frontend Quiz', link: 'https://frontendquizzer.netlify.app/' },
  // { title: 'Python', link: '/python-quiz' }
];


  return (
    <div id="quiz">
      <h1 className="text-3xl sm:text-2xl text-center mt-12 font-semibold tracking-tight text-gray-900">
        Quizzes
      </h1>
      <p className="text-md sm:text-xl lg:text-md font-medium mt-2 mx-3 text-gray-600">
        Test and solidify your concepts with targeted quizzes.
      </p>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {items.map((item, index) => (
    <a
      key={index}
      href={item.link}
      className="p-6 bg-white rounded-xl shadow hover:shadow-md hover:scale-105 hover:bg-blue-50 transition-transform duration-300 cursor-pointer block"
    >
      <h2 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h2>
      <p className="text-gray-700 text-sm">
        Test your skills in <span className="font-semibold text-blue-600">{item.title}</span>.
      </p>
    </a>
  ))}
</section>

    </div>
  );
};

export default QuizSection;