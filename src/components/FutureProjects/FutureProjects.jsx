import React from 'react';
import 'tailwindcss/tailwind.css';

function FutureProjects() {

  const futureProjects = [

    {
      id: 1,

      title: 'Freelance Web Development',

      description:
        'Building modern responsive websites and full-stack applications for coaching institutes, businesses, startups, and personal brands using React.js, Tailwind CSS, Node.js, and MongoDB.',

      link:
        'https://omkarchavan-portfolio-gallery.netlify.app/',
    },

    {
      id: 2,

      title: 'AI & Machine Learning Projects',

      description:
        'Developing AI-powered tools, chatbots, diagnostics dashboards, prediction systems, and automation platforms using Python, OpenCV, Machine Learning, and modern AI integrations.',

      link:
        'https://github.com/Omkar-XD',
    },

    {
      id: 3,

      title: 'Future Goal',

      description:
        'Focused on becoming a high-level full-stack and AI engineer by building scalable production-ready applications, improving system architecture skills, and contributing to advanced real-world products.',

      link:
        'https://www.linkedin.com/in/omkar-chavan-8b59a8334',
    },

  ];

  return (

    <section
      id='future'
      className="
        py-16
        px-4
        md:px-8
        lg:px-16
        bgTools
      "
    >

      {/* TITLE */}
      <h2
        className="
          text-4xl
          gradient-text
          font-bold
          text-center
          mb-12
        "
      >
        Future Goals & Growth
      </h2>

      {/* CARDS */}
      <div className="flex flex-col gap-8">

        {futureProjects.map((project) => (

          <div
            key={project.id}
            className="
              rounded-2xl
              shadow-lg
              bg-white/10
              text-white
              p-6
              transform
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-2xl
              hover:bg-white/20
            "
          >

            {/* TITLE */}
            <h3
              className="
                text-2xl
                font-semibold
                gradient-text
                mb-4
              "
            >
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-white mb-6">
              {project.description}
            </p>

            {/* BUTTON */}
            <a
              href={project.link}
              target='_blank'
              rel="noopener noreferrer"
              className="
                inline-block
                bg-gradient-to-r
                from-purple-500
                to-indigo-500
                text-white
                py-2
                px-6
                rounded-lg
                font-medium
                shadow-md
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              Explore More
            </a>

          </div>
        ))}
      </div>
    </section>
  );
}

export default FutureProjects;