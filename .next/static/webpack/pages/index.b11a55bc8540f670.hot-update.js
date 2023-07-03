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

/***/ "./components/HomePage/HomeBlogSection/index.tsx":
/*!*******************************************************!*\
  !*** ./components/HomePage/HomeBlogSection/index.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _Common_AllBlogPostsSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Common/AllBlogPostsSection */ \"./components/Common/AllBlogPostsSection/index.tsx\");\n/* harmony import */ var _Common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Common/Button */ \"./components/Common/Button/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst HomeBlogSection = (param)=>{\n    let { block , extraProps  } = param;\n    const { mainTitle , subtitle , button , sectionTheme  } = block || {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"homeBlogSection\", sectionTheme !== null && sectionTheme !== void 0 ? sectionTheme : \"bg-white\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container max-w-[1440px] w-[90%] mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"homeBlogSectionContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sectionInfo\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"section--Title color-black\",\n                                children: mainTitle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"section--subTitle color-black\",\n                                children: subtitle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"postGrid gridBox col3\",\n                        children: extraProps === null || extraProps === void 0 ? void 0 : extraProps.map((item, index)=>{\n                            const { slug  } = item || {};\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"postBox\",\n                                    children: item && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Common_AllBlogPostsSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        item: item,\n                                        pr: true\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 30\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 17\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"seeAllBtn text-center\",\n                        children: button && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Common_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            block: button\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 24\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_c = HomeBlogSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeBlogSection);\nvar _c;\n$RefreshReg$(_c, \"HomeBlogSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWVQYWdlL0hvbWVCbG9nU2VjdGlvbi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0I7QUFNb0M7QUFDbkI7QUFDZjtBQUMxQixNQUFNSSxrQkFHRDtRQUFDLEVBQUVDLE1BQUssRUFBRUMsV0FBVSxFQUFFO0lBQ3pCLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxTQUFRLEVBQUVDLE9BQU0sRUFBRUMsYUFBWSxFQUFFLEdBQUdMLFNBQVMsQ0FBQztJQUVoRSxxQkFDRSw4REFBQ007UUFBUUMsV0FBV1osZ0RBQUlBLENBQUMsbUJBQW1CVSx5QkFBQUEsMEJBQUFBLGVBQWdCO2tCQUMxRCw0RUFBQ0c7WUFBSUQsV0FBVTtzQkFDYiw0RUFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFHRixXQUFVOzBDQUE4Qkw7Ozs7OzswQ0FDNUMsOERBQUNRO2dDQUFHSCxXQUFVOzBDQUFpQ0o7Ozs7Ozs7Ozs7OztrQ0FFakQsOERBQUNLO3dCQUFJRCxXQUFVO2tDQUNaTix1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVlVLElBQUksQ0FBQ0MsTUFBTUM7NEJBQ3RCLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUdGLFFBQVEsQ0FBQzs0QkFDMUIscUJBQ0UsOERBQUNkLHVEQUFjaUI7MENBQ2IsNEVBQUNQO29DQUFJRCxXQUFVOzhDQUNaSyxzQkFBUSw4REFBQ2hCLG1FQUFZQTt3Q0FBRWdCLE1BQU1BO3dDQUFrQkksRUFBRTt1Q0FBVEg7Ozs7Ozs7Ozs7Ozs7Ozt3QkFJakQ7Ozs7OztrQ0FFRiw4REFBQ0w7d0JBQUlELFdBQVU7a0NBQ1pILHdCQUFVLDhEQUFDUCxzREFBTUE7NEJBQUNHLE9BQU9JOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEM7S0FqQ01MO0FBbUNOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9tZVBhZ2UvSG9tZUJsb2dTZWN0aW9uL2luZGV4LnRzeD83NTU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQge1xuICBCbG9nSW5uZXJGcmFnbWVudCxcbiAgSG9tZUJsb2dTZWN0aW9uRnJhZ21lbnQsXG59IGZyb20gXCIuLi8uLi8uLi9hcHAvYXBpL2dlbmVyYXRlZC9ncmFwaHFsL2dyYXBocWxcIjtcblxuaW1wb3J0IEFsbEJsb2dQb3N0cyBmcm9tIFwiLi4vLi4vQ29tbW9uL0FsbEJsb2dQb3N0c1NlY3Rpb25cIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL0NvbW1vbi9CdXR0b25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IEhvbWVCbG9nU2VjdGlvbjogUmVhY3QuRkM8e1xuICBibG9jazogSG9tZUJsb2dTZWN0aW9uRnJhZ21lbnQ7XG4gIGV4dHJhUHJvcHM/OiBCbG9nSW5uZXJGcmFnbWVudFtdO1xufT4gPSAoeyBibG9jaywgZXh0cmFQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgbWFpblRpdGxlLCBzdWJ0aXRsZSwgYnV0dG9uLCBzZWN0aW9uVGhlbWUgfSA9IGJsb2NrIHx8IHt9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbHN4KFwiaG9tZUJsb2dTZWN0aW9uXCIsIHNlY3Rpb25UaGVtZSA/PyBcImJnLXdoaXRlXCIpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1heC13LVsxNDQwcHhdIHctWzkwJV0gbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVCbG9nU2VjdGlvbkNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25JbmZvXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2VjdGlvbi0tVGl0bGUgY29sb3ItYmxhY2tcIj57bWFpblRpdGxlfTwvaDI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2VjdGlvbi0tc3ViVGl0bGUgY29sb3ItYmxhY2tcIj57c3VidGl0bGV9PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RHcmlkIGdyaWRCb3ggY29sM1wiPlxuICAgICAgICAgICAge2V4dHJhUHJvcHM/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBzbHVnIH0gPSBpdGVtIHx8IHt9O1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdEJveFwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbSAmJiA8QWxsQmxvZ1Bvc3RzICBpdGVtPXtpdGVtfSBrZXk9e2luZGV4fSBwciAgLz59XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWVBbGxCdG4gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIHtidXR0b24gJiYgPEJ1dHRvbiBibG9jaz17YnV0dG9ufSAvPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lQmxvZ1NlY3Rpb247XG4iXSwibmFtZXMiOlsiY2xzeCIsIkFsbEJsb2dQb3N0cyIsIkJ1dHRvbiIsIlJlYWN0IiwiSG9tZUJsb2dTZWN0aW9uIiwiYmxvY2siLCJleHRyYVByb3BzIiwibWFpblRpdGxlIiwic3VidGl0bGUiLCJidXR0b24iLCJzZWN0aW9uVGhlbWUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJoMyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNsdWciLCJGcmFnbWVudCIsInByIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HomePage/HomeBlogSection/index.tsx\n"));

/***/ })

});