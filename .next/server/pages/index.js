module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Card/index.js":
/*!**********************************!*\
  !*** ./components/Card/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/Card/styles.js");

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/simetrik/components/Card/index.js";



const Card = ({
  title,
  age,
  company,
  description,
  date
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: `Name: ${title}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), age ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: `Age: ${age}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 12
    }, undefined) : '', company ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: `Company: ${company} `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 16
    }, undefined) : '', description ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: `Description: ${description} `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 20
    }, undefined) : '', date ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: `Date: ${date} `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined) : '']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Card/styles.js":
/*!***********************************!*\
  !*** ./components/Card/styles.js ***!
  \***********************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({
  displayName: "styles__Container",
  componentId: "sc-6dc565-0"
})(["border-radius:20px;padding:20px 15px;box-shadow:rgba(0,0,0,0.24) 0px 3px 8px;"]);

/***/ }),

/***/ "./components/NotShow/index.js":
/*!*************************************!*\
  !*** ./components/NotShow/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/NotShow/styles.js");

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/simetrik/components/NotShow/index.js";



const NotShow = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    children: props.text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NotShow);

/***/ }),

/***/ "./components/NotShow/styles.js":
/*!**************************************!*\
  !*** ./components/NotShow/styles.js ***!
  \**************************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "styles__Text",
  componentId: "lforfs-0"
})(["padding:15px;color:rebeccapurple;font-weight:700"]);

/***/ }),

/***/ "./components/Results/index.js":
/*!*************************************!*\
  !*** ./components/Results/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Card */ "./components/Card/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/Results/styles.js");

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/simetrik/components/Results/index.js";




const Results = ({
  data,
  title
}) => {
  //////////////////
  //validate for render
  //only users info
  /////////////////
  if (title == 'usuarios') {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        children: data.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: item.name.firstName,
          age: item.age,
          company: item.company,
          date: item.timestamp ? item.timestamp.createdAt : ""
        }, item._id, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      children: data.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: item.name || item.dashboardName || item.conciliationName,
        description: item.description,
        date: item.timestamp ? item.timestamp.createdAt : ''
      }, item._id, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Results);

/***/ }),

/***/ "./components/Results/styles.js":
/*!**************************************!*\
  !*** ./components/Results/styles.js ***!
  \**************************************/
/*! exports provided: Container, Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1dm8i2s-0"
})(["margin-bottom:40px;padding:15px;& h2{color:rebeccapurple;font-size:30px;text-transform:capitalize}"]);
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Grid",
  componentId: "sc-1dm8i2s-1"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:1.5rem;"]);

/***/ }),

/***/ "./components/Search/index.js":
/*!************************************!*\
  !*** ./components/Search/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/Search/styles.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/simetrik/components/Search/index.js";




const Search = () => {
  ///get input value
  const {
    0: keyword,
    1: setKeyword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''); /// redux hook for make dispatch

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(); ////this function send the dispatch and get the data

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "SET_DATA",
      payload: keyword
    });
  }; ////set keyword state function


  const handleInputChange = e => {
    setKeyword(e.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      children: "Are you looking for conciliations, users, boards or sources? please write it here."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["SearchInput"], {
        type: "text",
        name: "search",
        id: "",
        onChange: handleInputChange,
        value: keyword,
        placeholder: "buscar",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Submit"], {
        type: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          focusable: "false",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/Search/styles.js":
/*!*************************************!*\
  !*** ./components/Search/styles.js ***!
  \*************************************/
/*! exports provided: Container, Heading, Form, SearchInput, Submit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInput", function() { return SearchInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Submit", function() { return Submit; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "styles__Container",
  componentId: "lgnroj-0"
})(["background-color:rebeccapurple;min-height:200px;height:40vh;display:flex;justify-content:center;align-items:center;flex-direction:column"]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "styles__Heading",
  componentId: "lgnroj-1"
})(["color:white;max-width:800px;text-align:center;margin:0 auto;padding:0 15px;padding-bottom:30px;"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "styles__Form",
  componentId: "lgnroj-2"
})(["display:flex;justify-content:center;align-items:center;"]);
const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "styles__SearchInput",
  componentId: "lgnroj-3"
})(["border-bottom-left-radius:20px;border-top-left-radius:20px;border:none;padding:10px 20px;outline:none"]);
const Submit = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "styles__Submit",
  componentId: "lgnroj-4"
})(["outline:none;border-bottom-right-radius:20px;border-top-right-radius:20px;border:none;padding:8px 20px;display:flex;justify-content:center;align-items:center;background-color:#c47ceb;& svg{height:20px;width:20px;fill:black;}&:active{background-color:#b16fd5;& svg{transform:scale(.9)}}"]);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Search */ "./components/Search/index.js");
/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Results */ "./components/Results/index.js");
/* harmony import */ var _components_NotShow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/NotShow */ "./components/NotShow/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/simetrik/pages/index.js";






