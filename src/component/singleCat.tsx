import { FC } from "react";

interface myProps {
  value: {
    title: string;
    img: string;
    id: string;
  };
}

const SingleCat: FC<myProps> = ({ value }) => {
  const { title, img, id } = value;
  return (
    <div className="CatCard">
      <div className="cardImg" style={{ backgroundImage: `url(${img})` }}></div>
      <span>{title}</span>
    </div>
  );
};

export default SingleCat;
