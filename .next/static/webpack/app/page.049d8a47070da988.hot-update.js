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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DisplayName: function() { return /* binding */ DisplayName; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebaseConfig */ \"(app-pages-browser)/./firebaseConfig.js\");\n/* harmony import */ var _signinwithgoogle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signinwithgoogle */ \"(app-pages-browser)/./src/app/signinwithgoogle.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal-cookie */ \"(app-pages-browser)/../../node_modules/universal-cookie/es6/index.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ DisplayName,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst DisplayName = ()=>{\n    const name = user.DisplayName;\n    console.log(name);\n};\n_c = DisplayName;\nfunction Home() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.signInWithEmailAndPassword)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            const user1 = userCredential.user;\n            router.push(\"/home\");\n            console.log(user1);\n        }).catch((error)=>{\n            const errorCode = error.code;\n            const errorMessage = error.message;\n            console.log(errorCode, errorMessage);\n        });\n        const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.signInWithEmailAndPassword)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.auth, _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.provider);\n        const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n        cookies.set(\"auth-token\", result.user.refreshToken);\n        setIsAuth(true);\n    };\n    const handleShowPassword = ()=>{\n        const element = document.getElementById(\"user-password\");\n        element.type = element.type === \"password\" ? \"text\" : \"password\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"md:w-[500px] md:h-[600px] w-[400px] h-[550px] rounded-lg bg-black  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3\",\n        style: {\n            boxShadow: \"10px 10px 10px 10px rgba(0,0,0, 0.4\",\n            \"color\": \"white\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"items-center flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        style: {\n                            color: \"white\"\n                        },\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        viewBox: \"0 0 24 24\",\n                        version: \"1.1\",\n                        height: \"4.6em\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\",\n                            fill: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-extrabold text-[20px] ml-[5rem] mt-5\",\n                            style: {\n                                color: \"white\"\n                            },\n                            children: \"Sign into X\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-3 mt-[2rem]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center w-[70%] m-auto space-x-2 p-2 rounded-[999px] bg-slate-200 cursor-pointer\",\n                                onClick: _signinwithgoogle__WEBPACK_IMPORTED_MODULE_5__.Auth,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/google.png\",\n                                        alt: \"Google\",\n                                        width: 32,\n                                        height: 32\n                                    }, void 0, false, {\n                                        fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-1 font-bold\",\n                                        children: \"Continue with Google\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-y-6 mt-9\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    placeholder: \"Enter your email\",\n                                    className: \"w-[70%] m-auto h-[2rem] px-2 py-6 rounded-lg border-2 focus:outline-none\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        marginLeft: \"70px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            placeholder: \"Enter your password\",\n                                            className: \"w-[83%] m-left h-[2rem] px-2  py-6 rounded-lg border-2 focus:outline-none\",\n                                            value: password,\n                                            onChange: (e)=>setPassword(e.target.value),\n                                            id: \"user-password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            id: \"show-password\",\n                                            onClick: handleShowPassword,\n                                            style: {},\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillEye, {}, void 0, false, {\n                                                fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 82\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"w-[70%] m-auto h-[3rem] rounded-[999px] border-2 text-blue-500 hover:bg-blue-400 transition-color duration-150 hover:text-black hover:font-bold\",\n                                    onClick: handleLogin,\n                                    children: \"Sign in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center mt-4\",\n                            children: \"Forgot Password\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center mt-4 md:mt-6 space-x-2\",\n                    children: [\n                        \"Don't have an account?\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/sign-up\",\n                            className: \"text-blue-500\",\n                            children: \"Sign up\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/page.jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Rc5QvcEU7xRaqjB2jUCdBs6Apgc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"DisplayName\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVlHLEVBQUUrQyxNQUFNLENBQUNGLEtBQUs7NENBQzNDSSxJQUFHOzs7Ozs7c0RBRUwsOERBQUNDOzRDQUFLRCxJQUFHOzRDQUFnQmIsU0FBU3BCOzRDQUFvQk8sT0FBTyxDQUFFO3NEQUFJLDRFQUFDcEMscURBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OzhDQUUvRSw4REFBQ2dFO29DQUNDN0IsV0FBVTtvQ0FDVmMsU0FBU3JDOzhDQUNWOzs7Ozs7Ozs7Ozs7c0NBSUgsOERBQUMwQjs0QkFBSUgsV0FBVTtzQ0FBbUI7Ozs7Ozs7Ozs7Ozs4QkFFcEMsOERBQUNHO29CQUFJSCxXQUFVOzt3QkFBcUM7d0JBQ3RCO3NDQUM1Qiw4REFBQzNDLGtEQUFJQTs0QkFBQ3lFLE1BQU07NEJBQVk5QixXQUFVO3NDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRNUQ7R0FoR3dCN0I7O1FBR1BiLHNEQUFTQTs7O01BSEZhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qc3g/ZDQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi8uLi9maXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gXCIuL3NpZ25pbndpdGhnb29nbGVcIjtcbmltcG9ydCB7IHByb3ZpZGVyIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcbmltcG9ydCB7QWlGaWxsRXllfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmV4cG9ydCBjb25zdCBEaXNwbGF5TmFtZSA9ICgpID0+IHtcbiAgY29uc3QgbmFtZSA9IHVzZXIuRGlzcGxheU5hbWU7XG4gIGNvbnNvbGUubG9nKG5hbWUpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyID0gdXNlckNyZWRlbnRpYWwudXNlcjtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICB9KTtcbiAgXG4gICAgXG4gIFxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIHByb3ZpZGVyKTtcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICBjb29raWVzLnNldChcImF1dGgtdG9rZW5cIiwgcmVzdWx0LnVzZXIucmVmcmVzaFRva2VuKTtcbiAgICBzZXRJc0F1dGgodHJ1ZSk7XG4gIH07XG4gIFxuICBcbiAgY29uc3QgaGFuZGxlU2hvd1Bhc3N3b3JkID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItcGFzc3dvcmRcIik7XG4gICAgZWxlbWVudC50eXBlID0gKGVsZW1lbnQudHlwZSA9PT0gXCJwYXNzd29yZFwiKSA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwiO1xuICB9O1xuICBcbiAgcmV0dXJuIChcbiAgICA8bWFpblxuICAgICAgY2xhc3NOYW1lPVwibWQ6dy1bNTAwcHhdIG1kOmgtWzYwMHB4XSB3LVs0MDBweF0gaC1bNTUwcHhdIHJvdW5kZWQtbGcgYmctYmxhY2sgIGFic29sdXRlIHRvcC1bNTAlXSBsZWZ0LVs1MCVdIHRyYW5zbGF0ZS14LVstNTAlXSB0cmFuc2xhdGUteS1bLTUwJV0gcC0zXCJcbiAgICAgIHN0eWxlPXt7IGJveFNoYWRvdzogXCIxMHB4IDEwcHggMTBweCAxMHB4IHJnYmEoMCwwLDAsIDAuNFwiLFwiY29sb3JcIjpcIndoaXRlXCIgfX1cbiAgICA+XG4gICAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPHN2ZyBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHZlcnNpb249XCIxLjFcIiBoZWlnaHQ9XCI0LjZlbVwiPiBcbiAgICA8cGF0aCBkPVwiTTE4LjI0NCAyLjI1aDMuMzA4bC03LjIyNyA4LjI2IDguNTAyIDExLjI0SDE2LjE3bC01LjIxNC02LjgxN0w0Ljk5IDIxLjc1SDEuNjhsNy43My04LjgzNUwxLjI1NCAyLjI1SDguMDhsNC43MTMgNi4yMzF6bS0xLjE2MSAxNy41MmgxLjgzM0w3LjA4NCA0LjEyNkg1LjExN3pcIiBmaWxsPVwid2hpdGVcIj48L3BhdGg+IFxuICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC1bMjBweF0gbWwtWzVyZW1dIG10LTVcInN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICAgICAgU2lnbiBpbnRvIFhcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIG10LVsycmVtXVwiPlxuICAgICAgICAgICAgey8qIFNpZ24gaW4gd2l0aCBHb29nbGUgKi99XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1bNzAlXSBtLWF1dG8gc3BhY2UteC0yIHAtMiByb3VuZGVkLVs5OTlweF0gYmctc2xhdGUtMjAwIGN1cnNvci1wb2ludGVyXCJvbkNsaWNrPXtBdXRofVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtcIi9nb29nbGUucG5nXCJ9IGFsdD1cIkdvb2dsZVwiIHdpZHRoPXszMn0gaGVpZ2h0PXszMn0gLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMSBmb250LWJvbGRcIj5Db250aW51ZSB3aXRoIEdvb2dsZTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+PC9mb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAteS02IG10LTlcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs3MCVdIG0tYXV0byBoLVsycmVtXSBweC0yIHB5LTYgcm91bmRlZC1sZyBib3JkZXItMiBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzcwcHgnIH19PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bODMlXSBtLWxlZnQgaC1bMnJlbV0gcHgtMiAgcHktNiByb3VuZGVkLWxnIGJvcmRlci0yIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGlkPVwidXNlci1wYXNzd29yZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwic2hvdy1wYXNzd29yZFwiIG9uQ2xpY2s9e2hhbmRsZVNob3dQYXNzd29yZH0gc3R5bGU9e3sgfX0gPjxBaUZpbGxFeWUvPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs3MCVdIG0tYXV0byBoLVszcmVtXSByb3VuZGVkLVs5OTlweF0gYm9yZGVyLTIgdGV4dC1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTQwMCB0cmFuc2l0aW9uLWNvbG9yIGR1cmF0aW9uLTE1MCBob3Zlcjp0ZXh0LWJsYWNrIGhvdmVyOmZvbnQtYm9sZFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTRcIj5Gb3Jnb3QgUGFzc3dvcmQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNCBtZDptdC02IHNwYWNlLXgtMlwiPlxuICAgICAgICAgIERvbiZhcG9zO3QgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cbiAgICAgICAgICA8TGluayBocmVmPXtcIi9zaWduLXVwXCJ9IGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xuXG59Il0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZVJvdXRlciIsImF1dGgiLCJBdXRoIiwicHJvdmlkZXIiLCJ1c2VTdGF0ZSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiQ29va2llcyIsIkFpRmlsbEV5ZSIsIkRpc3BsYXlOYW1lIiwibmFtZSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiSG9tZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicm91dGVyIiwiaGFuZGxlTG9naW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwidXNlckNyZWRlbnRpYWwiLCJwdXNoIiwiY2F0Y2giLCJlcnJvciIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwicmVzdWx0IiwiY29va2llcyIsInNldCIsInJlZnJlc2hUb2tlbiIsInNldElzQXV0aCIsImhhbmRsZVNob3dQYXNzd29yZCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidHlwZSIsIm1haW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsImJveFNoYWRvdyIsImRpdiIsInN2ZyIsImNvbG9yIiwieG1sbnMiLCJ2aWV3Qm94IiwidmVyc2lvbiIsImhlaWdodCIsInBhdGgiLCJkIiwiZmlsbCIsImgyIiwib25DbGljayIsInNyYyIsImFsdCIsIndpZHRoIiwicCIsImZvcm0iLCJhY3Rpb24iLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm1hcmdpbkxlZnQiLCJpZCIsInNwYW4iLCJidXR0b24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});