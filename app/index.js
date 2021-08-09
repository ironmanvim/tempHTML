import { component } from "./component.js";
import { event } from "./event.js";
import { Example } from "./Example.js";
import { html } from "./html.js";

export default component(() => {
    let m = 300;
    const click = () => {
        console.log("clicked", m++);
        
    }

    return html`
    <div style="color: red" ${event({ click })}>
        Hell ok
        ${Example({
            color: "red",
        })`
            <div style="color:blue">
                Blue ${123}
            </div>
        `}
        ${Example({
            color: "green",
        })}
        ${Example({
            color: "yellow",
        })}
        ${["red", "blue", "green", "black", "voilet"].map(color => {
            return html`
            ${Example({
                color,
            })`${color}`}
            `;
        })}
    </div>
    `;
})
