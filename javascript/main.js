/*1. Создайте три переменные. Присвойте первой переменной числовое значение. 
Вторая переменная равна первой переменной, увеличенной в три раза. 
Третья переменная равна сумме двух первых. Распечатайте все три.*/

/*var a, b, c;
a = 2;
b = a * 3;
c = a + b;
console.log(a,b,c);*/

/*2. Создайте переменные со значениями 100 и "500". 
Запишите в переменную их численную сумму. Результат выведите в модальном окне.*/

/*var a = 100;
var b = "500";
var c = a + +b;
alert(c);*/

/*3. Создайте две переменных: firstName (“John”) и lastName (“Smith”),
значения в которые записываются из модального окна prompt.
Сложите переменные, выведите результат на экран (“John Smith”).*/

/*var firstName = prompt("What is your firstName?");
var lastName = prompt("What is your lastName?");
console.log("“" + firstName + " " + lastName + "”");*/

/*4. У Чжуан-цзы было N яблок, Цзэн-цзы съел несколько, Чжуан-цзы утверждает, что все. 
Запишите историю в переменных и выражениях, читая значения из prompt. 
Покажите, правду говорит Чжуан-цзы или ложь :)*/

/*var apples = prompt("How many apples did you have, Chuan-czu?");
var eatenApples = prompt("How many apples did you eat, Czen-czu?");
var c = eatenApples >= apples;
alert("Chuan-czu said" + " " + c);*/

/*5. Создайте переменные, с помощью которых можно посчитать общую сумму покупки нескольких товаров.
Например: шоколад (5 плиток, цена за шт. 20,5),
вино (1 бут., цена 90,99), кофе (3 уп., цена 25). Общую сумму рассчитайте и выведите на экран.*/

/*var
	chocolate = 5, 
	wine = 1, 
	coffee = 3,
	priceChocolate = 20.5,
	priceWine = 90.99,
	priceCoffee = 25,
	sum;

console.log(chocolate *	priceChocolate + " " + "the amount of chocolate");
console.log(wine * priceWine + " " + "the amount of wine");
console.log(coffee * priceCoffee + " " + "the amount of coffee");
sum = (chocolate * priceChocolate) + (wine * priceWine) + (coffee * priceCoffee);
console.log(sum + " " + "sum amount");*/

/*6.Напишите программу, которая проверяет, является ли число, введенное пользователем, нечётным.*/

/*var number = prompt("Enter an odd number");
var oddNumber = number % 2;
console.log(oddNumber);*/

/*7. Введите три числа в окне prompt.
Используя функцию из библиотеки Math, найдите наибольшее из трех и выведите его.*/

/*var a = prompt("Enter a first number");
var b = prompt("Enter a second number");
var c = prompt("Enter a third number");

console.log(Math.max(a,b,c));*/

/*8. Напишите программу, которая проверяет, является ли значение,
введенное пользователем, числом.*/

/*var number = prompt("Enter a number");
var enterNumber = +number;
var result = enterNumber === +number;
console.log(result);*/

/*9.Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите. 
Получите второе число из окна prompt. 
Сравните и отобразите в модальном окне: первое число меньше второго или нет, а также оба значения.*/

/*var number = Math.random();
console.log(number);
var numberM = number * 100; 
console.log(numberM);
var numberR = Math.round(numberM);
console.log(numberR);

var enterNumber = prompt("Enter a number");
var result = numberR < enterNumber;
console.log(result);
alert(result + " " + numberR + " " + enterNumber);*/

/*10. Решение предыдущей задачи запишите в одну строку*/

/*var a = Math.random() * 100, b = prompt("Enter a number"), a = Math.round(a), 
c = a < b, result = alert(c + " " + a + " " + b);*/

alert( 4 - (a = b + 1) );


