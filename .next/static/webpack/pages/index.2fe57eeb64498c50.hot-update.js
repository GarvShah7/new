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

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst NavOpen = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"components_Header_NavOpen_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./NavOpen */ \"./components/Header/NavOpen/index.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\components\\\\Header\\\\index.tsx -> \" + \"./NavOpen\"\n        ]\n    }\n});\n_c = NavOpen;\nconst NavClose = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"components_Header_NavClose_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./NavClose */ \"./components/Header/NavClose/index.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\components\\\\Header\\\\index.tsx -> \" + \"./NavClose\"\n        ]\n    }\n});\n_c1 = NavClose;\nconst Header = (param)=>{\n    let { block , footer , allServicesTypes , servicesPage , hireDedicatedType , hireDedicatedPages  } = param;\n    _s();\n    const { sectionTheme  } = block || {};\n    const [navOpen, setNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const openNav = (val)=>{\n        ss;\n        setNavOpen(val);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"block bg-black\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"headerSection\", sectionTheme !== null && sectionTheme !== void 0 ? sectionTheme : \"bg-white\"),\n            children: [\n                !navOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavOpen, {\n                    onClickOpenNav: openNav,\n                    hireDedicatedPages: hireDedicatedPages,\n                    hireDedicatedType: hireDedicatedType,\n                    servicesPage: servicesPage,\n                    allServicesTypes: allServicesTypes,\n                    block: block\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, undefined),\n                navOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavClose, {\n                    block: block,\n                    onClickOpenNav: openNav,\n                    footer: footer\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\index.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\index.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"YGneQoONAXyKf8WW6+F1a9gYRoM=\");\n_c2 = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c3 = react__WEBPACK_IMPORTED_MODULE_2___default().memo(Header));\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"NavOpen\");\n$RefreshReg$(_c1, \"NavClose\");\n$RefreshReg$(_c2, \"Header\");\n$RefreshReg$(_c3, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBT3dCO0FBQ1M7QUFDUDtBQUNTO0FBQ25DLE1BQU1JLFVBQVVELG1EQUFPQSxDQUFDLElBQU0sMExBQW1COzs7Ozs7O0tBQTNDQztBQUNOLE1BQU1DLFdBQVdGLG1EQUFPQSxDQUFDLElBQU0sNkxBQW9COzs7Ozs7O01BQTdDRTtBQVdOLE1BQU1DLFNBQWdDO1FBQUMsRUFDckNDLE1BQUssRUFDTEMsT0FBTSxFQUNOQyxpQkFBZ0IsRUFDaEJDLGFBQVksRUFDWkMsa0JBQWlCLEVBQ2pCQyxtQkFBa0IsRUFDbkI7O0lBQ0MsTUFBTSxFQUFFQyxhQUFZLEVBQUUsR0FBR04sU0FBUyxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNZSxVQUFVLENBQUNDO1FBQ2pCQztRQUNFSCxXQUFXRTtJQUNiO0lBQ0EscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQU9ELFdBQVdwQixnREFBSUEsQ0FBQyxpQkFBaUJhLHlCQUFBQSwwQkFBQUEsZUFBZ0I7O2dCQUN0RCxDQUFDQyx5QkFDQSw4REFBQ1Y7b0JBQ0NrQixnQkFBZ0JOO29CQUNoQkosb0JBQW9CQTtvQkFDcEJELG1CQUFtQkE7b0JBQ25CRCxjQUFjQTtvQkFDZEQsa0JBQWtCQTtvQkFDbEJGLE9BQU9BOzs7Ozs7Z0JBR1ZPLHlCQUNDLDhEQUFDVDtvQkFBU0UsT0FBT0E7b0JBQU9lLGdCQUFnQk47b0JBQVNSLFFBQVFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtuRTtHQWpDTUY7TUFBQUE7QUFtQ04sa0ZBQWVKLGlEQUFVcUIsQ0FBQ2pCLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4P2YyYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRm9vdGVyRnJhZ21lbnQsXG4gIEhlYWRlckZyYWdtZW50LFxuICBIaXJlRGVkaWNhdGVkUGFnZVR5cGVzRnJhZ21lbnQsXG4gIEhvbWVOYXZTZXJ2aWNlc0ZyYWdtZW50LFxuICBTZXJ2aWNlVHlwZUZyYWdtZW50LFxufSBmcm9tIFwiLi4vLi4vYXBwL2FwaS9nZW5lcmF0ZWQvZ3JhcGhxbC9ncmFwaHFsXCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmNvbnN0IE5hdk9wZW4gPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4vTmF2T3BlblwiKSk7XG5jb25zdCBOYXZDbG9zZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9OYXZDbG9zZVwiKSk7XG5cbmV4cG9ydCB0eXBlIEhlYWRlclByb3BzID0ge1xuICBibG9jaz86IEhlYWRlckZyYWdtZW50O1xuICBmb290ZXI/OiBGb290ZXJGcmFnbWVudDtcbiAgYWxsU2VydmljZXNUeXBlcz86IFNlcnZpY2VUeXBlRnJhZ21lbnRbXTtcbiAgc2VydmljZXNQYWdlPzogSG9tZU5hdlNlcnZpY2VzRnJhZ21lbnRbXTtcbiAgaGlyZURlZGljYXRlZFR5cGU/OiBIaXJlRGVkaWNhdGVkUGFnZVR5cGVzRnJhZ21lbnRbXTtcbiAgaGlyZURlZGljYXRlZFBhZ2VzPzogSG9tZU5hdlNlcnZpY2VzRnJhZ21lbnRbXTtcbn07XG5cbmNvbnN0IEhlYWRlcjogUmVhY3QuRkM8SGVhZGVyUHJvcHM+ID0gKHtcbiAgYmxvY2ssXG4gIGZvb3RlcixcbiAgYWxsU2VydmljZXNUeXBlcyxcbiAgc2VydmljZXNQYWdlLFxuICBoaXJlRGVkaWNhdGVkVHlwZSxcbiAgaGlyZURlZGljYXRlZFBhZ2VzLFxufSkgPT4ge1xuICBjb25zdCB7IHNlY3Rpb25UaGVtZSB9ID0gYmxvY2sgfHwge307XG4gIGNvbnN0IFtuYXZPcGVuLCBzZXROYXZPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb3Blbk5hdiA9ICh2YWw6IGJvb2xlYW4pID0+IHtcbiAgc3NcbiAgICBzZXROYXZPcGVuKHZhbCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBiZy1ibGFja1wiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Nsc3goXCJoZWFkZXJTZWN0aW9uXCIsIHNlY3Rpb25UaGVtZSA/PyBcImJnLXdoaXRlXCIpfT5cbiAgICAgICAgeyFuYXZPcGVuICYmIChcbiAgICAgICAgICA8TmF2T3BlblxuICAgICAgICAgICAgb25DbGlja09wZW5OYXY9e29wZW5OYXZ9XG4gICAgICAgICAgICBoaXJlRGVkaWNhdGVkUGFnZXM9e2hpcmVEZWRpY2F0ZWRQYWdlc31cbiAgICAgICAgICAgIGhpcmVEZWRpY2F0ZWRUeXBlPXtoaXJlRGVkaWNhdGVkVHlwZX1cbiAgICAgICAgICAgIHNlcnZpY2VzUGFnZT17c2VydmljZXNQYWdlfVxuICAgICAgICAgICAgYWxsU2VydmljZXNUeXBlcz17YWxsU2VydmljZXNUeXBlc31cbiAgICAgICAgICAgIGJsb2NrPXtibG9ja31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7bmF2T3BlbiAmJiAoXG4gICAgICAgICAgPE5hdkNsb3NlIGJsb2NrPXtibG9ja30gb25DbGlja09wZW5OYXY9e29wZW5OYXZ9IGZvb3Rlcj17Zm9vdGVyfSAvPlxuICAgICAgICApfVxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEhlYWRlcik7XG4iXSwibmFtZXMiOlsiY2xzeCIsInVzZVN0YXRlIiwiUmVhY3QiLCJkeW5hbWljIiwiTmF2T3BlbiIsIk5hdkNsb3NlIiwiSGVhZGVyIiwiYmxvY2siLCJmb290ZXIiLCJhbGxTZXJ2aWNlc1R5cGVzIiwic2VydmljZXNQYWdlIiwiaGlyZURlZGljYXRlZFR5cGUiLCJoaXJlRGVkaWNhdGVkUGFnZXMiLCJzZWN0aW9uVGhlbWUiLCJuYXZPcGVuIiwic2V0TmF2T3BlbiIsIm9wZW5OYXYiLCJ2YWwiLCJzcyIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm9uQ2xpY2tPcGVuTmF2IiwibWVtbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n"));

/***/ })

});