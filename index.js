import app from "./app/index.js";
import { render } from "./app/render.js";

function initialize() {
    document.body.appendChild(render(app()``));
}

window.addEventListener("load", initialize);