import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaStackOverflow } from "react-icons/fa";
// exporting the Footer component for App.jsx to use for every page
export default function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Toan Nguyen</p>
      <a href="https://github.com/nguyent0275">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/toan-nguyen-2498a1293/">
        <BsLinkedin />
      </a>
      <a href="https://stackoverflow.com/users/23471165/nguyent0275">
        <FaStackOverflow />
      </a>
    </footer>
  );
}
