let phrases = [

  { text: 'отправить другу смешную фотку', image: '../images/page-5/cat.png' },

  { text: 'посидеть в Telegram', image: '../images/page-5/cat1.png' },

  { text: 'посчитать мышей', image: '../images/page-5/cat2.png' },

  { text: 'посмеяться с котиков', image: '../images/page-5/cat3.png' },

  { text: 'посмотреть видео в YouTube', image: '/images/page-5/cat4.png' },

  { text: 'полистать Reels', image: '../images/page-5/cat5.png' },

  { text: 'почитать новости', image: '../images/page-5/cat6.png' },

];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.content5__button');

let phrase = document.querySelector('.content5__description-phrase');

let image = document.querySelector('.content5__image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(image, 'src', randomElement.image);
});
