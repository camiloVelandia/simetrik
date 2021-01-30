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

  if (title == 'usuarios') {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
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
            lineNumber: 13,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      children: data.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: item.name || item.dashboardName || item.conciliationName,
          description: item.description,
          date: item.timestamp ? item.timestamp.createdAt : ''
        }, item._id, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlc3VsdHMiLCJkYXRhIiwidGl0bGUiLCJtYXAiLCJpdGVtIiwibmFtZSIsImZpcnN0TmFtZSIsImFnZSIsImNvbXBhbnkiLCJ0aW1lc3RhbXAiLCJjcmVhdGVkQXQiLCJfaWQiLCJkYXNoYm9hcmROYW1lIiwiY29uY2lsaWF0aW9uTmFtZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQW1CO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVzs7QUFDakMsTUFBR0EsS0FBSyxJQUFFLFVBQVYsRUFBcUI7QUFFbkIsd0JBQ0UscUVBQUMsaURBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFLQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLDRDQUFEO0FBQUEsa0JBQ0dELElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSw4QkFDUixxRUFBQyx3REFBRDtBQUNFLGlCQUFLLEVBQUVBLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxTQURuQjtBQUdFLGVBQUcsRUFBRUYsSUFBSSxDQUFDRyxHQUhaO0FBSUUsbUJBQU8sRUFBRUgsSUFBSSxDQUFDSSxPQUpoQjtBQUtFLGdCQUFJLEVBQUVKLElBQUksQ0FBQ0ssU0FBTCxHQUFpQkwsSUFBSSxDQUFDSyxTQUFMLENBQWVDLFNBQWhDLEdBQTRDO0FBTHBELGFBRU9OLElBQUksQ0FBQ08sR0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQWdCSDs7QUFDQyxzQkFDRSxxRUFBQyxpREFBRDtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtUO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsNENBQUQ7QUFBQSxnQkFDR0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLDRCQUNSLHFFQUFDLHdEQUFEO0FBQ0UsZUFBSyxFQUFFQSxJQUFJLENBQUNDLElBQUwsSUFBYUQsSUFBSSxDQUFDUSxhQUFsQixJQUFtQ1IsSUFBSSxDQUFDUyxnQkFEakQ7QUFHRSxxQkFBVyxFQUFFVCxJQUFJLENBQUNVLFdBSHBCO0FBSUUsY0FBSSxFQUFFVixJQUFJLENBQUNLLFNBQUwsR0FBZ0JMLElBQUksQ0FBQ0ssU0FBTCxDQUFlQyxTQUEvQixHQUEyQztBQUpuRCxXQUVPTixJQUFJLENBQUNPLEdBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQW5DRDs7S0FBTVgsTztBQXFDU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGJjZTI0ZTk0NTQ0ZGQ2NGU2YzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAY29tcG9uZW50cy9DYXJkJ1xuaW1wb3J0IHtDb250YWluZXIsIEdyaWR9IGZyb20gJy4vc3R5bGVzJ1xuXG5jb25zdCBSZXN1bHRzID0gKHtkYXRhLCB0aXRsZX0pID0+IHtcbiAgaWYodGl0bGU9PSd1c3Vhcmlvcycpe1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLl9pZH1cbiAgICAgICAgICAgICAgYWdlPXtpdGVtLmFnZX1cbiAgICAgICAgICAgICAgY29tcGFueT17aXRlbS5jb21wYW55fVxuICAgICAgICAgICAgICBkYXRlPXtpdGVtLnRpbWVzdGFtcCA/IGl0ZW0udGltZXN0YW1wLmNyZWF0ZWRBdCA6IFwiXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xufVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICA8R3JpZD5cbiAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWUgfHwgaXRlbS5kYXNoYm9hcmROYW1lIHx8IGl0ZW0uY29uY2lsaWF0aW9uTmFtZX1cbiAgICAgICAgICAgIGtleT17aXRlbS5faWR9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGRhdGU9e2l0ZW0udGltZXN0YW1wPyBpdGVtLnRpbWVzdGFtcC5jcmVhdGVkQXQgOiAnJyB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzOyJdLCJzb3VyY2VSb290IjoiIn0=