"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/bhajan",{

/***/ "./src/components/MusicPlayer/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/MusicPlayer/index.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction MusicPlayer(param) {\n    let { musicDetails  } = param;\n    _s();\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const audioRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createRef();\n    const handlePlay = ()=>{\n        const audioElement = audioRef.current;\n        if (isPlaying) {\n            audioElement.pause();\n        } else {\n            audioElement.play();\n        }\n        setIsPlaying(!isPlaying);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(styles.card),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: musicDetails === null || musicDetails === void 0 ? void 0 : musicDetails.src,\n                    className: \"card-img-top\",\n                    width: 100,\n                    height: 100,\n                    alt: \"...\"\n                }, void 0, false, {\n                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/components/MusicPlayer/index.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                ref: audioRef,\n                                src: musicDetails === null || musicDetails === void 0 ? void 0 : musicDetails.music\n                            }, void 0, false, {\n                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/components/MusicPlayer/index.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: handlePlay,\n                                children: isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    class: \"ri-pause-circle-line\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/components/MusicPlayer/index.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 55\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    class: \"ri-play-circle-line\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/components/MusicPlayer/index.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 94\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/components/MusicPlayer/index.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/components/MusicPlayer/index.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/components/MusicPlayer/index.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-body\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"card-title\",\n                            children: \"Card title\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/components/MusicPlayer/index.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"card-text\",\n                            children: \"Some quick example text to build on the card title and make up the bulk of the card's content.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/components/MusicPlayer/index.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/components/MusicPlayer/index.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/components/MusicPlayer/index.jsx\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(MusicPlayer, \"dxr5RgzQJlMZkbQdHY9iHZ+FF0w=\");\n_c = MusicPlayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MusicPlayer);\nvar _c;\n$RefreshReg$(_c, \"MusicPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NdXNpY1BsYXllci9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThCO0FBQ1M7QUFFdkMsU0FBU0csWUFBYSxLQUFnQixFQUFFO1FBQWxCLEVBQUVDLGFBQVksRUFBRSxHQUFoQjs7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUs7SUFDaEQsTUFBTUsseUJBQVdOLHNEQUFlO0lBRWhDLE1BQU1RLGFBQWEsSUFBTTtRQUN2QixNQUFNQyxlQUFlSCxTQUFTSSxPQUFPO1FBRXJDLElBQUlOLFdBQVc7WUFDYkssYUFBYUUsS0FBSztRQUNwQixPQUFPO1lBQ0xGLGFBQWFHLElBQUk7UUFDbkIsQ0FBQztRQUVEUCxhQUFhLENBQUNEO0lBQ2hCO0lBRUEscUJBQ0U7a0JBQ0ksNEVBQUNTO1lBQUlDLFdBQVcsR0FBZSxPQUFaQyxPQUFPQyxJQUFJOzs4QkFDNUIsOERBQUNqQixtREFBS0E7b0JBQ0ZrQixLQUFLZCx5QkFBQUEsMEJBQUFBLEtBQUFBLElBQUFBLGFBQWNjLEdBQUc7b0JBQ3RCSCxXQUFVO29CQUNWSSxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxLQUFJOzs7Ozs7OEJBRVIsOERBQUNQO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBWTs7MENBQ2YsOERBQUNPO2dDQUFNQyxLQUFLaEI7Z0NBQVVXLEtBQUtkLHlCQUFBQSwwQkFBQUEsS0FBQUEsSUFBQUEsYUFBY29CLEtBQUs7Ozs7OzswQ0FDOUMsOERBQUNDO2dDQUFLQyxTQUFTakI7MENBQWFKLDBCQUFZLDhEQUFDc0I7b0NBQUVDLE9BQU07Ozs7O3lEQUE4Qiw4REFBQ0Q7b0NBQUVDLE9BQU07Ozs7O3dDQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR3RILDhEQUFDZDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNjOzRCQUFHZCxXQUFVO3NDQUFhOzs7Ozs7c0NBQzNCLDhEQUFDZTs0QkFBRWYsV0FBVTtzQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QztHQXZDU1o7S0FBQUE7QUF5Q1QsK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTXVzaWNQbGF5ZXIvaW5kZXguanN4PzU4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gTXVzaWNQbGF5ZXIgKHsgbXVzaWNEZXRhaWxzIH0pIHtcbiAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBhdWRpb1JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG5cbiAgY29uc3QgaGFuZGxlUGxheSA9ICgpID0+IHtcbiAgICBjb25zdCBhdWRpb0VsZW1lbnQgPSBhdWRpb1JlZi5jdXJyZW50XG5cbiAgICBpZiAoaXNQbGF5aW5nKSB7XG4gICAgICBhdWRpb0VsZW1lbnQucGF1c2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICBhdWRpb0VsZW1lbnQucGxheSgpXG4gICAgfVxuXG4gICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZH1gfT5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXttdXNpY0RldGFpbHM/LnNyY30gXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIFxuICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2xgfT5cbiAgICAgICAgICAgICAgPGF1ZGlvIHJlZj17YXVkaW9SZWZ9IHNyYz17bXVzaWNEZXRhaWxzPy5tdXNpY30gLz5cbiAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17aGFuZGxlUGxheX0+e2lzUGxheWluZyA/IDxpIGNsYXNzPVwicmktcGF1c2UtY2lyY2xlLWxpbmVcIj48L2k+IDogPGkgY2xhc3M9XCJyaS1wbGF5LWNpcmNsZS1saW5lXCI+PC9pPn08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNhcmQgdGl0bGU8L2g1PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5Tb21lIHF1aWNrIGV4YW1wbGUgdGV4dCB0byBidWlsZCBvbiB0aGUgY2FyZCB0aXRsZSBhbmQgbWFrZSB1cCB0aGUgYnVsayBvZiB0aGUgY2FyZCdzIGNvbnRlbnQuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gXG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVzaWNQbGF5ZXIgXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwiTXVzaWNQbGF5ZXIiLCJtdXNpY0RldGFpbHMiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJhdWRpb1JlZiIsImNyZWF0ZVJlZiIsImhhbmRsZVBsYXkiLCJhdWRpb0VsZW1lbnQiLCJjdXJyZW50IiwicGF1c2UiLCJwbGF5IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGVzIiwiY2FyZCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiYXVkaW8iLCJyZWYiLCJtdXNpYyIsInNwYW4iLCJvbkNsaWNrIiwiaSIsImNsYXNzIiwiaDUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MusicPlayer/index.jsx\n"));

/***/ })

});