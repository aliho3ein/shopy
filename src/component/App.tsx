import { useState } from "react";
import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import mainReducer from "../reducer/mainReducer";
import mainContext from "../context/mainContext";
/** Pages */
import Home from "../page/home";
import Product from "../page/product";
/** Components */
import Header from "./main/header";
import Navbar from "./main/navbar";
import Footer from "./main/footer";
import PopUp from "./main/popUp";

function App() {
  /**Reducer */
  const [state, dispatch] = useReducer(mainReducer, {
    category: [],
    items: [],
  });

  /**Loading */
  const [loading, setLoading] = useState(false);

  return (
    <mainContext.Provider value={{ state, dispatch, loading }}>
      {loading && <PopUp setLoad={setLoading} />}
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </mainContext.Provider>
  );
}

export default App;
