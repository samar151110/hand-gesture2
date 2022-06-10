p1 = "";


Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '"/>';
    });

}
console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/A9oeDX1El/model.json", modelLloaded);

function modelLloaded() {
    console.log("modelLloaded");
}

function check() {
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        if (results[0].label == "best") {
            document.getElementById("emoji").innerHTML = "&#128077;";
        }
        if (results[0].label == "victory") {
            document.getElementById("emoji").innerHTML = "&#9996;";
        }
        if (results[0].label == "amazing") {
            document.getElementById("emoji").innerHTML = "&#128076;";
        }
        }

    }


function speak() {
    var synth = window.speechSynthesis;
    v1 = "The first prediction is " + p1;
    var v3 = new SpeechSynthesisUtterance(v1);
    synth.speak(v3);
}
