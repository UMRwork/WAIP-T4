function ToQ2() {
    location.replace("Q2.html")
}
function run() {
    var mark1, mark2, mark3, mark4, total;
    mark1 = parseFloat(document.getElementById("mrk1").value);
    mark2 = parseFloat(document.getElementById("mrk2").value);
    mark3 = parseFloat(document.getElementById("mrk3").value);
    mark4 = parseFloat(document.getElementById("mrk4").value);
    
    var x = document.getElementById("total").checked;
    var y = document.getElementById("average").checked;
    var disply;

    if (x == true) {
        disply = mark1 + mark2 + mark3 + mark4;
    }
    if (y == true) {
        disply = (mark1 + mark2 + mark3 + mark4)/4;
    }
    document.getElementById("result").value = disply.toFixed(2);
}