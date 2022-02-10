function ToQ1() {
    location.replace("index.html")
}

function run() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var email = document.getElementById("email").value;
    document.getElementById("display").innerHTML = name + "\n" + address + "\n"  + city + "\n"  + email;
}