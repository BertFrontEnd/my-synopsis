let one = document.querySelector('#one');
one.innerHTML = `Width: ${window.innerWidth}px`;

let two = document.querySelector('#two');
two.innerHTML = `Width: ${window.innerWidth}px`;

let three = document.querySelector('#three');
three.innerHTML = `Width: ${window.innerWidth}px`;

let fourW = document.querySelector('#fourW');
fourW.innerHTML = `Width: ${window.innerWidth}px`;
let fourH = document.querySelector('#fourH');
fourH.innerHTML = `Height: ${window.innerHeight}px`;

let fiveW = document.querySelector('#fiveW');
fiveW.innerHTML = `Width: ${window.innerWidth}px`;
let fiveH = document.querySelector('#fiveH');
fiveH.innerHTML = `Height: ${window.innerHeight}px`;
let fiveD = document.querySelector('#fiveD');
fiveD.innerHTML = `Width/Height: ${(
  window.innerWidth / window.innerHeight
).toFixed(1)}`;

window.addEventListener('resize', function() {
  one.innerHTML = `Width: ${window.innerWidth}px`;
});

window.addEventListener('resize', function() {
  two.innerHTML = `Width: ${window.innerWidth}px`;
});

window.addEventListener('resize', function() {
  three.innerHTML = `Width: ${window.innerWidth}px`;
});

window.addEventListener('resize', function() {
  fourW.innerHTML = `Width: ${window.innerWidth}px`;
  fourH.innerHTML = `Height: ${window.innerHeight}px`;
});

window.addEventListener('resize', function() {
  fiveW.innerHTML = `Width: ${window.innerWidth}px`;
  fiveH.innerHTML = `Height: ${window.innerHeight}px`;
  fiveD.innerHTML = `Width/Height: ${(
    window.innerWidth / window.innerHeight
  ).toFixed(1)}`;
});
