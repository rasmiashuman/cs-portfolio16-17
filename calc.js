var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var button = document.getElementById("calculate");
var dropbox = document.getElementById("dropbox");
var answer = document.getElementById("answer");
var result;

button.addEventListener("click",

function (){
    if (dropbox.value == "-"){
        result = parseInt(input1.value) - parseInt(input2.value);
        answer.innerHTML = result;
    }else if (dropbox.value == "+"){
        result = parseInt(input1.value) + parseInt(input2.value);
        answer.innerHTML = result;
    }else if (dropbox.value == "/"){
        result = parseInt(input1.value) / parseInt(input2.value);
        answer.innerHTML = result;
    }else if (dropbox.value == "*"){
        result = parseInt(input1.value) * parseInt(input2.value);
        answer.innerHTML = result;
    }
})