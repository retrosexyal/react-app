import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header/Header";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";

function App() {
  return (
    <>
      <Header hrefHome='/' hrefFavorites='/favorites' hrefTest='/test' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/test" element={<Test bgColor="yellow" />} />
      </Routes>
    </>
  );
}

export default App;
