//Twój kod
console.log("Jerzy Drobot");

const intervalId = setInterval((x) => {
    console.log(" wita się z Node.js!");
    clearInterval(intervalId);
}, 5000)