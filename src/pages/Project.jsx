import "../styles/projects.css";

export default function Project({ projects }) {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div id="projects-container">
        {projects.map((project) => (
          <div className="project-secondary" key={project.id}>
            <div className="text-box">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <div className="img-container">
              <a href={project.link}>
                <img src={project.image} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
