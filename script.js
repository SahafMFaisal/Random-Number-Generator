document.getElementById('randomNumberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value);
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').innerText = 'Random number: ' + result;
});