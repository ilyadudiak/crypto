const burger = document.querySelector('.burger');
const menu = document.querySelector('.burger-menu');
burger.classList.add('burger-normal');
burger.addEventListener('click', function () {
    burger.classList.toggle('burger-rev');
    burger.classList.toggle('burger-normal');


    if (menu.classList.contains('shown')) {
        setTimeout(() => menu.style.display = "none", 1000);
    } else {
        menu.style.display = "flex";
    }
    menu.classList.toggle('shown');
    document.body.classList.toggle('no-overflow');

});
// window.addEventListener('resize', function () {
//     if (window.innerWidth < 400) {
//         let divs = document.querySelectorAll('div');
//         divs.forEach(div => {
//             if (div.classList.contains('aos-init')) {
//                 div.classList.remove('aos-init');

//             }

//         });
//     }
// })
