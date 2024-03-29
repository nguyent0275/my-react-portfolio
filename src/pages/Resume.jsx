// importing resume from assets
// "/Resume" page
import resume from "../assets/Resume.pdf";
export default function Resume() {
  return (
    <>
      <section>
        <h2>
          Download my resume{" "}
          <a href={resume} download="Nguyen-Toan-Resume">
            here
          </a>
        </h2>
        <br></br>
        <ul>
          Front End Proficiencies
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Jquery</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <ul>
          Back End Proficiencies
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL/Sequelize</li>
          <li>MongoDB/Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </section>
    </>
  );
}
