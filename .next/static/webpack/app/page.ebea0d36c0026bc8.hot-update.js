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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DisplayName: function() { return /* binding */ DisplayName; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebaseConfig */ \"(app-pages-browser)/./firebaseConfig.js\");\n/* harmony import */ var _signinwithgoogle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signinwithgoogle */ \"(app-pages-browser)/./src/app/signinwithgoogle.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal-cookie */ \"(app-pages-browser)/../../node_modules/universal-cookie/es6/index.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ DisplayName,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst DisplayName = ()=>{\n    const name = user.DisplayName;\n    console.log(name);\n};\n_c = DisplayName;\nfunction Home() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.signInWithEmailAndPassword)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            const user1 = userCredential.user;\n            router.push(\"/home\");\n            console.log(user1);\n        }).catch((error)=>{\n            const errorCode = error.code;\n            const errorMessage = error.message;\n            console.log(errorCode, errorMessage);\n        });\n        const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.signInWithEmailAndPassword)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth, provider);\n        const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n        cookies.set(\"auth-token\", result.user.refreshToken);\n        setIsAuth(true);\n    };\n    const handleShowPassword = ()=>{\n        const element = document.getElementById(\"user-password\");\n        element.type = element.type === \"password\" ? \"text\" : \"password\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"md:w-[500px] md:h-[600px] w-[400px] h-[550px] rounded-lg bg-black  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3\",\n        style: {\n            boxShadow: \"10px 10px 10px 10px rgba(0,0,0, 0.4\",\n            \"color\": \"white\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"items-center flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        style: {\n                            color: \"white\"\n                        },\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        viewBox: \"0 0 24 24\",\n                        version: \"1.1\",\n                        height: \"4.6em\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\",\n                            fill: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-extrabold text-[20px] ml-[5rem] mt-5\",\n                            style: {\n                                color: \"white\"\n                            },\n                            children: \"Sign into X\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-3 mt-[2rem]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center w-[70%] m-auto space-x-2 p-2 rounded-[999px] bg-slate-200 cursor-pointer\",\n                                onClick: _signinwithgoogle__WEBPACK_IMPORTED_MODULE_5__.signInWithGoogle,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/google.png\",\n                                        alt: \"Google\",\n                                        width: 32,\n                                        height: 32\n                                    }, void 0, false, {\n                                        fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-1 font-bold\",\n                                        children: \"Continue with Google\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-y-6 mt-9\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    placeholder: \"Enter your email\",\n                                    className: \"w-[70%] m-auto h-[2rem] px-2 py-6 rounded-lg border-2 focus:outline-none\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        marginLeft: \"70px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            placeholder: \"Enter your password\",\n                                            className: \"w-[83%] m-left h-[2rem] px-2  py-6 rounded-lg border-2 focus:outline-none\",\n                                            value: password,\n                                            onChange: (e)=>setPassword(e.target.value),\n                                            id: \"user-password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            id: \"show-password\",\n                                            onClick: handleShowPassword,\n                                            style: {},\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillEye, {}, void 0, false, {\n                                                fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 82\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"w-[70%] m-auto h-[3rem] rounded-[999px] border-2 text-blue-500 hover:bg-blue-400 transition-color duration-150 hover:text-black hover:font-bold\",\n                                    onClick: handleLogin,\n                                    children: \"Sign in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center mt-4\",\n                            children: \"Forgot Password\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center mt-4 md:mt-6 space-x-2\",\n                    children: [\n                        \"Don't have an account?\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/sign-up\",\n                            className: \"text-blue-500\",\n                            children: \"Sign up\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Rc5QvcEU7xRaqjB2jUCdBs6Apgc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"DisplayName\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sQ0FBQ0YsS0FBSzs0Q0FDM0NJLElBQUc7Ozs7OztzREFFTCw4REFBQ0M7NENBQUtELElBQUc7NENBQWdCYixTQUFTcEI7NENBQW9CTyxPQUFPLENBQUU7c0RBQUksNEVBQUNyQyxxREFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7OENBRS9FLDhEQUFDaUU7b0NBQ0M3QixXQUFVO29DQUNWYyxTQUFTdEM7OENBQ1Y7Ozs7Ozs7Ozs7OztzQ0FJSCw4REFBQzJCOzRCQUFJSCxXQUFVO3NDQUFtQjs7Ozs7Ozs7Ozs7OzhCQUVwQyw4REFBQ0c7b0JBQUlILFdBQVU7O3dCQUFxQzt3QkFDdEI7c0NBQzVCLDhEQUFDM0Msa0RBQUlBOzRCQUFDeUUsTUFBTTs0QkFBWTlCLFdBQVU7c0NBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE1RDtHQWhHd0I5Qjs7UUFHUFosc0RBQVNBOzs7TUFIRlkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzeD9kNDY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgeyBzaWduSW5XaXRoR29vZ2xlIH0gZnJvbSBcIi4vc2lnbmlud2l0aGdvb2dsZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XG5pbXBvcnQge0FpRmlsbEV5ZX0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5leHBvcnQgY29uc3QgRGlzcGxheU5hbWUgPSAoKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSB1c2VyLkRpc3BsYXlOYW1lO1xuICBjb25zb2xlLmxvZyhuYW1lKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcbiAgICAgICAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2hvbWVcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIFxuICAgIFxuICBcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBwcm92aWRlcik7XG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgY29va2llcy5zZXQoXCJhdXRoLXRva2VuXCIsIHJlc3VsdC51c2VyLnJlZnJlc2hUb2tlbik7XG4gICAgc2V0SXNBdXRoKHRydWUpO1xuICB9O1xuICBcbiAgXG4gIGNvbnN0IGhhbmRsZVNob3dQYXNzd29yZCA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLXBhc3N3b3JkXCIpO1xuICAgIGVsZW1lbnQudHlwZSA9IChlbGVtZW50LnR5cGUgPT09IFwicGFzc3dvcmRcIikgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIjtcbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgPG1haW5cbiAgICAgIGNsYXNzTmFtZT1cIm1kOnctWzUwMHB4XSBtZDpoLVs2MDBweF0gdy1bNDAwcHhdIGgtWzU1MHB4XSByb3VuZGVkLWxnIGJnLWJsYWNrICBhYnNvbHV0ZSB0b3AtWzUwJV0gbGVmdC1bNTAlXSB0cmFuc2xhdGUteC1bLTUwJV0gdHJhbnNsYXRlLXktWy01MCVdIHAtM1wiXG4gICAgICBzdHlsZT17eyBib3hTaGFkb3c6IFwiMTBweCAxMHB4IDEwcHggMTBweCByZ2JhKDAsMCwwLCAwLjRcIixcImNvbG9yXCI6XCJ3aGl0ZVwiIH19XG4gICAgPlxuICAgICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxzdmcgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB2ZXJzaW9uPVwiMS4xXCIgaGVpZ2h0PVwiNC42ZW1cIj4gXG4gICAgPHBhdGggZD1cIk0xOC4yNDQgMi4yNWgzLjMwOGwtNy4yMjcgOC4yNiA4LjUwMiAxMS4yNEgxNi4xN2wtNS4yMTQtNi44MTdMNC45OSAyMS43NUgxLjY4bDcuNzMtOC44MzVMMS4yNTQgMi4yNUg4LjA4bDQuNzEzIDYuMjMxem0tMS4xNjEgMTcuNTJoMS44MzNMNy4wODQgNC4xMjZINS4xMTd6XCIgZmlsbD1cIndoaXRlXCI+PC9wYXRoPiBcbiAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtWzIwcHhdIG1sLVs1cmVtXSBtdC01XCJzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5cbiAgICAgICAgICAgIFNpZ24gaW50byBYXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyBtdC1bMnJlbV1cIj5cbiAgICAgICAgICAgIHsvKiBTaWduIGluIHdpdGggR29vZ2xlICovfVxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctWzcwJV0gbS1hdXRvIHNwYWNlLXgtMiBwLTIgcm91bmRlZC1bOTk5cHhdIGJnLXNsYXRlLTIwMCBjdXJzb3ItcG9pbnRlclwib25DbGljaz17c2lnbkluV2l0aEdvb2dsZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17XCIvZ29vZ2xlLnBuZ1wifSBhbHQ9XCJHb29nbGVcIiB3aWR0aD17MzJ9IGhlaWdodD17MzJ9IC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEgZm9udC1ib2xkXCI+Q29udGludWUgd2l0aCBHb29nbGU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPjwvZm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLXktNiBtdC05XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bNzAlXSBtLWF1dG8gaC1bMnJlbV0gcHgtMiBweS02IHJvdW5kZWQtbGcgYm9yZGVyLTIgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc3MHB4JyB9fT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzgzJV0gbS1sZWZ0IGgtWzJyZW1dIHB4LTIgIHB5LTYgcm91bmRlZC1sZyBib3JkZXItMiBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBpZD1cInVzZXItcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cInNob3ctcGFzc3dvcmRcIiBvbkNsaWNrPXtoYW5kbGVTaG93UGFzc3dvcmR9IHN0eWxlPXt7IH19ID48QWlGaWxsRXllLz48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bNzAlXSBtLWF1dG8gaC1bM3JlbV0gcm91bmRlZC1bOTk5cHhdIGJvcmRlci0yIHRleHQtYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS00MDAgdHJhbnNpdGlvbi1jb2xvciBkdXJhdGlvbi0xNTAgaG92ZXI6dGV4dC1ibGFjayBob3Zlcjpmb250LWJvbGRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dpbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+Rm9yZ290IFBhc3N3b3JkPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTQgbWQ6bXQtNiBzcGFjZS14LTJcIj5cbiAgICAgICAgICBEb24mYXBvczt0IGhhdmUgYW4gYWNjb3VudD97XCIgXCJ9XG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvc2lnbi11cFwifSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcblxufSJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJhdXRoIiwic2lnbkluV2l0aEdvb2dsZSIsInVzZVN0YXRlIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJDb29raWVzIiwiQWlGaWxsRXllIiwiRGlzcGxheU5hbWUiLCJuYW1lIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJIb21lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJyb3V0ZXIiLCJoYW5kbGVMb2dpbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJ1c2VyQ3JlZGVudGlhbCIsInB1c2giLCJjYXRjaCIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJyZXN1bHQiLCJwcm92aWRlciIsImNvb2tpZXMiLCJzZXQiLCJyZWZyZXNoVG9rZW4iLCJzZXRJc0F1dGgiLCJoYW5kbGVTaG93UGFzc3dvcmQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInR5cGUiLCJtYWluIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3hTaGFkb3ciLCJkaXYiLCJzdmciLCJjb2xvciIsInhtbG5zIiwidmlld0JveCIsInZlcnNpb24iLCJoZWlnaHQiLCJwYXRoIiwiZCIsImZpbGwiLCJoMiIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ3aWR0aCIsInAiLCJmb3JtIiwiYWN0aW9uIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJtYXJnaW5MZWZ0IiwiaWQiLCJzcGFuIiwiYnV0dG9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});