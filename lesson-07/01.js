/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
]

const imgBlock = document.getElementById('web-tech-image')



//предыдущая кнопка
const capybara = document.getElementById('prev-button')
capybara.addEventListener('click', function() {
  // ищем текущую картинку
  const img = imgBlock.getAttribute('src')
  // перебираем все картинки
  for (let i = 0; i < WEB_TECH_IMAGES.length; i++) {
    // ищем совпадения
    if (WEB_TECH_IMAGES[i] === img) {
      // проверяем существует ли картинка предыдущая, если есть то переходим дальше...
      if (WEB_TECH_IMAGES[i - 1]) {
         // если совпало, переключаемся на предыдущую
        imgBlock.setAttribute('src', WEB_TECH_IMAGES[i - 1])
        } else {
          imgBlock.setAttribute('src', WEB_TECH_IMAGES[WEB_TECH_IMAGES.length - 1])
        }
     
    } 
  }

  
})



// следущая кнопка
const kotya = document.getElementById('next-button')
kotya.addEventListener('click', function () {
  // ищем текущую картинку
  const img = imgBlock.getAttribute('src')
  // перебираем все картинки
  for (let i = 0; i < WEB_TECH_IMAGES.length; i++ ) {
    // ищем совпаления
    if(WEB_TECH_IMAGES[i] === img) {
    //  смотрим есть ли вообще след картинка
      if(WEB_TECH_IMAGES[i+1]) {
        // если совпало , то переключаемся на следующую
        imgBlock.setAttribute('src', WEB_TECH_IMAGES[i + 1])
      } else {
        // если следующец кратинки  нет, мы переключимся на первую
        imgBlock.setAttribute('src', WEB_TECH_IMAGES[0])
      }
      
    }
  }


})