/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\r\nhtml {\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nbody {\r\n    font-family: sans-serif;\r\n    display: flex;\r\n    margin: 0;\r\n    height: 100%;\r\n}\r\n\r\naside {\r\n    background: #f3f3f3;\r\n    padding: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n}\r\n\r\naside input, #add-project {\r\n    padding: 10px;\r\n}\r\n\r\n\r\nmain {\r\n    flex: 1;\r\n    padding: 1rem;\r\n    overflow-y: auto;\r\n}\r\n\r\n.todo.completed {\r\n    text-decoration: line-through;\r\n    color: gray;\r\n}\r\n\r\n\r\n\r\n#todo-popup.hidden {\r\n    display: none;\r\n}\r\n\r\n#todo-popup {\r\n    position: fixed;\r\n    bottom: 80px;\r\n    right: 20px;\r\n    background: white;\r\n    padding: 1rem;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 8px;\r\n    z-index: 1000;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n#todo-popup h3 {\r\n    text-align: center;\r\n}\r\n\r\n#todo-popup input, #todo-popup select, #todo-popup button {\r\n    padding: 5px;\r\n}\r\n\r\n#add-todo-btn {\r\n    position: fixed;\r\n    right: 20px;\r\n    bottom: 20px;\r\n    border-radius: 50%;\r\n    border: none;\r\n    background-color: #007bff;\r\n    color: white;\r\n    width: 40px;\r\n    height: 40px;\r\n    font-size: 48px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\r\n    transition: transform 0.2s ease;\r\n}\r\n\r\n#project-list {\r\n    display: flex;\r\n    gap: 10px;\r\n    flex-direction: column;\r\n    padding: 0;\r\n}\r\n\r\n.project-tab {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 8px;\r\n    cursor: pointer;\r\n    border-radius: 4px;\r\n    background-color: #e9ecef;\r\n}\r\n\r\n.todo {\r\n    list-style: none;\r\n/* box shadow only bottom */\r\n    box-shadow: -4px 2px 4px rgba(0, 0, 0, 0.1);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    position: relative;\r\n}\r\n\r\n.todo::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: -8px;\r\n    width: 8px;\r\n    height: 100%;\r\n    border-radius: 10px 0 0 10px;\r\n}\r\n\r\n.todo span {\r\n    word-wrap: break-word;\r\n}\r\n\r\n.priority-high::after {\r\n    background-color: red;\r\n}\r\n.priority-medium::after {\r\n    background-color: orange;\r\n}\r\n.priority-low::after {\r\n    background-color: green;\r\n}\r\n\r\n.sidebar-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.sidebar-header button {\r\n    display: none;\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n#sidebar-btn {\r\n    display: none;\r\n}\r\n\r\n#todo-description, #todo-due-date, #todo-priority {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#add-todo {\r\n    align-self: center;\r\n}\r\n\r\n@media screen and (max-width: 750px) {\r\n\r\n    #todo-list {\r\n        padding: 0;\r\n    }\r\n\r\n    #sidebar-btn {\r\n        display: block;\r\n        position: fixed;\r\n        top: 10px;\r\n        right: 10px;\r\n        border: none;\r\n        padding: 10px;\r\n        border-radius: 5px;\r\n        z-index: 1001;\r\n    }\r\n\r\n    aside {\r\n        width: 100%;\r\n        position: fixed;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        top: 0;\r\n        z-index: 1000;\r\n        padding: 1rem;\r\n        box-sizing: border-box;\r\n        transition: transform 0.4s ease;\r\n    }\r\n    .sidebar-header button {\r\n        display: block;\r\n    }\r\n    \r\n    .sidebar-hidden {\r\n        transform: translateX(-100%);\r\n        transition: transform 0.4s ease;\r\n    }\r\n\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.todos = [];\r\n  }\r\n\r\n  addTodo(todo) {\r\n    this.todos.push(todo);\r\n  }\r\n\r\n  removeTodo(index) {\r\n    this.todos.splice(index, 1);\r\n  }\r\n\r\n  getTodos() {\r\n    return this.todos;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\r\n  constructor(title, description, dueDate, priority) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n    this.complete = false;\r\n  }\r\n\r\n  toggleComplete() {\r\n    this.complete = !this.complete;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/Todo.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects),\n/* harmony export */   renderTodos: () => (/* binding */ renderTodos)\n/* harmony export */ });\nfunction renderProjects(projects, currentIndex, switchProject, deleteProject) {\r\n  const list = document.getElementById('project-list');\r\n  list.innerHTML = '';\r\n\r\n  projects.forEach((project, i) => {\r\n    const li = document.createElement('li');\r\n    li.classList.add('project-tab');\r\n\r\n    const nameSpan = document.createElement('span');\r\n    nameSpan.textContent = project.name;\r\n    nameSpan.style.cursor = 'pointer';\r\n    if (i === currentIndex) li.style.backgroundColor = '#b4b4b4';\r\n    li.addEventListener('click', () => switchProject(i));\r\n    li.appendChild(nameSpan);\r\n\r\n    const delBtn = document.createElement('button');\r\n    delBtn.textContent = '🗑';\r\n    delBtn.style.marginLeft = '8px';\r\n    delBtn.addEventListener('click', (e) => {\r\n      e.stopPropagation(); // prevent triggering switchProject\r\n      deleteProject(i);\r\n    });\r\n    li.appendChild(delBtn);\r\n\r\n    list.appendChild(li);\r\n  });\r\n\r\n  if (projects[currentIndex]) {\r\n    document.getElementById('current-project-name').textContent = projects[currentIndex].name;\r\n  } else {\r\n    document.getElementById('current-project-name').textContent = '';\r\n  }\r\n}\r\n\r\n\r\nfunction renderTodos(project, toggle, remove) {\r\n  const list = document.getElementById('todo-list');\r\n  list.innerHTML = '';\r\n\r\nproject.getTodos().forEach((todo, i) => {\r\n  const li = document.createElement('li');\r\n  li.classList.add('todo', `priority-${todo.priority}`);\r\n  if (todo.complete) li.classList.add('completed');\r\n\r\n  li.innerHTML = `\r\n      <span class=\"todo-title\">\r\n        ${todo.title}${todo.dueDate ? ` (${todo.dueDate})` : ''}\r\n      </span>\r\n      ${todo.description ? `<span class=\"todo-description\">${todo.description}</span>` : ''}\r\n    <div class=\"todo-actions\">\r\n      <button class=\"todo-done-btn\" data-index=\"${i}\">✓</button>\r\n      <button class=\"todo-delete-btn\" data-index=\"${i}\">🗑</button>\r\n    </div>\r\n  `;\r\n\r\n  // Add event listeners to buttons\r\n  li.querySelector('.todo-done-btn').addEventListener('click', () => toggle(i));\r\n  li.querySelector('.todo-delete-btn').addEventListener('click', () => remove(i));\r\n\r\n  list.appendChild(li);\r\n});\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet projects = [];\r\nlet currentProjectIndex = 0;\r\n\r\nconst data = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.loadData)();\r\nif (data) {\r\n  projects = data.map((p) => {\r\n    const proj = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](p.name);\r\n    p.todos.forEach((t) => {\r\n      const todo = new _Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](t.title, t.description, t.dueDate, t.priority);\r\n      todo.complete = t.complete;\r\n      proj.addTodo(todo);\r\n    });\r\n    return proj;\r\n  });\r\n} else {\r\n  projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Default\"));\r\n}\r\n\r\nfunction update() {\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderProjects)(projects, currentProjectIndex, switchProject, deleteProject);\r\n  if (projects[currentProjectIndex]) {\r\n    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderTodos)(projects[currentProjectIndex], toggleTodo, deleteTodo);\r\n  } else {\r\n    document.getElementById(\"todo-list\").innerHTML = \"\";\r\n  }\r\n  (0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveData)(projects);\r\n}\r\n\r\nfunction deleteProject(index) {\r\n  projects.splice(index, 1);\r\n  if (currentProjectIndex >= projects.length) {\r\n    currentProjectIndex = projects.length - 1;\r\n  }\r\n  if (projects.length === 0) {\r\n    projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Default\"));\r\n    currentProjectIndex = 0;\r\n  }\r\n  update();\r\n}\r\n\r\nfunction switchProject(index) {\r\n  currentProjectIndex = index;\r\n  update();\r\n  document.querySelector(\"aside\").classList.add(\"sidebar-hidden\");\r\n}\r\n\r\nfunction addProject(name) {\r\n  if (!name.trim()) return;\r\n  projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name));\r\n  update();\r\n}\r\n\r\nfunction addTodo(title, description, dueDate, priority) {\r\n  if (!title.trim()) return;\r\n  const todo = new _Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, description, dueDate, priority);\r\n  projects[currentProjectIndex].addTodo(todo);\r\n  update();\r\n}\r\n\r\nfunction deleteTodo(index) {\r\n  projects[currentProjectIndex].removeTodo(index);\r\n  update();\r\n}\r\n\r\nfunction toggleTodo(index) {\r\n  projects[currentProjectIndex].todos[index].toggleComplete();\r\n  update();\r\n}\r\n\r\nconst popup = document.getElementById(\"todo-popup\");\r\nconst addTodoBtn = document.getElementById(\"add-todo-btn\");\r\n\r\naddTodoBtn.addEventListener(\"click\", () => {\r\n  popup.classList.toggle(\"hidden\");\r\n  // if pop up has hidden then this button is normal, if it has no hidden then rotate the button 45 degrees\r\n  if (popup.classList.contains(\"hidden\")) {\r\n    addTodoBtn.style.transform = \"rotate(0)\";\r\n  } else {\r\n    addTodoBtn.style.transform = \"rotate(45deg)\";\r\n  }\r\n});\r\n\r\ndocument.getElementById(\"add-project\").addEventListener(\"click\", () => {\r\n  const name = document.getElementById(\"new-project-name\").value;\r\n  addProject(name);\r\n  document.getElementById(\"new-project-name\").value = \"\";\r\n});\r\n\r\ndocument.getElementById(\"add-todo\").addEventListener(\"click\", () => {\r\n  const title = document.getElementById(\"todo-title\").value;\r\n  const desc = document.getElementById(\"todo-description\").value;\r\n  const due = document.getElementById(\"todo-due-date\").value;\r\n  const prio = document.getElementById(\"todo-priority\").value;\r\n\r\n  addTodo(title, desc, due, prio);\r\n\r\n  document.getElementById(\"todo-title\").value = \"\";\r\n  document.getElementById(\"todo-description\").value = \"\";\r\n  document.getElementById(\"todo-due-date\").value = \"\";\r\n\r\n  popup.classList.add(\"hidden\");\r\n});\r\n\r\ndocument.getElementById(\"sidebar-btn\").addEventListener(\"click\", () => {\r\n  document.querySelector(\"aside\").classList.toggle(\"sidebar-hidden\");\r\n  const sidebarBtn = document.getElementById(\"sidebar-btn\");\r\n  if (document.querySelector(\"aside\").classList.contains(\"sidebar-hidden\")) {\r\n    sidebarBtn.innerHTML = `\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 52 52\">\r\n        <path fill=\"currentColor\" d=\"M10 14h32v4H10zm0 12h32v4H10zm0 12h32v4H10z\" />\r\n      </svg>\r\n    `;\r\n  } else {\r\n    sidebarBtn.innerHTML = `\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 52 52\">\r\n        <path fill=\"currentColor\" d=\"M13 13l26 26m0-26L13 39\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"/>\r\n      </svg>\r\n    `;\r\n  }\r\n});\r\n\r\nupdate();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadData: () => (/* binding */ loadData),\n/* harmony export */   saveData: () => (/* binding */ saveData)\n/* harmony export */ });\nfunction saveData(projects) {\r\n  localStorage.setItem('todo-data', JSON.stringify(projects));\r\n}\r\n\r\nfunction loadData() {\r\n  const data = localStorage.getItem('todo-data');\r\n  return data ? JSON.parse(data) : null;\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;