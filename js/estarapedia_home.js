window.onload = function() {
    var fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(function(element) {
        element.style.opacity = 0;
    });

    var fadeInImage = document.getElementById('fade-in');
    setTimeout(function() {
        fadeInImage.style.opacity = 1;

        var fadeInText = document.getElementById('fade-in-1');
        setTimeout(function() {
            fadeInText.style.opacity = 1;
        
        }, 2); // Adjust this value to match the duration of the image fading in
    }, 0); // No delay for the image to appear
}
