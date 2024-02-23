import { Link, useLocation } from "react-router-dom";

// exporting the Nav component for App.jsx to use for every page
export default function Nav() {
  const linkStyle = { border: "1px black", padding: "5px" };
  const currentPage = useLocation().pathname;

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: "flex",
          fontFamily: "helvetica",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={linkStyle}>
          <Link
            to="./About"
            className={
              currentPage === "/About" ? "nav-link active" : "nav-link"
            }
          >About</Link>
        </div>
        <div style={linkStyle}>
          <Link
            to="./Portfolio"
            className={
              currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
            }
          >Portfolio</Link>
        </div>
        <div style={linkStyle}>
          <Link
            to="./Contact"
            className={
              currentPage === "/Contact" ? "nav-link active" : "nav-link"
            }
          >Contact</Link>
        </div>
        <div style={linkStyle}>
          <Link
            to="./Resume"
            className={
              currentPage === "/Resume" ? "nav-link active" : "nav-link"
            }
          >Resume</Link>
        </div>
      </section>
    </nav>
  );
}
