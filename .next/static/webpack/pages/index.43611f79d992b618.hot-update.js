"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/HomePage/HomeServicesSection/index.tsx":
/*!***********************************************************!*\
  !*** ./components/HomePage/HomeServicesSection/index.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _ServiceDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServiceDetails */ \"./components/HomePage/HomeServicesSection/ServiceDetails/index.tsx\");\n/* harmony import */ var _Common_TitleSubtitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Common/TitleSubtitle */ \"./components/Common/TitleSubtitle/index.tsx\");\n\n\n\n\nconst HomeServicesSection = (param)=>{\n    let { block  } = param;\n    const { titleSubtitle , servicesDetails , sectionTheme , serviceDetailsColumn , withoutNumber  } = block || {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"serviceSection sectionInnerSpace py-[8.125em]\", sectionTheme !== null && sectionTheme !== void 0 ? sectionTheme : \"bg-white\", serviceDetailsColumn !== null && serviceDetailsColumn !== void 0 ? serviceDetailsColumn : \"three\", withoutNumber ? \"withoutNumber\" : \"withNumber\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container max-w-[1440px] w-[90%] mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-Montserrat text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sectionInfo pb-[4.375em]\",\n                        children: titleSubtitle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Common_TitleSubtitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            block: titleSubtitle\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeServicesSection\\\\index.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 31\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeServicesSection\\\\index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"serviceList gridBox col\".concat(serviceDetailsColumn, \" pl-[6.5em] grid grid-cols-3 gap-[1.875em]\")),\n                        children: servicesDetails === null || servicesDetails === void 0 ? void 0 : servicesDetails.map((details, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: details && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ServiceDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    block: details\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeServicesSection\\\\index.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 31\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeServicesSection\\\\index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 17\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeServicesSection\\\\index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeServicesSection\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeServicesSection\\\\index.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeServicesSection\\\\index.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = HomeServicesSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeServicesSection);\nvar _c;\n$RefreshReg$(_c, \"HomeServicesSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWVQYWdlL0hvbWVTZXJ2aWNlc1NlY3Rpb24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3QjtBQUV1QjtBQUNRO0FBQ3ZELE1BQU1HLHNCQUF3RTtRQUFDLEVBQzdFQyxNQUFLLEVBQ047SUFDQyxNQUFNLEVBQ0pDLGNBQWEsRUFDYkMsZ0JBQWUsRUFDZkMsYUFBWSxFQUNaQyxxQkFBb0IsRUFDcEJDLGNBQWEsRUFDZCxHQUFHTCxTQUFTLENBQUM7SUFDZCxxQkFDRSw4REFBQ007UUFDQ0MsV0FBV1gsZ0RBQUlBLENBQ2IsaURBQ0FPLHlCQUFBQSwwQkFBQUEsZUFBZ0IsWUFDaEJDLGlDQUFBQSxrQ0FBQUEsdUJBQXdCLFNBQ3hCQyxnQkFBZ0Isa0JBQWtCO2tCQUdwQyw0RUFBQ0c7WUFBSUQsV0FBVTtzQkFDYiw0RUFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDWk4sK0JBQWlCLDhEQUFDSCw2REFBYUE7NEJBQUNFLE9BQU9DOzs7Ozs7Ozs7OztrQ0FFMUMsOERBQUNRO3dCQUNDRixXQUFXWCxnREFBSUEsQ0FDYiwwQkFBK0MsT0FBckJRLHNCQUFxQjtrQ0FHaERGLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCUSxJQUFJLENBQUNDLFNBQVNDOzRCQUM5QixxQkFDRSw4REFBQ0M7MENBQ0VGLHlCQUFXLDhEQUFDZCx1REFBZUE7b0NBQUNHLE9BQU9XO21DQUFjQzs7Ozs7K0JBRDNDQTs7Ozs7d0JBSWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWjtLQXpDTWI7QUEyQ04sK0RBQWVBLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWVQYWdlL0hvbWVTZXJ2aWNlc1NlY3Rpb24vaW5kZXgudHN4PzdlMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IEhvbWVTZXJ2aWNlc1NlY3Rpb25GcmFnbWVudCB9IGZyb20gXCIuLi8uLi8uLi9hcHAvYXBpL2dlbmVyYXRlZC9ncmFwaHFsL2dyYXBocWxcIjtcbmltcG9ydCBTZXJ2aWNlc0RldGFpbHMgZnJvbSBcIi4vU2VydmljZURldGFpbHNcIjtcbmltcG9ydCBUaXRsZVN1YnRpdGxlIGZyb20gXCIuLi8uLi9Db21tb24vVGl0bGVTdWJ0aXRsZVwiO1xuY29uc3QgSG9tZVNlcnZpY2VzU2VjdGlvbjogUmVhY3QuRkM8eyBibG9jazogSG9tZVNlcnZpY2VzU2VjdGlvbkZyYWdtZW50IH0+ID0gKHtcbiAgYmxvY2ssXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZVN1YnRpdGxlLFxuICAgIHNlcnZpY2VzRGV0YWlscyxcbiAgICBzZWN0aW9uVGhlbWUsXG4gICAgc2VydmljZURldGFpbHNDb2x1bW4sXG4gICAgd2l0aG91dE51bWJlcixcbiAgfSA9IGJsb2NrIHx8IHt9O1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgIFwic2VydmljZVNlY3Rpb24gc2VjdGlvbklubmVyU3BhY2UgcHktWzguMTI1ZW1dXCIsXG4gICAgICAgIHNlY3Rpb25UaGVtZSA/PyBcImJnLXdoaXRlXCIsXG4gICAgICAgIHNlcnZpY2VEZXRhaWxzQ29sdW1uID8/IFwidGhyZWVcIixcbiAgICAgICAgd2l0aG91dE51bWJlciA/IFwid2l0aG91dE51bWJlclwiIDogXCJ3aXRoTnVtYmVyXCJcbiAgICAgICl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWF4LXctWzE0NDBweF0gdy1bOTAlXSBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1Nb250c2VycmF0IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25JbmZvIHBiLVs0LjM3NWVtXVwiPlxuICAgICAgICAgICAge3RpdGxlU3VidGl0bGUgJiYgPFRpdGxlU3VidGl0bGUgYmxvY2s9e3RpdGxlU3VidGl0bGV9IC8+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICBgc2VydmljZUxpc3QgZ3JpZEJveCBjb2wke3NlcnZpY2VEZXRhaWxzQ29sdW1ufSBwbC1bNi41ZW1dIGdyaWQgZ3JpZC1jb2xzLTMgZ2FwLVsxLjg3NWVtXWBcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlcnZpY2VzRGV0YWlscz8ubWFwKChkZXRhaWxzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIHtkZXRhaWxzICYmIDxTZXJ2aWNlc0RldGFpbHMgYmxvY2s9e2RldGFpbHN9IGtleT17aW5kZXh9IC8+fVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVTZXJ2aWNlc1NlY3Rpb247XG4iXSwibmFtZXMiOlsiY2xzeCIsIlNlcnZpY2VzRGV0YWlscyIsIlRpdGxlU3VidGl0bGUiLCJIb21lU2VydmljZXNTZWN0aW9uIiwiYmxvY2siLCJ0aXRsZVN1YnRpdGxlIiwic2VydmljZXNEZXRhaWxzIiwic2VjdGlvblRoZW1lIiwic2VydmljZURldGFpbHNDb2x1bW4iLCJ3aXRob3V0TnVtYmVyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInVsIiwibWFwIiwiZGV0YWlscyIsImluZGV4IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HomePage/HomeServicesSection/index.tsx\n"));

/***/ })

});