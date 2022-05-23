import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Filter from "./components/Filter/Filter";
import SpecialtiesList from "./components/SpecialtiesList/SpecialtiesList";
import Settings from "./components/Settings/Settings";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [filter, setFilter] = useState();
  const [isFind, setIsFind] = useState(false);
  const [data, setData] = useState(["1"]);

  return (
    <div className="App">
      <script defer src="https://pyscript.net/alpha/pyscript.js"></script>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<SpecialtiesList setDataInfo={setData} />}
          ></Route>
          <Route
            path="/:id"
            element={<Content filter={filter} isFind={isFind} />}
            exact
          ></Route>
          <Route path="/settings" element={<Settings />} exact></Route>
        </Routes>
        <Filter changeFilter={setFilter} isFind={setIsFind} infoData={data} />
      </BrowserRouter>
    </div>
  );
}

export default App;
