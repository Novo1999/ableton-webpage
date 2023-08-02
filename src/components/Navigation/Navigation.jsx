import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import "boxicons";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.leftNav}>
        <li>
          <NavLink className={styles.icon} to="home">
            <box-icon name="objects-vertical-center" type="solid"></box-icon>
          </NavLink>
        </li>
        <li>
          <NavLink to="Live">Live</NavLink>
        </li>
        <li>
          <NavLink to="Push">Push</NavLink>
        </li>
        <li>
          <NavLink to="Note">Note</NavLink>
        </li>
        <li>
          <NavLink to="Link">Link</NavLink>
        </li>
        <li>
          <NavLink to="Shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="Packs">Packs</NavLink>
        </li>
        <li>
          <NavLink to="Help">Help</NavLink>
        </li>
        <li>
          <NavLink to="More +">More +</NavLink>
        </li>
      </ul>
      <ul className={styles.rightNav}>
        <li>
          <NavLink id={styles.rightNav__try_live} to="try-live">
            Try Live for free
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.rightNav__login} to="login">
            Log in or register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
