import styles from "./NavCatalog.module.css";
import React from "react";

function NavCatalog(props) {
    return (
        <>
           <ul>
               {
                   props.array.map(item => (
                       <li key={item.id}>{item.title}</li>
                   ))
               }
           </ul>
        </>
    )
}

export default NavCatalog;