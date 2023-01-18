import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import mainContext from "../../context/mainContext";

interface catType {
  title: string;
  key: string;
}

const Navbar: FC = () => {
  const [cat, setCat] = useState<catType | any>([]);
  const context = useContext(mainContext) as any;

  useEffect(() => {
    setCat(context.state.category);
    // console.log(context.state.category);
  }, [context.loading]);

  const underNav = cat.map((item: any, key: number) => {
    return (
      <NavLink
        to={{
          pathname: "/product",
          search: `?key=${item?.key}`,
        }}
        key={key}
      >
        <li>{item?.title}</li>
      </NavLink>
    );
  });

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
          <ul className="productNav">{underNav}</ul>
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
