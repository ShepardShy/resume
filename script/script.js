// Предотвращение закрытия меню при нажатии
$(".nav__menu").click(function(){
    $(this).prop('open', false);
})

// Открытие модального окна
$('.header__button').click(function () {
    showModal()
})
// отмена закрытия модального окна при нажатии на контент
$('.modal__content').click(function (event) {
    event.stopPropagation()
})
// отправка значений и закрытие модального окна
$('.modal__button').click(function () {
    let errors = 0
    // Валидация
    errors += validateModal($('.modal__select-service > option:selected'))
    errors += validateModal($('.modal__select-list_visible > option:selected'))
    errors += validateModal($("#name"))
    errors += isEmail($("#email"))
    errors += validateModal($("#phone"))
    errors += validateModal($("#date"))
    errors += validateModal($("#time"))

    if (errors == 0) {
        // Запись значений в один объект
        const Call = {
            type: $('.modal__select-service > option:selected').val(),
            service: $('.modal__select-list_visible > option:selected').val(),
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            date: $("#date").val().split('-').reverse().join('.'),
            time: $("#time").val()
            }
        // Отправка значений
        console.log(Call)
        hideModal()
        // Обнуление значений
        clearModal()
    } else {
        return
    }

})
// Выбор вида услуги
$('.modal__select-service').change(function (event) {
    $('.modal__select-list').removeClass('modal__select-list_visible')
    $('.modal__select').addClass('modal__select_visible')
    switch (event.target.value) {
        case 'Стрижки, прически, укладки':
            $('.modal__select-list-haircut').addClass('modal__select-list_visible')
            break;
        case 'Колористика и лечение волос':
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
            console.log('Ошибка')
            break;
    }
})


// Открытие модального окна
$('.menu').click(function () {
    showMenu()
})
// отмена закрытия модального окна при нажатии на контент
$('.mobile__content').click(function (event) {
    event.stopPropagation()
})



// Function

function showMenu() {
    $('body').addClass('body_unscrolling')
    $('.mobile').addClass('mobile__visible')
}

function hideMenu() {
    $('.mobile').removeClass('mobile__visible')
    $('body').removeClass('body_unscrolling')

}

function showModal() {
    $('body').addClass('body_unscrolling')
    $('.modal').addClass('modal_visible')
    $('.modal__item').removeClass('error')
}

function hideModal() {
    $('.modal').removeClass('modal_visible')
    $('body').removeClass('body_unscrolling')

}

function validateModal(value) {
    let errors = 0
    if (value.val() == 'none' || value.val() == '' || value.val() == undefined){
        value.parents('.modal__item').addClass('error')
        errors = 1
    } else {
        value.parents('.modal__item').removeClass('error')
    }
    return errors
}

function isEmail(value) {
    let errors = 0
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (regex.test(value.val())){
        value.parents('.modal__item').removeClass('error')
    } else {
        value.parents('.modal__item').addClass('error')
        errors = 1
    }
    return errors 
  }

  function clearModal() {
    $('.modal__select-service option[value="none"]').prop('selected', true);
    $('.modal__select').removeClass('modal__select_visible')
    $("#name").val("")
    $("#email").val("")
    $("#phone").val("")
    $("#date").val("")
    $("#time").val("")
  }