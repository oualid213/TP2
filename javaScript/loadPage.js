document.addEventListener("DOMContentLoaded", function() {
    var filmheliopolisBtn = document.getElementById("filmheliopolisbtn");

    filmheliopolisBtn.addEventListener("click", function() {
        toggleFilmDetails();
    });
});
// ca ne veux pas marcher
function toggleFilmDetails() {
    var filmheliopolis1 = document.getElementById("filmHeliopolis1");
    var filmheliopolis2 = document.getElementById("filmHeliopolis2");
    var filmheliopolis3 = document.getElementById("filmHeliopolis3");
    
    if (filmheliopolis1 && filmheliopolis2 && filmheliopolis3) {
        filmheliopolis1.classList.toggle("display-none");
        filmheliopolis2.classList.toggle("display-none");
        filmheliopolis3.classList.toggle("display-none");
    } else {
        console.error("One or more film elements not found.");
    }
}