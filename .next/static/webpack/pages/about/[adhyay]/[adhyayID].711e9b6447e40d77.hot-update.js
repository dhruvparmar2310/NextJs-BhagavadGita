"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about/[adhyay]/[adhyayID]",{

/***/ "./src/pages/about/[adhyay]/[adhyayID].js":
/*!************************************************!*\
  !*** ./src/pages/about/[adhyay]/[adhyayID].js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_pages_about_adhyay_adhyayID_js_import_Ysabeau_arguments_subsets_latin_weight_200_300_400_500_style_normal_italic_variableName_ysabeau___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/pages/about/[adhyay]/[adhyayID].js\",\"import\":\"Ysabeau\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"200\",\"300\",\"400\",\"500\"],\"style\":[\"normal\",\"italic\"]}],\"variableName\":\"ysabeau\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/pages/about/[adhyay]/[adhyayID].js\\\",\\\"import\\\":\\\"Ysabeau\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"200\\\",\\\"300\\\",\\\"400\\\",\\\"500\\\"],\\\"style\\\":[\\\"normal\\\",\\\"italic\\\"]}],\\\"variableName\\\":\\\"ysabeau\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_pages_about_adhyay_adhyayID_js_import_Ysabeau_arguments_subsets_latin_weight_200_300_400_500_style_normal_italic_variableName_ysabeau___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_about_adhyay_adhyayID_js_import_Ysabeau_arguments_subsets_latin_weight_200_300_400_500_style_normal_italic_variableName_ysabeau___WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../styles/Adhyay.module.css */ \"./src/styles/Adhyay.module.css\");\n/* harmony import */ var _styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_assets_adhyay_ch_1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/assets/adhyay/ch-1.jpg */ \"./public/assets/adhyay/ch-1.jpg\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction AdhyayID() {\n    var _data_content;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { adhyayID  } = router.query;\n    const fetchAdhyay = ()=>{\n        const response = axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"/api/adhyay/\".concat(adhyayID)).then((data)=>{\n            console.log(\"data >> \", data === null || data === void 0 ? void 0 : data.data);\n            setData(data === null || data === void 0 ? void 0 : data.data);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetchAdhyay();\n        console.log(\"adhyayID :>> \", adhyayID);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"breadcrumbs\",\n                className: \"breadcrumbs\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex justify-content-between align-items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \"Adhyay - \",\n                                    adhyayID\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                lineNumber: 36,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                            lineNumber: 38,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                        lineNumber: 38,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/about/adhyay\",\n                                            children: \"Adhyay\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                            lineNumber: 39,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                        lineNumber: 39,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            \"Adhyay - \",\n                                            adhyayID\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"about-us\",\n                className: \"\".concat((_styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_7___default().adhyay)),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    \"data-aos\": \"fade-up\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row \".concat((_styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_7___default().content)),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-lg-4 text-center\",\n                                \"data-aos\": \"fade-right\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _public_assets_adhyay_ch_1_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n                                    className: \"img-fluid\",\n                                    width: 500,\n                                    height: 500,\n                                    quality: 100,\n                                    alt: \"bhagavad gita\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-lg-8 \".concat((next_font_google_target_css_path_src_pages_about_adhyay_adhyayID_js_import_Ysabeau_arguments_subsets_latin_weight_200_300_400_500_style_normal_italic_variableName_ysabeau___WEBPACK_IMPORTED_MODULE_8___default().className)),\n                                \"data-aos\": \"fade-left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"The Bhagavad Gita, or the song of God, was revealed by Lord Shree Krishna to Arjun on the threshold of the epic war of Mahabharata. A decisive battle between two sets of cousins, the Kauravas and the Pandavas, was just about to commence on the battlefield of Kurukshetra. A detailed account of the reasons that led to such a colossal war; is given under Introduction-The Setting of the Bhagavad Gita.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                        lineNumber: 60,\n                                        columnNumber: 23\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-italic\",\n                                        children: \"The Bhagavad Gita is primarily a conversation between Lord Shree Krishna and Arjun. However, the first chapter begins with a dialogue between King Dhritarashtra and his minister Sanjay. Dhritarashtra being blind, could not leave his palace in Hastinapur but was eager to know the ongoings of the battlefield.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                        lineNumber: 63,\n                                        columnNumber: 23\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-italic\",\n                                        children: \"Sanjay was a disciple of Sage Ved Vyas, the author of the epic Mahabharata and several other Hindu scriptures. Sage Ved Vyas possessed a mystic ability to see and hear events occurring in distant places. He had bestowed upon Sanjay the miraculous power of distant vision. Therefore, Sanjay could see and hear, what transpired on the battleground of Kurukshetra, and gave a first-hand account to King Dhritarashtra while still being in his palace.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                        lineNumber: 66,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                    lineNumber: 47,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"about-us\",\n                className: \"\".concat((_styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_7___default().faq)),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    \"data-aos\": \"fade-up\",\n                    children: data === null || data === void 0 ? void 0 : (_data_content = data.content) === null || _data_content === void 0 ? void 0 : _data_content.map((item)=>{\n                        var _item_translation, _item_translation_hi;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {\n                            children: [\n                                console.log(\"item :>> \", item[0]),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Accordion, {\n                                    defaultActiveKey: item === null || item === void 0 ? void 0 : item.shlokID,\n                                    flush: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Accordion.Item, {\n                                        eventKey: item === null || item === void 0 ? void 0 : item.shlokID,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Accordion.Header, {\n                                                children: item === null || item === void 0 ? void 0 : item.shlok\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                                lineNumber: 83,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Accordion.Body, {\n                                                children: item === null || item === void 0 ? void 0 : (_item_translation = item.translation) === null || _item_translation === void 0 ? void 0 : (_item_translation_hi = _item_translation.hi) === null || _item_translation_hi === void 0 ? void 0 : _item_translation_hi.data\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                                lineNumber: 86,\n                                                columnNumber: 23\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                        lineNumber: 82,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                    lineNumber: 81,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, item === null || item === void 0 ? void 0 : item.shlokID, true, {\n                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                            lineNumber: 79,\n                            columnNumber: 17\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                    lineNumber: 75,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AdhyayID, \"hsn7jijbKTvcSiStWXaVhMMylug=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = AdhyayID;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdhyayID);\nvar _c;\n$RefreshReg$(_c, \"AdhyayID\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQvW2FkaHlheV0vW2FkaHlheUlEXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVNQTtBQVZtQjtBQUNLO0FBQ0Y7QUFDVztBQUNXO0FBQ0k7QUFFTTtBQUNYO0FBSWpELFNBQVNZLFdBQVc7UUFnRVBDOztJQS9EVCxNQUFNLENBQUNBLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNRLElBQUlDLE1BQU0sR0FBR1QsK0NBQVFBLENBQUM7SUFDN0IsTUFBTVUsU0FBU2Isc0RBQVNBO0lBQ3hCLE1BQU0sRUFBQ2MsU0FBUSxFQUFDLEdBQUdELE9BQU9FLEtBQUs7SUFFakMsTUFBTUMsY0FBYyxJQUFNO1FBQ3hCLE1BQU1DLFdBQVdwQixpREFBUyxDQUFDLGVBQXdCLE9BQVRpQixXQUN6Q0ssSUFBSSxDQUFDVixDQUFBQSxPQUFRO1lBQ1pXLFFBQVFDLEdBQUcsQ0FBQyxZQUFZWixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1BLElBQUk7WUFDbENDLFFBQVFELGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUEsSUFBSTtRQUNwQjtJQUNGO0lBRUFQLGdEQUFTQSxDQUFDLElBQU07UUFDZGM7UUFDQUksUUFBUUMsR0FBRyxDQUFDLGlCQUFpQlA7SUFDL0IsR0FBRyxFQUFFO0lBQ0wscUJBQ0U7OzBCQUNJLDhEQUFDUTtnQkFBUVgsSUFBRztnQkFBY1ksV0FBVTswQkFDaEMsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNYLDRFQUFDQzt3QkFBSUQsV0FBVTs7MENBQ1gsOERBQUNFOztvQ0FBRztvQ0FBVVg7Ozs7Ozs7MENBQ2QsOERBQUNZOztrREFDRyw4REFBQ0M7a0RBQUcsNEVBQUM1QixrREFBSUE7NENBQUM2QixNQUFLO3NEQUFJOzs7Ozs7Ozs7OztrREFDbkIsOERBQUNEO2tEQUFHLDRFQUFDNUIsa0RBQUlBOzRDQUFDNkIsTUFBSztzREFBZ0I7Ozs7Ozs7Ozs7O2tEQUMvQiw4REFBQ0Q7OzRDQUFHOzRDQUFVYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTTlCLDhEQUFDUTtnQkFBUVgsSUFBRztnQkFBV1ksV0FBVyxHQUFpQixPQUFkbkIseUVBQWE7MEJBQzlDLDRFQUFDb0I7b0JBQUlELFdBQVU7b0JBQVlPLFlBQVM7OEJBRWhDLDRFQUFDTjt3QkFBSUQsV0FBVyxPQUFzQixPQUFmbkIsMEVBQWM7OzBDQUNqQyw4REFBQ29CO2dDQUFJRCxXQUFVO2dDQUF1Qk8sWUFBUzswQ0FDM0MsNEVBQUNoQyxtREFBS0E7b0NBQUNrQyxLQUFLM0IsMEVBQVE7b0NBQ2hCa0IsV0FBVTtvQ0FDVlUsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsU0FBUztvQ0FDVEMsS0FBSTs7Ozs7Ozs7Ozs7MENBR1osOERBQUNaO2dDQUFJRCxXQUFXLFlBQThCLE9BQWxCM0IsOE5BQWlCO2dDQUFJa0MsWUFBUzs7a0RBQ3hELDhEQUFDTztrREFBRTs7Ozs7O2tEQUdILDhEQUFDQTt3Q0FBRWQsV0FBVTtrREFBYzs7Ozs7O2tEQUczQiw4REFBQ2M7d0NBQUVkLFdBQVU7a0RBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUXpDLDhEQUFDRDtnQkFBUVgsSUFBRztnQkFBV1ksV0FBVyxHQUFjLE9BQVhuQixzRUFBVTswQkFDN0MsNEVBQUNvQjtvQkFBSUQsV0FBVTtvQkFBWU8sWUFBUzs4QkFFakNyQixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLGdCQUFBQSxLQUFNc0IsT0FBTyxjQUFidEIsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWU4QixJQUFJLENBQUNDLE9BQVM7NEJBVW5CQTt3QkFUVCxxQkFDRSw4REFBQ3ZDLHVEQUFjOztnQ0FDWm1CLFFBQVFDLEdBQUcsQ0FBQyxhQUFhbUIsSUFBSSxDQUFDLEVBQUU7OENBQ2pDLDhEQUFDbEMsc0RBQVNBO29DQUFDb0Msa0JBQWtCRixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1HLE9BQU87b0NBQUVDLEtBQUs7OENBQy9DLDRFQUFDdEMsMkRBQWM7d0NBQUN3QyxVQUFVTixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1HLE9BQU87OzBEQUNyQyw4REFBQ3JDLDZEQUFnQjswREFDZGtDLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVEsS0FBSzs7Ozs7OzBEQUVkLDhEQUFDMUMsMkRBQWM7MERBQ2RrQyxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLG9CQUFBQSxLQUFNVSxXQUFXLGNBQWpCViwrQkFBQUEsS0FBQUEsSUFBQUEsd0JBQUFBLGtCQUFtQlcsa0RBQW5CWCxLQUFBQSx5QkFBdUIvQixJQUFOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBUkgrQixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1HLE9BQU87Ozs7O29CQWN0Qzs7Ozs7Ozs7Ozs7OztBQU9aO0dBdkZTbkM7O1FBR1VSLGtEQUFTQTs7O0tBSG5CUTtBQXlGVCwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYWJvdXQvW2FkaHlheV0vW2FkaHlheUlEXS5qcz8zMWJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvQWRoeWF5Lm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBZc2FiZWF1IH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBtYWluIGZyb20gJy4uLy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvYWRoeWF5L2NoLTEuanBnJ1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5jb25zdCB5c2FiZWF1ID0gWXNhYmVhdSh7IHN1YnNldHM6IFsnbGF0aW4nXSwgd2VpZ2h0OiBbJzIwMCcsICczMDAnLCAnNDAwJywgJzUwMCddLCBzdHlsZTogWydub3JtYWwnLCAnaXRhbGljJ10gfSlcblxuZnVuY3Rpb24gQWRoeWF5SUQoKSB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHthZGh5YXlJRH0gPSByb3V0ZXIucXVlcnlcblxuICBjb25zdCBmZXRjaEFkaHlheSA9ICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF4aW9zLmdldChgL2FwaS9hZGh5YXkvJHthZGh5YXlJRH1gKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2RhdGEgPj4gJywgZGF0YT8uZGF0YSlcbiAgICAgIHNldERhdGEoZGF0YT8uZGF0YSlcbiAgICB9KVxuICB9IFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hBZGh5YXkoKVxuICAgIGNvbnNvbGUubG9nKCdhZGh5YXlJRCA6Pj4gJywgYWRoeWF5SUQpO1xuICB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8c2VjdGlvbiBpZD1cImJyZWFkY3J1bWJzXCIgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5BZGh5YXkgLSB7YWRoeWF5SUR9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9Jy8nPkhvbWU8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPScvYWJvdXQvYWRoeWF5Jz5BZGh5YXk8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BZGh5YXkgLSB7YWRoeWF5SUR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJhYm91dC11c1wiIGNsYXNzTmFtZT17YCR7c3R5bGVzLmFkaHlheX1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJvdyAke3N0eWxlcy5jb250ZW50fWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IHRleHQtY2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXttYWluLnNyY30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2JoYWdhdmFkIGdpdGEnXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtbGctOCAke3lzYWJlYXUuY2xhc3NOYW1lfWB9IGRhdGEtYW9zPVwiZmFkZS1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgQmhhZ2F2YWQgR2l0YSwgb3IgdGhlIHNvbmcgb2YgR29kLCB3YXMgcmV2ZWFsZWQgYnkgTG9yZCBTaHJlZSBLcmlzaG5hIHRvIEFyanVuIG9uIHRoZSB0aHJlc2hvbGQgb2YgdGhlIGVwaWMgd2FyIG9mIE1haGFiaGFyYXRhLiBBIGRlY2lzaXZlIGJhdHRsZSBiZXR3ZWVuIHR3byBzZXRzIG9mIGNvdXNpbnMsIHRoZSBLYXVyYXZhcyBhbmQgdGhlIFBhbmRhdmFzLCB3YXMganVzdCBhYm91dCB0byBjb21tZW5jZSBvbiB0aGUgYmF0dGxlZmllbGQgb2YgS3VydWtzaGV0cmEuIEEgZGV0YWlsZWQgYWNjb3VudCBvZiB0aGUgcmVhc29ucyB0aGF0IGxlZCB0byBzdWNoIGEgY29sb3NzYWwgd2FyOyBpcyBnaXZlbiB1bmRlciBJbnRyb2R1Y3Rpb24tVGhlIFNldHRpbmcgb2YgdGhlIEJoYWdhdmFkIEdpdGEuXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtaXRhbGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgQmhhZ2F2YWQgR2l0YSBpcyBwcmltYXJpbHkgYSBjb252ZXJzYXRpb24gYmV0d2VlbiBMb3JkIFNocmVlIEtyaXNobmEgYW5kIEFyanVuLiBIb3dldmVyLCB0aGUgZmlyc3QgY2hhcHRlciBiZWdpbnMgd2l0aCBhIGRpYWxvZ3VlIGJldHdlZW4gS2luZyBEaHJpdGFyYXNodHJhIGFuZCBoaXMgbWluaXN0ZXIgU2FuamF5LiBEaHJpdGFyYXNodHJhIGJlaW5nIGJsaW5kLCBjb3VsZCBub3QgbGVhdmUgaGlzIHBhbGFjZSBpbiBIYXN0aW5hcHVyIGJ1dCB3YXMgZWFnZXIgdG8ga25vdyB0aGUgb25nb2luZ3Mgb2YgdGhlIGJhdHRsZWZpZWxkLlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWl0YWxpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2FuamF5IHdhcyBhIGRpc2NpcGxlIG9mIFNhZ2UgVmVkIFZ5YXMsIHRoZSBhdXRob3Igb2YgdGhlIGVwaWMgTWFoYWJoYXJhdGEgYW5kIHNldmVyYWwgb3RoZXIgSGluZHUgc2NyaXB0dXJlcy4gU2FnZSBWZWQgVnlhcyBwb3NzZXNzZWQgYSBteXN0aWMgYWJpbGl0eSB0byBzZWUgYW5kIGhlYXIgZXZlbnRzIG9jY3VycmluZyBpbiBkaXN0YW50IHBsYWNlcy4gSGUgaGFkIGJlc3Rvd2VkIHVwb24gU2FuamF5IHRoZSBtaXJhY3Vsb3VzIHBvd2VyIG9mIGRpc3RhbnQgdmlzaW9uLiBUaGVyZWZvcmUsIFNhbmpheSBjb3VsZCBzZWUgYW5kIGhlYXIsIHdoYXQgdHJhbnNwaXJlZCBvbiB0aGUgYmF0dGxlZ3JvdW5kIG9mIEt1cnVrc2hldHJhLCBhbmQgZ2F2ZSBhIGZpcnN0LWhhbmQgYWNjb3VudCB0byBLaW5nIERocml0YXJhc2h0cmEgd2hpbGUgc3RpbGwgYmVpbmcgaW4gaGlzIHBhbGFjZS5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBpZD1cImFib3V0LXVzXCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZmFxfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG5cbiAgICAgICAgICAgIHtkYXRhPy5jb250ZW50Py5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpdGVtPy5zaGxva0lEfT5cbiAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZygnaXRlbSA6Pj4gJywgaXRlbVswXSl9XG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9e2l0ZW0/LnNobG9rSUR9IGZsdXNoPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9e2l0ZW0/LnNobG9rSUR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0/LnNobG9rfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0/LnRyYW5zbGF0aW9uPy5oaT8uZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkaHlheUlEXG4iXSwibmFtZXMiOlsieXNhYmVhdSIsImF4aW9zIiwiSW1hZ2UiLCJMaW5rIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIm1haW4iLCJBY2NvcmRpb24iLCJDYXJkIiwiQWRoeWF5SUQiLCJkYXRhIiwic2V0RGF0YSIsImlkIiwic2V0SWQiLCJyb3V0ZXIiLCJhZGh5YXlJRCIsInF1ZXJ5IiwiZmV0Y2hBZGh5YXkiLCJyZXNwb25zZSIsImdldCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwib2wiLCJsaSIsImhyZWYiLCJhZGh5YXkiLCJkYXRhLWFvcyIsImNvbnRlbnQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInF1YWxpdHkiLCJhbHQiLCJwIiwiZmFxIiwibWFwIiwiaXRlbSIsIkZyYWdtZW50IiwiZGVmYXVsdEFjdGl2ZUtleSIsInNobG9rSUQiLCJmbHVzaCIsIkl0ZW0iLCJldmVudEtleSIsIkhlYWRlciIsInNobG9rIiwiQm9keSIsInRyYW5zbGF0aW9uIiwiaGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/about/[adhyay]/[adhyayID].js\n"));

/***/ })

});