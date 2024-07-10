// 10  functionalities in array

module.exports = {
    sum,
    average,
    removeDuplicate,
};

//sum
function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}


//average
function average(arr) {
    return sum(arr) / arr.length;
}

//remove duplicate value
function removeDuplicate(arr) {
    return [...new Set(arr)];
}


