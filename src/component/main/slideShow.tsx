import { useEffect, useState } from "react";
import { FC } from "react";
import createSlidShow from "../../action/slider";

const Images = [
  "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/03/Person-sitting-next-to-a-laptop-that-is-displaying-a-black-background.jpg",
  "https://thumbs.dreamstime.com/b/modern-mobile-cell-phone-colorful-background-vector-d-realistic-gold-glossy-mockup-any-smartphone-shiny-transparent-148303334.jpg",
  "https://img.freepik.com/free-vector/gradient-glassmorphism-mobile-app-template_52683-86555.jpg?w=2000",
  "https://w0.peakpx.com/wallpaper/116/459/HD-wallpaper-microchip-neon-lines-black-background-chips-technology-backgrounds.jpg",
];

const SlidShow: FC = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    load && createSlidShow(5);
    setLoad(true);
  }, [load]);

  const Pics = Images.map((img, index) => {
    return (
      <div
        key={index}
        style={{ backgroundImage: `url(${img})` }}
        className="slid"
      ></div>
    );
  });

  return (
    <div>
      <div className="slideBase" data-auto="3">
        <div className="slidShow">{Pics}</div>
      </div>
    </div>
  );
};

export default SlidShow;
