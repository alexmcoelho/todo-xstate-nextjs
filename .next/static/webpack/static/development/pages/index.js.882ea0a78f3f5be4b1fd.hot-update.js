webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Todos.jsx":
/*!******************************!*\
  !*** ./components/Todos.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Todos; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @xstate/react */ "./node_modules/@xstate/react/lib/index.js");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_xstate_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_useHashChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useHashChange */ "./utils/useHashChange.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Todo */ "./components/Todo.jsx");
/* harmony import */ var _machines_todosMachine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../machines/todosMachine */ "./machines/todosMachine.js");


var _jsxFileName = "C:\\Users\\Alex\\react-componentes-e-projetos-diversos\\todo-xstate-nextjs\\components\\Todos.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function filterTodos(state, todos) {
  if (state.matches("active")) {
    return todos.filter(function (todo) {
      return !todo.completed;
    });
  }

  if (state.matches("completed")) {
    return todos.filter(function (todo) {
      return todo.completed;
    });
  }

  return todos;
}

var persistedTodosMachine = _machines_todosMachine__WEBPACK_IMPORTED_MODULE_6__["todosMachine"].withConfig({
  actions: {
    persist: function persist(ctx) {
      localStorage.setItem("todos-xstate", JSON.stringify(ctx.todos));
    }
  }
}, // initial state from localstorage
{
  todo: "Aprenda máquinas de estado",
  todos: function () {
    try {
      return JSON.parse(localStorage.getItem("todos-xstate")) || [];
    } catch (e) {
      return [];
    }
  }()
});
function Todos() {
  _s();

  var _this = this;

  var _useMachine = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_3__["useMachine"])(persistedTodosMachine),
      _useMachine2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMachine, 2),
      state = _useMachine2[0],
      send = _useMachine2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      contend = _useState[0],
      setContent = _useState[1];

  Object(_utils_useHashChange__WEBPACK_IMPORTED_MODULE_4__["useHashChange"])(function () {
    send("SHOW.".concat(window.location.hash.slice(2) || "all"));
  }); // Capture initial state of browser hash

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.location.hash.slice(2) && send("SHOW.".concat(window.location.hash.slice(2)));
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setContent(__jsx("section", {
      className: "todoapp",
      "data-state": state.toStrings(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 7
      }
    }, __jsx("header", {
      className: "header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }, "todos"), __jsx("input", {
      className: "new-todo",
      placeholder: "What needs to be done?",
      autoFocus: true,
      onKeyPress: function onKeyPress(e) {
        if (e.key === "Enter") {
          send("NEWTODO.COMMIT", {
            value: e.target.value
          });
        }
      },
      onChange: function onChange(e) {
        return send("NEWTODO.CHANGE", {
          value: e.target.value
        });
      },
      value: todo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    })), __jsx("section", {
      className: "main",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }
    }, __jsx("input", {
      id: "toggle-all",
      className: "toggle-all",
      type: "checkbox",
      checked: allCompleted,
      onChange: function onChange() {
        send(markEvent);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    }), __jsx("label", {
      htmlFor: "toggle-all",
      title: "Mark all as ".concat(mark),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }
    }, "Mark all as ", mark), __jsx("ul", {
      className: "todo-list",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }
    }, filteredTodos.map(function (todo) {
      return todo ? __jsx(_Todo__WEBPACK_IMPORTED_MODULE_5__["Todo"], {
        key: todo.id,
        todoRef: todo.ref,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 22
        }
      }) : null;
    }))), !!todos.length && __jsx("footer", {
      className: "footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "todo-count",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }
    }, __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }
    }, numActiveTodos), numActiveTodos === 1 ? " item restante" : " itens restantes"), __jsx("ul", {
      className: "filters",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        selected: state.matches("all")
      }),
      href: "#/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }
    }, "Todos")), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        selected: state.matches("active")
      }),
      href: "#/active",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    }, "Ativos")), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        selected: state.matches("completed")
      }),
      href: "#/completed",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }
    }, "Conclu\xEDdos"))), numActiveTodos < todos.length && __jsx("button", {
      onClick: function onClick(_) {
        return send("CLEAR_COMPLETED");
      },
      className: "clear-completed",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 15
      }
    }, "Limpa conclu\xEDdos"))));
  }, [state]);
  var _state$context = state.context,
      todos = _state$context.todos,
      todo = _state$context.todo;
  var numActiveTodos = todos.filter(function (todo) {
    return !todo.completed;
  }).length;
  var allCompleted = todos.length > 0 && numActiveTodos === 0;
  var mark = !allCompleted ? "completed" : "active";
  var markEvent = "MARK.".concat(mark);
  var filteredTodos = filterTodos(state, todos);
  return contend;
}

_s(Todos, "wqB3pRmW5oJWy00MJsjRC9UzIWs=", false, function () {
  return [_xstate_react__WEBPACK_IMPORTED_MODULE_3__["useMachine"], _utils_useHashChange__WEBPACK_IMPORTED_MODULE_4__["useHashChange"]];
});

