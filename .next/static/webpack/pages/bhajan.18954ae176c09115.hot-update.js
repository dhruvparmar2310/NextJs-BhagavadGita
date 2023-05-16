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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Bhajan.module.css */ \"./src/styles/Bhajan.module.css\");\n/* harmony import */ var _styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_VideoPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/VideoPlayer */ \"./src/components/VideoPlayer/index.jsx\");\n/* harmony import */ var _components_MusicList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/MusicList */ \"./src/components/MusicList/index.jsx\");\n/* harmony import */ var _components_VideoList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/VideoList */ \"./src/components/VideoList/index.jsx\");\n/* harmony import */ var _components_MusicPlayer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/MusicPlayer */ \"./src/components/MusicPlayer/index.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Bhajan() {\n    _s();\n    const [id, setID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [musicList, setMusicList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [videoList, setVideoList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [musicDetails, setMusicDetails] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [videoDetails, setVideoDetails] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const getMusic = ()=>{\n        const response = axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"/api/bhajan/music\").then((data)=>{\n            setMusicList(data === null || data === void 0 ? void 0 : data.data);\n        });\n        return response;\n    };\n    const getVideo = ()=>{\n        const response = axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"/api/bhajan/video\").then((data)=>{\n            setVideoList(data === null || data === void 0 ? void 0 : data.data);\n        });\n        return response;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getMusic();\n        getVideo();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Bhajan | Bhagavad Gita\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charset: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"Bhagavad Gita, BhagavadGita, bhagavad gita, BhagavadGita by Dhruv Parmar, Bhagavad Gita by Dhruv Parmar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"The Srimad Bhagavad Gita is the most sacred and popular book of Hindus. According to the scriptures, the Gita is the supreme book in all the books. The bhagavad gita book contains 700-verses which comes in the Mahabharata (the Indian epic). Gita means the song in Sanskrit and Srimad Bhagavad means the supreme lord. So the Srimad Bhagavad Gita means  ‘the song of the god’.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                src: \"/assets/video/bg.mp4\",\n                autoPlay: true,\n                loop: true,\n                muted: true,\n                className: (_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9___default().myVideo)\n            }, void 0, false, {\n                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"about-us\",\n                className: \"\".concat((_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9___default().bhajan)),\n                style: {\n                    height: \"auto\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    \"data-aos\": \"fade-up\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"section_title mt-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                style: {\n                                    color: \"white\",\n                                    textShadow: \"-3px 5px 10px #1e1e1e\",\n                                    letterSpacing: \"1px\"\n                                },\n                                children: \"Bhajan Page\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9___default().content), \" row\"),\n                            style: {\n                                height: \"5%\",\n                                marginBottom: \"10px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"nav justify-content-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"nav-item\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                className: \"nav-link\",\n                                                href: \"#\",\n                                                id: \"music\",\n                                                onClick: (e)=>setID(e.target.id),\n                                                children: \"Music\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"nav-item\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                className: \"nav-link\",\n                                                href: \"#\",\n                                                id: \"video\",\n                                                onClick: (e)=>setID(e.target.id),\n                                                children: \"Video\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9___default().content), \" row\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col \".concat((_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9___default().musicList)),\n                                    children: id !== \"music\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MusicList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        musicList: musicList,\n                                        setMusicDetails: setMusicDetails\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 19\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_VideoList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        videoList: videoList,\n                                        setVideoDetails: setVideoDetails\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 22\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col \".concat((_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9___default().player)),\n                                    children: id === \"music\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MusicPlayer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        musicDetails: musicDetails\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 21\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_9___default().videoPlayer),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_VideoPlayer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                videoDetails: videoDetails,\n                                                videoList: videoList\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 23\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false)\n                                }, void 0, false, {\n                                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Bhajan, \"th6l4RIdKPUnS3OxxKa7eDj/q7k=\");\n_c = Bhajan;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bhajan);\nvar _c;\n$RefreshReg$(_c, \"Bhajan\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU0zRiw4REFBQ21DOzRCQUFJTixXQUFXLEdBQWtCLE9BQWZwQywwRUFBYyxFQUFDOzs4Q0FDaEMsOERBQUMwQztvQ0FBSU4sV0FBVyxPQUF3QixPQUFqQnBDLDRFQUFnQjs4Q0FFbkNPLE9BQU8sd0JBQ1AsOERBQUNKLDZEQUFTQTt3Q0FBQ00sV0FBV0E7d0NBQVdLLGlCQUFpQkE7Ozs7OzZEQUMvQyw4REFBQ1YsNkRBQVNBO3dDQUFDTyxXQUFXQTt3Q0FBV0ssaUJBQWlCQTs7Ozs7NENBQW1COzs7Ozs7OENBSTVFLDhEQUFDMEI7b0NBQUlOLFdBQVcsT0FBcUIsT0FBZHBDLHlFQUFhOzhDQUVoQ08sT0FBTyx3QkFDTCw4REFBQ0YsK0RBQVdBO3dDQUFDUSxjQUFjQTs7Ozs7NkRBQzdCO2tEQUNFLDRFQUFDNkI7NENBQUlOLFdBQVdwQyw4RUFBa0I7c0RBQ2hDLDRFQUFDRSwrREFBV0E7Z0RBQUNhLGNBQWNBO2dEQUFjSixXQUFXQTs7Ozs7Ozs7Ozs7cURBRXJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXJCO0dBckZTTDtLQUFBQTtBQXVGVCwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYmhhamFuLmpzeD9jM2JkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9CaGFqYW4ubW9kdWxlLmNzcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBWaWRlb1BsYXllciBmcm9tICdAL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXInXG5pbXBvcnQgTXVzaWNMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9NdXNpY0xpc3QnXG5pbXBvcnQgVmlkZW9MaXN0IGZyb20gJ0AvY29tcG9uZW50cy9WaWRlb0xpc3QnXG5pbXBvcnQgTXVzaWNQbGF5ZXIgZnJvbSAnQC9jb21wb25lbnRzL011c2ljUGxheWVyJ1xuXG5mdW5jdGlvbiBCaGFqYW4oKSB7XG4gIGNvbnN0IFtpZCwgc2V0SURdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbbXVzaWNMaXN0LCBzZXRNdXNpY0xpc3RdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFt2aWRlb0xpc3QsIHNldFZpZGVvTGlzdF0gPSB1c2VTdGF0ZShbXSkgXG4gIGNvbnN0IFttdXNpY0RldGFpbHMsIHNldE11c2ljRGV0YWlsc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3ZpZGVvRGV0YWlscywgc2V0VmlkZW9EZXRhaWxzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgY29uc3QgZ2V0TXVzaWMgPSAoKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF4aW9zLmdldCgnL2FwaS9iaGFqYW4vbXVzaWMnKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHNldE11c2ljTGlzdChkYXRhPy5kYXRhKVxuICAgICAgfSlcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH1cblxuICAgIGNvbnN0IGdldFZpZGVvID0gKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBheGlvcy5nZXQoJy9hcGkvYmhhamFuL3ZpZGVvJylcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzZXRWaWRlb0xpc3QoZGF0YT8uZGF0YSlcbiAgICAgIH0pXG4gICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZ2V0TXVzaWMoKVxuICAgICAgZ2V0VmlkZW8oKVxuICAgIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkJoYWphbiB8IEJoYWdhdmFkIEdpdGE8L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+PC9tZXRhPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J2tleXdvcmRzJyBjb250ZW50PSdCaGFnYXZhZCBHaXRhLCBCaGFnYXZhZEdpdGEsIGJoYWdhdmFkIGdpdGEsIEJoYWdhdmFkR2l0YSBieSBEaHJ1diBQYXJtYXIsIEJoYWdhdmFkIEdpdGEgYnkgRGhydXYgUGFybWFyJyAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoZSBTcmltYWQgQmhhZ2F2YWQgR2l0YSBpcyB0aGUgbW9zdCBzYWNyZWQgYW5kIHBvcHVsYXIgYm9vayBvZiBIaW5kdXMuIEFjY29yZGluZyB0byB0aGUgc2NyaXB0dXJlcywgdGhlIEdpdGEgaXMgdGhlIHN1cHJlbWUgYm9vayBpbiBhbGwgdGhlIGJvb2tzLiBUaGUgYmhhZ2F2YWQgZ2l0YSBib29rIGNvbnRhaW5zIDcwMC12ZXJzZXMgd2hpY2ggY29tZXMgaW4gdGhlIE1haGFiaGFyYXRhICh0aGUgSW5kaWFuIGVwaWMpLiBHaXRhIG1lYW5zIHRoZSBzb25nIGluIFNhbnNrcml0IGFuZCBTcmltYWQgQmhhZ2F2YWQgbWVhbnMgdGhlIHN1cHJlbWUgbG9yZC4gU28gdGhlIFNyaW1hZCBCaGFnYXZhZCBHaXRhIG1lYW5zICDigJh0aGUgc29uZyBvZiB0aGUgZ29k4oCZLlwiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiIC8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8dmlkZW8gc3JjPScvYXNzZXRzL3ZpZGVvL2JnLm1wNCcgYXV0b1BsYXkgbG9vcCBtdXRlZCBjbGFzc05hbWU9e3N0eWxlcy5teVZpZGVvfSAvPlxuICAgICAgICA8c2VjdGlvbiBpZD1cImFib3V0LXVzXCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYmhhamFufWB9IHN0eWxlPXt7IGhlaWdodDogJ2F1dG8nIH19PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9uX3RpdGxlIG10LTVgfT5cbiAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCB0ZXh0U2hhZG93OiAnLTNweCA1cHggMTBweCAjMWUxZTFlJywgbGV0dGVyU3BhY2luZzogJzFweCcgfX0+QmhhamFuIFBhZ2U8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGVudH0gcm93YH0gc3R5bGU9e3sgaGVpZ2h0OiAnNSUnLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2xgfT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCIgaWQ9J211c2ljJyBvbkNsaWNrPXsoZSkgPT4gc2V0SUQoZS50YXJnZXQuaWQpfT5NdXNpYzwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiIGlkPSd2aWRlbycgb25DbGljaz17KGUpID0+IHNldElEKGUudGFyZ2V0LmlkKX0+VmlkZW88L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGVudH0gcm93YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sICR7c3R5bGVzLm11c2ljTGlzdH1gfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZCAhPT0gJ211c2ljJyA/ICBcbiAgICAgICAgICAgICAgICAgIDxNdXNpY0xpc3QgbXVzaWNMaXN0PXttdXNpY0xpc3R9IHNldE11c2ljRGV0YWlscz17c2V0TXVzaWNEZXRhaWxzfSAvPiBcbiAgICAgICAgICAgICAgICAgIDogIDxWaWRlb0xpc3QgdmlkZW9MaXN0PXt2aWRlb0xpc3R9IHNldFZpZGVvRGV0YWlscz17c2V0VmlkZW9EZXRhaWxzfSAvPlxuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbCAke3N0eWxlcy5wbGF5ZXJ9YH0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWQgPT09ICdtdXNpYycgPyBcbiAgICAgICAgICAgICAgICAgICAgPE11c2ljUGxheWVyIG11c2ljRGV0YWlscz17bXVzaWNEZXRhaWxzfSAvPiA6IFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb1BsYXllcn0+XG4gICAgICAgICAgICAgICAgICAgICAgPFZpZGVvUGxheWVyIHZpZGVvRGV0YWlscz17dmlkZW9EZXRhaWxzfSB2aWRlb0xpc3Q9e3ZpZGVvTGlzdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCaGFqYW5cbiJdLCJuYW1lcyI6WyJIZWFkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJzdHlsZXMiLCJheGlvcyIsIlZpZGVvUGxheWVyIiwiTXVzaWNMaXN0IiwiVmlkZW9MaXN0IiwiTXVzaWNQbGF5ZXIiLCJCaGFqYW4iLCJpZCIsInNldElEIiwibXVzaWNMaXN0Iiwic2V0TXVzaWNMaXN0IiwidmlkZW9MaXN0Iiwic2V0VmlkZW9MaXN0IiwibXVzaWNEZXRhaWxzIiwic2V0TXVzaWNEZXRhaWxzIiwidmlkZW9EZXRhaWxzIiwic2V0VmlkZW9EZXRhaWxzIiwiZ2V0TXVzaWMiLCJyZXNwb25zZSIsImdldCIsInRoZW4iLCJkYXRhIiwiZ2V0VmlkZW8iLCJ0aXRsZSIsIm1ldGEiLCJjaGFyc2V0IiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsInZpZGVvIiwic3JjIiwiYXV0b1BsYXkiLCJsb29wIiwibXV0ZWQiLCJjbGFzc05hbWUiLCJteVZpZGVvIiwic2VjdGlvbiIsImJoYWphbiIsInN0eWxlIiwiaGVpZ2h0IiwiZGl2IiwiZGF0YS1hb3MiLCJoMiIsImNvbG9yIiwidGV4dFNoYWRvdyIsImxldHRlclNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJ1bCIsImxpIiwib25DbGljayIsImUiLCJ0YXJnZXQiLCJwbGF5ZXIiLCJ2aWRlb1BsYXllciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/bhajan.jsx\n"));

/***/ })

});