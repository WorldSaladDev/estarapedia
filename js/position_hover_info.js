document.addEventListener("DOMContentLoaded", function() {
    const hoverInfo = document.querySelectorAll(".hover-info");

    document.addEventListener("mousemove", function(event) {
        hoverInfo.forEach(function(info) {
            info.style.left = (event.clientX + 10) + "px"; // Offset by 10px to avoid cursor covering the text
            info.style.top = (event.clientY + 10) + "px"; // Offset by 10px to avoid cursor covering the text
        });
    });
});