import { FC, useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Content from "../component/main/content";
import BrandList from "../component/main/brandList";

const Product: FC = () => {
  /** Get Key */
  const [param] = useSearchParams();

  return (
    <>
      <Content value={param.get("key")} />
      <BrandList />
    </>
  );
};

export default Product;
