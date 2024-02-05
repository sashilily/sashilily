document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            const initialPosition = window.pageYOffset;
            const targetPosition = targetElement.getBoundingClientRect().top + initialPosition;
            const distance = targetPosition - initialPosition;
            const duration = 1000;
            let start = null;
            
            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                window.scrollTo(0, easeInOutCubic(progress, initialPosition, distance, duration));
                if (progress < duration) window.requestAnimationFrame(step);
            }
            
            window.requestAnimationFrame(step);
        });
    }
});

// Easing function for smooth scrolling
function easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
}
// Dynamic header appearance on scroll
document.addEventListener("DOMContentLoaded", function() {
const header = document.querySelector("header");
const introSection = document.querySelector("#intro");
const introSectionHeight = introSection.offsetHeight;

function toggleHeader() {
    if (window.scrollY >= introSectionHeight) {
       header.classList.add("scrolled");
}   else {
       header.classList.remove("scrolled");
}
}

toggleHeader();

document.addEventListener("scroll", function() {
toggleHeader();
});
});

// Scroll-to-top button
document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.querySelector("#scroll-top");

    function toggleScrollButton() {
        if (window.scrollY > 100) {
            scrollButton.classList.add("show");
        } else {
            scrollButton.classList.remove("show");
        }
    }

    toggleScrollButton();

    document.addEventListener("scroll", function() {
        toggleScrollButton();
    });

    scrollButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
