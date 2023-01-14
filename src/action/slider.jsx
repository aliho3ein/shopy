let img, width, intervalId, slider, placeHolder, pic, time;
let slideNr = 1;

/* Check Input Item */
export default function createSlidShow(auto = 3) {
  slider = document.querySelector(".slidShow");
  placeHolder = document.querySelector(".slideBase");
  pic = document.querySelectorAll(".slid");
  auto && auto > 0 ? (time = auto * 1000) : (auto = false);
  img = [...slider.children].filter((e) => e.classList.contains("slid"));
  /**Call Functions */
  CreateHtmlDiv();
  createNexAndPer();
  createDot();
  automatic();
  mouseEvent();
}

/* Create HTML Side */
const CreateHtmlDiv = () => {
  placeHolder.style.overflow = "hidden";
  placeHolder.style.position = "relative";
  slider.style.width = pic.length * 100 + "%";
  width = parseInt(getComputedStyle(placeHolder).width.replace("px", ""));
  pic.forEach((element) => {
    element.style.width = `${width}px`;
    element.style.height = "100%";
  });
};

/* Create Button Next and Prevents */
const createNexAndPer = () => {
  /* Check the Link for more Info https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML?retiredLocale=de */
  placeHolder.insertAdjacentHTML(
    "beforeend",
    `<span class="next">&rarr;</span>
        <span class="prev">&larr;</span>
         `
  );

  document
    .querySelector(`.${placeHolder.getAttribute("class")} .next`)
    .addEventListener("click", () => nCounter(++slideNr));
  document
    .querySelector(`.${placeHolder.getAttribute("class")} .prev`)
    .addEventListener("click", () => nCounter(--slideNr));
};

/* Create Dots under slideShow */
const createDot = () => {
  /*[...slider.children].map()*/
  let dot = img.map(
    (item, index) => `<span class='dot' data-select='${index + 1}'></span>`
  );
  /* Create Dot with spacial Class */

  let dotHolder = document.createElement("div");
  dotHolder.classList.add("dotHolder");
  dotHolder.innerHTML = dot.join(""); // `${dot.join("")}`;

  placeHolder.after(dotHolder);

  let dots = document.querySelectorAll(`.dot`);

  /* Add Class Active to first Dot */
  document.querySelector(`.dot[data-select="1"]`).classList.add("active");

  /* add Click Event on Dots */
  dots.forEach((element) => {
    /*e.target.getAttribute('data-select') Or e.target.dataset.select */
    element.addEventListener("click", (e) => {
      nCounter(e.target.dataset.select);
    });
  });
};

/*  */
const nCounter = (n) => {
  slideNr = parseInt(n);
  stopInterval();
  show(slideNr);
};

/* Manual SlideShow */
const show = (num) => {
  /* Check the number of Pic */
  if (num > img.length) slideNr = 1;
  else if (num < 1) slideNr = img.length;

  let x = parseInt(width) * (slideNr - 1);

  /* add Class Active to dot */
  document.querySelector(`.active`).classList.remove("active");
  document
    .querySelector(`.dot[data-select="${slideNr}"]`)
    .classList.add("active");

  /* Move the Pics */
  slider.style.marginLeft = -x + "px";
};

/* Automatic SlidShow */
const automatic = () => {
  if (!time) return;
  intervalId = setInterval(() => show(++slideNr), time);
};

/* reset auto slider Timer*/
const stopInterval = () => {
  clearInterval(intervalId);
  /* and start again */
  automatic();
};

/* MouseHover on slidShow */
const mouseEvent = () => {
  slider.addEventListener("mouseenter", () => {
    clearInterval(intervalId);
  });

  slider.addEventListener("mouseout", () => {
    automatic();
  });
};
