"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_Header_ServicesNavabar_index_tsx"],{

/***/ "./components/Header/ServicesNavabar/index.tsx":
/*!*****************************************************!*\
  !*** ./components/Header/ServicesNavabar/index.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Common_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Common/Image */ \"./components/Common/Image/index.tsx\");\n/* harmony import */ var _Common_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Common/Link */ \"./components/Common/Link/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ServicesNavbar = (param)=>{\n    let { block  } = param;\n    var _block_data;\n    _s();\n    const [isLinkActive, setLinkActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const linkClass = ()=>{\n        setLinkActive(!isLinkActive);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dropdownBoxTitle\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: block === null || block === void 0 ? void 0 : block.label\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\ServicesNavabar\\\\index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\ServicesNavabar\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"dropdownLinkGrid\",\n                children: block === null || block === void 0 ? void 0 : (_block_data = block.data) === null || _block_data === void 0 ? void 0 : _block_data.map((item, index)=>{\n                    const { slug , logo , title  } = item || {};\n                    const { current  } = slug || {};\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Common_Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            to: current,\n                            onClick: linkClass,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"logoIcon\",\n                                    children: logo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Common_Image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        block: logo,\n                                        priority: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\ServicesNavabar\\\\index.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 28\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\ServicesNavabar\\\\index.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\ServicesNavabar\\\\index.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\ServicesNavabar\\\\index.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 15\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\ServicesNavabar\\\\index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\ServicesNavabar\\\\index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\ServicesNavabar\\\\index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ServicesNavbar, \"79a3vKqG99Jc0aVaZhoXvaiV6nk=\");\n_c = ServicesNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = react__WEBPACK_IMPORTED_MODULE_1___default().memo(ServicesNavbar));\nvar _c, _c1;\n$RefreshReg$(_c, \"ServicesNavbar\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9TZXJ2aWNlc05hdmFiYXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ087QUFFTTtBQUNGO0FBS3JDLE1BQU1JLGlCQUVEO1FBQUMsRUFBRUMsTUFBSyxFQUFFO1FBV05BOztJQVZQLE1BQU0sQ0FBQ0MsY0FBY0MsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNTyxZQUFZO1FBQ2hCRCxjQUFjLENBQUNEO0lBQ2pCO0lBQ0EscUJBQ0UsOERBQUNOLHVEQUFjUzs7MEJBQ2IsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQzs4QkFBSVAsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPUTs7Ozs7Ozs7Ozs7MEJBRWQsOERBQUNDO2dCQUFHSCxXQUFVOzBCQUNYTixrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLGNBQUFBLE1BQU9VLGtCQUFQVix5QkFBQUEsS0FBQUEsSUFBQUEsWUFBYVcsSUFBSSxDQUFDQyxNQUFNQztvQkFDdkIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdKLFFBQVEsQ0FBQztvQkFDdkMsTUFBTSxFQUFFSyxRQUFPLEVBQUUsR0FBR0gsUUFBUSxDQUFDO29CQUM3QixxQkFDRSw4REFBQ0k7a0NBQ0MsNEVBQUNwQixvREFBSUE7NEJBQUNxQixJQUFJRjs0QkFBU0csU0FBU2pCOzs4Q0FDMUIsOERBQUNFO29DQUFJQyxXQUFVOzhDQUNaUyxzQkFBUSw4REFBQ2xCLHFEQUFLQTt3Q0FBQ0csT0FBT2U7d0NBQU1NLFFBQVE7Ozs7Ozs7Ozs7OzhDQUV2Qyw4REFBQ0M7OENBQU1OOzs7Ozs7Ozs7Ozs7dUJBTEZIOzs7OztnQkFTYjs7Ozs7Ozs7Ozs7O0FBSVI7R0E5Qk1kO0tBQUFBO0FBK0JOLGtGQUFlSixpREFBVTRCLENBQUN4QixlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL1NlcnZpY2VzTmF2YWJhci9pbmRleC50c3g/MmY1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSG9tZU5hdlNlcnZpY2VzRnJhZ21lbnQgfSBmcm9tIFwiLi4vLi4vLi4vYXBwL2FwaS9nZW5lcmF0ZWQvZ3JhcGhxbC9ncmFwaHFsXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4uLy4uL0NvbW1vbi9JbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uLy4uL0NvbW1vbi9MaW5rXCI7XG5leHBvcnQgdHlwZSBTZXJ2aWNlc05hdmJhckZyYWdtZW50ID0ge1xuICBsYWJlbDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgZGF0YTogSG9tZU5hdlNlcnZpY2VzRnJhZ21lbnRbXSB8IHVuZGVmaW5lZDtcbn07XG5jb25zdCBTZXJ2aWNlc05hdmJhcjogUmVhY3QuRkM8e1xuICBibG9jazogU2VydmljZXNOYXZiYXJGcmFnbWVudDtcbn0+ID0gKHsgYmxvY2sgfSkgPT4ge1xuICBjb25zdCBbaXNMaW5rQWN0aXZlLCBzZXRMaW5rQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbGlua0NsYXNzID0gKCkgPT4ge1xuICAgIHNldExpbmtBY3RpdmUoIWlzTGlua0FjdGl2ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bkJveFRpdGxlXCI+XG4gICAgICAgIDxoND57YmxvY2s/LmxhYmVsfTwvaDQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bkxpbmtHcmlkXCI+XG4gICAgICAgIHtibG9jaz8uZGF0YT8ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgc2x1ZywgbG9nbywgdGl0bGUgfSA9IGl0ZW0gfHwge307XG4gICAgICAgICAgY29uc3QgeyBjdXJyZW50IH0gPSBzbHVnIHx8IHt9O1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtjdXJyZW50fSBvbkNsaWNrPXtsaW5rQ2xhc3N9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb0ljb25cIj5cbiAgICAgICAgICAgICAgICAgIHtsb2dvICYmIDxJbWFnZSBibG9jaz17bG9nb30gcHJpb3JpdHkgLz59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNlcnZpY2VzTmF2YmFyKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJMaW5rIiwiU2VydmljZXNOYXZiYXIiLCJibG9jayIsImlzTGlua0FjdGl2ZSIsInNldExpbmtBY3RpdmUiLCJsaW5rQ2xhc3MiLCJGcmFnbWVudCIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwibGFiZWwiLCJ1bCIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzbHVnIiwibG9nbyIsInRpdGxlIiwiY3VycmVudCIsImxpIiwidG8iLCJvbkNsaWNrIiwicHJpb3JpdHkiLCJzcGFuIiwibWVtbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/ServicesNavabar/index.tsx\n"));

/***/ })

}]);