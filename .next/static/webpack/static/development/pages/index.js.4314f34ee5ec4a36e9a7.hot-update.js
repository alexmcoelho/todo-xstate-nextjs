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

 //import "todomvc-app-css/index.css";






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
        lineNumber: 58,
        columnNumber: 7
      }
    }, __jsx("header", {
      className: "header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
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
        lineNumber: 61,
        columnNumber: 11
      }
    })), __jsx("section", {
      className: "main",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
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
        lineNumber: 75,
        columnNumber: 11
      }
    }), __jsx("label", {
      htmlFor: "toggle-all",
      title: "Mark all as ".concat(mark),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }
    }, "Mark all as ", mark), __jsx("ul", {
      className: "todo-list",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }
    }, filteredTodos.map(function (todo) {
      return todo ? __jsx(_Todo__WEBPACK_IMPORTED_MODULE_5__["Todo"], {
        key: todo.id,
        todoRef: todo.ref,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 22
        }
      }) : null;
    }))), !!todos.length && __jsx("footer", {
      className: "footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "todo-count",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }, __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 15
      }
    }, numActiveTodos), " item", numActiveTodos === 1 ? "" : "s", " left"), __jsx("ul", {
      className: "filters",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
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
        lineNumber: 101,
        columnNumber: 17
      }
    }, "All")), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
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
        lineNumber: 111,
        columnNumber: 17
      }
    }, "Active")), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
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
        lineNumber: 121,
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
        lineNumber: 132,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9zLmpzeCJdLCJuYW1lcyI6WyJmaWx0ZXJUb2RvcyIsInN0YXRlIiwidG9kb3MiLCJtYXRjaGVzIiwiZmlsdGVyIiwidG9kbyIsImNvbXBsZXRlZCIsInBlcnNpc3RlZFRvZG9zTWFjaGluZSIsInRvZG9zTWFjaGluZSIsIndpdGhDb25maWciLCJhY3Rpb25zIiwicGVyc2lzdCIsImN0eCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJnZXRJdGVtIiwiZSIsIlRvZG9zIiwidXNlTWFjaGluZSIsInNlbmQiLCJ1c2VTdGF0ZSIsImNvbnRlbmQiLCJzZXRDb250ZW50IiwidXNlSGFzaENoYW5nZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInNsaWNlIiwidXNlRWZmZWN0IiwidG9TdHJpbmdzIiwia2V5IiwidmFsdWUiLCJ0YXJnZXQiLCJhbGxDb21wbGV0ZWQiLCJtYXJrRXZlbnQiLCJtYXJrIiwiZmlsdGVyZWRUb2RvcyIsIm1hcCIsImlkIiwicmVmIiwibGVuZ3RoIiwibnVtQWN0aXZlVG9kb3MiLCJjbiIsInNlbGVjdGVkIiwiXyIsImNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCQyxLQUE1QixFQUFtQztBQUNqQyxNQUFJRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxRQUFkLENBQUosRUFBNkI7QUFDM0IsV0FBT0QsS0FBSyxDQUFDRSxNQUFOLENBQWEsVUFBQUMsSUFBSTtBQUFBLGFBQUksQ0FBQ0EsSUFBSSxDQUFDQyxTQUFWO0FBQUEsS0FBakIsQ0FBUDtBQUNEOztBQUVELE1BQUlMLEtBQUssQ0FBQ0UsT0FBTixDQUFjLFdBQWQsQ0FBSixFQUFnQztBQUM5QixXQUFPRCxLQUFLLENB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dUMsY0FBYyxHQUFHMUMsS0FBSyxDQUFDRSxNQUFOLENBQWEsVUFBQUMsSUFBSTtBQUFBLFdBQUksQ0FBQ0EsSUFBSSxDQUFDQyxTQUFWO0FBQUEsR0FBakIsRUFBc0NxQyxNQUE3RDtBQUNBLE1BQU1QLFlBQVksR0FBR2xDLEtBQUssQ0FBQ3lDLE1BQU4sR0FBZSxDQUFmLElBQW9CQyxjQUFjLEtBQUssQ0FBNUQ7QUFDQSxNQUFNTixJQUFJLEdBQUcsQ0FBQ0YsWUFBRCxHQUFnQixXQUFoQixHQUE4QixRQUEzQztBQUNBLE1BQU1DLFNBQVMsa0JBQVdDLElBQVgsQ0FBZjtBQUNBLE1BQU1DLGFBQWEsR0FBR3ZDLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQWpDO0FBRUEsU0FDRXNCLE9BREY7QUFHRDs7R0FsSHVCSixLO1VBQ0FDLHdELEVBR3RCSyxrRTs7O0tBSnNCTixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40MzE0ZjM0ZWU1ZWM0YTM2ZTlhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy9pbXBvcnQgXCJ0b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzXCI7XG5pbXBvcnQgeyB1c2VNYWNoaW5lIH0gZnJvbSBcIkB4c3RhdGUvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUhhc2hDaGFuZ2UgfSBmcm9tIFwiLi4vdXRpbHMvdXNlSGFzaENoYW5nZVwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL1RvZG9cIjtcbmltcG9ydCB7IHRvZG9zTWFjaGluZSB9IGZyb20gXCIuLi9tYWNoaW5lcy90b2Rvc01hY2hpbmVcIjtcblxuZnVuY3Rpb24gZmlsdGVyVG9kb3Moc3RhdGUsIHRvZG9zKSB7XG4gIGlmIChzdGF0ZS5tYXRjaGVzKFwiYWN0aXZlXCIpKSB7XG4gICAgcmV0dXJuIHRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlZCk7XG4gIH1cblxuICBpZiAoc3RhdGUubWF0Y2hlcyhcImNvbXBsZXRlZFwiKSkge1xuICAgIHJldHVybiB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmNvbXBsZXRlZCk7XG4gIH1cblxuICByZXR1cm4gdG9kb3M7XG59XG5cbmNvbnN0IHBlcnNpc3RlZFRvZG9zTWFjaGluZSA9IHRvZG9zTWFjaGluZS53aXRoQ29uZmlnKFxuICB7XG4gICAgYWN0aW9uczoge1xuICAgICAgcGVyc2lzdDogY3R4ID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvcy14c3RhdGVcIiwgSlNPTi5zdHJpbmdpZnkoY3R4LnRvZG9zKSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvLyBpbml0aWFsIHN0YXRlIGZyb20gbG9jYWxzdG9yYWdlXG4gIHtcbiAgICB0b2RvOiBcIkFwcmVuZGEgbcOhcXVpbmFzIGRlIGVzdGFkb1wiLFxuICAgIHRvZG9zOiAoKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvcy14c3RhdGVcIikpIHx8IFtdO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSkoKVxuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvcygpIHtcbiAgY29uc3QgW3N0YXRlLCBzZW5kXSA9IHVzZU1hY2hpbmUocGVyc2lzdGVkVG9kb3NNYWNoaW5lKTtcbiAgY29uc3QgW2NvbnRlbmQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlSGFzaENoYW5nZSgoKSA9PiB7XG4gICAgc2VuZChgU0hPVy4ke3dpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDIpIHx8IFwiYWxsXCJ9YCk7XG4gIH0pO1xuXG4gIC8vIENhcHR1cmUgaW5pdGlhbCBzdGF0ZSBvZiBicm93c2VyIGhhc2hcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgyKSAmJlxuICAgICAgc2VuZChgU0hPVy4ke3dpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDIpfWApO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENvbnRlbnQoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0b2RvYXBwXCIgZGF0YS1zdGF0ZT17c3RhdGUudG9TdHJpbmdzKCl9PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxoMT50b2RvczwvaDE+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuZXctdG9kb1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgbmVlZHMgdG8gYmUgZG9uZT9cIlxuICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICBvbktleVByZXNzPXtlID0+IHtcbiAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICBzZW5kKFwiTkVXVE9ETy5DT01NSVRcIiwgeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZW5kKFwiTkVXVE9ETy5DSEFOR0VcIiwgeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICB2YWx1ZT17dG9kb31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJ0b2dnbGUtYWxsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvZ2dsZS1hbGxcIlxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2FsbENvbXBsZXRlZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNlbmQobWFya0V2ZW50KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZ2dsZS1hbGxcIiB0aXRsZT17YE1hcmsgYWxsIGFzICR7bWFya31gfT5cbiAgICAgICAgICAgIE1hcmsgYWxsIGFzIHttYXJrfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvZG8tbGlzdFwiPlxuICAgICAgICAgICAge2ZpbHRlcmVkVG9kb3MubWFwKHRvZG8gPT4gKFxuICAgICAgICAgICAgICB0b2RvID8gPFRvZG8ga2V5PXt0b2RvLmlkfSB0b2RvUmVmPXt0b2RvLnJlZn0gLz4gOiBudWxsXG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIHshIXRvZG9zLmxlbmd0aCAmJiAoXG4gICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvZG8tY291bnRcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz57bnVtQWN0aXZlVG9kb3N9PC9zdHJvbmc+IGl0ZW1cbiAgICAgICAgICAgIHtudW1BY3RpdmVUb2RvcyA9PT0gMSA/IFwiXCIgOiBcInNcIn0gbGVmdFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmaWx0ZXJzXCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbih7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBzdGF0ZS5tYXRjaGVzKFwiYWxsXCIpXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjL1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQWxsXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHN0YXRlLm1hdGNoZXMoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiMvYWN0aXZlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBY3RpdmVcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogc3RhdGUubWF0Y2hlcyhcImNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBocmVmPVwiIy9jb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvbmNsdcOtZG9zXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICB7bnVtQWN0aXZlVG9kb3MgPCB0b2Rvcy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17XyA9PiBzZW5kKFwiQ0xFQVJfQ09NUExFVEVEXCIpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsZWFyLWNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMaW1wYSBjb25jbHXDrWRvc1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9LCBbc3RhdGVdKVxuXG4gIGNvbnN0IHsgdG9kb3MsIHRvZG8gfSA9IHN0YXRlLmNvbnRleHQ7XG5cbiAgY29uc3QgbnVtQWN0aXZlVG9kb3MgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZWQpLmxlbmd0aDtcbiAgY29uc3QgYWxsQ29tcGxldGVkID0gdG9kb3MubGVuZ3RoID4gMCAmJiBudW1BY3RpdmVUb2RvcyA9PT0gMDtcbiAgY29uc3QgbWFyayA9ICFhbGxDb21wbGV0ZWQgPyBcImNvbXBsZXRlZFwiIDogXCJhY3RpdmVcIjtcbiAgY29uc3QgbWFya0V2ZW50ID0gYE1BUksuJHttYXJrfWA7XG4gIGNvbnN0IGZpbHRlcmVkVG9kb3MgPSBmaWx0ZXJUb2RvcyhzdGF0ZSwgdG9kb3MpO1xuXG4gIHJldHVybiAoXG4gICAgY29udGVuZFxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==