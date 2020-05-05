---
title: Characters
---

<input id="myInput" type="text" placeholder="Search..">
<div id="myBtnContainer">
  <button class="btn active" onclick="filterSelection('all')"> Show all</button>
  <button class="btn" onclick="filterSelection('Hero')"> Hero</button>
  <button class="btn" onclick="filterSelection('Villain')"> Villain</button>
  <button class="btn" onclick="filterSelection('Offense')"> Offense</button>
  <button class="btn" onclick="filterSelection('Support')"> Support</button>
  <button class="btn" onclick="filterSelection('Defense')"> Defense</button>
</div>
<div id="myList" class="container">
  <div class="filterDiv Hero Offense"><center><a href="Mickey.html"><img src="/img/Mickey.png"></a><p hidden>Mickey</center></div>
  <div class="filterDiv Villain Offense"><center><a href="Hades.html"><img src="/img/Hades.png"></a><p hidden>Hades</center></div>
  <div class="filterDiv Hero Offense"><center><a href="Aladdin.html"><img src="/img/Aladdin.png"></a><p hidden>Aladdin</center></div>
  <div class="filterDiv Villain Offense"><center><a href="Demona.html"><img src="/img/Demona.png"></a><p hidden>Demona</center></div>
  <div class="filterDiv Hero Defense"><center><a href="Jasmine.html"><img src="/img/Jasmine.png"></a><p hidden>Jasmine</center></div>
  <div class="filterDiv Hero Offense"><center><a href="Jack_Sparrow.html"><img src="/img/Jack_Sparrow.png"></a><p hidden>Jack Sparrow</center></div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script>
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList div").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
</script>

<script>
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
</script>

<style>
.filterDiv {
  width: 80px;
  float: left;
  background-color: #31274c;
  color: #ffffff;
  line-height: 100px;
  text-align: center;
  margin: 2px;
  display: none;
  border-radius: 25px;
}

.show {
  display: block;
}

.container {
  margin-top: 20px;
  overflow: hidden;
}

/* Style the buttons */
.btn {
  border: none;
  outline: none;
  padding: 12px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
}

.btn:hover {
  background-color: #ddd;
}

.btn.active {
  background-color: #666;
  color: white;
}

#myInput {
  background-image: url('/img/searchicon.png');
  background-position: 10px 12px;
  background-repeat: no-repeat;
  width: 200px;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
}

[hidden] {
  display: none;
  visibility: collapse;
}

</style>
