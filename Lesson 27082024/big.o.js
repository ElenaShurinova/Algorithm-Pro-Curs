function size(array) {
    return array.length;

}
function lineFind(array, val)  {
    let i;
    for (i = 0; i < arr.length; i++) {
        if(arr[i]==val) {
            console.log(val+" - находиться по индексу "+i); 
           return true;
        }
        
    }
    console.log(val+"не найден ("+i+")"); 
    return false;
}

let arr = [1,2,3,4,5,6];

console.log("Size array O(1)- "+size(arr));
console.log("Лин.поиск = "+lineFind(arr, 6));