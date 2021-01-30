webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Results/index.js":
/*!*************************************!*\
  !*** ./components/Results/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Card */ "./components/Card/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/Results/styles.js");


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/simetrik/components/Results/index.js",
    _this = undefined;





var Results = function Results(_ref) {
  var data = _ref.data,
      title = _ref.title;

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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        children: data.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            title: item.name.firstName,
            age: item.age,
            company: item.company,
            date: item.timestamp ? item.timestamp.createdAt : ""
          }, item._id, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      children: data.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: item.name || item.dashboardName || item.conciliationName,
          description: item.description,
          date: item.timestamp ? item.timestamp.createdAt : ''
        }, item._id, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_c = Results;
/* harmony default export */ __webpack_exports__["default"] = (Results);

var _c;

$RefreshReg$(_c, "Results");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlc3VsdHMiLCJkYXRhIiwidGl0bGUiLCJtYXAiLCJpdGVtIiwibmFtZSIsImZpcnN0TmFtZSIsImFnZSIsImNvbXBhbnkiLCJ0aW1lc3RhbXAiLCJjcmVhdGVkQXQiLCJfaWQiLCJkYXNoYm9hcmROYW1lIiwiY29uY2lsaWF0aW9uTmFtZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQW1CO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFHQSxLQUFLLElBQUUsVUFBVixFQUFxQjtBQUNuQix3QkFDRSxxRUFBQyxpREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQUtBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsNENBQUQ7QUFBQSxrQkFDR0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLDhCQUNSLHFFQUFDLHdEQUFEO0FBQ0UsaUJBQUssRUFBRUEsSUFBSSxDQUFDQyxJQUFMLENBQVVDLFNBRG5CO0FBR0UsZUFBRyxFQUFFRixJQUFJLENBQUNHLEdBSFo7QUFJRSxtQkFBTyxFQUFFSCxJQUFJLENBQUNJLE9BSmhCO0FBS0UsZ0JBQUksRUFBRUosSUFBSSxDQUFDSyxTQUFMLEdBQWlCTCxJQUFJLENBQUNLLFNBQUwsQ0FBZUMsU0FBaEMsR0FBNEM7QUFMcEQsYUFFT04sSUFBSSxDQUFDTyxHQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBZ0JEOztBQUdELHNCQUNFLHFFQUFDLGlEQUFEO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS1Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyw0Q0FBRDtBQUFBLGdCQUNHRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsNEJBQ1IscUVBQUMsd0RBQUQ7QUFDRSxlQUFLLEVBQUVBLElBQUksQ0FBQ0MsSUFBTCxJQUFhRCxJQUFJLENBQUNRLGFBQWxCLElBQW1DUixJQUFJLENBQUNTLGdCQURqRDtBQUdFLHFCQUFXLEVBQUVULElBQUksQ0FBQ1UsV0FIcEI7QUFJRSxjQUFJLEVBQUVWLElBQUksQ0FBQ0ssU0FBTCxHQUFnQkwsSUFBSSxDQUFDSyxTQUFMLENBQWVDLFNBQS9CLEdBQTJDO0FBSm5ELFdBRU9OLElBQUksQ0FBQ08sR0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRO0FBQUEsT0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBekNEOztLQUFNWCxPO0FBMkNTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kY2FkODhlM2IyMzE0Yzk1YzYyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJkIGZyb20gJ0Bjb21wb25lbnRzL0NhcmQnXG5pbXBvcnQge0NvbnRhaW5lciwgR3JpZH0gZnJvbSAnLi9zdHlsZXMnXG5cbmNvbnN0IFJlc3VsdHMgPSAoe2RhdGEsIHRpdGxlfSkgPT4ge1xuXG4gIC8vLy8vLy8vLy8vLy8vLy8vL1xuICAvL3ZhbGlkYXRlIGZvciByZW5kZXJcbiAgLy9vbmx5IHVzZXJzIGluZm9cbiAgLy8vLy8vLy8vLy8vLy8vLy9cbiAgaWYodGl0bGU9PSd1c3Vhcmlvcycpe1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICAgIDxHcmlkPlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZS5maXJzdE5hbWV9XG4gICAgICAgICAgICAgIGtleT17aXRlbS5faWR9XG4gICAgICAgICAgICAgIGFnZT17aXRlbS5hZ2V9XG4gICAgICAgICAgICAgIGNvbXBhbnk9e2l0ZW0uY29tcGFueX1cbiAgICAgICAgICAgICAgZGF0ZT17aXRlbS50aW1lc3RhbXAgPyBpdGVtLnRpbWVzdGFtcC5jcmVhdGVkQXQgOiBcIlwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxuXG4gIFxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICA8R3JpZD5cbiAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWUgfHwgaXRlbS5kYXNoYm9hcmROYW1lIHx8IGl0ZW0uY29uY2lsaWF0aW9uTmFtZX1cbiAgICAgICAgICAgIGtleT17aXRlbS5faWR9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGRhdGU9e2l0ZW0udGltZXN0YW1wPyBpdGVtLnRpbWVzdGFtcC5jcmVhdGVkQXQgOiAnJyB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzOyJdLCJzb3VyY2VSb290IjoiIn0=