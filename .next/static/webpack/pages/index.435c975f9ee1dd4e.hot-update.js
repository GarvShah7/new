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

/***/ "./components/HomePage/HomeAllSections/index.tsx":
/*!*******************************************************!*\
  !*** ./components/HomePage/HomeAllSections/index.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TitleHoverImageSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../TitleHoverImageSection */ \"./components/TitleHoverImageSection/index.tsx\");\n/* harmony import */ var _VideoSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../VideoSection */ \"./components/VideoSection/index.tsx\");\n\n\n\n\n// const HomeAllSections = ({ block, ...props }) => {\n//     // switch (block?._type) {\n//     //     case 'homeHeroSection'\n//     //         return HomeHeroSection;\n//     //     default:\n//     //         break;\n//     // }\n//     const Components = {\n//         homeHeroSection: HomeHeroSection,\n//         homeServicesSection: HomeServicesSection,\n//         homeContactUsSection: HomeContactUsSection,\n//         workSection: WorkSection,\n//         homeOurProsSection: HomeOurProsSection,\n//         solutionSection: SolutionSection,\n//         homeAboutUsSection: HomeAboutUsSection,\n//         jamstackCTESection: JamstackCTESection,\n//         homeBlogSection: HomeBlogSection,\n//         // testimonialsSection: TestimonialsSection,\n//         reviewsSection: ReviewsSection,\n//         titleHoverImageSection: TitleHoverImageSection,\n//         homeVideoSection: VideoSection,\n//         imageWithTitleSection: ImageWithTitleSection,\n//     }\n//     const Component = Components[block?._type as keyof typeof Components]\n//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment\n//     // @ts-ignore\n//     return Component ? <Component block={block} {...props} /> : null\n// }\nconst HomeAllSections = (param)=>{\n    let { block , ...props } = param;\n    let Component;\n    switch(block === null || block === void 0 ? void 0 : block._type){\n        // case \"homeHeroSection\":\n        //   Component = HomeHeroSection;\n        //   break;\n        // case \"homeServicesSection\":\n        //   Component = HomeServicesSection;\n        //   break;\n        // case \"homeContactUsSection\":\n        //   Component = HomeContactUsSection;\n        //   break;\n        // case \"workSection\":\n        //   Component = WorkSection;\n        //   break;\n        // case \"homeOurProsSection\":\n        //   Component = HomeOurProsSection;\n        //   break;\n        // case \"solutionSection\":\n        //   Component = SolutionSection;\n        //   break;\n        // case \"homeAboutUsSection\":\n        //   Component = HomeAboutUsSection;\n        //   break;\n        // case \"jamstackCTESection\":\n        //   Component = JamstackCTESection;\n        //   break;\n        // case \"homeBlogSection\":\n        //   Component = HomeBlogSection;\n        //   break;\n        // case \"testimonialsSection\":\n        //   Component = TestimonialsSection;\n        //   break;\n        // case \"reviewsSection\":\n        //   Component = ReviewsSection;\n        //   break;\n        case \"titleHoverImageSection\":\n            Component = _TitleHoverImageSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n            break;\n        case \"homeVideoSection\":\n            Component = _VideoSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n            break;\n        // case \"imageWithTitleSection\":\n        //   Component = ImageWithTitleSection;\n        //   break;\n        default:\n            break;\n    }\n    // eslint-disable-next-line @typescript-eslint/ban-ts-comment\n    // @ts-ignore\n    return Component ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        block: block,\n        ...props\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\HomePage\\\\HomeAllSections\\\\index.tsx\",\n        lineNumber: 140,\n        columnNumber: 22\n    }, undefined) : null;\n};\n_c = HomeAllSections;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeAllSections);\nvar _c;\n$RefreshReg$(_c, \"HomeAllSections\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWVQYWdlL0hvbWVBbGxTZWN0aW9ucy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQXVCd0M7QUFDcEI7QUFXOUMscURBQXFEO0FBQ3JELGlDQUFpQztBQUNqQyxvQ0FBb0M7QUFDcEMseUNBQXlDO0FBRXpDLHNCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEIsV0FBVztBQUNYLDJCQUEyQjtBQUUzQiw0Q0FBNEM7QUFDNUMsb0RBQW9EO0FBQ3BELHNEQUFzRDtBQUN0RCxvQ0FBb0M7QUFDcEMsa0RBQWtEO0FBQ2xELDRDQUE0QztBQUM1QyxrREFBa0Q7QUFDbEQsa0RBQWtEO0FBQ2xELDRDQUE0QztBQUM1Qyx1REFBdUQ7QUFDdkQsMENBQTBDO0FBQzFDLDBEQUEwRDtBQUMxRCwwQ0FBMEM7QUFDMUMsd0RBQXdEO0FBRXhELFFBQVE7QUFDUiw0RUFBNEU7QUFDNUUsb0VBQW9FO0FBQ3BFLG9CQUFvQjtBQUNwQix1RUFBdUU7QUFFdkUsSUFBSTtBQUNKLE1BQU1HLGtCQUFrQjtRQUFDLEVBQUVDLE1BQUssRUFBRSxHQUFHQyxPQUFPO0lBQzFDLElBQUlDO0lBdUJKLE9BQVFGLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT0c7UUFDYiwwQkFBMEI7UUFDMUIsaUNBQWlDO1FBQ2pDLFdBQVc7UUFDWCw4QkFBOEI7UUFDOUIscUNBQXFDO1FBQ3JDLFdBQVc7UUFDWCwrQkFBK0I7UUFDL0Isc0NBQXNDO1FBQ3RDLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLFdBQVc7UUFDWCw2QkFBNkI7UUFDN0Isb0NBQW9DO1FBQ3BDLFdBQVc7UUFDWCwwQkFBMEI7UUFDMUIsaUNBQWlDO1FBQ2pDLFdBQVc7UUFDWCw2QkFBNkI7UUFDN0Isb0NBQW9DO1FBQ3BDLFdBQVc7UUFDWCw2QkFBNkI7UUFDN0Isb0NBQW9DO1FBQ3BDLFdBQVc7UUFDWCwwQkFBMEI7UUFDMUIsaUNBQWlDO1FBQ2pDLFdBQVc7UUFDWCw4QkFBOEI7UUFDOUIscUNBQXFDO1FBQ3JDLFdBQVc7UUFDWCx5QkFBeUI7UUFDekIsZ0NBQWdDO1FBQ2hDLFdBQVc7UUFDWCxLQUFLO1lBQ0hELFlBQVlMLCtEQUFzQkE7WUFDbEM7UUFDRixLQUFLO1lBQ0hLLFlBQVlKLHFEQUFZQTtZQUN4QjtRQUNGLGdDQUFnQztRQUNoQyx1Q0FBdUM7UUFDdkMsV0FBVztRQUNYO1lBQ0U7SUFDSjtJQUNBLDZEQUE2RDtJQUM3RCxhQUFhO0lBQ2IsT0FBT0ksMEJBQVksOERBQUNBO1FBQVVGLE9BQU9BO1FBQVEsR0FBR0MsS0FBSzs7Ozs7b0JBQU87QUFDOUQ7S0F6RU1GO0FBMkVOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9tZVBhZ2UvSG9tZUFsbFNlY3Rpb25zL2luZGV4LnRzeD8yNTk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEFsbFBhZ2VGcmFnbWVudCxcbiAgQmxvZ0lubmVyRnJhZ21lbnQsXG4gIEhvbWVBYm91dFVzU2VjdGlvbkZyYWdtZW50LFxuICBIb21lQmxvZ1NlY3Rpb25GcmFnbWVudCxcbiAgSG9tZUNvbnRhY3RVc1NlY3Rpb25GcmFnbWVudCxcbiAgSG9tZUZyYWdtZW50LFxuICBIb21lSGVyb1NlY3Rpb25GcmFnbWVudCxcbiAgSG9tZU91clByb3NTZWN0aW9uRnJhZ21lbnQsXG4gIEhvbWVTZXJ2aWNlc1NlY3Rpb25GcmFnbWVudCxcbiAgSG9tZVZpZGVvU2VjdGlvbkZyYWdtZW50LFxuICBJbWFnZVdpdGhUaXRsZVNlY3Rpb25GcmFnbWVudCxcbiAgSmFtc3RhY2tDdGVTZWN0aW9uRnJhZ21lbnQsXG4gIFJldmlld3NTZWN0aW9uRnJhZ21lbnQsXG4gIFNvbHV0aW9uU2VjdGlvbkZyYWdtZW50LFxuICBUZXN0aW1vbmlhbHNTZWN0aW9uRnJhZ21lbnQsXG4gIFRpdGxlSG92ZXJJbWFnZVNlY3Rpb25GcmFnbWVudCxcbiAgV29ya1NlY3Rpb25GcmFnbWVudCxcbn0gZnJvbSBcIi4uLy4uLy4uL2FwcC9hcGkvZ2VuZXJhdGVkL2dyYXBocWwvZ3JhcGhxbFwiO1xuaW1wb3J0IFJldmlld3NTZWN0aW9uIGZyb20gXCIuLi8uLi9Db21tb24vUmV2aWV3c1NlY3Rpb25cIjtcbmltcG9ydCBXb3JrU2VjdGlvbiBmcm9tIFwiLi4vLi4vQ29tbW9uL1dvcmtTZWN0aW9uXCI7XG5pbXBvcnQgSW1hZ2VXaXRoVGl0bGVTZWN0aW9uIGZyb20gXCIuLi8uLi9JbWFnZVdpdGhUaXRsZVNlY3Rpb25cIjtcbmltcG9ydCBUaXRsZUhvdmVySW1hZ2VTZWN0aW9uIGZyb20gXCIuLi8uLi9UaXRsZUhvdmVySW1hZ2VTZWN0aW9uXCI7XG5pbXBvcnQgVmlkZW9TZWN0aW9uIGZyb20gXCIuLi8uLi9WaWRlb1NlY3Rpb25cIjtcbmltcG9ydCBIb21lQWJvdXRVc1NlY3Rpb24gZnJvbSBcIi4uL0hvbWVBYm91dFVzU2VjdGlvblwiO1xuaW1wb3J0IEhvbWVCbG9nU2VjdGlvbiBmcm9tIFwiLi4vSG9tZUJsb2dTZWN0aW9uXCI7XG5pbXBvcnQgSG9tZUNvbnRhY3RVc1NlY3Rpb24gZnJvbSBcIi4uL0hvbWVDb250YWN0VXNTZWN0aW9uXCI7XG5pbXBvcnQgSG9tZUhlcm9TZWN0aW9uIGZyb20gXCIuLi9Ib21lSGVyb1NlY3Rpb25cIjtcbmltcG9ydCBIb21lT3VyUHJvc1NlY3Rpb24gZnJvbSBcIi4uL0hvbWVPdXJQcm9zU2VjdGlvblwiO1xuaW1wb3J0IEhvbWVTZXJ2aWNlc1NlY3Rpb24gZnJvbSBcIi4uL0hvbWVTZXJ2aWNlc1NlY3Rpb25cIjtcbmltcG9ydCBKYW1zdGFja0NURVNlY3Rpb24gZnJvbSBcIi4uL0phbXN0YWNrQ1RFU2VjdGlvblwiO1xuaW1wb3J0IFNvbHV0aW9uU2VjdGlvbiBmcm9tIFwiLi4vU29sdXRpb25TZWN0aW9uXCI7XG5pbXBvcnQgVGVzdGltb25pYWxzU2VjdGlvbiBmcm9tIFwiLi4vLi4vQ29tbW9uL1Rlc3RpbW9uaWFsc1NlY3Rpb25cIjtcblxuLy8gY29uc3QgSG9tZUFsbFNlY3Rpb25zID0gKHsgYmxvY2ssIC4uLnByb3BzIH0pID0+IHtcbi8vICAgICAvLyBzd2l0Y2ggKGJsb2NrPy5fdHlwZSkge1xuLy8gICAgIC8vICAgICBjYXNlICdob21lSGVyb1NlY3Rpb24nXG4vLyAgICAgLy8gICAgICAgICByZXR1cm4gSG9tZUhlcm9TZWN0aW9uO1xuXG4vLyAgICAgLy8gICAgIGRlZmF1bHQ6XG4vLyAgICAgLy8gICAgICAgICBicmVhaztcbi8vICAgICAvLyB9XG4vLyAgICAgY29uc3QgQ29tcG9uZW50cyA9IHtcblxuLy8gICAgICAgICBob21lSGVyb1NlY3Rpb246IEhvbWVIZXJvU2VjdGlvbixcbi8vICAgICAgICAgaG9tZVNlcnZpY2VzU2VjdGlvbjogSG9tZVNlcnZpY2VzU2VjdGlvbixcbi8vICAgICAgICAgaG9tZUNvbnRhY3RVc1NlY3Rpb246IEhvbWVDb250YWN0VXNTZWN0aW9uLFxuLy8gICAgICAgICB3b3JrU2VjdGlvbjogV29ya1NlY3Rpb24sXG4vLyAgICAgICAgIGhvbWVPdXJQcm9zU2VjdGlvbjogSG9tZU91clByb3NTZWN0aW9uLFxuLy8gICAgICAgICBzb2x1dGlvblNlY3Rpb246IFNvbHV0aW9uU2VjdGlvbixcbi8vICAgICAgICAgaG9tZUFib3V0VXNTZWN0aW9uOiBIb21lQWJvdXRVc1NlY3Rpb24sXG4vLyAgICAgICAgIGphbXN0YWNrQ1RFU2VjdGlvbjogSmFtc3RhY2tDVEVTZWN0aW9uLFxuLy8gICAgICAgICBob21lQmxvZ1NlY3Rpb246IEhvbWVCbG9nU2VjdGlvbixcbi8vICAgICAgICAgLy8gdGVzdGltb25pYWxzU2VjdGlvbjogVGVzdGltb25pYWxzU2VjdGlvbixcbi8vICAgICAgICAgcmV2aWV3c1NlY3Rpb246IFJldmlld3NTZWN0aW9uLFxuLy8gICAgICAgICB0aXRsZUhvdmVySW1hZ2VTZWN0aW9uOiBUaXRsZUhvdmVySW1hZ2VTZWN0aW9uLFxuLy8gICAgICAgICBob21lVmlkZW9TZWN0aW9uOiBWaWRlb1NlY3Rpb24sXG4vLyAgICAgICAgIGltYWdlV2l0aFRpdGxlU2VjdGlvbjogSW1hZ2VXaXRoVGl0bGVTZWN0aW9uLFxuXG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IENvbXBvbmVudCA9IENvbXBvbmVudHNbYmxvY2s/Ll90eXBlIGFzIGtleW9mIHR5cGVvZiBDb21wb25lbnRzXVxuLy8gICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vICAgICAvLyBAdHMtaWdub3JlXG4vLyAgICAgcmV0dXJuIENvbXBvbmVudCA/IDxDb21wb25lbnQgYmxvY2s9e2Jsb2NrfSB7Li4ucHJvcHN9IC8+IDogbnVsbFxuXG4vLyB9XG5jb25zdCBIb21lQWxsU2VjdGlvbnMgPSAoeyBibG9jaywgLi4ucHJvcHMgfSkgPT4ge1xuICBsZXQgQ29tcG9uZW50OlxuICAgIHwgUmVhY3QuRkM8eyBibG9jazogSG9tZUhlcm9TZWN0aW9uRnJhZ21lbnQgfT5cbiAgICB8IFJlYWN0LkZDPHsgYmxvY2s6IEhvbWVTZXJ2aWNlc1NlY3Rpb25GcmFnbWVudCB9PlxuICAgIHwgUmVhY3QuRkM8eyBibG9jazogSG9tZUNvbnRhY3RVc1NlY3Rpb25GcmFnbWVudCB9PlxuICAgIHwgUmVhY3QuRkM8eyBibG9jazogV29ya1NlY3Rpb25GcmFnbWVudCB9PlxuICAgIHwgUmVhY3QuRkM8eyBibG9jazogSG9tZU91clByb3NTZWN0aW9uRnJhZ21lbnQgfT5cbiAgICB8IFJlYWN0LkZDPHsgYmxvY2s6IFNvbHV0aW9uU2VjdGlvbkZyYWdtZW50IH0+XG4gICAgfCBSZWFjdC5GQzx7IGJsb2NrOiBIb21lQWJvdXRVc1NlY3Rpb25GcmFnbWVudCB9PlxuICAgIHwgUmVhY3QuRkM8eyBibG9jazogSmFtc3RhY2tDdGVTZWN0aW9uRnJhZ21lbnQgfT5cbiAgICB8IFJlYWN0LkZDPHtcbiAgICAgICAgYmxvY2s6IEhvbWVCbG9nU2VjdGlvbkZyYWdtZW50O1xuICAgICAgICBleHRyYVByb3BzPzogQmxvZ0lubmVyRnJhZ21lbnRbXSB8IHVuZGVmaW5lZDtcbiAgICAgIH0+XG4gICAgfCBSZWFjdC5GQzx7IGJsb2NrOiBUZXN0aW1vbmlhbHNTZWN0aW9uRnJhZ21lbnQgfT5cbiAgICB8IFJlYWN0LkZDPHsgYmxvY2s6IFJldmlld3NTZWN0aW9uRnJhZ21lbnQgfT5cbiAgICB8IFJlYWN0LkZDPHtcbiAgICAgICAgYmxvY2s6IFRpdGxlSG92ZXJJbWFnZVNlY3Rpb25GcmFnbWVudDtcbiAgICAgICAgc2VydmljZXNfY2FyZD86IEhvbWVGcmFnbWVudFtdIHwgQWxsUGFnZUZyYWdtZW50W10gfCB1bmRlZmluZWQ7XG4gICAgICB9PlxuICAgIHwgUmVhY3QuRkM8eyBibG9jazogSG9tZVZpZGVvU2VjdGlvbkZyYWdtZW50IH0+XG4gICAgfCBSZWFjdC5GQzx7IGJsb2NrOiBJbWFnZVdpdGhUaXRsZVNlY3Rpb25GcmFnbWVudCB9PlxuICAgIHwgUmVhY3QuSlNYLkludHJpbnNpY0F0dHJpYnV0ZXM7XG5cbiAgc3dpdGNoIChibG9jaz8uX3R5cGUpIHtcbiAgICAvLyBjYXNlIFwiaG9tZUhlcm9TZWN0aW9uXCI6XG4gICAgLy8gICBDb21wb25lbnQgPSBIb21lSGVyb1NlY3Rpb247XG4gICAgLy8gICBicmVhaztcbiAgICAvLyBjYXNlIFwiaG9tZVNlcnZpY2VzU2VjdGlvblwiOlxuICAgIC8vICAgQ29tcG9uZW50ID0gSG9tZVNlcnZpY2VzU2VjdGlvbjtcbiAgICAvLyAgIGJyZWFrO1xuICAgIC8vIGNhc2UgXCJob21lQ29udGFjdFVzU2VjdGlvblwiOlxuICAgIC8vICAgQ29tcG9uZW50ID0gSG9tZUNvbnRhY3RVc1NlY3Rpb247XG4gICAgLy8gICBicmVhaztcbiAgICAvLyBjYXNlIFwid29ya1NlY3Rpb25cIjpcbiAgICAvLyAgIENvbXBvbmVudCA9IFdvcmtTZWN0aW9uO1xuICAgIC8vICAgYnJlYWs7XG4gICAgLy8gY2FzZSBcImhvbWVPdXJQcm9zU2VjdGlvblwiOlxuICAgIC8vICAgQ29tcG9uZW50ID0gSG9tZU91clByb3NTZWN0aW9uO1xuICAgIC8vICAgYnJlYWs7XG4gICAgLy8gY2FzZSBcInNvbHV0aW9uU2VjdGlvblwiOlxuICAgIC8vICAgQ29tcG9uZW50ID0gU29sdXRpb25TZWN0aW9uO1xuICAgIC8vICAgYnJlYWs7XG4gICAgLy8gY2FzZSBcImhvbWVBYm91dFVzU2VjdGlvblwiOlxuICAgIC8vICAgQ29tcG9uZW50ID0gSG9tZUFib3V0VXNTZWN0aW9uO1xuICAgIC8vICAgYnJlYWs7XG4gICAgLy8gY2FzZSBcImphbXN0YWNrQ1RFU2VjdGlvblwiOlxuICAgIC8vICAgQ29tcG9uZW50ID0gSmFtc3RhY2tDVEVTZWN0aW9uO1xuICAgIC8vICAgYnJlYWs7XG4gICAgLy8gY2FzZSBcImhvbWVCbG9nU2VjdGlvblwiOlxuICAgIC8vICAgQ29tcG9uZW50ID0gSG9tZUJsb2dTZWN0aW9uO1xuICAgIC8vICAgYnJlYWs7XG4gICAgLy8gY2FzZSBcInRlc3RpbW9uaWFsc1NlY3Rpb25cIjpcbiAgICAvLyAgIENvbXBvbmVudCA9IFRlc3RpbW9uaWFsc1NlY3Rpb247XG4gICAgLy8gICBicmVhaztcbiAgICAvLyBjYXNlIFwicmV2aWV3c1NlY3Rpb25cIjpcbiAgICAvLyAgIENvbXBvbmVudCA9IFJldmlld3NTZWN0aW9uO1xuICAgIC8vICAgYnJlYWs7XG4gICAgY2FzZSBcInRpdGxlSG92ZXJJbWFnZVNlY3Rpb25cIjpcbiAgICAgIENvbXBvbmVudCA9IFRpdGxlSG92ZXJJbWFnZVNlY3Rpb247XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaG9tZVZpZGVvU2VjdGlvblwiOlxuICAgICAgQ29tcG9uZW50ID0gVmlkZW9TZWN0aW9uO1xuICAgICAgYnJlYWs7XG4gICAgLy8gY2FzZSBcImltYWdlV2l0aFRpdGxlU2VjdGlvblwiOlxuICAgIC8vICAgQ29tcG9uZW50ID0gSW1hZ2VXaXRoVGl0bGVTZWN0aW9uO1xuICAgIC8vICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gQ29tcG9uZW50ID8gPENvbXBvbmVudCBibG9jaz17YmxvY2t9IHsuLi5wcm9wc30gLz4gOiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZUFsbFNlY3Rpb25zO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGl0bGVIb3ZlckltYWdlU2VjdGlvbiIsIlZpZGVvU2VjdGlvbiIsIkhvbWVBbGxTZWN0aW9ucyIsImJsb2NrIiwicHJvcHMiLCJDb21wb25lbnQiLCJfdHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/HomePage/HomeAllSections/index.tsx\n"));

