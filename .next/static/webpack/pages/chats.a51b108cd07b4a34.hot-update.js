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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/firestore */ \"./node_modules/firebase/compat/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_chatModalAtoms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../atoms/chatModalAtoms */ \"./atoms/chatModalAtoms.tsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ChatSidebar() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth), 1), user = ref[0];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilState)(_atoms_chatModalAtoms__WEBPACK_IMPORTED_MODULE_8__.chatModalState), 2), Open = ref1[0], setOpen = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newUsername = ref2[0], setNewUsername = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newEmail = ref3[0], setNewEmail = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newPhotoURL = ref4[0], setNewPhotoURL = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newID = ref5[0], setNewID = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), contacts = ref6[0], setContacts = ref6[1];\n    var newUser = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.query)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"chats\", user.uid, \"contacts\")), function(snapshot) {\n                            setContacts(snapshot.docs);\n                        }), [\n                            _firebase__WEBPACK_IMPORTED_MODULE_3__.db\n                        ];\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    });\n    // const newChat = async () => {\n    //     db.collection('chats').doc(user.uid).set({\n    //         email: user.email,\n    //         lastSeen: firebase.firestore.FieldValue.serverTimestamp(),\n    //         photoURL: user.photoURL,\n    //         username: user.displayName,\n    //         phone: user.phoneNumber,\n    //         uid: user.uid,\n    //         slug: user.displayName.replace(/\\s+/g, '').toLowerCase(),\n    //         lowerUsername: '@' + user.displayName.replace(/\\s+/g, '').toLowerCase()\n    //     },\n    //         { merge: true }); \n    //     const docRef = collection(db, \"users\");\n    //     const snapshots = query(docRef, where(\"lowerUsername\", \"==\", newUser.current.value));\n    //     const querySnapshot = await getDocs(snapshots);\n    //     querySnapshot.forEach((Newuser) => {\n    //         setNewID(Newuser.data().uid)\n    //         setNewUsername(Newuser.data().username)\n    //         setNewEmail(Newuser.data().email)\n    //         setNewPhotoURL(Newuser.data().photoURL)\n    //     })\n    //      setDoc(doc(db, \"chats\", user.uid, 'contacts', newUser.current.value, ), {\n    //         uid : newID,\n    //         addedFrom: newUser.current.value, \n    //         username: newUsername, \n    //         email: newEmail, \n    //         photoURL: newPhotoURL\n    //         // photoURL: newuserdata.photoURL,\n    //         // username: newuserdata.username,\n    //         // uid: newuserdata.uid,\n    //         // lowerUsername: newuserdata.lowerUsername\n    //     });\n    //             newUser = null\n    //  }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"mr-4 ml-4 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex mt-6 cursor-pointer bg-gray-100 p-1 rounded-full pl-2 pr-2 justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: \"bg-gray-100 outline-none\",\n                        children: \"Start a new chat..\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__.PlusIcon, {\n                        onClick: function() {\n                            return setOpen(true);\n                        },\n                        className: \"w- ml-2 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                lineNumber: 82,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"mt-4 border border-gray-300 rounded-lg p-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: \"ml-3 font-bold mb-3\",\n                        children: \"Chats - \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-96 overflow-y-scroll scrollbar-hide\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex items-center space-x-1 rounded-lg cursor-pointer \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 23\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                lineNumber: 88,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n        lineNumber: 81,\n        columnNumber: 7\n    }, this);\n}\n_s(ChatSidebar, \"2zi9ojjFITA/QCp+383eq77RiiY=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState,\n        recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilState\n    ];\n});\n_c = ChatSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatSidebar);\nvar _c;\n$RefreshReg$(_c, \"ChatSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dCQUFDa0MsT0FBTyxFQUFFO21DQUFNbEIsT0FBTyxDQUFDLElBQUksQ0FBQzt5QkFBQTt3QkFBRWdCLFNBQVMsRUFBQyxVQUFVOzs7Ozs0QkFBRzs7Ozs7O29CQUM3RDswQkFHTiw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDZDQUE2Qzs7a0NBQ3hELDhEQUFDQyxJQUFFO3dCQUFDRCxTQUFTLEVBQUMscUJBQXFCO2tDQUFDLFVBQVE7Ozs7OzRCQUFLO2tDQUNqRCw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLHVDQUF1QztrQ0FDbEQsNEVBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyx3REFBeUQ7c0NBR3BFLDRFQUFDRCxLQUFHOzs7O29DQUVFOzs7OztnQ0FDSjs7Ozs7NEJBRUo7Ozs7OztvQkFDSjs7Ozs7O1lBS0osQ0FDVDtDQUNGO0dBM0ZRbEIsV0FBVzs7UUFDRFAsbUVBQVk7UUFDSEMsa0RBQWM7OztBQUZqQ00sS0FBQUEsV0FBVztBQTZGcEIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0U2lkZWJhci50c3g/ZjFkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbHVzSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnQGZpcmViYXNlL2FwcC1jb21wYXQnO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9jb21wYXQvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGRvYyxzZXREb2MgfSBmcm9tIFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiXHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7IGNoYXRNb2RhbFN0YXRlIH0gZnJvbSAnLi4vYXRvbXMvY2hhdE1vZGFsQXRvbXMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBnZXREb2NzLCBvblNuYXBzaG90LCBxdWVyeSwgd2hlcmUgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENoYXRTaWRlYmFyKCkge1xyXG4gICAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xyXG4gICAgY29uc3QgW09wZW4sIHNldE9wZW5dID0gdXNlUmVjb2lsU3RhdGUoY2hhdE1vZGFsU3RhdGUpXHJcbiAgICBjb25zdCBbbmV3VXNlcm5hbWUsIHNldE5ld1VzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbbmV3RW1haWwsIHNldE5ld0VtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbbmV3UGhvdG9VUkwsIHNldE5ld1Bob3RvVVJMXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbbmV3SUQsIHNldE5ld0lEXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbY29udGFjdHMsIHNldENvbnRhY3RzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgbGV0IG5ld1VzZXIgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgOyAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgb25TbmFwc2hvdChxdWVyeShjb2xsZWN0aW9uKGRiLCAnY2hhdHMnLCB1c2VyLnVpZCwgJ2NvbnRhY3RzJykpLFxyXG4gICAgICAgICAgICAgIHNuYXBzaG90ID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0Q29udGFjdHMoc25hcHNob3QuZG9jcylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIFtkYl1cclxuIFxyXG5cclxuICAgICAgfSkoKVxyXG59KSAgXHJcbiAgXHJcbiAgICAgICAgLy8gY29uc3QgbmV3Q2hhdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyAgICAgZGIuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModXNlci51aWQpLnNldCh7XHJcbiAgICAgICAgLy8gICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAvLyAgICAgICAgIGxhc3RTZWVuOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAvLyAgICAgICAgIHBob3RvVVJMOiB1c2VyLnBob3RvVVJMLFxyXG4gICAgICAgIC8vICAgICAgICAgdXNlcm5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgLy8gICAgICAgICBwaG9uZTogdXNlci5waG9uZU51bWJlcixcclxuICAgICAgICAvLyAgICAgICAgIHVpZDogdXNlci51aWQsXHJcbiAgICAgICAgLy8gICAgICAgICBzbHVnOiB1c2VyLmRpc3BsYXlOYW1lLnJlcGxhY2UoL1xccysvZywgJycpLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgLy8gICAgICAgICBsb3dlclVzZXJuYW1lOiAnQCcgKyB1c2VyLmRpc3BsYXlOYW1lLnJlcGxhY2UoL1xccysvZywgJycpLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHsgbWVyZ2U6IHRydWUgfSk7IFxyXG5cclxuXHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGRvY1JlZiA9IGNvbGxlY3Rpb24oZGIsIFwidXNlcnNcIik7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHNuYXBzaG90cyA9IHF1ZXJ5KGRvY1JlZiwgd2hlcmUoXCJsb3dlclVzZXJuYW1lXCIsIFwiPT1cIiwgbmV3VXNlci5jdXJyZW50LnZhbHVlKSk7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHNuYXBzaG90cyk7XHJcbiAgICAgICAgLy8gICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoTmV3dXNlcikgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgc2V0TmV3SUQoTmV3dXNlci5kYXRhKCkudWlkKVxyXG4gICAgICAgIC8vICAgICAgICAgc2V0TmV3VXNlcm5hbWUoTmV3dXNlci5kYXRhKCkudXNlcm5hbWUpXHJcbiAgICAgICAgLy8gICAgICAgICBzZXROZXdFbWFpbChOZXd1c2VyLmRhdGEoKS5lbWFpbClcclxuICAgICAgICAvLyAgICAgICAgIHNldE5ld1Bob3RvVVJMKE5ld3VzZXIuZGF0YSgpLnBob3RvVVJMKVxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgXHJcbiAgICAgICAgLy8gICAgICBzZXREb2MoZG9jKGRiLCBcImNoYXRzXCIsIHVzZXIudWlkLCAnY29udGFjdHMnLCBuZXdVc2VyLmN1cnJlbnQudmFsdWUsICksIHtcclxuICAgICAgICAvLyAgICAgICAgIHVpZCA6IG5ld0lELFxyXG4gICAgICAgIC8vICAgICAgICAgYWRkZWRGcm9tOiBuZXdVc2VyLmN1cnJlbnQudmFsdWUsIFxyXG4gICAgICAgIC8vICAgICAgICAgdXNlcm5hbWU6IG5ld1VzZXJuYW1lLCBcclxuICAgICAgICAvLyAgICAgICAgIGVtYWlsOiBuZXdFbWFpbCwgXHJcbiAgICAgICAgLy8gICAgICAgICBwaG90b1VSTDogbmV3UGhvdG9VUkxcclxuICAgICAgICAvLyAgICAgICAgIC8vIHBob3RvVVJMOiBuZXd1c2VyZGF0YS5waG90b1VSTCxcclxuICAgICAgICAvLyAgICAgICAgIC8vIHVzZXJuYW1lOiBuZXd1c2VyZGF0YS51c2VybmFtZSxcclxuICAgICAgICAvLyAgICAgICAgIC8vIHVpZDogbmV3dXNlcmRhdGEudWlkLFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gbG93ZXJVc2VybmFtZTogbmV3dXNlcmRhdGEubG93ZXJVc2VybmFtZVxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIG5ld1VzZXIgPSBudWxsXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgLy8gIH1cclxuICAgIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItNCBtbC00ICc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtdC02IGN1cnNvci1wb2ludGVyICBiZy1ncmF5LTEwMCBwLTEgcm91bmRlZC1mdWxsIHBsLTIgcHItMiBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgPGgxICBjbGFzc05hbWU9J2JnLWdyYXktMTAwIG91dGxpbmUtbm9uZScgPlN0YXJ0IGEgbmV3IGNoYXQuLjwvaDE+XHJcbiAgICAgICAgICAgICAgPFBsdXNJY29uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9IGNsYXNzTmFtZT0ndy0gbWwtMiAnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPSdtbC0zIGZvbnQtYm9sZCBtYi0zIG10LTQnPkNoYXRzIC0gPC9oMT4gKi99XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHAtMiAnPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J21sLTMgZm9udC1ib2xkIG1iLTMnPkNoYXRzIC0gPC9oMT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC05NiBvdmVyZmxvdy15LXNjcm9sbCBzY3JvbGxiYXItaGlkZSc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTEgIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgJyA+XHJcblxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0U2lkZWJhciJdLCJuYW1lcyI6WyJQbHVzSWNvbiIsIlJlYWN0IiwidXNlRWZmZWN0IiwiYXV0aCIsImRiIiwiY29sbGVjdGlvbiIsInVzZUF1dGhTdGF0ZSIsInVzZVJlY29pbFN0YXRlIiwiY2hhdE1vZGFsU3RhdGUiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIm9uU25hcHNob3QiLCJxdWVyeSIsIkNoYXRTaWRlYmFyIiwidXNlciIsIk9wZW4iLCJzZXRPcGVuIiwibmV3VXNlcm5hbWUiLCJzZXROZXdVc2VybmFtZSIsIm5ld0VtYWlsIiwic2V0TmV3RW1haWwiLCJuZXdQaG90b1VSTCIsInNldE5ld1Bob3RvVVJMIiwibmV3SUQiLCJzZXROZXdJRCIsImNvbnRhY3RzIiwic2V0Q29udGFjdHMiLCJuZXdVc2VyIiwidWlkIiwic25hcHNob3QiLCJkb2NzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ChatSidebar.tsx\n"));

/***/ })

});