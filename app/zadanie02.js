//Twój kod
const text =['Witam', 'się', 'z', 'programem', 'Node.js', 'w konsoli', 'i korzystam', 'z funkcji czasu!'];
let count = 0;

const intervalId = setInterval(() => {
        console.log(text[count]);
        count++
        if(count === text.length) {
            clearInterval(intervalId);
        }
    }, 1000)


