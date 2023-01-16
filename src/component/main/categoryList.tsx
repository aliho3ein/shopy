import { FC } from "react";
import SingleCat from "../singleCat";

const cat = [
  {
    img: "https://cms-images.mmst.eu/fw7ws5lvie5f/1HU9DhcM2mM6lUl9nzIyLk/7658234fa1d87c09563550f9c91bdbc3/notebooks.png?q=80&w=264",
    title: "NoteBook",
    id: "asd",
  },
  {
    img: "https://cms-images.mmst.eu/fw7ws5lvie5f/7w6J3XmET7vEc2B4DalUrG/fa8538c4e3342236208168cb348063ae/tablets.png?q=80&w=264",
    title: "Tablet",
    id: "das",
  },
  {
    img: "https://cms-images.mmst.eu/fw7ws5lvie5f/4k8eCCZ0W6ODt0fjaDwkKr/7f2273a3d9d8b77389eeed2a6a5055a5/smartphones.png?q=80&w=264",
    title: "Mobile",
    id: "ad",
  },
];

const CategoryList: FC = () => {
  const categories = cat.map((item, index) => {
    return <SingleCat key={index} value={item} />;
  });

  return <div className="categoryList">{categories}</div>;
};

export default CategoryList;
