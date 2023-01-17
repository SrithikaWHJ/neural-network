Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    img_quality:90
});

document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = 'img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log('ml5 version' ml5.version)
