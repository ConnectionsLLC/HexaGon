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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var _firebase_app_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/app-compat */ \"./node_modules/@firebase/app-compat/dist/esm/index.esm2017.js\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/compat/firestore */ \"./node_modules/firebase/compat/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_chatModalAtoms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../atoms/chatModalAtoms */ \"./atoms/chatModalAtoms.tsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ChatSidebar() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth), 1), user = ref[0];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState)(_atoms_chatModalAtoms__WEBPACK_IMPORTED_MODULE_9__.chatModalState), 2), Open = ref1[0], setOpen = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newUsername = ref2[0], setNewUsername = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newEmail = ref3[0], setNewEmail = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newPhotoURL = ref4[0], setNewPhotoURL = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newID = ref5[0], setNewID = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), contacts = ref6[0], setContacts = ref6[1];\n    var newUser = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"chats\", user.uid, \"contacts\")), function(snapshot) {\n            setContacts(snapshot.docs);\n        }), [\n            _firebase__WEBPACK_IMPORTED_MODULE_3__.db\n        ];\n    });\n    var newChat = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var docRef, snapshots, querySnapshot;\n            return C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _firebase__WEBPACK_IMPORTED_MODULE_3__.db.collection(\"chats\").doc(user.uid).set({\n                            email: user.email,\n                            lastSeen: _firebase_app_compat__WEBPACK_IMPORTED_MODULE_4__[\"default\"].firestore.FieldValue.serverTimestamp(),\n                            photoURL: user.photoURL,\n                            username: user.displayName,\n                            phone: user.phoneNumber,\n                            uid: user.uid,\n                            slug: user.displayName.replace(/\\s+/g, \"\").toLowerCase(),\n                            lowerUsername: \"@\" + user.displayName.replace(/\\s+/g, \"\").toLowerCase()\n                        }, {\n                            merge: true\n                        });\n                        docRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"users\");\n                        snapshots = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)(docRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.where)(\"lowerUsername\", \"==\", newUser.current.value));\n                        _ctx.next = 5;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDocs)(snapshots);\n                    case 5:\n                        querySnapshot = _ctx.sent;\n                        querySnapshot.forEach(function(Newuser) {\n                            setNewID(Newuser.data().uid);\n                            setNewUsername(Newuser.data().username);\n                            setNewEmail(Newuser.data().email);\n                            setNewPhotoURL(Newuser.data().photoURL);\n                        });\n                        _ctx.next = 9;\n                        return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.setDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"chats\", user.uid, \"contacts\", newUser.current.value), {\n                            uid: newID,\n                            addedFrom: newUser.current.value,\n                            username: newUsername,\n                            email: newEmail,\n                            photoURL: newPhotoURL\n                        });\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function newChat() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    console.log(newUser);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex mt-6 cursor-pointer bg-gray-100 p-1 rounded-full pl-2 pr-2 justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        ref: newUser,\n                        type: \"text\",\n                        placeholder: \"Start a new Chat\",\n                        className: \"bg-gray-100 outline-none\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__.PlusIcon, {\n                        onClick: newChat,\n                        className: \"w-4 ml-2 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                lineNumber: 72,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Contacts, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatSidebar.tsx\",\n        lineNumber: 71,\n        columnNumber: 7\n    }, this);\n}\n_s(ChatSidebar, \"2zi9ojjFITA/QCp+383eq77RiiY=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState,\n        recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState\n    ];\n});\n_c = ChatSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatSidebar);\nvar _c;\n$RefreshReg$(_c, \"ChatSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkFBa0Y7O2tDQUM3Riw4REFBQ0MsT0FBSzt3QkFBQ0MsR0FBRyxFQUFFbkMsT0FBTzt3QkFBRW9DLElBQUksRUFBQyxNQUFNO3dCQUFDQyxXQUFXLEVBQUMsa0JBQWtCO3dCQUFDSixTQUFTLEVBQUMsMEJBQTBCOzs7Ozs0QkFBRztrQ0FDdkcsOERBQUNqRSxrRUFBUTt3QkFBQ3NFLE9BQU8sRUFBRWxDLE9BQU87d0JBQUU2QixTQUFTLEVBQUMsV0FBVzs7Ozs7NEJBQUc7Ozs7OztvQkFDbEQ7MEJBQ1IsOERBQUNNLFFBQVE7Ozs7b0JBQUU7Ozs7OztZQUNQLENBQ1Q7Q0FDRjtHQWhFUXJELFdBQVc7O1FBQ0RULG1FQUFZO1FBQ0hDLGtEQUFjOzs7QUFGakNRLEtBQUFBLFdBQVc7QUFrRXBCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdFNpZGViYXIudHN4P2YxZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGx1c0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ0BmaXJlYmFzZS9hcHAtY29tcGF0JztcclxuaW1wb3J0IFwiZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJ1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBkb2Msc2V0RG9jIH0gZnJvbSBcIkBmaXJlYmFzZS9maXJlc3RvcmVcIlxyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgeyBjaGF0TW9kYWxTdGF0ZSB9IGZyb20gJy4uL2F0b21zL2NoYXRNb2RhbEF0b21zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZ2V0RG9jcywgb25TbmFwc2hvdCwgcXVlcnksIHdoZXJlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuXHJcbmZ1bmN0aW9uIENoYXRTaWRlYmFyKCkge1xyXG4gICAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xyXG4gICAgY29uc3QgW09wZW4sIHNldE9wZW5dID0gdXNlUmVjb2lsU3RhdGUoY2hhdE1vZGFsU3RhdGUpXHJcbiAgICBjb25zdCBbbmV3VXNlcm5hbWUsIHNldE5ld1VzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbbmV3RW1haWwsIHNldE5ld0VtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbbmV3UGhvdG9VUkwsIHNldE5ld1Bob3RvVVJMXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbbmV3SUQsIHNldE5ld0lEXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbY29udGFjdHMsIHNldENvbnRhY3RzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgbGV0IG5ld1VzZXIgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgb25TbmFwc2hvdChxdWVyeShjb2xsZWN0aW9uKGRiLCAnY2hhdHMnLCB1c2VyLnVpZCwgJ2NvbnRhY3RzJykpLFxyXG4gICAgICAgICAgc25hcHNob3QgPT4ge1xyXG4gICAgICAgICAgICAgIHNldENvbnRhY3RzKHNuYXBzaG90LmRvY3MpXHJcbiAgICAgICAgICB9KSwgW2RiXVxyXG59KSAgXHJcbiAgXHJcbiAgICAgICAgY29uc3QgbmV3Q2hhdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgZGIuY29sbGVjdGlvbignY2hhdHMnKS5kb2ModXNlci51aWQpLnNldCh7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIGxhc3RTZWVuOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgICAgICAgIHBob3RvVVJMOiB1c2VyLnBob3RvVVJMLFxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICBwaG9uZTogdXNlci5waG9uZU51bWJlcixcclxuICAgICAgICAgICAgICAgIHVpZDogdXNlci51aWQsXHJcbiAgICAgICAgICAgICAgICBzbHVnOiB1c2VyLmRpc3BsYXlOYW1lLnJlcGxhY2UoL1xccysvZywgJycpLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICBsb3dlclVzZXJuYW1lOiAnQCcgKyB1c2VyLmRpc3BsYXlOYW1lLnJlcGxhY2UoL1xccysvZywgJycpLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgbWVyZ2U6IHRydWUgfSk7IFxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRvY1JlZiA9IGNvbGxlY3Rpb24oZGIsIFwidXNlcnNcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHNuYXBzaG90cyA9IHF1ZXJ5KGRvY1JlZiwgd2hlcmUoXCJsb3dlclVzZXJuYW1lXCIsIFwiPT1cIiwgbmV3VXNlci5jdXJyZW50LnZhbHVlKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHNuYXBzaG90cyk7XHJcbiAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoTmV3dXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TmV3SUQoTmV3dXNlci5kYXRhKCkudWlkKVxyXG4gICAgICAgICAgICAgICAgc2V0TmV3VXNlcm5hbWUoTmV3dXNlci5kYXRhKCkudXNlcm5hbWUpXHJcbiAgICAgICAgICAgICAgICBzZXROZXdFbWFpbChOZXd1c2VyLmRhdGEoKS5lbWFpbClcclxuICAgICAgICAgICAgICAgIHNldE5ld1Bob3RvVVJMKE5ld3VzZXIuZGF0YSgpLnBob3RvVVJMKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIGF3YWl0IHNldERvYyhkb2MoZGIsIFwiY2hhdHNcIiwgdXNlci51aWQsICdjb250YWN0cycsIG5ld1VzZXIuY3VycmVudC52YWx1ZSwgKSwge1xyXG4gICAgICAgICAgICAgICAgdWlkIDogbmV3SUQsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEZyb206IG5ld1VzZXIuY3VycmVudC52YWx1ZSwgXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogbmV3VXNlcm5hbWUsIFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IG5ld0VtYWlsLCBcclxuICAgICAgICAgICAgICAgIHBob3RvVVJMOiBuZXdQaG90b1VSTFxyXG4gICAgICAgICAgICAgICAgLy8gcGhvdG9VUkw6IG5ld3VzZXJkYXRhLnBob3RvVVJMLFxyXG4gICAgICAgICAgICAgICAgLy8gdXNlcm5hbWU6IG5ld3VzZXJkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgLy8gdWlkOiBuZXd1c2VyZGF0YS51aWQsXHJcbiAgICAgICAgICAgICAgICAvLyBsb3dlclVzZXJuYW1lOiBuZXd1c2VyZGF0YS5sb3dlclVzZXJuYW1lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9XHJcbiAgICBcclxuY29uc29sZS5sb2cobmV3VXNlcilcclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbXQtNiBjdXJzb3ItcG9pbnRlciAgYmctZ3JheS0xMDAgcC0xIHJvdW5kZWQtZnVsbCBwbC0yIHByLTIganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtuZXdVc2VyfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdTdGFydCBhIG5ldyBDaGF0JyBjbGFzc05hbWU9J2JnLWdyYXktMTAwIG91dGxpbmUtbm9uZScgLz5cclxuICAgICAgICAgICAgICA8UGx1c0ljb24gb25DbGljaz17bmV3Q2hhdH0gY2xhc3NOYW1lPSd3LTQgbWwtMiAnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q29udGFjdHMvPlxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRTaWRlYmFyIl0sIm5hbWVzIjpbIlBsdXNJY29uIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJhdXRoIiwiZmlyZWJhc2UiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJzZXREb2MiLCJ1c2VBdXRoU3RhdGUiLCJ1c2VSZWNvaWxTdGF0ZSIsImNoYXRNb2RhbFN0YXRlIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJnZXREb2NzIiwib25TbmFwc2hvdCIsInF1ZXJ5Iiwid2hlcmUiLCJDaGF0U2lkZWJhciIsInVzZXIiLCJPcGVuIiwic2V0T3BlbiIsIm5ld1VzZXJuYW1lIiwic2V0TmV3VXNlcm5hbWUiLCJuZXdFbWFpbCIsInNldE5ld0VtYWlsIiwibmV3UGhvdG9VUkwiLCJzZXROZXdQaG90b1VSTCIsIm5ld0lEIiwic2V0TmV3SUQiLCJjb250YWN0cyIsInNldENvbnRhY3RzIiwibmV3VXNlciIsInVpZCIsInNuYXBzaG90IiwiZG9jcyIsIm5ld0NoYXQiLCJkb2NSZWYiLCJzbmFwc2hvdHMiLCJxdWVyeVNuYXBzaG90Iiwic2V0IiwiZW1haWwiLCJsYXN0U2VlbiIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJwaG90b1VSTCIsInVzZXJuYW1lIiwiZGlzcGxheU5hbWUiLCJwaG9uZSIsInBob25lTnVtYmVyIiwic2x1ZyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImxvd2VyVXNlcm5hbWUiLCJtZXJnZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImZvckVhY2giLCJOZXd1c2VyIiwiZGF0YSIsImFkZGVkRnJvbSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInJlZiIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJDb250YWN0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ChatSidebar.tsx\n"));

/***/ })

});