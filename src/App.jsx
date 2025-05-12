import { Route, Routes, Link } from "react-router";
import Home from "./pages/Home.jsx";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
