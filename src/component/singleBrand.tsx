import { FC } from "react";

interface brandType {
  value: {
    icon: string;
    title: string;
  };
}

const SingleBrand: FC<brandType> = ({ value }) => {
  return (
    <div
      className="brandCard"
      style={{ ["--img" as any]: `url(${value.icon})` }}
      title={value.title}
    ></div>
  );
};

export default SingleBrand;
