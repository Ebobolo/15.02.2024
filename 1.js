// Функция для генерации последовательности Фибоначчи до n-го числа
function fibonacci(n) {
    // Проверяем входные данные
    if (n <= 0) {
      console.log("Неверный ввод. Пожалуйста, введите положительное целое число.");
      return;
    }
  
     // Инициализируем первые два числа последовательности
    let num1 = 0, num2 = 1;
  
    // Генерируем последовательность до n-го числа
    for (let i = 0; i < n; i++) {
       // Выводим на экран текущее число
      console.log(num1);
  
      // Вычисляем следующее число в последовательности
      let nextNum = num1 + num2;
      num1 = num2;
      num2 = nextNum;
    }
  }
  
  // Протестируйте функцию с целым положительным числом на входе
  fibonacci(10);