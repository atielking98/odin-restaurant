import Nicky from './nicky.png'

export default function pageLoad() {
    console.log('I get called from page-load.js!');
    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    // Create Header
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    const name = document.createElement('div');
    name.innerHTML = "<h1>Nicky's Diner</h1>";
    const nav = document.createElement('div');
    const ul = document.createElement('ul');
    const navItems = ["Home", "Menu", "About"];
    navItems.forEach(renderNavList);
        function renderNavList(element) {
            var li = document.createElement('li');
            if (element === "Home") {
                li.setAttribute('class', 'active');
            }
            ul.appendChild(li);
            li.innerHTML= li.innerHTML + element;
        }
    nav.appendChild(ul);
    header.appendChild(name);
    header.appendChild(nav);

    // Create Main
    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    const restaurantImage = document.createElement('img');
    restaurantImage.src = Nicky;
    const review = document.createElement('h3');
    review.innerHTML = '"This restaurant rocks!" - Joji';
    main.appendChild(restaurantImage);
    main.appendChild(review);
    
    // Add Content to Document
    content.appendChild(header);
    content.appendChild(main);
    document.body.appendChild(content);

    console.log("Done adding stuff");
}