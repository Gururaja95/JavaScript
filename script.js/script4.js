//Collect Input Range from User to perform the above

document.getElementById('rangeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const start = parseInt(document.getElementById('start').value, 10);
    const end = parseInt(document.getElementById('end').value, 10);

    if (isNaN(start) || isNaN(end) || start > end) {
        alert('Please enter a valid range.');
        return;
    }

    const result = performAction(start, end);

    document.getElementById('output').innerText = 'Result: ' + result;
});

function performAction(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}
document.addEventListener('DOMContentLoaded', function() {
    const rangeInput = document.getElementById('rangeInput');
    const rangeValue = document.getElementById('rangeValue');
    rangeInput.addEventListener('input', function() {
        rangeValue.textContent = rangeInput.value;
    });
});
