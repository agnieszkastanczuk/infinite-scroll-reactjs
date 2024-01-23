import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cats from "./pages/Cats";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<Cats />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
