import { html } from "./html.js";

export const component = (func) => {
    return (props) => (children, ...vars) => func({
        ...props,
        children: html(children, ...vars),
    });
}