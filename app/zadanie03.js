//Twój kod

let numbers = [];

this.numbers = process.argv.slice(2)

console.log(this.numbers);

this.numbers.map((x, i)=> {
    y = parseInt(x);
    this.numbers.splice(i, 1, y);
});

console.log(this.numbers);

let sum = this.numbers.reduce((a, b)=> a + b);

console.log(sum);