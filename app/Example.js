import { component } from "./component.js";
import { event } from "./event.js";
import { html } from "./html.js";

export const Example = component((props) => {
    let a = 100;
    return html`
    <div style="color: ${props.color}" ${event({
        click: () => {
            console.log("Hello Component", a);
            a++;
        }
    })}>
        This is our first App
        ${props.children} ${a}
    </div>
    `;
})