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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_pages_bhajan_jsx_import_Ysabeau_arguments_subsets_latin_weight_200_300_400_500_style_normal_italic_variableName_ysabeau___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/pages/bhajan.jsx\",\"import\":\"Ysabeau\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"200\",\"300\",\"400\",\"500\"],\"style\":[\"normal\",\"italic\"]}],\"variableName\":\"ysabeau\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/pages/bhajan.jsx\\\",\\\"import\\\":\\\"Ysabeau\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"200\\\",\\\"300\\\",\\\"400\\\",\\\"500\\\"],\\\"style\\\":[\\\"normal\\\",\\\"italic\\\"]}],\\\"variableName\\\":\\\"ysabeau\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_pages_bhajan_jsx_import_Ysabeau_arguments_subsets_latin_weight_200_300_400_500_style_normal_italic_variableName_ysabeau___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_bhajan_jsx_import_Ysabeau_arguments_subsets_latin_weight_200_300_400_500_style_normal_italic_variableName_ysabeau___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Bhajan.module.css */ \"./src/styles/Bhajan.module.css\");\n/* harmony import */ var _styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Bhajan() {\n    _s();\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const getMusicList = ()=>{\n        const response = axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/music\").then((data)=>{\n            setList(data === null || data === void 0 ? void 0 : data.data);\n            console.log(\"data :>> \", data === null || data === void 0 ? void 0 : data.data);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getMusicList();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Bhajan | Bhagavad Gita\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charset: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"Bhagavad Gita, BhagavadGita, bhagavad gita, BhagavadGita by Dhruv Parmar, Bhagavad Gita by Dhruv Parmar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"The Srimad Bhagavad Gita is the most sacred and popular book of Hindus. According to the scriptures, the Gita is the supreme book in all the books. The bhagavad gita book contains 700-verses which comes in the Mahabharata (the Indian epic). Gita means the song in Sanskrit and Srimad Bhagavad means the supreme lord. So the Srimad Bhagavad Gita means  ‘the song of the god’.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                src: \"/assets/video/bg.mp4\",\n                autoPlay: true,\n                loop: true,\n                muted: true,\n                className: (_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_5___default().myVideo)\n            }, void 0, false, {\n                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"about-us\",\n                className: \"\".concat((_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_5___default().bhajan)),\n                style: {\n                    height: \"auto\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    \"data-aos\": \"fade-up\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"section_title mt-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                style: {\n                                    color: \"white\",\n                                    textShadow: \"-3px 5px 10px #1e1e1e\",\n                                    letterSpacing: \"1px\"\n                                },\n                                children: \"Bhajan Page\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_5___default().content), \" row\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col \".concat((_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_5___default().musicList)),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"\".concat((next_font_google_target_css_path_src_pages_bhajan_jsx_import_Ysabeau_arguments_subsets_latin_weight_200_300_400_500_style_normal_italic_variableName_ysabeau___WEBPACK_IMPORTED_MODULE_6___default().className)),\n                                            children: \"Music List\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                            className: \"table table-responsive table-borderless\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                                children: list === null || list === void 0 ? void 0 : list.map((item, index)=>{\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                                    children: item === null || item === void 0 ? void 0 : item.id\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                                                    lineNumber: 53,\n                                                                    columnNumber: 29\n                                                                }, this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                                    children: item === null || item === void 0 ? void 0 : item.title\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                                                    lineNumber: 54,\n                                                                    columnNumber: 29\n                                                                }, this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                        className: \"btn btn-sm btn-dark\",\n                                                                        children: \"Play\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                                                        lineNumber: 56,\n                                                                        columnNumber: 31\n                                                                    }, this)\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                                                    lineNumber: 55,\n                                                                    columnNumber: 29\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                                            lineNumber: 52,\n                                                            columnNumber: 27\n                                                        }, this)\n                                                    }, index, false, {\n                                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 25\n                                                    }, this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col \".concat((_styles_Bhajan_module_css__WEBPACK_IMPORTED_MODULE_5___default().musicPlayer)),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"\".concat((next_font_google_target_css_path_src_pages_bhajan_jsx_import_Ysabeau_arguments_subsets_latin_weight_200_300_400_500_style_normal_italic_variableName_ysabeau___WEBPACK_IMPORTED_MODULE_6___default().className)),\n                                            children: \"Music Player\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odit aliquid commodi. Accusamus dicta asperiores, ab sequi quos quas repudiandae fugit suscipit vitae et iste veritatis quidem facilis excepturi temporibus.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/bhajan.jsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Bhajan, \"ZBNfaudzy8bVxb8UgkyyMnLdlWY=\");\n_c = Bhajan;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bhajan);\nvar _c;\n$RefreshReg$(_c, \"Bhajan\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YmhhamFuLmpzeD9jM2JkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBZc2FiZWF1IH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0JoYWphbi5tb2R1bGUuY3NzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCB5c2FiZWF1ID0gWXNhYmVhdSh7IHN1YnNldHM6IFsnbGF0aW4nXSwgd2VpZ2h0OiBbJzIwMCcsICczMDAnLCAnNDAwJywgJzUwMCddLCBzdHlsZTogWydub3JtYWwnLCAnaXRhbGljJ10gfSlcblxuZnVuY3Rpb24gQmhhamFuKCkge1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSlcblxuICAgIGNvbnN0IGdldE11c2ljTGlzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBheGlvcy5nZXQoJy9hcGkvbXVzaWMnKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHNldExpc3QoZGF0YT8uZGF0YSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIDo+PiAnLCBkYXRhPy5kYXRhKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZ2V0TXVzaWNMaXN0KClcbiAgICB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5CaGFqYW4gfCBCaGFnYXZhZCBHaXRhPC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPjwvbWV0YT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdrZXl3b3JkcycgY29udGVudD0nQmhhZ2F2YWQgR2l0YSwgQmhhZ2F2YWRHaXRhLCBiaGFnYXZhZCBnaXRhLCBCaGFnYXZhZEdpdGEgYnkgRGhydXYgUGFybWFyLCBCaGFnYXZhZCBHaXRhIGJ5IERocnV2IFBhcm1hcicgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaGUgU3JpbWFkIEJoYWdhdmFkIEdpdGEgaXMgdGhlIG1vc3Qgc2FjcmVkIGFuZCBwb3B1bGFyIGJvb2sgb2YgSGluZHVzLiBBY2NvcmRpbmcgdG8gdGhlIHNjcmlwdHVyZXMsIHRoZSBHaXRhIGlzIHRoZSBzdXByZW1lIGJvb2sgaW4gYWxsIHRoZSBib29rcy4gVGhlIGJoYWdhdmFkIGdpdGEgYm9vayBjb250YWlucyA3MDAtdmVyc2VzIHdoaWNoIGNvbWVzIGluIHRoZSBNYWhhYmhhcmF0YSAodGhlIEluZGlhbiBlcGljKS4gR2l0YSBtZWFucyB0aGUgc29uZyBpbiBTYW5za3JpdCBhbmQgU3JpbWFkIEJoYWdhdmFkIG1lYW5zIHRoZSBzdXByZW1lIGxvcmQuIFNvIHRoZSBTcmltYWQgQmhhZ2F2YWQgR2l0YSBtZWFucyAg4oCYdGhlIHNvbmcgb2YgdGhlIGdvZOKAmS5cIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPHZpZGVvIHNyYz0nL2Fzc2V0cy92aWRlby9iZy5tcDQnIGF1dG9QbGF5IGxvb3AgbXV0ZWQgY2xhc3NOYW1lPXtzdHlsZXMubXlWaWRlb30gLz5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJhYm91dC11c1wiIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJoYWphbn1gfSBzdHlsZT17eyBoZWlnaHQ6ICdhdXRvJyB9fT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2VjdGlvbl90aXRsZSBtdC01YH0+XG4gICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgdGV4dFNoYWRvdzogJy0zcHggNXB4IDEwcHggIzFlMWUxZScsIGxldHRlclNwYWNpbmc6ICcxcHgnIH19PkJoYWphbiBQYWdlPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRlbnR9IHJvd2B9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbCAke3N0eWxlcy5tdXNpY0xpc3R9YH0+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7eXNhYmVhdS5jbGFzc05hbWV9YH0+TXVzaWMgTGlzdDwvaDE+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17YHRhYmxlIHRhYmxlLXJlc3BvbnNpdmUgdGFibGUtYm9yZGVybGVzc2B9PlxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7bGlzdD8ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0/LmlkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtPy50aXRsZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYnRuIGJ0bi1zbSBidG4tZGFya2B9PlBsYXk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wgJHtzdHlsZXMubXVzaWNQbGF5ZXJ9YH0+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7eXNhYmVhdS5jbGFzc05hbWV9YH0+TXVzaWMgUGxheWVyPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE51bXF1YW0gb2RpdCBhbGlxdWlkIGNvbW1vZGkuIEFjY3VzYW11cyBkaWN0YSBhc3BlcmlvcmVzLCBhYiBzZXF1aSBxdW9zIHF1YXMgcmVwdWRpYW5kYWUgZnVnaXQgc3VzY2lwaXQgdml0YWUgZXQgaXN0ZSB2ZXJpdGF0aXMgcXVpZGVtIGZhY2lsaXMgZXhjZXB0dXJpIHRlbXBvcmlidXMuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCaGFqYW5cbiJdLCJuYW1lcyI6WyJ5c2FiZWF1IiwiSGVhZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwic3R5bGVzIiwiYXhpb3MiLCJCaGFqYW4iLCJsaXN0Iiwic2V0TGlzdCIsImdldE11c2ljTGlzdCIsInJlc3BvbnNlIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJtZXRhIiwiY2hhcnNldCIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJ2aWRlbyIsInNyYyIsImF1dG9QbGF5IiwibG9vcCIsIm11dGVkIiwiY2xhc3NOYW1lIiwibXlWaWRlbyIsInNlY3Rpb24iLCJpZCIsImJoYWphbiIsInN0eWxlIiwiaGVpZ2h0IiwiZGl2IiwiZGF0YS1hb3MiLCJoMiIsImNvbG9yIiwidGV4dFNoYWRvdyIsImxldHRlclNwYWNpbmciLCJtdXNpY0xpc3QiLCJoMSIsInRhYmxlIiwidGJvZHkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJGcmFnbWVudCIsInRyIiwidGQiLCJidXR0b24iLCJtdXNpY1BsYXllciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/bhajan.jsx\n"));

/***/ })

});