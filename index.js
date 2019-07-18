const summArray = arr => {
    return arr.reduce((accumulator, current, index, array) => {
        return index % 2 ? accumulator += current * array[index - 1] : accumulator;
    }, 0)
}


const totalSumm = row => {
  let oneNegative = 0;
  let onePositive = 0;  

  const total = row.sort((a, b) => b >= a)
  .reduce((accumulator, current) => {
      if(current < 0) { accumulator[0].push(current); return accumulator; }
      if(current === 0) { accumulator[1].push(current); return accumulator; }
      if(current === 1) { accumulator[2].push(current); return accumulator; }
      if(current > 1) { accumulator[3].push(current); return accumulator; }
  }, [[], [], [], []])
  .reduce((accumulator, current, index) => {
    switch (index) {
        case 0: {
            if (current.length % 2) {
                oneNegative = current[current.length - 1];
                current.pop()
            }
            return accumulator += summArray(current);	
        }
        case 1: {
            return !current.length ? accumulator += oneNegative : accumulator;
        }
        case 2: {
            return current.length ? accumulator += current.length : accumulator;
        }
        case 3: {
            if (current.length % 2) {
                onePositive = current[0];
                current.shift();
            }
            return accumulator +=  summArray(current);
        }
    }  
  }, 0);

  return total + onePositive;
}

console.log(totalSumm([0,1,2,3,4,5]));                                                    // => 27
console.log(totalSumm([-1, 0, 1]));                                                       // => 1
console.log(totalSumm([1,1]));                                                            // => 2
console.log(totalSumm([-9, -8, -6, -4, -3, -3, -1, -1, -1, 0, 0, 0, 1, 1, 1, 7, 8, 9]));  // => 188
console.log(totalSumm([-4, -3, -2, 1]));                                                  // => 11
