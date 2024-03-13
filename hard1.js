
let obj ={

  color: '',
  option2: '',
  option3: 0,
  option4:0,
}

console.log(obj); 

obj.option3 = 18; 

console.log(obj); 


document.getElementById('next').onclick = function(){
  document.getElementById('btn').style.display = "inline-block";
  document.getElementById('next').style.backgroundColor = "#013220";
  document.getElementById('n').style.backgroundColor = "red";
  document.getElementById('e').style.backgroundColor = "red";
  document.getElementById('x').style.backgroundColor = "red";
}
document.getElementById('n').onclick = function(){
  document.getElementById('btn').style.display = "inline-block";
  document.getElementById('next').style.backgroundColor = "green";
  document.getElementById('n').style.backgroundColor = "#8B0000";
  document.getElementById('e').style.backgroundColor = "red";
  document.getElementById('x').style.backgroundColor = "red";
}
document.getElementById('e').onclick = function(){
  document.getElementById('btn').style.display = "inline-block";
  document.getElementById('next').style.backgroundColor = "green";
  document.getElementById('n').style.backgroundColor = "red";
  document.getElementById('e').style.backgroundColor = "#8B0000";
  document.getElementById('x').style.backgroundColor = "red";
}
document.getElementById('x').onclick = function(){
  document.getElementById('btn').style.display = "inline-block";
  document.getElementById('next').style.backgroundColor = "green";
  document.getElementById('n').style.backgroundColor = "red";
  document.getElementById('e').style.backgroundColor = "red";
  document.getElementById('x').style.backgroundColor = "#8B0000";
}

