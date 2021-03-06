$result_html = preg_replace(
  ['/ {2,}/', '/<!--.*?-->|\t|(?:\r?\n[ \t]*)+/s'],
  [' ', ''],
  $result_html
);
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
        minlength: 12
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
        minlength: "Номер должен быть из 12 цифр"
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
        minlength: 12
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
        minlength: "Номер должен быть из 12 цифр"
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
        minlength: 12
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

  // YaMapsShown = false;
  // $(window).scroll(function () {
  //   if (!YaMapsShown) {
  //     if ($(window).scrollTop() + $(window).height() > $(document).height() - 700) {
  //       showYaMaps();
  //       YaMapsShown = true;
  //     }
  //   }
  // });
  // function showYaMaps() {
  //   var script = document.createElement("script");
  //   script.type = "text/javascript";
  //   script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7ce79f0f7e8e05dd84bab98d41ac9ee829dc4f5b8db0a7175aa19b793182aeec&amp;width=100%25&amp;height=563&amp;lang=ru_RU&amp;scroll=false";
  //   document.getElementById("YaMaps").appendChild(script);
  // };

  // Карта с меткой для desktop
  ymaps.ready(init);

  function init() {
    var myMap;
    setTimeout(function () {

      myMap = new ymaps.Map('YaMaps', {
        center: [55.738024, 37.510322],
        zoom: 17,

      });
      var placemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Наша пекарня',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<div class="balloon"><img src="../img/balloon_img.jpg" class="balloon__img"><div class="balloon--right"><h4 class="balloon__header">Мы находимся:</h4><span class="balloon__text">г. Москва, ул. Неверовского, д. 9<br>Телефон: </span> <a href="tel:+7-495-495-44-44" class="balloon__phone">+7 (495) 444-44-44<br></a><span class="balloon__footer">E-mail:<a href="mailto:info@ied.ru" class="balloon__email"> info@ied.ru</a></span></div></div>',
      });
      // Добавим метку на карту.
      myMap.geoObjects.add(placemark);
      // Откроем балун на метке.
      placemark.balloon.open();

      myMap.geoObjects
        .add(placemark);
      myMap.behaviors.disable('scrollZoom');


    }, 6000);
  }

  // Карта для mobile
  YaMapsMinShown = false;
  $(window).scroll(function () {
    if (!YaMapsMinShown) {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 800) {
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

  var addmap = false;
  $(window).scroll(function () {
    var el = $('YaMapsMin')
    if ($(this).scrollTop() > el.offset().top - 800) {
      if (addmap) return;
      addmap = true;
      var script = document.createElement('script');
      script.src = "https://api-maps.yandex.ru/2.1/?apikey=522725e7-5573-47cd-a7ff-730cc2cc1e63&lang=ru_RU&onload=init";
      $('body').append(script);
    };
  });

  // Плеер для advantage-section---------------------------------------
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

  // Плееры для about-section----------------------------------------
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

  // Yandex.Metrika
  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
    m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
  })
    (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");

  ym(57091498, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  });

})