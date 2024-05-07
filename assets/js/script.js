// Carousel JS
document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.slideshow');
    var slideRadios = document.querySelectorAll('.slide-radio');

    // Show the initial slide
    slides[0].style.display = 'flex';

    // Function to handle radio button click event
    function handleRadioClick(event) {
        var target = event.target;
        if (target.type === 'radio' && target.classList.contains('slide-radio')) {
            // Hide all slides
            slides.forEach(function(slide) {
                slide.style.display = 'none';
            });
            // Display the selected slide
            slides[target.id.slice(-1) - 1].style.display = 'flex';
        }
    }

    // Add event listener to radio buttons
    slideRadios.forEach(function(radio) {
        radio.addEventListener('change', handleRadioClick);
    });

    // Automatic slideshow
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 10000); // Change slide every 10 seconds

    function nextSlide() {
        slides[currentSlide].style.display = 'none';
        slideRadios[currentSlide].checked = false;
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'flex'; // Display the next slide
        slideRadios[currentSlide].checked = true;
    }
});
