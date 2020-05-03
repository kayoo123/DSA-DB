---
title: Characters
---

# Search

Type something in the input field to search in the list:

<input id="myInput" type="text" placeholder="Search..">

<ul id="myList">
  <li><a href="Mickey.html">Mickey</a></li>
  <li><a href="Hades.html">Hades</a></li>
  <li><a href="Aladdin.html">Aladdin</a></li>
  <li><a href="ShanYu.html">ShanYu</a></li>
</ul>



<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
</script>
