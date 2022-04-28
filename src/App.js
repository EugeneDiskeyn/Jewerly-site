import './App.css';
import React from "react";
import InformationNavBar from "./components/InformationNavBar/InformationNavBar";
import NavCatalog from "./components/NavCatalog/NavCatalog"
import SomeClasses from "./components/SomeClasses/SomeClasses";

function App() {
    const navList = [
        {
            id: 1,
            title: "Адреса магазинов"
        },
        {
            id: 2,
            title: "Оплата и доставка"
        },
        {
            id: 3,
            title: "Гарантия"
        },
        {
            id: 4,
            title: "Программа лояльности"
        }
    ];
    const navCatalog = [
        {
            id: 1,
            title: "Кольца"
        },
        {
            id: 2,
            title: "Серьги"
        },
        {
            id: 3,
            title: "Цепочки"
        },
        {
            id: 4,
            title: "Кулоны"
        },
        {
            id: 5,
            title: "Броши"
        },
        {
            id: 6,
            title: "Подвески и колье"
        },
        {
            id: 7,
            title: "Часы"
        }
    ];
    return (
        <>
          <InformationNavBar array={navList}/>
          <NavCatalog array={navCatalog} />
          <SomeClasses />
        </>
    );
}

export default App;