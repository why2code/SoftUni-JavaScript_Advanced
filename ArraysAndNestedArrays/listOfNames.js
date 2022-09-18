function sort(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    let counter = Number(1);

    arr.forEach(element => {
        console.log((`${counter++}.`) + element);
    });
}

sort(["John", "Bob", "Christina", "Ema"]);