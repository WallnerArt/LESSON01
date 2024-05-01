document.getElementById('getCatFact').addEventListener('click', function() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('catFact').innerHTML = data.fact;
            document.getElementById('catFact').style.color = 'white'; // Сброс цвета текста
        })
        .catch(error => {
            document.getElementById('catFact').innerHTML = 'Error loading cat fact: ' + error;
            document.getElementById('catFact').style.color = 'red'; // Выделение ошибки
        });
});
