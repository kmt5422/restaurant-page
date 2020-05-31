export default function() {
    // Create overlay div
    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('overlay');

    // Create heading
    const headingDiv = document.createElement('div');
    headingDiv.classList.add('heading');
    const h1Heading = document.createElement('h1');
    h1Heading.textContent = 'Larry\'s Pizza';
    const pHeading = document.createElement('p');
    pHeading.textContent = 'THE BEST PIZZA IN THE CITY!';
    headingDiv.appendChild(h1Heading);
    headingDiv.appendChild(pHeading);

    // Create navbar
    const footerNav = document.createElement('nav');
    footerNav.classList.add('footer-nav');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const a1 = document.createElement('a');
    const a2 = document.createElement('a');
    const a3 = document.createElement('a');
    const a4 = document.createElement('a');
    
    a1.textContent = 'Home';
    a2.textContent = 'Menu';
    a3.textContent = 'Locations';
    a4.textContent = 'Contact Us';

    a1.setAttribute('href', '#');
    a2.setAttribute('href', '#');
    a3.setAttribute('href', '#');
    a4.setAttribute('href', '#');

    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    li4.appendChild(a4);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);

    footerNav.appendChild(ul);

    // Add all elements to overlayDiv
    overlayDiv.appendChild(headingDiv);
    overlayDiv.appendChild(footerNav);

    // Add the overlayDiv to content div
    document.querySelector('#content').appendChild(overlayDiv);
}