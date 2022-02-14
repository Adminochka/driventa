$(function (){

    document.querySelector(".form-year__list").addEventListener("change", calculate);

    document.querySelectorAll('[name="carType"]').forEach((radio) => {
        radio.addEventListener("change", calculate);
    });

    const type = {
        sedan: 500,
        hatchback: 900,
        microcar: 1300,
        familyCar: 1200,
        van: 1000,
        stationWagon: 1100,
        car4: 800
    };

    const yearsCoef = {
        2021: 1,
        2020: 0.9,
        2019: 0.8,
        2018: 0.7
    };

    function getPrice(price, coef) {
        return Math.round(price * coef);
    }

    function calculate() {
        const year = document.querySelector("[name=year]").value;
        const carType = document.querySelector("[name=carType]:checked").value;
        document.querySelector(".placeCar__form-totalSpan").innerText = "€" + getPrice(
          type[carType],
          yearsCoef[year]);
    }


    $(document).ready(function() {
        $('.js-example-basis-single').select2({
            placeholder: "2021" ,
            minimumResultsForSearch: -1
        });
    });

    const menuBtn = document.querySelector('.menu__btn'),
          menuHeader = document.querySelector('.menu__list');

    menuBtn.addEventListener('click', () => {
        menuHeader.classList.toggle('header__menu--active');
        menuBtn.classList.toggle('menu__btn--active');
    });

});
