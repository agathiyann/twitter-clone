"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.jsx":
/*!**************************!*\
  !*** ./src/app/page.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DisplayName: function() { return /* binding */ DisplayName; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebaseConfig */ \"(app-pages-browser)/./firebaseConfig.js\");\n/* harmony import */ var _signinwithgoogle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signinwithgoogle */ \"(app-pages-browser)/./src/app/signinwithgoogle.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal-cookie */ \"(app-pages-browser)/../../node_modules/universal-cookie/es6/index.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ DisplayName,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst DisplayName = ()=>{\n    const name = user.DisplayName;\n    console.log(name);\n};\n_c = DisplayName;\nfunction Home() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.signInWithEmailAndPassword)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            const user1 = userCredential.user;\n            router.push(\"/home\");\n            console.log(user1);\n        }).catch((error)=>{\n            const errorCode = error.code;\n            const errorMessage = error.message;\n            console.log(errorCode, errorMessage);\n        });\n        const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.signInWithEmailAndPassword)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth, _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.provider);\n        const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n        cookies.set(\"auth-token\", result.user.refreshToken);\n        setIsAuth(true);\n    };\n    const handleShowPassword = ()=>{\n        const element = document.getElementById(\"user-password\");\n        element.type = element.type === \"password\" ? \"text\" : \"password\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"md:w-[500px] md:h-[600px] w-[400px] h-[550px] rounded-lg bg-black  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3\",\n        style: {\n            boxShadow: \"10px 10px 10px 10px rgba(0,0,0, 0.4\",\n            \"color\": \"white\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"items-center flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        style: {\n                            color: \"white\"\n                        },\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        viewBox: \"0 0 24 24\",\n                        version: \"1.1\",\n                        height: \"4.6em\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\",\n                            fill: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-extrabold text-[20px] ml-[5rem] mt-5\",\n                            style: {\n                                color: \"white\"\n                            },\n                            children: \"Sign into X\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-3 mt-[2rem]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center w-[70%] m-auto space-x-2 p-2 rounded-[999px] bg-slate-200 cursor-pointer\",\n                                onClick: Sgn,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/google.png\",\n                                        alt: \"Google\",\n                                        width: 32,\n                                        height: 32\n                                    }, void 0, false, {\n                                        fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-1 font-bold\",\n                                        children: \"Continue with Google\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-y-6 mt-9\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    placeholder: \"Enter your email\",\n                                    className: \"w-[70%] m-auto h-[2rem] px-2 py-6 rounded-lg border-2 focus:outline-none\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        marginLeft: \"70px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            placeholder: \"Enter your password\",\n                                            className: \"w-[83%] m-left h-[2rem] px-2  py-6 rounded-lg border-2 focus:outline-none\",\n                                            value: password,\n                                            onChange: (e)=>setPassword(e.target.value),\n                                            id: \"user-password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            id: \"show-password\",\n                                            onClick: handleShowPassword,\n                                            style: {},\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillEye, {}, void 0, false, {\n                                                fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 82\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"w-[70%] m-auto h-[3rem] rounded-[999px] border-2 text-blue-500 hover:bg-blue-400 transition-color duration-150 hover:text-black hover:font-bold\",\n                                    onClick: handleLogin,\n                                    children: \"Sign in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center mt-4\",\n                            children: \"Forgot Password\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center mt-4 md:mt-6 space-x-2\",\n                    children: [\n                        \"Don't have an account?\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/sign-up\",\n                            className: \"text-blue-500\",\n                            children: \"Sign up\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Rc5QvcEU7xRaqjB2jUCdBs6Apgc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"DisplayName\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0QsTUFBTSxDQUFDRixLQUFLOzRDQUMzQ0ksSUFBRzs7Ozs7O3NEQUVMLDhEQUFDQzs0Q0FBS0QsSUFBRzs0Q0FBZ0JkLFNBQVNwQjs0Q0FBb0JPLE9BQU8sQ0FBRTtzREFBSSw0RUFBQ3BDLHFEQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FFL0UsOERBQUNpRTtvQ0FDQzlCLFdBQVU7b0NBQ1ZjLFNBQVNyQzs4Q0FDVjs7Ozs7Ozs7Ozs7O3NDQUlILDhEQUFDMEI7NEJBQUlILFdBQVU7c0NBQW1COzs7Ozs7Ozs7Ozs7OEJBRXBDLDhEQUFDRztvQkFBSUgsV0FBVTs7d0JBQXFDO3dCQUN0QjtzQ0FDNUIsOERBQUM1QyxrREFBSUE7NEJBQUMyRSxNQUFNOzRCQUFZL0IsV0FBVTtzQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTVEO0dBOUZ3QjdCOztRQUdQZCxzREFBU0E7OztNQUhGYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanN4P2Q0NjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IGF1dGgscHJvdmlkZXIgfSBmcm9tIFwiLi4vLi4vZmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCB7IFNpZ24gfSBmcm9tIFwiLi9zaWduaW53aXRoZ29vZ2xlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgc2lnbkluV2l0aEdvb2dsZSB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiO1xuaW1wb3J0IHtBaUZpbGxFeWV9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuZXhwb3J0IGNvbnN0IERpc3BsYXlOYW1lID0gKCkgPT4ge1xuICBjb25zdCBuYW1lID0gdXNlci5EaXNwbGF5TmFtZTtcbiAgY29uc29sZS5sb2cobmFtZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKVxuICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSB1c2VyQ3JlZGVudGlhbC51c2VyO1xuICAgICAgICByb3V0ZXIucHVzaChcIi9ob21lXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgcHJvdmlkZXIpO1xuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgIGNvb2tpZXMuc2V0KFwiYXV0aC10b2tlblwiLCByZXN1bHQudXNlci5yZWZyZXNoVG9rZW4pO1xuICAgIHNldElzQXV0aCh0cnVlKTtcbiAgfTtcbiAgXG4gIFxuICBjb25zdCBoYW5kbGVTaG93UGFzc3dvcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1wYXNzd29yZFwiKTtcbiAgICBlbGVtZW50LnR5cGUgPSAoZWxlbWVudC50eXBlID09PSBcInBhc3N3b3JkXCIpID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCI7XG4gIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDxtYWluXG4gICAgICBjbGFzc05hbWU9XCJtZDp3LVs1MDBweF0gbWQ6aC1bNjAwcHhdIHctWzQwMHB4XSBoLVs1NTBweF0gcm91bmRlZC1sZyBiZy1ibGFjayAgYWJzb2x1dGUgdG9wLVs1MCVdIGxlZnQtWzUwJV0gdHJhbnNsYXRlLXgtWy01MCVdIHRyYW5zbGF0ZS15LVstNTAlXSBwLTNcIlxuICAgICAgc3R5bGU9e3sgYm94U2hhZG93OiBcIjEwcHggMTBweCAxMHB4IDEwcHggcmdiYSgwLDAsMCwgMC40XCIsXCJjb2xvclwiOlwid2hpdGVcIiB9fVxuICAgID5cbiAgICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8c3ZnIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgdmVyc2lvbj1cIjEuMVwiIGhlaWdodD1cIjQuNmVtXCI+IFxuICAgIDxwYXRoIGQ9XCJNMTguMjQ0IDIuMjVoMy4zMDhsLTcuMjI3IDguMjYgOC41MDIgMTEuMjRIMTYuMTdsLTUuMjE0LTYuODE3TDQuOTkgMjEuNzVIMS42OGw3LjczLTguODM1TDEuMjU0IDIuMjVIOC4wOGw0LjcxMyA2LjIzMXptLTEuMTYxIDE3LjUyaDEuODMzTDcuMDg0IDQuMTI2SDUuMTE3elwiIGZpbGw9XCJ3aGl0ZVwiPjwvcGF0aD4gXG4gIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LVsyMHB4XSBtbC1bNXJlbV0gbXQtNVwic3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XG4gICAgICAgICAgICBTaWduIGludG8gWFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMgbXQtWzJyZW1dXCI+XG4gICAgICAgICAgICB7LyogU2lnbiBpbiB3aXRoIEdvb2dsZSAqL31cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LVs3MCVdIG0tYXV0byBzcGFjZS14LTIgcC0yIHJvdW5kZWQtWzk5OXB4XSBiZy1zbGF0ZS0yMDAgY3Vyc29yLXBvaW50ZXJcIm9uQ2xpY2s9e1Nnbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17XCIvZ29vZ2xlLnBuZ1wifSBhbHQ9XCJHb29nbGVcIiB3aWR0aD17MzJ9IGhlaWdodD17MzJ9IC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEgZm9udC1ib2xkXCI+Q29udGludWUgd2l0aCBHb29nbGU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPjwvZm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLXktNiBtdC05XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bNzAlXSBtLWF1dG8gaC1bMnJlbV0gcHgtMiBweS02IHJvdW5kZWQtbGcgYm9yZGVyLTIgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc3MHB4JyB9fT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzgzJV0gbS1sZWZ0IGgtWzJyZW1dIHB4LTIgIHB5LTYgcm91bmRlZC1sZyBib3JkZXItMiBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBpZD1cInVzZXItcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cInNob3ctcGFzc3dvcmRcIiBvbkNsaWNrPXtoYW5kbGVTaG93UGFzc3dvcmR9IHN0eWxlPXt7IH19ID48QWlGaWxsRXllLz48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bNzAlXSBtLWF1dG8gaC1bM3JlbV0gcm91bmRlZC1bOTk5cHhdIGJvcmRlci0yIHRleHQtYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS00MDAgdHJhbnNpdGlvbi1jb2xvciBkdXJhdGlvbi0xNTAgaG92ZXI6dGV4dC1ibGFjayBob3Zlcjpmb250LWJvbGRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dpbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+Rm9yZ290IFBhc3N3b3JkPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTQgbWQ6bXQtNiBzcGFjZS14LTJcIj5cbiAgICAgICAgICBEb24mYXBvczt0IGhhdmUgYW4gYWNjb3VudD97XCIgXCJ9XG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvc2lnbi11cFwifSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcblxufSJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJhdXRoIiwicHJvdmlkZXIiLCJTaWduIiwidXNlU3RhdGUiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhHb29nbGUiLCJDb29raWVzIiwiQWlGaWxsRXllIiwiRGlzcGxheU5hbWUiLCJuYW1lIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJIb21lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJyb3V0ZXIiLCJoYW5kbGVMb2dpbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJ1c2VyQ3JlZGVudGlhbCIsInB1c2giLCJjYXRjaCIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJyZXN1bHQiLCJjb29raWVzIiwic2V0IiwicmVmcmVzaFRva2VuIiwic2V0SXNBdXRoIiwiaGFuZGxlU2hvd1Bhc3N3b3JkIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0eXBlIiwibWFpbiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYm94U2hhZG93IiwiZGl2Iiwic3ZnIiwiY29sb3IiLCJ4bWxucyIsInZpZXdCb3giLCJ2ZXJzaW9uIiwiaGVpZ2h0IiwicGF0aCIsImQiLCJmaWxsIiwiaDIiLCJvbkNsaWNrIiwiU2duIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJwIiwiZm9ybSIsImFjdGlvbiIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibWFyZ2luTGVmdCIsImlkIiwic3BhbiIsImJ1dHRvbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});