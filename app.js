document.getElementById('searchbutton').addEventListener('click', function(){
    var query = document.getElementById('searchInput').value.trim();

    query = query.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'superheroes.php?query=' + encodeURIComponent(query), true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            var resultDiv = document.querySelector('.result');
            if(xhr.status === 200){
                resultDiv.innerHTML = xhr.responseText;
            } else{
                resultDiv.innerHTML = 'Failed to fetch superheroes. Status: ' + xhr.status;
            }
        }
    };
    xhr.send();
});
