export const combine = ([strings, ...vars]) => {

    let res = '';
    for (let i = 0; i < vars.length; i++) {
        res += strings[i] + vars[i].value;
    }
    res += strings[strings.length - 1];
    console.log("trips", strings, vars);

    // console.log(res);
    return res;
}