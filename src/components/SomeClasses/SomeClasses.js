import React from "react";

function SomeClasses() {
    function handler() {
        console.log("I work");
    }
    const Someclasses = [
        {
            id: 1,
            item1: "one",
            item2: "two",
            arr: [1,2,3,4,5]
        },
        {
            id: 2,
            item1: "one-one",
            item2: "two-two"
        },
    ];
    return (
        <button onClick={handler}>Click</button>
    )
}

export default SomeClasses;