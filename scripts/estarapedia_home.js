window.onload = function() {
    var fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(function(element) {
        element.style.opacity = 0;
    });

    var fadeInImage = document.getElementById('fade-in-1');
    setTimeout(function() {
        fadeInImage.style.opacity = 1;

        var fadeInText = document.getElementById('fade-in-2');
        setTimeout(function() {
            fadeInText.style.opacity = 1;
            
            var fadeInElement3 = document.getElementById('fade-in-3');
            setTimeout(function() {
                fadeInElement3.style.opacity = 1;
            }, 300); // Adjust this value to match the duration of the text fading in
        }, 300); // Adjust this value to match the duration of the image fading in
    }, 0); // No delay for the image to appear
}
