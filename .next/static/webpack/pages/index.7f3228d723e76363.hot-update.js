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

/***/ "./components/Posts.tsx":
/*!******************************!*\
  !*** ./components/Posts.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post */ \"./components/Post.tsx\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Posts() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), posts = ref[0], setPosts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var unsubscribe = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"posts\"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"timestamp\", \"desc\")), function(snapshot) {\n            setPosts(snapshot.docs);\n        });\n        return unsubscribe;\n    }, [\n        _firebase__WEBPACK_IMPORTED_MODULE_4__.db\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Twitter\\\\components\\\\Posts.tsx\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Twitter\\\\components\\\\Posts.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Posts, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQWtEO0FBQ3pCO0FBQ2lEO0FBQ3pDOztBQUlqQyxTQUFTUyxLQUFLLEdBQUc7O0lBQ2YsSUFBMkJQLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBaENRLEtBQUssR0FBZVIsR0FBWSxHQUEzQixFQUFHUyxRQUFRLEdBQUlULEdBQVksR0FBaEI7SUFFdkJELGdEQUFTLENBQUMsV0FBTTtRQUVmLElBQU1XLFdBQVcsR0FBSVIsK0RBQVUsQ0FBQ0UsMERBQUssQ0FBQ0QsK0RBQVUsQ0FBQ0cseUNBQUUsRUFBRSxPQUFPLENBQUMsRUFBRUQsNERBQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRU0sU0FBQUEsUUFBUSxFQUFJO1lBQ3ZHRixRQUFRLENBQUNFLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDO1NBQ3hCLENBQUM7UUFFRixPQUFPRixXQUFXLENBQUM7S0FHcEIsRUFBRTtRQUFDSix5Q0FBRTtLQUFDLENBQUM7SUFFUixxQkFDRSw4REFBQ08sS0FBRztRQUFDQyxTQUFTLEVBQUMsT0FBTztrQkFDbEIsNEVBQUNiLDZDQUFJOzs7O2dCQUFFOzs7OztZQUNMLENBQ1A7Q0FDRjtHQW5CUU0sS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBcUJkLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdHMudHN4P2VmY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFBvc3QgZnJvbSAnLi9Qb3N0J1xyXG5pbXBvcnQge29uU25hcHNob3QsIGNvbGxlY3Rpb24sIHF1ZXJ5LCBvcmRlckJ5fSBmcm9tICdAZmlyZWJhc2UvZmlyZXN0b3JlJ1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2NvbXBhdCc7XHJcblxyXG5cclxuZnVuY3Rpb24gUG9zdHMoKSB7XHJcbiAgY29uc3QgW3Bvc3RzICwgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgY29uc3QgdW5zdWJzY3JpYmUgPSAgb25TbmFwc2hvdChxdWVyeShjb2xsZWN0aW9uKGRiLCAncG9zdHMnKSwgb3JkZXJCeSgndGltZXN0YW1wJywgJ2Rlc2MnKSksIHNuYXBzaG90ID0+IHtcclxuICAgICAgc2V0UG9zdHMoc25hcHNob3QuZG9jcylcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlO1xyXG4gICAgXHJcblxyXG4gIH0sIFtkYl0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyXCI+XHJcbiAgICAgICAgPFBvc3QvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0c1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUG9zdCIsIm9uU25hcHNob3QiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJvcmRlckJ5IiwiZGIiLCJQb3N0cyIsInBvc3RzIiwic2V0UG9zdHMiLCJ1bnN1YnNjcmliZSIsInNuYXBzaG90IiwiZG9jcyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Posts.tsx\n"));

/***/ })

});