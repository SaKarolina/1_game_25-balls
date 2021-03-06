// Game 01
//
// Žaidimo ekranas sudarytas iš dviejų kvadratų, mygtukų “start” ir “reset” ir laikmačio, skaičiuojančio sekundes. Kvadratai sudaryti iš 25 mažesnių kvadratukų ir sudaro matricą 5X5. Abu kvadratai žaidimo pradžioje tušti. Paspaudus “start” mygtuką įsijungia laikmatis, o kairysis kvadratas užpildomas spalvotais rutuliukais su skaičiais nuo 1 iki 25. Spalvos ir rutuliukų išdėliojimas atsitiktiniai. Žaidimo tikslas rutuliukus sudėlioti iš eilės (1,2,3…) perkeliant juos iš kairiojo kvadrato į dešinį. 
// Spaudžiant ant rutuliuko kairiajame kvadrate, rutuliukas pereina į dešinį. Dešiniajame kvadrate rutuliukai dėliojami tik iš eilės. Pirmiausia reikia perkelti rutuliuką su skaičiumi 1 toliau su skaičiumi 2 ir t.t. Bandant perkelti rutuliuką ne iš eilės, turi trumpam atsirasti pranešimas apie pasirinktą netinkamą rutuliuką. Žaidimas pasibaigia perkėlus paskutinį, 25 rutuliuką. Laikmatis sustabdomas. Paspaudus mygtuką “reset”, abu kvadratai ištuštinami, o laikmatis padaromas 0.
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const start = document.querySelector(`#start`);
const reset = document.querySelector(`#reset`);
const time = document.querySelector(`.time`);
const fullBox = document.querySelector(`.full`);
const emptyBox = document.querySelector(`.empty`);
time.innerText = "00:00:00"

let balls = [];
start.addEventListener(`click`, () => {

    while (balls.length < 25) {
        const newBall = document.createElement('div');
        newBall.style = `background: radial-gradient(circle at ${1.4}vw ${1.4}vw, rgb(${this.rand(50, 255)}, ${this.rand(80, 255)}, ${this.rand(0, 0)}), #000)`;
        const randomNumber = rand(1, 25);
        if(balls.includes(randomNumber)) {
            continue;
        } else {
            newBall.innerText = randomNumber;
            balls.push(randomNumber);
        }
        fullBox.appendChild(newBall);
    }

    let clockTime = 0;
    function runClock() {
        clockTime++;
        const cl1 = Math.floor(clockTime / 6000);
        const cl2 = Math.floor((clockTime - cl1 * 6000) / 600);
        const cl3 = Math.floor((clockTime - cl1 * 6000 - cl2 * 600) / 100);
        const cl4 = Math.floor((clockTime - cl1 * 6000 - cl2 * 600 - cl3 * 100) / 10);
        const cl5 = Math.floor(clockTime % 10);

        time.innerText = `${cl1}${cl2}:${cl3}${cl4}:${cl5}0`;
    }
    let startClock = setInterval(runClock, 100)

    reset.addEventListener(`click`, () => {
        if(balls.length > 0) {
            balls.splice(0, balls.length);
            fullBox.innerHTML = ``;
            emptyBox.innerHTML = ``;
            clearInterval(startClock);
            time.innerText = "00:00:00";
        }
    });

}, {once : true});



// let balls = [];
// start.addEventListener(`click`, () => {
//     for (let i = 0; i < 25; i++) {
//         let ball = {};
//         ball.color = `background: radial-gradient(circle at ${1.4}vw ${1.4}vw, rgb(${this.rand(50, 255)}, ${this.rand(80, 255)}, ${this.rand(0, 0)}), #000)`;
//         const random = rand(1, 25);
//         ball.number = random;

//         const newBall = document.createElement('div');
//         newBall.style = ball.color;
//         const nr = document.createTextNode(ball.number);
//         newBall.appendChild(nr);
//         fullBox.appendChild(newBall);
//     }
// }, {once : true});
