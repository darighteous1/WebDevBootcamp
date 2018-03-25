
var interval = setInterval(function() {
    var headers = document.querySelectorAll("h1");
    headers.forEach(function(header){
        if (header.style.color == "grey") {
            header.style.color = "tomato";
        } else {
            header.style.color = "grey";    
        }
    });

}, 1500);