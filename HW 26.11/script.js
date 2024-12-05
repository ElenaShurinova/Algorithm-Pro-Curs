// Функция для нахождения минимальной суммы k последовательных элементов
function minSumSubarray(arr, k) {
  let n = arr.length;
  if (n < k) {
      
      return 0;
  }


  let min_sum = 0;
  for (let i = 0; i < k; i++) {
      min_sum += arr[i];
  }

 
  let window_sum = min_sum;
  for (let i = k; i < n; i++) {
      window_sum += arr[i] - arr[i - k];
      if (window_sum < min_sum) {
          min_sum = window_sum;
      }
  }

  return min_sum;
}

let arr1 = [10, 20, 30, 40];
let k1 = 2;
console.log(minSumSubarray(arr1, k1)); 

let arr2 = [1, 45, 2, 10, 23, 3, 1, 0, 20];
let k2 = 4;
console.log(minSumSubarray(arr2, k2)); 



// Функция для нахождения пары элементов с минимальной разностью
function findClosestPair(A, B) {
  let n = A.length;
  let m = B.length;

  let i = 0; 
  let j = 0; 

  let min_diff = Infinity;
  let closest_pair = [];

  while (i < n && j < m) {
      let diff = Math.abs(A[i] - B[j]);

    
      if (diff < min_diff) {
          min_diff = diff;
          closest_pair = [A[i], B[j]];
      }

      if (A[i] < B[j]) {
          i++;
      } else {
          j++;
      }
  }

  return closest_pair;
}


let A = [1, 2, 10];
let B = [8, 20, 30];
console.log(findClosestPair(A, B)); 
