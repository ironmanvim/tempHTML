export const html = (strings, ...vars) => {
    let res = '';
    for (let i = 0; i < vars.length; i++) {
        if (typeof vars[i] === "string") {
        }
        else if (typeof vars[i] === "function") {
            vars[i] = vars[i](['']);
        }
        else if (Array.isArray(vars[i])) {
            vars[i] = vars[i].join("")
        } 
        else if (vars[i] === undefined) {
            vars[i] = '';
        }
        res += strings[i] + vars[i];
    }
    res += strings[strings.length - 1];
    // console.log("trips", strings, vars);

    // console.log(res);
    return res;
}