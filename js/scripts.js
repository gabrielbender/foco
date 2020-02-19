var elm = document.querySelectorAll(".open-email");

elm.forEach(function(item){
    item.addEventListener("click", toggleEmail);
});

function toggleEmail(event){
    event.preventDefault();
    this.classList.toggle("active");
};