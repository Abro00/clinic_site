const menuBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navigation-menu')

menuBtn.onclick = () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('open');
}

const right = document.querySelectorAll('.arrow.right');
const left = document.querySelectorAll('.arrow.left');
const slider = document.querySelector('.slider-carousel');
const counter = document.querySelector('.counter');

right.forEach((a) => {
    a.addEventListener('click', function (event) {
        console.log('Произошло событие', event.type);

        switch (slider.style.transform) {
            case "":
                slider.style.transform = 'translateX(570px)';
                counter.innerHTML = "2<span>/4</span>";
                break;

            case "translateX(570px)":
                slider.style.transform = 'translateX(-570px)';
                counter.innerHTML = "3<span>/4</span>";
                break;

            case "translateX(-570px)":
                slider.style.transform = 'translateX(-1710px)';
                counter.innerHTML = "4<span>/4</span>";
                break;

            case "translateX(-1710px)":
                slider.style.transform = '';
                counter.innerHTML = "1<span>/4</span>";
                break;
        }
    })
}
)

left.forEach((a) => {
    a.addEventListener('click', function (event) {
        console.log('Произошло событие', event.type);

        switch (slider.style.transform) {
            case "":
                slider.style.transform = 'translateX(-1710px)';
                counter.innerHTML = "4<span>/4</span>";
                break;

            case "translateX(570px)":
                slider.style.transform = '';
                counter.innerHTML = "1<span>/4</span>";
                break;

            case "translateX(-570px)":
                slider.style.transform = 'translateX(570px)';
                counter.innerHTML = "2<span>/4</span>";
                break;

            case "translateX(-1710px)":
                slider.style.transform = 'translateX(-570px)';
                counter.innerHTML = "3<span>/4</span>";
                break;
        }
    })
}
)