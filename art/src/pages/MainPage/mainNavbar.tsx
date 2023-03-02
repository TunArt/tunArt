import Link from "next/link";
import CSS from "../MainPage/CSS.css";
const mainNavbar: React.FC  = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <a
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export default mainNavbar;