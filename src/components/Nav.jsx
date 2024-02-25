// using navlink instead of link because it knows when it is active without extra imports/settings
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

// exporting the Nav component for App.jsx to use for every page
export default function Nav() {
  const linkStyle = { border: "1px black", padding: "5px" };

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
          <NavLink
            to="./About"
            // if the navlink is active, will give it a class name of "active" (which has a css of color:blue)
            // otherwise it will have no class
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            About
          </NavLink>
        </div>
        <div style={linkStyle}>
          <NavLink
            to="./Portfolio"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Portfolio
          </NavLink>
        </div>
        <div style={linkStyle}>
          <NavLink
            to="./Contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Contact
          </NavLink>
        </div>
        <div style={linkStyle}>
          <NavLink
            to="./Resume"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Resume
          </NavLink>
        </div>
      </section>
    </nav>
  );
}
