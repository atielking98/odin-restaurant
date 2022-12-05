import Nicky from './nicky.png'

const navItems = ["Home", "Menu", "About"];

function renderHome() {
    const newMain = document.createElement('div');
    newMain.setAttribute('id', 'main');
    const restaurantImage = document.createElement('img');
    restaurantImage.src = Nicky;
    const review = document.createElement('h3');
    review.innerHTML = '"This restaurant rocks!" - Joji';
    newMain.appendChild(restaurantImage);
    newMain.appendChild(review);
    const oldMain = document.getElementById("main");
    oldMain.parentNode.replaceChild(newMain, oldMain);
    console.log("New main!");
}

function renderMenu() {
    const newMain = document.createElement('div');
    newMain.setAttribute('id', 'main');
    const menu = document.createElement('div');
    const menuText = document.createElement('h2');
    menuText.innerText = "Nicky's Diner Menu";
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'menu');
    const menuItems = ["Chocolate Croissant 🥐", "Egg 🍳", "Donut 🍩", 
        "Banana Pancakes 🥞"];
    menuItems.forEach(renderMenu);
        function renderMenu(element) {
            var li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML= li.innerHTML + element;
        }
    menu.appendChild(ul);
    newMain.appendChild(menuText);
    newMain.appendChild(menu);
    
    const oldMain = document.getElementById("main");
    oldMain.parentNode.replaceChild(newMain, oldMain);
    console.log("New main!");

}

function renderAbout() {
    const newMain = document.createElement('div');
    newMain.setAttribute('id', 'main');
    const aboutText = document.createElement('h2');
    aboutText.innerHTML = "Created in 1997, Nicky's Diner has been serving the " +
        "top quality breakfast goods to generations with love and care. Come on " +
        " down to try them for yourself!";
    newMain.appendChild(aboutText);
    const oldMain = document.getElementById("main");
    oldMain.parentNode.replaceChild(newMain, oldMain);
    console.log("New main!");
}

function renderTab(e) {
    const tabName = e.srcElement.innerText;
    navItems.forEach(element => {
        const listItem = document.getElementById(element);
        if (element === tabName) {
            if (listItem.classList.contains("active")) {
                // No need to change tab, already current tab!
                console.log("we already here");
                return;
            }
            listItem.classList.add("active");
        } else {
            listItem.classList.remove("active");
        }
    });
    switch(tabName) {
        case "Home":
            renderHome();
            break;
        case "Menu":
            renderMenu();
            break;
        case "About":
            renderAbout();
            break;
        default:
            break;
    }
    console.log(e.srcElement);
    console.log(e);
}

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
    nav.setAttribute('id', 'nav');
    const ul = document.createElement('ul');
    navItems.forEach(renderNavList);
        function renderNavList(element) {
            var li = document.createElement('li');
            if (element === "Home") {
                li.setAttribute('class', 'active');
            }
            li.setAttribute('id', element);
            li.addEventListener("click", renderTab);
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