import styles from "./InformationNavBar.module.css";
import React from "react";

function InformationNavBar(props) {
    return (
        <>
            <div className={styles.all}>
                <ul className={styles.ap}>
                    {
                        props.array.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))
                    }
                </ul>
                <div>
                    +375335468217
                </div>
            </div>
        </>
    );
}

export default InformationNavBar;