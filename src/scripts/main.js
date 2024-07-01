$(document).ready(function() {
    $('.hamburguer-menu').click(function() {
        $('.header__navbar').slideToggle();
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

function copyInfo(id) {
    const copyText = document.getElementById(id).textContent;
    navigator.clipboard.writeText(copyText)
        .then(() => {
            alert("Copiado: " + copyText);
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
}

document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('header--is-scrolling');
    } else {
        header.classList.remove('header--is-scrolling');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarItems = document.querySelectorAll('.header__navbar__item a');
    const sections = document.querySelectorAll('.section');
    let offset = 50;

    function removeActiveClasses() {
        navbarItems.forEach(item => item.classList.remove('header__navbar__item--is-active'));
    }

    function addActiveClass(sectionId) {
        removeActiveClasses();
        const activeItem = document.querySelector(`.header__navbar__item a[href="#${sectionId}"]`);
        if (activeItem) {
            activeItem.classList.add('header__navbar__item--is-active');
        }
    }

    function onScroll() {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            addActiveClass(currentSectionId);
        } else {
            removeActiveClasses();
        }
    }

    function setOffsetForMobile() {
        if (window.innerWidth < 768) {
            offset = 100;
        } else {
            offset = 50;
        }
    }

    document.addEventListener('scroll', onScroll);
    window.addEventListener('resize', setOffsetForMobile);

    onScroll();
    setOffsetForMobile();
});
