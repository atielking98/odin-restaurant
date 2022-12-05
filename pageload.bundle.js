"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["pageload"],{

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _nicky_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nicky.png */ "./src/nicky.png");


const navItems = ["Home", "Menu", "About"];

function renderHome() {
    const newMain = document.createElement('div');
    newMain.setAttribute('id', 'main');
    const restaurantImage = document.createElement('img');
    restaurantImage.src = _nicky_png__WEBPACK_IMPORTED_MODULE_0__;
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

function pageLoad() {
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
    restaurantImage.src = _nicky_png__WEBPACK_IMPORTED_MODULE_0__;
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

/***/ }),

/***/ "./src/nicky.png":
/*!***********************!*\
  !*** ./src/nicky.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0966d494f9b0db9b88df.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pageload.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1Q0FBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1Q0FBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9wYWdlbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmlja3kgZnJvbSAnLi9uaWNreS5wbmcnXG5cbmNvbnN0IG5hdkl0ZW1zID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJBYm91dFwiXTtcblxuZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcbiAgICBjb25zdCBuZXdNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3TWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgICBjb25zdCByZXN0YXVyYW50SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICByZXN0YXVyYW50SW1hZ2Uuc3JjID0gTmlja3k7XG4gICAgY29uc3QgcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICByZXZpZXcuaW5uZXJIVE1MID0gJ1wiVGhpcyByZXN0YXVyYW50IHJvY2tzIVwiIC0gSm9qaSc7XG4gICAgbmV3TWFpbi5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW1hZ2UpO1xuICAgIG5ld01haW4uYXBwZW5kQ2hpbGQocmV2aWV3KTtcbiAgICBjb25zdCBvbGRNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG9sZE1haW4ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3TWFpbiwgb2xkTWFpbik7XG4gICAgY29uc29sZS5sb2coXCJOZXcgbWFpbiFcIik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XG4gICAgY29uc3QgbmV3TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld01haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51VGV4dC5pbm5lclRleHQgPSBcIk5pY2t5J3MgRGluZXIgTWVudVwiO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcbiAgICBjb25zdCBtZW51SXRlbXMgPSBbXCJDaG9jb2xhdGUgQ3JvaXNzYW50IPCfpZBcIiwgXCJFZ2cg8J+Ns1wiLCBcIkRvbnV0IPCfjalcIiwgXG4gICAgICAgIFwiQmFuYW5hIFBhbmNha2VzIPCfpZ5cIl07XG4gICAgbWVudUl0ZW1zLmZvckVhY2gocmVuZGVyTWVudSk7XG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlck1lbnUoZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgIGxpLmlubmVySFRNTD0gbGkuaW5uZXJIVE1MICsgZWxlbWVudDtcbiAgICAgICAgfVxuICAgIG1lbnUuYXBwZW5kQ2hpbGQodWwpO1xuICAgIG5ld01haW4uYXBwZW5kQ2hpbGQobWVudVRleHQpO1xuICAgIG5ld01haW4uYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgXG4gICAgY29uc3Qgb2xkTWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBvbGRNYWluLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld01haW4sIG9sZE1haW4pO1xuICAgIGNvbnNvbGUubG9nKFwiTmV3IG1haW4hXCIpO1xuXG59XG5cbmZ1bmN0aW9uIHJlbmRlckFib3V0KCkge1xuICAgIGNvbnN0IG5ld01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdNYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuICAgIGNvbnN0IGFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYWJvdXRUZXh0LmlubmVySFRNTCA9IFwiQ3JlYXRlZCBpbiAxOTk3LCBOaWNreSdzIERpbmVyIGhhcyBiZWVuIHNlcnZpbmcgdGhlIFwiICtcbiAgICAgICAgXCJ0b3AgcXVhbGl0eSBicmVha2Zhc3QgZ29vZHMgdG8gZ2VuZXJhdGlvbnMgd2l0aCBsb3ZlIGFuZCBjYXJlLiBDb21lIG9uIFwiICtcbiAgICAgICAgXCIgZG93biB0byB0cnkgdGhlbSBmb3IgeW91cnNlbGYhXCI7XG4gICAgbmV3TWFpbi5hcHBlbmRDaGlsZChhYm91dFRleHQpO1xuICAgIGNvbnN0IG9sZE1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgb2xkTWFpbi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdNYWluLCBvbGRNYWluKTtcbiAgICBjb25zb2xlLmxvZyhcIk5ldyBtYWluIVwiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFiKGUpIHtcbiAgICBjb25zdCB0YWJOYW1lID0gZS5zcmNFbGVtZW50LmlubmVyVGV4dDtcbiAgICBuYXZJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGFiTmFtZSkge1xuICAgICAgICAgICAgaWYgKGxpc3RJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gY2hhbmdlIHRhYiwgYWxyZWFkeSBjdXJyZW50IHRhYiFcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndlIGFscmVhZHkgaGVyZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHN3aXRjaCh0YWJOYW1lKSB7XG4gICAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgICAgICByZW5kZXJIb21lKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIk1lbnVcIjpcbiAgICAgICAgICAgIHJlbmRlck1lbnUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQWJvdXRcIjpcbiAgICAgICAgICAgIHJlbmRlckFib3V0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhlLnNyY0VsZW1lbnQpO1xuICAgIGNvbnNvbGUubG9nKGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gcGFnZS1sb2FkLmpzIScpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuXG4gICAgLy8gQ3JlYXRlIEhlYWRlclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lLmlubmVySFRNTCA9IFwiPGgxPk5pY2t5J3MgRGluZXI8L2gxPlwiO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdicpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBuYXZJdGVtcy5mb3JFYWNoKHJlbmRlck5hdkxpc3QpO1xuICAgICAgICBmdW5jdGlvbiByZW5kZXJOYXZMaXN0KGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gXCJIb21lXCIpIHtcbiAgICAgICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdpZCcsIGVsZW1lbnQpO1xuICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclRhYik7XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICBsaS5pbm5lckhUTUw9IGxpLmlubmVySFRNTCArIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIC8vIENyZWF0ZSBNYWluXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG4gICAgY29uc3QgcmVzdGF1cmFudEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcmVzdGF1cmFudEltYWdlLnNyYyA9IE5pY2t5O1xuICAgIGNvbnN0IHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcmV2aWV3LmlubmVySFRNTCA9ICdcIlRoaXMgcmVzdGF1cmFudCByb2NrcyFcIiAtIEpvamknO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocmVzdGF1cmFudEltYWdlKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHJldmlldyk7XG4gICAgXG4gICAgLy8gQWRkIENvbnRlbnQgdG8gRG9jdW1lbnRcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgY29uc29sZS5sb2coXCJEb25lIGFkZGluZyBzdHVmZlwiKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=