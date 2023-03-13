import { FC } from "react";

interface myProps {
  value: {
    category: string;
    title: string;
    image: string;
    brand: string;
    price: string;
    off: boolean;
    offPrice: string | null;
    description: string;
    rating: string | null;
    soldOut: boolean;
    date: string;
  };
}

const SingleItem: FC<myProps> = ({ value }) => {
  const {
    category,
    title,
    image,
    brand,
    price,
    off,
    offPrice,
    description,
    rating,
    soldOut,
    date,
  } = value;

  return (
    <div className="itemCard" title={description}>
      {soldOut && <div className="cardSoldOut"></div>}
      <div
        className="cardImg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <p>
        <span>{brand}</span>
        {title}
      </p>
      <div className="cardPrice">
        {off ? (
          <>
            <div className="salePrice">
              UVP
              <span>{price}</span>
            </div>
            <span style={{ color: "red" }}>{offPrice}</span>
          </>
        ) : (
          <span>{price}</span>
        )}
      </div>
      <p className="cardSt">inkl. MwSt. versandkostenfrei</p>
    </div>
  );
};

export default SingleItem;
