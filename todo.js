var inp = document.getElementById("inp");
var bttn= document.getElementById("bttn");
var dv= document.getElementById("dv");

bttn.addEventListener("click", function showInput(){
    dv.innerHTML+= "<div>" + inp + "</div>";
});

bttn.addEventListener("click", function(evt){
    evt.target.parentNode.removeChild(evt.target);
    
});