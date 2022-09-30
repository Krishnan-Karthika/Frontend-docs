// let submit = document.getElementById("addBtn");

// submit.onclick = addFunction(){

function addFunction(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2  = parseInt(document.getElementById("num2").value);      
    let n3 = document.getElementById("result");
    n3.value=n1+n2;
    document.getElementById(num1).value = n1;  
    document.getElementById(num2).value = n2; 
}

function subFunction(){
    let n1 = document.getElementById("num1").value;
    let n2  = document.getElementById("num2").value;  
    let diff=parseFloat(n1)-parseFloat(n2);  
    let n3 = document.getElementById("result");
    n1.value=n1;
    n2.value=n2;
    n3.value=diff;
}

function mulFunction(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2  = parseInt(document.getElementById("num2").value);    
    let n3 = document.getElementById("result");
    n3.value=n1*n2;
}

function divFunction(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2  = parseInt(document.getElementById("num2").value);    
    let n3 = document.getElementById("result");
    n3.value=n1/n2;
}

function clearFunction(){
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("result").value = '';
}





    
    // document.getElementById("opNum1").innerText = n1;
    // document.getElementById("opNum2").innerText = n2;
    // document.getElementById("opSum").innerText = s;
    

    