/***/ }),

/***/ "./components/VideoSection/index.tsx":
/*!*******************************************!*\
  !*** ./components/VideoSection/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Common_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common/Image */ \"./components/Common/Image/index.tsx\");\n\n\nconst VideoSection = (param)=>{\n    let { block  } = param;\n    const { image  } = block || {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"videoSection\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"videoContent\",\n                children: image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Common_Image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    block: image,\n                    priority: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\VideoSection\\\\index.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\VideoSection\\\\index.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\VideoSection\\\\index.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\GitHub\\\\new\\\\components\\\\VideoSection\\\\index.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_c = VideoSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoSection);\nvar _c;\n$RefreshReg$(_c, \"VideoSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvU2VjdGlvbi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNvQztBQUdwQyxNQUFNQyxlQUE4RDtRQUFDLEVBQ25FQyxNQUFLLEVBQ047SUFDQyxNQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHRCxTQUFTLENBQUM7SUFFNUIscUJBQ0UsOERBQUNFO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNiLDRFQUFDQztnQkFBSUQsV0FBVTswQkFDWkYsdUJBQVMsOERBQUNILHFEQUFLQTtvQkFBQ0UsT0FBT0M7b0JBQU9JLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuRDtLQWRNTjtBQWVOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVmlkZW9TZWN0aW9uL2luZGV4LnRzeD9mMTNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWVWaWRlb1NlY3Rpb25GcmFnbWVudCB9IGZyb20gXCIuLi8uLi9hcHAvYXBpL2dlbmVyYXRlZC9ncmFwaHFsL2dyYXBocWxcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi4vQ29tbW9uL0ltYWdlXCI7XG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIi4uL0NvbW1vbi9JbWFnZVwiO1xuXG5jb25zdCBWaWRlb1NlY3Rpb246IFJlYWN0LkZDPHsgYmxvY2s6IEhvbWVWaWRlb1NlY3Rpb25GcmFnbWVudCB9PiA9ICh7XG4gIGJsb2NrLFxufSkgPT4ge1xuICBjb25zdCB7IGltYWdlIH0gPSBibG9jayB8fCB7fTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInZpZGVvU2VjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb0NvbnRlbnRcIj5cbiAgICAgICAgICB7aW1hZ2UgJiYgPEltYWdlIGJsb2NrPXtpbWFnZX0gcHJpb3JpdHk9e3RydWV9IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBWaWRlb1NlY3Rpb247XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJWaWRlb1NlY3Rpb24iLCJibG9jayIsImltYWdlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInByaW9yaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/VideoSection/index.tsx\n"));

/***/ })

});