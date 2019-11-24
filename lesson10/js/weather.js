var temp = parseInt(document.getElementById("current-temp").innerText);
var speed = parseInt(document.getElementById("windspeed").innerText);

if(temp <= 50 && speed >= 3){
    var formula = 35.74 + (0.6215*temp) - (35.75*(speed**0.16)) + (0.4275*temp*(speed**0.16));
document.getElementById("chill").innerText = formula.toFixed(2);

} else {
   document.getElementById("chill").innerText = "N/A" 
}