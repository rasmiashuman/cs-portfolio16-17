var input = document.getElementById("input");
var newItem = document.getElementById("newItem");
var dropdown = document.getElementById("dropdown");
var todo = document.getElementById("toDo");
var clearButton = document.getElementById("clearButton")

newItem.addEventListener("click", function showInput() {

    if (dropdown.value == "green") {
        todo.innerHTML += '<div style="color: green;">' + input.value + '</div>';
    }
    else if (dropdown.value == "pink") {
        todo.innerHTML += '<div style="color: pink;">' + input.value + '</div>';
    }
    else if (dropdown.value == "black") {
        todo.innerHTML += '<div>' + input.value + '</div>';
    }
    else {
        todo.innerHTML += input.value;
    }
});

//clearButton is a certain var where the function of the clear button
clearButton.addEventListener("click", function(evt) {
        while (todo.firstChild) {
            todo.removeChild(todo.firstChild);

        }
    })
    // Click on a close button to hide the current list item
todo.addEventListener("click",
    function(evt) {
        var task = evt.target;
        task.parentNode.removeChild(task);

        evt.preventDefault();
    }, false);
 
 //understand the todo.removehild and which task does what