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
