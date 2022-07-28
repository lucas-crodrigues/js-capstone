"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjs_capstone"] = self["webpackChunkjs_capstone"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/magic_logo.png */ \"./src/assets/magic_logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bg_magic.jpg */ \"./src/assets/bg_magic.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  /* ----==== FONT ====---- */\\r\\n  --font-family: sans-serif;\\r\\n  --font-size: 1rem;\\r\\n  --font-weight-400: 400;\\r\\n\\r\\n  /* ----==== SPACING ====---- */\\r\\n  --padding-section-container: 10px 5vw;\\r\\n  --padding-main-section: 10vh 5vw;\\r\\n  --margin-container: 0 0;\\r\\n  --gap-10px: 10px;\\r\\n\\r\\n  /* ----==== COLOR PALLET ====---- */\\r\\n  --primary-color: #ff5100f3;\\r\\n  --secondary-color: #191919;\\r\\n  --other-color-black: #000;\\r\\n  --other-color-white: #fff;\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  background-color: var(--secondary-color);\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  transition: all 0.5s ease-out;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  color: var(--primary-color);\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  cursor: pointer;\\r\\n  width: 100%;\\r\\n  background-color: var(--primary-color);\\r\\n  border-style: none;\\r\\n  border: 1px solid var(--primary-color);\\r\\n  padding: 5px;\\r\\n  transition: all 0.5s ease-out;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background-color: var(--other-color-white);\\r\\n  color: var(--primary-color);\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n/* ----- GLOBAL ----- */\\r\\n\\r\\n.logo {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: contain;\\r\\n  height: 71px;\\r\\n  width: 138px;\\r\\n}\\r\\n\\r\\nheader,\\r\\nfooter {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: var(--padding-section-container);\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n/* ----- HEADER ----- */\\r\\n\\r\\nheader ul {\\r\\n  display: flex;\\r\\n  gap: var(--gap-10px);\\r\\n}\\r\\n\\r\\n/* ----- MAIN ----- */\\r\\n\\r\\nmain {\\r\\n  padding: var(--padding-main-section);\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  height: min-content;\\r\\n}\\r\\n\\r\\n.cards {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  flex-wrap: wrap;\\r\\n  gap: var(--gap-10px);\\r\\n}\\r\\n\\r\\n.card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: var(--gap-10px);\\r\\n  width: min-content;\\r\\n}\\r\\n\\r\\n.card-image {\\r\\n  background-color: var(--other-color-white);\\r\\n  height: 246px;\\r\\n  width: 177px;\\r\\n  background-size: cover;\\r\\n  border-radius: 9px;\\r\\n  transition: all 0.5s ease-out;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.card-image:hover {\\r\\n  transform: scale(1.07);\\r\\n}\\r\\n\\r\\n.card-info {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  min-height: 40px;\\r\\n}\\r\\n\\r\\n.card-title {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\ninput[type='checkbox'] {\\r\\n  cursor: pointer;\\r\\n  appearance: none;\\r\\n  background-color: #bbbbbb;\\r\\n  width: 35px;\\r\\n  height: 25px;\\r\\n  clip-path: path(\\\"M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z\\\");\\r\\n  transition: all 250ms ease-in-out;\\r\\n  transform: scale(0.68);\\r\\n}\\r\\n\\r\\ninput[type='checkbox']:hover {\\r\\n  background-color: #ffb9b9;\\r\\n  transform: scale(0.8);\\r\\n}\\r\\n\\r\\ninput[type='checkbox']:checked {\\r\\n  background-color: #ff0000;\\r\\n}\\r\\n\\r\\n/* ----- POPUP ----- */\\r\\n\\r\\n.popUp {\\r\\n  display: flex;\\r\\n  gap: var(--gap-10px);\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  padding: 5vh 25vw;\\r\\n  background-color: #191919ea;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.button-close {\\r\\n  color: red;\\r\\n  font-size: 5vw;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.card-image-popUp {\\r\\n  width: 40vw;\\r\\n  height: 56vw;\\r\\n}\\r\\n\\r\\n.card-info-popUp {\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n/* ----- MOBILE ----- */\\r\\n\\r\\n@media (max-width: 353px) {\\r\\n  .cards {\\r\\n    justify-content: center;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-capstone/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-capstone/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_cardsInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cardsInfo.js */ \"./src/modules/cardsInfo.js\");\n/* harmony import */ var _modules_populateHTML_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/populateHTML.js */ \"./src/modules/populateHTML.js\");\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', async () => {\n  (0,_modules_cardsInfo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_modules_populateHTML_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n});\n\n//# sourceURL=webpack://js-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/cardsInfo.js":
/*!**********************************!*\
  !*** ./src/modules/cardsInfo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _sessionCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sessionCards.js */ \"./src/modules/sessionCards.js\");\n\n\n\nconst getCardInfo = async (renderCards) => {\n  const cardInfo = [];\n  await (0,_sessionCards_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const sessionCards = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)('sessionCards');\n  sessionCards.forEach(async (card) => {\n    await fetch(`https://api.scryfall.com/cards/named?fuzzy=${card}`).then(async (response) => {\n      const dataArr = await response.json();\n      cardInfo.push(dataArr);\n      (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)('sessionCardsInfo', cardInfo);\n    });\n  });\n  renderCards();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCardInfo);\n\n//# sourceURL=webpack://js-capstone/./src/modules/cardsInfo.js?");

