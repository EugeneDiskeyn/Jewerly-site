import React from "react";
import styles from "./Searcher.module.css"
import heart from "../../images/icons/free-icon-favourite-heart-20119.png"
import cart from "../../images/icons/free-icon-shopping-cart-1332655.png"
import person from "../../images/icons/profile.png"
import logo from "../../images/icons/logo.png"

function Searcher() {
    return (
        <div className={styles.parent_search}>
            <input />
            <img className={styles.logoSize} src={logo} alt={"logo"} />
            <span>
                <img className={styles.iconSize} src={person} alt={"Person"} />
                <img className={styles.iconSize} src={heart} alt={"Heart"} />
                <img className={styles.iconSize} src={cart} alt={"Cart"} />
            </span>
        </div>
    )
}

export default Searcher;