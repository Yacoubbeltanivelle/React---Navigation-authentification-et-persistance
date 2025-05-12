import { Route, Routes, Link } from "react-router";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./components/Layout.jsx";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
