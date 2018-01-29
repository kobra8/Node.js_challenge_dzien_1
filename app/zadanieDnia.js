//Twój kod

let numbers = [];

this.numbers = process.argv.slice(2)

console.log(this.numbers);

this.numbers.map((x, i) => {
    y = parseInt(x);
    this.numbers.splice(i, 1, y);
});

console.log(this.numbers.sort());

let timeout = 0;
const intervalId = setTimeout(() => {
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
    timeout = numbers[i]*1000;
}

}, timeout)