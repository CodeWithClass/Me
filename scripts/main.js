window.onload = function(){ 
  setInterval(changeImg, 2500)
}

let index = 0;

function changeImg() {
  [].forEach.call(document.getElementsByClassName("me"), (v, i) =>{
    document.getElementsByClassName("me")[i].hidden = i !== index
  });
  index = (index + 1) % document.getElementsByClassName("me").length;
  console.log(document.getElementsByClassName("me").length)
}
