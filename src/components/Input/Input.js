import styles from "./Input.module.css";
import React from "react";

function Input(props) {
    return (
        <>
            <div>
                {props.name}
            </div>
        </>
    );
}

export default Input;