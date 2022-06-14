import './App.css';
import React from "react";
import InformationNavBar from "./components/InformationNavBar/InformationNavBar";
import Searcher from "./components/Searcher/Searcher"
import NavCatalog from "./components/NavCatalog/NavCatalog"
import catalog from "./utils/catalog"
import navList from "./utils/list";

function App() {
    return (
        <>
          <InformationNavBar array={navList.items}/>
          <Searcher />
          <NavCatalog array={catalog.items}/>
        </>
    );
}

export default App;