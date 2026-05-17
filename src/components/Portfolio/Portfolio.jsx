import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useTranslation } from 'react-i18next';

// PROJECT IMAGES
import risenshine from '../../assets/portfolio/risenshine.png';
import saraswati from '../../assets/portfolio/saraswati.png';
import legacy from '../../assets/portfolio/legacy.png';
import news from '../../assets/portfolio/news portal.png';
import chatbot from '../../assets/portfolio/chatbot.png';
import restaurant from '../../assets/portfolio/restaurant.png';

const projects = [

  {
    id: 1,

    title: 'Rise N Shine Coaching',

    image: risenshine,

    description:
      'Professional coaching institute website designed for course promotion and online student engagement.',

    tech: [
      'React JS',
      'Tailwind CSS',
      'JavaScript',
      'Responsive UI',
    ],

    demo:
      'https://www.risenshinecoaching.in/',

    repo:
      'https://github.com/Omkar-XD/Rise-N-Shine-Coaching',
  },

  {
    id: 2,

    title: 'Saraswati Classes',

    image: saraswati,

    description:
      'Educational coaching institute website with responsive modern UI and student-focused sections.',

    tech: [
      'React JS',
      'Tailwind CSS',
      'JavaScript',
      'Responsive Design',
    ],

    demo:
      'https://www.saraswaticlass.in/',

    repo:
      'https://github.com/Omkar-XD/Saraswati-Classes',
  },

  {
    id: 3,

    title: 'Legacy XI Store',

    image: legacy,

    description:
      'Modern full-stack ecommerce platform with admin dashboard, authentication, product management, and responsive UI.',

    tech: [
      'React JS',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT Authentication',
    ],

    demo:
      'https://legacy-xi-store.vercel.app/',

    repo:
      'https://github.com/Omkar-XD/LEGACY-XI-STORE',
  },

  {
    id: 4,

    title: 'Online News Portal',

    image: news,

    description:
      'Dynamic news management portal built using Django framework with CMS functionality and categorized news publishing.',

    tech: [
      'Python',
      'Django',
      'HTML',
      'CSS',
      'SQLite3',
      'CMS System',
    ],

    repo:
      'https://github.com/Omkar-XD/Online-News-Portal',
  },

  {
    id: 5,

    title: 'HoryX Chatbot',

    image: chatbot,

    description:
      'AI chatbot interface with modern UI and conversational experience integrated with responsive frontend design.',

    tech: [
      'React JS',
      'Tailwind CSS',
      'JavaScript',
      'AI Chat UI',
    ],

    demo:
      'https://hory-x-chatbot.vercel.app/',

    repo:
      'https://github.com/Omkar-XD/HoryX-Chatbot',
  },

  {
    id: 6,

    title: 'Restaurant Landing Page',

    image: restaurant,

    description:
      'Modern responsive restaurant landing page with clean UI, food showcase sections, and mobile-first design.',

    tech: [
      'React JS',
      'Tailwind CSS',
      'JavaScript',
    ],

    demo:
      'https://restaurant-landing-page-f456g0goy.vercel.app/',

    repo:
      'https://github.com/Omkar-XD/Restaurant-landing-page',
  },

];

function Portfolio() {

  const { t } = useTranslation();

  const [modalData, setModalData] =
    useState(null);

  const handleViewMore = (project) => {
    setModalData(project);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (

    <div
      id="projects"
      className="py-16 px-4 md:px-8 lg:px-16"
    >

      {/* TITLE */}
      <h2
        className="
          text-4xl
          font-bold
          text-center
          mb-12
          text-white
        "
      >
        {t('portfolioTitle')}
      </h2>

      {/* PROJECT GRID */}
      <div
        className="
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
        "
      >

        {projects.map((project) => (

          <div
            key={project.id}
            className="
              BGblur
              rounded-2xl
              overflow-hidden
              shadow-xl
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-2xl
            "
          >

            {/* IMAGE */}
            <div
              className="
                bg-white
                overflow-hidden
              "
            >

              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-60
                  object-cover
                "
              />

            </div>

            {/* CONTENT */}
            <div className="p-5">

              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                  mb-5
                  text-center
                "
              >
                {project.title}
              </h3>

              {/* BUTTONS */}
              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                  justify-center
                "
              >

                {/* LIVE DEMO */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-green-600
                      text-white
                      py-2
                      px-4
                      rounded-lg
                      hover:bg-green-700
                      transition
                    "
                  >
                    Live Demo
                  </a>
                )}

                {/* GITHUB */}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-black
                      text-white
                      py-2
                      px-4
                      rounded-lg
                      hover:bg-gray-900
                      transition
                    "
                  >
                    GitHub
                  </a>
                )}

                {/* DETAILS */}
                <button
                  onClick={() =>
                    handleViewMore(project)
                  }
                  className="
                    bg-blue-600
                    text-white
                    py-2
                    px-4
                    rounded-lg
                    hover:bg-blue-700
                    transition
                  "
                >
                  View Details
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW MORE PROJECTS */}
      <div className="flex justify-center mt-14">

        <div className="flex justify-center mt-14">

  <a
    href="https://omkarchavan-portfolio-gallery.netlify.app/"
    className="
      bg-gradient-to-r
      from-purple-500
      to-indigo-500
      text-white
      py-3
      px-8
      rounded-xl
      text-lg
      font-semibold
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-2xl
    "
  >
    View More Projects
  </a>

</div>

      </div>

      {/* MODAL */}
      {modalData && (

        <div
          className="
            fixed
            inset-0
            bg-black/80
            flex
            items-center
            justify-center
            z-50
            px-4
          "
        >

          <div
            className="
              BGblur
              rounded-2xl
              p-6
              max-w-3xl
              w-full
              relative
              overflow-y-auto
              max-h-[95vh]
            "
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={handleCloseModal}
              className="
                absolute
                top-4
                right-4
                text-white
                text-3xl
              "
            >
              ×
            </button>

            {/* IMAGE */}
            <div
              className="
                bg-white
                rounded-xl
                overflow-hidden
                mb-6
              "
            >

              <img
                src={modalData.image}
                alt={modalData.title}
                className="
                  w-full
                  h-auto
                  object-cover
                "
              />

            </div>

            {/* TITLE */}
            <h3
              className="
                text-3xl
                font-bold
                text-white
                mb-4
                text-center
              "
            >
              {modalData.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                text-white
                text-center
                mb-6
              "
            >
              {modalData.description}
            </p>

            {/* TECH STACK */}
            <div
              className="
                flex
                flex-wrap
                gap-3
                justify-center
                mb-8
              "
            >

              {modalData.tech.map((tech, index) => (

                <span
                  key={index}
                  className="
                    BgGradient
                    text-white
                    px-4
                    py-2
                    rounded-lg
                    text-sm
                  "
                >
                  {tech}
                </span>

              ))}
            </div>

            {/* MODAL BUTTONS */}
            <div
              className="
                flex
                justify-center
                gap-4
                flex-wrap
              "
            >

              {modalData.demo && (
                <a
                  href={modalData.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-green-600
                    text-white
                    px-5
                    py-3
                    rounded-lg
                    hover:bg-green-700
                  "
                >
                  Visit Website
                </a>
              )}

              {modalData.repo && (
                <a
                  href={modalData.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-black
                    text-white
                    px-5
                    py-3
                    rounded-lg
                    hover:bg-gray-900
                  "
                >
                  GitHub Repo
                </a>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;