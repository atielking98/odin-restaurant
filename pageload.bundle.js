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
    restaurantImage.src = _nicky_png__WEBPACK_IMPORTED_MODULE_0__;
    const review = document.createElement('h3');
    review.innerHTML = '"This restaurant rocks!" - Joji';
    main.appendChild(restaurantImage);
    main.appendChild(review);
    
    // Add to Content
    content.appendChild(header);
    content.appendChild(main);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCOztBQUVoQjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVDQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9wYWdlbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmlja3kgZnJvbSAnLi9uaWNreS5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdJIGdldCBjYWxsZWQgZnJvbSBwYWdlLWxvYWQuanMhJyk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAvLyBDcmVhdGUgSGVhZGVyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWUuaW5uZXJIVE1MID0gXCI8aDE+Tmlja3knczwvaDE+XCI7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IG5hdkl0ZW1zID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJBYm91dFwiXTtcbiAgICBuYXZJdGVtcy5mb3JFYWNoKHJlbmRlck5hdkxpc3QpO1xuICAgICAgICBmdW5jdGlvbiByZW5kZXJOYXZMaXN0KGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICBsaS5pbm5lckhUTUw9IGxpLmlubmVySFRNTCArIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIC8vIENyZWF0ZSBNYWluXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHJlc3RhdXJhbnRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHJlc3RhdXJhbnRJbWFnZS5zcmMgPSBOaWNreTtcbiAgICBjb25zdCByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHJldmlldy5pbm5lckhUTUwgPSAnXCJUaGlzIHJlc3RhdXJhbnQgcm9ja3MhXCIgLSBKb2ppJztcbiAgICBtYWluLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbWFnZSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChyZXZpZXcpO1xuICAgIFxuICAgIC8vIEFkZCB0byBDb250ZW50XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9