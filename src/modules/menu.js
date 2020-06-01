import createMenuItem from './item'

export default function loadMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    const pizzaItem = createMenuItem('Pizza', 'Have a taste of our world famous pizza.'
    + ' Freshly baked New York style pizza.', '$15.99');
    const cheeseSteakItem = createMenuItem('Cheesesteak','Freshly cooked Philly Cheesesteak with the toppings of your choice.', '$12.99');
    const burgerItem = createMenuItem('Cheese Burger', '100% pure beefy goodness on a bun.', '$7.99');
    const friesItem = createMenuItem('French Fries', 'Curly, plain, spicey or cheese. You name it and we have it!', '$4.99');

    pizzaItem.attachToParent(menuDiv);
    cheeseSteakItem.attachToParent(menuDiv);
    burgerItem.attachToParent(menuDiv);
    friesItem.attachToParent(menuDiv);

    document.querySelector('.overlay').appendChild(menuDiv);
}