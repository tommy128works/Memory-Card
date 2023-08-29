import "../styles/Footer.css";
import github from "../assets/github-mark-white.svg";

function Footer() {
  return (
    <div id="footer">
      <div>Copyright © 2023</div>
      <a
        href="https://github.com/tommy128works/Memory-Card"
        target="_blank"
        rel="noreferrer"
        className="footer-align-items-center"
      >
        <img src={github} alt="github logo" />
        <span>tommy128works</span>
      </a>
    </div>
  );
}

export default Footer;
