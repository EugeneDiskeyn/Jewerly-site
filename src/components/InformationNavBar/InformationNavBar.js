import styles from "./InformationNavBar.module.css";
import React from "react";
import telephone from "../../images/icons/telephone.png";

function InformationNavBar(props) {
    return (
        <div className={styles.nav}>
            <div className={styles.all}>
                <ul className={styles.list}>
                    {
                        props.array.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))
                    }
                </ul>
                <div>
                    <img src={telephone} alt={"phone"}/>
                    +375335468217
                </div>
            </div>
        </div>
    );
}

export default InformationNavBar;