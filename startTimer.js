function startTimer(callback, interval) {
    // Write the code that goes here
    let count = 0;
    let wait = setInterval(function() {
    count++;

    if (!callback(count)) {      
        clearInterval(wait);
    }
    }, interval);
}

function callback(counter) {
    console.log(counter);
    return counter < 5;
}

  // Expected: 1, 2, 3, 4, 5 with 50ms interval.
startTimer(callback, 50);