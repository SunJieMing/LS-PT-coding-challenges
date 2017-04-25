//[1, 2, 3, 3, 3] -> [1, 2, 3]
//[1, 1, 2, 2, 3, 3, 4] -> [1, 2, 3, 4]

//create a new array
//iterate over input array
    //push the item to the new array if that item isn't already in there
//return new array

const removeDuplicates = (input) => { //[1, 2, 3, 3, 3]
  const uniqueArray = [];
  input.forEach((item) => {
    if (!uniqueArray.includes(item)) uniqueArray.push(item);
  });
  return uniqueArray;
};

const nums = [1, 2, 3, 3, 3];

console.log(removeDuplicates(nums));
