//Выбор цены
$('.card__option').find('input').change(function(event) {
    $('.card__value').text(event.target.value)
    $('label').removeClass('label_targeted')
    $(event.target).parent().find('label').addClass('label_targeted')
})

//Слайдеры для превью
$(document).ready(function(){
    $('.slider__preview').slick({
        arrows: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.slider__preview-list').slick({
        slidesToShow: 4,
        infinite: false
    });

    $('.slider__recomended').slick({
        slidesToShow: 6,
        infinite: false
    });
})

// Запись на услугу
$(".card__button").click(function() {
    showModal()
    $('.modal__select-service').val("Стрижки, прически, укладки")
    $('.modal__select-list').removeClass('modal__select-list_visible')
    $('.modal__select').addClass('modal__select_visible')
    switch ($('.modal__select-service').val()) {
        case 'Стрижки, прически, укладки':
            $('.modal__select-list-haircut').addClass('modal__select-list_visible')
            $('.modal__select-list-haircut').val("Стрижка волос")
            break;
        case 'Колористика и лечение волос':
            console.log('сука ответь 2')
            $('.modal__select-list-coloristics').addClass('modal__select-list_visible')
            break;
        case 'Завивка волос':
            $('.modal__select-list-perm').addClass('modal__select-list_visible')
            break;
        case 'Плетение кос':
            $('.modal__select-list-braiding').addClass('modal__select-list_visible')
            break;
        case 'Услуги для мужчин':
            $('.modal__select-list-men').addClass('modal__select-list_visible')
            break;
        case 'Ногтевой сервис':
            $('.modal__select-list-nails').addClass('modal__select-list_visible')
            break;
        default:
            break;
    }
})
