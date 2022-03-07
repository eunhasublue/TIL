import Link from "next/link";
import navStyle from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyle.nav}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/photos">
            <a>Photos</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
