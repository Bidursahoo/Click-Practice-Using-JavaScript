/*global document*/
// let tittle = document.getElementById('title')
// console.log(tittle.innerText);
// tittle.innerText = "Good Bye world"
// let message = "Good Bye my User!"
// tittle.innerHTML = `<p>${message}</p>`
// tittle.style.color = 'red'
// let redDiv = document.getElementById("red")
// let yellowDiv = document.getElementById("yellow")
// let greenDiv = document.getElementById("green")
// redDiv.onclick = () => console.log('user choose rock');
// yellowDiv.onclick = () => console.log('user choose paper');
// greenDiv.onclick = () => console.log('user choose sizzors');
const squares = document.querySelectorAll('.colouButton')
const timeClicked = {'rock':0 , 'paper':0 , 'sizzors':0}
squares.forEach(name => {
    name.onclick = () => {
        timeClicked[name.value] +=1
        name.innerText = timeClicked[name.value]
    }
});
// squares.forEach(element => {
//     console.log(element.value);
// });
const clear = document.getElementById('reset')

const clearScores = () =>{
    timeClicked.rock = 0;
    timeClicked.paper = 0;
    timeClicked.sizzors = 0;
    squares.forEach(square => square.innerText = ' ' )
}
clear.onclick = () => clearScores()
