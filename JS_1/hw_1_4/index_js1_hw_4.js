// Задание 1
// Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

function min(a, b){
	return (a<b)?a:b;
}

// Символ номер N строки можно получить, добавив к ней .charAt(N) (
// “строчка”.charAt(5) ) – схожим образом с получением длины строки при помощи
// .length. Возвращаемое значение будет строковым, состоящим из одного
// символа (к примеру, “к”). У первого символа строки позиция 0, что означает,
// что у последнего символа позиция будет string.length – 1. Другими словами, у
// строки из двух символов длина 2, а позиции её символов будут 0 и 1.Напишите
// функцию countBs, которая принимает строку в качестве аргумента, и
// возвращает количество символов “B”, содержащихся в строке.Затем напишите
// функцию countChar, которая работает примерно как countBs, только принимает
// второй параметр — символ, который мы будем искать в строке (вместо того,
// чтобы просто считать количество символов “B”). Для этого переделайте
// функцию countBs.

function countBs(string){
	var count=0;
	for(var i=0;i<=string.length-1;i++){
		if(string.charAt(i)=='B') count++;
	}
	return count;
}

function countChar(string, s_char) {
	var count=0;
	for(var i=0;i<=string.length-1;i++){
		if(string.charAt(i)==s_char) count++;
	}
	return count;
}

// * Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у
// N-2.Напишите рекурсивную функцию isEven согласно этим правилам. Она
// должна принимать число и возвращать булевское значение. Потестируйте её на
// 50 и 75. Попробуйте задать ей -1. Почему она ведёт себя таким образом?
// Можно ли её как-то исправить?

function isEven(number) {
	if(number<0) number *= -1;
	if(number>1){ 
		return isEven(number-2);
	} else {
		return (!number)?1:0; 
	}
}