function loadMenu() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
            // Optionally, initialize any scripts the menu needs, like event listeners
            initializeMenuScripts();
        });
}

// Call the function to load the menu
loadMenu();

function initializeMenuScripts() {
    // Re-attach any event listeners for the menu (optional)
    document.getElementById('hamburger-icon').addEventListener('click', toggleMenu);
}

// Example toggle function for the hamburger menu
function toggleMenu() {
    var menu = document.getElementById("navbar");
    //menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    } else {
        menu.classList.add("active");
    }
}
