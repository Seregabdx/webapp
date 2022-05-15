import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Filter from "./components/Filter/Filter";
import SpecialtiesList from "./components/SpecialtiesList/SpecialtiesList";

function App() {
  return (
    <div className="App">
      <script defer src="https://pyscript.net/alpha/pyscript.js"></script>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SpecialtiesList />}></Route>
          <Route path="/:id" element={<Content />} exact></Route>
        </Routes>
        <Filter />
      </BrowserRouter>
    </div>
  );
}

export default App;