const index = () => {
  const state = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Search__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), !state.usuariosFiltered.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NotShow__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: "Not users to show, write what you are looking for in the text button"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Results__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: state.usuariosFiltered,
      title: "usuarios"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined), !state.conciliacionesFiltered.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NotShow__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: "Not conciliations to show, write what you are looking for in the text button"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Results__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: state.conciliacionesFiltered,
      title: "Conciliaciones"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined), !state.fuentesFiltered.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NotShow__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: "Not fonts to show write, what you are looking for in the text button"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Results__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: state.fuentesFiltered,
      title: "fuentes"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, undefined), !state.tablerosFiltered.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NotShow__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: "Not boards to show write, what you are looking for in the text button"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Results__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: state.tablerosFiltered,
      title: "tableros"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ob3RTaG93L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90U2hvdy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXN1bHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVzdWx0cy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2gvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkNhcmQiLCJ0aXRsZSIsImFnZSIsImNvbXBhbnkiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJDb250YWluZXIiLCJzdHlsZWQiLCJhcnRpY2xlIiwiTm90U2hvdyIsInByb3BzIiwidGV4dCIsIlRleHQiLCJwIiwiUmVzdWx0cyIsImRhdGEiLCJtYXAiLCJpdGVtIiwibmFtZSIsImZpcnN0TmFtZSIsInRpbWVzdGFtcCIsImNyZWF0ZWRBdCIsIl9pZCIsImRhc2hib2FyZE5hbWUiLCJjb25jaWxpYXRpb25OYW1lIiwic2VjdGlvbiIsIkdyaWQiLCJkaXYiLCJTZWFyY2giLCJrZXl3b3JkIiwic2V0S2V5d29yZCIsInVzZVN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInR5cGUiLCJwYXlsb2FkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkhlYWRpbmciLCJoMSIsIkZvcm0iLCJmb3JtIiwiU2VhcmNoSW5wdXQiLCJpbnB1dCIsIlN1Ym1pdCIsImJ1dHRvbiIsImluZGV4Iiwic3RhdGUiLCJ1c2VTZWxlY3RvciIsInVzdWFyaW9zRmlsdGVyZWQiLCJsZW5ndGgiLCJjb25jaWxpYWNpb25lc0ZpbHRlcmVkIiwiZnVlbnRlc0ZpbHRlcmVkIiwidGFibGVyb3NGaWx0ZXJlZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0MsT0FBRDtBQUFR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QUFDLDJEQUFEO0FBQVMsVUFBSSxFQUFFSCxLQUFLLENBQUNNLGdCQUFyQjtBQUF1QyxXQUFLLEVBQUU7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4Qko7QUFBQSxrQkFERjtBQThCRCxDQWpDRDs7QUFtQ2VQLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDMUNBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnLi9zdHlsZXMnXG5cbmNvbnN0IENhcmQgPSAoe3RpdGxlLCBhZ2UsIGNvbXBhbnksIGRlc2NyaXB0aW9uLCBkYXRlfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8aDM+e2BOYW1lOiAke3RpdGxlfWB9PC9oMz5cbiAgICAgIHthZ2U/PHA+e2BBZ2U6ICR7YWdlfWB9PC9wPjonJ31cbiAgICAgIHtjb21wYW55PzxwPntgQ29tcGFueTogJHtjb21wYW55fSBgfTwvcD4gOicnfVxuICAgICAge2Rlc2NyaXB0aW9uPzxwPntgRGVzY3JpcHRpb246ICR7ZGVzY3JpcHRpb259IGB9PC9wPjonJ31cbiAgICAgIHtkYXRlPzxwPntgRGF0ZTogJHtkYXRlfSBgfTwvcD46Jyd9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuYXJ0aWNsZWBcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMjBweCAxNXB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xuYDtcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VGV4dH0gZnJvbSAnLi9zdHlsZXMnXG5cbmNvbnN0IE5vdFNob3cgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGV4dD5cbiAgICAgIHtwcm9wcy50ZXh0fVxuICAgIDwvVGV4dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdFNob3c7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQucGBcbiAgcGFkZGluZzoxNXB4O1xuICBjb2xvcjpyZWJlY2NhcHVycGxlO1xuICBmb250LXdlaWdodDo3MDBcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcmQgZnJvbSAnQGNvbXBvbmVudHMvQ2FyZCdcbmltcG9ydCB7Q29udGFpbmVyLCBHcmlkfSBmcm9tICcuL3N0eWxlcydcblxuY29uc3QgUmVzdWx0cyA9ICh7ZGF0YSwgdGl0bGV9KSA9PiB7XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vdmFsaWRhdGUgZm9yIHJlbmRlclxuICAvL29ubHkgdXNlcnMgaW5mb1xuICAvLy8vLy8vLy8vLy8vLy8vL1xuICBpZih0aXRsZT09J3VzdWFyaW9zJyl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLl9pZH1cbiAgICAgICAgICAgICAgYWdlPXtpdGVtLmFnZX1cbiAgICAgICAgICAgICAgY29tcGFueT17aXRlbS5jb21wYW55fVxuICAgICAgICAgICAgICBkYXRlPXtpdGVtLnRpbWVzdGFtcCA/IGl0ZW0udGltZXN0YW1wLmNyZWF0ZWRBdCA6IFwiXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG5cbiAgXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgIDxHcmlkPlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZSB8fCBpdGVtLmRhc2hib2FyZE5hbWUgfHwgaXRlbS5jb25jaWxpYXRpb25OYW1lfVxuICAgICAgICAgICAga2V5PXtpdGVtLl9pZH1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgZGF0ZT17aXRlbS50aW1lc3RhbXA/IGl0ZW0udGltZXN0YW1wLmNyZWF0ZWRBdCA6ICcnIH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXJnaW4tYm90dG9tOjQwcHg7XG4gIHBhZGRpbmc6MTVweDtcbiAgJiBoMntcbiAgICBjb2xvcjpyZWJlY2NhcHVycGxlO1xuICAgIGZvbnQtc2l6ZTozMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemVcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAxLjVyZW07XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q29udGFpbmVyLCBIZWFkaW5nLCAgRm9ybSwgU2VhcmNoSW5wdXQsIFN1Ym1pdH0gZnJvbSAnLi9zdHlsZXMnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XG4gIC8vL2dldCBpbnB1dCB2YWx1ZVxuICBjb25zdCBba2V5d29yZCwgc2V0S2V5d29yZF0gPSB1c2VTdGF0ZSgnJylcblxuICAvLy8gcmVkdXggaG9vayBmb3IgbWFrZSBkaXNwYXRjaFxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgLy8vL3RoaXMgZnVuY3Rpb24gc2VuZCB0aGUgZGlzcGF0Y2ggYW5kIGdldCB0aGUgZGF0YVxuICBjb25zdCBoYW5kbGVTdWJtaXQgPShlKT0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKSAgXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJTRVRfREFUQVwiLFxuICAgICAgcGF5bG9hZDprZXl3b3JkLFxuICAgIH0pO1xuICB9XG5cbiAgLy8vL3NldCBrZXl3b3JkIHN0YXRlIGZ1bmN0aW9uXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRLZXl3b3JkKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxIZWFkaW5nPlxuICAgICAgICBBcmUgeW91IGxvb2tpbmcgZm9yIGNvbmNpbGlhdGlvbnMsIHVzZXJzLCBib2FyZHMgb3Igc291cmNlcz8gcGxlYXNlXG4gICAgICAgIHdyaXRlIGl0IGhlcmUuXG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPFNlYXJjaElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgIGlkPVwiXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e2tleXdvcmR9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJidXNjYXJcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDxTdWJtaXQgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdBNi40NzEgNi40NzEgMCAwIDAgMTYgOS41IDYuNSA2LjUgMCAxIDAgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIj48L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvU3VibWl0PlxuICAgICAgPC9Gb3JtPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJlYmVjY2FwdXJwbGU7XG4gIG1pbi1oZWlnaHQ6MjAwcHg7XG4gIGhlaWdodDo0MHZoO1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uXG5gO1xuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBzdHlsZWQuaDFgXG4gIGNvbG9yOndoaXRlO1xuICBtYXgtd2lkdGg6ODAwcHg7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBtYXJnaW46MCBhdXRvO1xuICBwYWRkaW5nOjAgMTVweDtcbiAgcGFkZGluZy1ib3R0b206MzBweDtcbmA7XG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuZGlzcGxheTpmbGV4O1xuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcbmFsaWduLWl0ZW1zOmNlbnRlcjtcbmA7XG5leHBvcnQgY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoyMHB4O1xuICBib3JkZXI6bm9uZTtcbiAgcGFkZGluZzoxMHB4IDIwcHg7XG4gIG91dGxpbmU6bm9uZVxuYDtcbmV4cG9ydCBjb25zdCBTdWJtaXQgPSBzdHlsZWQuYnV0dG9uYFxuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNDdjZWI7XG4gICYgc3ZnIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgZmlsbDogYmxhY2s7XG4gIH1cbiAgJjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjE2ZmQ1O1xuICAmIHN2Z3tcbiAgICB0cmFuc2Zvcm06c2NhbGUoLjkpXG4gIH1cbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ0Bjb21wb25lbnRzL1NlYXJjaCdcbmltcG9ydCBSZXN1bHRzIGZyb20gJ0Bjb21wb25lbnRzL1Jlc3VsdHMnXG5pbXBvcnQgTm90U2hvdyBmcm9tICdAY29tcG9uZW50cy9Ob3RTaG93J1xuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnXG5cblxuY29uc3QgaW5kZXggPSAoKSA9PiB7XG5cbiAgY29uc3Qgc3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT4gc3RhdGUpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZWFyY2ggLz5cblxuICAgICAgeyFzdGF0ZS51c3Vhcmlvc0ZpbHRlcmVkLmxlbmd0aCA/IChcbiAgICAgICAgPE5vdFNob3cgdGV4dD17XCJOb3QgdXNlcnMgdG8gc2hvdywgd3JpdGUgd2hhdCB5b3UgYXJlIGxvb2tpbmcgZm9yIGluIHRoZSB0ZXh0IGJ1dHRvblwifSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFJlc3VsdHMgZGF0YT17c3RhdGUudXN1YXJpb3NGaWx0ZXJlZH0gdGl0bGU9e1widXN1YXJpb3NcIn0gLz5cbiAgICAgICl9XG5cbiAgICAgIHshc3RhdGUuY29uY2lsaWFjaW9uZXNGaWx0ZXJlZC5sZW5ndGggPyAoXG4gICAgICAgIDxOb3RTaG93IHRleHQ9e1wiTm90IGNvbmNpbGlhdGlvbnMgdG8gc2hvdywgd3JpdGUgd2hhdCB5b3UgYXJlIGxvb2tpbmcgZm9yIGluIHRoZSB0ZXh0IGJ1dHRvblwifSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFJlc3VsdHMgZGF0YT17c3RhdGUuY29uY2lsaWFjaW9uZXNGaWx0ZXJlZH0gdGl0bGU9e1wiQ29uY2lsaWFjaW9uZXNcIn0gLz5cbiAgICAgICl9XG5cbiAgICAgIHshc3RhdGUuZnVlbnRlc0ZpbHRlcmVkLmxlbmd0aCA/IChcbiAgICAgICAgPE5vdFNob3cgdGV4dD17XCJOb3QgZm9udHMgdG8gc2hvdyB3cml0ZSwgd2hhdCB5b3UgYXJlIGxvb2tpbmcgZm9yIGluIHRoZSB0ZXh0IGJ1dHRvblwifSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFJlc3VsdHMgZGF0YT17c3RhdGUuZnVlbnRlc0ZpbHRlcmVkfSB0aXRsZT17XCJmdWVudGVzXCJ9IC8+XG4gICAgICApfVxuXG4gICAgICB7IXN0YXRlLnRhYmxlcm9zRmlsdGVyZWQubGVuZ3RoID8gKFxuICAgICAgICA8Tm90U2hvdyB0ZXh0PXtcIk5vdCBib2FyZHMgdG8gc2hvdyB3cml0ZSwgd2hhdCB5b3UgYXJlIGxvb2tpbmcgZm9yIGluIHRoZSB0ZXh0IGJ1dHRvblwifSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFJlc3VsdHMgZGF0YT17c3RhdGUudGFibGVyb3NGaWx0ZXJlZH0gdGl0bGU9e1widGFibGVyb3NcIn0gLz5cbiAgICAgICl9XG4gICAgICBcbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9