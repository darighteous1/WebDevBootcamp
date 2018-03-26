var lis = document.querySelectorAll("li");

lis.forEach(function(el){
    el.addEventListener("mouseover", function(){
        this.classList.add("selected");
    });

    el.addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });

    el.addEventListener("click", function(){
        this.classList.toggle("done");
    });
});