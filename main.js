//clownnose = '';
noseX = 0;
noseY = 0;
function preload(){
    clown_nose = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotPoses);
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        console.log("nose x ="+ result[0].pose.nose.x);
        console.log("nose y ="+ result[0].pose.nose.y); 
        noseX = result[0].pose.nose.x - 15;
        noseY = result[0].pose.nose.y - 2;
        
    }
}
function modelloaded(){
    console.log("model is loaded");
}
function draw(){
    image(video,0,0,300,300);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 30, 30);
}
function snapShot(){
    save("filterPicture.png");

}
