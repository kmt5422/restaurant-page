import pageLoaded from './modules/page-loaded';
import loadMenu from './modules/menu';

pageLoaded();

// DOM Elements
const overlayDiv = document.querySelector('.overlay');
const menuBtn = document.querySelector('.menu-link');
const homeBtn = document.querySelector('.home-link');

// Add evenet listeners
menuBtn.addEventListener('click', () => {
    if(overlayDiv.childNodes.length > 2) {
        overlayDiv.removeChild(overlayDiv.childNodes[2]);
    }
    loadMenu();
});

homeBtn.addEventListener('click', () => {
    if(overlayDiv.childNodes.length > 2) {
        overlayDiv.removeChild(overlayDiv.childNodes[2]);
    }
})