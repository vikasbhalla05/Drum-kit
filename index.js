
var length=document.querySelectorAll("button").length;

for(var i=0;i<length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        alert("I Got Clicked!");
    });
}


