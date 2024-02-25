// importing picture of self and css styling
import profilePic from "../assets/images/profile_picture.jpg"

// exporting the Header component for App.jsx to use for every page
export default function Header() {
  return (
    <header>
      <h1>Toan Nguyen</h1>
      <p>Full Stack Developer</p>
      <img id="pfp" src={profilePic} alt="a profile picture of me"></img>
    </header>
  );
}
