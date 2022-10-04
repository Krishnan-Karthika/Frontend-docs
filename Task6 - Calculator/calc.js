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
            if(regex.test(screenValue)){

            }else{
                alert("invalid input-carefully enter using buttons in screen");
            }


            let res = eval(screenValue);
            screen.value = screenValue+buttonText+res;
            str = JSON.stringify(screenValue+buttonText+res);
            console.log(str);

            let key=localStorage.length;
            // key = screenValue+buttonText;
            // value = res;
            localStorage.setItem(key+1, str);            
                       
            document.getElementById('dataHistory').innerHTML= str ;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}


function history(){
    let 
    // document.getElementById('jsondata').innerHTML=  ;
    var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

    // for (let key = localStorage.length-1; key >= 0; key--) {
    //     let name = localStorage.getItem("key");
    //     document.getElementById('dataHistory').innerHTML= name;
    // }
    
        while ( i-- ) {
            values.push( localStorage.getItem(keys[i]) );
            document.getElementById('dataHistory').innerHTML= localStorage.getItem(keys[i]);
        }
    
        // return values;
        // let i=0;
        // for (i in localStorage){
        //     document.getElementById('dataHistory').innerHTML= values ;
        // }
        // document.getElementById('dataHistory').innerHTML= values ;
    
}


