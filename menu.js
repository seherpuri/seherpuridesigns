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

loadMenu();

function initializeMenuScripts() {
    var hamburgerIcon = document.getElementById('hamburger-icon');
    if (hamburgerIcon) {
        hamburgerIcon.removeEventListener('click', toggleMenu);
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
