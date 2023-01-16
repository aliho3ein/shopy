/** Components */
import Header from "./main/header";
import Navbar from "./main/navbar";
import SlidShow from "./main/slideShow";
import CategoryList from "./main/categoryList";
import Content from "./main/content";
import BrandList from "./main/brandList";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <SlidShow />
      <CategoryList />
      <Content />
      <BrandList />
    </>
  );
}

export default App;
