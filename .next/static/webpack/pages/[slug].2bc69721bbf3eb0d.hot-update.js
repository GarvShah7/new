"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst NavOpen = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"components_Header_NavOpen_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./NavOpen */ \"./components/Header/NavOpen/index.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\components\\\\Header\\\\index.tsx -> \" + \"./NavOpen\"\n        ]\n    }\n});\n_c = NavOpen;\nconst NavClose = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c1 = ()=>__webpack_require__.e(/*! import() */ \"components_Header_NavClose_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./NavClose */ \"./components/Header/NavClose/index.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\components\\\\Header\\\\index.tsx -> \" + \"./NavClose\"\n        ]\n    }\n});\n_c2 = NavClose;\nconst Header = (param)=>{\n    let { block , footer , allServicesTypes , servicesPage , hireDedicatedType , hireDedicatedPages  } = param;\n    _s();\n    const { sectionTheme  } = block || {};\n    const [navOpen, setNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const openNav = (val)=>{\n        if (val) {\n            document.body.classList.add(\"modal-open\");\n        } else {\n            document.body.classList.remove(\"modal-open\");\n        }\n        setNavOpen(val);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"block bg-black\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"headerSection\", sectionTheme !== null && sectionTheme !== void 0 ? sectionTheme : \"bg-white\"),\n            children: !navOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavOpen, {\n                onClickOpenNav: openNav,\n                hireDedicatedPages: hireDedicatedPages,\n                hireDedicatedType: hireDedicatedType,\n                servicesPage: servicesPage,\n                allServicesTypes: allServicesTypes,\n                block: block\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\index.tsx\",\n                lineNumber: 46,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\index.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\Header\\\\index.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"YGneQoONAXyKf8WW6+F1a9gYRoM=\");\n_c3 = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c4 = react__WEBPACK_IMPORTED_MODULE_2___default().memo(Header));\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"NavOpen\");\n$RefreshReg$(_c1, \"NavClose$dynamic\");\n$RefreshReg$(_c2, \"NavClose\");\n$RefreshReg$(_c3, \"Header\");\n$RefreshReg$(_c4, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBT3dCO0FBQ1M7QUFDUDtBQUNTO0FBQ25DLE1BQU1JLFVBQVVELG1EQUFPQSxDQUFDLElBQU0sMExBQW1COzs7Ozs7O0tBQTNDQztBQUNOLE1BQU1DLFdBQVdGLG1EQUFPQSxPQUFDLElBQU0sNkxBQW9COzs7Ozs7OztBQVduRCxNQUFNRyxTQUFnQztRQUFDLEVBQ3JDQyxNQUFLLEVBQ0xDLE9BQU0sRUFDTkMsaUJBQWdCLEVBQ2hCQyxhQUFZLEVBQ1pDLGtCQUFpQixFQUNqQkMsbUJBQWtCLEVBQ25COztJQUNDLE1BQU0sRUFBRUMsYUFBWSxFQUFFLEdBQUdOLFNBQVMsQ0FBQztJQUNuQyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTWUsVUFBVSxDQUFDQztRQUNmLElBQUlBLEtBQUs7WUFDUEMsU0FBU0MsS0FBS0MsVUFBVUMsSUFBSTtRQUM5QixPQUFPO1lBQ0xILFNBQVNDLEtBQUtDLFVBQVVFLE9BQU87UUFDakM7UUFDQVAsV0FBV0U7SUFDYjtJQUNBLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFPRCxXQUFXeEIsZ0RBQUlBLENBQUMsaUJBQWlCYSx5QkFBQUEsMEJBQUFBLGVBQWdCO3NCQUN0RCxDQUFDQyx5QkFDQSw4REFBQ1Y7Z0JBQ0NzQixnQkFBZ0JWO2dCQUNoQkosb0JBQW9CQTtnQkFDcEJELG1CQUFtQkE7Z0JBQ25CRCxjQUFjQTtnQkFDZEQsa0JBQWtCQTtnQkFDbEJGLE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7O0FBU25CO0dBckNNRDtNQUFBQTtBQXVDTixrRkFBZUosaURBQVV5QixDQUFDckIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/ZjJiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBGb290ZXJGcmFnbWVudCxcbiAgSGVhZGVyRnJhZ21lbnQsXG4gIEhpcmVEZWRpY2F0ZWRQYWdlVHlwZXNGcmFnbWVudCxcbiAgSG9tZU5hdlNlcnZpY2VzRnJhZ21lbnQsXG4gIFNlcnZpY2VUeXBlRnJhZ21lbnQsXG59IGZyb20gXCIuLi8uLi9hcHAvYXBpL2dlbmVyYXRlZC9ncmFwaHFsL2dyYXBocWxcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuY29uc3QgTmF2T3BlbiA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9OYXZPcGVuXCIpKTtcbmNvbnN0IE5hdkNsb3NlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL05hdkNsb3NlXCIpKTtcblxuZXhwb3J0IHR5cGUgSGVhZGVyUHJvcHMgPSB7XG4gIGJsb2NrPzogSGVhZGVyRnJhZ21lbnQ7XG4gIGZvb3Rlcj86IEZvb3RlckZyYWdtZW50O1xuICBhbGxTZXJ2aWNlc1R5cGVzPzogU2VydmljZVR5cGVGcmFnbWVudFtdO1xuICBzZXJ2aWNlc1BhZ2U/OiBIb21lTmF2U2VydmljZXNGcmFnbWVudFtdO1xuICBoaXJlRGVkaWNhdGVkVHlwZT86IEhpcmVEZWRpY2F0ZWRQYWdlVHlwZXNGcmFnbWVudFtdO1xuICBoaXJlRGVkaWNhdGVkUGFnZXM/OiBIb21lTmF2U2VydmljZXNGcmFnbWVudFtdO1xufTtcblxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxIZWFkZXJQcm9wcz4gPSAoe1xuICBibG9jayxcbiAgZm9vdGVyLFxuICBhbGxTZXJ2aWNlc1R5cGVzLFxuICBzZXJ2aWNlc1BhZ2UsXG4gIGhpcmVEZWRpY2F0ZWRUeXBlLFxuICBoaXJlRGVkaWNhdGVkUGFnZXMsXG59KSA9PiB7XG4gIGNvbnN0IHsgc2VjdGlvblRoZW1lIH0gPSBibG9jayB8fCB7fTtcbiAgY29uc3QgW25hdk9wZW4sIHNldE5hdk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvcGVuTmF2ID0gKHZhbDogYm9vbGVhbikgPT4ge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm1vZGFsLW9wZW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLW9wZW5cIik7XG4gICAgfVxuICAgIHNldE5hdk9wZW4odmFsKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIGJnLWJsYWNrXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xzeChcImhlYWRlclNlY3Rpb25cIiwgc2VjdGlvblRoZW1lID8/IFwiYmctd2hpdGVcIil9PlxuICAgICAgICB7IW5hdk9wZW4gJiYgKFxuICAgICAgICAgIDxOYXZPcGVuXG4gICAgICAgICAgICBvbkNsaWNrT3Blbk5hdj17b3Blbk5hdn1cbiAgICAgICAgICAgIGhpcmVEZWRpY2F0ZWRQYWdlcz17aGlyZURlZGljYXRlZFBhZ2VzfVxuICAgICAgICAgICAgaGlyZURlZGljYXRlZFR5cGU9e2hpcmVEZWRpY2F0ZWRUeXBlfVxuICAgICAgICAgICAgc2VydmljZXNQYWdlPXtzZXJ2aWNlc1BhZ2V9XG4gICAgICAgICAgICBhbGxTZXJ2aWNlc1R5cGVzPXthbGxTZXJ2aWNlc1R5cGVzfVxuICAgICAgICAgICAgYmxvY2s9e2Jsb2NrfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHsvKiB7bmF2T3BlbiAmJiAoXG4gICAgICAgICAgPE5hdkNsb3NlIGJsb2NrPXtibG9ja30gb25DbGlja09wZW5OYXY9e29wZW5OYXZ9IGZvb3Rlcj17Zm9vdGVyfSAvPlxuICAgICAgICApfSAqL31cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhIZWFkZXIpO1xuIl0sIm5hbWVzIjpbImNsc3giLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiZHluYW1pYyIsIk5hdk9wZW4iLCJOYXZDbG9zZSIsIkhlYWRlciIsImJsb2NrIiwiZm9vdGVyIiwiYWxsU2VydmljZXNUeXBlcyIsInNlcnZpY2VzUGFnZSIsImhpcmVEZWRpY2F0ZWRUeXBlIiwiaGlyZURlZGljYXRlZFBhZ2VzIiwic2VjdGlvblRoZW1lIiwibmF2T3BlbiIsInNldE5hdk9wZW4iLCJvcGVuTmF2IiwidmFsIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwib25DbGlja09wZW5OYXYiLCJtZW1vIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n"));

/***/ })

});