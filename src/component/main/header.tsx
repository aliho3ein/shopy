import { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Media_Markt_logo.svg/1280px-Media_Markt_logo.svg.png"
        alt="logo"
        className="headLogo"
      />
      <div className="headLocation">Lieferadresse</div>
      <div className="headAccount">Konto und Listen </div>

      <div className="headSearchBox">
        <select name="categories" className="searchCategories">
          <option value="mob">All</option>
          <option value="mob">Laptop</option>
          <option value="mob">Mobile</option>
          <option value="mob">Headset</option>
        </select>
        <input
          type="search"
          placeholder="Wonach suchst du ?"
          className="searchBox"
        />
        <button className="searchBtn">Suchen</button>
      </div>
      <div className="headGift">GewinnSpiel</div>

      <div className="headOrder">Warenrücksendungen</div>
      <div className="headBasket">Einkaufskorb</div>
    </header>
  );
};

export default Header;
