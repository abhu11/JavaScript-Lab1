let myArray = [3, 5, 6, 8, 10, 22, 25, 43, 46, 86];

  let oddNumbers = myArray.filter(function(number) {
    return number % 2 !== 0
  });

  console.log(oddNumbers);