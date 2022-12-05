"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["print"],{

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
function pageLoad() {
    console.log('I get called from page-load.js!');
    const content = document.getElementById('content');

    // Create Header
    const header = document.createElement('div');
    const name = document.createElement('div');
    name.innerHTML = "<h1>Nicky's</h1>";
    const nav = document.createElement('div');
    const ul = document.createElement('ul');
    const navItems = ["Home", "Menu", "About"];
    navItems.forEach(renderNavList);
        function renderNavList(element) {
            var li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML= li.innerHTML + element;
        }
    nav.appendChild(ul);
    header.appendChild(name);
    header.appendChild(nav);

    // Create Main
    const main = document.createElement('div');
    const restaurantImage = document.createElement('img');
    restaurantImage.src = "nicky.png";
    const review = document.createElement('h3');
    review.innerHTML = '"This restaurant rocks!" - Joji';
    main.appendChild(restaurantImage);
    main.appendChild(review);
    
    // Add to Content
    content.appendChild(header);
    content.appendChild(main);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/page-load.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvcGFnZS1sb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdJIGdldCBjYWxsZWQgZnJvbSBwYWdlLWxvYWQuanMhJyk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAvLyBDcmVhdGUgSGVhZGVyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWUuaW5uZXJIVE1MID0gXCI8aDE+Tmlja3knczwvaDE+XCI7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IG5hdkl0ZW1zID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJBYm91dFwiXTtcbiAgICBuYXZJdGVtcy5mb3JFYWNoKHJlbmRlck5hdkxpc3QpO1xuICAgICAgICBmdW5jdGlvbiByZW5kZXJOYXZMaXN0KGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICBsaS5pbm5lckhUTUw9IGxpLmlubmVySFRNTCArIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIC8vIENyZWF0ZSBNYWluXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHJlc3RhdXJhbnRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHJlc3RhdXJhbnRJbWFnZS5zcmMgPSBcIm5pY2t5LnBuZ1wiO1xuICAgIGNvbnN0IHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcmV2aWV3LmlubmVySFRNTCA9ICdcIlRoaXMgcmVzdGF1cmFudCByb2NrcyFcIiAtIEpvamknO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocmVzdGF1cmFudEltYWdlKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHJldmlldyk7XG4gICAgXG4gICAgLy8gQWRkIHRvIENvbnRlbnRcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=