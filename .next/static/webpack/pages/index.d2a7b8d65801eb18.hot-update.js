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

/***/ "./components/Feed.tsx":
/*!*****************************!*\
  !*** ./components/Feed.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_ANIKET_Documents_websites_Twitter_2_0_twitter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ANIKET_Documents_websites_Twitter_2_0_twitter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ANIKET_Documents_websites_Twitter_2_0_twitter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TweetBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TweetBox */ \"./components/TweetBox.tsx\");\n/* harmony import */ var _components_Tweet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tweet */ \"./components/Tweet.tsx\");\n/* harmony import */ var _utils_fetchTweets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/fetchTweets */ \"./utils/fetchTweets.ts\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Feed(param) {\n    var tweetsProp = param.tweets;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(tweetsProp), tweets = ref[0], setTweets = ref[1];\n    // console.log(tweets)\n    var handleRefresh = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_ANIKET_Documents_websites_Twitter_2_0_twitter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var refreshToast, tweets;\n            return C_Users_ANIKET_Documents_websites_Twitter_2_0_twitter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        refreshToast = react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].loading(\"Refreshing...\");\n                        _ctx.next = 3;\n                        return (0,_utils_fetchTweets__WEBPACK_IMPORTED_MODULE_5__.fetchTweets)();\n                    case 3:\n                        tweets = _ctx.sent;\n                        setTweets(tweets);\n                        react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success();\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleRefresh() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \" scrollbar-hide flex-col col-span-8 lg:col-span-7 mt-10 lg:ml-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: \"p-5 pb-0 text-xl font-bold\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Documents\\\\websites\\\\Twitter 2.0\\\\twitter\\\\components\\\\Feed.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"svg\", {\n                        onClick: handleRefresh,\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"w-6 h-6 mt-4 mr-4 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125\",\n                        fill: \"none\",\n                        viewBox: \"0 0 24 24\",\n                        stroke: \"currentColor\",\n                        strokeWidth: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n                            strokeLinecap: \"round\",\n                            strokeLinejoin: \"round\",\n                            d: \"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ANIKET\\\\Documents\\\\websites\\\\Twitter 2.0\\\\twitter\\\\components\\\\Feed.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Documents\\\\websites\\\\Twitter 2.0\\\\twitter\\\\components\\\\Feed.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Documents\\\\websites\\\\Twitter 2.0\\\\twitter\\\\components\\\\Feed.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TweetBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setTweets: setTweets\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Documents\\\\websites\\\\Twitter 2.0\\\\twitter\\\\components\\\\Feed.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: tweets.map(function(tweet) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Tweet__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        tweet: tweet\n                    }, tweet._id, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Documents\\\\websites\\\\Twitter 2.0\\\\twitter\\\\components\\\\Feed.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Documents\\\\websites\\\\Twitter 2.0\\\\twitter\\\\components\\\\Feed.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Documents\\\\websites\\\\Twitter 2.0\\\\twitter\\\\components\\\\Feed.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Feed, \"VOCcO2jkfvXleGqQpy518MKRHv0=\");\n_c = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed);\nvar _c;\n$RefreshReg$(_c, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlZWQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBdUM7QUFFTjtBQUNlO0FBQ0U7QUFHZjs7QUFNbkMsU0FBU00sSUFBSSxDQUFDLEtBQTZCLEVBQUU7UUFBN0JDLFVBQWtCLEdBQXBCLEtBQTZCLENBQTNCQSxNQUFNOzs7SUFFcEIsSUFBNEJOLEdBQTZCLEdBQTdCQSwrQ0FBUSxDQUFVTyxVQUFVLENBQUMsRUFBbERELE1BQU0sR0FBZU4sR0FBNkIsR0FBNUMsRUFBRVEsU0FBUyxHQUFJUixHQUE2QixHQUFqQztJQUN4QixzQkFBc0I7SUFFdEIsSUFBTVMsYUFBYTttQkFBRyx3UUFBWTtnQkFDMUJDLFlBQVksRUFDWkosTUFBTTs7Ozt3QkFETkksWUFBWSxHQUFHTiwrREFBYSxDQUFDLGVBQWUsQ0FBQzs7K0JBQzlCRCwrREFBVyxFQUFFOzt3QkFBNUJHLE1BQU0sWUFBc0I7d0JBQ2xDRSxTQUFTLENBQUNGLE1BQU0sQ0FBQzt3QkFDakJGLCtEQUFhLEVBQUU7Ozs7OztTQUVoQjt3QkFOS0ssYUFBYTs7O09BTWxCO0lBRUQscUJBQ0UsOERBQUNJLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGtFQUFrRTs7MEJBRy9FLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsb0NBQW9DOztrQ0FDakQsOERBQUNDLElBQUU7d0JBQUNELFNBQVMsRUFBQyw0QkFBNEI7a0NBQUMsTUFBSTs7Ozs7NEJBQUs7a0NBQ3BELDhEQUFDRSxLQUFHO3dCQUFDQyxPQUFPLEVBQUVSLGFBQWE7d0JBQUVTLEtBQUssRUFBQyw0QkFBNEI7d0JBQUNKLFNBQVMsRUFBQyxzSEFBdUg7d0JBQUNLLElBQUksRUFBQyxNQUFNO3dCQUFDQyxPQUFPLEVBQUMsV0FBVzt3QkFBQ0MsTUFBTSxFQUFDLGNBQWM7d0JBQUNDLFdBQVcsRUFBRSxDQUFDO2tDQUNwUSw0RUFBQ0MsTUFBSTs0QkFBQ0MsYUFBYSxFQUFDLE9BQU87NEJBQUNDLGNBQWMsRUFBQyxPQUFPOzRCQUFDQyxDQUFDLEVBQUMsNkdBQTZHOzs7OztnQ0FBRzs7Ozs7NEJBQ2pLOzs7Ozs7b0JBRUY7MEJBQ04sOERBQUN6QixpREFBUTtnQkFBQ08sU0FBUyxFQUFFQSxTQUFTOzs7OztvQkFBSTswQkFFbEMsOERBQUNLLEtBQUc7MEJBQ0RQLE1BQU0sQ0FBQ3FCLEdBQUcsQ0FBQ0MsU0FBQUEsS0FBSzt5Q0FDZiw4REFBQzFCLHlEQUFjO3dCQUFpQjBCLEtBQUssRUFBRUEsS0FBSzt1QkFBdkJBLEtBQUssQ0FBQ0MsR0FBRzs7Ozs2QkFBa0I7aUJBQ2pELENBQUM7Ozs7O29CQUNFOzs7Ozs7WUFDRixDQUVQO0NBQ0Y7R0FsQ1F4QixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFvQ2IsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWVkLnRzeD9kYzFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUd2VldCB9IGZyb20gJy4uL3R5cGluZ3MnXHJcbmltcG9ydCBUd2VldEJveCBmcm9tICcuL1R3ZWV0Qm94J1xyXG5pbXBvcnQgVHdlZXRDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Ud2VldCdcclxuaW1wb3J0IHsgZmV0Y2hUd2VldHMgfSBmcm9tICcuLi91dGlscy9mZXRjaFR3ZWV0cydcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xyXG5pbXBvcnQgdG9hc3QgZnJvbSAncmVhY3QtaG90LXRvYXN0J1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0d2VldHM6IFR3ZWV0W11cclxufVxyXG5cclxuZnVuY3Rpb24gRmVlZCh7IHR3ZWV0czogdHdlZXRzUHJvcCB9OiBQcm9wcykge1xyXG5cclxuICBjb25zdCBbdHdlZXRzLCBzZXRUd2VldHNdID0gdXNlU3RhdGU8VHdlZXRbXT4odHdlZXRzUHJvcClcclxuICAvLyBjb25zb2xlLmxvZyh0d2VldHMpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlZnJlc2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZWZyZXNoVG9hc3QgPSB0b2FzdC5sb2FkaW5nKFwiUmVmcmVzaGluZy4uLlwiKVxyXG4gICAgY29uc3QgdHdlZXRzID0gYXdhaXQgZmV0Y2hUd2VldHMoKTtcclxuICAgIHNldFR3ZWV0cyh0d2VldHMpXHJcbiAgICB0b2FzdC5zdWNjZXNzKClcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyBzY3JvbGxiYXItaGlkZSBmbGV4LWNvbCBjb2wtc3Bhbi04IGxnOmNvbC1zcGFuLTcgbXQtMTAgbGc6bWwtMjQnPlxyXG5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdwLTUgcGItMCB0ZXh0LXhsIGZvbnQtYm9sZCc+SG9tZTwvaDE+XHJcbiAgICAgICAgPHN2ZyBvbkNsaWNrPXtoYW5kbGVSZWZyZXNofSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwidy02ICBoLTYgbXQtNCBtci00IGN1cnNvci1wb2ludGVyIHRleHQtdHdpdHRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1vdXQgaG92ZXI6cm90YXRlLTE4MCBhY3RpdmU6c2NhbGUtMTI1XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PlxyXG4gICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNCA0djVoLjU4Mm0xNS4zNTYgMkE4LjAwMSA4LjAwMSAwIDAwNC41ODIgOW0wIDBIOW0xMSAxMXYtNWgtLjU4MW0wIDBhOC4wMDMgOC4wMDMgMCAwMS0xNS4zNTctMm0xNS4zNTcgMkgxNVwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFR3ZWV0Qm94IHNldFR3ZWV0cz17c2V0VHdlZXRzfSAvPlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dHdlZXRzLm1hcCh0d2VldCA9PiAoXHJcbiAgICAgICAgICA8VHdlZXRDb21wb25lbnQga2V5PXt0d2VldC5faWR9IHR3ZWV0PXt0d2VldH0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUd2VldEJveCIsIlR3ZWV0Q29tcG9uZW50IiwiZmV0Y2hUd2VldHMiLCJ0b2FzdCIsIkZlZWQiLCJ0d2VldHMiLCJ0d2VldHNQcm9wIiwic2V0VHdlZXRzIiwiaGFuZGxlUmVmcmVzaCIsInJlZnJlc2hUb2FzdCIsImxvYWRpbmciLCJzdWNjZXNzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzdmciLCJvbkNsaWNrIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImQiLCJtYXAiLCJ0d2VldCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Feed.tsx\n"));

/***/ })

});