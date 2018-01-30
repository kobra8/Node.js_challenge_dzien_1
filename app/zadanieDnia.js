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

let count = 0;
let timeout = 0;

    const intervalId = setInterval(() => {
        console.log(numbers[count]);
        count++
        if (count === numbers.length) {
            clearInterval(intervalId);
              }
        }, 
       setInterval(() => numbers[count] * 1000, numbers[count] * 1000) 
    )
