import { Route, Routes, Link } from "react-router";
import Home from "./pages/Home.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <h1>Routeur</h1>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
