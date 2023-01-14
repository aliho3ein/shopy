import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav>
      <ul className="mainNav">
        <li>% Angebote</li>
        <li>Home</li>
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
