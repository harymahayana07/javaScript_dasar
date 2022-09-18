// implement array
import _ from 'lodash'; // import first
const myArray = [1,2,3,4,5,6];
let sum = 0;
for (let index = 0; index < myArray.length; index++) {
    sum += myArray[index];
}
console.log(sum);

// implement with fungsi reduce :

// import _ from 'lodash'; // import first
const myArray2 = [1,2,3,4,5];
let sum2 = myArray2.reduce((prev, curr) => {
    return prev+curr;
});
console.log(sum2);

// with lodash

// import _ from 'lodash'; // import first
const myArray3 = [1,2,3,4,5,6,7,8,9,10];
const sum3 = _.sum(myArray3);
console.log(sum3);