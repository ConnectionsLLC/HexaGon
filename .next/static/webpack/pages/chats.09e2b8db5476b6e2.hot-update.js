"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chats",{

/***/ "./components/ChatSidebar.tsx":
/*!************************************!*\
  !*** ./components/ChatSidebar.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/firestore */ \"./node_modules/firebase/compat/firestore/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_chatModalAtoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../atoms/chatModalAtoms */ \"./atoms/chatModalAtoms.tsx\");\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ChatSidebar() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_2__.auth), 1), user = ref[0];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_atoms_chatModalAtoms__WEBPACK_IMPORTED_MODULE_6__.chatModalState), 2), Open = ref1[0], setOpen = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), newUsername = ref2[0], setNewUsername = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), newEmail = ref3[0], setNewEmail = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), newPhotoURL = ref4[0], setNewPhotoURL = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), newID = ref5[0], setNewID = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), users = ref6[0], setUsers = ref6[1];\n    var newUser = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // const newChat = async () => {\n    //     db.collection('chats').doc(user.uid).set({\n    //         email: user.email,\n    //         lastSeen: firebase.firestore.FieldValue.serverTimestamp(),\n    //         photoURL: user.photoURL,\n    //         username: user.displayName,\n    //         phone: user.phoneNumber,\n    //         uid: user.uid,\n    //         slug: user.displayName.replace(/\\s+/g, '').toLowerCase(),\n    //         lowerUsername: '@' + user.displayName.replace(/\\s+/g, '').toLowerCase()\n    //     },\n    //         { merge: true }); \n    //      setDoc(doc(db, \"chats\", user.uid, 'contacts', newUser.current.value, ), {\n    //         uid : newID,\n    //         addedFrom: newUser.current.value, \n    //         username: newUsername, \n    //         email: newEmail, \n    //         photoURL: newPhotoURL\n    //         // photoURL: newuserdata.photoURL,\n    //         // username: newuserdata.username,\n    //         // uid: newuserdata.uid,\n    //         // lowerUsername: newuserdata.lowerUsername\n    //     });\n    //             newUser = null\n    //  }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mr-4 ml-4 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-6 cursor-pointer bg-gray-100 p-1 rounded-full pl-2 pr-2 justify-center\",\n                onClick: function() {\n                    return setOpen(true);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"bg-gray-100 outline-none\",\n                        children: \"Start a new chat..\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__.PlusIcon, {\n                        className: \"w-4 ml-2 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                lineNumber: 62,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 border border-gray-300 rounded-lg p-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"ml-3 font-bold mb-3\",\n                        children: \"Chats - \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-96 overflow-y-scroll scrollbar-hide\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center space-x-1 rounded-lg cursor-pointer \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 23\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                lineNumber: 68,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n        lineNumber: 61,\n        columnNumber: 7\n    }, this);\n}\n_s(ChatSidebar, \"AGpEM61zExUlekNvChFyr4+6rX0=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState,\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState\n    ];\n});\n_c = ChatSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatSidebar);\nvar _c;\n$RefreshReg$(_c, \"ChatSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUFGakNJLEtBQUFBLFdBQVc7QUF5RXBCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdFNpZGViYXIudHN4P2YxZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGx1c0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ0BmaXJlYmFzZS9hcHAtY29tcGF0JztcclxuaW1wb3J0IFwiZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJ1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBkb2Msc2V0RG9jIH0gZnJvbSBcIkBmaXJlYmFzZS9maXJlc3RvcmVcIlxyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgeyBjaGF0TW9kYWxTdGF0ZSB9IGZyb20gJy4uL2F0b21zL2NoYXRNb2RhbEF0b21zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZ2V0RG9jcywgb25TbmFwc2hvdCwgcXVlcnksIHdoZXJlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuXHJcblxyXG5mdW5jdGlvbiBDaGF0U2lkZWJhcigpIHtcclxuICAgIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcclxuICAgIGNvbnN0IFtPcGVuLCBzZXRPcGVuXSA9IHVzZVJlY29pbFN0YXRlKGNoYXRNb2RhbFN0YXRlKVxyXG4gICAgY29uc3QgW25ld1VzZXJuYW1lLCBzZXROZXdVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW25ld0VtYWlsLCBzZXROZXdFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW25ld1Bob3RvVVJMLCBzZXROZXdQaG90b1VSTF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW25ld0lELCBzZXROZXdJRF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGxldCBuZXdVc2VyID0gdXNlUmVmKG51bGwpXHJcblxyXG5cclxuICBcclxuICAgICAgICAvLyBjb25zdCBuZXdDaGF0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBkYi5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh1c2VyLnVpZCkuc2V0KHtcclxuICAgICAgICAvLyAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIC8vICAgICAgICAgbGFzdFNlZW46IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgIC8vICAgICAgICAgcGhvdG9VUkw6IHVzZXIucGhvdG9VUkwsXHJcbiAgICAgICAgLy8gICAgICAgICB1c2VybmFtZTogdXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAvLyAgICAgICAgIHBob25lOiB1c2VyLnBob25lTnVtYmVyLFxyXG4gICAgICAgIC8vICAgICAgICAgdWlkOiB1c2VyLnVpZCxcclxuICAgICAgICAvLyAgICAgICAgIHNsdWc6IHVzZXIuZGlzcGxheU5hbWUucmVwbGFjZSgvXFxzKy9nLCAnJykudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAvLyAgICAgICAgIGxvd2VyVXNlcm5hbWU6ICdAJyArIHVzZXIuZGlzcGxheU5hbWUucmVwbGFjZSgvXFxzKy9nLCAnJykudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgeyBtZXJnZTogdHJ1ZSB9KTsgXHJcblxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgc2V0RG9jKGRvYyhkYiwgXCJjaGF0c1wiLCB1c2VyLnVpZCwgJ2NvbnRhY3RzJywgbmV3VXNlci5jdXJyZW50LnZhbHVlLCApLCB7XHJcbiAgICAgICAgLy8gICAgICAgICB1aWQgOiBuZXdJRCxcclxuICAgICAgICAvLyAgICAgICAgIGFkZGVkRnJvbTogbmV3VXNlci5jdXJyZW50LnZhbHVlLCBcclxuICAgICAgICAvLyAgICAgICAgIHVzZXJuYW1lOiBuZXdVc2VybmFtZSwgXHJcbiAgICAgICAgLy8gICAgICAgICBlbWFpbDogbmV3RW1haWwsIFxyXG4gICAgICAgIC8vICAgICAgICAgcGhvdG9VUkw6IG5ld1Bob3RvVVJMXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBwaG90b1VSTDogbmV3dXNlcmRhdGEucGhvdG9VUkwsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyB1c2VybmFtZTogbmV3dXNlcmRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyB1aWQ6IG5ld3VzZXJkYXRhLnVpZCxcclxuICAgICAgICAvLyAgICAgICAgIC8vIGxvd2VyVXNlcm5hbWU6IG5ld3VzZXJkYXRhLmxvd2VyVXNlcm5hbWVcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICAgICAgICBuZXdVc2VyID0gbnVsbFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIC8vICB9XHJcbiAgICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21yLTQgbWwtNCAnID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG10LTYgY3Vyc29yLXBvaW50ZXIgIGJnLWdyYXktMTAwIHAtMSByb3VuZGVkLWZ1bGwgcGwtMiBwci0yIGp1c3RpZnktY2VudGVyJyBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfSA+XHJcbiAgICAgICAgICAgICAgPGgxICBjbGFzc05hbWU9J2JnLWdyYXktMTAwIG91dGxpbmUtbm9uZScgPlN0YXJ0IGEgbmV3IGNoYXQuLjwvaDE+XHJcbiAgICAgICAgICAgICAgPFBsdXNJY29uICBjbGFzc05hbWU9J3ctNCBtbC0yICcgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxoMSBjbGFzc05hbWU9J21sLTMgZm9udC1ib2xkIG1iLTMgbXQtNCc+Q2hhdHMgLSA8L2gxPiAqL31cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgcC0yICc+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nbWwtMyBmb250LWJvbGQgbWItMyc+Q2hhdHMgLSA8L2gxPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTk2IG92ZXJmbG93LXktc2Nyb2xsIHNjcm9sbGJhci1oaWRlJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMSAgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciAnID5cclxuXHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRTaWRlYmFyIl0sIm5hbWVzIjpbIlBsdXNJY29uIiwiUmVhY3QiLCJhdXRoIiwidXNlQXV0aFN0YXRlIiwidXNlUmVjb2lsU3RhdGUiLCJjaGF0TW9kYWxTdGF0ZSIsInVzZVN0YXRlIiwidXNlUmVmIiwiQ2hhdFNpZGViYXIiLCJ1c2VyIiwiT3BlbiIsInNldE9wZW4iLCJuZXdVc2VybmFtZSIsInNldE5ld1VzZXJuYW1lIiwibmV3RW1haWwiLCJzZXROZXdFbWFpbCIsIm5ld1Bob3RvVVJMIiwic2V0TmV3UGhvdG9VUkwiLCJuZXdJRCIsInNldE5ld0lEIiwidXNlcnMiLCJzZXRVc2VycyIsIm5ld1VzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ChatSidebar.tsx\n"));

/***/ })

});