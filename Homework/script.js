"use strict";

var div = document.getElementById("table");
var data = document.getElementById("data");
var inputName = document.getElementById("inputName");
var inputSurname = document.getElementById("inputSurname");
var inputAge = document.getElementById("inputAge");
var add = document.getElementById("add");
var removeFirst = document.getElementById("removeFirst");
var removeLast = document.getElementById("removeLast");

// function validateForm() {
//   var x = document.forms["myForm"]["inputName"].value;
//   if (x == "" || x == null) {
//     alert("Name must be filled out");
//     return false;
//   }
// }

add.addEventListener("click", function(){
  var row= document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  div.appendChild(row);
  div.appendChild(td1);
  div.appendChild(td2);
  div.appendChild(td3);
  td1.innerText = inputName.value + "";
  td2.innerText = inputSurname.value + "";
  td3.innerText = inputAge.value + "";
  inputName.value = "";
  inputSurname.value = "";
  inputAge.value = "";
});

removeFirst.addEventListener("click", function(){
  var row = document.getElementsByTagName("tr");
  var td1 = document.getElementsByTagName("td");
  var td2 = document.getElementsByTagName("td");
  var td3 = document.getElementsByTagName("td");
  // row[row.length, 1].remove();
  td1[td1.length, 0].remove();
  td2[td2.length, 0].remove();
  td3[td3.length, 0].remove();
});

removeLast.addEventListener("click", function(){
  var row = document.getElementsByTagName("tr");
  var td1 = document.getElementsByTagName("td");
  var td2 = document.getElementsByTagName("td");
  var td3 = document.getElementsByTagName("td");
  // row[row.length, 1].remove();
  td1[td1.length - 1].remove();
  td2[td2.length - 1].remove();
  td3[td3.length - 1].remove();
});


// function validate() {
//     if (document.getElementById("inputName").value == "") {
//          alert("Prašau užpildyti visus laukus!");
//          document.getElementById('inputName').className += ' required'
//        }
       // }
