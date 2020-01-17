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
    send.removeClass('send--visible');
  });

  /*document.on('click', function (event) {
    if (event.target == modal) {
      modal.removeClass('modal--visible');
    }
  });

  document.on('keydown', function (event) {
    if (event.keyCode === 27) {
      modal.removeClass('modal--visible');
    }
  });*/

  // Подключение swiper
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
    initialSlide: 2
  });

  // Маска для телефона ------------------------------------------
  $('[type=tel]').mask('+7(000)000-00-00');

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

  YaMapsShown = false;
  YaMapsMinShown = false;

  $(window).scroll(function () {
    if (!YaMapsShown) {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 700) {
        showYaMaps();
        YaMapsShown = true;
      }
    }
  });

  function showYaMaps() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7ce79f0f7e8e05dd84bab98d41ac9ee829dc4f5b8db0a7175aa19b793182aeec&amp;width=100%25&amp;height=563&amp;lang=ru_RU&amp;scroll=false";
    document.getElementById("YaMaps").appendChild(script);
  };

  $(window).scroll(function () {
    if (!YaMapsMinShown) {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 500) {
        showYaMapsMin();
        YaMapsMinShown = true;
      }
    }
  });

  function showYaMapsMin() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A80a8d908d7932286e60a29d9f4460c0064bce8e449d5507a61d16254ba29e9dd&amp;width=100%25&amp;height=255&amp;lang=ru_RU&amp;scroll=false";
    document.getElementById("YaMapsMin").appendChild(script);
  }


  // <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7ce79f0f7e8e05dd84bab98d41ac9ee829dc4f5b8db0a7175aa19b793182aeec&amp;width=100%25&amp;height=563&amp;lang=ru_RU&amp;scroll=true"></script>
  //   <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A80a8d908d7932286e60a29d9f4460c0064bce8e449d5507a61d16254ba29e9dd&amp;width=100%25&amp;height=255&amp;lang=ru_RU&amp;scroll=true"></script>
})