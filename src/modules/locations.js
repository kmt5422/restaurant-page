export default function loadLocationsPage() {
    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location-div');
    const locationImg = document.createElement('img');
    const locationMessage = document.createElement('p');

    locationImg.src = 'img/construction.png';
    locationMessage.textContent = 'Sorry, this page is under construction.';

    locationDiv.appendChild(locationImg);
    locationDiv.appendChild(locationMessage);

    document.querySelector('.overlay').appendChild(locationDiv);
}