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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst NavOpen = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"components_Header_NavOpen_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./NavOpen */ \"./components/Header/NavOpen/index.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\components\\\\Header\\\\index.tsx -> \" + \"./NavOpen\"\n        ]\n    }\n});\n_c = NavOpen;\nconst NavClose = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"components_Header_NavClose_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./NavClose */ \"./components/Header/NavClose/index.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\components\\\\Header\\\\index.tsx -> \" + \"./NavClose\"\n        ]\n    }\n});\n_c1 = NavClose;\nconst Header = (param)=>{\n    let { block , footer , allServicesTypes , servicesPage , hireDedicatedType , hireDedicatedPages  } = param;\n    const { sectionTheme  } = block || {};\n    // const [navOpen, setNavOpen] = useState(false);\n    const openNav = (val)=>{\n        if (val) {\n            document.body.classList.add(\"modal-open\");\n        } else {\n            document.body.classList.remove(\"modal-open\");\n        }\n    // setNavOpen(val);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"block bg-black\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"headerSection\", sectionTheme !== null && sectionTheme !== void 0 ? sectionTheme : \"bg-white\"),\n            children: [\n                !navOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavOpen, {\n                    onClickOpenNav: openNav,\n                    hireDedicatedPages: hireDedicatedPages,\n                    hireDedicatedType: hireDedicatedType,\n                    servicesPage: servicesPage,\n                    allServicesTypes: allServicesTypes,\n                    block: block\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, undefined),\n                navOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavClose, {\n                    block: block,\n                    onClickOpenNav: openNav,\n                    footer: footer\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\index.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\index.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c3 = react__WEBPACK_IMPORTED_MODULE_2___default().memo(Header));\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"NavOpen\");\n$RefreshReg$(_c1, \"NavClose\");\n$RefreshReg$(_c2, \"Header\");\n$RefreshReg$(_c3, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFPd0I7QUFFRTtBQUNTO0FBQ25DLE1BQU1HLFVBQVVELG1EQUFPQSxDQUFDLElBQU0sMExBQW1COzs7Ozs7O0tBQTNDQztBQUNOLE1BQU1DLFdBQVdGLG1EQUFPQSxDQUFDLElBQU0sNkxBQW9COzs7Ozs7O01BQTdDRTtBQVdOLE1BQU1DLFNBQWdDO1FBQUMsRUFDckNDLE1BQUssRUFDTEMsT0FBTSxFQUNOQyxpQkFBZ0IsRUFDaEJDLGFBQVksRUFDWkMsa0JBQWlCLEVBQ2pCQyxtQkFBa0IsRUFDbkI7SUFDQyxNQUFNLEVBQUVDLGFBQVksRUFBRSxHQUFHTixTQUFTLENBQUM7SUFDbkMsaURBQWlEO0lBQ2pELE1BQU1PLFVBQVUsQ0FBQ0M7UUFDZixJQUFJQSxLQUFLO1lBQ1BDLFNBQVNDLEtBQUtDLFVBQVVDLElBQUk7UUFDOUIsT0FBTztZQUNMSCxTQUFTQyxLQUFLQyxVQUFVRSxPQUFPO1FBQ2pDO0lBQ0EsbUJBQW1CO0lBQ3JCO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQU9ELFdBQVdyQixnREFBSUEsQ0FBQyxpQkFBaUJZLHlCQUFBQSwwQkFBQUEsZUFBZ0I7O2dCQUN0RCxDQUFDVyx5QkFDQSw4REFBQ3BCO29CQUNDcUIsZ0JBQWdCWDtvQkFDaEJGLG9CQUFvQkE7b0JBQ3BCRCxtQkFBbUJBO29CQUNuQkQsY0FBY0E7b0JBQ2RELGtCQUFrQkE7b0JBQ2xCRixPQUFPQTs7Ozs7O2dCQUdWaUIseUJBQ0MsOERBQUNuQjtvQkFBU0UsT0FBT0E7b0JBQU9rQixnQkFBZ0JYO29CQUFTTixRQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkU7TUFyQ01GO0FBdUNOLGtGQUFlSixpREFBVXdCLENBQUNwQixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeD9mMmI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEZvb3RlckZyYWdtZW50LFxuICBIZWFkZXJGcmFnbWVudCxcbiAgSGlyZURlZGljYXRlZFBhZ2VUeXBlc0ZyYWdtZW50LFxuICBIb21lTmF2U2VydmljZXNGcmFnbWVudCxcbiAgU2VydmljZVR5cGVGcmFnbWVudCxcbn0gZnJvbSBcIi4uLy4uL2FwcC9hcGkvZ2VuZXJhdGVkL2dyYXBocWwvZ3JhcGhxbFwiO1xuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5jb25zdCBOYXZPcGVuID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL05hdk9wZW5cIikpO1xuY29uc3QgTmF2Q2xvc2UgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4vTmF2Q2xvc2VcIikpO1xuXG5leHBvcnQgdHlwZSBIZWFkZXJQcm9wcyA9IHtcbiAgYmxvY2s/OiBIZWFkZXJGcmFnbWVudDtcbiAgZm9vdGVyPzogRm9vdGVyRnJhZ21lbnQ7XG4gIGFsbFNlcnZpY2VzVHlwZXM/OiBTZXJ2aWNlVHlwZUZyYWdtZW50W107XG4gIHNlcnZpY2VzUGFnZT86IEhvbWVOYXZTZXJ2aWNlc0ZyYWdtZW50W107XG4gIGhpcmVEZWRpY2F0ZWRUeXBlPzogSGlyZURlZGljYXRlZFBhZ2VUeXBlc0ZyYWdtZW50W107XG4gIGhpcmVEZWRpY2F0ZWRQYWdlcz86IEhvbWVOYXZTZXJ2aWNlc0ZyYWdtZW50W107XG59O1xuXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDPEhlYWRlclByb3BzPiA9ICh7XG4gIGJsb2NrLFxuICBmb290ZXIsXG4gIGFsbFNlcnZpY2VzVHlwZXMsXG4gIHNlcnZpY2VzUGFnZSxcbiAgaGlyZURlZGljYXRlZFR5cGUsXG4gIGhpcmVEZWRpY2F0ZWRQYWdlcyxcbn0pID0+IHtcbiAgY29uc3QgeyBzZWN0aW9uVGhlbWUgfSA9IGJsb2NrIHx8IHt9O1xuICAvLyBjb25zdCBbbmF2T3Blbiwgc2V0TmF2T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9wZW5OYXYgPSAodmFsOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtb3BlblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtb3BlblwiKTtcbiAgICB9XG4gICAgLy8gc2V0TmF2T3Blbih2YWwpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgYmctYmxhY2tcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbHN4KFwiaGVhZGVyU2VjdGlvblwiLCBzZWN0aW9uVGhlbWUgPz8gXCJiZy13aGl0ZVwiKX0+XG4gICAgICAgIHshbmF2T3BlbiAmJiAoXG4gICAgICAgICAgPE5hdk9wZW5cbiAgICAgICAgICAgIG9uQ2xpY2tPcGVuTmF2PXtvcGVuTmF2fVxuICAgICAgICAgICAgaGlyZURlZGljYXRlZFBhZ2VzPXtoaXJlRGVkaWNhdGVkUGFnZXN9XG4gICAgICAgICAgICBoaXJlRGVkaWNhdGVkVHlwZT17aGlyZURlZGljYXRlZFR5cGV9XG4gICAgICAgICAgICBzZXJ2aWNlc1BhZ2U9e3NlcnZpY2VzUGFnZX1cbiAgICAgICAgICAgIGFsbFNlcnZpY2VzVHlwZXM9e2FsbFNlcnZpY2VzVHlwZXN9XG4gICAgICAgICAgICBibG9jaz17YmxvY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge25hdk9wZW4gJiYgKFxuICAgICAgICAgIDxOYXZDbG9zZSBibG9jaz17YmxvY2t9IG9uQ2xpY2tPcGVuTmF2PXtvcGVuTmF2fSBmb290ZXI9e2Zvb3Rlcn0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhIZWFkZXIpO1xuIl0sIm5hbWVzIjpbImNsc3giLCJSZWFjdCIsImR5bmFtaWMiLCJOYXZPcGVuIiwiTmF2Q2xvc2UiLCJIZWFkZXIiLCJibG9jayIsImZvb3RlciIsImFsbFNlcnZpY2VzVHlwZXMiLCJzZXJ2aWNlc1BhZ2UiLCJoaXJlRGVkaWNhdGVkVHlwZSIsImhpcmVEZWRpY2F0ZWRQYWdlcyIsInNlY3Rpb25UaGVtZSIsIm9wZW5OYXYiLCJ2YWwiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJuYXZPcGVuIiwib25DbGlja09wZW5OYXYiLCJtZW1vIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n"));

/***/ })

});