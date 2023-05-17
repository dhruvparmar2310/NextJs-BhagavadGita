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

/***/ "./src/pages/bhajan.jsx":
/*!******************************!*\
  !*** ./src/pages/bhajan.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Bhajan.module.css */ \"./src/styles/Bhajan.module.css\");\n/* harmony import */ var _styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_VideoPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/VideoPlayer */ \"./src/components/VideoPlayer/index.jsx\");\n/* harmony import */ var _components_MusicList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/MusicList */ \"./src/components/MusicList/index.jsx\");\n/* harmony import */ var _components_VideoList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/VideoList */ \"./src/components/VideoList/index.jsx\");\n/* harmony import */ var _components_MusicPlayer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/MusicPlayer */ \"./src/components/MusicPlayer/index.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Bhajan() {\n    _s();\n    const [id, setID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [musicList, setMusicList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [videoList, setVideoList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [musicDetails, setMusicDetails] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [videoDetails, setVideoDetails] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const getMusic = ()=>{\n        const response = axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"/api/bhajan/music\").then((data)=>{\n            setMusicList(data === null || data === void 0 ? void 0 : data.data);\n        });\n        return response;\n    };\n    const getVideo = ()=>{\n        const response = axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"/api/bhajan/video\").then((data)=>{\n            setVideoList(data === null || data === void 0 ? void 0 : data.data);\n        });\n        return response;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getMusic();\n        getVideo();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Bhajan | Bhagavad Gita\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charset: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"Bhagavad Gita, BhagavadGita, bhagavad gita, BhagavadGita by Dhruv Parmar, Bhagavad Gita by Dhruv Parmar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"The Srimad Bhagavad Gita is the most sacred and popular book of Hindus. According to the scriptures, the Gita is the supreme book in all the books. The bhagavad gita book contains 700-verses which comes in the Mahabharata (the Indian epic). Gita means the song in Sanskrit and Srimad Bhagavad means the supreme lord. So the Srimad Bhagavad Gita means  ‘the song of the god’.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                src: \"/assets/video/bg.mp4\",\n                autoPlay: true,\n                loop: true,\n                muted: true,\n                className: (_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9___default().myVideo)\n            }, void 0, false, {\n                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"about-us\",\n                className: \"\".concat((_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9___default().bhajan)),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    \"data-aos\": \"fade-up\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"section_title mt-5 pb-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                style: {\n                                    color: \"white\",\n                                    textShadow: \"-3px 5px 10px #1e1e1e\",\n                                    letterSpacing: \"1px\"\n                                },\n                                children: \"Bhajan Page\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9___default().content), \" row\"),\n                            style: {\n                                height: \"5%\",\n                                marginBottom: \"10px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"nav justify-content-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"nav-item\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                className: \"nav-link\",\n                                                href: \"#\",\n                                                id: \"music\",\n                                                onClick: (e)=>setID(e.target.id),\n                                                children: \"Music\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"nav-item\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                className: \"nav-link\",\n                                                href: \"#\",\n                                                id: \"video\",\n                                                onClick: (e)=>setID(e.target.id),\n                                                children: \"Video\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9___default().content), \" row\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col \".concat((_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9___default().musicList)),\n                                    children: id === \"video\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_VideoList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        videoList: videoList,\n                                        setVideoDetails: setVideoDetails\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 19\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MusicList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        musicList: musicList,\n                                        setMusicDetails: setMusicDetails\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 22\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col \".concat((_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9___default().player)),\n                                    children: id === \"video\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9___default().videoPlayer),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_VideoPlayer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            videoDetails: videoDetails,\n                                            videoList: videoList\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 19\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MusicPlayer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        musicDetails: musicDetails\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Bhajan, \"th6l4RIdKPUnS3OxxKa7eDj/q7k=\");\n_c = Bhajan;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bhajan);\nvar _c;\n$RefreshReg$(_c, \"Bhajan\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0zRiw4REFBQ2lDOzRCQUFJSixXQUFXLEdBQWtCLE9BQWZwQywwRUFBYyxFQUFDOzs4Q0FDaEMsOERBQUN3QztvQ0FBSUosV0FBVyxPQUF3QixPQUFqQnBDLDRFQUFnQjs4Q0FFbkNPLE9BQU8sd0JBQ1AsOERBQUNILDZEQUFTQTt3Q0FBQ08sV0FBV0E7d0NBQVdLLGlCQUFpQkE7Ozs7OzZEQUMvQyw4REFBQ2IsNkRBQVNBO3dDQUFDTSxXQUFXQTt3Q0FBV0ssaUJBQWlCQTs7Ozs7NENBQW1COzs7Ozs7OENBSTVFLDhEQUFDMEI7b0NBQUlKLFdBQVcsT0FBcUIsT0FBZHBDLHlFQUFhOzhDQUVoQ08sT0FBTyx3QkFDUCw4REFBQ2lDO3dDQUFJSixXQUFXcEMsOEVBQWtCO2tEQUNoQyw0RUFBQ0UsK0RBQVdBOzRDQUFDYSxjQUFjQTs0Q0FBY0osV0FBV0E7Ozs7Ozs7Ozs7NkRBR3RELDhEQUFDTiwrREFBV0E7d0NBQUNRLGNBQWNBOzs7Ozs0Q0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRN0Q7R0FwRlNQO0tBQUFBO0FBc0ZULCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9iaGFqYW4uanN4P2MzYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0JoYWphbi5tb2R1bGUuY3NzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJ0AvY29tcG9uZW50cy9WaWRlb1BsYXllcidcbmltcG9ydCBNdXNpY0xpc3QgZnJvbSAnQC9jb21wb25lbnRzL011c2ljTGlzdCdcbmltcG9ydCBWaWRlb0xpc3QgZnJvbSAnQC9jb21wb25lbnRzL1ZpZGVvTGlzdCdcbmltcG9ydCBNdXNpY1BsYXllciBmcm9tICdAL2NvbXBvbmVudHMvTXVzaWNQbGF5ZXInXG5cbmZ1bmN0aW9uIEJoYWphbigpIHtcbiAgY29uc3QgW2lkLCBzZXRJRF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFttdXNpY0xpc3QsIHNldE11c2ljTGlzdF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3ZpZGVvTGlzdCwgc2V0VmlkZW9MaXN0XSA9IHVzZVN0YXRlKFtdKSBcbiAgY29uc3QgW211c2ljRGV0YWlscywgc2V0TXVzaWNEZXRhaWxzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbdmlkZW9EZXRhaWxzLCBzZXRWaWRlb0RldGFpbHNdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCBnZXRNdXNpYyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXhpb3MuZ2V0KCcvYXBpL2JoYWphbi9tdXNpYycpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc2V0TXVzaWNMaXN0KGRhdGE/LmRhdGEpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VmlkZW8gPSAoKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF4aW9zLmdldCgnL2FwaS9iaGFqYW4vdmlkZW8nKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHNldFZpZGVvTGlzdChkYXRhPy5kYXRhKVxuICAgICAgfSlcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBnZXRNdXNpYygpXG4gICAgICBnZXRWaWRlbygpXG4gICAgfSwgW10pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+QmhhamFuIHwgQmhhZ2F2YWQgR2l0YTwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIj48L21ldGE+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT0na2V5d29yZHMnIGNvbnRlbnQ9J0JoYWdhdmFkIEdpdGEsIEJoYWdhdmFkR2l0YSwgYmhhZ2F2YWQgZ2l0YSwgQmhhZ2F2YWRHaXRhIGJ5IERocnV2IFBhcm1hciwgQmhhZ2F2YWQgR2l0YSBieSBEaHJ1diBQYXJtYXInIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGhlIFNyaW1hZCBCaGFnYXZhZCBHaXRhIGlzIHRoZSBtb3N0IHNhY3JlZCBhbmQgcG9wdWxhciBib29rIG9mIEhpbmR1cy4gQWNjb3JkaW5nIHRvIHRoZSBzY3JpcHR1cmVzLCB0aGUgR2l0YSBpcyB0aGUgc3VwcmVtZSBib29rIGluIGFsbCB0aGUgYm9va3MuIFRoZSBiaGFnYXZhZCBnaXRhIGJvb2sgY29udGFpbnMgNzAwLXZlcnNlcyB3aGljaCBjb21lcyBpbiB0aGUgTWFoYWJoYXJhdGEgKHRoZSBJbmRpYW4gZXBpYykuIEdpdGEgbWVhbnMgdGhlIHNvbmcgaW4gU2Fuc2tyaXQgYW5kIFNyaW1hZCBCaGFnYXZhZCBtZWFucyB0aGUgc3VwcmVtZSBsb3JkLiBTbyB0aGUgU3JpbWFkIEJoYWdhdmFkIEdpdGEgbWVhbnMgIOKAmHRoZSBzb25nIG9mIHRoZSBnb2TigJkuXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDx2aWRlbyBzcmM9Jy9hc3NldHMvdmlkZW8vYmcubXA0JyBhdXRvUGxheSBsb29wIG11dGVkIGNsYXNzTmFtZT17c3R5bGVzLm15VmlkZW99IC8+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiYWJvdXQtdXNcIiBjbGFzc05hbWU9e2Ake3N0eWxlcy5iaGFqYW59YH0gPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9uX3RpdGxlIG10LTUgcGItMGB9PlxuICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIHRleHRTaGFkb3c6ICctM3B4IDVweCAxMHB4ICMxZTFlMWUnLCBsZXR0ZXJTcGFjaW5nOiAnMXB4JyB9fT5CaGFqYW4gUGFnZTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250ZW50fSByb3dgfSBzdHlsZT17eyBoZWlnaHQ6ICc1JScsIG1hcmdpbkJvdHRvbTogJzEwcHgnIH19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbGB9PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIiBpZD0nbXVzaWMnIG9uQ2xpY2s9eyhlKSA9PiBzZXRJRChlLnRhcmdldC5pZCl9Pk11c2ljPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCIgaWQ9J3ZpZGVvJyBvbkNsaWNrPXsoZSkgPT4gc2V0SUQoZS50YXJnZXQuaWQpfT5WaWRlbzwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250ZW50fSByb3dgfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wgJHtzdHlsZXMubXVzaWNMaXN0fWB9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlkID09PSAndmlkZW8nID8gIFxuICAgICAgICAgICAgICAgICAgPFZpZGVvTGlzdCB2aWRlb0xpc3Q9e3ZpZGVvTGlzdH0gc2V0VmlkZW9EZXRhaWxzPXtzZXRWaWRlb0RldGFpbHN9IC8+XG4gICAgICAgICAgICAgICAgICA6ICA8TXVzaWNMaXN0IG11c2ljTGlzdD17bXVzaWNMaXN0fSBzZXRNdXNpY0RldGFpbHM9e3NldE11c2ljRGV0YWlsc30gLz4gXG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sICR7c3R5bGVzLnBsYXllcn1gfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZCA9PT0gJ3ZpZGVvJyA/IFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb1BsYXllcn0+XG4gICAgICAgICAgICAgICAgICAgIDxWaWRlb1BsYXllciB2aWRlb0RldGFpbHM9e3ZpZGVvRGV0YWlsc30gdmlkZW9MaXN0PXt2aWRlb0xpc3R9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA6IFxuICAgICAgICAgICAgICAgICAgPE11c2ljUGxheWVyIG11c2ljRGV0YWlscz17bXVzaWNEZXRhaWxzfSAvPlxuICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJoYWphblxuIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsInN0eWxlcyIsImF4aW9zIiwiVmlkZW9QbGF5ZXIiLCJNdXNpY0xpc3QiLCJWaWRlb0xpc3QiLCJNdXNpY1BsYXllciIsIkJoYWphbiIsImlkIiwic2V0SUQiLCJtdXNpY0xpc3QiLCJzZXRNdXNpY0xpc3QiLCJ2aWRlb0xpc3QiLCJzZXRWaWRlb0xpc3QiLCJtdXNpY0RldGFpbHMiLCJzZXRNdXNpY0RldGFpbHMiLCJ2aWRlb0RldGFpbHMiLCJzZXRWaWRlb0RldGFpbHMiLCJnZXRNdXNpYyIsInJlc3BvbnNlIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJnZXRWaWRlbyIsInRpdGxlIiwibWV0YSIsImNoYXJzZXQiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwidmlkZW8iLCJzcmMiLCJhdXRvUGxheSIsImxvb3AiLCJtdXRlZCIsImNsYXNzTmFtZSIsIm15VmlkZW8iLCJzZWN0aW9uIiwiYmhhamFuIiwiZGl2IiwiZGF0YS1hb3MiLCJoMiIsInN0eWxlIiwiY29sb3IiLCJ0ZXh0U2hhZG93IiwibGV0dGVyU3BhY2luZyIsImhlaWdodCIsIm1hcmdpbkJvdHRvbSIsInVsIiwibGkiLCJvbkNsaWNrIiwiZSIsInRhcmdldCIsInBsYXllciIsInZpZGVvUGxheWVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/bhajan.jsx\n"));

/***/ })

});