const videoArea = document.getElementById('videoArea');
const videoElement = document.createElement('video');
let videoStream;
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then((stream)=>{
    videoStream = stream;
    appendVideoStream(videoElement,stream);
});

function appendVideoStream(element,stream){
  element.srcObject = stream;
  element.addEventListener('loadedmetadata', () => {
    element.play();
  });
  videoArea.append(element);
}