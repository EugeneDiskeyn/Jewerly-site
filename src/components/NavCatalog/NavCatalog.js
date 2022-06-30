import React, {useState} from "react";

import styles from "./NavCatalog.module.css";
import Products from "../Products/Products";

function NavCatalog(props) {
    const [category, setCategory] = useState(1);

    function changeCategory(event) {
        setCategory(event.target.value);
    }
    return (
        <>
           <ul  className={styles.catalog}>
               {
                   props.array.map(item => (
                       <li onClick={changeCategory} value={item.id} key={item.id}>{item.title}</li>
                   ))
               }
           </ul>
           <Products category={category}/>
        </>
    )
}

export default NavCatalog;