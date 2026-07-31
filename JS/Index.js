/* DOM 
Changes page without refreshing
respond to User Events 
Form Submissions
DOM exactly Idenctical to the html 
Automatically updates the DOM when the HTML changes and vice versa
Methods, Subobjects and properties
Methods - selects specific elements and performs actions on them
Subobjects - properties of the DOM object that represent specific parts of the document "style"
Properties - attributes of the DOM object that can be read or modified

3 main things - querySelector, eventListener and style
*/

const darkModeButton = document.getElementById("darkMode");
darkModeButton.addEventListener("click", function () {
  document.body.classList.toggle("darkmode");
});
