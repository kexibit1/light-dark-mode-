const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Swithc Theme Dynamically
function switchTheme(event) {
    event.target.checked ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light')
}


// Event Listener
toggleSwitch.addEventListener('change', switchTheme);