/***/ }),

/***/ "./src/modules/htmlConsts.js":
/*!***********************************!*\
  !*** ./src/modules/htmlConsts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst main = document.getElementById('main');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n//# sourceURL=webpack://js-capstone/./src/modules/htmlConsts.js?");

/***/ }),

/***/ "./src/modules/invLikes.js":
/*!*********************************!*\
  !*** ./src/modules/invLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayLike\": () => (/* binding */ displayLike),\n/* harmony export */   \"getLike\": () => (/* binding */ getLike),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\nconst appID = 'JMmUrfz1eG6NBjtIPHdJ';\n\nconst postLike = async (id) => {\n  try {\n    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes/`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        item_id: id,\n      }),\n    });\n  } catch (error) {\n    throw new Error('Can not post Like');\n  }\n};\n\nconst getLike = async () => {\n  try {\n    const Likes = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes/`);\n    const likeData = await Likes.json();\n    return likeData;\n  } catch (error) {\n    throw new Error('unable to get a Data');\n  }\n};\n\nconst displayLike = async (id) => {\n  const likesArr = await getLike();\n  const likeIndex = likesArr.findIndex((i) => i.item_id === id);\n  const likeNum = likesArr[likeIndex].likes;\n  return likeNum;\n};\n\n//# sourceURL=webpack://js-capstone/./src/modules/invLikes.js?");

/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage),\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage)\n/* harmony export */ });\n/* eslint-disable max-len */\nconst getLocalStorage = (localStorageArr) => JSON.parse(localStorage.getItem(localStorageArr));\n\nconst setLocalStorage = (localStorageArr, codeArr) => localStorage.setItem(localStorageArr, JSON.stringify(codeArr));\n\n//# sourceURL=webpack://js-capstone/./src/modules/localStorage.js?");

/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _htmlConsts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlConsts.js */ \"./src/modules/htmlConsts.js\");\n\n\nconst createPopUp = (img, name, mana, type, text, artist) => {\n  const popUpSection = document.createElement('section');\n  const cardPopUp = document.createElement('ARTICLE');\n  const buttonClose = document.createElement('div');\n  const cardImagePopUp = document.createElement('img');\n  const cardTitle = document.createElement('h3');\n  const cardInfoPopUp = document.createElement('div');\n  const buttonComment = document.createElement('button');\n  const cardManaCost = document.createElement('p');\n  const cardTypeLine = document.createElement('p');\n  const cardOracleText = document.createElement('p');\n  const cardArtist = document.createElement('p');\n\n  popUpSection.classList.add('popUp');\n  popUpSection.id = 'popUpSection';\n  cardPopUp.classList.add('card', 'card-popUp');\n  cardImagePopUp.classList.add('card-image-popUp');\n  cardTitle.classList.add('card-title');\n  cardInfoPopUp.classList.add('card-info', 'card-info-popUp');\n  cardManaCost.classList.add('card-mana-cost');\n  cardTypeLine.classList.add('card-type-line');\n  cardOracleText.classList.add('card-oracle-text');\n  cardArtist.classList.add('card-artist');\n  buttonClose.classList.add('button-close');\n\n  buttonClose.textContent = 'X';\n  cardImagePopUp.src = img;\n  cardTitle.textContent = name;\n  cardManaCost.textContent = mana;\n  cardTypeLine.textContent = type;\n  cardOracleText.textContent = text;\n  buttonComment.textContent = 'Comment';\n  cardArtist.textContent = artist;\n\n  _htmlConsts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendChild(popUpSection);\n  popUpSection.append(cardPopUp, buttonClose);\n  cardPopUp.append(cardImagePopUp, cardTitle, cardInfoPopUp, cardArtist, buttonComment);\n  cardInfoPopUp.append(cardManaCost, cardTypeLine, cardOracleText);\n\n  buttonClose.addEventListener('click', () => {\n    popUpSection.remove();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPopUp);\n\n//# sourceURL=webpack://js-capstone/./src/modules/popUp.js?");

