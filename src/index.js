import pageLoaded from './modules/page-loaded';
import loadMenu from './modules/menu';
import loadContactPage from './modules/contact';
import loadLocationsPage from './modules/locations';

pageLoaded();

// DOM Elements
const overlayDiv = document.querySelector('.overlay');
const menuBtn = document.querySelector('.menu-link');
const homeBtn = document.querySelector('.home-link');
const locationsBtn = document.querySelector('.locations-link');
const contactBtn = document.querySelector('.contact-link');

// Add evenet listeners
menuBtn.addEventListener('click', () => {
    clearDiv();
    loadMenu();
});

homeBtn.addEventListener('click', () => {
    clearDiv();
});

contactBtn.addEventListener('click', () => {
    clearDiv();
    loadContactPage();
});

locationsBtn.addEventListener('click', () => {
    clearDiv();
    loadLocationsPage();
})

// Helper functions
function clearDiv() {
    if(overlayDiv.childNodes.length > 2) {
        overlayDiv.removeChild(overlayDiv.childNodes[2]);
    }
}