window.onload = function() {
    // Masquer la vidéo
    var video = document.getElementById("video-bg");
    video.style.display = "none";

    // Afficher l'image préliminaire
    var imagePreliminaire = document.getElementById("image-preliminaire");
    imagePreliminaire.style.display = "block";

    // Retarder l'affichage de la vidéo après l'image préliminaire
    setTimeout(function() {
        imagePreliminaire.style.display = "none";

        video.style.display = "block";
    }, 5000); // Délai en millisecondes
};


window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');

    if (window.scrollY > 100) { 
      navbar.classList.add('bg-black');
    } else {
      navbar.classList.remove('bg-black');
    }

  });

    