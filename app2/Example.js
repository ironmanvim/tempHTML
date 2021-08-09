import { combine } from "./combine.js";
import { divide } from "./divide.js";
import { useState } from "./newState.js";

export const Example = () => {
    const [state, setstate] = useState(0);

    const newElement = document.createElement("div");
    const innerHTML = divide`hello ${state}`;
    newElement.innerHTML = combine(innerHTML);
    newElement.addEventListener("click", () => {
        setstate(prev => prev + 1);
        newElement.innerHTML = combine(innerHTML);
    })
    return newElement
};