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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post */ \"./components/Post.tsx\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Posts() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), posts = ref[0], setPosts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"posts\"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"timestamp\", \"desc\")), function(snapshot) {\n            setPosts(snapshot.docs);\n        });\n    }, [\n        _firebase__WEBPACK_IMPORTED_MODULE_4__.db\n    ]);\n    console.log(posts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: posts.map(function(post) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: pos.id,\n                username: post.data().username,\n                userimg: post.data().profileImg,\n                img: post.data().image,\n                posttext: post.data().posttext\n            }, post.id, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Twitter\\\\components\\\\Posts.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Twitter\\\\components\\\\Posts.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Posts, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQWtEO0FBQ3pCO0FBQ2lEO0FBQ3pDOztBQUlqQyxTQUFTUyxLQUFLLEdBQUc7OztJQUNmLElBQTJCUCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQWhDUSxLQUFLLEdBQWVSLEdBQVksR0FBM0IsRUFBR1MsUUFBUSxHQUFJVCxHQUFZLEdBQWhCO0lBRXZCRCxnREFBUyxDQUNQO2VBQ0hHLCtEQUFVLENBQUNFLDBEQUFLLENBQUNELCtEQUFVLENBQUNHLHlDQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUVELDREQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQ3RFSyxTQUFBQSxRQUFRLEVBQUk7WUFDUkQsUUFBUSxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQztTQUN4QixDQUNBO0tBQUEsRUFDRDtRQUFDTCx5Q0FBRTtLQUFDLENBQ0wsQ0FBQztJQUVGTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsS0FBSyxDQUFDO0lBT2xCLHFCQUNFLDhEQUFDTSxLQUFHO2tCQUNETixLQUFLLENBQUNPLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO2lDQUNkLDhEQUFDZiw2Q0FBSTtnQkFFTGdCLEVBQUUsRUFBRUMsR0FBRyxDQUFDRCxFQUFFO2dCQUNWRSxRQUFRLEVBQUVILElBQUksQ0FBQ0ksSUFBSSxFQUFFLENBQUNELFFBQVE7Z0JBQzlCRSxPQUFPLEVBQUVMLElBQUksQ0FBQ0ksSUFBSSxFQUFFLENBQUNFLFVBQVU7Z0JBQy9CQyxHQUFHLEVBQUVQLElBQUksQ0FBQ0ksSUFBSSxFQUFFLENBQUNJLEtBQUs7Z0JBQ3RCQyxRQUFRLEVBQUVULElBQUksQ0FBQ0ksSUFBSSxFQUFFLENBQUNLLFFBQVE7ZUFMekJULElBQUksQ0FBQ0MsRUFBRTs7OztxQkFNVjtTQUNILENBQUM7Ozs7O1lBQ0UsQ0FDSjtDQUVMO0dBbkNRVixLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUFxQ2QsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0cy50c3g/ZWZjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuL1Bvc3QnXHJcbmltcG9ydCB7b25TbmFwc2hvdCwgY29sbGVjdGlvbiwgcXVlcnksIG9yZGVyQnl9IGZyb20gJ0BmaXJlYmFzZS9maXJlc3RvcmUnXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvY29tcGF0JztcclxuXHJcblxyXG5mdW5jdGlvbiBQb3N0cygpIHtcclxuICBjb25zdCBbcG9zdHMgLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdChcclxuICAgICgpID0+IFxyXG4gb25TbmFwc2hvdChxdWVyeShjb2xsZWN0aW9uKGRiLCAncG9zdHMnKSwgb3JkZXJCeSgndGltZXN0YW1wJywgJ2Rlc2MnKSksXHJcbiAgc25hcHNob3QgPT4ge1xyXG4gICAgICBzZXRQb3N0cyhzbmFwc2hvdC5kb2NzKVxyXG4gICAgfVxyXG4gICAgKSxcclxuICAgIFtkYl1cclxuICApO1xyXG5cclxuICBjb25zb2xlLmxvZyhwb3N0cylcclxuXHJcbiAgICBcclxuICAgIFxyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICA8UG9zdCBcclxuICAgICAgICBrZXk9e3Bvc3QuaWR9XHJcbiAgICAgICAgaWQ9e3Bvcy5pZH1cclxuICAgICAgICB1c2VybmFtZT17cG9zdC5kYXRhKCkudXNlcm5hbWV9XHJcbiAgICAgICAgdXNlcmltZz17cG9zdC5kYXRhKCkucHJvZmlsZUltZ31cclxuICAgICAgICBpbWc9e3Bvc3QuZGF0YSgpLmltYWdlfVxyXG4gICAgICAgIHBvc3R0ZXh0PXtwb3N0LmRhdGEoKS5wb3N0dGV4dH1cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHNcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBvc3QiLCJvblNuYXBzaG90IiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwib3JkZXJCeSIsImRiIiwiUG9zdHMiLCJwb3N0cyIsInNldFBvc3RzIiwic25hcHNob3QiLCJkb2NzIiwiY29uc29sZSIsImxvZyIsImRpdiIsIm1hcCIsInBvc3QiLCJpZCIsInBvcyIsInVzZXJuYW1lIiwiZGF0YSIsInVzZXJpbWciLCJwcm9maWxlSW1nIiwiaW1nIiwiaW1hZ2UiLCJwb3N0dGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Posts.tsx\n"));

/***/ })

});