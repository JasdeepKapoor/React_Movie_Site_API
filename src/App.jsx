// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MovieModal from "./components/MovieModal";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="movie/:id" element={<MovieModal></MovieModal>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
