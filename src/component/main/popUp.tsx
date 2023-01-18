import { FC } from "react";
import instance from "../../api/instance";
import mainContext from "../../context/mainContext";
import { useEffect } from "react";
import { useContext } from "react";
import { setTheme } from "../../action/basicStyle";

interface prop {
  setLoad: any;
}

const PopUp: FC<prop> = ({ setLoad }) => {
  const Context = useContext(mainContext) as any;

  useEffect(() => {
    instance
      .get(".json")
      .then((res) => {
        const cat = Object.entries(res.data.category).map(
          ([key, value]: any) => {
            return { ...value, key };
          }
        );
        const it = Object.entries(res.data.items).map(([key, value]: any) => {
          return { ...value, key };
        });

        Context.dispatch({
          type: "default",
          payload: {
            cat,
            it,
          },
        });
        setTheme(Object.values(res.data.theme));
        setLoad(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="popUp">
      <div className="container square-of-dots"></div>
    </div>
  );
};

export default PopUp;
