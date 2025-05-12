import { Route, Routes, Link } from "react-router";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
