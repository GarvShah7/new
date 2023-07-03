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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _Common_AllBlogPostsSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Common/AllBlogPostsSection */ \"./components/Common/AllBlogPostsSection/index.tsx\");\n/* harmony import */ var _Common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Common/Button */ \"./components/Common/Button/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst HomeBlogSection = (param)=>{\n    let { block , extraProps  } = param;\n    const { mainTitle , subtitle , button , sectionTheme , _key  } = block || {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"homeBlogSection\", sectionTheme !== null && sectionTheme !== void 0 ? sectionTheme : \"bg-white\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container max-w-[1440px] w-[90%] mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"homeBlogSectionContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sectionInfo\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"section--Title color-black\",\n                                children: mainTitle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"section--subTitle color-black\",\n                                children: subtitle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"postGrid gridBox col3\",\n                        children: extraProps === null || extraProps === void 0 ? void 0 : extraProps.map((item, index)=>{\n                            const { slug  } = item || {};\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"postBox\",\n                                    children: item && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Common_AllBlogPostsSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        item: item\n                                    }, _key, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 30\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 17\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"seeAllBtn text-center\",\n                        children: button && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Common_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            block: button\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 24\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeBlogSection\\\\index.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_c = HomeBlogSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeBlogSection);\nvar _c;\n$RefreshReg$(_c, \"HomeBlogSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWVQYWdlL0hvbWVCbG9nU2VjdGlvbi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0I7QUFNb0M7QUFDbkI7QUFDZjtBQUMxQixNQUFNSSxrQkFHRDtRQUFDLEVBQUVDLE1BQUssRUFBRUMsV0FBVSxFQUFFO0lBQ3pCLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxTQUFRLEVBQUVDLE9BQU0sRUFBRUMsYUFBWSxFQUFJQyxLQUFJLEVBQUMsR0FBR04sU0FBUyxDQUFDO0lBRXZFLHFCQUNFLDhEQUFDTztRQUFRQyxXQUFXYixnREFBSUEsQ0FBQyxtQkFBbUJVLHlCQUFBQSwwQkFBQUEsZUFBZ0I7a0JBQzFELDRFQUFDSTtZQUFJRCxXQUFVO3NCQUNiLDRFQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUdGLFdBQVU7MENBQThCTjs7Ozs7OzBDQUM1Qyw4REFBQ1M7Z0NBQUdILFdBQVU7MENBQWlDTDs7Ozs7Ozs7Ozs7O2tDQUVqRCw4REFBQ007d0JBQUlELFdBQVU7a0NBQ1pQLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWVcsSUFBSSxDQUFDQyxNQUFNQzs0QkFDdEIsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBR0YsUUFBUSxDQUFDOzRCQUMxQixxQkFDRSw4REFBQ2YsdURBQWNrQjswQ0FDYiw0RUFBQ1A7b0NBQUlELFdBQVU7OENBQ1pLLHNCQUFRLDhEQUFDakIsbUVBQVlBO3dDQUFDaUIsTUFBTUE7dUNBQVdQOzs7Ozs7Ozs7Ozs7Ozs7d0JBSWhEOzs7Ozs7a0NBRUYsOERBQUNHO3dCQUFJRCxXQUFVO2tDQUNaSix3QkFBVSw4REFBQ1Asc0RBQU1BOzRCQUFDRyxPQUFPSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRDO0tBakNNTDtBQW1DTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWVQYWdlL0hvbWVCbG9nU2VjdGlvbi9pbmRleC50c3g/NzU1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHtcbiAgQmxvZ0lubmVyRnJhZ21lbnQsXG4gIEhvbWVCbG9nU2VjdGlvbkZyYWdtZW50LFxufSBmcm9tIFwiLi4vLi4vLi4vYXBwL2FwaS9nZW5lcmF0ZWQvZ3JhcGhxbC9ncmFwaHFsXCI7XG5cbmltcG9ydCBBbGxCbG9nUG9zdHMgZnJvbSBcIi4uLy4uL0NvbW1vbi9BbGxCbG9nUG9zdHNTZWN0aW9uXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9Db21tb24vQnV0dG9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5jb25zdCBIb21lQmxvZ1NlY3Rpb246IFJlYWN0LkZDPHtcbiAgYmxvY2s6IEhvbWVCbG9nU2VjdGlvbkZyYWdtZW50O1xuICBleHRyYVByb3BzPzogQmxvZ0lubmVyRnJhZ21lbnRbXTtcbn0+ID0gKHsgYmxvY2ssIGV4dHJhUHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IG1haW5UaXRsZSwgc3VidGl0bGUsIGJ1dHRvbiwgc2VjdGlvblRoZW1lICAsIF9rZXl9ID0gYmxvY2sgfHwge307XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Nsc3goXCJob21lQmxvZ1NlY3Rpb25cIiwgc2VjdGlvblRoZW1lID8/IFwiYmctd2hpdGVcIil9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWF4LXctWzE0NDBweF0gdy1bOTAlXSBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZUJsb2dTZWN0aW9uQ29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbkluZm9cIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzZWN0aW9uLS1UaXRsZSBjb2xvci1ibGFja1wiPnttYWluVGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLS1zdWJUaXRsZSBjb2xvci1ibGFja1wiPntzdWJ0aXRsZX08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdEdyaWQgZ3JpZEJveCBjb2wzXCI+XG4gICAgICAgICAgICB7ZXh0cmFQcm9wcz8ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHNsdWcgfSA9IGl0ZW0gfHwge307XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0Qm94XCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtICYmIDxBbGxCbG9nUG9zdHMgaXRlbT17aXRlbX0ga2V5PXtfa2V5fSAvPn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlZUFsbEJ0biB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAge2J1dHRvbiAmJiA8QnV0dG9uIGJsb2NrPXtidXR0b259IC8+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVCbG9nU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJjbHN4IiwiQWxsQmxvZ1Bvc3RzIiwiQnV0dG9uIiwiUmVhY3QiLCJIb21lQmxvZ1NlY3Rpb24iLCJibG9jayIsImV4dHJhUHJvcHMiLCJtYWluVGl0bGUiLCJzdWJ0aXRsZSIsImJ1dHRvbiIsInNlY3Rpb25UaGVtZSIsIl9rZXkiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJoMyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNsdWciLCJGcmFnbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/HomePage/HomeBlogSection/index.tsx\n"));

/***/ })

});