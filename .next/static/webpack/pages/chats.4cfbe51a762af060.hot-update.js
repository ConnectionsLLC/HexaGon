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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/firestore */ \"./node_modules/firebase/compat/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_chatModalAtoms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../atoms/chatModalAtoms */ \"./atoms/chatModalAtoms.tsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ChatSidebar() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth), 1), user = ref[0];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilState)(_atoms_chatModalAtoms__WEBPACK_IMPORTED_MODULE_8__.chatModalState), 2), Open = ref1[0], setOpen = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newUsername = ref2[0], setNewUsername = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newEmail = ref3[0], setNewEmail = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newPhotoURL = ref4[0], setNewPhotoURL = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newID = ref5[0], setNewID = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), contacts = ref6[0], setContacts = ref6[1];\n    var newUser = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.query)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"chats\", user.uid, \"contacts\")), function(snapshot) {\n                            setContacts(snapshot.docs);\n                        }), [\n                            _firebase__WEBPACK_IMPORTED_MODULE_3__.db\n                        ];\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    });\n    // const newChat = async () => {\n    //     db.collection('chats').doc(user.uid).set({\n    //         email: user.email,\n    //         lastSeen: firebase.firestore.FieldValue.serverTimestamp(),\n    //         photoURL: user.photoURL,\n    //         username: user.displayName,\n    //         phone: user.phoneNumber,\n    //         uid: user.uid,\n    //         slug: user.displayName.replace(/\\s+/g, '').toLowerCase(),\n    //         lowerUsername: '@' + user.displayName.replace(/\\s+/g, '').toLowerCase()\n    //     },\n    //         { merge: true }); \n    //     const docRef = collection(db, \"users\");\n    //     const snapshots = query(docRef, where(\"lowerUsername\", \"==\", newUser.current.value));\n    //     const querySnapshot = await getDocs(snapshots);\n    //     querySnapshot.forEach((Newuser) => {\n    //         setNewID(Newuser.data().uid)\n    //         setNewUsername(Newuser.data().username)\n    //         setNewEmail(Newuser.data().email)\n    //         setNewPhotoURL(Newuser.data().photoURL)\n    //     })\n    //      setDoc(doc(db, \"chats\", user.uid, 'contacts', newUser.current.value, ), {\n    //         uid : newID,\n    //         addedFrom: newUser.current.value, \n    //         username: newUsername, \n    //         email: newEmail, \n    //         photoURL: newPhotoURL\n    //         // photoURL: newuserdata.photoURL,\n    //         // username: newuserdata.username,\n    //         // uid: newuserdata.uid,\n    //         // lowerUsername: newuserdata.lowerUsername\n    //     });\n    //             newUser = null\n    //  }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"mr-4 ml-4 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex mt-6 cursor-pointer bg-gray-100 p-1 rounded-full pl-2 pr-2 justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: \"bg-gray-100 outline-none\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__.PlusIcon, {\n                        onClick: function() {\n                            return setOpen(true);\n                        },\n                        className: \"w-4 ml-2 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                lineNumber: 82,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"mt-4 border border-gray-300 rounded-lg p-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: \"ml-3 font-bold mb-3\",\n                        children: \"Chats - \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-96 overflow-y-scroll scrollbar-hide\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex items-center space-x-1 rounded-lg cursor-pointer \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 23\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                lineNumber: 88,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n        lineNumber: 81,\n        columnNumber: 7\n    }, this);\n}\n_s(ChatSidebar, \"2zi9ojjFITA/QCp+383eq77RiiY=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState,\n        recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilState\n    ];\n});\n_c = ChatSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatSidebar);\nvar _c;\n$RefreshReg$(_c, \"ChatSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7bUNBQU1sQixPQUFPLENBQUMsSUFBSSxDQUFDO3lCQUFBO3dCQUFFZ0IsU0FBUyxFQUFDLFdBQVc7Ozs7OzRCQUFHOzs7Ozs7b0JBQzlEOzBCQUdOLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsNkNBQTZDOztrQ0FDeEQsOERBQUNDLElBQUU7d0JBQUNELFNBQVMsRUFBQyxxQkFBcUI7a0NBQUMsVUFBUTs7Ozs7NEJBQUs7a0NBQ2pELDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsdUNBQXVDO2tDQUNsRCw0RUFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHdEQUF5RDtzQ0FHcEUsNEVBQUNELEtBQUc7Ozs7b0NBRUU7Ozs7O2dDQUNKOzs7Ozs0QkFFSjs7Ozs7O29CQUNKOzs7Ozs7WUFLSixDQUNUO0NBQ0Y7R0EzRlFsQixXQUFXOztRQUNEUCxtRUFBWTtRQUNIQyxrREFBYzs7O0FBRmpDTSxLQUFBQSxXQUFXO0FBNkZwQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXRTaWRlYmFyLnRzeD9mMWQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsdXNJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdAZmlyZWJhc2UvYXBwLWNvbXBhdCc7XHJcbmltcG9ydCBcImZpcmViYXNlL2NvbXBhdC9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9maXJlYmFzZSdcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgZG9jLHNldERvYyB9IGZyb20gXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCJcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IHsgY2hhdE1vZGFsU3RhdGUgfSBmcm9tICcuLi9hdG9tcy9jaGF0TW9kYWxBdG9tcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGdldERvY3MsIG9uU25hcHNob3QsIHF1ZXJ5LCB3aGVyZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gQ2hhdFNpZGViYXIoKSB7XHJcbiAgICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XHJcbiAgICBjb25zdCBbT3Blbiwgc2V0T3Blbl0gPSB1c2VSZWNvaWxTdGF0ZShjaGF0TW9kYWxTdGF0ZSlcclxuICAgIGNvbnN0IFtuZXdVc2VybmFtZSwgc2V0TmV3VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtuZXdFbWFpbCwgc2V0TmV3RW1haWxdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtuZXdQaG90b1VSTCwgc2V0TmV3UGhvdG9VUkxdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtuZXdJRCwgc2V0TmV3SURdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtjb250YWN0cywgc2V0Q29udGFjdHNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBsZXQgbmV3VXNlciA9IHVzZVJlZihudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICA7IChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBvblNuYXBzaG90KHF1ZXJ5KGNvbGxlY3Rpb24oZGIsICdjaGF0cycsIHVzZXIudWlkLCAnY29udGFjdHMnKSksXHJcbiAgICAgICAgICAgICAgc25hcHNob3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRDb250YWN0cyhzbmFwc2hvdC5kb2NzKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgW2RiXVxyXG4gXHJcblxyXG4gICAgICB9KSgpXHJcbn0pICBcclxuICBcclxuICAgICAgICAvLyBjb25zdCBuZXdDaGF0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBkYi5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyh1c2VyLnVpZCkuc2V0KHtcclxuICAgICAgICAvLyAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIC8vICAgICAgICAgbGFzdFNlZW46IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgIC8vICAgICAgICAgcGhvdG9VUkw6IHVzZXIucGhvdG9VUkwsXHJcbiAgICAgICAgLy8gICAgICAgICB1c2VybmFtZTogdXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAvLyAgICAgICAgIHBob25lOiB1c2VyLnBob25lTnVtYmVyLFxyXG4gICAgICAgIC8vICAgICAgICAgdWlkOiB1c2VyLnVpZCxcclxuICAgICAgICAvLyAgICAgICAgIHNsdWc6IHVzZXIuZGlzcGxheU5hbWUucmVwbGFjZSgvXFxzKy9nLCAnJykudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAvLyAgICAgICAgIGxvd2VyVXNlcm5hbWU6ICdAJyArIHVzZXIuZGlzcGxheU5hbWUucmVwbGFjZSgvXFxzKy9nLCAnJykudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgeyBtZXJnZTogdHJ1ZSB9KTsgXHJcblxyXG5cclxuICAgICAgICAvLyAgICAgY29uc3QgZG9jUmVmID0gY29sbGVjdGlvbihkYiwgXCJ1c2Vyc1wiKTtcclxuICAgICAgICAvLyAgICAgY29uc3Qgc25hcHNob3RzID0gcXVlcnkoZG9jUmVmLCB3aGVyZShcImxvd2VyVXNlcm5hbWVcIiwgXCI9PVwiLCBuZXdVc2VyLmN1cnJlbnQudmFsdWUpKTtcclxuICAgICAgICAvLyAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3Moc25hcHNob3RzKTtcclxuICAgICAgICAvLyAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChOZXd1c2VyKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBzZXROZXdJRChOZXd1c2VyLmRhdGEoKS51aWQpXHJcbiAgICAgICAgLy8gICAgICAgICBzZXROZXdVc2VybmFtZShOZXd1c2VyLmRhdGEoKS51c2VybmFtZSlcclxuICAgICAgICAvLyAgICAgICAgIHNldE5ld0VtYWlsKE5ld3VzZXIuZGF0YSgpLmVtYWlsKVxyXG4gICAgICAgIC8vICAgICAgICAgc2V0TmV3UGhvdG9VUkwoTmV3dXNlci5kYXRhKCkucGhvdG9VUkwpXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICBcclxuICAgICAgICAvLyAgICAgIHNldERvYyhkb2MoZGIsIFwiY2hhdHNcIiwgdXNlci51aWQsICdjb250YWN0cycsIG5ld1VzZXIuY3VycmVudC52YWx1ZSwgKSwge1xyXG4gICAgICAgIC8vICAgICAgICAgdWlkIDogbmV3SUQsXHJcbiAgICAgICAgLy8gICAgICAgICBhZGRlZEZyb206IG5ld1VzZXIuY3VycmVudC52YWx1ZSwgXHJcbiAgICAgICAgLy8gICAgICAgICB1c2VybmFtZTogbmV3VXNlcm5hbWUsIFxyXG4gICAgICAgIC8vICAgICAgICAgZW1haWw6IG5ld0VtYWlsLCBcclxuICAgICAgICAvLyAgICAgICAgIHBob3RvVVJMOiBuZXdQaG90b1VSTFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gcGhvdG9VUkw6IG5ld3VzZXJkYXRhLnBob3RvVVJMLFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gdXNlcm5hbWU6IG5ld3VzZXJkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gdWlkOiBuZXd1c2VyZGF0YS51aWQsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBsb3dlclVzZXJuYW1lOiBuZXd1c2VyZGF0YS5sb3dlclVzZXJuYW1lXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbmV3VXNlciA9IG51bGxcclxuICAgICAgICAgICBcclxuICAgICAgICAvLyAgfVxyXG4gICAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci00IG1sLTQgJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG10LTYgY3Vyc29yLXBvaW50ZXIgIGJnLWdyYXktMTAwIHAtMSByb3VuZGVkLWZ1bGwgcGwtMiBwci0yIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgICAgICAgPGgxICAgY2xhc3NOYW1lPSdiZy1ncmF5LTEwMCBvdXRsaW5lLW5vbmUnIC8+XHJcbiAgICAgICAgICAgICAgPFBsdXNJY29uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9IGNsYXNzTmFtZT0ndy00IG1sLTIgJyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGgxIGNsYXNzTmFtZT0nbWwtMyBmb250LWJvbGQgbWItMyBtdC00Jz5DaGF0cyAtIDwvaDE+ICovfVxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBwLTIgJz5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdtbC0zIGZvbnQtYm9sZCBtYi0zJz5DaGF0cyAtIDwvaDE+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOTYgb3ZlcmZsb3cteS1zY3JvbGwgc2Nyb2xsYmFyLWhpZGUnPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xICByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyICcgPlxyXG5cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdFNpZGViYXIiXSwibmFtZXMiOlsiUGx1c0ljb24iLCJSZWFjdCIsInVzZUVmZmVjdCIsImF1dGgiLCJkYiIsImNvbGxlY3Rpb24iLCJ1c2VBdXRoU3RhdGUiLCJ1c2VSZWNvaWxTdGF0ZSIsImNoYXRNb2RhbFN0YXRlIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJvblNuYXBzaG90IiwicXVlcnkiLCJDaGF0U2lkZWJhciIsInVzZXIiLCJPcGVuIiwic2V0T3BlbiIsIm5ld1VzZXJuYW1lIiwic2V0TmV3VXNlcm5hbWUiLCJuZXdFbWFpbCIsInNldE5ld0VtYWlsIiwibmV3UGhvdG9VUkwiLCJzZXROZXdQaG90b1VSTCIsIm5ld0lEIiwic2V0TmV3SUQiLCJjb250YWN0cyIsInNldENvbnRhY3RzIiwibmV3VXNlciIsInVpZCIsInNuYXBzaG90IiwiZG9jcyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ChatSidebar.tsx\n"));

/***/ })

});