import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";

import projects from "./components/projects";

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Project projects={projects} />
      <Footer />
    </div>
  );
}
