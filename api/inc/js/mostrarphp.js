document.addEventListener('DOMContentLoaded', function() {
    var textDivs = document.querySelectorAll('[id^="text"]');

    textDivs.forEach(function(textDiv) {
        var phpDiv = textDiv.nextElementSibling;

        textDiv.addEventListener('click', function() {
            if (phpDiv.style.display === 'flex') {
                phpDiv.style.display = 'none';
            } else {
                phpDiv.style.display = 'flex';

                if (!phpDiv.hasAttribute('data-loaded')) {
                    var url = phpDiv.getAttribute('data-url');
                    fetch(url)
                        .then(response => response.text())
                        .then(data => {
                            phpDiv.innerHTML = data;
                            phpDiv.setAttribute('data-loaded', 'true');
                        })
                        .catch(error => console.error('Error al cargar el contenido:', error));
                }
            }
        });
    });
});