import React from "react";
import products from "../../utils/products";
import styles from "./Products.module.css";

import jewelry1 from "../../images/Products/Jewelry1.jpg"

function changer(event) {
    if (event.target.className === styles.button) {
        event.target.className = styles.pressed;
        event.target.innerText = "В корзине";
    }
    else {
        event.target.className = styles.button;
        event.target.innerText = "В корзину";
    }
}
function Products (props) {
    const category = String(props.category);
    return (
        <>
            <div className={styles.product}>
                {
                    products[category].map(item => (
                        <React.Fragment key={item.id}>
                            <div className={styles.inners}>
                                <img className={styles.prod} src={jewelry1}  alt={item.name}/>
                                <p>{item.name}</p>
                                <p>{item.price}$</p>
                                <button onClick={changer} className={styles.button}>В корзину</button>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}
export default Products;