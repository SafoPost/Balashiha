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

  var prodOne = $('.product-one');
  var prodTwo = $('.product-two');
  var prodThree = $('.product-three');
  var prodFour = $('.product-four');
  var prodFive = $('.product-five');
  var prodSix = $('.product-six');
  var oneBtn = $('[data-toggle=product-one]');
  var twoBtn = $('[data-toggle=product-two]');
  var threeBtn = $('[data-toggle=product-three]');
  var fourBtn = $('[data-toggle=product-four]');
  var fiveBtn = $('[data-toggle=product-five]');
  var sixBtn = $('[data-toggle=product-six]');
  var closeProdBtn = $('.product__back');

  oneBtn.on('click', function () {
    prodOne.toggleClass('product-one--visible');
  });
  closeProdBtn.on('click', function () {
    prodOne.removeClass('product-one--visible');
  });

  twoBtn.on('click', function () {
    prodTwo.toggleClass('product-two--visible');
  });
  closeProdBtn.on('click', function () {
    prodTwo.removeClass('product-two--visible');
  });

  threeBtn.on('click', function () {
    prodThree.toggleClass('product-three--visible');
  });
  closeProdBtn.on('click', function () {
    prodThree.removeClass('product-three--visible');
  });

  fourBtn.on('click', function () {
    prodFour.toggleClass('product-four--visible');
  });
  closeProdBtn.on('click', function () {
    prodFour.removeClass('product-four--visible');
  });

  fiveBtn.on('click', function () {
    prodFive.toggleClass('product-five--visible');
  });
  closeProdBtn.on('click', function () {
    prodFive.removeClass('product-five--visible');
  });

  sixBtn.on('click', function () {
    prodSix.toggleClass('product-six--visible');
  });
  closeProdBtn.on('click', function () {
    prodSix.removeClass('product-six--visible');
  });


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
        minlength: "Имя должно быть длинее 2 букв",
        maxlength: "Имя должно быть короче 15 букв"
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
        minlength: "Имя должно быть длинее 2 букв",
        maxlength: "Имя должно быть короче 15 букв"
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
        minlength: "Имя должно быть длинее 2 букв",
        maxlength: "Имя должно быть короче 15 букв"
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
  };

  var player;
  $('.advantage__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('advantage-player', {
      height: '267',
      width: '100%',
      videoId: 'bNU1DAD3q98',
      events: {
        'onReady': videoPlayA,
      }
    });
  })
  function videoPlayA(event) {
    event.target.playVideo();
  };

  var player;
  $('.video__play-1').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('about-player-1', {
      height: '267',
      width: '100%',
      videoId: 'J5SaaPZVvGY',
      events: {
        'onReady': videoPlayB,
      }
    });
  })
  function videoPlayB(event) {
    event.target.playVideo();
  };

  $('.video__play-2').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('about-player-2', {
      height: '267',
      width: '100%',
      videoId: 'ACtD2W1ihWw',
      events: {
        'onReady': videoPlayC,
      }
    });
  })
  function videoPlayC(event) {
    event.target.playVideo();
  };

  $('.video__play-3').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('about-player-3', {
      height: '267',
      width: '100%',
      videoId: 'cB-K8BTcUKU',
      events: {
        'onReady': videoPlayD,
      }
    });
  })
  function videoPlayD(event) {
    event.target.playVideo();
  };

  $('.video__play-4').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('about-player-4', {
      height: '267',
      width: '100%',
      videoId: '0UhOaQ_lxl0',
      events: {
        'onReady': videoPlayE,
      }
    });
  })
  function videoPlayE(event) {
    event.target.playVideo();
  };

  $('.video__play-5').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('about-player-5', {
      height: '267',
      width: '100%',
      videoId: 'GVDJ8O3lPBA',
      events: {
        'onReady': videoPlayF,
      }
    });
  })
  function videoPlayF(event) {
    event.target.playVideo();
  };


})