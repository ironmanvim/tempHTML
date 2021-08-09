export const useState = (init) => {
    const hell = {
        value: init,
    };

    return [hell, (newInit) => {
        hell.value = newInit(hell.value);
    }]
}