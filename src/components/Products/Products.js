import React from "react";
import products from "../../utils/products";
import styles from "./Products.module.css"

function Products (props) {
    const category = String(props.category);
    return (
        <>
            <div className={styles.product}>
                {
                    products[category].map(item => (
                        <React.Fragment key={item.id}>
                            <div className={styles.inners}>
                                <img alt={item.name}/>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}
export default Products;