var form = document.getElementById('form');
var newItem = document.getElementById('newItem');
var dropdown = document.getElementById('dropdown');
var todo = document.getElementById('toDo');
// Click on a close button to hide the current list item

var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
form.addEventListener('submitButton', function(evt) {
    var text = newItem.value;
    
    if (dropdown.value == "green"){
        todo.innerHTML += '<div style = "color:green;">' + text + '</div>';
    }
    evt.preventDefault();
},false);