/***/ }),

/***/ "./src/modules/populateHTML.js":
/*!*************************************!*\
  !*** ./src/modules/populateHTML.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popUp.js */ \"./src/modules/popUp.js\");\n/* harmony import */ var _invLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invLikes.js */ \"./src/modules/invLikes.js\");\n\n\n\nlet itemNum = 0;\n\nconst createCard = async (card) => {\n  const cardsContainter = document.querySelector('.cards');\n  const counter = document.querySelector('.counter');\n\n  const cardArticle = document.createElement('article');\n  const cardImageA = document.createElement('a');\n  const cardImage = document.createElement('div');\n  const cardInfo = document.createElement('div');\n  const cardName = document.createElement('span');\n  const cardLike = document.createElement('input');\n  const cardLikeNum = document.createElement('p');\n  const cardComments = document.createElement('button');\n\n  cardArticle.classList.add('card');\n  cardImage.classList.add('card-image');\n  cardInfo.classList.add('card-info');\n  cardName.classList.add('card-title');\n  cardLike.classList.add('button-like');\n  cardComments.classList.add('button-comments');\n\n  cardLike.type = 'checkbox';\n  cardComments.type = 'button';\n\n  cardImageA.href = card.image_uris.large;\n  cardImageA.target = '_blank';\n\n  cardName.innerHTML = card.name;\n  cardLikeNum.innerHTML = await (0,_invLikes_js__WEBPACK_IMPORTED_MODULE_1__.displayLike)(card.name);\n  cardComments.innerHTML = 'Comments';\n\n  cardsContainter.appendChild(cardArticle);\n  cardArticle.append(cardImageA, cardInfo, cardComments);\n  cardInfo.append(cardName, cardLike, cardLikeNum);\n  cardImageA.appendChild(cardImage);\n\n  cardImage.style.backgroundImage = `url(${card.image_uris.large})`;\n  cardLike.id = `${card.id}`;\n\n  cardComments.addEventListener('click', () => {\n    const cardImg = card.image_uris.large;\n    const cardName = card.name;\n    const cardCost = card.mana_cost;\n    const cardType = card.type_line;\n    const cardText = card.oracle_text;\n    const cartArtist = card.artist;\n    (0,_popUp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cardImg, cardName, cardCost, cardType, cardText, cartArtist);\n  });\n\n  cardLike.addEventListener('change', () => {\n    (0,_invLikes_js__WEBPACK_IMPORTED_MODULE_1__.postLike)(card.name);\n    cardLikeNum.innerHTML = Number(cardLikeNum.innerHTML) + 1;\n    cardLike.disabled = 'disabled';\n  });\n\n  // item counter\n\n  itemNum += 1;\n  counter.innerHTML = `Cards (${itemNum})`;\n};\n\nconst renderCards = () => {\n  const cardInfo = JSON.parse(localStorage.getItem('sessionCardsInfo'));\n  cardInfo.forEach((card) => {\n    createCard(card);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCards);\n\n//# sourceURL=webpack://js-capstone/./src/modules/populateHTML.js?");

/***/ }),

/***/ "./src/modules/sessionCards.js":
/*!*************************************!*\
  !*** ./src/modules/sessionCards.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./src/modules/localStorage.js\");\n\n\nconst url = 'https://api.scryfall.com/catalog/card-names';\n\nconst getCardNames = async () => {\n  const cardList = await fetch(url).then(async (response) => {\n    const dataArr = await response.json();\n    const resultArr = dataArr.data;\n    const filterResult = resultArr.splice(500, 24);\n    return filterResult;\n  });\n  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)('sessionCards', cardList);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCardNames);\n\n//# sourceURL=webpack://js-capstone/./src/modules/sessionCards.js?");

/***/ }),

/***/ "./src/assets/bg_magic.jpg":
/*!*********************************!*\
  !*** ./src/assets/bg_magic.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"164631fc58f32cf97e51.jpg\";\n\n//# sourceURL=webpack://js-capstone/./src/assets/bg_magic.jpg?");

/***/ }),

/***/ "./src/assets/magic_logo.png":
/*!***********************************!*\
  !*** ./src/assets/magic_logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c75037ef8e3cd3d8bf7b.png\";\n\n//# sourceURL=webpack://js-capstone/./src/assets/magic_logo.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);