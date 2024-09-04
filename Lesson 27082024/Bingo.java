public class Bingo {
   static int size (int[] arr){
       
    Bigo(int size) {
        array = new int [size];
    }
    static int size (int [] arr){
        return arr.length;
    }
}
public static void main ( String[]args){
    int [] array = {1,2,3,4,5,6};
    System.out.println("Size =" +size(array));
}
static boolean lineFind(int[] arr, int val) { // O(1)
    int i;
    for (i = 0; i < arr.length; i++) {
        if(arr[i]==val) {
           System.out.println(val+" - находиться по индексу "+i); 
           return true;
        }
        
    }
    System.out.println(val+"не найден ("+i+")"); 
    return false;
}

   }
