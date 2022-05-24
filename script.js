setTimeout(gameLost, 60000);

var timer,
    el = document.getElementById("timer");

(function functimer() {
    var sec = 0;
    timer = setInterval(() => {
        el.innerHTML = '00:' + sec;
        sec++


    }, 1000)


})()
var count = 0;

function onClick() {
    count += 1;
    document.getElementById("count").innerHTML = count;

};




function gameLost() {

    alert("إنتهى الوقت ، والنتيجة هي ..");

    location.replace("404.html");

    if (count > 349) {

        alert("مبروووك ! صور وإذهب الى هاذا الروم (https://discord.gg/Fumu25Bygx)")
    } else { alert("لقد خسرت .. أعد المحاولة ") }
}