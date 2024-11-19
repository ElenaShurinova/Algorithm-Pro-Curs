function minTurnsToUnlock(current, target) {
    const totalTurns = 0;
  
    for (let i = 0; i < current.length; i++) {
      let curDigit = parseInt(current[i]);
      let targetDigit = parseInt(target[i]);
      
      let forwardTurns = (targetDigit - curDigit + 10) % 10;
      let backwardTurns = (curDigit - targetDigit + 10) % 10;
  
      totalTurns += Math.min(forwardTurns, backwardTurns);
    }
  
    return totalTurns;
  }
  
  // Пример 
  let current = "1234";
  let target = "5678";
  console.log(minTurnsToUnlock(current, target)); // Выводит минимальное количество оборотов


/////////////////////////////////////////////////////////////////////////////////////////////////////////

function closestElevator(floor, elevatorA, elevatorB) {
    const distanceA = Math.abs(floor - elevatorA);
    const distanceB = Math.abs(floor - elevatorB);
  
    if (distanceA < distanceB) {
      return 'A';
    } else {
      return 'B';
    }
  }
  
  // Пример 
  let floor = 1;
  let elevatorA = 0;
  let elevatorB = 8;
  console.log(closestElevator(floor, elevatorA, elevatorB)); // Выводит 'A'

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function closestElevatorMultiple(floor, elevators) {
    const closest = 0;
    const minDistance = Math.abs(floor - elevators[0]);
  
    for (let i = 1; i < elevators.length; i++) {
      let distance = Math.abs(floor - elevators[i]);
      if (distance < minDistance) {
        closest = i;
        minDistance = distance;
      }
    }
  
    return closest;
  }
  
  // Пример 
  let floor1 = 1;
  let elevators = [0, 8, 5, 10];
  console.log(closestElevatorMultiple(floor, elevators)); // Выводит индекс ближайшего лифта, например 0
