module.exports = function multiply(first, second) {
  // your solution
  let firstArray = [];
  let secondArray = [];
  let multiplyArray=[];
  let willReturn = "";

  for (let i = second.length-1; i >= 0; i--) {
		secondArray[i] = second[i];
  }
  
  for (let i = first.length-1; i >= 0; i--) {
		firstArray[i] = first[i];
  }
  
  for (let i = 0; i < first.length; i++) {
		for (let j = 0; j < second.length; j++) {
      if (i+j < multiplyArray.length) {
        multiplyArray[i + j] += firstArray[i]*secondArray[j];
      }
      else {
				multiplyArray.push(firstArray[i] * secondArray[j]);
			}
    }
  }

  for (let i = multiplyArray.length-1; i >= 0; i--) {

    let digit = multiplyArray[i] % 10;
		let tens = Math.floor(multiplyArray[i] / 10);

    multiplyArray[i] = digit;
    if (i -1 >= 0) {
			multiplyArray[i - 1] += tens;
		}
		else if (tens != 0) {
       multiplyArray.unshift(tens);
		}
  }
  
  for(let i = 0;i < multiplyArray.length;i++){
    willReturn += multiplyArray[i];
  }
  
  return willReturn;
}
