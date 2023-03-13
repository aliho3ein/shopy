import { FC } from "react";
import SlidShow from "../component/main/slideShow";
import CategoryList from "../component/main/categoryList";
import Content from "../component/main/content";
import BrandList from "../component/main/brandList";

const Home: FC = () => {
  return (
    <>
      <CategoryList />
      <Content value="/all/" />
      <BrandList />
    </>
  );
};

export default Home;
