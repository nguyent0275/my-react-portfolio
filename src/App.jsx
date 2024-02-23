import Header from "./components/Header";
// import Footer from "./pages/Contact";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

// import projects from "./pages/projects";

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
}
