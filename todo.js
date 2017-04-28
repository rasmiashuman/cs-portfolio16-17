
var inp = document.getElementById('inp');
/// this is the input wich makes the todo lists items work
var bttn= document.getElementById('bttn');
var dv= document.getElementById('dv');
var form= document.getElementById('myForm');
// var text = form.valueOf;
var result; 
 
bttn.addEventListener('click', function(evt){
    var tar = evt.target;
});

bttn.addEventListener(function(){
    dv.innerHTML += '<div>' + text + '</div>';
});
/// important to have the same name as the input.
dv.addEventListener("click", function(evt){
    evt.target.parentNode.removeChild(evt.target);
    evt.preventDefault();
}, false);
