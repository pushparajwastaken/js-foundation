//dom-document object model
//used to manipulate content,style and structure
// is one of the most unique and useful tools of javascript
//example 1

document.getElementById("changeTextButton").addEventListener("click", () => {
  let paragraph = document.getElementById("myParagraph");
  paragraph.textContent = "the paragraph is changed";
});

//example 2

document.getElementById("highlightfirstcity").addEventListener("click", () => {
  let citieslist = document.getElementById("citieslist");
  citieslist.firstElementChild.classList.add("highlight");
});

//example 3

document.getElementById("changeorder").addEventListener("click", function () {
  let coffeetype = document.getElementById("coffeetype");
  coffeetype.textContent = "Espresso";
  coffeetype.style.backgroundColor = "brown";
  coffeetype.style.padding = "5px";
});

//example 4

document.getElementById("addnewitem").addEventListener("click", function () {
  let neworder = document.createElement("li");
  neworder.textContent = "Butter";
  document.getElementById("shoppinglist").appendChild(neworder);
});

//example 5

document.getElementById("removelasttask").addEventListener("click", () => {
  let tasklist = document.getElementById("tasklsit");
  tasklist.lastElementChild.remove();
});

//example 6

document
  .getElementById("clickmebutton")
  .addEventListener("dblclick", function () {
    alert("CHAICODE!!!!!!!!!!!!!!!!!!!!");
  });

//example 7
document.getElementById("tealist").addEventListener("click", (event) => {
  // console.log(event);
  if (event.target && event.target.matches(".teaitem")) {
    alert("YOU SELECETED: " + event.target.textContent);
  }
});

//example-8
document.getElementById("feedbackform").addEventListener("submit", (event) => {
  alert("SUBMITTED");
  event.preventDefault();
  let feedback = document.getElementById("feedbackinput").ariaValueMax;
  console.log(feedback);
  document.getElementById("feedback display").textcq = `Feedback`;
});

//EXAMPLE-9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domstatus").textContent = "DOM FULLY LOADED";
});

//EXAMPLE-10
document.getElementById("togglehighlight").addEventListener("click", () => {
  let text = document.getElementById("descritiontext");
  text.classList.toggle("highlight");
  text.style.padding = "25px";
});
