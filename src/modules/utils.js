export const encode = input => [...input]
   .map((x, i) => [x.charCodeAt(0), i]) //получаем массив пар [код, индекс]
   .sort() //сортируем по коду
   .flatMap(x => x) //собираем в один массив
   .join('.') //джойним разделяя точкой
   .match(/./g) //разделяем по символам
   .flatMap((x, i) => new Array(x == '.' ? 1 : 2 + x * 2).fill((1 + i) % 2)) // создаем массив из значений 0 и 1 в зависимости от длины и чет/нечет
   .join('') // собираем обратно в строку
   .replace(/(([01])\2*)/g, x => `${(+x ? '.' : '-')}${x.length}`) // заменяем 1 на точку 0 на - и подставляем количество посторений

export const decode = encoded => encoded
   .match(/([-.])(\d+)/g) //разделяю на - и . c числом повторений
   .map(x => new Array(+x.slice(1)).fill(x[0] == "." ? 1 : 0)) // получаем массивы 0ей и 1иц
   .map(x => { if (x.length != 1) { return (x.length / 2 - 1).toString() } else { return "." } }) // преобразуем обратно из строки 7
   .join("") // соединяю в строку
   .split(".") // делим на элементы
   .map((x, index, array) => {   // преобразую в массив [код, индекс]
      return (index % 2 === 0) ? [array[index], array[index + 1]] : null;
   })
   .filter(x => x !== null) // убираю пустые
   .sort((a, b) => a[1] - b[1]) //сортирую по индексу
   .map(([charCode]) => String.fromCharCode(charCode)) //получаю символы по коду
   .join(''); // соединяю в строку

//интересная задачка, спасибо за внимание)
