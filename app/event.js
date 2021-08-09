let id = 0;

export const event = (e) => {
    console.log(e);
    const currentId = id++;
    const listener = () => {
        console.log("document loaded");
        const ele = document.getElementById(`${currentId}`);

        ele.addEventListener(Object.keys(e)[0], () => { e[Object.keys(e)[0]](); e[Object.keys(e)[0]].caller() });
        window.removeEventListener("DOMSubtreeModified", listener);
        ele.removeAttribute("id");
    }
    window.addEventListener("DOMSubtreeModified", listener)
    return `id='${currentId}'`;
}