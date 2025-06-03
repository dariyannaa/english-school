// Внутрішні методи спілкування з користувачем
alert("Вітаємо на нашому сайті!");
let name = prompt("Як вас звати?");
if (confirm("Ви хочете дізнатися більше про нашу школу?")) {
  alert("Чудово, " + name + "! Почнімо.");
} else {
  alert("Спробуйте пізніше.");
}

// Діалог з користувачем
function userDialog() {
  let user = prompt("Введіть своє ім'я:");
  let age = prompt("Скільки вам років?");
  if (age >= 18) {
    alert(`Вітаємо, ${user}, ви можете долучитися до дорослої групи.`);
  } else {
    alert(`Привіт, ${user}, ми маємо групи для молоді.`);
  }

  // Цикл для підтвердження
  for (let i = 0; i < 3; i++) {
    let ready = confirm("Ви готові почати навчання?");
    if (ready) {
      alert("Супер! Розпочнемо!");
      break;
    } else if (i === 2) {
      alert("Можливо, наступного разу.");
    }
  }
}

// Функція з параметром за замовчуванням
function showDeveloperInfo(lastname, firstname, position = "Студент") {
  alert(`Розробник: ${lastname} ${firstname}\nПосада: ${position}`);
}

// Порівняння рядків
function compareStrings() {
  let str1 = prompt("Введіть перший рядок:");
  let str2 = prompt("Введіть другий рядок:");
  if (str1 > str2) {
    alert(`Більший рядок: ${str1}`);
  } else if (str2 > str1) {
    alert(`Більший рядок: ${str2}`);
  } else {
    alert("Рядки однакові.");
  }
}

// Зміна фону сторінки на 30 секунд
function changeBackgroundFor30sec() {
  const originalColor = document.body.style.backgroundColor;
  document.body.style.backgroundColor = "#ffe4b5";
  setTimeout(() => {
    document.body.style.backgroundColor = originalColor;
  }, 30000);
}

// Перенаправлення
function redirectTo(url) {
  location.href = url;
}

// Використання getElementById та querySelectorAll
document.getElementById('btn-change-bg').addEventListener('click', function () {
  changeBackgroundFor30sec();
});

document.getElementById('btn-redirect').addEventListener('click', function () {
  redirectTo('https://www.google.com');
});

document.getElementById('btn-dialog').addEventListener('click', function () {
  userDialog();
});

// Властивості DOM-вузлів
let infoDiv = document.getElementById('info');
let buttons = document.querySelectorAll('button');
infoDiv.innerHTML = `
  <p>Кількість кнопок на сторінці: ${buttons.length}</p>
`;

// Робота з document.createElement, createTextNode, node.append/prepend/after/replace/remove
let newPara = document.createElement("p");
let text = document.createTextNode("Цей текст створено за допомогою JS.");
newPara.appendChild(text);
document.body.append(newPara);

let another = document.createElement("p");
another.textContent = "Ще один параграф.";
document.body.prepend(another);

let replacement = document.createElement("p");
replacement.innerHTML = "<b>Це новий елемент замість попереднього.</b>";
another.replaceWith(replacement);

setTimeout(() => {
  replacement.remove();
}, 5000); // видалення через 5 секунд
