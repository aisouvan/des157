'use strict'

var capture;
var button;
var playing = true;

function setup() {
  createCanvas(600, 400);
  capture = createCapture(VIDEO);
  capture.size(600, 400);
  capture.hide();
  button = createButton('play');
  button.mousePressed(toggleVid);
}

function draw() {
  background(255);
  image(capture, 0, 0, 600, 400);


}
function toggleVid() {
  if (playing) {
    capture.pause();
    button.html('play');
  } else {
    capture.loop();
    button.html('pause');
  }
  playing = !playing;
}
