var chapstick = document.getElementById('chapstick');
var lips = document.getElementById('lips');
var close = document.getElementById('close');
var earphones = document.getElementById('earphones');
var music = document.getElementById('music');
var goodbye = document.getElementById('goodbye');
var glasses = document.getElementById('glasses');
var eyes = document.getElementById('eyes');
var bye = document.getElementById('bye');


chapstick.addEventListener('click', function() {
  lips.style.display = "block";

})

close.addEventListener('click', function() {
  lips.style.display = "none";
})


earphones.addEventListener('click', function() {
  music.style.display = "block";

})

goodbye.addEventListener('click', function() {
  music.style.display = "none";
})

glasses.addEventListener('click', function() {
  eyes.style.display = "block";

})

bye.addEventListener('click', function() {
  eyes.style.display = "none";
})
