import { FC, useState, useContext } from "react";
import mainContext from "../../context/mainContext";

const Header: FC = () => {
  const [articleList, setArticleList] = useState() as any;

  const context = useContext(mainContext) as any;

  /** Create Category filters */
  const option = context.state.category.map((item: any, index: number) => {
    return (
      <option value={item.key} key={index}>
        {item.title}
      </option>
    );
  });

  /** search for products */
  const getProduct = () => {
    const productName = document.querySelector(
      ".searchBox"
    ) as HTMLInputElement;

    const productCategory = document.querySelector(
      ".searchCategories"
    ) as HTMLInputElement;

    let inputValue = productName.value.toLowerCase().trim().split(" ");

    if (inputValue[0]) {
      const itemsList = context.state.items.filter((item: any) => {
        let validWorld = true;
        for (const words of inputValue) {
          !(item.title.toLowerCase() + item.brand.toLowerCase()).includes(
            words
          ) && (validWorld = false);
        }

        return (
          (item.category == productCategory.value ||
            productCategory.value == "/all/") &&
          validWorld &&
          item
        );
      });

      const list = itemsList.map((item: any, index: number) => {
        return (
          <li key={index} title={item.description}>
            <img src={item.image} alt={item.title} />
            {item.brand} {item.title}
          </li>
        );
      });

      setArticleList(list);
    } else {
      setArticleList();
    }
  };

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
        <select
          name="categories"
          className="searchCategories"
          onChange={getProduct}
        >
          <option value="/all/">All</option>
          {option}
        </select>
        <input
          type="search"
          placeholder="Wonach suchst du ?"
          className="searchBox"
          onChange={getProduct}
        />
        <ul id="suggestList">{articleList}</ul>
        <button className="searchBtn">Suchen</button>
      </div>
      <div className="headGift">GewinnSpiel</div>

      <div className="headOrder">Warenrücksendungen</div>
      <div className="headBasket">Einkaufskorb</div>
    </header>
  );
};

export default Header;
