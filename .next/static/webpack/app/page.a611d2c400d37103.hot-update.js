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

/***/ "(app-pages-browser)/./src/app/signinwithgoogle.js":
/*!*************************************!*\
  !*** ./src/app/signinwithgoogle.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Auth: function() { return /* binding */ Auth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../firebaseConfig */ \"(app-pages-browser)/./firebaseConfig.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-cookie */ \"(app-pages-browser)/../../node_modules/universal-cookie/es6/index.js\");\n\n\n\n\n\nconst cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nconst Auth = (param)=>{\n    let { setIsAuth } = param;\n    const signInWithGoogle = async ()=>{\n        try {\n            const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__.auth, _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__.provider);\n            cookies.set(\"auth-token\", result.user.refreshToken);\n            setIsAuth(true);\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"auth\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: signInWithGoogle,\n            children: \" Sign In \"\n        }, void 0, false, {\n            fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/signinwithgoogle.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/agathiyann/twitter-clone/twitter-clone/src/app/signinwithgoogle.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Auth;\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbmlud2l0aGdvb2dsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0Q7QUFDTjtBQUNXO0FBRXBCO0FBRXZDLE1BQU1LLFVBQVUsSUFBSUQsd0RBQU9BO0FBRXBCLE1BQU1FLE9BQU87UUFBQyxFQUFFQyxTQUFTLEVBQUU7SUFDaEMsTUFBTUMsbUJBQW1CO1FBQ3ZCLElBQUk7WUFDRixNQUFNQyxTQUFTLE1BQU1QLDhEQUFlQSxDQUFDRixpREFBSUEsRUFBRUMscURBQVFBO1lBQ25ESSxRQUFRSyxHQUFHLENBQUMsY0FBY0QsT0FBT0UsSUFBSSxDQUFDQyxZQUFZO1lBQ2xETCxVQUFVO1FBQ1osRUFBRSxPQUFPTSxLQUFLO1lBQ1pDLFFBQVFDLEtBQUssQ0FBQ0Y7UUFDaEI7SUFDRjtJQUNBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFPQyxTQUFTWDtzQkFBa0I7Ozs7Ozs7Ozs7O0FBR3pDLEVBQUU7S0FmV0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zaWduaW53aXRoZ29vZ2xlLmpzPzdkZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aCwgcHJvdmlkZXIgfSBmcm9tIFwiLi4vLi4vZmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCB7IHNpZ25JbldpdGhQb3B1cCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5cbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XG5cbmNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuXG5leHBvcnQgY29uc3QgQXV0aCA9ICh7IHNldElzQXV0aCB9KSA9PiB7XG4gIGNvbnN0IHNpZ25JbldpdGhHb29nbGUgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcik7XG4gICAgICBjb29raWVzLnNldChcImF1dGgtdG9rZW5cIiwgcmVzdWx0LnVzZXIucmVmcmVzaFRva2VuKTtcbiAgICAgIHNldElzQXV0aCh0cnVlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoXCI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NpZ25JbldpdGhHb29nbGV9PiBTaWduIEluIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJhdXRoIiwicHJvdmlkZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsIkNvb2tpZXMiLCJjb29raWVzIiwiQXV0aCIsInNldElzQXV0aCIsInNpZ25JbldpdGhHb29nbGUiLCJyZXN1bHQiLCJzZXQiLCJ1c2VyIiwicmVmcmVzaFRva2VuIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signinwithgoogle.js\n"));

/***/ })

});