// Быстрая сортировка массива целых чисел в порядке убывания значений их элементов

function quickSortDescending(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];

    for (let num of arr) {
        if (num > pivot) {
            left.push(num);
        } else if (num < pivot) {
            right.push(num);
        } else {
            equal.push(num);
        }
    }

    return [...quickSortDescending(left), ...equal, ...quickSortDescending(right)];
}

// Пример использования:
const array = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSortDescending(array)); // [ 10, 8, 6, 3, 2, 1, 1 ]

// Быстрая сортировка с использованием среднего элемента массива в качестве опорного
function quickSortWithMiddlePivot(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const left = [];
    const right = [];
    const equal = [];

    for (let num of arr) {
        if (num > pivot) {
            left.push(num);
        } else if (num < pivot) {
            right.push(num);
        } else {
            equal.push(num);
        }
    }

    return [...quickSortWithMiddlePivot(left), ...equal, ...quickSortWithMiddlePivot(right)];
}

// Пример использования:
const array2 = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSortWithMiddlePivot(array2)); // [ 10, 8, 6, 3, 2, 1, 1 ]

// Итерационная реализация быстрой сортировки

function iterativeQuickSort(arr) {
    const stack = [];
    stack.push(0);
    stack.push(arr.length - 1);

    while (stack.length) {
        const end = stack.pop();
        const start = stack.pop();

        if (start >= end) continue;

        const pivotIndex = partition(arr, start, end);

        stack.push(start);
        stack.push(pivotIndex - 1);

        stack.push(pivotIndex + 1);
        stack.push(end);
    }

    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[Math.floor((low + high) / 2)];
    let i = low;
    let j = high;

    while (i <= j) {
        while (arr[i] > pivot) {
            i++;
        }

        while (arr[j] < pivot) {
            j--;
        }

        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }

    return i;
}

// Пример использования:
const array3 = [3, 6, 8, 10, 1, 2, 1];
console.log(iterativeQuickSort(array3)); // [ 10, 8, 6, 3, 2, 1, 1 ]