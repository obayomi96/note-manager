var ul = document.querySelector("ul");

// Add new notes with the Add button
document.getElementById("add-btn").addEventListener("click", function(e) {
  e.preventDefault();

  var addInput = document.getElementById("add-input");
  // Condition to check if input value is not empty string
  if (addInput.value !== "") {
    var li = document.createElement("li"),
      firstPar = document.createElement("p"),
      secondPar = document.createElement("p"),
      firstIcon = document.createElement("i"),
      secondIcon = document.createElement("i"),
      input = document.createElement("input");

    firstIcon.className = "fa fa-pencil-square-o";
    secondIcon.className = "fa fa-times";
    input.className = "edit-note";
    input.setAttribute("type", "text");
    // Add input value
    firstPar.textContent = addInput.value;

    secondPar.appendChild(firstIcon);
    secondPar.appendChild(secondIcon);
    li.appendChild(firstPar);
    li.appendChild(secondPar);
    li.appendChild(input);
    ul.appendChild(li);
    addInput.value = "";
  }
});

// Edit and Delete note
// Edit note

ul.addEventListener('click', function(e) {
    if(e.target.classList[1] === 'fa-pencil-square-0') {

        var parentPar = e.target.parentNode;
        // Remove edit and delete button while editing note
        parentPar.style.display = 'none';
        
        var note = parentPar.previousElementSibling;
        var input = parentPar.nextElementSibling;
        // Display input field with available input value while submitting
        input.style.display = 'block';
        input.value = note.textContent;
        
        // SUbmit onclick on the Enter key on keyboard
        input.addEventListener('keypress', function(e) {
            if(e.keyCode === 13) {
                // Remove note if value is empty
                if(input.value !== ''){
                    note.textContent = input.value;
                    parentPar.style.display = 'block';
                    input.style.display = 'none';
                } else {
                    var li = input.parentNode;
                    li.parentNode.removeChild(li);
                }
            }
        });
        // Delete note 
    } else if(e.target.classList[1] === 'fa-times') {
        var list = e.target.parentNode.parentNode;
        list.parentNode.removeChild(list);
    }
});


// Hide and Unhide notes
var hideNote = document.getElementById('hide');
hideNote.addEventListener('click', function() {
    var label = document.querySelector('label');
   if(hideNote.checked) {
       label.textContent = 'Unhide notes';
       ul.style.display = 'none';
   } else {
       label.textContent = 'Hide notes';
       ul.style.display = 'block'
   }
});