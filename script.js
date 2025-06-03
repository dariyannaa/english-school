// Функція 1: Діалог з користувачем
function dialog() {
  let count = 0;
  let answer;
  do {
    answer = prompt("Скільки букв у слові 'Hello'?");
    count++;
  } while (answer !== "5" && count < 3);

  if (answer === "5") {
    alert("Правильно!");
  } else {
    alert("Правильна відповідь: 5");
  }
}

// Функція 2: Про розробника
function showDeveloper(surname, name, position = "студент") {
  alert(`Розробник: ${surname} ${name}, посада: ${position}`);
}

// Функція 3: Порівняння рядків
function compareStrings() {
  const a = prompt("Введіть перший рядок:");
  const b = prompt("Введіть другий рядок:");
  if (a > b) {
    alert(`Більший рядок: ${a}`);
  } else if (b > a) {
    alert(`Більший рядок: ${b}`);
  } else {
    alert("Рядки однакові.");
  }
}

// Функція 4: Зміна фону на 30 секунд
function changeBackground() {
  document.body.style.backgroundColor = "#d0f0c0";
  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 30000);
}

// Функція 5: Перенаправлення
function redirect() {
  const confirmRedirect = confirm("Перейти на сайт Wikipedia?");
  if (confirmRedirect) {
    window.location.href = "https://uk.wikipedia.org/wiki/JavaScript";
  }
}
