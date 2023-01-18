/**Pages Btn Style */
const setActiveBtn = (num: number) => {
  console.log(num);
  document.querySelector(`.pg${num}`)?.classList.add("activePg");
};

export { setActiveBtn };
