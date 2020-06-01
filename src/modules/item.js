export default function createMenuItem(itemName, itemDesc, itemPrice) {
    const name = itemName;
    const desc = itemDesc;
    const price = itemPrice;

    function attachToParent(domElement) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        const itemHeading = document.createElement('h2');
        const itemPara = document.createElement('p');
        const itemSpan = document.createElement('span');

        itemHeading.textContent = name;
        itemPara.textContent = desc;
        itemSpan.textContent = price;


        itemDiv.appendChild(itemHeading);
        itemDiv.appendChild(itemPara);
        itemDiv.appendChild(itemSpan);


        domElement.appendChild(itemDiv);
    }

    return {attachToParent};
}