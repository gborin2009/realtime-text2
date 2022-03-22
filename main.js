noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    canvas= createCanvas(550,550);
    canvas.position(700,100)
    video= createCapture(VIDEO); 
    video.size(550,500)
    video.position(50,35)
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes)
}
function draw(){
    background('#301934')

fill("pink");
stroke("black")
text("GABBY",noseX,noseY)
}
function modelLoaded(){
    console.log('poseNet is loaded')
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x
        rightWristX=results[0].pose.rightWrist.x
        difference=floor(leftWristX-rightWristX)
    }
}