$(document).ready(function () {

  var modal = $('.modal');
  var modalBtn = $('[data-toggle=modal]');
  var closeBtn = $('.modal__close');
  var send = $('.send');
  var sendBtn = $('[data-toggle=modal-send]');
  var closeSendBtn = $('.send__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeSendBtn.on('click', function () {
    send.toggleClass('send--visible');
  });

  document.on('click', function (event) {
    if (event.target == modal) {
      modal.classList.remove('modal--visible');
    }
  });

  document.on('keydown', function (event) {
    if (event.keyCode === 27) {
      modal.classList.remove('modal--visible');
    }
  });

  //initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    initialSlide: 2,
    autoHeight: true
  });

  // Валидация форм --------------------------------------------
  $('#hero-form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 10
      },
      userEmail: {
        required: true,
        email: true
      }
    },
    // Сообщения .hero__form
    messages: {
      userName: {
        required: "Назовите своё имя",
        minlength: "Имя не должно быть короче двух символов",
        maxlength: "Имя не должно быть длинее 15 символов"
      },
      userPhone: {
        required: "Назовите свой телефон",
        minlength: "Номер должен быть из 10 цифр"
      },
      userEmail: {
        required: "Укажите свой Email",
        email: "Введите в формате: name@domain.com"
      }
    },
    // ajax .hero__form
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал: ' + response);
          $(form)[0].reset();
          $(send).toggleClass('send--visible');
          $(".send__title").text(response);
        },
        error: function (response) {
          console.log('Ajax не сработал: ' + response);
        }
      });
    }
  });
  $('#offer-form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 10
      },
      userEmail: {
        required: true,
        email: true
      }
    },
    // Сообщения .offer__form
    messages: {
      userName: {
        required: "Назовите своё имя",
        minlength: "Имя не должно быть короче двух символов",
        maxlength: "Имя не должно быть длинее 15 символов"
      },
      userPhone: {
        required: "Назовите свой телефон",
        minlength: "Номер должен быть из 10 цифр"
      },
      userEmail: {
        required: "Укажите свой Email",
        email: "Введите в формате: name@domain.com"
      }
    },
    // ajax .offer__form
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал: ' + response);
          $(form)[0].reset();
          $(send).toggleClass('send--visible');
          $(".send__title").text(response);
        },
        error: function (response) {
          console.log('Ajax не сработал: ' + response);
        }
      });
    }
  });
  $('#modal-form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 10
      }
    },
    // Сообщения .modal__form
    messages: {
      userName: {
        required: "Назовите своё имя",
        minlength: "Имя не должно быть короче двух символов",
        maxlength: "Имя не должно быть длинее 15 символов"
      },
      userPhone: {
        required: "Назовите свой телефон",
        minlength: "Номер должен быть из 10 цифр"
      }
    },
    // ajax .modal__form
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал: ' + response);
          $(form)[0].reset();
          $(modal).removeClass('modal--visible');
          $(send).toggleClass('send--visible');
          $(".send__title").text(response);
        },
        error: function (response) {
          console.log('Ajax не сработал: ' + response);
        }
      });
    }
  });

  // Маска для телефона ------------------------------------------
  $('[type=tel]').mask('+7(000)000-00-00');




})