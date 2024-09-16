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
// }

function toggleMenu() {
    var menu = document.getElementById("navbar");
    // Toggle the 'active' class
    menu.classList.toggle("active");
}

// Add the event listener to the hamburger icon
document.getElementById('hamburger-icon').addEventListener('click', toggleMenu);
