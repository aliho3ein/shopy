import { useEffect, useState } from "react";
import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import mainReducer from "../reducer/mainReducer";
import mainContext from "../context/mainContext";
/** Components */
import Home from "../page/home";
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading && <PopUp />}
      <mainContext.Provider value={{ state, dispatch }}>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </mainContext.Provider>
      <Footer />
    </>
  );
}

export default App;
