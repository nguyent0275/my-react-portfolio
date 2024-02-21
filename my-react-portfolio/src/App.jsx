import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Footer from "./components/Footer";

import projects from "./components/projects";

export default function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Project projects={projects} />
      <Footer />
    </div>
  );
}
