// importing the css
import "../styles/portfolio.css";

// page is loading with the array of projects from the projects.js
// "/Portfolio"
export default function Portfolio({ projects }) {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <br></br>
      <div id="projects-container">
        {projects.map((project) => (
          <div className="project-secondary" key={project.id}>
            <div className="text-box">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <div className="img-container">
              <a href={project.link}>
                <img src={project.image} alt={project.alt} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
