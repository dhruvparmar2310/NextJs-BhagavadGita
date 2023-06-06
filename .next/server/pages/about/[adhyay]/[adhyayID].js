(() => {
var exports = {};
exports.id = 466;
exports.ids = [466];
exports.modules = {

/***/ 9479:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Ysabeau_470483'"},
	"className": "__className_470483"
};


/***/ }),

/***/ 2755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ch-1.2c9888c3.jpg","height":720,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAhAJb/8QAGxAAAgMAAwAAAAAAAAAAAAAAAgQBAxMAIbH/2gAIAQEAAT8AZfucUOliZsLIa9OoLzn/xAAYEQADAQEAAAAAAAAAAAAAAAABAhESAP/aAAgBAgEBPwBHZNZMpvf/xAAXEQADAQAAAAAAAAAAAAAAAAAAETEh/9oACAEDAQE/AKrh/9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 6827:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_font_google_target_css_path_src_pages_about_adhyay_adhyayID_js_import_Ysabeau_arguments_subsets_latin_weight_200_300_400_500_style_normal_italic_variableName_ysabeau___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9479);
/* harmony import */ var next_font_google_target_css_path_src_pages_about_adhyay_adhyayID_js_import_Ysabeau_arguments_subsets_latin_weight_200_300_400_500_style_normal_italic_variableName_ysabeau___WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_about_adhyay_adhyayID_js_import_Ysabeau_arguments_subsets_latin_weight_200_300_400_500_style_normal_italic_variableName_ysabeau___WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6285);
/* harmony import */ var _styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_assets_adhyay_ch_1_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2755);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function AdhyayID({ adhyay  }) {
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { adhyayID  } = router.query;
    // const fetchAdhyay = () => {
    //   const response = axios.get(`/api/adhyay/${adhyayID}`)
    //   .then(data => {
    //     console.log('data >> ', data?.data)
    //     setData(data?.data)
    //   })
    // } 
    // useEffect(() => {
    //   fetchAdhyay()
    //   console.log('adhyayID :>> ', adhyayID);
    // }, [])
    console.log("adhyay :>> ", adhyay);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            "Adhyay - ",
                            adhyayID,
                            " | Bhagavad Gita"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charset: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: "Bhagavad Gita, BhagavadGita, bhagavad gita, BhagavadGita by Dhruv Parmar, Bhagavad Gita by Dhruv Parmar"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "The Srimad Bhagavad Gita is the most sacred and popular book of Hindus. According to the scriptures, the Gita is the supreme book in all the books. The bhagavad gita book contains 700-verses which comes in the Mahabharata (the Indian epic). Gita means the song in Sanskrit and Srimad Bhagavad means the supreme lord. So the Srimad Bhagavad Gita means  ‘the song of the god’."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "breadcrumbs",
                className: "breadcrumbs",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex justify-content-between align-items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                children: [
                                    "Adhyay - ",
                                    adhyayID
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/about/adhyay",
                                            children: "Adhyay"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            "Adhyay - ",
                                            adhyayID
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "about-us",
                className: `${(_styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_9___default().adhyay)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    "data-aos": "fade-up",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `row ${(_styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_9___default().content)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4 text-center",
                                "data-aos": "fade-right",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: _public_assets_adhyay_ch_1_jpg__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src,
                                    className: "img-fluid",
                                    width: 500,
                                    height: 500,
                                    quality: 100,
                                    alt: "bhagavad gita"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `col-lg-8 ${(next_font_google_target_css_path_src_pages_about_adhyay_adhyayID_js_import_Ysabeau_arguments_subsets_latin_weight_200_300_400_500_style_normal_italic_variableName_ysabeau___WEBPACK_IMPORTED_MODULE_10___default().className)}`,
                                "data-aos": "fade-left",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "The Bhagavad Gita, or the song of God, was revealed by Lord Shree Krishna to Arjun on the threshold of the epic war of Mahabharata. A decisive battle between two sets of cousins, the Kauravas and the Pandavas, was just about to commence on the battlefield of Kurukshetra. A detailed account of the reasons that led to such a colossal war; is given under Introduction-The Setting of the Bhagavad Gita."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-italic",
                                        children: "The Bhagavad Gita is primarily a conversation between Lord Shree Krishna and Arjun. However, the first chapter begins with a dialogue between King Dhritarashtra and his minister Sanjay. Dhritarashtra being blind, could not leave his palace in Hastinapur but was eager to know the ongoings of the battlefield."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-italic",
                                        children: "Sanjay was a disciple of Sage Ved Vyas, the author of the epic Mahabharata and several other Hindu scriptures. Sage Ved Vyas possessed a mystic ability to see and hear events occurring in distant places. He had bestowed upon Sanjay the miraculous power of distant vision. Therefore, Sanjay could see and hear, what transpired on the battleground of Kurukshetra, and gave a first-hand account to King Dhritarashtra while still being in his palace."
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "about-us",
                className: `${(_styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_9___default().faq)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    "data-aos": "fade-up",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: ``
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdhyayID);
const getStaticPaths = async ()=>{
    const paths = [];
    for(let i = 1; i <= 18; i++){
        paths.push({
            params: {
                adhyay: "adhyay",
                adhyayID: i.toString()
            }
        });
    }
    return {
        // paths: [
        //   {
        //     params: {
        //       adhyay: 'some-value',
        //       adhyayID: '1',
        //     },
        //   }, // See the "paths" section below
        // ],
        paths: paths,
        fallback: true
    };
};
const getStaticProps = async ({ params  })=>{
    const adhyayID = parseInt(params.adhyayID);
    if (adhyayID >= 1 && adhyayID <= 18) {
        const res = await fetch(`http://localhost:3000/api/adhyay/${params.adhyayID}`);
        const adhyay = await res.json();
        return {
            props: {
                adhyay
            }
        };
    } else {
        return {
            notFound: true
        };
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,61,285], () => (__webpack_exec__(6827)));
module.exports = __webpack_exports__;

})();