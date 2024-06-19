// Usando o loop for para iterar sobre um array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Usando o loop for...of para iterar sobre um array

for (let value of array) {
    console.log(value);
}

// Usando o método forEach para iterar sobre um array

array.forEach(function (value, index, array) {
    console.log(`No índice ${index} está o valor ${value}`);
});

// Usando o método map para iterar sobre um array

const newArray = array.map(function (value, index, array) {
    return value * 2;
}); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] 
console.log(newArray);