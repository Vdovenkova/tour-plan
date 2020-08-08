var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: false,
  },
});

// API яндекс.карт
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
      // Координаты центра карты.Порядок по умолчанию: «широта, долгота».
      center: [12.93, 100.88],
      // Уровень масштабирования. Допустимые значения:от 0 (весь мир) до 19.
      zoom: 13,
    }),
    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject(
      {
        // Описание геометрии.
        geometry: {
          type: "Point",
          coordinates: [12.93, 100.88],
        },
        // Свойства.
        properties: {
          // Контент метки.
          iconContent: "Hilton Pattaya",
        },
      },
      {
        // Опции. Иконка метки будет растягиваться под размер ее содержимого.
        preset: "islands#redStretchyIcon",
      }
    );
  myMap.geoObjects.add(myGeoObject);
}
