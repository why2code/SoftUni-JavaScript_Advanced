function solve() {
    const resField = document.querySelector('.info');
    const deptBtn = document.querySelector('#depart');
    const arrBtn = document.querySelector('#arrive');

    let stopId = 'depot';
    let stopName = '';

    async function depart() {
        let info = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopId}`);
        let result = await info.json();
        stopName = result.name;
        resField.textContent = `Next stop ${stopName}`;
        stopId = result.next;

        deptBtn.disabled = true;
        arrBtn.disabled = false;
    }

    
    function arrive() {
        resField.textContent = `Arriving at ${stopName}`;
        deptBtn.disabled = false;
        arrBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();