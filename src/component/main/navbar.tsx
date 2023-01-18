import { FC } from "react";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <nav>
      <ul className="mainNav">
        <li>% Angebote</li>
        <NavLink
          to="/"
          className={({ isActive }: any) => isActive && "activeNav"}
        >
          <li>Home</li>
        </NavLink>
        <li className="mainNavPro">
          Product
          <ul className="productNav">
            <li>Mobile</li>
            <li>Tablet</li>
          </ul>
        </li>
        <li>Services</li>
        <li>Kunden-Bratung</li>
        <li>Jobs</li>
        <li>Kundenservice</li>
      </ul>
    </nav>
  );
};

export default Navbar;
