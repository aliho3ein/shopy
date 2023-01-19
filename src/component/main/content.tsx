import { useState } from "react";
import { FC } from "react";
import PageNumber from "../pagesNumber";
import SingleItem from "../singleItem";
import { useContext } from "react";
import mainContext from "../../context/mainContext";
import { useEffect } from "react";

const Content: FC<any> = ({ value }) => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState<any>([]);
  const [title, setTitle] = useState("Tageshighlights");

  /** */
  const context = useContext(mainContext) as any;

  useEffect(() => {
    if (value == "/all/") {
      setData(context.state.items);
    } else {
      setTitle(
        context.state.category.find((cat: any) => cat.key == value).title
      );

      setData(
        context.state.items.filter((item: any) => item.category == value)
      );
    }
    setPage(0);
  }, [value]);

  /**Count of Items in Each Page */
  const Items = 10;

  let counter = 1;
  const product = data.map((item: any, index: any) => {
    if (counter <= page + Items && counter > page) {
      counter++;
      return <SingleItem key={index} value={item} />;
    } else counter++;
  });

  return (
    <div id="content">
      <span className="contentTitle">{title}</span>
      {product}
      {
        <PageNumber
          length={data.length}
          items={Items}
          currentPage={page}
          setPage={setPage}
        />
      }
    </div>
  );
};

export default Content;
