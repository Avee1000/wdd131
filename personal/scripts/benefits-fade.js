// Function to check if an element is in the viewport
function isInViewport(element) {
    const bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle fade-in effect for elements in viewport
function fadeInElements() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        if (isInViewport(element)) {
            document.querySelector('.benefits-text h2').classList.add('visible');
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

// Initial check for elements in viewport on page load
fadeInElements();

// Add scroll event listener to check for elements entering viewport
window.addEventListener('scroll', fadeInElements);


/////////////////////////////////////////////////////////////////////
