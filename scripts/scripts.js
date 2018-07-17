var faq = document.getElementsByClassName("faq-fold");

for(var i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function() {
        this.classList.toggle("selected");
        var fold = this.nextElementSibling;
        if(fold.style.display === "block") {
            fold.style.display = "none";
        } else {
            fold.style.display = "block";
        }
    });
}