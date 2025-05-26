import React from "react";
import Hero from "./Components/Hero/Hero";
import GameStart from "./Components/GameStart/GameStart";
import {BrowserRouter,Route, Link, Routes} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/gamestart" element={<GameStart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
