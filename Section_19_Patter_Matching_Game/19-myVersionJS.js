
let startButton = document.querySelector('button');
startButton.addEventListener('click', startTheGame);

let oneRandomBoxSelection;
let allBox = document.querySelectorAll('.box');
let allBoxArr = Array.from(allBox);
let colors = ["red", "green", "blue", "yellow"];
//let arrOfEle = [];
function startTheGame() {
    //console.log(allBox.length);
    let choosedIndex = [];
    let counter = 0;
    //debugger;
    for (let index = 0; ; index++) {
        let randomIndex = randomNumber(allBoxArr.length);
        if (choosedIndex.includes(randomIndex) && choosedIndex.length < 4) {
            continue;
        }
        counter++;
        choosedIndex.push(randomIndex);
        //console.log(choosedIndex);
        //console.log(randomIndex);
        oneRandomBoxSelection = allBoxArr[randomIndex];
        //arrOfEle.push(oneRandomBoxSelection);
        oneRandomBoxSelection.style.backgroundColor = colors[randomNumber(colors.length)];
        oneRandomBoxSelection.setAttribute("seq", counter.toString());
        console.log(oneRandomBoxSelection);
        /*setTimeout(function(){
            index++;
            oneRandomBoxSelection.style.backgroundColor = "White";
        },500);
        */
        if (choosedIndex.length == 4) {
            break;
        }
    }
}

function disAppearColor() {
    console.log('I am inside disappearcolor function');
    //console.log(ele);
    //let ele = arrOfEle.shift();
    oneRandomBoxSelection.style.backgroundColor = "white";
}
// select any random number
function randomNumber(num) {
    return Math.floor(Math.random() * num);
}