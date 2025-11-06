document.getElementById('searchbutton').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'superheroes.php', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert(xhr.responseText);
            } else {
                alert('Failed to fetch superheroes. Status: ' + xhr.status);
            }
        }
    };
    xhr.send();
});