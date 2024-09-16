// function loadMenu() {
//     fetch('menu.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('menu-container').innerHTML = data;
//             // Optionally, initialize any scripts the menu needs, like event listeners
//             initializeMenuScripts();
//         });
// }

// // Call the function to load the menu
// loadMenu();

// function initializeMenuScripts() {
//     // Re-attach any event listeners for the menu (optional)
//     document.getElementById('hamburger-icon').addEventListener('click', toggleMenu);
// }

// // Example toggle function for the hamburger menu
// function toggleMenu() {
//     var menu = document.getElementById("navbar");
//     menu.classList.toggle("active");
//     console.log(menu.classList)
// }

function loadMenu() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            // Set the HTML content of menu-container
            document.getElementById('menu-container').innerHTML = data;

            // Use setTimeout to ensure the DOM is updated before initializing scripts
            //setTimeout(initializeMenuScripts, 250); // Wait 250ms to allow DOM update
        });
}

// Call the function to load the menu
loadMenu();

// Initialize menu scripts after the menu content is fully loaded
// function initializeMenuScripts() {
//     var hamburgerIcon = document.getElementById('hamburger-icon');
//     if (hamburgerIcon) {
//         hamburgerIcon.addEventListener('click', toggleMenu);
//     }
// }

function initializeMenuScripts() {
    var hamburgerIcon = document.getElementById('hamburger-icon');
    if (hamburgerIcon) {
        // Remove any existing click event listeners
        hamburgerIcon.removeEventListener('click', toggleMenu);
        // Add a new click event listener
        hamburgerIcon.addEventListener('click', toggleMenu);
    } else {
        console.error('hamburger-icon element not found in the DOM');
    }
}

function toggleMenu() {
    var menu = document.getElementById("navbar");
    if (menu) {
      menu.classList.toggle("active");
    }
    console.log(menu.classList)
}
