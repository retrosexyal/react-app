import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header/Header";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header hrefHome='/' hrefFavorites='/favorites' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
