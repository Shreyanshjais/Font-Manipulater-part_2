function setup()
{
    video=createCapture(VIDEO);
    video.size(400,450);
    video.position(140,60);

    canvas=createCanvas(400,400);
    canvas.position(600,100);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Posenet is Initialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}