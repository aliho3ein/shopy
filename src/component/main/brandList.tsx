import { FC } from "react";
import SingleBrand from "../singleBrand";

const brandsData = [
  {
    title: "Sony",
    icon: "https://logos-world.net/wp-content/uploads/2020/06/Sony-Logo-1957.png",
  },
  {
    title: "Samsung",
    icon: "https://logos-world.net/wp-content/uploads/2020/04/Samsung-Symbol.png",
  },
  {
    title: "Acer",
    icon: "https://www.pc2go.pk/wp-content/uploads/2022/02/Acer-logo.webp",
  },
  {
    title: "Google",
    icon: "https://cdn.freebiesupply.com/images/large/2x/google-logo-black-transparent.png",
  },
  {
    title: "Huawei",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Huawei_wordmark_2019.svg/2560px-Huawei_wordmark_2019.svg.png",
  },

  {
    title: "Apple",
    icon: "https://cdn.freebiesupply.com/logos/large/2x/apple-4-logo-png-transparent.png",
  },
];

const BrandList: FC = () => {
  const brands = brandsData.map((item, index) => {
    return <SingleBrand key={index} value={item} />;
  });
  return <div className="categoryList">{brands}</div>;
};

export default BrandList;
