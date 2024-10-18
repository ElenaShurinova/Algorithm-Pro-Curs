class DynamicArray {
    
    constructor(capacity = 10) {
      this.array = new Array(capacity); 
      this.size = 0; 
      this.capacity = capacity; 
    }
  
   
    set(index, data) {
      if (index < 0 || index >= this.size) {
        throw new Error("Index out of bounds"); 
      }
      this.array[index] = data; 
    }
  
    
    clean() {
      this.array = new Array(this.capacity); 
      this.size = 0; 
    }
  
    
    contains(data) {
      for (let i = 0; i < this.size; i++) {
        if (this.array[i] === data) {
          return true; 
        }
      }
      return false; 
    }
  
   
    isEmpty() {
      return this.size === 0; 
    }
  
    
    add(data) {
      if (this.size === this.capacity) {
        this.resize(); 
      }
      this.array[this.size] = data; 
      this.size++; 
    }
  
    
    resize() {
      this.capacity *= 2; 
      const newArray = new Array(this.capacity); 
      for (let i = 0; i < this.size; i++) {
        newArray[i] = this.array[i]; 
      }
      this.array = newArray; 
    }
  
    
    get(index) {
      if (index < 0 || index >= this.size) {
        throw new Error("Index out of bounds"); 
      }
      return this.array[index]; 
    }
  
    
    getSize() {
      return this.size; 
    }
  }
  
 
  const dynamicArray = new DynamicArray();
  
  dynamicArray.add(1);
  dynamicArray.add(2);
  dynamicArray.add(3);
  
  console.log(dynamicArray.contains(2)); 
  console.log(dynamicArray.contains(5)); 
  
  dynamicArray.set(1, 5);
  console.log(dynamicArray.get(1)); 
  
  console.log(dynamicArray.isEmpty()); 
  
  dynamicArray.clean();
  console.log(dynamicArray.isEmpty()); 
  

  
  
  
  function buildFrequencyDictionary(text) {
    const frequencyMap = {}; 
  
    for (const char of text) {
      if (/[а-яА-Я]/.test(char)) { // 
        const lowerChar = char.toLowerCase(); 
        if (frequencyMap[lowerChar]) {
          frequencyMap[lowerChar] += 1; 
        } else {
          frequencyMap[lowerChar] = 1; 
        }
      }
    }
  
    return frequencyMap;
  }
  

  const text = "Привет мир! Это тест.";
  const frequencyDictionary = buildFrequencyDictionary(text);
  
  console.log(frequencyDictionary);