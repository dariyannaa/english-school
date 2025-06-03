// Функція "Діалог з користувачем" із змінними, умовами, циклами
function userDialog() {
  alert('Починаємо діалог з користувачем!');
  let count = 0;
  let answer;
  do {
    answer = prompt('Введіть "так" для продовження або "ні" для завершення:', '');
    if (answer === null) {
      alert('Діалог скасовано');
      break;
    }
    if (answer.toLowerCase() === 'так') {
      alert('Ви обрали "так"!');
    } else if (answer.toLowerCase() === 'ні') {
      alert('Діалог завершено');
      break;
    } else {
      alert('Будь ласка, введіть "так" або "ні".');
    }
    count++;
    if (count >= 5) {
      alert('Ви досягли ліміту спроб.');
      break;
    }
  } while (true);
}

// Функція виводу інформації про розробника, посада за замовчуванням
function showDeveloperInfo(lastName, firstName, position = 'Студент') {
  alert(`Розробник: ${lastName} ${firstName}\nПосада: ${position}`);
}

// Функція порівняння двох рядків
function compareStrings(str1, str2) {
  if (str1 === null || str2 === null) {
    alert('Порівняння скасовано.');
    return;
  }
  if (str1.length > str2.length) {
    alert(`Більший рядок: "${str1}"`);
  } else if (str2.length > str1.length) {
    alert(`Більший рядок: "${str2}"`);
  } else {
    alert('Рядки однакової довжини.');
  }
}

// Зміна фону сторінки на 30 секунд
function changeBackgroundFor30sec() {
  let body = document.body;
  let originalColor = body.style.backgroundColor;
  body.style.backgroundColor = '#ffeb3b'; // яскраво-жовтий
  setTimeout(() => {
    body.style.backgroundColor = originalColor;
  }, 30000);
}

// Перенаправлення браузера
function redirectTo(url) {
  if (confirm('Ви хочете перейти на інший сайт?')) {
    window.location.href = url;
  }
}

// Приклад маніпуляцій з DOM: створення, вставка, заміна, видалення

// Створюємо новий абзац
let newParagraph = document.createElement('p');
let textNode = document.createTextNode('Цей абзац створений і доданий через JavaScript.');
newParagraph.appendChild(textNode);

// Вставка в кінець body
document.body.appendChild(newParagraph);

// Заміна заголовка h1
let oldH1 = document.querySelector('h1');
let newH1 = document.createElement('h1');
newH1.textContent = 'Новий заголовок сторінки через JS';
oldH1.replaceWith(newH1);

// Видалення кнопки "btn-redirect"
let btnRedirect = document.getElementById('btn-redirect');
btnRedirect.remove();
