import { FC } from "react";
import { setActiveBtn } from "../action/basicStyle";

interface counter {
  length: number;
  items: number;
  currentPage: number;
  setPage: Function;
}

const PageNumber: FC<counter> = ({ length, items, currentPage, setPage }) => {
  /**Count of Buttons */
  const count = Math.ceil(length / items);

  let arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(i);
  }

  //   console.log(currentPage / items);

  /**Create Buttons */
  let show = 0;
  let numBtn = arr.map((item) => {
    if (show == currentPage / items) {
      show++;
      return (
        <a
          href="#content"
          className={`numbers activePg pg${item}}`}
          onClick={() => {
            setPage(items * (item - 1));
          }}
          key={item}
        >
          {item}
        </a>
      );
    } else if (show == currentPage / items - 1) {
      show++;

      return (
        <a
          className={`numbers pg${item}}`}
          onClick={() => {
            setPage(items * (item - 1));
          }}
          key={item}
        >
          {item}
        </a>
      );
    } else if (show == currentPage / items + 1) {
      show++;
      return (
        <a
          className={`numbers pg${item}}`}
          onClick={() => {
            setPage(items * (item - 1));
          }}
          key={item}
        >
          {item}
        </a>
      );
    } else show++;
  });

  /**Back Button */
  const lastPage = () => {
    currentPage > 0 && setActiveBtn(currentPage / items);
    setPage((last: any) => {
      return last > 0 ? last - items : last;
    });
  };

  /**Next Button */
  const nextPage = () => {
    currentPage < length - items && setActiveBtn(currentPage / items + 2);
    setPage((last: any) => {
      return last < length - items ? last + items : last;
    });
  };

  return (
    <>
      {count >= 1 && (
        <div className="pageNumber">
          {count >= 2 && (
            <a
              href="#content"
              className="numbers backBtn"
              onClick={lastPage}
              title="Zurück"
            ></a>
          )}

          {numBtn}

          {count >= 4 && <span>...</span>}
          {count >= 2 && (
            <a
              href="#content"
              className="numbers forwardBtn"
              onClick={nextPage}
              title="Weiter"
            ></a>
          )}
        </div>
      )}
    </>
  );
};

export default PageNumber;
