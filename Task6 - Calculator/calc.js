window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("historyLS").onclick = historyLS
}

let key = 0;
let calculationHistory = []
let screen = document.getElementById('input');
buttons = document.querySelectorAll('button');
let screenValue = '';
let regex = /^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/;

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'Del') {
            screenValue = screenValue.slice(0, -1)
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            let res = eval(screenValue);
            screen.value = screenValue+buttonText+res;
            str = JSON.stringify(screenValue+buttonText+res);
            console.log(str);
            calculationHistory.push(str);            
            localStorage.setItem(key, calculationHistory);
            
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}




function historyLS(){
    screen.value ="";
    var records = window.localStorage.getItem(key);
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("dataHistory");
    element.appendChild(paragraph);
}