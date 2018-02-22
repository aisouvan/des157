var vid;
function setup() {
  vid = createVideo(['small.mp4', 'small.ogv', 'small.webm'], vidLoad);
}

// This function is called when the video loads
function vidLoad() {
  vid.play();
}
