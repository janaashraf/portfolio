// let slides = document.querySelectorAll('.slide');
// let currentSlide = 0;

// function nextSlide() {
//   slides[currentSlide].classList.remove('active');
//   currentSlide = (currentSlide + 1) % slides.length;
//   slides[currentSlide].classList.add('active');
// }

// setInterval(nextSlide, 3000); // Change slide every 3 seconds (3000 milliseconds)
document.addEventListener("DOMContentLoaded", function() {
    const prevArrow = document.querySelector(".prev");
    const nextArrow = document.querySelector(".next");
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    prevArrow.addEventListener("click", showPrevSlide);
    nextArrow.addEventListener("click", showNextSlide);
});
// script.js

function openMarioPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
 const video = document.getElementById('sm');
  function closeMarioPopup() {
    document.getElementById("popup").style.display = "none";
    video.pause();
  }
  
  function openTodoPopup() {
    document.getElementById("popuptodo").style.display = "block";
  }
  
  function closeTodoPopup() {
    document.getElementById("popuptodo").style.display = "none";
  }
  function openOsPopup() {
    document.getElementById("popupos").style.display = "block";
  }
  
  function closeOsPopup() {
    document.getElementById("popupos").style.display = "none";
  }
  function openOnPopup() {
    document.getElementById("popupon").style.display = "block";
  }
  
  function closeOnPopup() {
    document.getElementById("popupon").style.display = "none";
  }
  function openEventPopup() {
    document.getElementById("popupevent").style.display = "block";
  }
  
  function closeEventPopup() {
    document.getElementById("popupevent").style.display = "none";
  }



// Function to open the lightbox
function openLightbox(imageSrc) {
    document.getElementById('lightbox-img').src = imageSrc;
    document.getElementById('lightbox').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling when lightbox is open
  }
  
  // Function to close the lightbox
  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling when lightbox is closed
  }
  
  // Attach click event listeners to each photo to open the lightbox
  document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.grid-item img');
    photos.forEach(photo => {
      photo.addEventListener('click', function() {
        openLightbox(this.src);
      });
    });
  });
  
  
  
  
