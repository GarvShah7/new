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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst NavOpen = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(()=>__webpack_require__.e(/*! import() */ \"components_Header_NavOpen_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./NavOpen */ \"./components/Header/NavOpen/index.tsx\")));\n_c = NavOpen;\nconst NavClose = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(()=>__webpack_require__.e(/*! import() */ \"components_Header_NavClose_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./NavClose */ \"./components/Header/NavClose/index.tsx\")));\n_c1 = NavClose;\nconst Header = (param)=>{\n    let { block , footer , allServicesTypes , servicesPage , hireDedicatedType , hireDedicatedPages  } = param;\n    _s();\n    const { sectionTheme  } = block || {};\n    const [navOpen, setNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (navOpen) {\n            document.body.classList.add(\"modal-open\");\n        } else {\n            document.body.classList.remove(\"modal-open\");\n        }\n    }, [\n        navOpen\n    ]);\n    const openNav = (val)=>{\n        setNavOpen(val);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"block bg-black\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"headerSection\", sectionTheme !== null && sectionTheme !== void 0 ? sectionTheme : \"bg-white\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, void 0, void 0),\n                children: [\n                    !navOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavOpen, {\n                        onClickOpenNav: openNav,\n                        hireDedicatedPages: hireDedicatedPages,\n                        hireDedicatedType: hireDedicatedType,\n                        servicesPage: servicesPage,\n                        allServicesTypes: allServicesTypes,\n                        block: block\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, undefined),\n                    navOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavClose, {\n                        block: block,\n                        onClickOpenNav: openNav,\n                        footer: footer\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\index.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\index.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\index.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"wpBg+qSf/rOVk1Pjbaq/wtOy2mM=\");\n_c2 = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c3 = react__WEBPACK_IMPORTED_MODULE_1___default().memo(Header));\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"NavOpen\");\n$RefreshReg$(_c1, \"NavClose\");\n$RefreshReg$(_c2, \"Header\");\n$RefreshReg$(_c3, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFtRTtBQUMzQztBQVN4QixNQUFNTSx3QkFBVUgsMkNBQUlBLENBQUMsSUFBTSwwTEFBbUI7S0FBeENHO0FBQ04sTUFBTUMseUJBQVdKLDJDQUFJQSxDQUFDLElBQU0sNkxBQW9CO01BQTFDSTtBQVdOLE1BQU1DLFNBQWdDO1FBQUMsRUFDckNDLE1BQUssRUFDTEMsT0FBTSxFQUNOQyxpQkFBZ0IsRUFDaEJDLGFBQVksRUFDWkMsa0JBQWlCLEVBQ2pCQyxtQkFBa0IsRUFDbkI7O0lBQ0MsTUFBTSxFQUFFQyxhQUFZLEVBQUUsR0FBR04sU0FBUyxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHaEIsK0NBQVFBLENBQUM7SUFFdkNDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWMsU0FBUztZQUNYRSxTQUFTQyxLQUFLQyxVQUFVQyxJQUFJO1FBQzlCLE9BQU87WUFDTEgsU0FBU0MsS0FBS0MsVUFBVUUsT0FBTztRQUNqQztJQUNGLEdBQUc7UUFBQ047S0FBUTtJQUVaLE1BQU1PLFVBQVUsQ0FBQ0M7UUFDZlAsV0FBV087SUFDYjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFPRCxXQUFXckIsZ0RBQUlBLENBQUMsaUJBQWlCVSx5QkFBQUEsMEJBQUFBLGVBQWdCO3NCQUN2RCw0RUFBQ1gsMkNBQVFBO2dCQUFDd0Isd0JBQVUsOERBQUNIOzhCQUFJOzs7b0JBQ3RCLENBQUNULHlCQUNBLDhEQUFDVjt3QkFDQ3VCLGdCQUFnQk47d0JBQ2hCVCxvQkFBb0JBO3dCQUNwQkQsbUJBQW1CQTt3QkFDbkJELGNBQWNBO3dCQUNkRCxrQkFBa0JBO3dCQUNsQkYsT0FBT0E7Ozs7OztvQkFHVk8seUJBQ0MsOERBQUNUO3dCQUFTRSxPQUFPQTt3QkFBT29CLGdCQUFnQk47d0JBQVNiLFFBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJFO0dBNUNNRjtNQUFBQTtBQThDTixrRkFBZVIsaURBQVU4QixDQUFDdEIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/ZjJiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgbGF6eSwgU3VzcGVuc2UgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQge1xuICBGb290ZXJGcmFnbWVudCxcbiAgSGVhZGVyRnJhZ21lbnQsXG4gIEhpcmVEZWRpY2F0ZWRQYWdlVHlwZXNGcmFnbWVudCxcbiAgSG9tZU5hdlNlcnZpY2VzRnJhZ21lbnQsXG4gIFNlcnZpY2VUeXBlRnJhZ21lbnQsXG59IGZyb20gXCIuLi8uLi9hcHAvYXBpL2dlbmVyYXRlZC9ncmFwaHFsL2dyYXBocWxcIjtcblxuY29uc3QgTmF2T3BlbiA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi9OYXZPcGVuXCIpKTtcbmNvbnN0IE5hdkNsb3NlID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuL05hdkNsb3NlXCIpKTtcblxuZXhwb3J0IHR5cGUgSGVhZGVyUHJvcHMgPSB7XG4gIGJsb2NrPzogSGVhZGVyRnJhZ21lbnQ7XG4gIGZvb3Rlcj86IEZvb3RlckZyYWdtZW50O1xuICBhbGxTZXJ2aWNlc1R5cGVzPzogU2VydmljZVR5cGVGcmFnbWVudFtdO1xuICBzZXJ2aWNlc1BhZ2U/OiBIb21lTmF2U2VydmljZXNGcmFnbWVudFtdO1xuICBoaXJlRGVkaWNhdGVkVHlwZT86IEhpcmVEZWRpY2F0ZWRQYWdlVHlwZXNGcmFnbWVudFtdO1xuICBoaXJlRGVkaWNhdGVkUGFnZXM/OiBIb21lTmF2U2VydmljZXNGcmFnbWVudFtdO1xufTtcblxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxIZWFkZXJQcm9wcz4gPSAoe1xuICBibG9jayxcbiAgZm9vdGVyLFxuICBhbGxTZXJ2aWNlc1R5cGVzLFxuICBzZXJ2aWNlc1BhZ2UsXG4gIGhpcmVEZWRpY2F0ZWRUeXBlLFxuICBoaXJlRGVkaWNhdGVkUGFnZXMsXG59KSA9PiB7XG4gIGNvbnN0IHsgc2VjdGlvblRoZW1lIH0gPSBibG9jayB8fCB7fTtcbiAgY29uc3QgW25hdk9wZW4sIHNldE5hdk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG5hdk9wZW4pIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm1vZGFsLW9wZW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLW9wZW5cIik7XG4gICAgfVxuICB9LCBbbmF2T3Blbl0pO1xuXG4gIGNvbnN0IG9wZW5OYXYgPSAodmFsOiBib29sZWFuKSA9PiB7XG4gICAgc2V0TmF2T3Blbih2YWwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBiZy1ibGFja1wiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Nsc3goXCJoZWFkZXJTZWN0aW9uXCIsIHNlY3Rpb25UaGVtZSA/PyBcImJnLXdoaXRlXCIpfT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIHshbmF2T3BlbiAmJiAoXG4gICAgICAgICAgICA8TmF2T3BlblxuICAgICAgICAgICAgICBvbkNsaWNrT3Blbk5hdj17b3Blbk5hdn1cbiAgICAgICAgICAgICAgaGlyZURlZGljYXRlZFBhZ2VzPXtoaXJlRGVkaWNhdGVkUGFnZXN9XG4gICAgICAgICAgICAgIGhpcmVEZWRpY2F0ZWRUeXBlPXtoaXJlRGVkaWNhdGVkVHlwZX1cbiAgICAgICAgICAgICAgc2VydmljZXNQYWdlPXtzZXJ2aWNlc1BhZ2V9XG4gICAgICAgICAgICAgIGFsbFNlcnZpY2VzVHlwZXM9e2FsbFNlcnZpY2VzVHlwZXN9XG4gICAgICAgICAgICAgIGJsb2NrPXtibG9ja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7bmF2T3BlbiAmJiAoXG4gICAgICAgICAgICA8TmF2Q2xvc2UgYmxvY2s9e2Jsb2NrfSBvbkNsaWNrT3Blbk5hdj17b3Blbk5hdn0gZm9vdGVyPXtmb290ZXJ9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhIZWFkZXIpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJsYXp5IiwiU3VzcGVuc2UiLCJjbHN4IiwiTmF2T3BlbiIsIk5hdkNsb3NlIiwiSGVhZGVyIiwiYmxvY2siLCJmb290ZXIiLCJhbGxTZXJ2aWNlc1R5cGVzIiwic2VydmljZXNQYWdlIiwiaGlyZURlZGljYXRlZFR5cGUiLCJoaXJlRGVkaWNhdGVkUGFnZXMiLCJzZWN0aW9uVGhlbWUiLCJuYXZPcGVuIiwic2V0TmF2T3BlbiIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9wZW5OYXYiLCJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJmYWxsYmFjayIsIm9uQ2xpY2tPcGVuTmF2IiwibWVtbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n"));

/***/ })

});