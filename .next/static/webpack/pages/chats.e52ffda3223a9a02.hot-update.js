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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/firestore */ \"./node_modules/firebase/compat/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_chatModalAtoms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../atoms/chatModalAtoms */ \"./atoms/chatModalAtoms.tsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ChatSidebar() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth), 1), user = ref[0];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilState)(_atoms_chatModalAtoms__WEBPACK_IMPORTED_MODULE_8__.chatModalState), 2), Open = ref1[0], setOpen = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newUsername = ref2[0], setNewUsername = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newEmail = ref3[0], setNewEmail = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newPhotoURL = ref4[0], setNewPhotoURL = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newID = ref5[0], setNewID = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), contacts = ref6[0], setContacts = ref6[1];\n    var newUser = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.query)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"users\")), function(snapshot) {\n                            setContacts(snapshot.docs);\n                        }), [\n                            _firebase__WEBPACK_IMPORTED_MODULE_3__.db\n                        ];\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    });\n    // const newChat = async () => {\n    //     db.collection('chats').doc(user.uid).set({\n    //         email: user.email,\n    //         lastSeen: firebase.firestore.FieldValue.serverTimestamp(),\n    //         photoURL: user.photoURL,\n    //         username: user.displayName,\n    //         phone: user.phoneNumber,\n    //         uid: user.uid,\n    //         slug: user.displayName.replace(/\\s+/g, '').toLowerCase(),\n    //         lowerUsername: '@' + user.displayName.replace(/\\s+/g, '').toLowerCase()\n    //     },\n    //         { merge: true }); \n    //      setDoc(doc(db, \"chats\", user.uid, 'contacts', newUser.current.value, ), {\n    //         uid : newID,\n    //         addedFrom: newUser.current.value, \n    //         username: newUsername, \n    //         email: newEmail, \n    //         photoURL: newPhotoURL\n    //         // photoURL: newuserdata.photoURL,\n    //         // username: newuserdata.username,\n    //         // uid: newuserdata.uid,\n    //         // lowerUsername: newuserdata.lowerUsername\n    //     });\n    //             newUser = null\n    //  }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"mr-4 ml-4 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex mt-6 cursor-pointer bg-gray-100 p-1 rounded-full pl-2 pr-2 justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: \"bg-gray-100 outline-none\",\n                        children: \"Start a new chat..\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__.PlusIcon, {\n                        className: \"w-4 ml-2 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                lineNumber: 73,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"mt-4 border border-gray-300 rounded-lg p-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: \"ml-3 font-bold mb-3\",\n                        children: \"Chats - \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-96 overflow-y-scroll scrollbar-hide\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex items-center space-x-1 rounded-lg cursor-pointer \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 23\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                lineNumber: 79,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n        lineNumber: 72,\n        columnNumber: 7\n    }, this);\n}\n_s(ChatSidebar, \"2zi9ojjFITA/QCp+383eq77RiiY=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState,\n        recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilState\n    ];\n});\n_c = ChatSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatSidebar);\nvar _c;\n$RefreshReg$(_c, \"ChatSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs0QkFBSztrQ0FDakQsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyx1Q0FBdUM7a0NBQ2xELDRFQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsd0RBQXlEO3NDQUdwRSw0RUFBQ0QsS0FBRzs7OztvQ0FFRTs7Ozs7Z0NBQ0o7Ozs7OzRCQUVKOzs7Ozs7b0JBQ0o7Ozs7OztZQUtKLENBQ1Q7Q0FDRjtHQWxGUWpCLFdBQVc7O1FBQ0RQLG1FQUFZO1FBQ0hDLGtEQUFjOzs7QUFGakNNLEtBQUFBLFdBQVc7QUFvRnBCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdFNpZGViYXIudHN4P2YxZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGx1c0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ0BmaXJlYmFzZS9hcHAtY29tcGF0JztcclxuaW1wb3J0IFwiZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJ1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBkb2Msc2V0RG9jIH0gZnJvbSBcIkBmaXJlYmFzZS9maXJlc3RvcmVcIlxyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgeyBjaGF0TW9kYWxTdGF0ZSB9IGZyb20gJy4uL2F0b21zL2NoYXRNb2RhbEF0b21zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZ2V0RG9jcywgb25TbmFwc2hvdCwgcXVlcnksIHdoZXJlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuXHJcblxyXG5mdW5jdGlvbiBDaGF0U2lkZWJhcigpIHtcclxuICAgIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcclxuICAgIGNvbnN0IFtPcGVuLCBzZXRPcGVuXSA9IHVzZVJlY29pbFN0YXRlKGNoYXRNb2RhbFN0YXRlKVxyXG4gICAgY29uc3QgW25ld1VzZXJuYW1lLCBzZXROZXdVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW25ld0VtYWlsLCBzZXROZXdFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW25ld1Bob3RvVVJMLCBzZXROZXdQaG90b1VSTF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW25ld0lELCBzZXROZXdJRF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2NvbnRhY3RzLCBzZXRDb250YWN0c10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGxldCBuZXdVc2VyID0gdXNlUmVmKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIDsgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIG9uU25hcHNob3QocXVlcnkoY29sbGVjdGlvbihkYiwgJ3VzZXJzJykpLFxyXG4gICAgICAgICAgICAgIHNuYXBzaG90ID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0Q29udGFjdHMoc25hcHNob3QuZG9jcylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIFtkYl1cclxuIFxyXG5cclxuICAgICAgfSkoKVxyXG59KSAgXHJcbiAgXHJcbiAgICAgICAgLy8gY29uc3QgbmV3Q2hhdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyAgICAgZGIuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModXNlci51aWQpLnNldCh7XHJcbiAgICAgICAgLy8gICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAvLyAgICAgICAgIGxhc3RTZWVuOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAvLyAgICAgICAgIHBob3RvVVJMOiB1c2VyLnBob3RvVVJMLFxyXG4gICAgICAgIC8vICAgICAgICAgdXNlcm5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgLy8gICAgICAgICBwaG9uZTogdXNlci5waG9uZU51bWJlcixcclxuICAgICAgICAvLyAgICAgICAgIHVpZDogdXNlci51aWQsXHJcbiAgICAgICAgLy8gICAgICAgICBzbHVnOiB1c2VyLmRpc3BsYXlOYW1lLnJlcGxhY2UoL1xccysvZywgJycpLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgLy8gICAgICAgICBsb3dlclVzZXJuYW1lOiAnQCcgKyB1c2VyLmRpc3BsYXlOYW1lLnJlcGxhY2UoL1xccysvZywgJycpLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHsgbWVyZ2U6IHRydWUgfSk7IFxyXG5cclxuXHJcbiAgICAgICBcclxuICAgICAgICAvLyAgICAgIHNldERvYyhkb2MoZGIsIFwiY2hhdHNcIiwgdXNlci51aWQsICdjb250YWN0cycsIG5ld1VzZXIuY3VycmVudC52YWx1ZSwgKSwge1xyXG4gICAgICAgIC8vICAgICAgICAgdWlkIDogbmV3SUQsXHJcbiAgICAgICAgLy8gICAgICAgICBhZGRlZEZyb206IG5ld1VzZXIuY3VycmVudC52YWx1ZSwgXHJcbiAgICAgICAgLy8gICAgICAgICB1c2VybmFtZTogbmV3VXNlcm5hbWUsIFxyXG4gICAgICAgIC8vICAgICAgICAgZW1haWw6IG5ld0VtYWlsLCBcclxuICAgICAgICAvLyAgICAgICAgIHBob3RvVVJMOiBuZXdQaG90b1VSTFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gcGhvdG9VUkw6IG5ld3VzZXJkYXRhLnBob3RvVVJMLFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gdXNlcm5hbWU6IG5ld3VzZXJkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gdWlkOiBuZXd1c2VyZGF0YS51aWQsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBsb3dlclVzZXJuYW1lOiBuZXd1c2VyZGF0YS5sb3dlclVzZXJuYW1lXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbmV3VXNlciA9IG51bGxcclxuICAgICAgICAgICBcclxuICAgICAgICAvLyAgfVxyXG4gICAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci00IG1sLTQgJyA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtdC02IGN1cnNvci1wb2ludGVyICBiZy1ncmF5LTEwMCBwLTEgcm91bmRlZC1mdWxsIHBsLTIgcHItMiBqdXN0aWZ5LWNlbnRlcicgPlxyXG4gICAgICAgICAgICAgIDxoMSAgY2xhc3NOYW1lPSdiZy1ncmF5LTEwMCBvdXRsaW5lLW5vbmUnID5TdGFydCBhIG5ldyBjaGF0Li48L2gxPlxyXG4gICAgICAgICAgICAgIDxQbHVzSWNvbiAgY2xhc3NOYW1lPSd3LTQgbWwtMiAnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPSdtbC0zIGZvbnQtYm9sZCBtYi0zIG10LTQnPkNoYXRzIC0gPC9oMT4gKi99XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHAtMiAnPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J21sLTMgZm9udC1ib2xkIG1iLTMnPkNoYXRzIC0gPC9oMT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC05NiBvdmVyZmxvdy15LXNjcm9sbCBzY3JvbGxiYXItaGlkZSc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTEgIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgJyA+XHJcblxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0U2lkZWJhciJdLCJuYW1lcyI6WyJQbHVzSWNvbiIsIlJlYWN0IiwidXNlRWZmZWN0IiwiYXV0aCIsImRiIiwiY29sbGVjdGlvbiIsInVzZUF1dGhTdGF0ZSIsInVzZVJlY29pbFN0YXRlIiwiY2hhdE1vZGFsU3RhdGUiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIm9uU25hcHNob3QiLCJxdWVyeSIsIkNoYXRTaWRlYmFyIiwidXNlciIsIk9wZW4iLCJzZXRPcGVuIiwibmV3VXNlcm5hbWUiLCJzZXROZXdVc2VybmFtZSIsIm5ld0VtYWlsIiwic2V0TmV3RW1haWwiLCJuZXdQaG90b1VSTCIsInNldE5ld1Bob3RvVVJMIiwibmV3SUQiLCJzZXROZXdJRCIsImNvbnRhY3RzIiwic2V0Q29udGFjdHMiLCJuZXdVc2VyIiwic25hcHNob3QiLCJkb2NzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ChatSidebar.tsx\n"));

/***/ })

});