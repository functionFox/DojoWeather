var cookieJar = document.querySelector(".cookie");
var tempAsset = document.querySelector("#tempHi-0");
var foreC = [[24, 18], [27, 19], [21, 16], [26, 21]];
var foreF = [[75, 65], [80, 66], [69, 61], [78, 70]];

function acceptCookie () {
    cookieJar.remove();
}

function loadAlert() {
    alert("Loading weather report...");
}

function loadTemp(unit) {
    if (unit == 1) {
        tempLoad = foreF;
    } else {
        tempLoad = foreC;
    }
    for (var i = 0; i < tempLoad.length; i++){
        tempAsset = document.querySelector("#tempHi-" + i);
        tempAsset.innerText = tempLoad[i][0] + "°";
        tempAsset = document.querySelector("#tempLo-" + i);
        tempAsset.innerText = tempLoad[i][1] + "°";
    }
}