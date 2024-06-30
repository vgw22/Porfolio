$(document).ready(function() {
    $('.hamburguer-menu').click(function() {
        $('.header__navbar').slideToggle();
    })
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function copyInfo(id) {
    var copyInfo = document.getElementById(id).textContent;
    navigator.clipboard.writeText(copyInfo).then(function() {
        alert("Copiado: " + copyInfo);
    }, function(err) {
        console.error('Erro ao copiar texto: ', err);
    });
}