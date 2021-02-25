var modalWindow = document.querySelector(".modal");
var burger = document.querySelector("#burger");
var overlay = document.querySelector(".modal__overlay");
var modalView = document.querySelector(".modal__window");
var modalX = document.querySelector(".modal-x");
var body = document.querySelector("body");
var plus = document.querySelectorAll(".plus");
var teamModal = document.querySelectorAll(".our-team__item");

burger.addEventListener("click", function (e){
    body.classList.add("no-scroll");     
    modalWindow.classList.add("opened");
    modalView.classList.add("opened");
    overlay.classList.add("opened");
});

modalX.addEventListener('click', function (e){
    body.classList.remove('no-scroll');
    modalWindow.classList.remove("opened");
    modalView.classList.remove("opened");
    overlay.classList.remove("opened");
});

function allClassRemover(clickedElement) {
    teamModal.forEach(item => {
        if(item.dataset.itemOrder != clickedElement.dataset.itemOrder){
            item.classList.remove('opened');
        } else {
            item.classList.toggle('opened');
        }
    });
}


plus.forEach(item => {
    item.addEventListener('click', function () {
        allClassRemover(item);
    })
});