"use strict";
(() => {
var exports = {};
exports.id = 93;
exports.ids = [93];
exports.modules = {

/***/ 9522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data_adhyay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6937);

function handler(req, res) {
    const { adhyayID  } = req.query;
    const adhyay_data = _data_adhyay__WEBPACK_IMPORTED_MODULE_0__/* .adhyay.find */ .l.find((data)=>data.id === adhyayID);
    res.status(200).json(adhyay_data);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [937], () => (__webpack_exec__(9522)));
module.exports = __webpack_exports__;

})();