function preload(){

}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(530, 0);
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet",Modelloaded)

}
function draw(){
 image(video, 0, 0)
classifier.classify(video,gotResult)
}

function Modelloaded(){
 console.log("Hi I am a Model and I am working")
}

function gotResult(error,result){
  if (error){
    console.log(error)
  }
  else {
    console.log(result)
    document.getElementById("object_name").innerHTML = result[0].label
    document.getElementById("object_accuracy").innerHTML = (result[0].confidence * 100).toFixed(2)+"%" 

    
  }
}