_c = Todos;

var _c;

$RefreshReg$(_c, "Todos");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9zLmpzeCJdLCJuYW1lcyI6WyJmaWx0ZXJUb2RvcyIsInN0YXRlIiwidG9kb3MiLCJtYXRjaGVzIiwiZmlsdGVyIiwidG9kbyIsImNvbXBsZXRlZCIsInBlcnNpc3RlZFRvZG9zTWFjaGluZSIsInRvZG9zTWFjaGluZSIsIndpdGhDb25maWciLCJhY3Rpb25zIiwicGVyc2lzdCIsImN0eCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJnZXRJdGVtIiwiZSIsIlRvZG9zIiwidXNlTWFjaGluZSIsInNlbmQiLCJ1c2VTdGF0ZSIsImNvbnRlbmQiLCJzZXRDb250ZW50IiwidXNlSGFzaENoYW5nZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInNsaWNlIiwidXNlRWZmZWN0IiwidG9TdHJpbmdzIiwia2V5IiwidmFsdWUiLCJ0YXJnZXQiLCJhbGxDb21wbGV0ZWQiLCJtYXJrRXZlbnQiLCJtYXJrIiwiZmlsdGVyZWRUb2RvcyIsIm1hcCIsImlkIiwicmVmIiwibGVuZ3RoIiwibnVtQWN0aXZlVG9kb3MiLCJjbiIsInNlbGVjdGVkIiwiXyIsImNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEJDLEtBQTVCLEVBQW1DO0FBQ2pDLE1BQUlELEtBQUssQ0FBQ0UsT0FBTixDQUFjLFFBQWQsQ0FBSixFQUE2QjtBQUMzQixXQUFPRCxLQUFLLENBQUNFLE1BQU4sQ0FBYSxVQUFBQyxJQUFJO0FBQUEsYUFBSSxDQUFDQSxJQUFJLENBQUNDLFNBQVY7QUFBQSxLQUFqQixDQUFQO0FBQ0Q7O0FBRUQsTUFBSUwsS0FBSyxDQUFDRSxPQUFOLENBQWMsV0FBZCxDQUFKLEVBQWdDO0FBQzlCLFdBQU9ELEtBQUssQ0FB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TXVDLGNBQWMsR0FBRzFDLEtBQUssQ0FBQ0UsTUFBTixDQUFhLFVBQUFDLElBQUk7QUFBQSxXQUFJLENBQUNBLElBQUksQ0FBQ0MsU0FBVjtBQUFBLEdBQWpCLEVBQXNDcUMsTUFBN0Q7QUFDQSxNQUFNUCxZQUFZLEdBQUdsQyxLQUFLLENBQUN5QyxNQUFOLEdBQWUsQ0FBZixJQUFvQkMsY0FBYyxLQUFLLENBQTVEO0FBQ0EsTUFBTU4sSUFBSSxHQUFHLENBQUNGLFlBQUQsR0FBZ0IsV0FBaEIsR0FBOEIsUUFBM0M7QUFDQSxNQUFNQyxTQUFTLGtCQUFXQyxJQUFYLENBQWY7QUFDQSxNQUFNQyxhQUFhLEdBQUd2QyxXQUFXLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFqQztBQUVBLFNBQ0VzQixPQURGO0FBR0Q7O0dBbEh1QkosSztVQUNBQyx3RCxFQUd0Qkssa0U7OztLQUpzQk4sSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuODgyZWEwYTc4ZjNmNWJlNGIxZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IHVzZU1hY2hpbmUgfSBmcm9tIFwiQHhzdGF0ZS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlSGFzaENoYW5nZSB9IGZyb20gXCIuLi91dGlscy91c2VIYXNoQ2hhbmdlXCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vVG9kb1wiO1xuaW1wb3J0IHsgdG9kb3NNYWNoaW5lIH0gZnJvbSBcIi4uL21hY2hpbmVzL3RvZG9zTWFjaGluZVwiO1xuXG5mdW5jdGlvbiBmaWx0ZXJUb2RvcyhzdGF0ZSwgdG9kb3MpIHtcbiAgaWYgKHN0YXRlLm1hdGNoZXMoXCJhY3RpdmVcIikpIHtcbiAgICByZXR1cm4gdG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uY29tcGxldGVkKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5tYXRjaGVzKFwiY29tcGxldGVkXCIpKSB7XG4gICAgcmV0dXJuIHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uY29tcGxldGVkKTtcbiAgfVxuXG4gIHJldHVybiB0b2Rvcztcbn1cblxuY29uc3QgcGVyc2lzdGVkVG9kb3NNYWNoaW5lID0gdG9kb3NNYWNoaW5lLndpdGhDb25maWcoXG4gIHtcbiAgICBhY3Rpb25zOiB7XG4gICAgICBwZXJzaXN0OiBjdHggPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zLXhzdGF0ZVwiLCBKU09OLnN0cmluZ2lmeShjdHgudG9kb3MpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIC8vIGluaXRpYWwgc3RhdGUgZnJvbSBsb2NhbHN0b3JhZ2VcbiAge1xuICAgIHRvZG86IFwiQXByZW5kYSBtw6FxdWluYXMgZGUgZXN0YWRvXCIsXG4gICAgdG9kb3M6ICgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zLXhzdGF0ZVwiKSkgfHwgW107XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9KSgpXG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9zKCkge1xuICBjb25zdCBbc3RhdGUsIHNlbmRdID0gdXNlTWFjaGluZShwZXJzaXN0ZWRUb2Rvc01hY2hpbmUpO1xuICBjb25zdCBbY29udGVuZCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VIYXNoQ2hhbmdlKCgpID0+IHtcbiAgICBzZW5kKGBTSE9XLiR7d2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMikgfHwgXCJhbGxcIn1gKTtcbiAgfSk7XG5cbiAgLy8gQ2FwdHVyZSBpbml0aWFsIHN0YXRlIG9mIGJyb3dzZXIgaGFzaFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDIpICYmXG4gICAgICBzZW5kKGBTSE9XLiR7d2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMil9YCk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q29udGVudChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvZG9hcHBcIiBkYXRhLXN0YXRlPXtzdGF0ZS50b1N0cmluZ3MoKX0+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGgxPnRvZG9zPC9oMT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5ldy10b2RvXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBuZWVkcyB0byBiZSBkb25lP1wiXG4gICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgIG9uS2V5UHJlc3M9e2UgPT4ge1xuICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgIHNlbmQoXCJORVdUT0RPLkNPTU1JVFwiLCB7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNlbmQoXCJORVdUT0RPLkNIQU5HRVwiLCB7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgIHZhbHVlPXt0b2RvfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInRvZ2dsZS1hbGxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9nZ2xlLWFsbFwiXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY2hlY2tlZD17YWxsQ29tcGxldGVkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgc2VuZChtYXJrRXZlbnQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG9nZ2xlLWFsbFwiIHRpdGxlPXtgTWFyayBhbGwgYXMgJHttYXJrfWB9PlxuICAgICAgICAgICAgTWFyayBhbGwgYXMge21hcmt9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9kby1saXN0XCI+XG4gICAgICAgICAgICB7ZmlsdGVyZWRUb2Rvcy5tYXAodG9kbyA9PiAoXG4gICAgICAgICAgICAgIHRvZG8gPyA8VG9kbyBrZXk9e3RvZG8uaWR9IHRvZG9SZWY9e3RvZG8ucmVmfSAvPiA6IG51bGxcbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgeyEhdG9kb3MubGVuZ3RoICYmIChcbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9kby1jb3VudFwiPlxuICAgICAgICAgICAgICA8c3Ryb25nPntudW1BY3RpdmVUb2Rvc308L3N0cm9uZz5cbiAgICAgICAgICAgICAge251bUFjdGl2ZVRvZG9zID09PSAxID8gXCIgaXRlbSByZXN0YW50ZVwiIDogXCIgaXRlbnMgcmVzdGFudGVzXCJ9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmlsdGVyc1wiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogc3RhdGUubWF0Y2hlcyhcImFsbFwiKVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBocmVmPVwiIy9cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRvZG9zXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHN0YXRlLm1hdGNoZXMoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiMvYWN0aXZlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBdGl2b3NcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogc3RhdGUubWF0Y2hlcyhcImNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBocmVmPVwiIy9jb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvbmNsdcOtZG9zXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICB7bnVtQWN0aXZlVG9kb3MgPCB0b2Rvcy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17XyA9PiBzZW5kKFwiQ0xFQVJfQ09NUExFVEVEXCIpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsZWFyLWNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMaW1wYSBjb25jbHXDrWRvc1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9LCBbc3RhdGVdKVxuXG4gIGNvbnN0IHsgdG9kb3MsIHRvZG8gfSA9IHN0YXRlLmNvbnRleHQ7XG5cbiAgY29uc3QgbnVtQWN0aXZlVG9kb3MgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZWQpLmxlbmd0aDtcbiAgY29uc3QgYWxsQ29tcGxldGVkID0gdG9kb3MubGVuZ3RoID4gMCAmJiBudW1BY3RpdmVUb2RvcyA9PT0gMDtcbiAgY29uc3QgbWFyayA9ICFhbGxDb21wbGV0ZWQgPyBcImNvbXBsZXRlZFwiIDogXCJhY3RpdmVcIjtcbiAgY29uc3QgbWFya0V2ZW50ID0gYE1BUksuJHttYXJrfWA7XG4gIGNvbnN0IGZpbHRlcmVkVG9kb3MgPSBmaWx0ZXJUb2RvcyhzdGF0ZSwgdG9kb3MpO1xuXG4gIHJldHVybiAoXG4gICAgY29udGVuZFxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==