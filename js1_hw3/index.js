// Задание 1
	// Напишите цикл, который выводит треугольник

var lattice = '';

for (var i = 0; i < 7; i++){
	lattice += '#';
	document.write (lattice + '<br>');
}

document.write ('<br>' + '<br>');

// Задание 2
/*
Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии
разделяются символами новой строки. На каждой позиции либо пробел, либо #. В результате
должна получиться шахматная доска.
*/


var row = '';
var odd = ' #';							//составляющая нечетной строки
var even = '# ';						//составляющая четной строки

for (var i = 0; i < 8; i++){			//перебираем столбцы
	row = row + '|';					//доп. символ чтобы видеть провел в начале строки при выводе
	for(var a = 0; a < 4; a++){			//записываем строки
		if (i%2) row = row + even;		//четная строка шахматной доски
		else row = row + odd;			//нечетная строка шахматной доски
	}
	row = row + '<br>';					//записываем переход на новую строку
}

document.write (row);