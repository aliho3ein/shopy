import { useState } from "react";
import { FC } from "react";
import PageNumber from "../pagesNumber";
import SingleItem from "../singleItem";

const Data = [
  {
    category: "mobile",
    title: "1",
    image:
      "https://cms-images.mmst.eu/fw7ws5lvie5f/7w6J3XmET7vEc2B4DalUrG/fa8538c4e3342236208168cb348063ae/tablets.png?q=80&w=264",
    brand: "samsung",
    price: "240",
    off: true,
    offPrice: "150",
    description: "fdsffds",
    rating: "",
    soldOut: false,
    date: "",
  },
  {
    category: "mobile",
    title: "2",
    image:
      "https://cms-images.mmst.eu/fw7ws5lvie5f/7w6J3XmET7vEc2B4DalUrG/fa8538c4e3342236208168cb348063ae/tablets.png?q=80&w=264",
    brand: "samsung",
    price: "240",
    off: false,
    offPrice: "150",
    description: "fdsffds",
    rating: "",
    soldOut: false,
    date: "",
  },
  {
    category: "mobile",
    title: "3",
    image:
      "https://cms-images.mmst.eu/fw7ws5lvie5f/7w6J3XmET7vEc2B4DalUrG/fa8538c4e3342236208168cb348063ae/tablets.png?q=80&w=264",
    brand: "samsung",
    price: "240",
    off: true,
    offPrice: "150",
    description: "fdsffds",
    rating: "",
    soldOut: true,
    date: "",
  },
  {
    category: "mobile",
    title: "4",
    image:
      "https://cms-images.mmst.eu/fw7ws5lvie5f/7w6J3XmET7vEc2B4DalUrG/fa8538c4e3342236208168cb348063ae/tablets.png?q=80&w=264",
    brand: "samsung",
    price: "240",
    off: true,
    offPrice: "150",
    description: "fdsffds",
    rating: "",
    soldOut: false,
    date: "",
  },
  {
    category: "mobile",
    title: "5",
    image:
      "https://cms-images.mmst.eu/fw7ws5lvie5f/7w6J3XmET7vEc2B4DalUrG/fa8538c4e3342236208168cb348063ae/tablets.png?q=80&w=264",
    brand: "samsung",
    price: "240",
    off: true,
    offPrice: "150",
    description: "fdsffds",
    rating: "",
    soldOut: false,
    date: "",
  },
  {
    category: "mobile",
    title: "6",
    image:
      "https://cms-images.mmst.eu/fw7ws5lvie5f/7w6J3XmET7vEc2B4DalUrG/fa8538c4e3342236208168cb348063ae/tablets.png?q=80&w=264",
    brand: "samsung",
    price: "240",
    off: true,
    offPrice: "150",
    description: "fdsffds",
    rating: "",
    soldOut: false,
    date: "",
  },
  {
    category: "mobile",
    title: "7",
    image:
      "https://cms-images.mmst.eu/fw7ws5lvie5f/7w6J3XmET7vEc2B4DalUrG/fa8538c4e3342236208168cb348063ae/tablets.png?q=80&w=264",
    brand: "samsung",
    price: "240",
    off: true,
    offPrice: "150",
    description: "fdsffds",
    rating: "",
    soldOut: false,
    date: "",
  },
  {
    category: "mobile",
    title: "8",
    image:
      "https://cms-images.mmst.eu/fw7ws5lvie5f/7w6J3XmET7vEc2B4DalUrG/fa8538c4e3342236208168cb348063ae/tablets.png?q=80&w=264",
    brand: "samsung",
    price: "240",
    off: true,
    offPrice: "150",
    description: "fdsffds",
    rating: "",
    soldOut: false,
    date: "",
  },
  {
    category: "mobile",
    title: "9",
    image:
      "https://cms-images.mmst.eu/fw7ws5lvie5f/7w6J3XmET7vEc2B4DalUrG/fa8538c4e3342236208168cb348063ae/tablets.png?q=80&w=264",
    brand: "samsung",
    price: "240",
    off: true,
    offPrice: "150",
    description: "fdsffds",
    rating: "",
    soldOut: false,
    date: "",
  },
  {
    category: "mobile",
    title: "10",
    image:
      "https://cms-images.mmst.eu/fw7ws5lvie5f/7w6J3XmET7vEc2B4DalUrG/fa8538c4e3342236208168cb348063ae/tablets.png?q=80&w=264",
    brand: "samsung",
    price: "240",
    off: true,
    offPrice: "150",
    description: "fdsffds",
    rating: "",
    soldOut: false,
    date: "",
  },
  {
    category: "mobile",
    title: "11",
    image:
      "https://cms-images.mmst.eu/fw7ws5lvie5f/7w6J3XmET7vEc2B4DalUrG/fa8538c4e3342236208168cb348063ae/tablets.png?q=80&w=264",
    brand: "samsung",
    price: "240",
    off: true,
    offPrice: "150",
    description: "fdsffds",
    rating: "",
    soldOut: false,
    date: "",
  },
  {
    category: "mobile",
    title: "12",
    image:
      "https://cms-images.mmst.eu/fw7ws5lvie5f/7w6J3XmET7vEc2B4DalUrG/fa8538c4e3342236208168cb348063ae/tablets.png?q=80&w=264",
    brand: "samsung",
    price: "240",
    off: true,
    offPrice: "150",
    description: "fdsffds",
    rating: "",
    soldOut: false,
    date: "",
  },
  {
    category: "mobile",
    title: "13",
    image:
      "https://cms-images.mmst.eu/fw7ws5lvie5f/7w6J3XmET7vEc2B4DalUrG/fa8538c4e3342236208168cb348063ae/tablets.png?q=80&w=264",
    brand: "samsung",
    price: "240",
    off: true,
    offPrice: "150",
    description: "fdsffds",
    rating: "",
    soldOut: false,
    date: "",
  },
  {
    category: "mobile",
    title: "14",
    image:
      "https://cms-images.mmst.eu/fw7ws5lvie5f/7w6J3XmET7vEc2B4DalUrG/fa8538c4e3342236208168cb348063ae/tablets.png?q=80&w=264",
    brand: "samsung",
    price: "240",
    off: true,
    offPrice: "150",
    description: "fdsffds",
    rating: "",
    soldOut: false,
    date: "",
  },
  {
    category: "mobile",
    title: "15",
    image:
      "https://cms-images.mmst.eu/fw7ws5lvie5f/7w6J3XmET7vEc2B4DalUrG/fa8538c4e3342236208168cb348063ae/tablets.png?q=80&w=264",
    brand: "samsung",
    price: "240",
    off: true,
    offPrice: "150",
    description: "fdsffds",
    rating: "",
    soldOut: false,
    date: "",
  },
];

const Content: FC = () => {
  const [page, setPage] = useState(0);

  /**Count of Items in Each Page */
  const Items = 10;

  let counter = 1;
  const items = Data.map((item, index) => {
    if (counter <= page + Items && counter > page) {
      counter++;
      return <SingleItem key={index} value={item} />;
    } else counter++;
  });

  return (
    <div id="content">
      <span className="contentTitle">Tageshighlights</span>
      {items}
      {
        <PageNumber
          length={Data.length}
          items={Items}
          currentPage={page}
          setPage={setPage}
        />
      }
    </div>
  );
};

export default Content;
