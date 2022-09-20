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

/***/ "./components/ChatModal.tsx":
/*!**********************************!*\
  !*** ./components/ChatModal.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/compat/firestore */ \"./node_modules/firebase/compat/firestore/dist/index.esm.js\");\n/* harmony import */ var _atoms_chatModalAtoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../atoms/chatModalAtoms */ \"./atoms/chatModalAtoms.tsx\");\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ChatModal() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_chatModalAtoms__WEBPACK_IMPORTED_MODULE_6__.chatModalState), 2), Open = ref[0], setOpen = ref[1];\n    var filePickerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), selectedFile = ref1[0], setSelectedFile = ref1[1];\n    var captionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth), 1), user = ref3[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: openModal,\n                    className: \"rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75\",\n                    children: \"Open dialog\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Transition, {\n                appear: true,\n                show: Open,\n                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Dialog, {\n                    as: \"div\",\n                    className: \"relative z-10\",\n                    onClick: function() {\n                        return setOpen(false);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Transition.Child, {\n                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                            enter: \"ease-out duration-300\",\n                            enterFrom: \"opacity-0\",\n                            enterTo: \"opacity-100\",\n                            leave: \"ease-in duration-200\",\n                            leaveFrom: \"opacity-100\",\n                            leaveTo: \"opacity-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"fixed inset-0 bg-black bg-opacity-25\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 23\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"fixed inset-0 overflow-y-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex min-h-full items-center justify-center p-4 text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Transition.Child, {\n                                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                                    enter: \"ease-out duration-300\",\n                                    enterFrom: \"opacity-0 scale-95\",\n                                    enterTo: \"opacity-100 scale-100\",\n                                    leave: \"ease-in duration-200\",\n                                    leaveFrom: \"opacity-100 scale-100\",\n                                    leaveTo: \"opacity-0 scale-95\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Dialog.Panel, {\n                                        className: \"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Dialog.Title, {\n                                                as: \"h3\",\n                                                className: \"text-lg font-medium leading-6 text-gray-900\",\n                                                children: \"Payment successful\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 35\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm text-gray-500\",\n                                                    children: \"Your payment has been successfully submitted. We\\u2019ve sent you an email with all of the details of your order.\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 39\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 35\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    className: \"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2\",\n                                                    onClick: closeModal,\n                                                    children: \"Got it, thanks!\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 39\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 35\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 31\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 27\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 23\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 19\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                lineNumber: 37,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n        lineNumber: 26,\n        columnNumber: 7\n    }, this);\n}\n_s(ChatModal, \"uqpJ0+dtBfTPjrpCn7dyZ7CAYNc=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState,\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState\n    ];\n});\n_c = ChatModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatModal);\nvar _c;\n$RefreshReg$(_c, \"ChatModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7b0RBQ0Y7MERBRU4sOERBQUNELEtBQUc7Z0RBQUNDLFNBQVMsRUFBQyxNQUFNOzBEQUNqQiw0RUFBQ0MsUUFBTTtvREFDSEMsSUFBSSxFQUFDLFFBQVE7b0RBQ2JGLFNBQVMsRUFBQywyT0FBMk87b0RBQ3JQRyxPQUFPLEVBQUVlLFVBQVU7OERBQ3RCLGlCQUVEOzs7Ozt3REFBUzs7Ozs7b0RBQ1A7Ozs7Ozs0Q0FDSzs7Ozs7d0NBQ0E7Ozs7O29DQUNqQjs7Ozs7Z0NBQ0o7Ozs7Ozt3QkFDRDs7Ozs7b0JBQ0E7Ozs7OztZQUNYLENBQ1Q7Q0FDRjtHQTNFUTdCLFNBQVM7O1FBQ1VOLGtEQUFjO1FBS3ZCRyxtRUFBWTs7O0FBTnRCRyxLQUFBQSxTQUFTO0FBNkVsQiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXRNb2RhbC50c3g/MWQxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIlxyXG5pbXBvcnQgeyBEaWFsb2csIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcclxuaW1wb3J0IHsgQ2FtZXJhSWNvbiwgQ3ViZVRyYW5zcGFyZW50SWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSdcclxuaW1wb3J0IHsgaXNUeXBlZEFycmF5IH0gZnJvbSAndXRpbC90eXBlcydcclxuaW1wb3J0IHsgZGIsIHN0b3JhZ2UgfSBmcm9tICcuLi9maXJlYmFzZSdcclxuaW1wb3J0IHsgYWRkRG9jLCBjb2xsZWN0aW9uLCBkb2MsIHVwZGF0ZURvYyB9IGZyb20gXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCJcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdAZmlyZWJhc2UvYXBwLWNvbXBhdCc7XHJcbmltcG9ydCBcImZpcmViYXNlL2NvbXBhdC9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgcmVmLCBnZXREb3dubG9hZFVSTCwgdXBsb2FkU3RyaW5nIH0gZnJvbSAnQGZpcmViYXNlL3N0b3JhZ2UnXHJcbmltcG9ydCB0b2FzdCBmcm9tICdyZWFjdC1ob3QtdG9hc3QnXHJcbmltcG9ydCB7IGNoYXRNb2RhbFN0YXRlIH0gZnJvbSAnLi4vYXRvbXMvY2hhdE1vZGFsQXRvbXMnXHJcblxyXG5mdW5jdGlvbiBDaGF0TW9kYWwoKSB7XHJcbiAgICBjb25zdCBbT3Blbiwgc2V0T3Blbl0gPSB1c2VSZWNvaWxTdGF0ZShjaGF0TW9kYWxTdGF0ZSlcclxuICAgIGNvbnN0IGZpbGVQaWNrZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRGaWxlLCBzZXRTZWxlY3RlZEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBjYXB0aW9uUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy1ibGFjayBiZy1vcGFjaXR5LTIwIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgaG92ZXI6Ymctb3BhY2l0eS0zMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTIgZm9jdXMtdmlzaWJsZTpyaW5nLXdoaXRlIGZvY3VzLXZpc2libGU6cmluZy1vcGFjaXR5LTc1XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIE9wZW4gZGlhbG9nXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8VHJhbnNpdGlvbiBhcHBlYXIgc2hvdz17T3Blbn0gYXM9e0ZyYWdtZW50fT5cclxuICAgICAgICAgICAgICA8RGlhbG9nIGFzPVwiZGl2XCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMFwiIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktMjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgb3ZlcmZsb3cteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cImVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nLlBhbmVsIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZCB0cmFuc2Zvcm0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtMnhsIGJnLXdoaXRlIHAtNiB0ZXh0LWxlZnQgYWxpZ24tbWlkZGxlIHNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZy5UaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBheW1lbnQgc3VjY2Vzc2Z1bFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2cuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBwYXltZW50IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBzdWJtaXR0ZWQuIFdl4oCZdmUgc2VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5b3UgYW4gZW1haWwgd2l0aCBhbGwgb2YgdGhlIGRldGFpbHMgb2YgeW91ciBvcmRlci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgYmctYmx1ZS0xMDAgcHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ibHVlLTkwMCBob3ZlcjpiZy1ibHVlLTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTIgZm9jdXMtdmlzaWJsZTpyaW5nLWJsdWUtNTAwIGZvY3VzLXZpc2libGU6cmluZy1vZmZzZXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb3QgaXQsIHRoYW5rcyFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZy5QYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdE1vZGFsIl0sIm5hbWVzIjpbIlJlYWN0IiwiRnJhZ21lbnQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVJlY29pbFN0YXRlIiwiRGlhbG9nIiwiVHJhbnNpdGlvbiIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJjaGF0TW9kYWxTdGF0ZSIsIkNoYXRNb2RhbCIsIk9wZW4iLCJzZXRPcGVuIiwiZmlsZVBpY2tlclJlZiIsInNlbGVjdGVkRmlsZSIsInNldFNlbGVjdGVkRmlsZSIsImNhcHRpb25SZWYiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsIm9wZW5Nb2RhbCIsImFwcGVhciIsInNob3ciLCJhcyIsIkNoaWxkIiwiZW50ZXIiLCJlbnRlckZyb20iLCJlbnRlclRvIiwibGVhdmUiLCJsZWF2ZUZyb20iLCJsZWF2ZVRvIiwiUGFuZWwiLCJUaXRsZSIsInAiLCJjbG9zZU1vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ChatModal.tsx\n"));

/***/ })

});