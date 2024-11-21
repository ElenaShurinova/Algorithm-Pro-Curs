function firstElementKTimes(arr, k) {
  const count = {}; // Объект для подсчета элементов
  
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    
    // Увеличиваем счетчик для текущего элемента
    count[num] = (count[num] || 0) + 1;
    
    // Если элемент встречается k раз, возвращаем его
    if (count[num] === k) {
      return num;
    }
  }
  
  // Если не нашли элемент, который встречается k раз, возвращаем -1
  return -1;
}

// Пример использования:
const arr = [1, 7, 4, 3, 4, 8, 7];
const k = 2;
console.log(firstElementKTimes(arr, k));  // Вывод: 7



function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; // Если длины массивов не равны, то они не могут быть одинаковыми
  }
  
  // Сортируем оба массива и сравниваем
  arr1.sort();
  arr2.sort();
  
  // Проверяем, равны ли элементы
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // Если хотя бы один элемент не совпадает, массивы не равны
    }
  }
  
  return true; // Если все элементы совпали, массивы равны
}

// Пример использования:
const arr1 = [1, 2, 5, 4, 0];
const arr2 = [2, 4, 5, 0, 1];
console.log(areArraysEqual(arr1, arr2));  // Вывод: true