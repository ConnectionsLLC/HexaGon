"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Stories.tsx":
/*!********************************!*\
  !*** ./components/Stories.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nuseEffect(function() {\n    return onSnapshot(query(collection(db, \"posts\"), orderBy(\"timestamp\", \"desc\")), function(snapshot) {\n        setPosts(snapshot.docs);\n    });\n}, [\n    db\n]);\nfunction Stories() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex ml-4 mr-4 p-2 rounded-lg mt-6 overflow-x-scroll border scrollbar-hide lg:w-[85%] border-gray-200 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-6 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://lh3.googleusercontent.com/a-/AFdZucqIzaspPhKsj-lKIF-KPwINypZ9ESrPY6_Kpo1JiA=s96-c\",\n                            alt: \"\",\n                            className: \"h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\Stories.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text- w-14 truncate text-center\",\n                            children: \"JustAUserName\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\Stories.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 23\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\Stories.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 19\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\Stories.tsx\",\n                lineNumber: 18,\n                columnNumber: 12\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\Stories.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\Stories.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = Stories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stories);\nvar _c;\n$RefreshReg$(_c, \"Stories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0b3JpZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBeUI7QUFDekJDLFNBQVMsQ0FDUDtXQUNFQyxVQUFVLENBQUNDLEtBQUssQ0FBQ0MsVUFBVSxDQUFDQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUVDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFDckVDLFNBQUFBLFFBQVEsRUFBSTtRQUNWQyxRQUFRLENBQUNELFFBQVEsQ0FBQ0UsSUFBSSxDQUFDO0tBQ3hCLENBQ0Y7Q0FBQSxFQUNIO0lBQUNKLEVBQUU7Q0FBQyxDQUNMLENBQUM7QUFHRixTQUFTSyxPQUFPLEdBQUc7SUFDakIscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0YsNEVBQUNBLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHdHQUEwRztzQkFFcEgsNEVBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxpQkFBaUI7MEJBQ3pCLDRFQUFDRCxLQUFHOztzQ0FDRiw4REFBQ0UsS0FBRzs0QkFBQ0MsR0FBRyxFQUFDLDJGQUEyRjs0QkFBQ0MsR0FBRyxFQUFDLEVBQUU7NEJBQUNILFNBQVMsRUFBQywwREFBMEQ7Ozs7O2dDQUFHO3NDQUNqTCw4REFBQ0ksR0FBQzs0QkFBQ0osU0FBUyxFQUFDLGlDQUFpQztzQ0FBQyxlQUFhOzs7OztnQ0FBSTs7Ozs7O3dCQUM1RDs7Ozs7b0JBNEJUOzs7OztnQkFFSjs7Ozs7WUFDSCxDQUNQO0NBQ0Y7QUExQ1FGLEtBQUFBLE9BQU87QUE0Q2hCLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3Rvcmllcy50c3g/MGFjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbnVzZUVmZmVjdChcclxuICAoKSA9PlxyXG4gICAgb25TbmFwc2hvdChxdWVyeShjb2xsZWN0aW9uKGRiLCAncG9zdHMnKSwgb3JkZXJCeSgndGltZXN0YW1wJywgJ2Rlc2MnKSksXHJcbiAgICAgIHNuYXBzaG90ID0+IHtcclxuICAgICAgICBzZXRQb3N0cyhzbmFwc2hvdC5kb2NzKVxyXG4gICAgICB9XHJcbiAgICApLFxyXG4gIFtkYl1cclxuKTtcclxuXHJcblxyXG5mdW5jdGlvbiBTdG9yaWVzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2ID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1sLTQgbXItNCAgcC0yIHJvdW5kZWQtbGcgbXQtNiBvdmVyZmxvdy14LXNjcm9sbCBib3JkZXIgc2Nyb2xsYmFyLWhpZGUgbGc6dy1bODUlXSBib3JkZXItZ3JheS0yMDAgIFwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC02ICc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQUZkWnVjcUl6YXNwUGhLc2otbEtJRi1LUHdJTnlwWjlFU3JQWTZfS3BvMUppQT1zOTYtY1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImgtMTQgdy0xNCByb3VuZGVkLWZ1bGwgcC1bMS41cHhdIGJvcmRlci1yZWQtNTAwIGJvcmRlci0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtIHctMTQgdHJ1bmNhdGUgdGV4dC1jZW50ZXJcIj5KdXN0QVVzZXJOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgey8qIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BRmRadWNvRnI1NThRZndNcDlESHBIdVFEdGNpZTFOMXhHTG1SVmxDLUF5cVFnPXM5Ni1jXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaC0xNCB3LTE0IHJvdW5kZWQtZnVsbCBwLVsxLjVweF0gYm9yZGVyLXJlZC01MDAgYm9yZGVyLTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB3LTE0IHRydW5jYXRlIHRleHQtY2VudGVyXCI+SnVzdEFVc2VyTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+PGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FGZFp1Y3AtRHB2UkZzT2hocmZOM0FHc3BNc0FGR1Z5UnhvQzRpMjQ3OHhiYlE9czk2LWNcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJoLTE0IHctMTQgcm91bmRlZC1mdWxsIHAtWzEuNXB4XSBib3JkZXItcmVkLTUwMCBib3JkZXItMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHctMTQgdHJ1bmNhdGUgdGV4dC1jZW50ZXJcIj5KdXN0QVVzZXJOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj48ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQUZkWnVjcUl6YXNwUGhLc2otbEtJRi1LUHdJTnlwWjlFU3JQWTZfS3BvMUppQT1zOTYtY1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImgtMTQgdy0xNCByb3VuZGVkLWZ1bGwgcC1bMS41cHhdIGJvcmRlci1yZWQtNTAwIGJvcmRlci0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdy0xNCB0cnVuY2F0ZSB0ZXh0LWNlbnRlclwiPkp1c3RBVXNlck5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PjxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BRmRadWNxSXphc3BQaEtzai1sS0lGLUtQd0lOeXBaOUVTclBZNl9LcG8xSmlBPXM5Ni1jXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaC0xNCB3LTE0IHJvdW5kZWQtZnVsbCBwLVsxLjVweF0gYm9yZGVyLXJlZC01MDAgYm9yZGVyLTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB3LTE0IHRydW5jYXRlIHRleHQtY2VudGVyXCI+SnVzdEFVc2VyTmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+PGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FGZFp1Y3FJemFzcFBoS3NqLWxLSUYtS1B3SU55cFo5RVNyUFk2X0twbzFKaUE9czk2LWNcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJoLTE0IHctMTQgcm91bmRlZC1mdWxsIHAtWzEuNXB4XSBib3JkZXItcmVkLTUwMCBib3JkZXItMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHctMTQgdHJ1bmNhdGUgdGV4dC1jZW50ZXJcIj5KdXN0QVVzZXJOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FGZFp1Y29GcjU1OFFmd01wOURIcEh1UUR0Y2llMU4xeEdMbVJWbEMtQXlxUWc9czk2LWNcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJoLTE0IHctMTQgcm91bmRlZC1mdWxsIHAtWzEuNXB4XSBib3JkZXItcmVkLTUwMCBib3JkZXItMlwiIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdy0xNCB0cnVuY2F0ZSB0ZXh0LWNlbnRlclwiPkp1c3RBVXNlck5hbWU8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BRmRadWNwLURwdlJGc09oaHJmTjNBR3NwTXNBRkdWeVJ4b0M0aTI0Nzh4YmJRPXM5Ni1jXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaC0xNCB3LTE0IHJvdW5kZWQtZnVsbCBwLVsxLjVweF0gYm9yZGVyLXJlZC01MDAgYm9yZGVyLTJcIiAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB3LTE0IHRydW5jYXRlIHRleHQtY2VudGVyXCI+SnVzdEFVc2VyTmFtZTwvcD5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgIFxyXG4gICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JpZXMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJvblNuYXBzaG90IiwicXVlcnkiLCJjb2xsZWN0aW9uIiwiZGIiLCJvcmRlckJ5Iiwic25hcHNob3QiLCJzZXRQb3N0cyIsImRvY3MiLCJTdG9yaWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Stories.tsx\n"));

/***/ })

});