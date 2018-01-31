//Twój kod

let numbers = [];

numbers = process.argv.slice(2)

let sortNumbers = (a, b) => a - b

numbers.map((x, i) => {
    y = parseInt(x);
    numbers.splice(i, 1, y);
});

numbers = numbers.sort(sortNumbers);
console.log(numbers);


for(let i = 0; i < numbers.length; i++) {
    setTimeout(()=> {
        console.log(numbers[i]);
    },  numbers[i] * 1000);
}
