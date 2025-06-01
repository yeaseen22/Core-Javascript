
window.intervalIdTricker = 1000;
window.intervals = {};

window.setInterval = function (callback, interval, ...args) {
    const intervalId = window.intervalIdTricker++;

    function execute() {
        callback()
        window.intervals[intervalId].interval += interval
    }

    const timeToCall = Date.now() + interval;
    window.intervals[intervalId] = { callback: execute, interval: timeToCall, args }
    if (Object.keys(window.intervals).length === 1) {
        processInterval()
    }

    return intervalId;
}

function processInterval() {
    function executeIntervals(key) {
        const { callback, interval, args } = window.intervals[key]

        if (Date.now() >= interval) {
            callback(...args)
        } else {
            requestIdleCallback(processInterval)
        }
    }

    Object.keys(window.intervals).forEach(executeIntervals)
}

window.clearInterval = function (id) {
    delete window.intervals[id]
}

setInterval(() => {
    console.log('learning Frontend');
}, 1000)

function showName(name) {
    console.log("Name is", name);
}

console.log("1");
setInterval(showName, 1000, "silver surfer")
console.log("2");

console.log(window.intervals);
