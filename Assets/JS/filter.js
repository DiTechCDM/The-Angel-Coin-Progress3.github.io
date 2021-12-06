function showFirst() {
    var fisrtDiv = document.getElementById('fisrtDiv');
    var secDiv = document.getElementById('secDiv');
    var thirdDiv = document.getElementById('thirdDiv');
    if (fisrtDiv.style.display === 'none') {
        secDiv.style.display = 'none';
        thirdDiv.style.display = 'none';
        fisrtDiv.style.display = 'block';
        document.getElementById("fisrtDiv").style.animation = "scale .8s alternate 1";
    }
}

function showSec() {
    var fisrtDiv = document.getElementById('fisrtDiv');
    var secDiv = document.getElementById('secDiv');
    var thirdDiv = document.getElementById('thirdDiv');
    if (secDiv.style.display === 'none') {
        secDiv.style.display = 'block';
        thirdDiv.style.display = 'none';
        document.getElementById("secDiv").style.animation = "scale .8s alternate 1";
        fisrtDiv.style.display = 'none';
        fourthDiv.style.display = 'none';
    }
}

function showThird() {
    var fisrtDiv = document.getElementById('fisrtDiv');
    var secDiv = document.getElementById('secDiv');
    var thirdDiv = document.getElementById('thirdDiv');
    if (thirdDiv.style.display === 'none') {
        thirdDiv.style.display = 'block';
        document.getElementById("thirdDiv").style.animation = "scale .8s alternate 1";
        fisrtDiv.style.display = 'none';
        secDiv.style.display = 'none';
        fourthDiv.style.display = 'none';
    }
}

function showFourth() {
    var fisrtDiv = document.getElementById('fisrtDiv');
    var secDiv = document.getElementById('secDiv');
    var thirdDiv = document.getElementById('thirdDiv');
    var fourthDiv = document.getElementById('fourthDiv');
    if (fourthDiv.style.display === 'none') {
        fourthDiv.style.display = 'block';
        document.getElementById("fourthDiv").style.animation = "scale .8s alternate 1";
        fisrtDiv.style.display = 'none';
        secDiv.style.display = 'none';
        thirdDiv.style.display = 'none';
    }
}