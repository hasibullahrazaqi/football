document.getElementById('next').onclick = function(){
  document.getElementById('btn').style.display = "inline-block";
  document.getElementById('next').style.backgroundColor = "#8B0000";
  document.getElementById('n').style.backgroundColor = "green";
  document.getElementById('e').style.backgroundColor = "red";
  document.getElementById('x').style.backgroundColor = "red";
}
document.getElementById('n').onclick = function(){
  document.getElementById('btn').style.display = "inline-block";
  document.getElementById('next').style.backgroundColor = "red";
  document.getElementById('n').style.backgroundColor = "#013220";
  document.getElementById('e').style.backgroundColor = "red";
  document.getElementById('x').style.backgroundColor = "red";
}
document.getElementById('e').onclick = function(){
  document.getElementById('btn').style.display = "inline-block";
  document.getElementById('next').style.backgroundColor = "red";
  document.getElementById('n').style.backgroundColor = "green";
  document.getElementById('e').style.backgroundColor = "#8B0000";
  document.getElementById('x').style.backgroundColor = "red";
}
document.getElementById('x').onclick = function(){
  document.getElementById('btn').style.display = "inline-block";
  document.getElementById('next').style.backgroundColor = "red";
  document.getElementById('n').style.backgroundColor = "green";
  document.getElementById('e').style.backgroundColor = "red";
  document.getElementById('x').style.backgroundColor = "#8B0000";
}



