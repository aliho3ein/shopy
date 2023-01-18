/**Pages Btn Style */
const setActiveBtn = (num: number) => {
  console.log(num);
  document.querySelector(`.pg${num}`)?.classList.add("activePg");
};

/**Set Colors & Font  */
const setTheme = (theme: any[]) => {
  document.body.style.setProperty("--prime-color", `#${theme[0][0]}`);
  document.body.style.setProperty("--second-color", `#${theme[0][1]}`);
  document.body.style.fontFamily = theme[1][0];
};

export { setActiveBtn, setTheme };
