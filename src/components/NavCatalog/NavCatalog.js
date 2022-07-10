import React, {useState} from "react";

import styles from "./NavCatalog.module.css";
import Products from "../Products/Products";

function NavCatalog(props) {
    const [category, setCategory] = useState(1);

    function changeCategory(event) {
        if (event.target.value !== undefined) {
            setCategory(event.target.value);
            const childNodes = event.target.parentElement.childNodes;
            for (let i = 0; i < childNodes.length; i++) {
                childNodes[i].className = styles.inactive;
            }
            event.target.className = styles.active;
        }
    }
    return (
        <>
           <ul onClick={changeCategory} className={styles.catalog}>
               {
                   props.array.map(item => (
                       <li className={styles.inactive} value={item.id} key={item.id}>{item.title}</li>
                   ))
               }
           </ul>
           <Products category={category}/>
        </>
    )
}

export default NavCatalog;