import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Main from "./pages/Main";
import Nav from "./components/Nav";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
