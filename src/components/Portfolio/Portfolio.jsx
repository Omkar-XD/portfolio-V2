import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useTranslation } from 'react-i18next';

import anon from '../../assets/portfolio/anonconnect.jpg';
import news from '../../assets/portfolio/news portal.png';
import echo from '../../assets/portfolio/echo.png';
import port from '../../assets/portfolio/portfolio v1.jpg';
import heart from  '../../assets/portfolio/heart.png';
import gen1 from '../../assets/portfolio/gen1.png';

const projects = [
  { id: 1, title: 'project1Title', image: echo, description: 'project1Description', tech: ["Vite", "Next.js", "TypeScript","TailwindCSS","FireaBase","Gemini API"], demo: 'https://echo-write-ai-nu.vercel.app/', repo: 'https://github.com/Omkar-XD/EchoWrite-AI' },
  { id: 2, title: 'project2Title', image: anon, description: 'project2Description', tech: ['Vite','React.js', 'JavaScript', 'TailwindCSS', 'FireBase'], demo: 'https://anon-connect-psi.vercel.app/', repo: 'https://github.com/Omkar-XD/AnonConnect' },
  { id: 3, title: 'project3Title', image: news, description: 'project3Description', tech: ['HTML', 'CSS', 'Python', 'Django Framework', 'Sqlite3', 'CMS System'], repo: 'https://github.com/Omkar-XD/Online-News-Portal' },
  { id: 4, title: 'project4Title', image: port, description: 'project4Description', tech: ['Vite', 'React', 'Web3forms', 'Tailwind CSS'], demo: 'https://omkarcportfolio.netlify.app', repo: 'https://github.com/Omkar-XD/portfolio' },
  { id: 5, title: 'project5Title', image: heart, description: 'project5Description', tech: ['HTML','CSS', 'Python', 'ML Algorithm', 'SCIKIT-Learn Lib' , 'Classification and Regression Model'], repo: 'https://github.com/Omkar-XD/Heart_Disease_Prediction_Project' },
  { id: 6, title: 'project6Title', image: gen1, description: 'project6Description', tech: ['Vercel','Next Js', 'Tailwind ', 'Shadcn', 'Firebase','Gemini AI'], demo: 'https://genzone.vercel.app/',repo: 'https://github.com/Omkar-XD/GenZOne' }

];

function Portfolio() {
  const { t } = useTranslation();
  const [modalData, setModalData] = useState(null);

  const handleViewMore = (project) => {
    setModalData(project);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <div id="projects" className="about py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl gradient-text font-bold text-center mb-12 text-gray-900">
        {t('portfolioTitle')}
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative BGblur rounded-xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={t(project.title)}
              className="w-full h-60 object-contain md:object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <div className="relative px-4 mb-5">
              <h3 className="text-2xl font-semibold gradient-text mt-5 mb-10">
                {t(project.title)}
              </h3>
              <div className="flex flex-col md:flex-row gap-2">
                {/* Demo Button */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white py-2 px-4 rounded-lg text-center transition-colors duration-300 hover:bg-green-700 flex items-center justify-center w-auto"
                >
                  <i className="bx bx-world text-xl mr-2"></i> {t('demo')}
                </a>

                {/* GitHub Repo Button (if available) */}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white py-2 px-4 rounded-lg text-center transition-colors duration-300 hover:bg-gray-900 flex items-center justify-center w-auto"
                  >
                    <i className="bx bxl-github text-xl mr-2"></i> GitHub
                  </a>
                )}

                {/* View More Button */}
                <button
                  onClick={() => handleViewMore(project)}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg text-center transition-colors duration-300 hover:bg-blue-700 flex items-center justify-center w-auto"
                >
                  <i className="bx bx-show-alt text-xl mr-2"></i> {t('viewMore')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 px-6 rounded-lg text-center transition duration-300 transform hover:scale-110"
          onClick={() => console.log('Load more projects or redirect')}
        >
          <a href=" " target="_blank" rel="noopener noreferrer">
            {t('viewMoreProjects')}
          </a>
        </button>
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
          <div className="relative BGblur rounded-xl shadow-xl p-8 max-w-lg w-full">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-100 hover:text-gray-400"
            >
              <i className="bx bx-x text-3xl"></i>
            </button>
            <img
              src={modalData.image}
              alt={t(modalData.title)}
              className="w-full h-60 object-contain rounded mb-4"
            />
            <h3 className="text-2xl font-bold gradient-text mb-4">{t(modalData.title)}</h3>
            <p className="text-white">{t(modalData.description)}</p>
            <div className="flex flex-wrap mt-4">
              {modalData.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm font-semibold mt-2 mr-2 px-2.5 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-6">
              {modalData.repo && (
                <a
                  href={modalData.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white py-2 px-4 rounded-lg text-center transition-colors duration-300 hover:bg-gray-900 flex items-center justify-center w-auto"
                >
                  <i className="bx bxl-github text-xl mr-2"></i> {t('github')}
                </a>
              )}
              <a
                href={modalData.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white py-2 px-4 rounded-lg text-center transition-colors duration-300 hover:bg-green-700 flex items-center justify-center w-auto"
              >
                <i className="bx bx-world text-xl mr-2"></i> {t('demo')}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
