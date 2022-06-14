import React, {useState} from "react";

import styles from "./NavCatalog.module.css";
import Products from "../Products/Products";

function NavCatalog(props) {
    const [category, setCategory] = useState("");
    const [isViewCategory, setIsViewCategory] = useState(false);
    function changeCategory(event) {
        setCategory(event.target.textContent);
        setIsViewCategory(true);
    }
    return (
        <>
           <ul  className={styles.catalog}>
               {
                   props.array.map(item => (
                       <li onClick={changeCategory} name={item.title} key={item.id}>{item.title}</li>
                   ))
               }
           </ul>
           <Products category={category}/>
        </>
    )
}

export default NavCatalog;