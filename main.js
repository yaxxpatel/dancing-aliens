function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rdiM5q74C/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if (error){
        console.log("ERROR!!!");
    }
    else
    {
        console.log(results);

        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear ~'+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy ~'+
        (results[0].confidence*100).toFixed(2)+"+%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g + ","+random_number_b+")";

        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');

        if (results[0].label == "clapping")
        {
            img.src = 'aliens-1.gif' ;
            img1.src = 'aliens-2.png' ;
            img2.src = 'aliens-3.png' ;
            img3.src = 'aliens-4.png' ;
        }

        else if (results[0].label == "bell")
        {
            img.src = 'aliens-1.png' ;
            img1.src = 'aliens-2.gif' ;
            img2.src = 'aliens-3.png' ;
            img3.src = 'aliens-4.png' ;
        }
        else if (results[0].label == "snapping")
        {
            img.src = 'aliens-1.png' ;
            img1.src = 'aliens-2.png' ;
            img2.src = 'aliens-3.gif' ;
            img3.src = 'aliens-4.png' ;
        }
    }
}