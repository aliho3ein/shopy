/**Pages Btn Style */
const setActiveBtn = (num: number) => {
  console.log(num);

  // document.querySelector(".activePg")?.classList.remove("activePg");
  document.querySelector(`.pg${num}`)?.classList.add("activePg");
};

export { setActiveBtn };
