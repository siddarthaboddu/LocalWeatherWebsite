
function query() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        console.log("ol");
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
    $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+position.coords.latitude+"&lon="+position.coords.longitude, function (data) {
        $("#inputtext").text(data["name"]+","+data["sys"]["country"]);
        console.log(data);
        $("#temperature").append(data["main"]["temp"] + "°C                   " + "max: " + data["main"]["temp_min"] + "°C    max: " + data["main"]["temp_max"] + "°C ");
        $("#pressure").append(data["main"]["pressure"]);
        $("#humidity").append(data["main"]["humidity"]);
        console.log(data["main"]["temp"] + "C");
        $("#condition").append(data["weather"][0]["main"]);
        
        
        
    });
}
function renderOutputHtml(ourdata) {
    var quote = ourdata["content"];
    var name = outdata["title"];
    Console.log(content);
    // var htmlstring = "";
    //for (var i= 0; i < 10;i++){
    //     htmlstring += "<img src=" + results[i]["urls"]["small"] + " style='padding:10px 10px 10px 10px' height='200' width='200'>";

    // }
    //$("#list").append(htmlstring);
    $("#inputtext").append(content);
    $("#inputtext").append("<p>" + title + "</p>");

}

function main() {

    query();
}
$(document).ready(main);