(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./components/Todo.jsx":
/*!*****************************!*\
  !*** ./components/Todo.jsx ***!
  \*****************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @xstate/react */ "./node_modules/@xstate/react/lib/index.js");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_xstate_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\Alex\\react-componentes-e-projetos-diversos\\todo-xstate-nextjs\\components\\Todo.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Todo(_ref) {
  _s();

  var todoRef = _ref.todoRef;

  var _useService = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_2__["useService"])(todoRef),
      _useService2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useService, 2),
      state = _useService2[0],
      send = _useService2[1];

  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var _state$context = state.context,
      id = _state$context.id,
      title = _state$context.title,
      completed = _state$context.completed;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    todoRef.execute(state, {
      focusInput: function focusInput() {
        inputRef.current && inputRef.current.select();
      }
    });
  }, [state, todoRef]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      editing: state.matches("editing"),
      completed: completed
    }),
    "data-todo-state": completed ? "completed" : "active",
    key: id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "view",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("input", {
    className: "toggle",
    type: "checkbox",
    onChange: function onChange(_) {
      send("TOGGLE_COMPLETE");
    },
    value: completed,
    checked: completed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  }), __jsx("label", {
    onDoubleClick: function onDoubleClick(e) {
      send("EDIT");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }, title), " ", __jsx("button", {
    className: "destroy",
    onClick: function onClick() {
      return send("DELETE");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  })), __jsx("input", {
    className: "edit",
    value: title,
    onBlur: function onBlur(_) {
      return send("BLUR");
    },
    onChange: function onChange(e) {
      return send("CHANGE", {
        value: e.target.value
      });
    },
    onKeyPress: function onKeyPress(e) {
      if (e.key === "Enter") {
        send("COMMIT");
      }
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Escape") {
        send("CANCEL");
      }
    },
    ref: inputRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  })));
}

_s(Todo, "rWS+r7L12wD3kUPQcVnl6AY9SZk=", false, function () {
  return [_xstate_react__WEBPACK_IMPORTED_MODULE_2__["useService"]];
});

_c = Todo;

var _c;

$RefreshReg$(_c, "Todo");

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

/***/ }),

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
  todo: "Learn state machines",
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
    }, "Completed"))), numActiveTodos < todos.length && __jsx("button", {
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
    }, "Clear completed"))));
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

/***/ }),

/***/ "./machines/todoMachine.js":
/*!*********************************!*\
  !*** ./machines/todoMachine.js ***!
  \*********************************/
/*! exports provided: todoMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoMachine", function() { return todoMachine; });
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");

var assign = xstate__WEBPACK_IMPORTED_MODULE_0__["actions"].assign;
var todoMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_0__["Machine"])({
  id: "todo",
  initial: "reading",
  context: {
    id: undefined,
    title: "",
    prevTitle: ""
  },
  on: {
    TOGGLE_COMPLETE: {
      target: ".reading.completed",
      actions: [assign({
        completed: true
      }), Object(xstate__WEBPACK_IMPORTED_MODULE_0__["sendParent"])(function (ctx) {
        return console.log('commit'), {
          type: "TODO.COMMIT",
          todo: ctx
        };
      })]
    },
    DELETE: "deleted"
  },
  states: {
    reading: {
      initial: "unknown",
      states: {
        unknown: {
          on: {
            "": [{
              target: "completed",
              cond: function cond(ctx) {
                return ctx.completed;
              }
            }, {
              target: "pending"
            }]
          }
        },
        pending: {
          on: {
            SET_COMPLETED: {
              target: "completed",
              actions: [assign({
                completed: true
              }), Object(xstate__WEBPACK_IMPORTED_MODULE_0__["sendParent"])(function (ctx) {
                return {
                  type: "TODO.COMMIT",
                  todo: ctx
                };
              })]
            }
          }
        },
        completed: {
          on: {
            TOGGLE_COMPLETE: {
              target: "pending",
              actions: [assign({
                completed: false
              }), Object(xstate__WEBPACK_IMPORTED_MODULE_0__["sendParent"])(function (ctx) {
                return {
                  type: "TODO.COMMIT",
                  todo: ctx
                };
              })]
            },
            SET_ACTIVE: {
              target: "pending",
              actions: [assign({
                completed: false
              }), Object(xstate__WEBPACK_IMPORTED_MODULE_0__["sendParent"])(function (ctx) {
                return {
                  type: "TODO.COMMIT",
                  todo: ctx
                };
              })]
            }
          }
        },
        hist: {
          type: "history"
        }
      },
      on: {
        EDIT: {
          target: "editing",
          actions: "focusInput"
        }
      }
    },
    editing: {
      onEntry: assign({
        prevTitle: function prevTitle(ctx) {
          return ctx.title;
        }
      }),
      on: {
        CHANGE: {
          actions: assign({
            title: function title(ctx, e) {
              return e.value;
            }
          })
        },
        COMMIT: [{
          target: "reading.hist",
          actions: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["sendParent"])(function (ctx) {
            return {
              type: "TODO.COMMIT",
              todo: ctx
            };
          }),
          cond: function cond(ctx) {
            return ctx.title.trim().length > 0;
          }
        }, {
          target: "deleted"
        }],
        BLUR: {
          target: "reading",
          actions: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["sendParent"])(function (ctx) {
            return {
              type: "TODO.COMMIT",
              todo: ctx
            };
          })
        },
        CANCEL: {
          target: "reading",
          actions: assign({
            title: function title(ctx) {
              return ctx.prevTitle;
            }
          })
        }
      }
    },
    deleted: {
      onEntry: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["sendParent"])(function (ctx) {
        return {
          type: "TODO.DELETE",
          id: ctx.id
        };
      })
    }
  }
});

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

/***/ }),

/***/ "./machines/todosMachine.js":
/*!**********************************!*\
  !*** ./machines/todosMachine.js ***!
  \**********************************/
/*! exports provided: todosMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todosMachine", function() { return todosMachine; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid-v4 */ "./node_modules/uuid-v4/index.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _todoMachine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoMachine */ "./machines/todoMachine.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var createTodo = function createTodo(title) {
  return {
    id: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
    title: title,
    completed: false
  };
};

var todosMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_1__["Machine"])({
  id: "todos",
  context: {
    todo: "",
    // new todo
    todos: []
  },
  initial: "initializing",
  states: {
    initializing: {
      entry: Object(xstate__WEBPACK_IMPORTED_MODULE_1__["assign"])({
        todos: function todos(ctx, e) {
          return ctx.todos.map(function (todo) {
            return _objectSpread(_objectSpread({}, todo), {}, {
              ref: Object(xstate__WEBPACK_IMPORTED_MODULE_1__["spawn"])(_todoMachine__WEBPACK_IMPORTED_MODULE_3__["todoMachine"].withContext(todo))
            });
          });
        }
      }),
      on: {
        "": "all"
      }
    },
    all: {},
    active: {},
    completed: {}
  },
  on: {
    "NEWTODO.CHANGE": {
      actions: Object(xstate__WEBPACK_IMPORTED_MODULE_1__["assign"])({
        todo: function todo(ctx, e) {
          return e.value;
        }
      })
    },
    "NEWTODO.COMMIT": {
      actions: [Object(xstate__WEBPACK_IMPORTED_MODULE_1__["assign"])({
        todo: "",
        // clear todo
        todos: function todos(ctx, e) {
          var newTodo = createTodo(e.value.trim());
          return ctx.todos.concat(_objectSpread(_objectSpread({}, newTodo), {}, {
            ref: Object(xstate__WEBPACK_IMPORTED_MODULE_1__["spawn"])(_todoMachine__WEBPACK_IMPORTED_MODULE_3__["todoMachine"].withContext(newTodo))
          }));
        }
      }), "persist"],
      cond: function cond(ctx, e) {
        return e.value.trim().length;
      }
    },
    "TODO.COMMIT": {
      actions: [Object(xstate__WEBPACK_IMPORTED_MODULE_1__["assign"])({
        todos: function todos(ctx, e) {
          return ctx.todos.map(function (todo) {
            return todo.id === e.todo.id ? _objectSpread(_objectSpread(_objectSpread({}, todo), e.todo), {}, {
              ref: todo.ref
            }) : todo;
          });
        }
      }), "persist"]
    },
    "TODO.DELETE": {
      actions: [Object(xstate__WEBPACK_IMPORTED_MODULE_1__["assign"])({
        todos: function todos(ctx, e) {
          return ctx.todos.filter(function (todo) {
            return todo.id !== e.id;
          });
        }
      }), "persist"]
    },
    "SHOW.all": ".all",
    "SHOW.active": ".active",
    "SHOW.completed": ".completed",
    "MARK.completed": {
      actions: function actions(ctx) {
        ctx.todos.forEach(function (todo) {
          return todo.ref.send("SET_COMPLETED");
        });
      }
    },
    "MARK.active": {
      actions: function actions(ctx) {
        ctx.todos.forEach(function (todo) {
          return todo.ref.send("SET_ACTIVE");
        });
      }
    },
    CLEAR_COMPLETED: {
      actions: Object(xstate__WEBPACK_IMPORTED_MODULE_1__["assign"])({
        todos: function todos(ctx) {
          return ctx.todos.filter(function (todo) {
            return !todo.completed;
          });
        }
      })
    }
  }
});

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@xstate/react/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@xstate/react/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var xstate_1 = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");
var defaultOptions = {
    immediate: false
};
function useMachine(machine, options) {
    if (options === void 0) { options = defaultOptions; }
    var context = options.context, guards = options.guards, actions = options.actions, activities = options.activities, services = options.services, delays = options.delays, immediate = options.immediate, rehydratedState = options.state, interpreterOptions = __rest(options, ["context", "guards", "actions", "activities", "services", "delays", "immediate", "state"]);
    var machineConfig = {
        context: context,
        guards: guards,
        actions: actions,
        activities: activities,
        services: services,
        delays: delays
    };
    // Reference the machine
    var machineRef = react_1.useRef(null);
    // Create the machine only once
    // See https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
    if (machineRef.current === null) {
        machineRef.current = machine.withConfig(machineConfig, __assign(__assign({}, machine.context), context));
    }
    // Reference the service
    var serviceRef = react_1.useRef(null);
    // Create the service only once
    if (serviceRef.current === null) {
        serviceRef.current = xstate_1.interpret(machineRef.current, interpreterOptions).onTransition(function (state) {
            // Update the current machine state when a transition occurs
            if (state.changed) {
                setCurrent(state);
            }
        });
    }
    var service = serviceRef.current;
    // Make sure actions and services are kept updated when they change.
    // This mutation assignment is safe because the service instance is only used
    // in one place -- this hook's caller.
    react_1.useEffect(function () {
        Object.assign(service.machine.options.actions, actions);
    }, [actions]);
    react_1.useEffect(function () {
        Object.assign(service.machine.options.services, services);
    }, [services]);
    // Keep track of the current machine state
    var initialState = rehydratedState
        ? xstate_1.State.create(rehydratedState)
        : service.initialState;
    var _a = __read(react_1.useState(function () { return initialState; }), 2), current = _a[0], setCurrent = _a[1];
    // Start service immediately (before mount) if specified in options
    if (immediate) {
        service.start();
    }
    react_1.useEffect(function () {
        // Start the service when the component mounts.
        // Note: the service will start only if it hasn't started already.
        //
        // If a rehydrated state was provided, use the resolved `initialState`.
        service.start(rehydratedState ? initialState : undefined);
        return function () {
            // Stop the service when the component unmounts
            service.stop();
        };
    }, []);
    return [current, service.send, service];
}
exports.useMachine = useMachine;
function useService(service) {
    var _a = __read(react_1.useState(service.state), 2), current = _a[0], setCurrent = _a[1];
    react_1.useEffect(function () {
        // Set to current service state as there is a possibility
        // of a transition occurring between the initial useState()
        // initialization and useEffect() commit.
        setCurrent(service.state);
        var listener = function (state) {
            if (state.changed) {
                setCurrent(state);
            }
        };
        var sub = service.subscribe(listener);
        return function () {
            sub.unsubscribe();
        };
    }, [service]);
    return [current, service.send, service];
}
exports.useService = useService;
var useActor_1 = __webpack_require__(/*! ./useActor */ "./node_modules/@xstate/react/lib/useActor.js");
exports.useActor = useActor_1.useActor;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@xstate/react/lib/useActor.js":
/*!****************************************************!*\
  !*** ./node_modules/@xstate/react/lib/useActor.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function useActor(actor) {
    var _a = __read(react_1.useState(undefined), 2), current = _a[0], setCurrent = _a[1];
    var actorRef = react_1.useRef(actor);
    react_1.useEffect(function () {
        if (actor) {
            actorRef.current = actor;
            var sub_1 = actor.subscribe(setCurrent);
            return function () {
                sub_1.unsubscribe();
            };
        }
    }, [actor]);
    return [current, actorRef.current ? actorRef.current.send : function () { return void 0; }];
}
exports.useActor = useActor;
//# sourceMappingURL=useActor.js.map

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CAlex%5Creact-componentes-e-projetos-diversos%5Ctodo-xstate-nextjs%5Cpages%5Cindex.js!./":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CAlex%5Creact-componentes-e-projetos-diversos%5Ctodo-xstate-nextjs%5Cpages%5Cindex.js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = _react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = _react["default"].createContext(null);

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return _react["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = (0, _sideEffect["default"])();
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/

function Head(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_ampContext.AmpStateContext.Consumer, null, function (ampState) {
    return /*#__PURE__*/_react["default"].createElement(_headManagerContext.HeadManagerContext.Consumer, null, function (updateHead) {
      return /*#__PURE__*/_react["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: (0, _amp.isInAmpMode)(ampState)
      }, children);
    });
  });
}

_c = Head;
Head.rewind = Effect.rewind;
var _default = Head;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Head");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = function _default() {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react$Component) {
    _inherits(_class, _react$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(_react.Component);
};

exports["default"] = _default;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/uuid-v4/index.js":
/*!***************************************!*\
  !*** ./node_modules/uuid-v4/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {


exports = module.exports = function() {
	var ret = '', value;
	for (var i = 0; i < 32; i++) {
		value = exports.random() * 16 | 0;
		// Insert the hypens
		if (i > 4 && i < 21 && ! (i % 4)) {
			ret += '-';
		}
		// Add the next random character
		ret += (
			(i === 12) ? 4 : (
				(i === 16) ? (value & 3 | 8) : value
			)
		).toString(16);
	}
	return ret;
};

var uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
exports.isUUID = function(uuid) {
	return uuidRegex.test(uuid);
};

exports.random = function() {
	return Math.random();
};



/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/xstate/es/Actor.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/Actor.js ***!
  \*****************************************/
/*! exports provided: createInvocableActor, createNullActor, isActor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInvocableActor", function() { return createInvocableActor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNullActor", function() { return createNullActor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isActor", function() { return isActor; });
function createNullActor(id) {
  return {
    id: id,
    send: function () {
      return void 0;
    },
    subscribe: function () {
      return {
        unsubscribe: function () {
          return void 0;
        }
      };
    },
    toJSON: function () {
      return {
        id: id
      };
    }
  };
}
/**
 * Creates a null actor that is able to be invoked given the provided
 * invocation information in its `.meta` value.
 *
 * @param invokeDefinition The meta information needed to invoke the actor.
 */


function createInvocableActor(invokeDefinition) {
  var tempActor = createNullActor(invokeDefinition.id);
  tempActor.meta = invokeDefinition;
  return tempActor;
}

function isActor(item) {
  try {
    return typeof item.send === 'function';
  } catch (e) {
    return false;
  }
}



/***/ }),

/***/ "./node_modules/xstate/es/Machine.js":
/*!*******************************************!*\
  !*** ./node_modules/xstate/es/Machine.js ***!
  \*******************************************/
/*! exports provided: Machine, createMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Machine", function() { return Machine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMachine", function() { return createMachine; });
/* harmony import */ var _StateNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateNode.js */ "./node_modules/xstate/es/StateNode.js");


function Machine(config, options, initialContext) {
  if (initialContext === void 0) {
    initialContext = config.context;
  }

  var resolvedInitialContext = typeof initialContext === 'function' ? initialContext() : initialContext;
  return new _StateNode_js__WEBPACK_IMPORTED_MODULE_0__["StateNode"](config, options, resolvedInitialContext);
}

function createMachine(config, options) {
  var resolvedInitialContext = typeof config.context === 'function' ? config.context() : config.context;
  return new _StateNode_js__WEBPACK_IMPORTED_MODULE_0__["StateNode"](config, options, resolvedInitialContext);
}



/***/ }),

/***/ "./node_modules/xstate/es/State.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/State.js ***!
  \*****************************************/
/*! exports provided: State, bindActionToState, isState, stateValuesEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionToState", function() { return bindActionToState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isState", function() { return isState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateValuesEqual", function() { return stateValuesEqual; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/xstate/es/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");
/* harmony import */ var _stateUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stateUtils.js */ "./node_modules/xstate/es/stateUtils.js");
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions.js */ "./node_modules/xstate/es/actions.js");






function stateValuesEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (a === undefined || b === undefined) {
    return false;
  }

  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(a) || Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(b)) {
    return a === b;
  }

  var aKeys = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["keys"])(a);
  var bKeys = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["keys"])(b);
  return aKeys.length === bKeys.length && aKeys.every(function (key) {
    return stateValuesEqual(a[key], b[key]);
  });
}

function isState(state) {
  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(state)) {
    return false;
  }

  return 'value' in state && 'history' in state;
}

function bindActionToState(action, state) {
  var exec = action.exec;

  var boundAction = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, action), {
    exec: exec !== undefined ? function () {
      return exec(state.context, state.event, {
        action: action,
        state: state,
        _event: state._event
      });
    } : undefined
  });

  return boundAction;
}

var State =
/*#__PURE__*/

/** @class */
function () {
  /**
   * Creates a new State instance.
   * @param value The state value
   * @param context The extended state
   * @param historyValue The tree representing historical values of the state nodes
   * @param history The previous state
   * @param actions An array of action objects to execute as side-effects
   * @param activities A mapping of activities and whether they are started (`true`) or stopped (`false`).
   * @param meta
   * @param events Internal event queue. Should be empty with run-to-completion semantics.
   * @param configuration
   */
  function State(config) {
    this.actions = [];
    this.activities = _constants_js__WEBPACK_IMPORTED_MODULE_1__["EMPTY_ACTIVITY_MAP"];
    this.meta = {};
    this.events = [];
    this.value = config.value;
    this.context = config.context;
    this._event = config._event;
    this._sessionid = config._sessionid;
    this.event = this._event.data;
    this.historyValue = config.historyValue;
    this.history = config.history;
    this.actions = config.actions || [];
    this.activities = config.activities || _constants_js__WEBPACK_IMPORTED_MODULE_1__["EMPTY_ACTIVITY_MAP"];
    this.meta = config.meta || {};
    this.events = config.events || [];
    this.matches = this.matches.bind(this);
    this.toStrings = this.toStrings.bind(this);
    this.configuration = config.configuration;
    this.transitions = config.transitions;
    this.children = config.children;
    this.done = !!config.done;
    Object.defineProperty(this, 'nextEvents', {
      get: function () {
        return Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_3__["nextEvents"])(config.configuration);
      }
    });
  }
  /**
   * Creates a new State instance for the given `stateValue` and `context`.
   * @param stateValue
   * @param context
   */


  State.from = function (stateValue, context) {
    if (stateValue instanceof State) {
      if (stateValue.context !== context) {
        return new State({
          value: stateValue.value,
          context: context,
          _event: stateValue._event,
          _sessionid: null,
          historyValue: stateValue.historyValue,
          history: stateValue.history,
          actions: [],
          activities: stateValue.activities,
          meta: {},
          events: [],
          configuration: [],
          transitions: [],
          children: {}
        });
      }

      return stateValue;
    }

    var _event = _actions_js__WEBPACK_IMPORTED_MODULE_4__["initEvent"];
    return new State({
      value: stateValue,
      context: context,
      _event: _event,
      _sessionid: null,
      historyValue: undefined,
      history: undefined,
      actions: [],
      activities: undefined,
      meta: undefined,
      events: [],
      configuration: [],
      transitions: [],
      children: {}
    });
  };
  /**
   * Creates a new State instance for the given `config`.
   * @param config The state config
   */


  State.create = function (config) {
    return new State(config);
  };
  /**
   * Creates a new `State` instance for the given `stateValue` and `context` with no actions (side-effects).
   * @param stateValue
   * @param context
   */


  State.inert = function (stateValue, context) {
    if (stateValue instanceof State) {
      if (!stateValue.actions.length) {
        return stateValue;
      }

      var _event = _actions_js__WEBPACK_IMPORTED_MODULE_4__["initEvent"];
      return new State({
        value: stateValue.value,
        context: context,
        _event: _event,
        _sessionid: null,
        historyValue: stateValue.historyValue,
        history: stateValue.history,
        activities: stateValue.activities,
        configuration: stateValue.configuration,
        transitions: [],
        children: {}
      });
    }

    return State.from(stateValue, context);
  };
  /**
   * Returns an array of all the string leaf state node paths.
   * @param stateValue
   * @param delimiter The character(s) that separate each subpath in the string state node path.
   */


  State.prototype.toStrings = function (stateValue, delimiter) {
    var _this = this;

    if (stateValue === void 0) {
      stateValue = this.value;
    }

    if (delimiter === void 0) {
      delimiter = '.';
    }

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(stateValue)) {
      return [stateValue];
    }

    var valueKeys = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["keys"])(stateValue);
    return valueKeys.concat.apply(valueKeys, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(valueKeys.map(function (key) {
      return _this.toStrings(stateValue[key], delimiter).map(function (s) {
        return key + delimiter + s;
      });
    })));
  };

  State.prototype.toJSON = function () {
    var _a = this,
        configuration = _a.configuration,
        transitions = _a.transitions,
        jsonValues = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["configuration", "transitions"]);

    return jsonValues;
  };
  /**
   * Whether the current state value is a subset of the given parent state value.
   * @param parentStateValue
   */


  State.prototype.matches = function (parentStateValue) {
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["matchesState"])(parentStateValue, this.value);
  };

  return State;
}();



/***/ }),

/***/ "./node_modules/xstate/es/StateNode.js":
/*!*********************************************!*\
  !*** ./node_modules/xstate/es/StateNode.js ***!
  \*********************************************/
/*! exports provided: StateNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateNode", function() { return StateNode; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/xstate/es/constants.js");
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment.js */ "./node_modules/xstate/es/environment.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types.js */ "./node_modules/xstate/es/types.js");
/* harmony import */ var _stateUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stateUtils.js */ "./node_modules/xstate/es/stateUtils.js");
/* harmony import */ var _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionTypes.js */ "./node_modules/xstate/es/actionTypes.js");
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions.js */ "./node_modules/xstate/es/actions.js");
/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./State.js */ "./node_modules/xstate/es/State.js");
/* harmony import */ var _Actor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Actor.js */ "./node_modules/xstate/es/Actor.js");










var NULL_EVENT = '';
var STATE_IDENTIFIER = '#';
var WILDCARD = '*';
var EMPTY_OBJECT = {};

var isStateId = function (str) {
  return str[0] === STATE_IDENTIFIER;
};

var createDefaultOptions = function () {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
};

var validateArrayifiedTransitions = function (stateNode, event, transitions) {
  var hasNonLastUnguardedTarget = transitions.slice(0, -1).some(function (transition) {
    return !('cond' in transition) && !('in' in transition) && (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(transition.target) || Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isMachine"])(transition.target));
  });
  var eventText = event === NULL_EVENT ? 'the transient event' : "event '" + event + "'";
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["warn"])(!hasNonLastUnguardedTarget, "One or more transitions for " + eventText + " on state '" + stateNode.id + "' are unreachable. " + "Make sure that the default transition is the last one defined.");
};

var StateNode =
/*#__PURE__*/

/** @class */
function () {
  function StateNode(
  /**
   * The raw config used to create the machine.
   */
  config, options,
  /**
   * The initial extended state
   */
  context) {
    var _this = this;

    this.config = config;
    this.context = context;
    /**
     * The order this state node appears. Corresponds to the implicit SCXML document order.
     */

    this.order = -1;
    this.__xstatenode = true;
    this.__cache = {
      events: undefined,
      relativeValue: new Map(),
      initialStateValue: undefined,
      initialState: undefined,
      on: undefined,
      transitions: undefined,
      candidates: {},
      delayedTransitions: undefined
    };
    this.idMap = {};
    this.options = Object.assign(createDefaultOptions(), options);
    this.parent = this.options._parent;
    this.key = this.config.key || this.options._key || this.config.id || '(machine)';
    this.machine = this.parent ? this.parent.machine : this;
    this.path = this.parent ? this.parent.path.concat(this.key) : [];
    this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : _constants_js__WEBPACK_IMPORTED_MODULE_1__["STATE_DELIMITER"]);
    this.id = this.config.id || Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])([this.machine.key], this.path).join(this.delimiter);
    this.version = this.parent ? this.parent.version : this.config.version;
    this.type = this.config.type || (this.config.parallel ? 'parallel' : this.config.states && Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(this.config.states).length ? 'compound' : this.config.history ? 'history' : 'atomic');

    if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["warn"])(!('parallel' in this.config), "The \"parallel\" property is deprecated and will be removed in version 4.1. " + (this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '" + this.type + "'`") + " in the config for state node '" + this.id + "' instead.");
    }

    this.initial = this.config.initial;
    this.states = this.config.states ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapValues"])(this.config.states, function (stateConfig, key) {
      var _a;

      var stateNode = new StateNode(stateConfig, {
        _parent: _this,
        _key: key
      });
      Object.assign(_this.idMap, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_a = {}, _a[stateNode.id] = stateNode, _a), stateNode.idMap));
      return stateNode;
    }) : EMPTY_OBJECT; // Document order

    var order = 0;

    function dfs(stateNode) {
      var e_1, _a;

      stateNode.order = order++;

      try {
        for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getChildren"])(stateNode)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var child = _c.value;
          dfs(child);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }

    dfs(this); // History config

    this.history = this.config.history === true ? 'shallow' : this.config.history || false;
    this._transient = !this.config.on ? false : Array.isArray(this.config.on) ? this.config.on.some(function (_a) {
      var event = _a.event;
      return event === NULL_EVENT;
    }) : NULL_EVENT in this.config.on;
    this.strict = !!this.config.strict; // TODO: deprecate (entry)

    this.onEntry = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(this.config.entry || this.config.onEntry).map(function (action) {
      return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["toActionObject"])(action);
    }); // TODO: deprecate (exit)

    this.onExit = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(this.config.exit || this.config.onExit).map(function (action) {
      return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["toActionObject"])(action);
    });
    this.meta = this.config.meta;
    this.data = this.type === 'final' ? this.config.data : undefined;
    this.invoke = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(this.config.invoke).map(function (invokeConfig, i) {
      var _a, _b;

      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isMachine"])(invokeConfig)) {
        _this.machine.options.services = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_a = {}, _a[invokeConfig.id] = invokeConfig, _a), _this.machine.options.services);
        return {
          type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["invoke"],
          src: invokeConfig.id,
          id: invokeConfig.id
        };
      } else if (typeof invokeConfig.src !== 'string') {
        var invokeSrc = _this.id + ":invocation[" + i + "]"; // TODO: util function

        _this.machine.options.services = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_b = {}, _b[invokeSrc] = invokeConfig.src, _b), _this.machine.options.services);
        return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
          type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["invoke"],
          id: invokeSrc
        }, invokeConfig), {
          src: invokeSrc
        });
      } else {
        return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, invokeConfig), {
          type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["invoke"],
          id: invokeConfig.id || invokeConfig.src,
          src: invokeConfig.src
        });
      }
    });
    this.activities = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(this.config.activities).concat(this.invoke).map(function (activity) {
      return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["toActivityDefinition"])(activity);
    });
    this.transition = this.transition.bind(this);
  }

  StateNode.prototype._init = function () {
    if (this.__cache.transitions) {
      return;
    }

    Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getAllStateNodes"])(this).forEach(function (stateNode) {
      return stateNode.on;
    });
  };
  /**
   * Clones this state machine with custom options and context.
   *
   * @param options Options (actions, guards, activities, services) to recursively merge with the existing options.
   * @param context Custom context (will override predefined context)
   */


  StateNode.prototype.withConfig = function (options, context) {
    if (context === void 0) {
      context = this.context;
    }

    var _a = this.options,
        actions = _a.actions,
        activities = _a.activities,
        guards = _a.guards,
        services = _a.services,
        delays = _a.delays;
    return new StateNode(this.config, {
      actions: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, actions), options.actions),
      activities: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, activities), options.activities),
      guards: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, guards), options.guards),
      services: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, services), options.services),
      delays: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, delays), options.delays)
    }, context);
  };
  /**
   * Clones this state machine with custom context.
   *
   * @param context Custom context (will override predefined context, not recursive)
   */


  StateNode.prototype.withContext = function (context) {
    return new StateNode(this.config, this.options, context);
  };

  Object.defineProperty(StateNode.prototype, "definition", {
    /**
     * The well-structured state node definition.
     */
    get: function () {
      return {
        id: this.id,
        key: this.key,
        version: this.version,
        type: this.type,
        initial: this.initial,
        history: this.history,
        states: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapValues"])(this.states, function (state) {
          return state.definition;
        }),
        on: this.on,
        transitions: this.transitions,
        onEntry: this.onEntry,
        onExit: this.onExit,
        activities: this.activities || [],
        meta: this.meta,
        order: this.order || -1,
        data: this.data,
        invoke: this.invoke
      };
    },
    enumerable: true,
    configurable: true
  });

  StateNode.prototype.toJSON = function () {
    return this.definition;
  };

  Object.defineProperty(StateNode.prototype, "on", {
    /**
     * The mapping of events to transitions.
     */
    get: function () {
      if (this.__cache.on) {
        return this.__cache.on;
      }

      var transitions = this.transitions;
      return this.__cache.on = transitions.reduce(function (map, transition) {
        map[transition.eventType] = map[transition.eventType] || [];
        map[transition.eventType].push(transition);
        return map;
      }, {});
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "after", {
    get: function () {
      return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "transitions", {
    /**
     * All the transitions that can be taken from this state node.
     */
    get: function () {
      return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
    },
    enumerable: true,
    configurable: true
  });

  StateNode.prototype.getCandidates = function (eventName) {
    if (this.__cache.candidates[eventName]) {
      return this.__cache.candidates[eventName];
    }

    var transient = eventName === NULL_EVENT;
    var candidates = this.transitions.filter(function (transition) {
      var sameEventType = transition.eventType === eventName; // null events should only match against eventless transitions

      return transient ? sameEventType : sameEventType || transition.eventType === WILDCARD;
    });
    this.__cache.candidates[eventName] = candidates;
    return candidates;
  };
  /**
   * All delayed transitions from the config.
   */


  StateNode.prototype.getDelayedTransitions = function () {
    var _this = this;

    var afterConfig = this.config.after;

    if (!afterConfig) {
      return [];
    }

    var mutateEntryExit = function (delay, i) {
      var delayRef = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(delay) ? _this.id + ":delay[" + i + "]" : delay;
      var eventType = Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["after"])(delayRef, _this.id);

      _this.onEntry.push(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["send"])(eventType, {
        delay: delay
      }));

      _this.onExit.push(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["cancel"])(eventType));

      return eventType;
    };

    var delayedTransitions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isArray"])(afterConfig) ? afterConfig.map(function (transition, i) {
      var eventType = mutateEntryExit(transition.delay, i);
      return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transition), {
        event: eventType
      });
    }) : Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(afterConfig).map(function (delay, i) {
      var configTransition = afterConfig[delay];
      var resolvedTransition = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(configTransition) ? {
        target: configTransition
      } : configTransition;
      var resolvedDelay = !isNaN(+delay) ? +delay : delay;
      var eventType = mutateEntryExit(resolvedDelay, i);
      return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(resolvedTransition).map(function (transition) {
        return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transition), {
          event: eventType,
          delay: resolvedDelay
        });
      });
    }));
    return delayedTransitions.map(function (delayedTransition) {
      var delay = delayedTransition.delay;
      return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.formatTransition(delayedTransition)), {
        delay: delay
      });
    });
  };
  /**
   * Returns the state nodes represented by the current state value.
   *
   * @param state The state value or State instance
   */


  StateNode.prototype.getStateNodes = function (state) {
    var _a;

    var _this = this;

    if (!state) {
      return [];
    }

    var stateValue = state instanceof _State_js__WEBPACK_IMPORTED_MODULE_8__["State"] ? state.value : Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStateValue"])(state, this.delimiter);

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(stateValue)) {
      var initialStateValue = this.getStateNode(stateValue).initial;
      return initialStateValue !== undefined ? this.getStateNodes((_a = {}, _a[stateValue] = initialStateValue, _a)) : [this.states[stateValue]];
    }

    var subStateKeys = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(stateValue);
    var subStateNodes = subStateKeys.map(function (subStateKey) {
      return _this.getStateNode(subStateKey);
    });
    return subStateNodes.concat(subStateKeys.reduce(function (allSubStateNodes, subStateKey) {
      var subStateNode = _this.getStateNode(subStateKey).getStateNodes(stateValue[subStateKey]);

      return allSubStateNodes.concat(subStateNode);
    }, []));
  };
  /**
   * Returns `true` if this state node explicitly handles the given event.
   *
   * @param event The event in question
   */


  StateNode.prototype.handles = function (event) {
    var eventType = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getEventType"])(event);
    return this.events.includes(eventType);
  };
  /**
   * Resolves the given `state` to a new `State` instance relative to this machine.
   *
   * This ensures that `.events` and `.nextEvents` represent the correct values.
   *
   * @param state The state to resolve
   */


  StateNode.prototype.resolveState = function (state) {
    var configuration = Array.from(Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getConfiguration"])([], this.getStateNodes(state.value)));
    return new _State_js__WEBPACK_IMPORTED_MODULE_8__["State"](Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
      value: this.resolve(state.value),
      configuration: configuration
    }));
  };

  StateNode.prototype.transitionLeafNode = function (stateValue, state, _event) {
    var stateNode = this.getStateNode(stateValue);
    var next = stateNode.next(state, _event);

    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }

    return next;
  };

  StateNode.prototype.transitionCompoundNode = function (stateValue, state, _event) {
    var subStateKeys = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(stateValue);
    var stateNode = this.getStateNode(subStateKeys[0]);

    var next = stateNode._transition(stateValue[subStateKeys[0]], state, _event);

    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }

    return next;
  };

  StateNode.prototype.transitionParallelNode = function (stateValue, state, _event) {
    var e_2, _a;

    var transitionMap = {};

    try {
      for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(stateValue)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var subStateKey = _c.value;
        var subStateValue = stateValue[subStateKey];

        if (!subStateValue) {
          continue;
        }

        var subStateNode = this.getStateNode(subStateKey);

        var next = subStateNode._transition(subStateValue, state, _event);

        if (next) {
          transitionMap[subStateKey] = next;
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    var stateTransitions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(transitionMap).map(function (key) {
      return transitionMap[key];
    });
    var enabledTransitions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(stateTransitions.map(function (st) {
      return st.transitions;
    }));
    var willTransition = stateTransitions.some(function (st) {
      return st.transitions.length > 0;
    });

    if (!willTransition) {
      return this.next(state, _event);
    }

    var entryNodes = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(stateTransitions.map(function (t) {
      return t.entrySet;
    }));
    var configuration = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(transitionMap).map(function (key) {
      return transitionMap[key].configuration;
    }));
    return {
      transitions: enabledTransitions,
      entrySet: entryNodes,
      exitSet: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(stateTransitions.map(function (t) {
        return t.exitSet;
      })),
      configuration: configuration,
      source: state,
      actions: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(transitionMap).map(function (key) {
        return transitionMap[key].actions;
      }))
    };
  };

  StateNode.prototype._transition = function (stateValue, state, _event) {
    // leaf node
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(stateValue)) {
      return this.transitionLeafNode(stateValue, state, _event);
    } // hierarchical node


    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(stateValue).length === 1) {
      return this.transitionCompoundNode(stateValue, state, _event);
    } // orthogonal node


    return this.transitionParallelNode(stateValue, state, _event);
  };

  StateNode.prototype.next = function (state, _event) {
    var e_3, _a;

    var _this = this;

    var eventName = _event.name;
    var actions = [];
    var nextStateNodes = [];
    var selectedTransition;

    try {
      for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.getCandidates(eventName)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var candidate = _c.value;
        var cond = candidate.cond,
            stateIn = candidate.in;
        var resolvedContext = state.context;
        var isInState = stateIn ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(stateIn) && isStateId(stateIn) ? // Check if in state by ID
        state.matches(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStateValue"])(this.getStateNodeById(stateIn).path, this.delimiter)) : // Check if in state by relative grandparent
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["matchesState"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStateValue"])(stateIn, this.delimiter), Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["path"])(this.path.slice(0, -2))(state.value)) : true;
        var guardPassed = false;

        try {
          guardPassed = !cond || this.evaluateGuard(cond, resolvedContext, _event, state);
        } catch (err) {
          throw new Error("Unable to evaluate guard '" + (cond.name || cond.type) + "' in transition for event '" + eventName + "' in state node '" + this.id + "':\n" + err.message);
        }

        if (guardPassed && isInState) {
          if (candidate.target !== undefined) {
            nextStateNodes = candidate.target;
          }

          actions.push.apply(actions, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(candidate.actions));
          selectedTransition = candidate;
          break;
        }
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    if (!selectedTransition) {
      return undefined;
    }

    if (!nextStateNodes.length) {
      return {
        transitions: [selectedTransition],
        entrySet: [],
        exitSet: [],
        configuration: state.value ? [this] : [],
        source: state,
        actions: actions
      };
    }

    var allNextStateNodes = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(nextStateNodes.map(function (stateNode) {
      return _this.getRelativeStateNodes(stateNode, state.historyValue);
    }));
    var isInternal = !!selectedTransition.internal;
    var reentryNodes = isInternal ? [] : Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(allNextStateNodes.map(function (n) {
      return _this.nodesFromChild(n);
    }));
    return {
      transitions: [selectedTransition],
      entrySet: reentryNodes,
      exitSet: isInternal ? [] : [this],
      configuration: allNextStateNodes,
      source: state,
      actions: actions
    };
  };

  StateNode.prototype.nodesFromChild = function (childStateNode) {
    if (childStateNode.escapes(this)) {
      return [];
    }

    var nodes = [];
    var marker = childStateNode;

    while (marker && marker !== this) {
      nodes.push(marker);
      marker = marker.parent;
    }

    nodes.push(this); // inclusive

    return nodes;
  };
  /**
   * Whether the given state node "escapes" this state node. If the `stateNode` is equal to or the parent of
   * this state node, it does not escape.
   */


  StateNode.prototype.escapes = function (stateNode) {
    if (this === stateNode) {
      return false;
    }

    var parent = this.parent;

    while (parent) {
      if (parent === stateNode) {
        return false;
      }

      parent = parent.parent;
    }

    return true;
  };

  StateNode.prototype.evaluateGuard = function (guard, context, _event, state) {
    var guards = this.machine.options.guards;
    var guardMeta = {
      state: state,
      cond: guard,
      _event: _event
    }; // TODO: do not hardcode!

    if (guard.type === _constants_js__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_GUARD_TYPE"]) {
      return guard.predicate(context, _event.data, guardMeta);
    }

    var condFn = guards[guard.type];

    if (!condFn) {
      throw new Error("Guard '" + guard.type + "' is not implemented on machine '" + this.machine.id + "'.");
    }

    return condFn(context, _event.data, guardMeta);
  };

  StateNode.prototype.getActions = function (transition, currentContext, _event, prevState) {
    var e_4, _a, e_5, _b;

    var prevConfig = Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getConfiguration"])([], prevState ? this.getStateNodes(prevState.value) : [this]);
    var resolvedConfig = transition.configuration.length ? Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getConfiguration"])(prevConfig, transition.configuration) : prevConfig;

    try {
      for (var resolvedConfig_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(resolvedConfig), resolvedConfig_1_1 = resolvedConfig_1.next(); !resolvedConfig_1_1.done; resolvedConfig_1_1 = resolvedConfig_1.next()) {
        var sn = resolvedConfig_1_1.value;

        if (!Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["has"])(prevConfig, sn)) {
          transition.entrySet.push(sn);
        }
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (resolvedConfig_1_1 && !resolvedConfig_1_1.done && (_a = resolvedConfig_1.return)) _a.call(resolvedConfig_1);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    try {
      for (var prevConfig_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(prevConfig), prevConfig_1_1 = prevConfig_1.next(); !prevConfig_1_1.done; prevConfig_1_1 = prevConfig_1.next()) {
        var sn = prevConfig_1_1.value;

        if (!Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["has"])(resolvedConfig, sn) || Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["has"])(transition.exitSet, sn.parent)) {
          transition.exitSet.push(sn);
        }
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (prevConfig_1_1 && !prevConfig_1_1.done && (_b = prevConfig_1.return)) _b.call(prevConfig_1);
      } finally {
        if (e_5) throw e_5.error;
      }
    }

    if (!transition.source) {
      transition.exitSet = []; // Ensure that root StateNode (machine) is entered

      transition.entrySet.push(this);
    }

    var doneEvents = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(transition.entrySet.map(function (sn) {
      var events = [];

      if (sn.type !== 'final') {
        return events;
      }

      var parent = sn.parent;
      events.push(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["done"])(sn.id, sn.data), // TODO: deprecate - final states should not emit done events for their own state.
      Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["done"])(parent.id, sn.data ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapContext"])(sn.data, currentContext, _event) : undefined));

      if (parent.parent) {
        var grandparent = parent.parent;

        if (grandparent.type === 'parallel') {
          if (Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getChildren"])(grandparent).every(function (parentNode) {
            return Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["isInFinalState"])(transition.configuration, parentNode);
          })) {
            events.push(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["done"])(grandparent.id, grandparent.data));
          }
        }
      }

      return events;
    }));
    transition.exitSet.sort(function (a, b) {
      return b.order - a.order;
    });
    transition.entrySet.sort(function (a, b) {
      return a.order - b.order;
    });
    var entryStates = new Set(transition.entrySet);
    var exitStates = new Set(transition.exitSet);

    var _c = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])([Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Array.from(entryStates).map(function (stateNode) {
      return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(stateNode.activities.map(function (activity) {
        return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["start"])(activity);
      }), stateNode.onEntry);
    })).concat(doneEvents.map(_actions_js__WEBPACK_IMPORTED_MODULE_7__["raise"])), Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Array.from(exitStates).map(function (stateNode) {
      return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(stateNode.onExit, stateNode.activities.map(function (activity) {
        return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["stop"])(activity);
      }));
    }))], 2),
        entryActions = _c[0],
        exitActions = _c[1];

    var actions = Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["toActionObjects"])(exitActions.concat(transition.actions).concat(entryActions), this.machine.options.actions);
    return actions;
  };
  /**
   * Determines the next state given the current `state` and sent `event`.
   *
   * @param state The current State instance or state value
   * @param event The event that was sent at the current state
   * @param context The current context (extended state) of the current state
   */


  StateNode.prototype.transition = function (state, event, context) {
    if (state === void 0) {
      state = this.initialState;
    }

    var _event = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toSCXMLEvent"])(event);

    var currentState;

    if (state instanceof _State_js__WEBPACK_IMPORTED_MODULE_8__["State"]) {
      currentState = context === undefined ? state : this.resolveState(_State_js__WEBPACK_IMPORTED_MODULE_8__["State"].from(state, context));
    } else {
      var resolvedStateValue = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(state) ? this.resolve(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["pathToStateValue"])(this.getResolvedPath(state))) : this.resolve(state);
      var resolvedContext = context ? context : this.machine.context;
      currentState = this.resolveState(_State_js__WEBPACK_IMPORTED_MODULE_8__["State"].from(resolvedStateValue, resolvedContext));
    }

    if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"] && _event.name === WILDCARD) {
      throw new Error("An event cannot have the wildcard type ('" + WILDCARD + "')");
    }

    if (this.strict) {
      if (!this.events.includes(_event.name) && !Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isBuiltInEvent"])(_event.name)) {
        throw new Error("Machine '" + this.id + "' does not accept event '" + _event.name + "'");
      }
    }

    var stateTransition = this._transition(currentState.value, currentState, _event) || {
      transitions: [],
      configuration: [],
      entrySet: [],
      exitSet: [],
      source: currentState,
      actions: []
    };
    var prevConfig = Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getConfiguration"])([], this.getStateNodes(currentState.value));
    var resolvedConfig = stateTransition.configuration.length ? Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getConfiguration"])(prevConfig, stateTransition.configuration) : prevConfig;
    stateTransition.configuration = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(resolvedConfig);
    return this.resolveTransition(stateTransition, currentState, _event);
  };

  StateNode.prototype.resolveRaisedTransition = function (state, _event, originalEvent) {
    var _a;

    var currentActions = state.actions;
    state = this.transition(state, _event); // Save original event to state

    state._event = originalEvent;
    state.event = originalEvent.data;

    (_a = state.actions).unshift.apply(_a, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(currentActions));

    return state;
  };

  StateNode.prototype.resolveTransition = function (stateTransition, currentState, _event, context) {
    var e_6, _a;

    var _this = this;

    if (_event === void 0) {
      _event = _actions_js__WEBPACK_IMPORTED_MODULE_7__["initEvent"];
    }

    if (context === void 0) {
      context = this.machine.context;
    }

    var configuration = stateTransition.configuration; // Transition will "apply" if:
    // - this is the initial state (there is no current state)
    // - OR there are transitions

    var willTransition = !currentState || stateTransition.transitions.length > 0;
    var resolvedStateValue = willTransition ? Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getValue"])(this.machine, configuration) : undefined;
    var historyValue = currentState ? currentState.historyValue ? currentState.historyValue : stateTransition.source ? this.machine.historyValue(currentState.value) : undefined : undefined;
    var currentContext = currentState ? currentState.context : context;
    var actions = this.getActions(stateTransition, currentContext, _event, currentState);
    var activities = currentState ? Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, currentState.activities) : {};

    try {
      for (var actions_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(actions), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
        var action = actions_1_1.value;

        if (action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["start"]) {
          activities[action.activity.type] = action;
        } else if (action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["stop"]) {
          activities[action.activity.type] = false;
        }
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (actions_1_1 && !actions_1_1.done && (_a = actions_1.return)) _a.call(actions_1);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["partition"])(actions, function (action) {
      return action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["assign"];
    }), 2),
        assignActions = _b[0],
        otherActions = _b[1];

    var updatedContext = assignActions.length ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["updateContext"])(currentContext, _event, assignActions, currentState) : currentContext;
    var resolvedActions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(otherActions.map(function (actionObject) {
      switch (actionObject.type) {
        case _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["raise"]:
          return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["resolveRaise"])(actionObject);

        case _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["send"]:
          var sendAction = Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["resolveSend"])(actionObject, updatedContext, _event, _this.machine.options.delays); // TODO: fix ActionTypes.Init

          if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
            // warn after resolving as we can create better contextual message here
            Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["warn"])(!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(actionObject.delay) || typeof sendAction.delay === 'number', // tslint:disable-next-line:max-line-length
            "No delay reference for delay expression '" + actionObject.delay + "' was found on machine '" + _this.machine.id + "'");
          }

          return sendAction;

        case _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["log"]:
          return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["resolveLog"])(actionObject, updatedContext, _event);

        case _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["pure"]:
          return actionObject.get(updatedContext, _event.data) || [];

        default:
          return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["toActionObject"])(actionObject, _this.options.actions);
      }
    }));

    var _c = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["partition"])(resolvedActions, function (action) {
      return action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["raise"] || action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["send"] && action.to === _types_js__WEBPACK_IMPORTED_MODULE_4__["SpecialTargets"].Internal;
    }), 2),
        raisedEvents = _c[0],
        nonRaisedActions = _c[1];

    var invokeActions = resolvedActions.filter(function (action) {
      return action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["start"] && action.activity.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["invoke"];
    });
    var children = invokeActions.reduce(function (acc, action) {
      acc[action.activity.id] = Object(_Actor_js__WEBPACK_IMPORTED_MODULE_9__["createInvocableActor"])(action.activity);
      return acc;
    }, currentState ? Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, currentState.children) : {});
    var resolvedConfiguration = resolvedStateValue ? stateTransition.configuration : currentState ? currentState.configuration : [];
    var meta = resolvedConfiguration.reduce(function (acc, stateNode) {
      if (stateNode.meta !== undefined) {
        acc[stateNode.id] = stateNode.meta;
      }

      return acc;
    }, {});
    var isDone = Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["isInFinalState"])(resolvedConfiguration, this);
    var nextState = new _State_js__WEBPACK_IMPORTED_MODULE_8__["State"]({
      value: resolvedStateValue || currentState.value,
      context: updatedContext,
      _event: _event,
      // Persist _sessionid between states
      _sessionid: currentState ? currentState._sessionid : null,
      historyValue: resolvedStateValue ? historyValue ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["updateHistoryValue"])(historyValue, resolvedStateValue) : undefined : currentState ? currentState.historyValue : undefined,
      history: !resolvedStateValue || stateTransition.source ? currentState : undefined,
      actions: resolvedStateValue ? nonRaisedActions : [],
      activities: resolvedStateValue ? activities : currentState ? currentState.activities : {},
      meta: resolvedStateValue ? meta : currentState ? currentState.meta : undefined,
      events: [],
      configuration: resolvedConfiguration,
      transitions: stateTransition.transitions,
      children: children,
      done: isDone
    });
    nextState.changed = _event.name === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["update"] || !!assignActions.length; // Dispose of penultimate histories to prevent memory leaks

    var history = nextState.history;

    if (history) {
      delete history.history;
    }

    if (!resolvedStateValue) {
      return nextState;
    }

    var maybeNextState = nextState;

    if (!isDone) {
      var isTransient = this._transient || configuration.some(function (stateNode) {
        return stateNode._transient;
      });

      if (isTransient) {
        maybeNextState = this.resolveRaisedTransition(maybeNextState, {
          type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["nullEvent"]
        }, _event);
      }

      while (raisedEvents.length) {
        var raisedEvent = raisedEvents.shift();
        maybeNextState = this.resolveRaisedTransition(maybeNextState, raisedEvent._event, _event);
      }
    } // Detect if state changed


    var changed = maybeNextState.changed || (history ? !!maybeNextState.actions.length || !!assignActions.length || typeof history.value !== typeof maybeNextState.value || !Object(_State_js__WEBPACK_IMPORTED_MODULE_8__["stateValuesEqual"])(maybeNextState.value, history.value) : undefined);
    maybeNextState.changed = changed; // Preserve original history after raised events

    maybeNextState.historyValue = nextState.historyValue;
    maybeNextState.history = history;
    return maybeNextState;
  };
  /**
   * Returns the child state node from its relative `stateKey`, or throws.
   */


  StateNode.prototype.getStateNode = function (stateKey) {
    if (isStateId(stateKey)) {
      return this.machine.getStateNodeById(stateKey);
    }

    if (!this.states) {
      throw new Error("Unable to retrieve child state '" + stateKey + "' from '" + this.id + "'; no child states exist.");
    }

    var result = this.states[stateKey];

    if (!result) {
      throw new Error("Child state '" + stateKey + "' does not exist on '" + this.id + "'");
    }

    return result;
  };
  /**
   * Returns the state node with the given `stateId`, or throws.
   *
   * @param stateId The state ID. The prefix "#" is removed.
   */


  StateNode.prototype.getStateNodeById = function (stateId) {
    var resolvedStateId = isStateId(stateId) ? stateId.slice(STATE_IDENTIFIER.length) : stateId;

    if (resolvedStateId === this.id) {
      return this;
    }

    var stateNode = this.machine.idMap[resolvedStateId];

    if (!stateNode) {
      throw new Error("Child state node '#" + resolvedStateId + "' does not exist on machine '" + this.id + "'");
    }

    return stateNode;
  };
  /**
   * Returns the relative state node from the given `statePath`, or throws.
   *
   * @param statePath The string or string array relative path to the state node.
   */


  StateNode.prototype.getStateNodeByPath = function (statePath) {
    if (typeof statePath === 'string' && isStateId(statePath)) {
      try {
        return this.getStateNodeById(statePath.slice(1));
      } catch (e) {// try individual paths
        // throw e;
      }
    }

    var arrayStatePath = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStatePath"])(statePath, this.delimiter).slice();
    var currentStateNode = this;

    while (arrayStatePath.length) {
      var key = arrayStatePath.shift();

      if (!key.length) {
        break;
      }

      currentStateNode = currentStateNode.getStateNode(key);
    }

    return currentStateNode;
  };
  /**
   * Resolves a partial state value with its full representation in this machine.
   *
   * @param stateValue The partial state value to resolve.
   */


  StateNode.prototype.resolve = function (stateValue) {
    var _a;

    var _this = this;

    if (!stateValue) {
      return this.initialStateValue || EMPTY_OBJECT; // TODO: type-specific properties
    }

    switch (this.type) {
      case 'parallel':
        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapValues"])(this.initialStateValue, function (subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(stateValue[subStateKey] || subStateValue) : EMPTY_OBJECT;
        });

      case 'compound':
        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(stateValue)) {
          var subStateNode = this.getStateNode(stateValue);

          if (subStateNode.type === 'parallel' || subStateNode.type === 'compound') {
            return _a = {}, _a[stateValue] = subStateNode.initialStateValue, _a;
          }

          return stateValue;
        }

        if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(stateValue).length) {
          return this.initialStateValue || {};
        }

        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapValues"])(stateValue, function (subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(subStateValue) : EMPTY_OBJECT;
        });

      default:
        return stateValue || EMPTY_OBJECT;
    }
  };

  StateNode.prototype.getResolvedPath = function (stateIdentifier) {
    if (isStateId(stateIdentifier)) {
      var stateNode = this.machine.idMap[stateIdentifier.slice(STATE_IDENTIFIER.length)];

      if (!stateNode) {
        throw new Error("Unable to find state node '" + stateIdentifier + "'");
      }

      return stateNode.path;
    }

    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStatePath"])(stateIdentifier, this.delimiter);
  };

  Object.defineProperty(StateNode.prototype, "initialStateValue", {
    get: function () {
      var _a;

      if (this.__cache.initialStateValue) {
        return this.__cache.initialStateValue;
      }

      var initialStateValue;

      if (this.type === 'parallel') {
        initialStateValue = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapFilterValues"])(this.states, function (state) {
          return state.initialStateValue || EMPTY_OBJECT;
        }, function (stateNode) {
          return !(stateNode.type === 'history');
        });
      } else if (this.initial !== undefined) {
        if (!this.states[this.initial]) {
          throw new Error("Initial state '" + this.initial + "' not found on '" + this.key + "'");
        }

        initialStateValue = Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["isLeafNode"])(this.states[this.initial]) ? this.initial : (_a = {}, _a[this.initial] = this.states[this.initial].initialStateValue, _a);
      }

      this.__cache.initialStateValue = initialStateValue;
      return this.__cache.initialStateValue;
    },
    enumerable: true,
    configurable: true
  });

  StateNode.prototype.getInitialState = function (stateValue, context) {
    var configuration = this.getStateNodes(stateValue);
    return this.resolveTransition({
      configuration: configuration,
      entrySet: configuration,
      exitSet: [],
      transitions: [],
      source: undefined,
      actions: []
    }, undefined, undefined, context);
  };

  Object.defineProperty(StateNode.prototype, "initialState", {
    /**
     * The initial State instance, which includes all actions to be executed from
     * entering the initial state.
     */
    get: function () {
      this._init();

      var initialStateValue = this.initialStateValue;

      if (!initialStateValue) {
        throw new Error("Cannot retrieve initial state from simple state '" + this.id + "'.");
      }

      return this.getInitialState(initialStateValue);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "target", {
    /**
     * The target state value of the history state node, if it exists. This represents the
     * default state value to transition to if no history value exists yet.
     */
    get: function () {
      var target;

      if (this.type === 'history') {
        var historyConfig = this.config;

        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(historyConfig.target)) {
          target = isStateId(historyConfig.target) ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["pathToStateValue"])(this.machine.getStateNodeById(historyConfig.target).path.slice(this.path.length - 1)) : historyConfig.target;
        } else {
          target = historyConfig.target;
        }
      }

      return target;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Returns the leaf nodes from a state path relative to this state node.
   *
   * @param relativeStateId The relative state path to retrieve the state nodes
   * @param history The previous state to retrieve history
   * @param resolve Whether state nodes should resolve to initial child state nodes
   */

  StateNode.prototype.getRelativeStateNodes = function (relativeStateId, historyValue, resolve) {
    if (resolve === void 0) {
      resolve = true;
    }

    return resolve ? relativeStateId.type === 'history' ? relativeStateId.resolveHistory(historyValue) : relativeStateId.initialStateNodes : [relativeStateId];
  };

  Object.defineProperty(StateNode.prototype, "initialStateNodes", {
    get: function () {
      var _this = this;

      if (Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["isLeafNode"])(this)) {
        return [this];
      } // Case when state node is compound but no initial state is defined


      if (this.type === 'compound' && !this.initial) {
        if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["warn"])(false, "Compound state node '" + this.id + "' has no initial state.");
        }

        return [this];
      }

      var initialStateNodePaths = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStatePaths"])(this.initialStateValue);
      return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(initialStateNodePaths.map(function (initialPath) {
        return _this.getFromRelativePath(initialPath);
      }));
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Retrieves state nodes from a relative path to this state node.
   *
   * @param relativePath The relative path from this state node
   * @param historyValue
   */

  StateNode.prototype.getFromRelativePath = function (relativePath) {
    if (!relativePath.length) {
      return [this];
    }

    var _a = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(relativePath),
        stateKey = _a[0],
        childStatePath = _a.slice(1);

    if (!this.states) {
      throw new Error("Cannot retrieve subPath '" + stateKey + "' from node with no states");
    }

    var childStateNode = this.getStateNode(stateKey);

    if (childStateNode.type === 'history') {
      return childStateNode.resolveHistory();
    }

    if (!this.states[stateKey]) {
      throw new Error("Child state '" + stateKey + "' does not exist on '" + this.id + "'");
    }

    return this.states[stateKey].getFromRelativePath(childStatePath);
  };

  StateNode.prototype.historyValue = function (relativeStateValue) {
    if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(this.states).length) {
      return undefined;
    }

    return {
      current: relativeStateValue || this.initialStateValue,
      states: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapFilterValues"])(this.states, function (stateNode, key) {
        if (!relativeStateValue) {
          return stateNode.historyValue();
        }

        var subStateValue = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(relativeStateValue) ? undefined : relativeStateValue[key];
        return stateNode.historyValue(subStateValue || stateNode.initialStateValue);
      }, function (stateNode) {
        return !stateNode.history;
      })
    };
  };
  /**
   * Resolves to the historical value(s) of the parent state node,
   * represented by state nodes.
   *
   * @param historyValue
   */


  StateNode.prototype.resolveHistory = function (historyValue) {
    var _this = this;

    if (this.type !== 'history') {
      return [this];
    }

    var parent = this.parent;

    if (!historyValue) {
      var historyTarget = this.target;
      return historyTarget ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStatePaths"])(historyTarget).map(function (relativeChildPath) {
        return parent.getFromRelativePath(relativeChildPath);
      })) : parent.initialStateNodes;
    }

    var subHistoryValue = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["nestedPath"])(parent.path, 'states')(historyValue).current;

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(subHistoryValue)) {
      return [parent.getStateNode(subHistoryValue)];
    }

    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStatePaths"])(subHistoryValue).map(function (subStatePath) {
      return _this.history === 'deep' ? parent.getFromRelativePath(subStatePath) : [parent.states[subStatePath[0]]];
    }));
  };

  Object.defineProperty(StateNode.prototype, "stateIds", {
    /**
     * All the state node IDs of this state node and its descendant state nodes.
     */
    get: function () {
      var _this = this;

      var childStateIds = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(this.states).map(function (stateKey) {
        return _this.states[stateKey].stateIds;
      }));
      return [this.id].concat(childStateIds);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "events", {
    /**
     * All the event types accepted by this state node and its descendants.
     */
    get: function () {
      var e_7, _a, e_8, _b;

      if (this.__cache.events) {
        return this.__cache.events;
      }

      var states = this.states;
      var events = new Set(this.ownEvents);

      if (states) {
        try {
          for (var _c = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(states)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var stateId = _d.value;
            var state = states[stateId];

            if (state.states) {
              try {
                for (var _e = (e_8 = void 0, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(state.events)), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var event_1 = _f.value;
                  events.add("" + event_1);
                }
              } catch (e_8_1) {
                e_8 = {
                  error: e_8_1
                };
              } finally {
                try {
                  if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                } finally {
                  if (e_8) throw e_8.error;
                }
              }
            }
          }
        } catch (e_7_1) {
          e_7 = {
            error: e_7_1
          };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
          } finally {
            if (e_7) throw e_7.error;
          }
        }
      }

      return this.__cache.events = Array.from(events);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "ownEvents", {
    /**
     * All the events that have transitions directly from this state node.
     *
     * Excludes any inert events.
     */
    get: function () {
      var events = new Set(this.transitions.filter(function (transition) {
        return !(!transition.target && !transition.actions.length && transition.internal);
      }).map(function (transition) {
        return transition.eventType;
      }));
      return Array.from(events);
    },
    enumerable: true,
    configurable: true
  });

  StateNode.prototype.resolveTarget = function (_target) {
    var _this = this;

    if (_target === undefined) {
      // an undefined target signals that the state node should not transition from that state when receiving that event
      return undefined;
    }

    return _target.map(function (target) {
      if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(target)) {
        return target;
      }

      var isInternalTarget = target[0] === _this.delimiter; // If internal target is defined on machine,
      // do not include machine key on target

      if (isInternalTarget && !_this.parent) {
        return _this.getStateNodeByPath(target.slice(1));
      }

      var resolvedTarget = isInternalTarget ? _this.key + target : target;

      if (_this.parent) {
        try {
          var targetStateNode = _this.parent.getStateNodeByPath(resolvedTarget);

          return targetStateNode;
        } catch (err) {
          throw new Error("Invalid transition definition for state node '" + _this.id + "':\n" + err.message);
        }
      } else {
        return _this.getStateNodeByPath(resolvedTarget);
      }
    });
  };

  StateNode.prototype.formatTransition = function (transitionConfig) {
    var _this = this;

    var normalizedTarget = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["normalizeTarget"])(transitionConfig.target);
    var internal = 'internal' in transitionConfig ? transitionConfig.internal : normalizedTarget ? normalizedTarget.some(function (_target) {
      return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(_target) && _target[0] === _this.delimiter;
    }) : true;
    var guards = this.machine.options.guards;
    var target = this.resolveTarget(normalizedTarget);
    return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionConfig), {
      actions: Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["toActionObjects"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(transitionConfig.actions)),
      cond: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toGuard"])(transitionConfig.cond, guards),
      target: target,
      source: this,
      internal: internal,
      eventType: transitionConfig.event
    });
  };

  StateNode.prototype.formatTransitions = function () {
    var e_9, _a;

    var _this = this;

    var onConfig;

    if (!this.config.on) {
      onConfig = [];
    } else if (Array.isArray(this.config.on)) {
      onConfig = this.config.on;
    } else {
      var _b = this.config.on,
          _c = WILDCARD,
          _d = _b[_c],
          wildcardConfigs = _d === void 0 ? [] : _d,
          strictOnConfigs_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_b, [typeof _c === "symbol" ? _c : _c + ""]);

      onConfig = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(strictOnConfigs_1).map(function (key) {
        var arrayified = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toTransitionConfigArray"])(key, strictOnConfigs_1[key]);

        if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
          validateArrayifiedTransitions(_this, key, arrayified);
        }

        return arrayified;
      }).concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toTransitionConfigArray"])(WILDCARD, wildcardConfigs)));
    }

    var doneConfig = this.config.onDone ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toTransitionConfigArray"])(String(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["done"])(this.id)), this.config.onDone) : [];
    var invokeConfig = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(this.invoke.map(function (invokeDef) {
      var settleTransitions = [];

      if (invokeDef.onDone) {
        settleTransitions.push.apply(settleTransitions, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toTransitionConfigArray"])(String(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["doneInvoke"])(invokeDef.id)), invokeDef.onDone)));
      }

      if (invokeDef.onError) {
        settleTransitions.push.apply(settleTransitions, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toTransitionConfigArray"])(String(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["error"])(invokeDef.id)), invokeDef.onError)));
      }

      return settleTransitions;
    }));
    var delayedTransitions = this.after;
    var formattedTransitions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(doneConfig, invokeConfig, onConfig).map(function (transitionConfig) {
      return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(transitionConfig).map(function (transition) {
        return _this.formatTransition(transition);
      });
    }));

    try {
      for (var delayedTransitions_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(delayedTransitions), delayedTransitions_1_1 = delayedTransitions_1.next(); !delayedTransitions_1_1.done; delayedTransitions_1_1 = delayedTransitions_1.next()) {
        var delayedTransition = delayedTransitions_1_1.value;
        formattedTransitions.push(delayedTransition);
      }
    } catch (e_9_1) {
      e_9 = {
        error: e_9_1
      };
    } finally {
      try {
        if (delayedTransitions_1_1 && !delayedTransitions_1_1.done && (_a = delayedTransitions_1.return)) _a.call(delayedTransitions_1);
      } finally {
        if (e_9) throw e_9.error;
      }
    }

    return formattedTransitions;
  };

  return StateNode;
}();



/***/ }),

/***/ "./node_modules/xstate/es/_virtual/_tslib.js":
/*!***************************************************!*\
  !*** ./node_modules/xstate/es/_virtual/_tslib.js ***!
  \***************************************************/
/*! exports provided: __assign, __read, __rest, __spread, __values */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}



/***/ }),

/***/ "./node_modules/xstate/es/actionTypes.js":
/*!***********************************************!*\
  !*** ./node_modules/xstate/es/actionTypes.js ***!
  \***********************************************/
/*! exports provided: after, assign, cancel, doneState, error, errorExecution, errorPlatform, init, invoke, log, nullEvent, pure, raise, send, start, stop, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doneState", function() { return doneState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorExecution", function() { return errorExecution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorPlatform", function() { return errorPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return invoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullEvent", function() { return nullEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pure", function() { return pure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raise", function() { return raise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/xstate/es/types.js");
 // xstate-specific action types

var start = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Start;
var stop = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Stop;
var raise = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Raise;
var send = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Send;
var cancel = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Cancel;
var nullEvent = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].NullEvent;
var assign = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Assign;
var after = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].After;
var doneState = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DoneState;
var log = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Log;
var init = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Init;
var invoke = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Invoke;
var errorExecution = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ErrorExecution;
var errorPlatform = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ErrorPlatform;
var error = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ErrorCustom;
var update = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Update;
var pure = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Pure;


/***/ }),

/***/ "./node_modules/xstate/es/actions.js":
/*!*******************************************!*\
  !*** ./node_modules/xstate/es/actions.js ***!
  \*******************************************/
/*! exports provided: after, assign, cancel, done, doneInvoke, error, escalate, forwardTo, getActionFunction, initEvent, log, raise, resolveLog, resolveRaise, resolveSend, respond, send, sendParent, sendUpdate, start, stop, toActionObject, toActionObjects, toActivityDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "done", function() { return done; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doneInvoke", function() { return doneInvoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escalate", function() { return escalate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardTo", function() { return forwardTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionFunction", function() { return getActionFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initEvent", function() { return initEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raise", function() { return raise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveLog", function() { return resolveLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveRaise", function() { return resolveRaise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveSend", function() { return resolveSend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "respond", function() { return respond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendParent", function() { return sendParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendUpdate", function() { return sendUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toActionObject", function() { return toActionObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toActionObjects", function() { return toActionObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toActivityDefinition", function() { return toActivityDefinition; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "./node_modules/xstate/es/types.js");
/* harmony import */ var _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionTypes.js */ "./node_modules/xstate/es/actionTypes.js");




var initEvent =
/*#__PURE__*/
Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toSCXMLEvent"])({
  type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["init"]
});

function getActionFunction(actionType, actionFunctionMap) {
  return actionFunctionMap ? actionFunctionMap[actionType] || undefined : undefined;
}

function toActionObject(action, actionFunctionMap) {
  var actionObject;

  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(action) || typeof action === 'number') {
    var exec = getActionFunction(action, actionFunctionMap);

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(exec)) {
      actionObject = {
        type: action,
        exec: exec
      };
    } else if (exec) {
      actionObject = exec;
    } else {
      actionObject = {
        type: action,
        exec: undefined
      };
    }
  } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(action)) {
    actionObject = {
      // Convert action to string if unnamed
      type: action.name || action.toString(),
      exec: action
    };
  } else {
    var exec = getActionFunction(action.type, actionFunctionMap);

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(exec)) {
      actionObject = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, action), {
        exec: exec
      });
    } else if (exec) {
      var type = action.type,
          other = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__rest"])(action, ["type"]);

      actionObject = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        type: type
      }, exec), other);
    } else {
      actionObject = action;
    }
  }

  Object.defineProperty(actionObject, 'toString', {
    value: function () {
      return actionObject.type;
    },
    enumerable: false,
    configurable: true
  });
  return actionObject;
}

var toActionObjects = function (action, actionFunctionMap) {
  if (!action) {
    return [];
  }

  var actions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isArray"])(action) ? action : [action];
  return actions.map(function (subAction) {
    return toActionObject(subAction, actionFunctionMap);
  });
};

function toActivityDefinition(action) {
  var actionObject = toActionObject(action);
  return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
    id: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(action) ? action : actionObject.id
  }, actionObject), {
    type: actionObject.type
  });
}
/**
 * Raises an event. This places the event in the internal event queue, so that
 * the event is immediately consumed by the machine in the current step.
 *
 * @param eventType The event to raise.
 */


function raise(event) {
  if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(event)) {
    return send(event, {
      to: _types_js__WEBPACK_IMPORTED_MODULE_2__["SpecialTargets"].Internal
    });
  }

  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["raise"],
    event: event
  };
}

function resolveRaise(action) {
  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["raise"],
    _event: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toSCXMLEvent"])(action.event)
  };
}
/**
 * Sends an event. This returns an action that will be read by an interpreter to
 * send the event in the next step, after the current step is finished executing.
 *
 * @param event The event to send.
 * @param options Options to pass into the send event:
 *  - `id` - The unique send event identifier (used with `cancel()`).
 *  - `delay` - The number of milliseconds to delay the sending of the event.
 *  - `to` - The target of this event (by default, the machine the event was sent from).
 */


function send(event, options) {
  return {
    to: options ? options.to : undefined,
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["send"],
    event: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(event) ? event : Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toEventObject"])(event),
    delay: options ? options.delay : undefined,
    id: options && options.id !== undefined ? options.id : Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(event) ? event.name : Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getEventType"])(event)
  };
}

function resolveSend(action, ctx, _event, delaysMap) {
  var meta = {
    _event: _event
  }; // TODO: helper function for resolving Expr

  var resolvedEvent = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toSCXMLEvent"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(action.event) ? action.event(ctx, _event.data, meta) : action.event);
  var resolvedDelay;

  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(action.delay)) {
    var configDelay = delaysMap && delaysMap[action.delay];
    resolvedDelay = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(configDelay) ? configDelay(ctx, _event.data, meta) : configDelay;
  } else {
    resolvedDelay = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(action.delay) ? action.delay(ctx, _event.data, meta) : action.delay;
  }

  var resolvedTarget = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(action.to) ? action.to(ctx, _event.data, meta) : action.to;
  return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, action), {
    to: resolvedTarget,
    _event: resolvedEvent,
    event: resolvedEvent.data,
    delay: resolvedDelay
  });
}
/**
 * Sends an event to this machine's parent.
 *
 * @param event The event to send to the parent machine.
 * @param options Options to pass into the send event.
 */


function sendParent(event, options) {
  return send(event, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
    to: _types_js__WEBPACK_IMPORTED_MODULE_2__["SpecialTargets"].Parent
  }));
}
/**
 * Sends an update event to this machine's parent.
 */


function sendUpdate() {
  return sendParent(_actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["update"]);
}
/**
 * Sends an event back to the sender of the original event.
 *
 * @param event The event to send back to the sender
 * @param options Options to pass into the send event
 */


function respond(event, options) {
  return send(event, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
    to: function (_, __, _a) {
      var _event = _a._event;
      return _event.origin; // TODO: handle when _event.origin is undefined
    }
  }));
}

var defaultLogExpr = function (context, event) {
  return {
    context: context,
    event: event
  };
};
/**
 *
 * @param expr The expression function to evaluate which will be logged.
 *  Takes in 2 arguments:
 *  - `ctx` - the current state context
 *  - `event` - the event that caused this action to be executed.
 * @param label The label to give to the logged expression.
 */


function log(expr, label) {
  if (expr === void 0) {
    expr = defaultLogExpr;
  }

  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["log"],
    label: label,
    expr: expr
  };
}

var resolveLog = function (action, ctx, _event) {
  return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, action), {
    value: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(action.expr) ? action.expr : action.expr(ctx, _event.data, {
      _event: _event
    })
  });
};
/**
 * Cancels an in-flight `send(...)` action. A canceled sent action will not
 * be executed, nor will its event be sent, unless it has already been sent
 * (e.g., if `cancel(...)` is called after the `send(...)` action's `delay`).
 *
 * @param sendId The `id` of the `send(...)` action to cancel.
 */


var cancel = function (sendId) {
  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["cancel"],
    sendId: sendId
  };
};
/**
 * Starts an activity.
 *
 * @param activity The activity to start.
 */


function start(activity) {
  var activityDef = toActivityDefinition(activity);
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].Start,
    activity: activityDef,
    exec: undefined
  };
}
/**
 * Stops an activity.
 *
 * @param activity The activity to stop.
 */


function stop(activity) {
  var activityDef = toActivityDefinition(activity);
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].Stop,
    activity: activityDef,
    exec: undefined
  };
}
/**
 * Updates the current context of the machine.
 *
 * @param assignment An object that represents the partial context to update.
 */


var assign = function (assignment) {
  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["assign"],
    assignment: assignment
  };
};
/**
 * Returns an event type that represents an implicit event that
 * is sent after the specified `delay`.
 *
 * @param delayRef The delay in milliseconds
 * @param id The state node ID where this event is handled
 */


function after(delayRef, id) {
  var idSuffix = id ? "#" + id : '';
  return _types_js__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].After + "(" + delayRef + ")" + idSuffix;
}
/**
 * Returns an event that represents that a final state node
 * has been reached in the parent state node.
 *
 * @param id The final state node's parent state node `id`
 * @param data The data to pass into the event
 */


function done(id, data) {
  var type = _types_js__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].DoneState + "." + id;
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}
/**
 * Returns an event that represents that an invoked service has terminated.
 *
 * An invoked service is terminated when it has reached a top-level final state node,
 * but not when it is canceled.
 *
 * @param id The final state node ID
 * @param data The data to pass into the event
 */


function doneInvoke(id, data) {
  var type = _types_js__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].DoneInvoke + "." + id;
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}

function error(id, data) {
  var type = _types_js__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].ErrorPlatform + "." + id;
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}
/**
 * Forwards (sends) an event to a specified service.
 *
 * @param target The target service to forward the event to.
 * @param options Options to pass into the send action creator.
 */


function forwardTo(target, options) {
  return send(function (_, event) {
    return event;
  }, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
    to: target
  }));
}
/**
 * Escalates an error by sending it as an event to this machine's parent.
 *
 * @param errorData The error data to send.
 * @param options Options to pass into the send action creator.
 */


function escalate(errorData, options) {
  return sendParent({
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["error"],
    data: errorData
  }, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
    to: _types_js__WEBPACK_IMPORTED_MODULE_2__["SpecialTargets"].Parent
  }));
}



/***/ }),

/***/ "./node_modules/xstate/es/constants.js":
/*!*********************************************!*\
  !*** ./node_modules/xstate/es/constants.js ***!
  \*********************************************/
/*! exports provided: DEFAULT_GUARD_TYPE, EMPTY_ACTIVITY_MAP, STATE_DELIMITER, TARGETLESS_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GUARD_TYPE", function() { return DEFAULT_GUARD_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_ACTIVITY_MAP", function() { return EMPTY_ACTIVITY_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_DELIMITER", function() { return STATE_DELIMITER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TARGETLESS_KEY", function() { return TARGETLESS_KEY; });
var STATE_DELIMITER = '.';
var EMPTY_ACTIVITY_MAP = {};
var DEFAULT_GUARD_TYPE = 'xstate.guard';
var TARGETLESS_KEY = '';


/***/ }),

/***/ "./node_modules/xstate/es/devTools.js":
/*!********************************************!*\
  !*** ./node_modules/xstate/es/devTools.js ***!
  \********************************************/
/*! exports provided: registerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerService", function() { return registerService; });
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment.js */ "./node_modules/xstate/es/environment.js");


function getDevTools() {
  var w = window;

  if (!!w.__xstate__) {
    return w.__xstate__;
  }

  return undefined;
}

function registerService(service) {
  if (_environment_js__WEBPACK_IMPORTED_MODULE_0__["IS_PRODUCTION"] || typeof window === 'undefined') {
    return;
  }

  var devTools = getDevTools();

  if (devTools) {
    devTools.register(service);
  }
}



/***/ }),

/***/ "./node_modules/xstate/es/environment.js":
/*!***********************************************!*\
  !*** ./node_modules/xstate/es/environment.js ***!
  \***********************************************/
/*! exports provided: IS_PRODUCTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_PRODUCTION", function() { return IS_PRODUCTION; });
var IS_PRODUCTION = "development" === 'production';


/***/ }),

/***/ "./node_modules/xstate/es/index.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/index.js ***!
  \*****************************************/
/*! exports provided: matchesState, mapState, ActionTypes, SpecialTargets, assign, doneInvoke, forwardTo, send, sendParent, sendUpdate, State, StateNode, Machine, createMachine, Interpreter, interpret, spawn, matchState, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchesState", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_0__["matchesState"]; });

/* harmony import */ var _mapState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapState.js */ "./node_modules/xstate/es/mapState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return _mapState_js__WEBPACK_IMPORTED_MODULE_1__["mapState"]; });

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "./node_modules/xstate/es/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return _types_js__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpecialTargets", function() { return _types_js__WEBPACK_IMPORTED_MODULE_2__["SpecialTargets"]; });

/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions.js */ "./node_modules/xstate/es/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doneInvoke", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["doneInvoke"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forwardTo", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["forwardTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "send", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["send"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendParent", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["sendParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendUpdate", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["sendUpdate"]; });

/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./State.js */ "./node_modules/xstate/es/State.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "State", function() { return _State_js__WEBPACK_IMPORTED_MODULE_4__["State"]; });

/* harmony import */ var _StateNode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StateNode.js */ "./node_modules/xstate/es/StateNode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateNode", function() { return _StateNode_js__WEBPACK_IMPORTED_MODULE_5__["StateNode"]; });

/* harmony import */ var _Machine_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Machine.js */ "./node_modules/xstate/es/Machine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Machine", function() { return _Machine_js__WEBPACK_IMPORTED_MODULE_6__["Machine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMachine", function() { return _Machine_js__WEBPACK_IMPORTED_MODULE_6__["createMachine"]; });

/* harmony import */ var _interpreter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interpreter.js */ "./node_modules/xstate/es/interpreter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interpreter", function() { return _interpreter_js__WEBPACK_IMPORTED_MODULE_7__["Interpreter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpret", function() { return _interpreter_js__WEBPACK_IMPORTED_MODULE_7__["interpret"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _interpreter_js__WEBPACK_IMPORTED_MODULE_7__["spawn"]; });

/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./match.js */ "./node_modules/xstate/es/match.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchState", function() { return _match_js__WEBPACK_IMPORTED_MODULE_8__["matchState"]; });











var actions = {
  raise: _actions_js__WEBPACK_IMPORTED_MODULE_3__["raise"],
  send: _actions_js__WEBPACK_IMPORTED_MODULE_3__["send"],
  sendParent: _actions_js__WEBPACK_IMPORTED_MODULE_3__["sendParent"],
  sendUpdate: _actions_js__WEBPACK_IMPORTED_MODULE_3__["sendUpdate"],
  log: _actions_js__WEBPACK_IMPORTED_MODULE_3__["log"],
  cancel: _actions_js__WEBPACK_IMPORTED_MODULE_3__["cancel"],
  start: _actions_js__WEBPACK_IMPORTED_MODULE_3__["start"],
  stop: _actions_js__WEBPACK_IMPORTED_MODULE_3__["stop"],
  assign: _actions_js__WEBPACK_IMPORTED_MODULE_3__["assign"],
  after: _actions_js__WEBPACK_IMPORTED_MODULE_3__["after"],
  done: _actions_js__WEBPACK_IMPORTED_MODULE_3__["done"],
  respond: _actions_js__WEBPACK_IMPORTED_MODULE_3__["respond"],
  forwardTo: _actions_js__WEBPACK_IMPORTED_MODULE_3__["forwardTo"],
  escalate: _actions_js__WEBPACK_IMPORTED_MODULE_3__["escalate"]
};


/***/ }),

/***/ "./node_modules/xstate/es/interpreter.js":
/*!***********************************************!*\
  !*** ./node_modules/xstate/es/interpreter.js ***!
  \***********************************************/
/*! exports provided: Interpreter, interpret, spawn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interpreter", function() { return Interpreter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpret", function() { return interpret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return spawn; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment.js */ "./node_modules/xstate/es/environment.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "./node_modules/xstate/es/types.js");
/* harmony import */ var _stateUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stateUtils.js */ "./node_modules/xstate/es/stateUtils.js");
/* harmony import */ var _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actionTypes.js */ "./node_modules/xstate/es/actionTypes.js");
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions.js */ "./node_modules/xstate/es/actions.js");
/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./State.js */ "./node_modules/xstate/es/State.js");
/* harmony import */ var _Actor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Actor.js */ "./node_modules/xstate/es/Actor.js");
/* harmony import */ var _scheduler_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scheduler.js */ "./node_modules/xstate/es/scheduler.js");
/* harmony import */ var _registry_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registry.js */ "./node_modules/xstate/es/registry.js");
/* harmony import */ var _devTools_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./devTools.js */ "./node_modules/xstate/es/devTools.js");












var DEFAULT_SPAWN_OPTIONS = {
  sync: false,
  autoForward: false
};
/**
 * Maintains a stack of the current service in scope.
 * This is used to provide the correct service to spawn().
 *
 * @private
 */

var withServiceScope =
/*#__PURE__*/
function () {
  var serviceStack = [];
  return function (service, fn) {
    service && serviceStack.push(service);
    var result = fn(service || serviceStack[serviceStack.length - 1]);
    service && serviceStack.pop();
    return result;
  };
}();

var InterpreterStatus;

(function (InterpreterStatus) {
  InterpreterStatus[InterpreterStatus["NotStarted"] = 0] = "NotStarted";
  InterpreterStatus[InterpreterStatus["Running"] = 1] = "Running";
  InterpreterStatus[InterpreterStatus["Stopped"] = 2] = "Stopped";
})(InterpreterStatus || (InterpreterStatus = {}));

var Interpreter =
/*#__PURE__*/

/** @class */
function () {
  /**
   * Creates a new Interpreter instance (i.e., service) for the given machine with the provided options, if any.
   *
   * @param machine The machine to be interpreted
   * @param options Interpreter options
   */
  function Interpreter(machine, options, sessionId) {
    var _this = this;

    if (options === void 0) {
      options = Interpreter.defaultOptions;
    }

    this.machine = machine;
    this.scheduler = new _scheduler_js__WEBPACK_IMPORTED_MODULE_9__["Scheduler"]();
    this.delayedEventsMap = {};
    this.listeners = new Set();
    this.contextListeners = new Set();
    this.stopListeners = new Set();
    this.doneListeners = new Set();
    this.eventListeners = new Set();
    this.sendListeners = new Set();
    /**
     * Whether the service is started.
     */

    this.initialized = false;
    this._status = InterpreterStatus.NotStarted;
    this.children = new Map();
    this.forwardTo = new Set();
    /**
     * Alias for Interpreter.prototype.start
     */

    this.init = this.start;
    /**
     * Sends an event to the running interpreter to trigger a transition.
     *
     * An array of events (batched) can be sent as well, which will send all
     * batched events to the running interpreter. The listeners will be
     * notified only **once** when all events are processed.
     *
     * @param event The event(s) to send
     */

    this.send = function (event, payload) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isArray"])(event)) {
        _this.batch(event);

        return _this.state;
      }

      var _event = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toEventObject"])(event, payload));

      if (_this._status === InterpreterStatus.Stopped) {
        // do nothing
        if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "Event \"" + _event.name + "\" was sent to stopped service \"" + _this.machine.id + "\". This service has already reached its final state, and will not transition.\nEvent: " + JSON.stringify(_event.data));
        }

        return _this.state;
      }

      if (_this._status === InterpreterStatus.NotStarted && _this.options.deferEvents) {
        // tslint:disable-next-line:no-console
        if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "Event \"" + _event.name + "\" was sent to uninitialized service \"" + _this.machine.id + "\" and is deferred. Make sure .start() is called for this service.\nEvent: " + JSON.stringify(_event.data));
        }
      } else if (_this._status !== InterpreterStatus.Running) {
        throw new Error("Event \"" + _event.name + "\" was sent to uninitialized service \"" + _this.machine.id + "\". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: " + JSON.stringify(_event.data));
      }

      _this.scheduler.schedule(function () {
        // Forward copy of event to child actors
        _this.forward(_event);

        var nextState = _this.nextState(_event);

        _this.update(nextState, _event);
      });

      return _this._state; // TODO: deprecate (should return void)
      // tslint:disable-next-line:semicolon
    };

    this.sendTo = function (event, to) {
      var isParent = _this.parent && (to === _types_js__WEBPACK_IMPORTED_MODULE_3__["SpecialTargets"].Parent || _this.parent.id === to);
      var target = isParent ? _this.parent : Object(_Actor_js__WEBPACK_IMPORTED_MODULE_8__["isActor"])(to) ? to : _this.children.get(to) || _registry_js__WEBPACK_IMPORTED_MODULE_10__["registry"].get(to);

      if (!target) {
        if (!isParent) {
          throw new Error("Unable to send event to child '" + to + "' from service '" + _this.id + "'.");
        } // tslint:disable-next-line:no-console


        if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "Service '" + _this.id + "' has no parent: unable to send event " + event.type);
        }

        return;
      }

      if ('machine' in target) {
        // Send SCXML events to machines
        target.send(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), {
          name: event.name === _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["error"] ? "" + Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["error"])(_this.id) : event.name,
          origin: _this.sessionId
        }));
      } else {
        // Send normal events to other targets
        target.send(event.data);
      }
    };

    var resolvedOptions = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Interpreter.defaultOptions), options);

    var clock = resolvedOptions.clock,
        logger = resolvedOptions.logger,
        parent = resolvedOptions.parent,
        id = resolvedOptions.id;
    var resolvedId = id !== undefined ? id : machine.id;
    this.id = resolvedId;
    this.logger = logger;
    this.clock = clock;
    this.parent = parent;
    this.options = resolvedOptions;
    this.scheduler = new _scheduler_js__WEBPACK_IMPORTED_MODULE_9__["Scheduler"]({
      deferEvents: this.options.deferEvents
    });
    this.sessionId = sessionId !== undefined ? sessionId : _registry_js__WEBPACK_IMPORTED_MODULE_10__["registry"].register(this);
  }

  Object.defineProperty(Interpreter.prototype, "initialState", {
    get: function () {
      var _this = this;

      if (this._initialState) {
        return this._initialState;
      }

      return withServiceScope(this, function () {
        _this._initialState = _this.machine.initialState;
        return _this._initialState;
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Interpreter.prototype, "state", {
    get: function () {
      if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(this._status !== InterpreterStatus.NotStarted, "Attempted to read state from uninitialized service '" + this.id + "'. Make sure the service is started first.");
      }

      return this._state;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Executes the actions of the given state, with that state's `context` and `event`.
   *
   * @param state The state whose actions will be executed
   * @param actionsConfig The action implementations to use
   */

  Interpreter.prototype.execute = function (state, actionsConfig) {
    var e_1, _a;

    try {
      for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(state.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
        var action = _c.value;
        this.exec(action, state, actionsConfig);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };

  Interpreter.prototype.update = function (state, _event) {
    var e_2, _a, e_3, _b, e_4, _c, e_5, _d;

    var _this = this; // Attach session ID to state


    state._sessionid = this.sessionId; // Update state

    this._state = state; // Execute actions

    if (this.options.execute) {
      this.execute(this.state);
    } // Dev tools


    if (this.devTools) {
      this.devTools.send(_event.data, state);
    } // Execute listeners


    if (state.event) {
      try {
        for (var _e = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.eventListeners), _f = _e.next(); !_f.done; _f = _e.next()) {
          var listener = _f.value;
          listener(state.event);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }

    try {
      for (var _g = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.listeners), _h = _g.next(); !_h.done; _h = _g.next()) {
        var listener = _h.value;
        listener(state, state.event);
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    try {
      for (var _j = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.contextListeners), _k = _j.next(); !_k.done; _k = _j.next()) {
        var contextListener = _k.value;
        contextListener(this.state.context, this.state.history ? this.state.history.context : undefined);
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    var isDone = Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_4__["isInFinalState"])(state.configuration || [], this.machine);

    if (this.state.configuration && isDone) {
      // get final child state node
      var finalChildStateNode = state.configuration.find(function (sn) {
        return sn.type === 'final' && sn.parent === _this.machine;
      });
      var doneData = finalChildStateNode && finalChildStateNode.data ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["mapContext"])(finalChildStateNode.data, state.context, _event) : undefined;

      try {
        for (var _l = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.doneListeners), _m = _l.next(); !_m.done; _m = _l.next()) {
          var listener = _m.value;
          listener(Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["doneInvoke"])(this.id, doneData));
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
        } finally {
          if (e_5) throw e_5.error;
        }
      }

      this.stop();
    }
  };
  /*
   * Adds a listener that is notified whenever a state transition happens. The listener is called with
   * the next state and the event object that caused the state transition.
   *
   * @param listener The state listener
   */


  Interpreter.prototype.onTransition = function (listener) {
    this.listeners.add(listener); // Send current state to listener

    if (this._status === InterpreterStatus.Running) {
      listener(this.state, this.state.event);
    }

    return this;
  };

  Interpreter.prototype.subscribe = function (nextListenerOrObserver, // @ts-ignore
  errorListener, completeListener) {
    var _this = this;

    if (!nextListenerOrObserver) {
      return {
        unsubscribe: function () {
          return void 0;
        }
      };
    }

    var listener;
    var resolvedCompleteListener = completeListener;

    if (typeof nextListenerOrObserver === 'function') {
      listener = nextListenerOrObserver;
    } else {
      listener = nextListenerOrObserver.next.bind(nextListenerOrObserver);
      resolvedCompleteListener = nextListenerOrObserver.complete.bind(nextListenerOrObserver);
    }

    this.listeners.add(listener); // Send current state to listener

    if (this._status === InterpreterStatus.Running) {
      listener(this.state);
    }

    if (resolvedCompleteListener) {
      this.onDone(resolvedCompleteListener);
    }

    return {
      unsubscribe: function () {
        listener && _this.listeners.delete(listener);
        resolvedCompleteListener && _this.doneListeners.delete(resolvedCompleteListener);
      }
    };
  };
  /**
   * Adds an event listener that is notified whenever an event is sent to the running interpreter.
   * @param listener The event listener
   */


  Interpreter.prototype.onEvent = function (listener) {
    this.eventListeners.add(listener);
    return this;
  };
  /**
   * Adds an event listener that is notified whenever a `send` event occurs.
   * @param listener The event listener
   */


  Interpreter.prototype.onSend = function (listener) {
    this.sendListeners.add(listener);
    return this;
  };
  /**
   * Adds a context listener that is notified whenever the state context changes.
   * @param listener The context listener
   */


  Interpreter.prototype.onChange = function (listener) {
    this.contextListeners.add(listener);
    return this;
  };
  /**
   * Adds a listener that is notified when the machine is stopped.
   * @param listener The listener
   */


  Interpreter.prototype.onStop = function (listener) {
    this.stopListeners.add(listener);
    return this;
  };
  /**
   * Adds a state listener that is notified when the statechart has reached its final state.
   * @param listener The state listener
   */


  Interpreter.prototype.onDone = function (listener) {
    this.doneListeners.add(listener);
    return this;
  };
  /**
   * Removes a listener.
   * @param listener The listener to remove
   */


  Interpreter.prototype.off = function (listener) {
    this.listeners.delete(listener);
    this.eventListeners.delete(listener);
    this.sendListeners.delete(listener);
    this.stopListeners.delete(listener);
    this.doneListeners.delete(listener);
    this.contextListeners.delete(listener);
    return this;
  };
  /**
   * Starts the interpreter from the given state, or the initial state.
   * @param initialState The state to start the statechart from
   */


  Interpreter.prototype.start = function (initialState) {
    var _this = this;

    if (this._status === InterpreterStatus.Running) {
      // Do not restart the service if it is already started
      return this;
    }

    this.initialized = true;
    this._status = InterpreterStatus.Running;
    var resolvedState = initialState === undefined ? this.initialState : withServiceScope(this, function () {
      return Object(_State_js__WEBPACK_IMPORTED_MODULE_7__["isState"])(initialState) ? _this.machine.resolveState(initialState) : _this.machine.resolveState(_State_js__WEBPACK_IMPORTED_MODULE_7__["State"].from(initialState, _this.machine.context));
    });

    if (this.options.devTools) {
      this.attachDev();
    }

    this.scheduler.initialize(function () {
      _this.update(resolvedState, _actions_js__WEBPACK_IMPORTED_MODULE_6__["initEvent"]);
    });
    return this;
  };
  /**
   * Stops the interpreter and unsubscribe all listeners.
   *
   * This will also notify the `onStop` listeners.
   */


  Interpreter.prototype.stop = function () {
    var e_6, _a, e_7, _b, e_8, _c, e_9, _d, e_10, _e;

    try {
      for (var _f = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.listeners), _g = _f.next(); !_g.done; _g = _f.next()) {
        var listener = _g.value;
        this.listeners.delete(listener);
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    try {
      for (var _h = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.stopListeners), _j = _h.next(); !_j.done; _j = _h.next()) {
        var listener = _j.value; // call listener, then remove

        listener();
        this.stopListeners.delete(listener);
      }
    } catch (e_7_1) {
      e_7 = {
        error: e_7_1
      };
    } finally {
      try {
        if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
      } finally {
        if (e_7) throw e_7.error;
      }
    }

    try {
      for (var _k = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.contextListeners), _l = _k.next(); !_l.done; _l = _k.next()) {
        var listener = _l.value;
        this.contextListeners.delete(listener);
      }
    } catch (e_8_1) {
      e_8 = {
        error: e_8_1
      };
    } finally {
      try {
        if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
      } finally {
        if (e_8) throw e_8.error;
      }
    }

    try {
      for (var _m = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.doneListeners), _o = _m.next(); !_o.done; _o = _m.next()) {
        var listener = _o.value;
        this.doneListeners.delete(listener);
      }
    } catch (e_9_1) {
      e_9 = {
        error: e_9_1
      };
    } finally {
      try {
        if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
      } finally {
        if (e_9) throw e_9.error;
      }
    } // Stop all children


    this.children.forEach(function (child) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(child.stop)) {
        child.stop();
      }
    });

    try {
      // Cancel all delayed events
      for (var _p = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["keys"])(this.delayedEventsMap)), _q = _p.next(); !_q.done; _q = _p.next()) {
        var key = _q.value;
        this.clock.clearTimeout(this.delayedEventsMap[key]);
      }
    } catch (e_10_1) {
      e_10 = {
        error: e_10_1
      };
    } finally {
      try {
        if (_q && !_q.done && (_e = _p.return)) _e.call(_p);
      } finally {
        if (e_10) throw e_10.error;
      }
    }

    this.scheduler.clear();
    this.initialized = false;
    this._status = InterpreterStatus.Stopped;
    return this;
  };

  Interpreter.prototype.batch = function (events) {
    var _this = this;

    if (this._status === InterpreterStatus.NotStarted && this.options.deferEvents) {
      // tslint:disable-next-line:no-console
      if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, events.length + " event(s) were sent to uninitialized service \"" + this.machine.id + "\" and are deferred. Make sure .start() is called for this service.\nEvent: " + JSON.stringify(event));
      }
    } else if (this._status !== InterpreterStatus.Running) {
      throw new Error( // tslint:disable-next-line:max-line-length
      events.length + " event(s) were sent to uninitialized service \"" + this.machine.id + "\". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.");
    }

    this.scheduler.schedule(function () {
      var e_11, _a;

      var nextState = _this.state;
      var batchChanged = false;
      var batchedActions = [];

      var _loop_1 = function (event_1) {
        var _event = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(event_1);

        _this.forward(_event);

        nextState = withServiceScope(_this, function () {
          return _this.machine.transition(nextState, _event);
        });
        batchedActions.push.apply(batchedActions, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(nextState.actions.map(function (a) {
          return Object(_State_js__WEBPACK_IMPORTED_MODULE_7__["bindActionToState"])(a, nextState);
        })));
        batchChanged = batchChanged || !!nextState.changed;
      };

      try {
        for (var events_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
          var event_1 = events_1_1.value;

          _loop_1(event_1);
        }
      } catch (e_11_1) {
        e_11 = {
          error: e_11_1
        };
      } finally {
        try {
          if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
        } finally {
          if (e_11) throw e_11.error;
        }
      }

      nextState.changed = batchChanged;
      nextState.actions = batchedActions;

      _this.update(nextState, Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(events[events.length - 1]));
    });
  };
  /**
   * Returns a send function bound to this interpreter instance.
   *
   * @param event The event to be sent by the sender.
   */


  Interpreter.prototype.sender = function (event) {
    return this.send.bind(this, event);
  };
  /**
   * Returns the next state given the interpreter's current state and the event.
   *
   * This is a pure method that does _not_ update the interpreter's state.
   *
   * @param event The event to determine the next state
   */


  Interpreter.prototype.nextState = function (event) {
    var _this = this;

    var _event = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(event);

    if (_event.name.indexOf(_actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["errorPlatform"]) === 0 && !this.state.nextEvents.some(function (nextEvent) {
      return nextEvent.indexOf(_actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["errorPlatform"]) === 0;
    })) {
      throw _event.data.data;
    }

    var nextState = withServiceScope(this, function () {
      return _this.machine.transition(_this.state, _event);
    });
    return nextState;
  };

  Interpreter.prototype.forward = function (event) {
    var e_12, _a;

    try {
      for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.forwardTo), _c = _b.next(); !_c.done; _c = _b.next()) {
        var id = _c.value;
        var child = this.children.get(id);

        if (!child) {
          throw new Error("Unable to forward event '" + event + "' from interpreter '" + this.id + "' to nonexistant child '" + id + "'.");
        }

        child.send(event);
      }
    } catch (e_12_1) {
      e_12 = {
        error: e_12_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_12) throw e_12.error;
      }
    }
  };

  Interpreter.prototype.defer = function (sendAction) {
    var _this = this;

    this.delayedEventsMap[sendAction.id] = this.clock.setTimeout(function () {
      if (sendAction.to) {
        _this.sendTo(sendAction._event, sendAction.to);
      } else {
        _this.send(sendAction._event);
      }
    }, sendAction.delay);
  };

  Interpreter.prototype.cancel = function (sendId) {
    this.clock.clearTimeout(this.delayedEventsMap[sendId]);
    delete this.delayedEventsMap[sendId];
  };

  Interpreter.prototype.exec = function (action, state, actionFunctionMap) {
    var context = state.context,
        _event = state._event;
    var actionOrExec = Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["getActionFunction"])(action.type, actionFunctionMap) || action.exec;
    var exec = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(actionOrExec) ? actionOrExec : actionOrExec ? actionOrExec.exec : action.exec;

    if (exec) {
      try {
        return exec(context, _event.data, {
          action: action,
          state: this.state,
          _event: _event
        });
      } catch (err) {
        if (this.parent) {
          this.parent.send({
            type: 'xstate.error',
            data: err
          });
        }

        throw err;
      }
    }

    switch (action.type) {
      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["send"]:
        var sendAction = action;

        if (typeof sendAction.delay === 'number') {
          this.defer(sendAction);
          return;
        } else {
          if (sendAction.to) {
            this.sendTo(sendAction._event, sendAction.to);
          } else {
            this.send(sendAction._event);
          }
        }

        break;

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["cancel"]:
        this.cancel(action.sendId);
        break;

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["start"]:
        {
          var activity = action.activity; // If the activity will be stopped right after it's started
          // (such as in transient states)
          // don't bother starting the activity.

          if (!this.state.activities[activity.type]) {
            break;
          } // Invoked services


          if (activity.type === _types_js__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].Invoke) {
            var serviceCreator = this.machine.options.services ? this.machine.options.services[activity.src] : undefined;
            var id = activity.id,
                data = activity.data;

            if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
              Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(!('forward' in activity), // tslint:disable-next-line:max-line-length
              "`forward` property is deprecated (found in invocation of '" + activity.src + "' in in machine '" + this.machine.id + "'). " + "Please use `autoForward` instead.");
            }

            var autoForward = 'autoForward' in activity ? activity.autoForward : !!activity.forward;

            if (!serviceCreator) {
              // tslint:disable-next-line:no-console
              if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
                Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "No service found for invocation '" + activity.src + "' in machine '" + this.machine.id + "'.");
              }

              return;
            }

            var source = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(serviceCreator) ? serviceCreator(context, _event.data) : serviceCreator;

            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isPromiseLike"])(source)) {
              this.state.children[id] = this.spawnPromise(Promise.resolve(source), id);
            } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(source)) {
              this.state.children[id] = this.spawnCallback(source, id);
            } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(source)) {
              this.state.children[id] = this.spawnObservable(source, id);
            } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isMachine"])(source)) {
              // TODO: try/catch here
              this.state.children[id] = this.spawnMachine(data ? source.withContext(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["mapContext"])(data, context, _event)) : source, {
                id: id,
                autoForward: autoForward
              });
            }
          } else {
            this.spawnActivity(activity);
          }

          break;
        }

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["stop"]:
        {
          this.stopChild(action.activity.id);
          break;
        }

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["log"]:
        var label = action.label,
            value = action.value;

        if (label) {
          this.logger(label, value);
        } else {
          this.logger(value);
        }

        break;

      default:
        if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "No implementation found for action type '" + action.type + "'");
        }

        break;
    }

    return undefined;
  };

  Interpreter.prototype.stopChild = function (childId) {
    var child = this.children.get(childId);

    if (!child) {
      return;
    }

    this.children.delete(childId);
    this.forwardTo.delete(childId);
    delete this.state.children[childId];

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(child.stop)) {
      child.stop();
    }
  };

  Interpreter.prototype.spawn = function (entity, name, options) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isPromiseLike"])(entity)) {
      return this.spawnPromise(Promise.resolve(entity), name);
    } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(entity)) {
      return this.spawnCallback(entity, name);
    } else if (Object(_Actor_js__WEBPACK_IMPORTED_MODULE_8__["isActor"])(entity)) {
      return this.spawnActor(entity);
    } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(entity)) {
      return this.spawnObservable(entity, name);
    } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isMachine"])(entity)) {
      return this.spawnMachine(entity, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        id: name
      }));
    } else {
      throw new Error("Unable to spawn entity \"" + name + "\" of type \"" + typeof entity + "\".");
    }
  };

  Interpreter.prototype.spawnMachine = function (machine, options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    var childService = new Interpreter(machine, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options), {
      parent: this,
      id: options.id || machine.id
    }));

    var resolvedOptions = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_SPAWN_OPTIONS), options);

    if (resolvedOptions.sync) {
      childService.onTransition(function (state) {
        _this.send(_actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["update"], {
          state: state,
          id: childService.id
        });
      });
    }

    childService.onDone(function (doneEvent) {
      _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(doneEvent, {
        origin: childService.id
      }));
    }).start();
    var actor = childService;
    this.children.set(childService.id, actor);

    if (resolvedOptions.autoForward) {
      this.forwardTo.add(childService.id);
    }

    return actor;
  };

  Interpreter.prototype.spawnPromise = function (promise, id) {
    var _this = this;

    var canceled = false;
    promise.then(function (response) {
      if (!canceled) {
        _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["doneInvoke"])(id, response), {
          origin: id
        }));
      }
    }, function (errorData) {
      if (!canceled) {
        var errorEvent = Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["error"])(id, errorData);

        try {
          // Send "error.platform.id" to this (parent).
          _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(errorEvent, {
            origin: id
          }));
        } catch (error) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["reportUnhandledExceptionOnInvocation"])(errorData, error, id);

          if (_this.devTools) {
            _this.devTools.send(errorEvent, _this.state);
          }

          if (_this.machine.strict) {
            // it would be better to always stop the state machine if unhandled
            // exception/promise rejection happens but because we don't want to
            // break existing code so enforce it on strict mode only especially so
            // because documentation says that onError is optional
            _this.stop();
          }
        }
      }
    });
    var actor = {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function (next, handleError, complete) {
        var unsubscribed = false;
        promise.then(function (response) {
          if (unsubscribed) {
            return;
          }

          next && next(response);

          if (unsubscribed) {
            return;
          }

          complete && complete();
        }, function (err) {
          if (unsubscribed) {
            return;
          }

          handleError(err);
        });
        return {
          unsubscribe: function () {
            return unsubscribed = true;
          }
        };
      },
      stop: function () {
        canceled = true;
      },
      toJSON: function () {
        return {
          id: id
        };
      }
    };
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnCallback = function (callback, id) {
    var _this = this;

    var canceled = false;
    var receivers = new Set();
    var listeners = new Set();

    var receive = function (e) {
      listeners.forEach(function (listener) {
        return listener(e);
      });

      if (canceled) {
        return;
      }

      _this.send(e);
    };

    var callbackStop;

    try {
      callbackStop = callback(receive, function (newListener) {
        receivers.add(newListener);
      });
    } catch (err) {
      this.send(Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["error"])(id, err));
    }

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isPromiseLike"])(callbackStop)) {
      // it turned out to be an async function, can't reliably check this before calling `callback`
      // because transpiled async functions are not recognizable
      return this.spawnPromise(callbackStop, id);
    }

    var actor = {
      id: id,
      send: function (event) {
        return receivers.forEach(function (receiver) {
          return receiver(event);
        });
      },
      subscribe: function (next) {
        listeners.add(next);
        return {
          unsubscribe: function () {
            listeners.delete(next);
          }
        };
      },
      stop: function () {
        canceled = true;

        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(callbackStop)) {
          callbackStop();
        }
      },
      toJSON: function () {
        return {
          id: id
        };
      }
    };
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnObservable = function (source, id) {
    var _this = this;

    var subscription = source.subscribe(function (value) {
      _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(value, {
        origin: id
      }));
    }, function (err) {
      _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["error"])(id, err), {
        origin: id
      }));
    }, function () {
      _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["doneInvoke"])(id), {
        origin: id
      }));
    });
    var actor = {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function (next, handleError, complete) {
        return source.subscribe(next, handleError, complete);
      },
      stop: function () {
        return subscription.unsubscribe();
      },
      toJSON: function () {
        return {
          id: id
        };
      }
    };
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnActor = function (actor) {
    this.children.set(actor.id, actor);
    return actor;
  };

  Interpreter.prototype.spawnActivity = function (activity) {
    var implementation = this.machine.options && this.machine.options.activities ? this.machine.options.activities[activity.type] : undefined;

    if (!implementation) {
      if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "No implementation found for activity '" + activity.type + "'");
      } // tslint:disable-next-line:no-console


      return;
    } // Start implementation


    var dispose = implementation(this.state.context, activity);
    this.spawnEffect(activity.id, dispose);
  };

  Interpreter.prototype.spawnEffect = function (id, dispose) {
    this.children.set(id, {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function () {
        return {
          unsubscribe: function () {
            return void 0;
          }
        };
      },
      stop: dispose || undefined,
      toJSON: function () {
        return {
          id: id
        };
      }
    });
  };

  Interpreter.prototype.attachDev = function () {
    if (this.options.devTools && typeof window !== 'undefined') {
      if (window.__REDUX_DEVTOOLS_EXTENSION__) {
        var devToolsOptions = typeof this.options.devTools === 'object' ? this.options.devTools : undefined;
        this.devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
          name: this.id,
          autoPause: true,
          stateSanitizer: function (state) {
            return {
              value: state.value,
              context: state.context,
              actions: state.actions
            };
          }
        }, devToolsOptions), {
          features: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
            jump: false,
            skip: false
          }, devToolsOptions ? devToolsOptions.features : undefined)
        }), this.machine);
        this.devTools.init(this.state);
      } // add XState-specific dev tooling hook


      Object(_devTools_js__WEBPACK_IMPORTED_MODULE_11__["registerService"])(this);
    }
  };

  Interpreter.prototype.toJSON = function () {
    return {
      id: this.id
    };
  };

  Interpreter.prototype[_utils_js__WEBPACK_IMPORTED_MODULE_2__["symbolObservable"]] = function () {
    return this;
  };
  /**
   * The default interpreter options:
   *
   * - `clock` uses the global `setTimeout` and `clearTimeout` functions
   * - `logger` uses the global `console.log()` method
   */


  Interpreter.defaultOptions =
  /*#__PURE__*/
  function (global) {
    return {
      execute: true,
      deferEvents: true,
      clock: {
        setTimeout: function (fn, ms) {
          return global.setTimeout.call(null, fn, ms);
        },
        clearTimeout: function (id) {
          return global.clearTimeout.call(null, id);
        }
      },
      logger: global.console.log.bind(console),
      devTools: false
    };
  }(typeof window === 'undefined' ? global : window);

  Interpreter.interpret = interpret;
  return Interpreter;
}();

var createNullActor = function (name) {
  if (name === void 0) {
    name = 'null';
  }

  return {
    id: name,
    send: function () {
      return void 0;
    },
    subscribe: function () {
      // tslint:disable-next-line:no-empty
      return {
        unsubscribe: function () {}
      };
    },
    toJSON: function () {
      return {
        id: name
      };
    }
  };
};

var resolveSpawnOptions = function (nameOrOptions) {
  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(nameOrOptions)) {
    return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_SPAWN_OPTIONS), {
      name: nameOrOptions
    });
  }

  return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_SPAWN_OPTIONS), {
    name: Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["uniqueId"])()
  }), nameOrOptions);
};

function spawn(entity, nameOrOptions) {
  var resolvedOptions = resolveSpawnOptions(nameOrOptions);
  return withServiceScope(undefined, function (service) {
    if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(!!service, "Attempted to spawn an Actor (ID: \"" + (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isMachine"])(entity) ? entity.id : 'undefined') + "\") outside of a service. This will have no effect.");
    }

    if (service) {
      return service.spawn(entity, resolvedOptions.name, resolvedOptions);
    } else {
      return createNullActor(resolvedOptions.name);
    }
  });
}
/**
 * Creates a new Interpreter instance for the given machine with the provided options, if any.
 *
 * @param machine The machine to interpret
 * @param options Interpreter options
 */


function interpret(machine, options) {
  var interpreter = new Interpreter(machine, options);
  return interpreter;
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/xstate/es/mapState.js":
/*!********************************************!*\
  !*** ./node_modules/xstate/es/mapState.js ***!
  \********************************************/
/*! exports provided: mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");



function mapState(stateMap, stateId) {
  var e_1, _a;

  var foundStateId;

  try {
    for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["keys"])(stateMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var mappedStateId = _c.value;

      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["matchesState"])(mappedStateId, stateId) && (!foundStateId || stateId.length > foundStateId.length)) {
        foundStateId = mappedStateId;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return stateMap[foundStateId];
}



/***/ }),

/***/ "./node_modules/xstate/es/match.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/match.js ***!
  \*****************************************/
/*! exports provided: matchState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchState", function() { return matchState; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State.js */ "./node_modules/xstate/es/State.js");



function matchState(state, patterns, defaultValue) {
  var e_1, _a;

  var resolvedState = _State_js__WEBPACK_IMPORTED_MODULE_1__["State"].from(state, state instanceof _State_js__WEBPACK_IMPORTED_MODULE_1__["State"] ? state.context : undefined);

  try {
    for (var patterns_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(patterns), patterns_1_1 = patterns_1.next(); !patterns_1_1.done; patterns_1_1 = patterns_1.next()) {
      var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(patterns_1_1.value, 2),
          stateValue = _b[0],
          getValue = _b[1];

      if (resolvedState.matches(stateValue)) {
        return getValue(resolvedState);
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (patterns_1_1 && !patterns_1_1.done && (_a = patterns_1.return)) _a.call(patterns_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return defaultValue(resolvedState);
}



/***/ }),

/***/ "./node_modules/xstate/es/registry.js":
/*!********************************************!*\
  !*** ./node_modules/xstate/es/registry.js ***!
  \********************************************/
/*! exports provided: registry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registry", function() { return registry; });
var children =
/*#__PURE__*/
new Map();
var idMap =
/*#__PURE__*/
new Map();
var sessionIdIndex = 0;
var registry = {
  register: function (actor) {
    var id = "x:" + sessionIdIndex++;
    children.set(id, actor);
    idMap.set(actor, id);
    return id;
  },
  get: function (id) {
    return children.get(id);
  },
  lookup: function (actorRef) {
    return idMap.get(actorRef);
  }
};


/***/ }),

/***/ "./node_modules/xstate/es/scheduler.js":
/*!*********************************************!*\
  !*** ./node_modules/xstate/es/scheduler.js ***!
  \*********************************************/
/*! exports provided: Scheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return Scheduler; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");

var defaultOptions = {
  deferEvents: false
};

var Scheduler =
/*#__PURE__*/

/** @class */
function () {
  function Scheduler(options) {
    this.processingEvent = false;
    this.queue = [];
    this.initialized = false;
    this.options = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultOptions), options);
  }

  Scheduler.prototype.initialize = function (callback) {
    this.initialized = true;

    if (callback) {
      if (!this.options.deferEvents) {
        this.schedule(callback);
        return;
      }

      this.process(callback);
    }

    this.flushEvents();
  };

  Scheduler.prototype.schedule = function (task) {
    if (!this.initialized || this.processingEvent) {
      this.queue.push(task);
      return;
    }

    if (this.queue.length !== 0) {
      throw new Error('Event queue should be empty when it is not processing events');
    }

    this.process(task);
    this.flushEvents();
  };

  Scheduler.prototype.clear = function () {
    this.queue = [];
  };

  Scheduler.prototype.flushEvents = function () {
    var nextCallback = this.queue.shift();

    while (nextCallback) {
      this.process(nextCallback);
      nextCallback = this.queue.shift();
    }
  };

  Scheduler.prototype.process = function (callback) {
    this.processingEvent = true;

    try {
      callback();
    } catch (e) {
      // there is no use to keep the future events
      // as the situation is not anymore the same
      this.clear();
      throw e;
    } finally {
      this.processingEvent = false;
    }
  };

  return Scheduler;
}();



/***/ }),

/***/ "./node_modules/xstate/es/stateUtils.js":
/*!**********************************************!*\
  !*** ./node_modules/xstate/es/stateUtils.js ***!
  \**********************************************/
/*! exports provided: getAdjList, getAllStateNodes, getChildren, getConfiguration, getValue, has, isInFinalState, isLeafNode, nextEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdjList", function() { return getAdjList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllStateNodes", function() { return getAllStateNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return getChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfiguration", function() { return getConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInFinalState", function() { return isInFinalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeafNode", function() { return isLeafNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextEvents", function() { return nextEvents; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");



var isLeafNode = function (stateNode) {
  return stateNode.type === 'atomic' || stateNode.type === 'final';
};

function getChildren(stateNode) {
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["keys"])(stateNode.states).map(function (key) {
    return stateNode.states[key];
  });
}

function getAllStateNodes(stateNode) {
  var stateNodes = [stateNode];

  if (isLeafNode(stateNode)) {
    return stateNodes;
  }

  return stateNodes.concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["flatten"])(getChildren(stateNode).map(getAllStateNodes)));
}

function getConfiguration(prevStateNodes, stateNodes) {
  var e_1, _a, e_2, _b, e_3, _c, e_4, _d;

  var prevConfiguration = new Set(prevStateNodes);
  var prevAdjList = getAdjList(prevConfiguration);
  var configuration = new Set(stateNodes);

  try {
    // add all ancestors
    for (var configuration_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(configuration), configuration_1_1 = configuration_1.next(); !configuration_1_1.done; configuration_1_1 = configuration_1.next()) {
      var s = configuration_1_1.value;
      var m = s.parent;

      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (configuration_1_1 && !configuration_1_1.done && (_a = configuration_1.return)) _a.call(configuration_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  var adjList = getAdjList(configuration);

  try {
    // add descendants
    for (var configuration_2 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(configuration), configuration_2_1 = configuration_2.next(); !configuration_2_1.done; configuration_2_1 = configuration_2.next()) {
      var s = configuration_2_1.value; // if previously active, add existing child nodes

      if (s.type === 'compound' && (!adjList.get(s) || !adjList.get(s).length)) {
        if (prevAdjList.get(s)) {
          prevAdjList.get(s).forEach(function (sn) {
            return configuration.add(sn);
          });
        } else {
          s.initialStateNodes.forEach(function (sn) {
            return configuration.add(sn);
          });
        }
      } else {
        if (s.type === 'parallel') {
          try {
            for (var _e = (e_3 = void 0, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(getChildren(s))), _f = _e.next(); !_f.done; _f = _e.next()) {
              var child = _f.value;

              if (child.type === 'history') {
                continue;
              }

              if (!configuration.has(child)) {
                configuration.add(child);

                if (prevAdjList.get(child)) {
                  prevAdjList.get(child).forEach(function (sn) {
                    return configuration.add(sn);
                  });
                } else {
                  child.initialStateNodes.forEach(function (sn) {
                    return configuration.add(sn);
                  });
                }
              }
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        }
      }
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (configuration_2_1 && !configuration_2_1.done && (_b = configuration_2.return)) _b.call(configuration_2);
    } finally {
      if (e_2) throw e_2.error;
    }
  }

  try {
    // add all ancestors
    for (var configuration_3 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(configuration), configuration_3_1 = configuration_3.next(); !configuration_3_1.done; configuration_3_1 = configuration_3.next()) {
      var s = configuration_3_1.value;
      var m = s.parent;

      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_4_1) {
    e_4 = {
      error: e_4_1
    };
  } finally {
    try {
      if (configuration_3_1 && !configuration_3_1.done && (_d = configuration_3.return)) _d.call(configuration_3);
    } finally {
      if (e_4) throw e_4.error;
    }
  }

  return configuration;
}

function getValueFromAdj(baseNode, adjList) {
  var childStateNodes = adjList.get(baseNode);

  if (!childStateNodes) {
    return {}; // todo: fix?
  }

  if (baseNode.type === 'compound') {
    var childStateNode = childStateNodes[0];

    if (childStateNode) {
      if (isLeafNode(childStateNode)) {
        return childStateNode.key;
      }
    } else {
      return {};
    }
  }

  var stateValue = {};
  childStateNodes.forEach(function (csn) {
    stateValue[csn.key] = getValueFromAdj(csn, adjList);
  });
  return stateValue;
}

function getAdjList(configuration) {
  var e_5, _a;

  var adjList = new Map();

  try {
    for (var configuration_4 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(configuration), configuration_4_1 = configuration_4.next(); !configuration_4_1.done; configuration_4_1 = configuration_4.next()) {
      var s = configuration_4_1.value;

      if (!adjList.has(s)) {
        adjList.set(s, []);
      }

      if (s.parent) {
        if (!adjList.has(s.parent)) {
          adjList.set(s.parent, []);
        }

        adjList.get(s.parent).push(s);
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (configuration_4_1 && !configuration_4_1.done && (_a = configuration_4.return)) _a.call(configuration_4);
    } finally {
      if (e_5) throw e_5.error;
    }
  }

  return adjList;
}

function getValue(rootNode, configuration) {
  var config = getConfiguration([rootNode], configuration);
  return getValueFromAdj(rootNode, getAdjList(config));
}

function has(iterable, item) {
  if (Array.isArray(iterable)) {
    return iterable.some(function (member) {
      return member === item;
    });
  }

  if (iterable instanceof Set) {
    return iterable.has(item);
  }

  return false; // TODO: fix
}

function nextEvents(configuration) {
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["flatten"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(new Set(configuration.map(function (sn) {
    return sn.ownEvents;
  }))));
}

function isInFinalState(configuration, stateNode) {
  if (stateNode.type === 'compound') {
    return getChildren(stateNode).some(function (s) {
      return s.type === 'final' && has(configuration, s);
    });
  }

  if (stateNode.type === 'parallel') {
    return getChildren(stateNode).every(function (sn) {
      return isInFinalState(configuration, sn);
    });
  }

  return false;
}



/***/ }),

/***/ "./node_modules/xstate/es/types.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/types.js ***!
  \*****************************************/
/*! exports provided: ActionTypes, SpecialTargets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialTargets", function() { return SpecialTargets; });
var ActionTypes;

(function (ActionTypes) {
  ActionTypes["Start"] = "xstate.start";
  ActionTypes["Stop"] = "xstate.stop";
  ActionTypes["Raise"] = "xstate.raise";
  ActionTypes["Send"] = "xstate.send";
  ActionTypes["Cancel"] = "xstate.cancel";
  ActionTypes["NullEvent"] = "";
  ActionTypes["Assign"] = "xstate.assign";
  ActionTypes["After"] = "xstate.after";
  ActionTypes["DoneState"] = "done.state";
  ActionTypes["DoneInvoke"] = "done.invoke";
  ActionTypes["Log"] = "xstate.log";
  ActionTypes["Init"] = "xstate.init";
  ActionTypes["Invoke"] = "xstate.invoke";
  ActionTypes["ErrorExecution"] = "error.execution";
  ActionTypes["ErrorCommunication"] = "error.communication";
  ActionTypes["ErrorPlatform"] = "error.platform";
  ActionTypes["ErrorCustom"] = "xstate.error";
  ActionTypes["Update"] = "xstate.update";
  ActionTypes["Pure"] = "xstate.pure";
})(ActionTypes || (ActionTypes = {}));

var SpecialTargets;

(function (SpecialTargets) {
  SpecialTargets["Parent"] = "#_parent";
  SpecialTargets["Internal"] = "#_internal";
})(SpecialTargets || (SpecialTargets = {}));



/***/ }),

/***/ "./node_modules/xstate/es/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/utils.js ***!
  \*****************************************/
/*! exports provided: flatten, getEventType, isArray, isBuiltInEvent, isFunction, isMachine, isObservable, isPromiseLike, isStateLike, isString, keys, mapContext, mapFilterValues, mapValues, matchesState, nestedPath, normalizeTarget, partition, path, pathToStateValue, reportUnhandledExceptionOnInvocation, symbolObservable, toArray, toArrayStrict, toEventObject, toGuard, toSCXMLEvent, toStatePath, toStatePaths, toStateValue, toTransitionConfigArray, uniqueId, updateContext, updateHistoryStates, updateHistoryValue, warn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventType", function() { return getEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBuiltInEvent", function() { return isBuiltInEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMachine", function() { return isMachine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromiseLike", function() { return isPromiseLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStateLike", function() { return isStateLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapContext", function() { return mapContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFilterValues", function() { return mapFilterValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapValues", function() { return mapValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchesState", function() { return matchesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedPath", function() { return nestedPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeTarget", function() { return normalizeTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "path", function() { return path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathToStateValue", function() { return pathToStateValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportUnhandledExceptionOnInvocation", function() { return reportUnhandledExceptionOnInvocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbolObservable", function() { return symbolObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArrayStrict", function() { return toArrayStrict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEventObject", function() { return toEventObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toGuard", function() { return toGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSCXMLEvent", function() { return toSCXMLEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toStatePath", function() { return toStatePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toStatePaths", function() { return toStatePaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toStateValue", function() { return toStateValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTransitionConfigArray", function() { return toTransitionConfigArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return uniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateContext", function() { return updateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHistoryStates", function() { return updateHistoryStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHistoryValue", function() { return updateHistoryValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/xstate/es/constants.js");
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment.js */ "./node_modules/xstate/es/environment.js");




function keys(value) {
  return Object.keys(value);
}

function matchesState(parentStateId, childStateId, delimiter) {
  if (delimiter === void 0) {
    delimiter = _constants_js__WEBPACK_IMPORTED_MODULE_1__["STATE_DELIMITER"];
  }

  var parentStateValue = toStateValue(parentStateId, delimiter);
  var childStateValue = toStateValue(childStateId, delimiter);

  if (isString(childStateValue)) {
    if (isString(parentStateValue)) {
      return childStateValue === parentStateValue;
    } // Parent more specific than child


    return false;
  }

  if (isString(parentStateValue)) {
    return parentStateValue in childStateValue;
  }

  return keys(parentStateValue).every(function (key) {
    if (!(key in childStateValue)) {
      return false;
    }

    return matchesState(parentStateValue[key], childStateValue[key]);
  });
}

function getEventType(event) {
  try {
    return isString(event) || typeof event === 'number' ? "" + event : event.type;
  } catch (e) {
    throw new Error('Events must be strings or objects with a string event.type property.');
  }
}

function toStatePath(stateId, delimiter) {
  try {
    if (isArray(stateId)) {
      return stateId;
    }

    return stateId.toString().split(delimiter);
  } catch (e) {
    throw new Error("'" + stateId + "' is not a valid state path.");
  }
}

function isStateLike(state) {
  return typeof state === 'object' && 'value' in state && 'context' in state && 'event' in state && '_event' in state;
}

function toStateValue(stateValue, delimiter) {
  if (isStateLike(stateValue)) {
    return stateValue.value;
  }

  if (isArray(stateValue)) {
    return pathToStateValue(stateValue);
  }

  if (typeof stateValue !== 'string') {
    return stateValue;
  }

  var statePath = toStatePath(stateValue, delimiter);
  return pathToStateValue(statePath);
}

function pathToStateValue(statePath) {
  if (statePath.length === 1) {
    return statePath[0];
  }

  var value = {};
  var marker = value;

  for (var i = 0; i < statePath.length - 1; i++) {
    if (i === statePath.length - 2) {
      marker[statePath[i]] = statePath[i + 1];
    } else {
      marker[statePath[i]] = {};
      marker = marker[statePath[i]];
    }
  }

  return value;
}

function mapValues(collection, iteratee) {
  var result = {};
  var collectionKeys = keys(collection);

  for (var i = 0; i < collectionKeys.length; i++) {
    var key = collectionKeys[i];
    result[key] = iteratee(collection[key], key, collection, i);
  }

  return result;
}

function mapFilterValues(collection, iteratee, predicate) {
  var e_1, _a;

  var result = {};

  try {
    for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(keys(collection)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var item = collection[key];

      if (!predicate(item)) {
        continue;
      }

      result[key] = iteratee(item, key, collection);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return result;
}
/**
 * Retrieves a value at the given path.
 * @param props The deep path to the prop of the desired value
 */


var path = function (props) {
  return function (object) {
    var e_2, _a;

    var result = object;

    try {
      for (var props_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var prop = props_1_1.value;
        result = result[prop];
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    return result;
  };
};
/**
 * Retrieves a value at the given path via the nested accessor prop.
 * @param props The deep path to the prop of the desired value
 */


function nestedPath(props, accessorProp) {
  return function (object) {
    var e_3, _a;

    var result = object;

    try {
      for (var props_2 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()) {
        var prop = props_2_1.value;
        result = result[accessorProp][prop];
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (props_2_1 && !props_2_1.done && (_a = props_2.return)) _a.call(props_2);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    return result;
  };
}

function toStatePaths(stateValue) {
  if (!stateValue) {
    return [[]];
  }

  if (isString(stateValue)) {
    return [[stateValue]];
  }

  var result = flatten(keys(stateValue).map(function (key) {
    var subStateValue = stateValue[key];

    if (typeof subStateValue !== 'string' && (!subStateValue || !Object.keys(subStateValue).length)) {
      return [[key]];
    }

    return toStatePaths(stateValue[key]).map(function (subPath) {
      return [key].concat(subPath);
    });
  }));
  return result;
}

function flatten(array) {
  var _a;

  return (_a = []).concat.apply(_a, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(array));
}

function toArrayStrict(value) {
  if (isArray(value)) {
    return value;
  }

  return [value];
}

function toArray(value) {
  if (value === undefined) {
    return [];
  }

  return toArrayStrict(value);
}

function mapContext(mapper, context, _event) {
  var e_5, _a;

  if (isFunction(mapper)) {
    return mapper(context, _event.data);
  }

  var result = {};

  try {
    for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(keys(mapper)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var subMapper = mapper[key];

      if (isFunction(subMapper)) {
        result[key] = subMapper(context, _event.data);
      } else {
        result[key] = subMapper;
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_5) throw e_5.error;
    }
  }

  return result;
}

function isBuiltInEvent(eventType) {
  return /^(done|error)\./.test(eventType);
}

function isPromiseLike(value) {
  if (value instanceof Promise) {
    return true;
  } // Check if shape matches the Promise/A+ specification for a "thenable".


  if (value !== null && (isFunction(value) || typeof value === 'object') && isFunction(value.then)) {
    return true;
  }

  return false;
}

function partition(items, predicate) {
  var e_6, _a;

  var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])([[], []], 2),
      truthy = _b[0],
      falsy = _b[1];

  try {
    for (var items_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
      var item = items_1_1.value;

      if (predicate(item)) {
        truthy.push(item);
      } else {
        falsy.push(item);
      }
    }
  } catch (e_6_1) {
    e_6 = {
      error: e_6_1
    };
  } finally {
    try {
      if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
    } finally {
      if (e_6) throw e_6.error;
    }
  }

  return [truthy, falsy];
}

function updateHistoryStates(hist, stateValue) {
  return mapValues(hist.states, function (subHist, key) {
    if (!subHist) {
      return undefined;
    }

    var subStateValue = (isString(stateValue) ? undefined : stateValue[key]) || (subHist ? subHist.current : undefined);

    if (!subStateValue) {
      return undefined;
    }

    return {
      current: subStateValue,
      states: updateHistoryStates(subHist, subStateValue)
    };
  });
}

function updateHistoryValue(hist, stateValue) {
  return {
    current: stateValue,
    states: updateHistoryStates(hist, stateValue)
  };
}

function updateContext(context, _event, assignActions, state) {
  if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
    warn(!!context, 'Attempting to update undefined context');
  }

  var updatedContext = context ? assignActions.reduce(function (acc, assignAction) {
    var e_7, _a;

    var assignment = assignAction.assignment;
    var meta = {
      state: state,
      action: assignAction,
      _event: _event
    };
    var partialUpdate = {};

    if (isFunction(assignment)) {
      partialUpdate = assignment(acc, _event.data, meta);
    } else {
      try {
        for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(keys(assignment)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          var propAssignment = assignment[key];
          partialUpdate[key] = isFunction(propAssignment) ? propAssignment(acc, _event.data, meta) : propAssignment;
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_7) throw e_7.error;
        }
      }
    }

    return Object.assign({}, acc, partialUpdate);
  }, context) : context;
  return updatedContext;
} // tslint:disable-next-line:no-empty


var warn = function () {};

if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
  warn = function (condition, message) {
    var error = condition instanceof Error ? condition : undefined;

    if (!error && condition) {
      return;
    }

    if (console !== undefined) {
      var args = ["Warning: " + message];

      if (error) {
        args.push(error);
      } // tslint:disable-next-line:no-console


      console.warn.apply(console, args);
    }
  };
}

function isArray(value) {
  return Array.isArray(value);
} // tslint:disable-next-line:ban-types


function isFunction(value) {
  return typeof value === 'function';
}

function isString(value) {
  return typeof value === 'string';
} // export function memoizedGetter<T, TP extends { prototype: object }>(
//   o: TP,
//   property: string,
//   getter: () => T
// ): void {
//   Object.defineProperty(o.prototype, property, {
//     get: getter,
//     enumerable: false,
//     configurable: false
//   });
// }


function toGuard(condition, guardMap) {
  if (!condition) {
    return undefined;
  }

  if (isString(condition)) {
    return {
      type: _constants_js__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_GUARD_TYPE"],
      name: condition,
      predicate: guardMap ? guardMap[condition] : undefined
    };
  }

  if (isFunction(condition)) {
    return {
      type: _constants_js__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_GUARD_TYPE"],
      name: condition.name,
      predicate: condition
    };
  }

  return condition;
}

function isObservable(value) {
  try {
    return 'subscribe' in value && isFunction(value.subscribe);
  } catch (e) {
    return false;
  }
}

var symbolObservable =
/*#__PURE__*/
function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();

function isMachine(value) {
  try {
    return '__xstatenode' in value;
  } catch (e) {
    return false;
  }
}

var uniqueId =
/*#__PURE__*/
function () {
  var currentId = 0;
  return function () {
    currentId++;
    return currentId.toString(16);
  };
}();

function toEventObject(event, payload // id?: TEvent['type']
) {
  if (isString(event) || typeof event === 'number') {
    return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      type: event
    }, payload);
  }

  return event;
}

function toSCXMLEvent(event, scxmlEvent) {
  if (!isString(event) && '$$type' in event && event.$$type === 'scxml') {
    return event;
  }

  var eventObject = toEventObject(event);
  return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
    name: eventObject.type,
    data: eventObject,
    $$type: 'scxml',
    type: 'external'
  }, scxmlEvent);
}

function toTransitionConfigArray(event, configLike) {
  var transitions = toArrayStrict(configLike).map(function (transitionLike) {
    if (typeof transitionLike === 'undefined' || typeof transitionLike === 'string' || isMachine(transitionLike)) {
      // @ts-ignore until Type instantiation is excessively deep and possibly infinite bug is fixed
      return {
        target: transitionLike,
        event: event
      };
    }

    return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionLike), {
      event: event
    });
  });
  return transitions;
}

function normalizeTarget(target) {
  if (target === undefined || target === _constants_js__WEBPACK_IMPORTED_MODULE_1__["TARGETLESS_KEY"]) {
    return undefined;
  }

  return toArray(target);
}

function reportUnhandledExceptionOnInvocation(originalError, currentError, id) {
  if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
    var originalStackTrace = originalError.stack ? " Stacktrace was '" + originalError.stack + "'" : '';

    if (originalError === currentError) {
      // tslint:disable-next-line:no-console
      console.error("Missing onError handler for invocation '" + id + "', error was '" + originalError + "'." + originalStackTrace);
    } else {
      var stackTrace = currentError.stack ? " Stacktrace was '" + currentError.stack + "'" : ''; // tslint:disable-next-line:no-console

      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '" + id + "'. " + ("Original error: '" + originalError + "'. " + originalStackTrace + " Current error is '" + currentError + "'." + stackTrace));
    }
  }
}



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Todos */ "./components/Todos.jsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Alex\\react-componentes-e-projetos-diversos\\todo-xstate-nextjs\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var IndexTodos = function IndexTodos() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("meta", {
    charset: "utf-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, "Template \u2022 TodoMVC"), __jsx("link", {
    rel: "stylesheet",
    href: "/static/todomvc-common/base.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/static/todomvc-app-css/index.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  })), __jsx(_components_Todos__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }));
};

_c = IndexTodos;
/* harmony default export */ __webpack_exports__["default"] = (IndexTodos);

var _c;

$RefreshReg$(_c, "IndexTodos");

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

/***/ }),

/***/ "./utils/useHashChange.js":
/*!********************************!*\
  !*** ./utils/useHashChange.js ***!
  \********************************/
/*! exports provided: useHashChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHashChange", function() { return useHashChange; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


function useHashChange(onHashChange) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("hashchange", onHashChange);
    return function () {
      return window.removeEventListener("hashchange", onHashChange);
    };
  }, []);
}

_s(useHashChange, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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

/***/ }),

/***/ 2:
/*!********************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5CAlex%5Creact-componentes-e-projetos-diversos%5Ctodo-xstate-nextjs%5Cpages%5Cindex.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5CAlex%5Creact-componentes-e-projetos-diversos%5Ctodo-xstate-nextjs%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CAlex%5Creact-componentes-e-projetos-diversos%5Ctodo-xstate-nextjs%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_5030f387d328e4415785":
/*!*******************************************!*\
  !*** external "dll_5030f387d328e4415785" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5030f387d328e4415785;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG8uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVG9kb3MuanN4Iiwid2VicGFjazovLy8uL21hY2hpbmVzL3RvZG9NYWNoaW5lLmpzIiwid2VicGFjazovLy8uL21hY2hpbmVzL3RvZG9zTWFjaGluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B4c3RhdGUvcmVhY3QvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AeHN0YXRlL3JlYWN0L2xpYi91c2VBY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2FtcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9zaWRlLWVmZmVjdC50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkLXY0L2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3hzdGF0ZS9lcy9BY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveHN0YXRlL2VzL01hY2hpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3hzdGF0ZS9lcy9TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveHN0YXRlL2VzL1N0YXRlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveHN0YXRlL2VzL192aXJ0dWFsL190c2xpYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveHN0YXRlL2VzL2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94c3RhdGUvZXMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveHN0YXRlL2VzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveHN0YXRlL2VzL2RldlRvb2xzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94c3RhdGUvZXMvZW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3hzdGF0ZS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveHN0YXRlL2VzL2ludGVycHJldGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94c3RhdGUvZXMvbWFwU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3hzdGF0ZS9lcy9tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveHN0YXRlL2VzL3JlZ2lzdHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94c3RhdGUvZXMvc2NoZWR1bGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94c3RhdGUvZXMvc3RhdGVVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveHN0YXRlL2VzL3R5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94c3RhdGUvZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdXNlSGFzaENoYW5nZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIiJdLCJuYW1lcyI6WyJUb2RvIiwidG9kb1JlZiIsInVzZVNlcnZpY2UiLCJzdGF0ZSIsInNlbmQiLCJpbnB1dFJlZiIsInVzZVJlZiIsImNvbnRleHQiLCJpZCIsInRpdGxlIiwiY29tcGxldGVkIiwidXNlRWZmZWN0IiwiZXhlY3V0ZSIsImZvY3VzSW5wdXQiLCJjdXJyZW50Iiwic2VsZWN0IiwiY24iLCJlZGl0aW5nIiwibWF0Y2hlcyIsIl8iLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJrZXkiLCJmaWx0ZXJUb2RvcyIsInRvZG9zIiwiZmlsdGVyIiwidG9kbyIsInBlcnNpc3RlZFRvZG9zTWFjaGluZSIsInRvZG9zTWFjaGluZSIsIndpdGhDb25maWciLCJhY3Rpb25zIiwicGVyc2lzdCIsImN0eCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJnZXRJdGVtIiwiVG9kb3MiLCJ1c2VNYWNoaW5lIiwidXNlU3RhdGUiLCJjb250ZW5kIiwic2V0Q29udGVudCIsInVzZUhhc2hDaGFuZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJzbGljZSIsInRvU3RyaW5ncyIsImFsbENvbXBsZXRlZCIsIm1hcmtFdmVudCIsIm1hcmsiLCJmaWx0ZXJlZFRvZG9zIiwibWFwIiwicmVmIiwibGVuZ3RoIiwibnVtQWN0aXZlVG9kb3MiLCJzZWxlY3RlZCIsImFzc2lnbiIsInRvZG9NYWNoaW5lIiwiTWFjaGluZSIsImluaXRpYWwiLCJ1bmRlZmluZWQiLCJwcmV2VGl0bGUiLCJvbiIsIlRPR0dMRV9DT01QTEVURSIsInNlbmRQYXJlbnQiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsIkRFTEVURSIsInN0YXRlcyIsInJlYWRpbmciLCJ1bmtub3duIiwiY29uZCIsInBlbmRpbmciLCJTRVRfQ09NUExFVEVEIiwiU0VUX0FDVElWRSIsImhpc3QiLCJFRElUIiwib25FbnRyeSIsIkNIQU5HRSIsIkNPTU1JVCIsInRyaW0iLCJCTFVSIiwiQ0FOQ0VMIiwiZGVsZXRlZCIsImNyZWF0ZVRvZG8iLCJ1dWlkIiwiaW5pdGlhbGl6aW5nIiwiZW50cnkiLCJzcGF3biIsIndpdGhDb250ZXh0IiwiYWxsIiwiYWN0aXZlIiwibmV3VG9kbyIsImNvbmNhdCIsImZvckVhY2giLCJDTEVBUl9DT01QTEVURUQiLCJBbXBTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImFtcEZpcnN0IiwiaHlicmlkIiwiaGFzUXVlcnkiLCJpc0luQW1wTW9kZSIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsImluQW1wTW9kZSIsImhlYWQiLCJjaGlsZCIsImxpc3QiLCJmcmFnbWVudExpc3QiLCJNRVRBVFlQRVMiLCJrZXlzIiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsInVuaXF1ZSIsImkiLCJsZW4iLCJtZXRhdHlwZSIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsImhlYWRFbGVtZW50cyIsImhlYWRFbGVtZW50Q2hpbGRyZW4iLCJoZWFkRWxlbWVudCIsImRlZmF1bHRIZWFkIiwicHJvcHMiLCJjIiwiRWZmZWN0IiwiYW1wU3RhdGUiLCJ1cGRhdGVIZWFkIiwiSGVhZCIsImlzU2VydmVyIiwibW91bnRlZEluc3RhbmNlcyIsImNvbXBvbmVudCIsInJlY29yZGVkU3RhdGUiLCJjb25zdHJ1Y3RvciIsImVtaXRDaGFuZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiQ29tcG9uZW50IiwiSW5kZXhUb2RvcyIsIm9uSGFzaENoYW5nZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sU0FBU0EsSUFBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFBQSxvQkFDWEMsZ0VBQVUsQ0FBQ0QsT0FBRCxDQURDO0FBQUE7QUFBQSxNQUMxQkUsS0FEMEI7QUFBQSxNQUNuQkMsSUFEbUI7O0FBRWpDLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0s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O0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBSEosRUFJSTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxpQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0k7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsbUNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQURKLEVBUUksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosQ0FESjtBQVlILENBYkQ7O0tBQU1BLFU7QUFlU0EseUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFFTyxTQUFTckcsYUFBVCxDQUF1QnNHLFlBQXZCLEVBQXFDO0FBQUE7O0FBQzFDeEkseURBQVMsQ0FBQyxZQUFNO0FBQ2RtQyxVQUFNLENBQUNzRyxnQkFBUCxDQUF3QixZQUF4QixFQUFzQ0QsWUFBdEM7QUFFQSxXQUFPO0FBQUEsYUFBTXJHLE1BQU0sQ0FBQ3VHLG1CQUFQLENBQTJCLFlBQTNCLEVBQXlDRixZQUF6QyxDQUFOO0FBQUEsS0FBUDtBQUNELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFLRDs7R0FOZXRHLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmhCLDBDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VydmljZSB9IGZyb20gXCJAeHN0YXRlL3JlYWN0XCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFRvZG8oeyB0b2RvUmVmIH0pIHtcblx0Y29uc3QgW3N0YXRlLCBzZW5kXSA9IHVzZVNlcnZpY2UodG9kb1JlZik7XG5cdGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuXHRjb25zdCB7IGlkLCB0aXRsZSwgY29tcGxldGVkIH0gPSBzdGF0ZS5jb250ZXh0O1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0dG9kb1JlZi5leGVjdXRlKHN0YXRlLCB7XG5cdFx0XHRmb2N1c0lucHV0KCkge1xuXHRcdFx0XHRpbnB1dFJlZi5jdXJyZW50ICYmIGlucHV0UmVmLmN1cnJlbnQuc2VsZWN0KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sIFtzdGF0ZSwgdG9kb1JlZl0pO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxsaVxuXHRcdFx0XHRjbGFzc05hbWU9e2NuKHtcblx0XHRcdFx0XHRlZGl0aW5nOiBzdGF0ZS5tYXRjaGVzKFwiZWRpdGluZ1wiKSxcblx0XHRcdFx0XHRjb21wbGV0ZWRcblx0XHRcdFx0fSl9XG5cdFx0XHRcdGRhdGEtdG9kby1zdGF0ZT17Y29tcGxldGVkID8gXCJjb21wbGV0ZWRcIiA6IFwiYWN0aXZlXCJ9XG5cdFx0XHRcdGtleT17aWR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlld1wiPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidG9nZ2xlXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17XyA9PiB7XG5cdFx0XHRcdFx0XHRcdHNlbmQoXCJUT0dHTEVfQ09NUExFVEVcIik7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0dmFsdWU9e2NvbXBsZXRlZH1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2NvbXBsZXRlZH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxsYWJlbFxuXHRcdFx0XHRcdFx0b25Eb3VibGVDbGljaz17ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNlbmQoXCJFRElUXCIpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdFx0PC9sYWJlbD57XCIgXCJ9XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJkZXN0cm95XCIgb25DbGljaz17KCkgPT4gc2VuZChcIkRFTEVURVwiKX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImVkaXRcIlxuXHRcdFx0XHRcdHZhbHVlPXt0aXRsZX1cblx0XHRcdFx0XHRvbkJsdXI9e18gPT4gc2VuZChcIkJMVVJcIil9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gc2VuZChcIkNIQU5HRVwiLCB7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KX1cblx0XHRcdFx0XHRvbktleVByZXNzPXtlID0+IHtcblx0XHRcdFx0XHRcdGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG5cdFx0XHRcdFx0XHRcdHNlbmQoXCJDT01NSVRcIik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRvbktleURvd249e2UgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG5cdFx0XHRcdFx0XHRcdHNlbmQoXCJDQU5DRUxcIik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRyZWY9e2lucHV0UmVmfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9saT5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vaW1wb3J0IFwidG9kb212Yy1hcHAtY3NzL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgdXNlTWFjaGluZSB9IGZyb20gXCJAeHN0YXRlL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VIYXNoQ2hhbmdlIH0gZnJvbSBcIi4uL3V0aWxzL3VzZUhhc2hDaGFuZ2VcIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi9Ub2RvXCI7XG5pbXBvcnQgeyB0b2Rvc01hY2hpbmUgfSBmcm9tIFwiLi4vbWFjaGluZXMvdG9kb3NNYWNoaW5lXCI7XG5cbmZ1bmN0aW9uIGZpbHRlclRvZG9zKHN0YXRlLCB0b2Rvcykge1xuICBpZiAoc3RhdGUubWF0Y2hlcyhcImFjdGl2ZVwiKSkge1xuICAgIHJldHVybiB0b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZWQpO1xuICB9XG5cbiAgaWYgKHN0YXRlLm1hdGNoZXMoXCJjb21wbGV0ZWRcIikpIHtcbiAgICByZXR1cm4gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5jb21wbGV0ZWQpO1xuICB9XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuXG5jb25zdCBwZXJzaXN0ZWRUb2Rvc01hY2hpbmUgPSB0b2Rvc01hY2hpbmUud2l0aENvbmZpZyhcbiAge1xuICAgIGFjdGlvbnM6IHtcbiAgICAgIHBlcnNpc3Q6IGN0eCA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3MteHN0YXRlXCIsIEpTT04uc3RyaW5naWZ5KGN0eC50b2RvcykpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8gaW5pdGlhbCBzdGF0ZSBmcm9tIGxvY2Fsc3RvcmFnZVxuICB7XG4gICAgdG9kbzogXCJMZWFybiBzdGF0ZSBtYWNoaW5lc1wiLFxuICAgIHRvZG9zOiAoKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvcy14c3RhdGVcIikpIHx8IFtdO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSkoKVxuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvcygpIHtcbiAgY29uc3QgW3N0YXRlLCBzZW5kXSA9IHVzZU1hY2hpbmUocGVyc2lzdGVkVG9kb3NNYWNoaW5lKTtcbiAgY29uc3QgW2NvbnRlbmQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlSGFzaENoYW5nZSgoKSA9PiB7XG4gICAgc2VuZChgU0hPVy4ke3dpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDIpIHx8IFwiYWxsXCJ9YCk7XG4gIH0pO1xuXG4gIC8vIENhcHR1cmUgaW5pdGlhbCBzdGF0ZSBvZiBicm93c2VyIGhhc2hcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgyKSAmJlxuICAgICAgc2VuZChgU0hPVy4ke3dpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDIpfWApO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENvbnRlbnQoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0b2RvYXBwXCIgZGF0YS1zdGF0ZT17c3RhdGUudG9TdHJpbmdzKCl9PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxoMT50b2RvczwvaDE+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuZXctdG9kb1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgbmVlZHMgdG8gYmUgZG9uZT9cIlxuICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICBvbktleVByZXNzPXtlID0+IHtcbiAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICBzZW5kKFwiTkVXVE9ETy5DT01NSVRcIiwgeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZW5kKFwiTkVXVE9ETy5DSEFOR0VcIiwgeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICB2YWx1ZT17dG9kb31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJ0b2dnbGUtYWxsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvZ2dsZS1hbGxcIlxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2FsbENvbXBsZXRlZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNlbmQobWFya0V2ZW50KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZ2dsZS1hbGxcIiB0aXRsZT17YE1hcmsgYWxsIGFzICR7bWFya31gfT5cbiAgICAgICAgICAgIE1hcmsgYWxsIGFzIHttYXJrfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvZG8tbGlzdFwiPlxuICAgICAgICAgICAge2ZpbHRlcmVkVG9kb3MubWFwKHRvZG8gPT4gKFxuICAgICAgICAgICAgICB0b2RvID8gPFRvZG8ga2V5PXt0b2RvLmlkfSB0b2RvUmVmPXt0b2RvLnJlZn0gLz4gOiBudWxsXG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIHshIXRvZG9zLmxlbmd0aCAmJiAoXG4gICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvZG8tY291bnRcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz57bnVtQWN0aXZlVG9kb3N9PC9zdHJvbmc+IGl0ZW1cbiAgICAgICAgICAgIHtudW1BY3RpdmVUb2RvcyA9PT0gMSA/IFwiXCIgOiBcInNcIn0gbGVmdFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmaWx0ZXJzXCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbih7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBzdGF0ZS5tYXRjaGVzKFwiYWxsXCIpXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjL1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQWxsXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHN0YXRlLm1hdGNoZXMoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiMvYWN0aXZlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBY3RpdmVcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogc3RhdGUubWF0Y2hlcyhcImNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBocmVmPVwiIy9jb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvbXBsZXRlZFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAge251bUFjdGl2ZVRvZG9zIDwgdG9kb3MubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e18gPT4gc2VuZChcIkNMRUFSX0NPTVBMRVRFRFwiKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGVhci1jb21wbGV0ZWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2xlYXIgY29tcGxldGVkXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgKX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH0sIFtzdGF0ZV0pXG5cbiAgY29uc3QgeyB0b2RvcywgdG9kbyB9ID0gc3RhdGUuY29udGV4dDtcblxuICBjb25zdCBudW1BY3RpdmVUb2RvcyA9IHRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlZCkubGVuZ3RoO1xuICBjb25zdCBhbGxDb21wbGV0ZWQgPSB0b2Rvcy5sZW5ndGggPiAwICYmIG51bUFjdGl2ZVRvZG9zID09PSAwO1xuICBjb25zdCBtYXJrID0gIWFsbENvbXBsZXRlZCA/IFwiY29tcGxldGVkXCIgOiBcImFjdGl2ZVwiO1xuICBjb25zdCBtYXJrRXZlbnQgPSBgTUFSSy4ke21hcmt9YDtcbiAgY29uc3QgZmlsdGVyZWRUb2RvcyA9IGZpbHRlclRvZG9zKHN0YXRlLCB0b2Rvcyk7XG5cbiAgcmV0dXJuIChcbiAgICBjb250ZW5kXG4gICk7XG59XG4iLCJpbXBvcnQgeyBNYWNoaW5lLCBhY3Rpb25zLCBzZW5kUGFyZW50IH0gZnJvbSBcInhzdGF0ZVwiO1xuY29uc3QgeyBhc3NpZ24gfSA9IGFjdGlvbnM7XG5cbmV4cG9ydCBjb25zdCB0b2RvTWFjaGluZSA9IE1hY2hpbmUoe1xuXHRpZDogXCJ0b2RvXCIsXG5cdGluaXRpYWw6IFwicmVhZGluZ1wiLFxuXHRjb250ZXh0OiB7XG5cdFx0aWQ6IHVuZGVmaW5lZCxcblx0XHR0aXRsZTogXCJcIixcblx0XHRwcmV2VGl0bGU6IFwiXCJcblx0fSxcblx0b246IHtcblx0XHRUT0dHTEVfQ09NUExFVEU6IHtcblx0XHRcdHRhcmdldDogXCIucmVhZGluZy5jb21wbGV0ZWRcIixcblx0XHRcdGFjdGlvbnM6IFtcblx0XHRcdFx0YXNzaWduKHsgY29tcGxldGVkOiB0cnVlIH0pLFxuXHRcdFx0XHRzZW5kUGFyZW50KGN0eCA9PiAoY29uc29sZS5sb2coJ2NvbW1pdCcpLCB7IHR5cGU6IFwiVE9ETy5DT01NSVRcIiwgdG9kbzogY3R4IH0pKVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0REVMRVRFOiBcImRlbGV0ZWRcIlxuXHR9LFxuXHRzdGF0ZXM6IHtcblx0XHRyZWFkaW5nOiB7XG5cdFx0XHRpbml0aWFsOiBcInVua25vd25cIixcblx0XHRcdHN0YXRlczoge1xuXHRcdFx0XHR1bmtub3duOiB7XG5cdFx0XHRcdFx0b246IHtcblx0XHRcdFx0XHRcdFwiXCI6IFtcblx0XHRcdFx0XHRcdFx0eyB0YXJnZXQ6IFwiY29tcGxldGVkXCIsIGNvbmQ6IGN0eCA9PiBjdHguY29tcGxldGVkIH0sXG5cdFx0XHRcdFx0XHRcdHsgdGFyZ2V0OiBcInBlbmRpbmdcIiB9XG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRwZW5kaW5nOiB7XG5cdFx0XHRcdFx0b246IHtcblx0XHRcdFx0XHRcdFNFVF9DT01QTEVURUQ6IHtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0OiBcImNvbXBsZXRlZFwiLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdFx0XHRcdFx0YXNzaWduKHsgY29tcGxldGVkOiB0cnVlIH0pLFxuXHRcdFx0XHRcdFx0XHRcdHNlbmRQYXJlbnQoY3R4ID0+ICh7IHR5cGU6IFwiVE9ETy5DT01NSVRcIiwgdG9kbzogY3R4IH0pKVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRjb21wbGV0ZWQ6IHtcblx0XHRcdFx0XHRvbjoge1xuXHRcdFx0XHRcdFx0VE9HR0xFX0NPTVBMRVRFOiB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldDogXCJwZW5kaW5nXCIsXG5cdFx0XHRcdFx0XHRcdGFjdGlvbnM6IFtcblx0XHRcdFx0XHRcdFx0XHRhc3NpZ24oeyBjb21wbGV0ZWQ6IGZhbHNlIH0pLFxuXHRcdFx0XHRcdFx0XHRcdHNlbmRQYXJlbnQoY3R4ID0+ICh7IHR5cGU6IFwiVE9ETy5DT01NSVRcIiwgdG9kbzogY3R4IH0pKVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0U0VUX0FDVElWRToge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXQ6IFwicGVuZGluZ1wiLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdFx0XHRcdFx0YXNzaWduKHsgY29tcGxldGVkOiBmYWxzZSB9KSxcblx0XHRcdFx0XHRcdFx0XHRzZW5kUGFyZW50KGN0eCA9PiAoeyB0eXBlOiBcIlRPRE8uQ09NTUlUXCIsIHRvZG86IGN0eCB9KSlcblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0aGlzdDoge1xuXHRcdFx0XHRcdHR5cGU6IFwiaGlzdG9yeVwiXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRvbjoge1xuXHRcdFx0XHRFRElUOiB7XG5cdFx0XHRcdFx0dGFyZ2V0OiBcImVkaXRpbmdcIixcblx0XHRcdFx0XHRhY3Rpb25zOiBcImZvY3VzSW5wdXRcIlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRlZGl0aW5nOiB7XG5cdFx0XHRvbkVudHJ5OiBhc3NpZ24oeyBwcmV2VGl0bGU6IGN0eCA9PiBjdHgudGl0bGUgfSksXG5cdFx0XHRvbjoge1xuXHRcdFx0XHRDSEFOR0U6IHtcblx0XHRcdFx0XHRhY3Rpb25zOiBhc3NpZ24oe1xuXHRcdFx0XHRcdFx0dGl0bGU6IChjdHgsIGUpID0+IGUudmFsdWVcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRDT01NSVQ6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0YXJnZXQ6IFwicmVhZGluZy5oaXN0XCIsXG5cdFx0XHRcdFx0XHRhY3Rpb25zOiBzZW5kUGFyZW50KGN0eCA9PiAoeyB0eXBlOiBcIlRPRE8uQ09NTUlUXCIsIHRvZG86IGN0eCB9KSksXG5cdFx0XHRcdFx0XHRjb25kOiBjdHggPT4gY3R4LnRpdGxlLnRyaW0oKS5sZW5ndGggPiAwXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7IHRhcmdldDogXCJkZWxldGVkXCIgfVxuXHRcdFx0XHRdLFxuXHRcdFx0XHRCTFVSOiB7XG5cdFx0XHRcdFx0dGFyZ2V0OiBcInJlYWRpbmdcIixcblx0XHRcdFx0XHRhY3Rpb25zOiBzZW5kUGFyZW50KGN0eCA9PiAoeyB0eXBlOiBcIlRPRE8uQ09NTUlUXCIsIHRvZG86IGN0eCB9KSlcblx0XHRcdFx0fSxcblx0XHRcdFx0Q0FOQ0VMOiB7XG5cdFx0XHRcdFx0dGFyZ2V0OiBcInJlYWRpbmdcIixcblx0XHRcdFx0XHRhY3Rpb25zOiBhc3NpZ24oeyB0aXRsZTogY3R4ID0+IGN0eC5wcmV2VGl0bGUgfSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGVsZXRlZDoge1xuXHRcdFx0b25FbnRyeTogc2VuZFBhcmVudChjdHggPT4gKHsgdHlwZTogXCJUT0RPLkRFTEVURVwiLCBpZDogY3R4LmlkIH0pKVxuXHRcdH1cblx0fVxufSk7XG4iLCJpbXBvcnQgeyBNYWNoaW5lLCBhc3NpZ24sIHNwYXduIH0gZnJvbSBcInhzdGF0ZVwiO1xuaW1wb3J0IHV1aWQgZnJvbSBcInV1aWQtdjRcIjtcbmltcG9ydCB7IHRvZG9NYWNoaW5lIH0gZnJvbSBcIi4vdG9kb01hY2hpbmVcIjtcblxuY29uc3QgY3JlYXRlVG9kbyA9IHRpdGxlID0+IHtcblx0cmV0dXJuIHtcblx0XHRpZDogdXVpZCgpLFxuXHRcdHRpdGxlOiB0aXRsZSxcblx0XHRjb21wbGV0ZWQ6IGZhbHNlXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3QgdG9kb3NNYWNoaW5lID0gTWFjaGluZSh7XG5cdGlkOiBcInRvZG9zXCIsXG5cdGNvbnRleHQ6IHtcblx0XHR0b2RvOiBcIlwiLCAvLyBuZXcgdG9kb1xuXHRcdHRvZG9zOiBbXVxuXHR9LFxuXHRpbml0aWFsOiBcImluaXRpYWxpemluZ1wiLFxuXHRzdGF0ZXM6IHtcblx0XHRpbml0aWFsaXppbmc6IHtcblx0XHRcdGVudHJ5OiBhc3NpZ24oe1xuXHRcdFx0XHR0b2RvczogKGN0eCwgZSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBjdHgudG9kb3MubWFwKHRvZG8gPT4gKHtcblx0XHRcdFx0XHRcdC4uLnRvZG8sXG5cdFx0XHRcdFx0XHRyZWY6IHNwYXduKHRvZG9NYWNoaW5lLndpdGhDb250ZXh0KHRvZG8pKVxuXHRcdFx0XHRcdH0pKTtcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHRvbjoge1xuXHRcdFx0XHRcIlwiOiBcImFsbFwiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhbGw6IHt9LFxuXHRcdGFjdGl2ZToge30sXG5cdFx0Y29tcGxldGVkOiB7fVxuXHR9LFxuXHRvbjoge1xuXHRcdFwiTkVXVE9ETy5DSEFOR0VcIjoge1xuXHRcdFx0YWN0aW9uczogYXNzaWduKHtcblx0XHRcdFx0dG9kbzogKGN0eCwgZSkgPT4gZS52YWx1ZVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdFwiTkVXVE9ETy5DT01NSVRcIjoge1xuXHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHRhc3NpZ24oe1xuXHRcdFx0XHRcdHRvZG86IFwiXCIsIC8vIGNsZWFyIHRvZG9cblx0XHRcdFx0XHR0b2RvczogKGN0eCwgZSkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgbmV3VG9kbyA9IGNyZWF0ZVRvZG8oZS52YWx1ZS50cmltKCkpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGN0eC50b2Rvcy5jb25jYXQoe1xuXHRcdFx0XHRcdFx0XHQuLi5uZXdUb2RvLFxuXHRcdFx0XHRcdFx0XHRyZWY6IHNwYXduKHRvZG9NYWNoaW5lLndpdGhDb250ZXh0KG5ld1RvZG8pKVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0XCJwZXJzaXN0XCJcblx0XHRcdF0sXG5cdFx0XHRjb25kOiAoY3R4LCBlKSA9PiBlLnZhbHVlLnRyaW0oKS5sZW5ndGhcblx0XHR9LFxuXHRcdFwiVE9ETy5DT01NSVRcIjoge1xuXHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHRhc3NpZ24oe1xuXHRcdFx0XHRcdHRvZG9zOiAoY3R4LCBlKSA9PlxuXHRcdFx0XHRcdFx0Y3R4LnRvZG9zLm1hcCh0b2RvID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRvZG8uaWQgPT09IGUudG9kby5pZFxuXHRcdFx0XHRcdFx0XHRcdD8geyAuLi50b2RvLCAuLi5lLnRvZG8sIHJlZjogdG9kby5yZWYgfVxuXHRcdFx0XHRcdFx0XHRcdDogdG9kbztcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRcInBlcnNpc3RcIlxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0XCJUT0RPLkRFTEVURVwiOiB7XG5cdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdGFzc2lnbih7XG5cdFx0XHRcdFx0dG9kb3M6IChjdHgsIGUpID0+IGN0eC50b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmlkICE9PSBlLmlkKVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0XCJwZXJzaXN0XCJcblx0XHRcdF1cblx0XHR9LFxuXHRcdFwiU0hPVy5hbGxcIjogXCIuYWxsXCIsXG5cdFx0XCJTSE9XLmFjdGl2ZVwiOiBcIi5hY3RpdmVcIixcblx0XHRcIlNIT1cuY29tcGxldGVkXCI6IFwiLmNvbXBsZXRlZFwiLFxuXHRcdFwiTUFSSy5jb21wbGV0ZWRcIjoge1xuXHRcdFx0YWN0aW9uczogY3R4ID0+IHtcblx0XHRcdFx0Y3R4LnRvZG9zLmZvckVhY2godG9kbyA9PiB0b2RvLnJlZi5zZW5kKFwiU0VUX0NPTVBMRVRFRFwiKSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcIk1BUksuYWN0aXZlXCI6IHtcblx0XHRcdGFjdGlvbnM6IGN0eCA9PiB7XG5cdFx0XHRcdGN0eC50b2Rvcy5mb3JFYWNoKHRvZG8gPT4gdG9kby5yZWYuc2VuZChcIlNFVF9BQ1RJVkVcIikpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Q0xFQVJfQ09NUExFVEVEOiB7XG5cdFx0XHRhY3Rpb25zOiBhc3NpZ24oe1xuXHRcdFx0XHR0b2RvczogY3R4ID0+IGN0eC50b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZWQpXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxufSk7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIHhzdGF0ZV8xID0gcmVxdWlyZShcInhzdGF0ZVwiKTtcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBpbW1lZGlhdGU6IGZhbHNlXG59O1xuZnVuY3Rpb24gdXNlTWFjaGluZShtYWNoaW5lLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7IH1cbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCwgZ3VhcmRzID0gb3B0aW9ucy5ndWFyZHMsIGFjdGlvbnMgPSBvcHRpb25zLmFjdGlvbnMsIGFjdGl2aXRpZXMgPSBvcHRpb25zLmFjdGl2aXRpZXMsIHNlcnZpY2VzID0gb3B0aW9ucy5zZXJ2aWNlcywgZGVsYXlzID0gb3B0aW9ucy5kZWxheXMsIGltbWVkaWF0ZSA9IG9wdGlvbnMuaW1tZWRpYXRlLCByZWh5ZHJhdGVkU3RhdGUgPSBvcHRpb25zLnN0YXRlLCBpbnRlcnByZXRlck9wdGlvbnMgPSBfX3Jlc3Qob3B0aW9ucywgW1wiY29udGV4dFwiLCBcImd1YXJkc1wiLCBcImFjdGlvbnNcIiwgXCJhY3Rpdml0aWVzXCIsIFwic2VydmljZXNcIiwgXCJkZWxheXNcIiwgXCJpbW1lZGlhdGVcIiwgXCJzdGF0ZVwiXSk7XG4gICAgdmFyIG1hY2hpbmVDb25maWcgPSB7XG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIGd1YXJkczogZ3VhcmRzLFxuICAgICAgICBhY3Rpb25zOiBhY3Rpb25zLFxuICAgICAgICBhY3Rpdml0aWVzOiBhY3Rpdml0aWVzLFxuICAgICAgICBzZXJ2aWNlczogc2VydmljZXMsXG4gICAgICAgIGRlbGF5czogZGVsYXlzXG4gICAgfTtcbiAgICAvLyBSZWZlcmVuY2UgdGhlIG1hY2hpbmVcbiAgICB2YXIgbWFjaGluZVJlZiA9IHJlYWN0XzEudXNlUmVmKG51bGwpO1xuICAgIC8vIENyZWF0ZSB0aGUgbWFjaGluZSBvbmx5IG9uY2VcbiAgICAvLyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2hvb2tzLWZhcS5odG1sI2hvdy10by1jcmVhdGUtZXhwZW5zaXZlLW9iamVjdHMtbGF6aWx5XG4gICAgaWYgKG1hY2hpbmVSZWYuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgICBtYWNoaW5lUmVmLmN1cnJlbnQgPSBtYWNoaW5lLndpdGhDb25maWcobWFjaGluZUNvbmZpZywgX19hc3NpZ24oX19hc3NpZ24oe30sIG1hY2hpbmUuY29udGV4dCksIGNvbnRleHQpKTtcbiAgICB9XG4gICAgLy8gUmVmZXJlbmNlIHRoZSBzZXJ2aWNlXG4gICAgdmFyIHNlcnZpY2VSZWYgPSByZWFjdF8xLnVzZVJlZihudWxsKTtcbiAgICAvLyBDcmVhdGUgdGhlIHNlcnZpY2Ugb25seSBvbmNlXG4gICAgaWYgKHNlcnZpY2VSZWYuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgICBzZXJ2aWNlUmVmLmN1cnJlbnQgPSB4c3RhdGVfMS5pbnRlcnByZXQobWFjaGluZVJlZi5jdXJyZW50LCBpbnRlcnByZXRlck9wdGlvbnMpLm9uVHJhbnNpdGlvbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgY3VycmVudCBtYWNoaW5lIHN0YXRlIHdoZW4gYSB0cmFuc2l0aW9uIG9jY3Vyc1xuICAgICAgICAgICAgaWYgKHN0YXRlLmNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50KHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBzZXJ2aWNlID0gc2VydmljZVJlZi5jdXJyZW50O1xuICAgIC8vIE1ha2Ugc3VyZSBhY3Rpb25zIGFuZCBzZXJ2aWNlcyBhcmUga2VwdCB1cGRhdGVkIHdoZW4gdGhleSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBtdXRhdGlvbiBhc3NpZ25tZW50IGlzIHNhZmUgYmVjYXVzZSB0aGUgc2VydmljZSBpbnN0YW5jZSBpcyBvbmx5IHVzZWRcbiAgICAvLyBpbiBvbmUgcGxhY2UgLS0gdGhpcyBob29rJ3MgY2FsbGVyLlxuICAgIHJlYWN0XzEudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihzZXJ2aWNlLm1hY2hpbmUub3B0aW9ucy5hY3Rpb25zLCBhY3Rpb25zKTtcbiAgICB9LCBbYWN0aW9uc10pO1xuICAgIHJlYWN0XzEudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihzZXJ2aWNlLm1hY2hpbmUub3B0aW9ucy5zZXJ2aWNlcywgc2VydmljZXMpO1xuICAgIH0sIFtzZXJ2aWNlc10pO1xuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhlIGN1cnJlbnQgbWFjaGluZSBzdGF0ZVxuICAgIHZhciBpbml0aWFsU3RhdGUgPSByZWh5ZHJhdGVkU3RhdGVcbiAgICAgICAgPyB4c3RhdGVfMS5TdGF0ZS5jcmVhdGUocmVoeWRyYXRlZFN0YXRlKVxuICAgICAgICA6IHNlcnZpY2UuaW5pdGlhbFN0YXRlO1xuICAgIHZhciBfYSA9IF9fcmVhZChyZWFjdF8xLnVzZVN0YXRlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGluaXRpYWxTdGF0ZTsgfSksIDIpLCBjdXJyZW50ID0gX2FbMF0sIHNldEN1cnJlbnQgPSBfYVsxXTtcbiAgICAvLyBTdGFydCBzZXJ2aWNlIGltbWVkaWF0ZWx5IChiZWZvcmUgbW91bnQpIGlmIHNwZWNpZmllZCBpbiBvcHRpb25zXG4gICAgaWYgKGltbWVkaWF0ZSkge1xuICAgICAgICBzZXJ2aWNlLnN0YXJ0KCk7XG4gICAgfVxuICAgIHJlYWN0XzEudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3RhcnQgdGhlIHNlcnZpY2Ugd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cy5cbiAgICAgICAgLy8gTm90ZTogdGhlIHNlcnZpY2Ugd2lsbCBzdGFydCBvbmx5IGlmIGl0IGhhc24ndCBzdGFydGVkIGFscmVhZHkuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIElmIGEgcmVoeWRyYXRlZCBzdGF0ZSB3YXMgcHJvdmlkZWQsIHVzZSB0aGUgcmVzb2x2ZWQgYGluaXRpYWxTdGF0ZWAuXG4gICAgICAgIHNlcnZpY2Uuc3RhcnQocmVoeWRyYXRlZFN0YXRlID8gaW5pdGlhbFN0YXRlIDogdW5kZWZpbmVkKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFN0b3AgdGhlIHNlcnZpY2Ugd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXG4gICAgICAgICAgICBzZXJ2aWNlLnN0b3AoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIFtjdXJyZW50LCBzZXJ2aWNlLnNlbmQsIHNlcnZpY2VdO1xufVxuZXhwb3J0cy51c2VNYWNoaW5lID0gdXNlTWFjaGluZTtcbmZ1bmN0aW9uIHVzZVNlcnZpY2Uoc2VydmljZSkge1xuICAgIHZhciBfYSA9IF9fcmVhZChyZWFjdF8xLnVzZVN0YXRlKHNlcnZpY2Uuc3RhdGUpLCAyKSwgY3VycmVudCA9IF9hWzBdLCBzZXRDdXJyZW50ID0gX2FbMV07XG4gICAgcmVhY3RfMS51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTZXQgdG8gY3VycmVudCBzZXJ2aWNlIHN0YXRlIGFzIHRoZXJlIGlzIGEgcG9zc2liaWxpdHlcbiAgICAgICAgLy8gb2YgYSB0cmFuc2l0aW9uIG9jY3VycmluZyBiZXR3ZWVuIHRoZSBpbml0aWFsIHVzZVN0YXRlKClcbiAgICAgICAgLy8gaW5pdGlhbGl6YXRpb24gYW5kIHVzZUVmZmVjdCgpIGNvbW1pdC5cbiAgICAgICAgc2V0Q3VycmVudChzZXJ2aWNlLnN0YXRlKTtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnQoc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgc3ViID0gc2VydmljZS5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH07XG4gICAgfSwgW3NlcnZpY2VdKTtcbiAgICByZXR1cm4gW2N1cnJlbnQsIHNlcnZpY2Uuc2VuZCwgc2VydmljZV07XG59XG5leHBvcnRzLnVzZVNlcnZpY2UgPSB1c2VTZXJ2aWNlO1xudmFyIHVzZUFjdG9yXzEgPSByZXF1aXJlKFwiLi91c2VBY3RvclwiKTtcbmV4cG9ydHMudXNlQWN0b3IgPSB1c2VBY3Rvcl8xLnVzZUFjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmZ1bmN0aW9uIHVzZUFjdG9yKGFjdG9yKSB7XG4gICAgdmFyIF9hID0gX19yZWFkKHJlYWN0XzEudXNlU3RhdGUodW5kZWZpbmVkKSwgMiksIGN1cnJlbnQgPSBfYVswXSwgc2V0Q3VycmVudCA9IF9hWzFdO1xuICAgIHZhciBhY3RvclJlZiA9IHJlYWN0XzEudXNlUmVmKGFjdG9yKTtcbiAgICByZWFjdF8xLnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChhY3Rvcikge1xuICAgICAgICAgICAgYWN0b3JSZWYuY3VycmVudCA9IGFjdG9yO1xuICAgICAgICAgICAgdmFyIHN1Yl8xID0gYWN0b3Iuc3Vic2NyaWJlKHNldEN1cnJlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzdWJfMS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIFthY3Rvcl0pO1xuICAgIHJldHVybiBbY3VycmVudCwgYWN0b3JSZWYuY3VycmVudCA/IGFjdG9yUmVmLmN1cnJlbnQuc2VuZCA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZvaWQgMDsgfV07XG59XG5leHBvcnRzLnVzZUFjdG9yID0gdXNlQWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VBY3Rvci5qcy5tYXAiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEFsZXhcXFxccmVhY3QtY29tcG9uZW50ZXMtZS1wcm9qZXRvcy1kaXZlcnNvc1xcXFx0b2RvLXhzdGF0ZS1uZXh0anNcXFxccGFnZXNcXFxcaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IEFtcFN0YXRlQ29udGV4dDogUmVhY3QuQ29udGV4dDxhbnk+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgQW1wU3RhdGVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0FtcFN0YXRlQ29udGV4dCdcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFtcFN0YXRlQ29udGV4dCB9IGZyb20gJy4vYW1wLWNvbnRleHQnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luQW1wTW9kZSh7XG4gIGFtcEZpcnN0ID0gZmFsc2UsXG4gIGh5YnJpZCA9IGZhbHNlLFxuICBoYXNRdWVyeSA9IGZhbHNlLFxufSA9IHt9KTogYm9vbGVhbiB7XG4gIHJldHVybiBhbXBGaXJzdCB8fCAoaHlicmlkICYmIGhhc1F1ZXJ5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQW1wKCk6IGJvb2xlYW4ge1xuICAvLyBEb24ndCBhc3NpZ24gdGhlIGNvbnRleHQgdmFsdWUgdG8gYSB2YXJpYWJsZSB0byBzYXZlIGJ5dGVzXG4gIHJldHVybiBpc0luQW1wTW9kZShSZWFjdC51c2VDb250ZXh0KEFtcFN0YXRlQ29udGV4dCkpXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBIZWFkTWFuYWdlckNvbnRleHQ6IFJlYWN0LkNvbnRleHQ8YW55PiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbClcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgSGVhZE1hbmFnZXJDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0hlYWRNYW5hZ2VyQ29udGV4dCdcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB3aXRoU2lkZUVmZmVjdCBmcm9tICcuL3NpZGUtZWZmZWN0J1xuaW1wb3J0IHsgQW1wU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9hbXAtY29udGV4dCdcbmltcG9ydCB7IEhlYWRNYW5hZ2VyQ29udGV4dCB9IGZyb20gJy4vaGVhZC1tYW5hZ2VyLWNvbnRleHQnXG5pbXBvcnQgeyBpc0luQW1wTW9kZSB9IGZyb20gJy4vYW1wJ1xuXG50eXBlIFdpdGhJbkFtcE1vZGUgPSB7XG4gIGluQW1wTW9kZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRIZWFkKGluQW1wTW9kZSA9IGZhbHNlKTogSlNYLkVsZW1lbnRbXSB7XG4gIGNvbnN0IGhlYWQgPSBbPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5dXG4gIGlmICghaW5BbXBNb2RlKSB7XG4gICAgaGVhZC5wdXNoKDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPilcbiAgfVxuICByZXR1cm4gaGVhZFxufVxuXG5mdW5jdGlvbiBvbmx5UmVhY3RFbGVtZW50KFxuICBsaXN0OiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gIGNoaWxkOiBSZWFjdC5SZWFjdENoaWxkXG4pOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4ge1xuICAvLyBSZWFjdCBjaGlsZHJlbiBjYW4gYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlbSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuICAvLyBBZGRzIHN1cHBvcnQgZm9yIFJlYWN0LkZyYWdtZW50XG4gIGlmIChjaGlsZC50eXBlID09PSBSZWFjdC5GcmFnbWVudCkge1xuICAgIHJldHVybiBsaXN0LmNvbmNhdChcbiAgICAgIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGQucHJvcHMuY2hpbGRyZW4pLnJlZHVjZShcbiAgICAgICAgKFxuICAgICAgICAgIGZyYWdtZW50TGlzdDogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICAgICAgICAgIGZyYWdtZW50Q2hpbGQ6IFJlYWN0LlJlYWN0Q2hpbGRcbiAgICAgICAgKTogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+ID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgIHR5cGVvZiBmcmFnbWVudENoaWxkID09PSAnbnVtYmVyJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0LmNvbmNhdChmcmFnbWVudENoaWxkKVxuICAgICAgICB9LFxuICAgICAgICBbXVxuICAgICAgKVxuICAgIClcbiAgfVxuICByZXR1cm4gbGlzdC5jb25jYXQoY2hpbGQpXG59XG5cbmNvbnN0IE1FVEFUWVBFUyA9IFsnbmFtZScsICdodHRwRXF1aXYnLCAnY2hhclNldCcsICdpdGVtUHJvcCddXG5cbi8qXG4gcmV0dXJucyBhIGZ1bmN0aW9uIGZvciBmaWx0ZXJpbmcgaGVhZCBjaGlsZCBlbGVtZW50c1xuIHdoaWNoIHNob3VsZG4ndCBiZSBkdXBsaWNhdGVkLCBsaWtlIDx0aXRsZS8+XG4gQWxzbyBhZGRzIHN1cHBvcnQgZm9yIGRlZHVwbGljYXRlZCBga2V5YCBwcm9wZXJ0aWVzXG4qL1xuZnVuY3Rpb24gdW5pcXVlKCkge1xuICBjb25zdCBrZXlzID0gbmV3IFNldCgpXG4gIGNvbnN0IHRhZ3MgPSBuZXcgU2V0KClcbiAgY29uc3QgbWV0YVR5cGVzID0gbmV3IFNldCgpXG4gIGNvbnN0IG1ldGFDYXRlZ29yaWVzOiB7IFttZXRhdHlwZTogc3RyaW5nXTogU2V0PHN0cmluZz4gfSA9IHt9XG5cbiAgcmV0dXJuIChoOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4ge1xuICAgIGxldCB1bmlxdWUgPSB0cnVlXG5cbiAgICBpZiAoaC5rZXkgJiYgdHlwZW9mIGgua2V5ICE9PSAnbnVtYmVyJyAmJiBoLmtleS5pbmRleE9mKCckJykgPiAwKSB7XG4gICAgICBjb25zdCBrZXkgPSBoLmtleS5zbGljZShoLmtleS5pbmRleE9mKCckJykgKyAxKVxuICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgdW5pcXVlID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMuYWRkKGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXG4gICAgc3dpdGNoIChoLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3RpdGxlJzpcbiAgICAgIGNhc2UgJ2Jhc2UnOlxuICAgICAgICBpZiAodGFncy5oYXMoaC50eXBlKSkge1xuICAgICAgICAgIHVuaXF1ZSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFncy5hZGQoaC50eXBlKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtZXRhJzpcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1FVEFUWVBFUy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGNvbnN0IG1ldGF0eXBlID0gTUVUQVRZUEVTW2ldXG4gICAgICAgICAgaWYgKCFoLnByb3BzLmhhc093blByb3BlcnR5KG1ldGF0eXBlKSkgY29udGludWVcblxuICAgICAgICAgIGlmIChtZXRhdHlwZSA9PT0gJ2NoYXJTZXQnKSB7XG4gICAgICAgICAgICBpZiAobWV0YVR5cGVzLmhhcyhtZXRhdHlwZSkpIHtcbiAgICAgICAgICAgICAgdW5pcXVlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1ldGFUeXBlcy5hZGQobWV0YXR5cGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaC5wcm9wc1ttZXRhdHlwZV1cbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gfHwgbmV3IFNldCgpXG4gICAgICAgICAgICBpZiAoY2F0ZWdvcmllcy5oYXMoY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICAgIHVuaXF1ZSA9IGZhbHNlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjYXRlZ29yaWVzLmFkZChjYXRlZ29yeSlcbiAgICAgICAgICAgICAgbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdID0gY2F0ZWdvcmllc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHJldHVybiB1bmlxdWVcbiAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gaGVhZEVsZW1lbnRzIExpc3Qgb2YgbXVsdGlwbGUgPEhlYWQ+IGluc3RhbmNlc1xuICovXG5mdW5jdGlvbiByZWR1Y2VDb21wb25lbnRzKFxuICBoZWFkRWxlbWVudHM6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgcHJvcHM6IFdpdGhJbkFtcE1vZGVcbikge1xuICByZXR1cm4gaGVhZEVsZW1lbnRzXG4gICAgLnJlZHVjZShcbiAgICAgIChsaXN0OiBSZWFjdC5SZWFjdENoaWxkW10sIGhlYWRFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4ge1xuICAgICAgICBjb25zdCBoZWFkRWxlbWVudENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShcbiAgICAgICAgICBoZWFkRWxlbWVudC5wcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICAgIHJldHVybiBsaXN0LmNvbmNhdChoZWFkRWxlbWVudENoaWxkcmVuKVxuICAgICAgfSxcbiAgICAgIFtdXG4gICAgKVxuICAgIC5yZWR1Y2Uob25seVJlYWN0RWxlbWVudCwgW10pXG4gICAgLnJldmVyc2UoKVxuICAgIC5jb25jYXQoZGVmYXVsdEhlYWQocHJvcHMuaW5BbXBNb2RlKSlcbiAgICAuZmlsdGVyKHVuaXF1ZSgpKVxuICAgIC5yZXZlcnNlKClcbiAgICAubWFwKChjOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PiwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBjLmtleSB8fCBpXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsIHsga2V5IH0pXG4gICAgfSlcbn1cblxuY29uc3QgRWZmZWN0ID0gd2l0aFNpZGVFZmZlY3QoKVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGluamVjdHMgZWxlbWVudHMgdG8gYDxoZWFkPmAgb2YgeW91ciBwYWdlLlxuICogVG8gYXZvaWQgZHVwbGljYXRlZCBgdGFnc2AgaW4gYDxoZWFkPmAgeW91IGNhbiB1c2UgdGhlIGBrZXlgIHByb3BlcnR5LCB3aGljaCB3aWxsIG1ha2Ugc3VyZSBldmVyeSB0YWcgaXMgb25seSByZW5kZXJlZCBvbmNlLlxuICovXG5mdW5jdGlvbiBIZWFkKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QW1wU3RhdGVDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgeyhhbXBTdGF0ZSkgPT4gKFxuICAgICAgICA8SGVhZE1hbmFnZXJDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgIHsodXBkYXRlSGVhZCkgPT4gKFxuICAgICAgICAgICAgPEVmZmVjdFxuICAgICAgICAgICAgICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZT17cmVkdWNlQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgaGFuZGxlU3RhdGVDaGFuZ2U9e3VwZGF0ZUhlYWR9XG4gICAgICAgICAgICAgIGluQW1wTW9kZT17aXNJbkFtcE1vZGUoYW1wU3RhdGUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0VmZmVjdD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0hlYWRNYW5hZ2VyQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICl9XG4gICAgPC9BbXBTdGF0ZUNvbnRleHQuQ29uc3VtZXI+XG4gIClcbn1cblxuSGVhZC5yZXdpbmQgPSBFZmZlY3QucmV3aW5kXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuXG50eXBlIFN0YXRlID0gQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+IHwgdW5kZWZpbmVkXG5cbnR5cGUgU2lkZUVmZmVjdFByb3BzID0ge1xuICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZTogPFQ+KFxuICAgIGNvbXBvbmVudHM6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgICBwcm9wczogVFxuICApID0+IFN0YXRlXG4gIGhhbmRsZVN0YXRlQ2hhbmdlPzogKHN0YXRlOiBTdGF0ZSkgPT4gdm9pZFxuICBpbkFtcE1vZGU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgbW91bnRlZEluc3RhbmNlczogU2V0PGFueT4gPSBuZXcgU2V0KClcbiAgbGV0IHN0YXRlOiBTdGF0ZVxuXG4gIGZ1bmN0aW9uIGVtaXRDaGFuZ2UoY29tcG9uZW50OiBSZWFjdC5Db21wb25lbnQ8U2lkZUVmZmVjdFByb3BzPik6IHZvaWQge1xuICAgIHN0YXRlID0gY29tcG9uZW50LnByb3BzLnJlZHVjZUNvbXBvbmVudHNUb1N0YXRlKFxuICAgICAgWy4uLm1vdW50ZWRJbnN0YW5jZXNdLFxuICAgICAgY29tcG9uZW50LnByb3BzXG4gICAgKVxuICAgIGlmIChjb21wb25lbnQucHJvcHMuaGFuZGxlU3RhdGVDaGFuZ2UpIHtcbiAgICAgIGNvbXBvbmVudC5wcm9wcy5oYW5kbGVTdGF0ZUNoYW5nZShzdGF0ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQ8U2lkZUVmZmVjdFByb3BzPiB7XG4gICAgLy8gVXNlZCB3aGVuIHNlcnZlciByZW5kZXJpbmdcbiAgICBzdGF0aWMgcmV3aW5kKCkge1xuICAgICAgY29uc3QgcmVjb3JkZWRTdGF0ZSA9IHN0YXRlXG4gICAgICBzdGF0ZSA9IHVuZGVmaW5lZFxuICAgICAgbW91bnRlZEluc3RhbmNlcy5jbGVhcigpXG4gICAgICByZXR1cm4gcmVjb3JkZWRTdGF0ZVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgaWYgKGlzU2VydmVyKSB7XG4gICAgICAgIG1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpXG4gICAgICAgIGVtaXRDaGFuZ2UodGhpcylcbiAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBtb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKVxuICAgICAgZW1pdENoYW5nZSh0aGlzKVxuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICBlbWl0Q2hhbmdlKHRoaXMpXG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgbW91bnRlZEluc3RhbmNlcy5kZWxldGUodGhpcylcbiAgICAgIGVtaXRDaGFuZ2UodGhpcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUgKi8gXCJkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qc1wiKTsiLCJcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgcmV0ID0gJycsIHZhbHVlO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IDMyOyBpKyspIHtcblx0XHR2YWx1ZSA9IGV4cG9ydHMucmFuZG9tKCkgKiAxNiB8IDA7XG5cdFx0Ly8gSW5zZXJ0IHRoZSBoeXBlbnNcblx0XHRpZiAoaSA+IDQgJiYgaSA8IDIxICYmICEgKGkgJSA0KSkge1xuXHRcdFx0cmV0ICs9ICctJztcblx0XHR9XG5cdFx0Ly8gQWRkIHRoZSBuZXh0IHJhbmRvbSBjaGFyYWN0ZXJcblx0XHRyZXQgKz0gKFxuXHRcdFx0KGkgPT09IDEyKSA/IDQgOiAoXG5cdFx0XHRcdChpID09PSAxNikgPyAodmFsdWUgJiAzIHwgOCkgOiB2YWx1ZVxuXHRcdFx0KVxuXHRcdCkudG9TdHJpbmcoMTYpO1xuXHR9XG5cdHJldHVybiByZXQ7XG59O1xuXG52YXIgdXVpZFJlZ2V4ID0gL15bMC05YS1mXXs4fS1bMC05YS1mXXs0fS00WzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9JC87XG5leHBvcnRzLmlzVVVJRCA9IGZ1bmN0aW9uKHV1aWQpIHtcblx0cmV0dXJuIHV1aWRSZWdleC50ZXN0KHV1aWQpO1xufTtcblxuZXhwb3J0cy5yYW5kb20gPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIE1hdGgucmFuZG9tKCk7XG59O1xuXG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiZnVuY3Rpb24gY3JlYXRlTnVsbEFjdG9yKGlkKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGlkLFxuICAgIHNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGlkXG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbnVsbCBhY3RvciB0aGF0IGlzIGFibGUgdG8gYmUgaW52b2tlZCBnaXZlbiB0aGUgcHJvdmlkZWRcclxuICogaW52b2NhdGlvbiBpbmZvcm1hdGlvbiBpbiBpdHMgYC5tZXRhYCB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIGludm9rZURlZmluaXRpb24gVGhlIG1ldGEgaW5mb3JtYXRpb24gbmVlZGVkIHRvIGludm9rZSB0aGUgYWN0b3IuXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUludm9jYWJsZUFjdG9yKGludm9rZURlZmluaXRpb24pIHtcbiAgdmFyIHRlbXBBY3RvciA9IGNyZWF0ZU51bGxBY3RvcihpbnZva2VEZWZpbml0aW9uLmlkKTtcbiAgdGVtcEFjdG9yLm1ldGEgPSBpbnZva2VEZWZpbml0aW9uO1xuICByZXR1cm4gdGVtcEFjdG9yO1xufVxuXG5mdW5jdGlvbiBpc0FjdG9yKGl0ZW0pIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0uc2VuZCA9PT0gJ2Z1bmN0aW9uJztcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgeyBjcmVhdGVJbnZvY2FibGVBY3RvciwgY3JlYXRlTnVsbEFjdG9yLCBpc0FjdG9yIH07IiwiaW1wb3J0IHsgU3RhdGVOb2RlIH0gZnJvbSAnLi9TdGF0ZU5vZGUuanMnO1xuXG5mdW5jdGlvbiBNYWNoaW5lKGNvbmZpZywgb3B0aW9ucywgaW5pdGlhbENvbnRleHQpIHtcbiAgaWYgKGluaXRpYWxDb250ZXh0ID09PSB2b2lkIDApIHtcbiAgICBpbml0aWFsQ29udGV4dCA9IGNvbmZpZy5jb250ZXh0O1xuICB9XG5cbiAgdmFyIHJlc29sdmVkSW5pdGlhbENvbnRleHQgPSB0eXBlb2YgaW5pdGlhbENvbnRleHQgPT09ICdmdW5jdGlvbicgPyBpbml0aWFsQ29udGV4dCgpIDogaW5pdGlhbENvbnRleHQ7XG4gIHJldHVybiBuZXcgU3RhdGVOb2RlKGNvbmZpZywgb3B0aW9ucywgcmVzb2x2ZWRJbml0aWFsQ29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1hY2hpbmUoY29uZmlnLCBvcHRpb25zKSB7XG4gIHZhciByZXNvbHZlZEluaXRpYWxDb250ZXh0ID0gdHlwZW9mIGNvbmZpZy5jb250ZXh0ID09PSAnZnVuY3Rpb24nID8gY29uZmlnLmNvbnRleHQoKSA6IGNvbmZpZy5jb250ZXh0O1xuICByZXR1cm4gbmV3IFN0YXRlTm9kZShjb25maWcsIG9wdGlvbnMsIHJlc29sdmVkSW5pdGlhbENvbnRleHQpO1xufVxuXG5leHBvcnQgeyBNYWNoaW5lLCBjcmVhdGVNYWNoaW5lIH07IiwiaW1wb3J0IHsgX19zcHJlYWQsIF9fcmVzdCwgX19hc3NpZ24gfSBmcm9tICcuL192aXJ0dWFsL190c2xpYi5qcyc7XG5pbXBvcnQgeyBFTVBUWV9BQ1RJVklUWV9NQVAgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgeyBpc1N0cmluZywgbWF0Y2hlc1N0YXRlLCBrZXlzIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBuZXh0RXZlbnRzIH0gZnJvbSAnLi9zdGF0ZVV0aWxzLmpzJztcbmltcG9ydCB7IGluaXRFdmVudCB9IGZyb20gJy4vYWN0aW9ucy5qcyc7XG5cbmZ1bmN0aW9uIHN0YXRlVmFsdWVzRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNTdHJpbmcoYSkgfHwgaXNTdHJpbmcoYikpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG4gIHZhciBhS2V5cyA9IGtleXMoYSk7XG4gIHZhciBiS2V5cyA9IGtleXMoYik7XG4gIHJldHVybiBhS2V5cy5sZW5ndGggPT09IGJLZXlzLmxlbmd0aCAmJiBhS2V5cy5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHN0YXRlVmFsdWVzRXF1YWwoYVtrZXldLCBiW2tleV0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNTdGF0ZShzdGF0ZSkge1xuICBpZiAoaXNTdHJpbmcoc3RhdGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuICd2YWx1ZScgaW4gc3RhdGUgJiYgJ2hpc3RvcnknIGluIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBiaW5kQWN0aW9uVG9TdGF0ZShhY3Rpb24sIHN0YXRlKSB7XG4gIHZhciBleGVjID0gYWN0aW9uLmV4ZWM7XG5cbiAgdmFyIGJvdW5kQWN0aW9uID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGFjdGlvbiksIHtcbiAgICBleGVjOiBleGVjICE9PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZXhlYyhzdGF0ZS5jb250ZXh0LCBzdGF0ZS5ldmVudCwge1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICBfZXZlbnQ6IHN0YXRlLl9ldmVudFxuICAgICAgfSk7XG4gICAgfSA6IHVuZGVmaW5lZFxuICB9KTtcblxuICByZXR1cm4gYm91bmRBY3Rpb247XG59XG5cbnZhciBTdGF0ZSA9XG4vKiNfX1BVUkVfXyovXG5cbi8qKiBAY2xhc3MgKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBTdGF0ZSBpbnN0YW5jZS5cclxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHN0YXRlIHZhbHVlXHJcbiAgICogQHBhcmFtIGNvbnRleHQgVGhlIGV4dGVuZGVkIHN0YXRlXHJcbiAgICogQHBhcmFtIGhpc3RvcnlWYWx1ZSBUaGUgdHJlZSByZXByZXNlbnRpbmcgaGlzdG9yaWNhbCB2YWx1ZXMgb2YgdGhlIHN0YXRlIG5vZGVzXHJcbiAgICogQHBhcmFtIGhpc3RvcnkgVGhlIHByZXZpb3VzIHN0YXRlXHJcbiAgICogQHBhcmFtIGFjdGlvbnMgQW4gYXJyYXkgb2YgYWN0aW9uIG9iamVjdHMgdG8gZXhlY3V0ZSBhcyBzaWRlLWVmZmVjdHNcclxuICAgKiBAcGFyYW0gYWN0aXZpdGllcyBBIG1hcHBpbmcgb2YgYWN0aXZpdGllcyBhbmQgd2hldGhlciB0aGV5IGFyZSBzdGFydGVkIChgdHJ1ZWApIG9yIHN0b3BwZWQgKGBmYWxzZWApLlxyXG4gICAqIEBwYXJhbSBtZXRhXHJcbiAgICogQHBhcmFtIGV2ZW50cyBJbnRlcm5hbCBldmVudCBxdWV1ZS4gU2hvdWxkIGJlIGVtcHR5IHdpdGggcnVuLXRvLWNvbXBsZXRpb24gc2VtYW50aWNzLlxyXG4gICAqIEBwYXJhbSBjb25maWd1cmF0aW9uXHJcbiAgICovXG4gIGZ1bmN0aW9uIFN0YXRlKGNvbmZpZykge1xuICAgIHRoaXMuYWN0aW9ucyA9IFtdO1xuICAgIHRoaXMuYWN0aXZpdGllcyA9IEVNUFRZX0FDVElWSVRZX01BUDtcbiAgICB0aGlzLm1ldGEgPSB7fTtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWU7XG4gICAgdGhpcy5jb250ZXh0ID0gY29uZmlnLmNvbnRleHQ7XG4gICAgdGhpcy5fZXZlbnQgPSBjb25maWcuX2V2ZW50O1xuICAgIHRoaXMuX3Nlc3Npb25pZCA9IGNvbmZpZy5fc2Vzc2lvbmlkO1xuICAgIHRoaXMuZXZlbnQgPSB0aGlzLl9ldmVudC5kYXRhO1xuICAgIHRoaXMuaGlzdG9yeVZhbHVlID0gY29uZmlnLmhpc3RvcnlWYWx1ZTtcbiAgICB0aGlzLmhpc3RvcnkgPSBjb25maWcuaGlzdG9yeTtcbiAgICB0aGlzLmFjdGlvbnMgPSBjb25maWcuYWN0aW9ucyB8fCBbXTtcbiAgICB0aGlzLmFjdGl2aXRpZXMgPSBjb25maWcuYWN0aXZpdGllcyB8fCBFTVBUWV9BQ1RJVklUWV9NQVA7XG4gICAgdGhpcy5tZXRhID0gY29uZmlnLm1ldGEgfHwge307XG4gICAgdGhpcy5ldmVudHMgPSBjb25maWcuZXZlbnRzIHx8IFtdO1xuICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMubWF0Y2hlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9TdHJpbmdzID0gdGhpcy50b1N0cmluZ3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWcuY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLnRyYW5zaXRpb25zID0gY29uZmlnLnRyYW5zaXRpb25zO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBjb25maWcuY2hpbGRyZW47XG4gICAgdGhpcy5kb25lID0gISFjb25maWcuZG9uZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ25leHRFdmVudHMnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5leHRFdmVudHMoY29uZmlnLmNvbmZpZ3VyYXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgU3RhdGUgaW5zdGFuY2UgZm9yIHRoZSBnaXZlbiBgc3RhdGVWYWx1ZWAgYW5kIGBjb250ZXh0YC5cclxuICAgKiBAcGFyYW0gc3RhdGVWYWx1ZVxyXG4gICAqIEBwYXJhbSBjb250ZXh0XHJcbiAgICovXG5cblxuICBTdGF0ZS5mcm9tID0gZnVuY3Rpb24gKHN0YXRlVmFsdWUsIGNvbnRleHQpIHtcbiAgICBpZiAoc3RhdGVWYWx1ZSBpbnN0YW5jZW9mIFN0YXRlKSB7XG4gICAgICBpZiAoc3RhdGVWYWx1ZS5jb250ZXh0ICE9PSBjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBuZXcgU3RhdGUoe1xuICAgICAgICAgIHZhbHVlOiBzdGF0ZVZhbHVlLnZhbHVlLFxuICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgX2V2ZW50OiBzdGF0ZVZhbHVlLl9ldmVudCxcbiAgICAgICAgICBfc2Vzc2lvbmlkOiBudWxsLFxuICAgICAgICAgIGhpc3RvcnlWYWx1ZTogc3RhdGVWYWx1ZS5oaXN0b3J5VmFsdWUsXG4gICAgICAgICAgaGlzdG9yeTogc3RhdGVWYWx1ZS5oaXN0b3J5LFxuICAgICAgICAgIGFjdGlvbnM6IFtdLFxuICAgICAgICAgIGFjdGl2aXRpZXM6IHN0YXRlVmFsdWUuYWN0aXZpdGllcyxcbiAgICAgICAgICBtZXRhOiB7fSxcbiAgICAgICAgICBldmVudHM6IFtdLFxuICAgICAgICAgIGNvbmZpZ3VyYXRpb246IFtdLFxuICAgICAgICAgIHRyYW5zaXRpb25zOiBbXSxcbiAgICAgICAgICBjaGlsZHJlbjoge31cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGF0ZVZhbHVlO1xuICAgIH1cblxuICAgIHZhciBfZXZlbnQgPSBpbml0RXZlbnQ7XG4gICAgcmV0dXJuIG5ldyBTdGF0ZSh7XG4gICAgICB2YWx1ZTogc3RhdGVWYWx1ZSxcbiAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfZXZlbnQ6IF9ldmVudCxcbiAgICAgIF9zZXNzaW9uaWQ6IG51bGwsXG4gICAgICBoaXN0b3J5VmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIGhpc3Rvcnk6IHVuZGVmaW5lZCxcbiAgICAgIGFjdGlvbnM6IFtdLFxuICAgICAgYWN0aXZpdGllczogdW5kZWZpbmVkLFxuICAgICAgbWV0YTogdW5kZWZpbmVkLFxuICAgICAgZXZlbnRzOiBbXSxcbiAgICAgIGNvbmZpZ3VyYXRpb246IFtdLFxuICAgICAgdHJhbnNpdGlvbnM6IFtdLFxuICAgICAgY2hpbGRyZW46IHt9XG4gICAgfSk7XG4gIH07XG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgU3RhdGUgaW5zdGFuY2UgZm9yIHRoZSBnaXZlbiBgY29uZmlnYC5cclxuICAgKiBAcGFyYW0gY29uZmlnIFRoZSBzdGF0ZSBjb25maWdcclxuICAgKi9cblxuXG4gIFN0YXRlLmNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICByZXR1cm4gbmV3IFN0YXRlKGNvbmZpZyk7XG4gIH07XG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgYFN0YXRlYCBpbnN0YW5jZSBmb3IgdGhlIGdpdmVuIGBzdGF0ZVZhbHVlYCBhbmQgYGNvbnRleHRgIHdpdGggbm8gYWN0aW9ucyAoc2lkZS1lZmZlY3RzKS5cclxuICAgKiBAcGFyYW0gc3RhdGVWYWx1ZVxyXG4gICAqIEBwYXJhbSBjb250ZXh0XHJcbiAgICovXG5cblxuICBTdGF0ZS5pbmVydCA9IGZ1bmN0aW9uIChzdGF0ZVZhbHVlLCBjb250ZXh0KSB7XG4gICAgaWYgKHN0YXRlVmFsdWUgaW5zdGFuY2VvZiBTdGF0ZSkge1xuICAgICAgaWYgKCFzdGF0ZVZhbHVlLmFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgX2V2ZW50ID0gaW5pdEV2ZW50O1xuICAgICAgcmV0dXJuIG5ldyBTdGF0ZSh7XG4gICAgICAgIHZhbHVlOiBzdGF0ZVZhbHVlLnZhbHVlLFxuICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICBfZXZlbnQ6IF9ldmVudCxcbiAgICAgICAgX3Nlc3Npb25pZDogbnVsbCxcbiAgICAgICAgaGlzdG9yeVZhbHVlOiBzdGF0ZVZhbHVlLmhpc3RvcnlWYWx1ZSxcbiAgICAgICAgaGlzdG9yeTogc3RhdGVWYWx1ZS5oaXN0b3J5LFxuICAgICAgICBhY3Rpdml0aWVzOiBzdGF0ZVZhbHVlLmFjdGl2aXRpZXMsXG4gICAgICAgIGNvbmZpZ3VyYXRpb246IHN0YXRlVmFsdWUuY29uZmlndXJhdGlvbixcbiAgICAgICAgdHJhbnNpdGlvbnM6IFtdLFxuICAgICAgICBjaGlsZHJlbjoge31cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBTdGF0ZS5mcm9tKHN0YXRlVmFsdWUsIGNvbnRleHQpO1xuICB9O1xuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGFsbCB0aGUgc3RyaW5nIGxlYWYgc3RhdGUgbm9kZSBwYXRocy5cclxuICAgKiBAcGFyYW0gc3RhdGVWYWx1ZVxyXG4gICAqIEBwYXJhbSBkZWxpbWl0ZXIgVGhlIGNoYXJhY3RlcihzKSB0aGF0IHNlcGFyYXRlIGVhY2ggc3VicGF0aCBpbiB0aGUgc3RyaW5nIHN0YXRlIG5vZGUgcGF0aC5cclxuICAgKi9cblxuXG4gIFN0YXRlLnByb3RvdHlwZS50b1N0cmluZ3MgPSBmdW5jdGlvbiAoc3RhdGVWYWx1ZSwgZGVsaW1pdGVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmIChzdGF0ZVZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgIHN0YXRlVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIGlmIChkZWxpbWl0ZXIgPT09IHZvaWQgMCkge1xuICAgICAgZGVsaW1pdGVyID0gJy4nO1xuICAgIH1cblxuICAgIGlmIChpc1N0cmluZyhzdGF0ZVZhbHVlKSkge1xuICAgICAgcmV0dXJuIFtzdGF0ZVZhbHVlXTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVLZXlzID0ga2V5cyhzdGF0ZVZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWVLZXlzLmNvbmNhdC5hcHBseSh2YWx1ZUtleXMsIF9fc3ByZWFkKHZhbHVlS2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzLnRvU3RyaW5ncyhzdGF0ZVZhbHVlW2tleV0sIGRlbGltaXRlcikubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBrZXkgKyBkZWxpbWl0ZXIgKyBzO1xuICAgICAgfSk7XG4gICAgfSkpKTtcbiAgfTtcblxuICBTdGF0ZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHRoaXMsXG4gICAgICAgIGNvbmZpZ3VyYXRpb24gPSBfYS5jb25maWd1cmF0aW9uLFxuICAgICAgICB0cmFuc2l0aW9ucyA9IF9hLnRyYW5zaXRpb25zLFxuICAgICAgICBqc29uVmFsdWVzID0gX19yZXN0KF9hLCBbXCJjb25maWd1cmF0aW9uXCIsIFwidHJhbnNpdGlvbnNcIl0pO1xuXG4gICAgcmV0dXJuIGpzb25WYWx1ZXM7XG4gIH07XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIGN1cnJlbnQgc3RhdGUgdmFsdWUgaXMgYSBzdWJzZXQgb2YgdGhlIGdpdmVuIHBhcmVudCBzdGF0ZSB2YWx1ZS5cclxuICAgKiBAcGFyYW0gcGFyZW50U3RhdGVWYWx1ZVxyXG4gICAqL1xuXG5cbiAgU3RhdGUucHJvdG90eXBlLm1hdGNoZXMgPSBmdW5jdGlvbiAocGFyZW50U3RhdGVWYWx1ZSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RhdGUocGFyZW50U3RhdGVWYWx1ZSwgdGhpcy52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIFN0YXRlO1xufSgpO1xuXG5leHBvcnQgeyBTdGF0ZSwgYmluZEFjdGlvblRvU3RhdGUsIGlzU3RhdGUsIHN0YXRlVmFsdWVzRXF1YWwgfTsiLCJpbXBvcnQgeyBfX2Fzc2lnbiwgX192YWx1ZXMsIF9fc3ByZWFkLCBfX3JlYWQsIF9fcmVzdCB9IGZyb20gJy4vX3ZpcnR1YWwvX3RzbGliLmpzJztcbmltcG9ydCB7IERFRkFVTFRfR1VBUkRfVFlQRSwgU1RBVEVfREVMSU1JVEVSIH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgSVNfUFJPRFVDVElPTiB9IGZyb20gJy4vZW52aXJvbm1lbnQuanMnO1xuaW1wb3J0IHsgbWFwVmFsdWVzLCBpc0FycmF5LCBmbGF0dGVuLCBrZXlzLCB0b0FycmF5LCB0b1N0YXRlVmFsdWUsIGlzU3RyaW5nLCBnZXRFdmVudFR5cGUsIG1hdGNoZXNTdGF0ZSwgcGF0aCwgbWFwQ29udGV4dCwgdG9TQ1hNTEV2ZW50LCBwYXRoVG9TdGF0ZVZhbHVlLCBpc0J1aWx0SW5FdmVudCwgcGFydGl0aW9uLCB1cGRhdGVDb250ZXh0LCB3YXJuLCB1cGRhdGVIaXN0b3J5VmFsdWUsIHRvU3RhdGVQYXRoLCBtYXBGaWx0ZXJWYWx1ZXMsIHRvU3RhdGVQYXRocywgbmVzdGVkUGF0aCwgbm9ybWFsaXplVGFyZ2V0LCB0b0d1YXJkLCB0b1RyYW5zaXRpb25Db25maWdBcnJheSwgaXNNYWNoaW5lLCBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBTcGVjaWFsVGFyZ2V0cyB9IGZyb20gJy4vdHlwZXMuanMnO1xuaW1wb3J0IHsgZ2V0QWxsU3RhdGVOb2RlcywgZ2V0Q29uZmlndXJhdGlvbiwgaGFzLCBnZXRDaGlsZHJlbiwgaXNJbkZpbmFsU3RhdGUsIGdldFZhbHVlLCBpc0xlYWZOb2RlIH0gZnJvbSAnLi9zdGF0ZVV0aWxzLmpzJztcbmltcG9ydCB7IHN0YXJ0IGFzIHN0YXJ0JDEsIHN0b3AgYXMgc3RvcCQxLCBwdXJlLCBsb2csIHNlbmQsIHJhaXNlIGFzIHJhaXNlJDEsIGludm9rZSwgdXBkYXRlLCBudWxsRXZlbnQsIGFzc2lnbiB9IGZyb20gJy4vYWN0aW9uVHlwZXMuanMnO1xuaW1wb3J0IHsgZG9uZSwgc3RhcnQsIHJhaXNlLCBzdG9wLCB0b0FjdGlvbk9iamVjdHMsIHRvQWN0aW9uT2JqZWN0LCByZXNvbHZlTG9nLCByZXNvbHZlU2VuZCwgcmVzb2x2ZVJhaXNlLCBkb25lSW52b2tlLCBlcnJvciwgdG9BY3Rpdml0eURlZmluaXRpb24sIGFmdGVyLCBzZW5kIGFzIHNlbmQkMSwgY2FuY2VsLCBpbml0RXZlbnQgfSBmcm9tICcuL2FjdGlvbnMuanMnO1xuaW1wb3J0IHsgU3RhdGUsIHN0YXRlVmFsdWVzRXF1YWwgfSBmcm9tICcuL1N0YXRlLmpzJztcbmltcG9ydCB7IGNyZWF0ZUludm9jYWJsZUFjdG9yIH0gZnJvbSAnLi9BY3Rvci5qcyc7XG52YXIgTlVMTF9FVkVOVCA9ICcnO1xudmFyIFNUQVRFX0lERU5USUZJRVIgPSAnIyc7XG52YXIgV0lMRENBUkQgPSAnKic7XG52YXIgRU1QVFlfT0JKRUNUID0ge307XG5cbnZhciBpc1N0YXRlSWQgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHJbMF0gPT09IFNUQVRFX0lERU5USUZJRVI7XG59O1xuXG52YXIgY3JlYXRlRGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczoge30sXG4gICAgZ3VhcmRzOiB7fSxcbiAgICBzZXJ2aWNlczoge30sXG4gICAgYWN0aXZpdGllczoge30sXG4gICAgZGVsYXlzOiB7fVxuICB9O1xufTtcblxudmFyIHZhbGlkYXRlQXJyYXlpZmllZFRyYW5zaXRpb25zID0gZnVuY3Rpb24gKHN0YXRlTm9kZSwgZXZlbnQsIHRyYW5zaXRpb25zKSB7XG4gIHZhciBoYXNOb25MYXN0VW5ndWFyZGVkVGFyZ2V0ID0gdHJhbnNpdGlvbnMuc2xpY2UoMCwgLTEpLnNvbWUoZnVuY3Rpb24gKHRyYW5zaXRpb24pIHtcbiAgICByZXR1cm4gISgnY29uZCcgaW4gdHJhbnNpdGlvbikgJiYgISgnaW4nIGluIHRyYW5zaXRpb24pICYmIChpc1N0cmluZyh0cmFuc2l0aW9uLnRhcmdldCkgfHwgaXNNYWNoaW5lKHRyYW5zaXRpb24udGFyZ2V0KSk7XG4gIH0pO1xuICB2YXIgZXZlbnRUZXh0ID0gZXZlbnQgPT09IE5VTExfRVZFTlQgPyAndGhlIHRyYW5zaWVudCBldmVudCcgOiBcImV2ZW50ICdcIiArIGV2ZW50ICsgXCInXCI7XG4gIHdhcm4oIWhhc05vbkxhc3RVbmd1YXJkZWRUYXJnZXQsIFwiT25lIG9yIG1vcmUgdHJhbnNpdGlvbnMgZm9yIFwiICsgZXZlbnRUZXh0ICsgXCIgb24gc3RhdGUgJ1wiICsgc3RhdGVOb2RlLmlkICsgXCInIGFyZSB1bnJlYWNoYWJsZS4gXCIgKyBcIk1ha2Ugc3VyZSB0aGF0IHRoZSBkZWZhdWx0IHRyYW5zaXRpb24gaXMgdGhlIGxhc3Qgb25lIGRlZmluZWQuXCIpO1xufTtcblxudmFyIFN0YXRlTm9kZSA9XG4vKiNfX1BVUkVfXyovXG5cbi8qKiBAY2xhc3MgKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RhdGVOb2RlKFxuICAvKipcclxuICAgKiBUaGUgcmF3IGNvbmZpZyB1c2VkIHRvIGNyZWF0ZSB0aGUgbWFjaGluZS5cclxuICAgKi9cbiAgY29uZmlnLCBvcHRpb25zLFxuICAvKipcclxuICAgKiBUaGUgaW5pdGlhbCBleHRlbmRlZCBzdGF0ZVxyXG4gICAqL1xuICBjb250ZXh0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgLyoqXHJcbiAgICAgKiBUaGUgb3JkZXIgdGhpcyBzdGF0ZSBub2RlIGFwcGVhcnMuIENvcnJlc3BvbmRzIHRvIHRoZSBpbXBsaWNpdCBTQ1hNTCBkb2N1bWVudCBvcmRlci5cclxuICAgICAqL1xuXG4gICAgdGhpcy5vcmRlciA9IC0xO1xuICAgIHRoaXMuX194c3RhdGVub2RlID0gdHJ1ZTtcbiAgICB0aGlzLl9fY2FjaGUgPSB7XG4gICAgICBldmVudHM6IHVuZGVmaW5lZCxcbiAgICAgIHJlbGF0aXZlVmFsdWU6IG5ldyBNYXAoKSxcbiAgICAgIGluaXRpYWxTdGF0ZVZhbHVlOiB1bmRlZmluZWQsXG4gICAgICBpbml0aWFsU3RhdGU6IHVuZGVmaW5lZCxcbiAgICAgIG9uOiB1bmRlZmluZWQsXG4gICAgICB0cmFuc2l0aW9uczogdW5kZWZpbmVkLFxuICAgICAgY2FuZGlkYXRlczoge30sXG4gICAgICBkZWxheWVkVHJhbnNpdGlvbnM6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgdGhpcy5pZE1hcCA9IHt9O1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oY3JlYXRlRGVmYXVsdE9wdGlvbnMoKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5wYXJlbnQgPSB0aGlzLm9wdGlvbnMuX3BhcmVudDtcbiAgICB0aGlzLmtleSA9IHRoaXMuY29uZmlnLmtleSB8fCB0aGlzLm9wdGlvbnMuX2tleSB8fCB0aGlzLmNvbmZpZy5pZCB8fCAnKG1hY2hpbmUpJztcbiAgICB0aGlzLm1hY2hpbmUgPSB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm1hY2hpbmUgOiB0aGlzO1xuICAgIHRoaXMucGF0aCA9IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQucGF0aC5jb25jYXQodGhpcy5rZXkpIDogW107XG4gICAgdGhpcy5kZWxpbWl0ZXIgPSB0aGlzLmNvbmZpZy5kZWxpbWl0ZXIgfHwgKHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZGVsaW1pdGVyIDogU1RBVEVfREVMSU1JVEVSKTtcbiAgICB0aGlzLmlkID0gdGhpcy5jb25maWcuaWQgfHwgX19zcHJlYWQoW3RoaXMubWFjaGluZS5rZXldLCB0aGlzLnBhdGgpLmpvaW4odGhpcy5kZWxpbWl0ZXIpO1xuICAgIHRoaXMudmVyc2lvbiA9IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQudmVyc2lvbiA6IHRoaXMuY29uZmlnLnZlcnNpb247XG4gICAgdGhpcy50eXBlID0gdGhpcy5jb25maWcudHlwZSB8fCAodGhpcy5jb25maWcucGFyYWxsZWwgPyAncGFyYWxsZWwnIDogdGhpcy5jb25maWcuc3RhdGVzICYmIGtleXModGhpcy5jb25maWcuc3RhdGVzKS5sZW5ndGggPyAnY29tcG91bmQnIDogdGhpcy5jb25maWcuaGlzdG9yeSA/ICdoaXN0b3J5JyA6ICdhdG9taWMnKTtcblxuICAgIGlmICghSVNfUFJPRFVDVElPTikge1xuICAgICAgd2FybighKCdwYXJhbGxlbCcgaW4gdGhpcy5jb25maWcpLCBcIlRoZSBcXFwicGFyYWxsZWxcXFwiIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDQuMS4gXCIgKyAodGhpcy5jb25maWcucGFyYWxsZWwgPyBcIlJlcGxhY2Ugd2l0aCBgdHlwZTogJ3BhcmFsbGVsJ2BcIiA6IFwiVXNlIGB0eXBlOiAnXCIgKyB0aGlzLnR5cGUgKyBcIidgXCIpICsgXCIgaW4gdGhlIGNvbmZpZyBmb3Igc3RhdGUgbm9kZSAnXCIgKyB0aGlzLmlkICsgXCInIGluc3RlYWQuXCIpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhbCA9IHRoaXMuY29uZmlnLmluaXRpYWw7XG4gICAgdGhpcy5zdGF0ZXMgPSB0aGlzLmNvbmZpZy5zdGF0ZXMgPyBtYXBWYWx1ZXModGhpcy5jb25maWcuc3RhdGVzLCBmdW5jdGlvbiAoc3RhdGVDb25maWcsIGtleSkge1xuICAgICAgdmFyIF9hO1xuXG4gICAgICB2YXIgc3RhdGVOb2RlID0gbmV3IFN0YXRlTm9kZShzdGF0ZUNvbmZpZywge1xuICAgICAgICBfcGFyZW50OiBfdGhpcyxcbiAgICAgICAgX2tleToga2V5XG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5hc3NpZ24oX3RoaXMuaWRNYXAsIF9fYXNzaWduKChfYSA9IHt9LCBfYVtzdGF0ZU5vZGUuaWRdID0gc3RhdGVOb2RlLCBfYSksIHN0YXRlTm9kZS5pZE1hcCkpO1xuICAgICAgcmV0dXJuIHN0YXRlTm9kZTtcbiAgICB9KSA6IEVNUFRZX09CSkVDVDsgLy8gRG9jdW1lbnQgb3JkZXJcblxuICAgIHZhciBvcmRlciA9IDA7XG5cbiAgICBmdW5jdGlvbiBkZnMoc3RhdGVOb2RlKSB7XG4gICAgICB2YXIgZV8xLCBfYTtcblxuICAgICAgc3RhdGVOb2RlLm9yZGVyID0gb3JkZXIrKztcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhnZXRDaGlsZHJlbihzdGF0ZU5vZGUpKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgIHZhciBjaGlsZCA9IF9jLnZhbHVlO1xuICAgICAgICAgIGRmcyhjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVfMV8xKSB7XG4gICAgICAgIGVfMSA9IHtcbiAgICAgICAgICBlcnJvcjogZV8xXzFcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRmcyh0aGlzKTsgLy8gSGlzdG9yeSBjb25maWdcblxuICAgIHRoaXMuaGlzdG9yeSA9IHRoaXMuY29uZmlnLmhpc3RvcnkgPT09IHRydWUgPyAnc2hhbGxvdycgOiB0aGlzLmNvbmZpZy5oaXN0b3J5IHx8IGZhbHNlO1xuICAgIHRoaXMuX3RyYW5zaWVudCA9ICF0aGlzLmNvbmZpZy5vbiA/IGZhbHNlIDogQXJyYXkuaXNBcnJheSh0aGlzLmNvbmZpZy5vbikgPyB0aGlzLmNvbmZpZy5vbi5zb21lKGZ1bmN0aW9uIChfYSkge1xuICAgICAgdmFyIGV2ZW50ID0gX2EuZXZlbnQ7XG4gICAgICByZXR1cm4gZXZlbnQgPT09IE5VTExfRVZFTlQ7XG4gICAgfSkgOiBOVUxMX0VWRU5UIGluIHRoaXMuY29uZmlnLm9uO1xuICAgIHRoaXMuc3RyaWN0ID0gISF0aGlzLmNvbmZpZy5zdHJpY3Q7IC8vIFRPRE86IGRlcHJlY2F0ZSAoZW50cnkpXG5cbiAgICB0aGlzLm9uRW50cnkgPSB0b0FycmF5KHRoaXMuY29uZmlnLmVudHJ5IHx8IHRoaXMuY29uZmlnLm9uRW50cnkpLm1hcChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICByZXR1cm4gdG9BY3Rpb25PYmplY3QoYWN0aW9uKTtcbiAgICB9KTsgLy8gVE9ETzogZGVwcmVjYXRlIChleGl0KVxuXG4gICAgdGhpcy5vbkV4aXQgPSB0b0FycmF5KHRoaXMuY29uZmlnLmV4aXQgfHwgdGhpcy5jb25maWcub25FeGl0KS5tYXAoZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgcmV0dXJuIHRvQWN0aW9uT2JqZWN0KGFjdGlvbik7XG4gICAgfSk7XG4gICAgdGhpcy5tZXRhID0gdGhpcy5jb25maWcubWV0YTtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnR5cGUgPT09ICdmaW5hbCcgPyB0aGlzLmNvbmZpZy5kYXRhIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuaW52b2tlID0gdG9BcnJheSh0aGlzLmNvbmZpZy5pbnZva2UpLm1hcChmdW5jdGlvbiAoaW52b2tlQ29uZmlnLCBpKSB7XG4gICAgICB2YXIgX2EsIF9iO1xuXG4gICAgICBpZiAoaXNNYWNoaW5lKGludm9rZUNvbmZpZykpIHtcbiAgICAgICAgX3RoaXMubWFjaGluZS5vcHRpb25zLnNlcnZpY2VzID0gX19hc3NpZ24oKF9hID0ge30sIF9hW2ludm9rZUNvbmZpZy5pZF0gPSBpbnZva2VDb25maWcsIF9hKSwgX3RoaXMubWFjaGluZS5vcHRpb25zLnNlcnZpY2VzKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBpbnZva2UsXG4gICAgICAgICAgc3JjOiBpbnZva2VDb25maWcuaWQsXG4gICAgICAgICAgaWQ6IGludm9rZUNvbmZpZy5pZFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaW52b2tlQ29uZmlnLnNyYyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGludm9rZVNyYyA9IF90aGlzLmlkICsgXCI6aW52b2NhdGlvbltcIiArIGkgKyBcIl1cIjsgLy8gVE9ETzogdXRpbCBmdW5jdGlvblxuXG4gICAgICAgIF90aGlzLm1hY2hpbmUub3B0aW9ucy5zZXJ2aWNlcyA9IF9fYXNzaWduKChfYiA9IHt9LCBfYltpbnZva2VTcmNdID0gaW52b2tlQ29uZmlnLnNyYywgX2IpLCBfdGhpcy5tYWNoaW5lLm9wdGlvbnMuc2VydmljZXMpO1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe1xuICAgICAgICAgIHR5cGU6IGludm9rZSxcbiAgICAgICAgICBpZDogaW52b2tlU3JjXG4gICAgICAgIH0sIGludm9rZUNvbmZpZyksIHtcbiAgICAgICAgICBzcmM6IGludm9rZVNyY1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaW52b2tlQ29uZmlnKSwge1xuICAgICAgICAgIHR5cGU6IGludm9rZSxcbiAgICAgICAgICBpZDogaW52b2tlQ29uZmlnLmlkIHx8IGludm9rZUNvbmZpZy5zcmMsXG4gICAgICAgICAgc3JjOiBpbnZva2VDb25maWcuc3JjXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYWN0aXZpdGllcyA9IHRvQXJyYXkodGhpcy5jb25maWcuYWN0aXZpdGllcykuY29uY2F0KHRoaXMuaW52b2tlKS5tYXAoZnVuY3Rpb24gKGFjdGl2aXR5KSB7XG4gICAgICByZXR1cm4gdG9BY3Rpdml0eURlZmluaXRpb24oYWN0aXZpdHkpO1xuICAgIH0pO1xuICAgIHRoaXMudHJhbnNpdGlvbiA9IHRoaXMudHJhbnNpdGlvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fX2NhY2hlLnRyYW5zaXRpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZ2V0QWxsU3RhdGVOb2Rlcyh0aGlzKS5mb3JFYWNoKGZ1bmN0aW9uIChzdGF0ZU5vZGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZU5vZGUub247XG4gICAgfSk7XG4gIH07XG4gIC8qKlxyXG4gICAqIENsb25lcyB0aGlzIHN0YXRlIG1hY2hpbmUgd2l0aCBjdXN0b20gb3B0aW9ucyBhbmQgY29udGV4dC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgKGFjdGlvbnMsIGd1YXJkcywgYWN0aXZpdGllcywgc2VydmljZXMpIHRvIHJlY3Vyc2l2ZWx5IG1lcmdlIHdpdGggdGhlIGV4aXN0aW5nIG9wdGlvbnMuXHJcbiAgICogQHBhcmFtIGNvbnRleHQgQ3VzdG9tIGNvbnRleHQgKHdpbGwgb3ZlcnJpZGUgcHJlZGVmaW5lZCBjb250ZXh0KVxyXG4gICAqL1xuXG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS53aXRoQ29uZmlnID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7XG4gICAgICBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgIH1cblxuICAgIHZhciBfYSA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgYWN0aW9ucyA9IF9hLmFjdGlvbnMsXG4gICAgICAgIGFjdGl2aXRpZXMgPSBfYS5hY3Rpdml0aWVzLFxuICAgICAgICBndWFyZHMgPSBfYS5ndWFyZHMsXG4gICAgICAgIHNlcnZpY2VzID0gX2Euc2VydmljZXMsXG4gICAgICAgIGRlbGF5cyA9IF9hLmRlbGF5cztcbiAgICByZXR1cm4gbmV3IFN0YXRlTm9kZSh0aGlzLmNvbmZpZywge1xuICAgICAgYWN0aW9uczogX19hc3NpZ24oX19hc3NpZ24oe30sIGFjdGlvbnMpLCBvcHRpb25zLmFjdGlvbnMpLFxuICAgICAgYWN0aXZpdGllczogX19hc3NpZ24oX19hc3NpZ24oe30sIGFjdGl2aXRpZXMpLCBvcHRpb25zLmFjdGl2aXRpZXMpLFxuICAgICAgZ3VhcmRzOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZ3VhcmRzKSwgb3B0aW9ucy5ndWFyZHMpLFxuICAgICAgc2VydmljZXM6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBzZXJ2aWNlcyksIG9wdGlvbnMuc2VydmljZXMpLFxuICAgICAgZGVsYXlzOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVsYXlzKSwgb3B0aW9ucy5kZWxheXMpXG4gICAgfSwgY29udGV4dCk7XG4gIH07XG4gIC8qKlxyXG4gICAqIENsb25lcyB0aGlzIHN0YXRlIG1hY2hpbmUgd2l0aCBjdXN0b20gY29udGV4dC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb250ZXh0IEN1c3RvbSBjb250ZXh0ICh3aWxsIG92ZXJyaWRlIHByZWRlZmluZWQgY29udGV4dCwgbm90IHJlY3Vyc2l2ZSlcclxuICAgKi9cblxuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUud2l0aENvbnRleHQgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgU3RhdGVOb2RlKHRoaXMuY29uZmlnLCB0aGlzLm9wdGlvbnMsIGNvbnRleHQpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdGF0ZU5vZGUucHJvdG90eXBlLCBcImRlZmluaXRpb25cIiwge1xuICAgIC8qKlxyXG4gICAgICogVGhlIHdlbGwtc3RydWN0dXJlZCBzdGF0ZSBub2RlIGRlZmluaXRpb24uXHJcbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICBrZXk6IHRoaXMua2V5LFxuICAgICAgICB2ZXJzaW9uOiB0aGlzLnZlcnNpb24sXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgaW5pdGlhbDogdGhpcy5pbml0aWFsLFxuICAgICAgICBoaXN0b3J5OiB0aGlzLmhpc3RvcnksXG4gICAgICAgIHN0YXRlczogbWFwVmFsdWVzKHRoaXMuc3RhdGVzLCBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUuZGVmaW5pdGlvbjtcbiAgICAgICAgfSksXG4gICAgICAgIG9uOiB0aGlzLm9uLFxuICAgICAgICB0cmFuc2l0aW9uczogdGhpcy50cmFuc2l0aW9ucyxcbiAgICAgICAgb25FbnRyeTogdGhpcy5vbkVudHJ5LFxuICAgICAgICBvbkV4aXQ6IHRoaXMub25FeGl0LFxuICAgICAgICBhY3Rpdml0aWVzOiB0aGlzLmFjdGl2aXRpZXMgfHwgW10sXG4gICAgICAgIG1ldGE6IHRoaXMubWV0YSxcbiAgICAgICAgb3JkZXI6IHRoaXMub3JkZXIgfHwgLTEsXG4gICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgaW52b2tlOiB0aGlzLmludm9rZVxuICAgICAgfTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb247XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0YXRlTm9kZS5wcm90b3R5cGUsIFwib25cIiwge1xuICAgIC8qKlxyXG4gICAgICogVGhlIG1hcHBpbmcgb2YgZXZlbnRzIHRvIHRyYW5zaXRpb25zLlxyXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5fX2NhY2hlLm9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fY2FjaGUub247XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFuc2l0aW9ucyA9IHRoaXMudHJhbnNpdGlvbnM7XG4gICAgICByZXR1cm4gdGhpcy5fX2NhY2hlLm9uID0gdHJhbnNpdGlvbnMucmVkdWNlKGZ1bmN0aW9uIChtYXAsIHRyYW5zaXRpb24pIHtcbiAgICAgICAgbWFwW3RyYW5zaXRpb24uZXZlbnRUeXBlXSA9IG1hcFt0cmFuc2l0aW9uLmV2ZW50VHlwZV0gfHwgW107XG4gICAgICAgIG1hcFt0cmFuc2l0aW9uLmV2ZW50VHlwZV0ucHVzaCh0cmFuc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgIH0sIHt9KTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RhdGVOb2RlLnByb3RvdHlwZSwgXCJhZnRlclwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX2NhY2hlLmRlbGF5ZWRUcmFuc2l0aW9ucyB8fCAodGhpcy5fX2NhY2hlLmRlbGF5ZWRUcmFuc2l0aW9ucyA9IHRoaXMuZ2V0RGVsYXllZFRyYW5zaXRpb25zKCksIHRoaXMuX19jYWNoZS5kZWxheWVkVHJhbnNpdGlvbnMpO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdGF0ZU5vZGUucHJvdG90eXBlLCBcInRyYW5zaXRpb25zXCIsIHtcbiAgICAvKipcclxuICAgICAqIEFsbCB0aGUgdHJhbnNpdGlvbnMgdGhhdCBjYW4gYmUgdGFrZW4gZnJvbSB0aGlzIHN0YXRlIG5vZGUuXHJcbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fY2FjaGUudHJhbnNpdGlvbnMgfHwgKHRoaXMuX19jYWNoZS50cmFuc2l0aW9ucyA9IHRoaXMuZm9ybWF0VHJhbnNpdGlvbnMoKSwgdGhpcy5fX2NhY2hlLnRyYW5zaXRpb25zKTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUuZ2V0Q2FuZGlkYXRlcyA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICBpZiAodGhpcy5fX2NhY2hlLmNhbmRpZGF0ZXNbZXZlbnROYW1lXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX19jYWNoZS5jYW5kaWRhdGVzW2V2ZW50TmFtZV07XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zaWVudCA9IGV2ZW50TmFtZSA9PT0gTlVMTF9FVkVOVDtcbiAgICB2YXIgY2FuZGlkYXRlcyA9IHRoaXMudHJhbnNpdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh0cmFuc2l0aW9uKSB7XG4gICAgICB2YXIgc2FtZUV2ZW50VHlwZSA9IHRyYW5zaXRpb24uZXZlbnRUeXBlID09PSBldmVudE5hbWU7IC8vIG51bGwgZXZlbnRzIHNob3VsZCBvbmx5IG1hdGNoIGFnYWluc3QgZXZlbnRsZXNzIHRyYW5zaXRpb25zXG5cbiAgICAgIHJldHVybiB0cmFuc2llbnQgPyBzYW1lRXZlbnRUeXBlIDogc2FtZUV2ZW50VHlwZSB8fCB0cmFuc2l0aW9uLmV2ZW50VHlwZSA9PT0gV0lMRENBUkQ7XG4gICAgfSk7XG4gICAgdGhpcy5fX2NhY2hlLmNhbmRpZGF0ZXNbZXZlbnROYW1lXSA9IGNhbmRpZGF0ZXM7XG4gICAgcmV0dXJuIGNhbmRpZGF0ZXM7XG4gIH07XG4gIC8qKlxyXG4gICAqIEFsbCBkZWxheWVkIHRyYW5zaXRpb25zIGZyb20gdGhlIGNvbmZpZy5cclxuICAgKi9cblxuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUuZ2V0RGVsYXllZFRyYW5zaXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgYWZ0ZXJDb25maWcgPSB0aGlzLmNvbmZpZy5hZnRlcjtcblxuICAgIGlmICghYWZ0ZXJDb25maWcpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICB2YXIgbXV0YXRlRW50cnlFeGl0ID0gZnVuY3Rpb24gKGRlbGF5LCBpKSB7XG4gICAgICB2YXIgZGVsYXlSZWYgPSBpc0Z1bmN0aW9uKGRlbGF5KSA/IF90aGlzLmlkICsgXCI6ZGVsYXlbXCIgKyBpICsgXCJdXCIgOiBkZWxheTtcbiAgICAgIHZhciBldmVudFR5cGUgPSBhZnRlcihkZWxheVJlZiwgX3RoaXMuaWQpO1xuXG4gICAgICBfdGhpcy5vbkVudHJ5LnB1c2goc2VuZCQxKGV2ZW50VHlwZSwge1xuICAgICAgICBkZWxheTogZGVsYXlcbiAgICAgIH0pKTtcblxuICAgICAgX3RoaXMub25FeGl0LnB1c2goY2FuY2VsKGV2ZW50VHlwZSkpO1xuXG4gICAgICByZXR1cm4gZXZlbnRUeXBlO1xuICAgIH07XG5cbiAgICB2YXIgZGVsYXllZFRyYW5zaXRpb25zID0gaXNBcnJheShhZnRlckNvbmZpZykgPyBhZnRlckNvbmZpZy5tYXAoZnVuY3Rpb24gKHRyYW5zaXRpb24sIGkpIHtcbiAgICAgIHZhciBldmVudFR5cGUgPSBtdXRhdGVFbnRyeUV4aXQodHJhbnNpdGlvbi5kZWxheSwgaSk7XG4gICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHRyYW5zaXRpb24pLCB7XG4gICAgICAgIGV2ZW50OiBldmVudFR5cGVcbiAgICAgIH0pO1xuICAgIH0pIDogZmxhdHRlbihrZXlzKGFmdGVyQ29uZmlnKS5tYXAoZnVuY3Rpb24gKGRlbGF5LCBpKSB7XG4gICAgICB2YXIgY29uZmlnVHJhbnNpdGlvbiA9IGFmdGVyQ29uZmlnW2RlbGF5XTtcbiAgICAgIHZhciByZXNvbHZlZFRyYW5zaXRpb24gPSBpc1N0cmluZyhjb25maWdUcmFuc2l0aW9uKSA/IHtcbiAgICAgICAgdGFyZ2V0OiBjb25maWdUcmFuc2l0aW9uXG4gICAgICB9IDogY29uZmlnVHJhbnNpdGlvbjtcbiAgICAgIHZhciByZXNvbHZlZERlbGF5ID0gIWlzTmFOKCtkZWxheSkgPyArZGVsYXkgOiBkZWxheTtcbiAgICAgIHZhciBldmVudFR5cGUgPSBtdXRhdGVFbnRyeUV4aXQocmVzb2x2ZWREZWxheSwgaSk7XG4gICAgICByZXR1cm4gdG9BcnJheShyZXNvbHZlZFRyYW5zaXRpb24pLm1hcChmdW5jdGlvbiAodHJhbnNpdGlvbikge1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHRyYW5zaXRpb24pLCB7XG4gICAgICAgICAgZXZlbnQ6IGV2ZW50VHlwZSxcbiAgICAgICAgICBkZWxheTogcmVzb2x2ZWREZWxheVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pKTtcbiAgICByZXR1cm4gZGVsYXllZFRyYW5zaXRpb25zLm1hcChmdW5jdGlvbiAoZGVsYXllZFRyYW5zaXRpb24pIHtcbiAgICAgIHZhciBkZWxheSA9IGRlbGF5ZWRUcmFuc2l0aW9uLmRlbGF5O1xuICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBfdGhpcy5mb3JtYXRUcmFuc2l0aW9uKGRlbGF5ZWRUcmFuc2l0aW9uKSksIHtcbiAgICAgICAgZGVsYXk6IGRlbGF5XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgc3RhdGUgbm9kZXMgcmVwcmVzZW50ZWQgYnkgdGhlIGN1cnJlbnQgc3RhdGUgdmFsdWUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RhdGUgVGhlIHN0YXRlIHZhbHVlIG9yIFN0YXRlIGluc3RhbmNlXHJcbiAgICovXG5cblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLmdldFN0YXRlTm9kZXMgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICB2YXIgX2E7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZVZhbHVlID0gc3RhdGUgaW5zdGFuY2VvZiBTdGF0ZSA/IHN0YXRlLnZhbHVlIDogdG9TdGF0ZVZhbHVlKHN0YXRlLCB0aGlzLmRlbGltaXRlcik7XG5cbiAgICBpZiAoaXNTdHJpbmcoc3RhdGVWYWx1ZSkpIHtcbiAgICAgIHZhciBpbml0aWFsU3RhdGVWYWx1ZSA9IHRoaXMuZ2V0U3RhdGVOb2RlKHN0YXRlVmFsdWUpLmluaXRpYWw7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlVmFsdWUgIT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0U3RhdGVOb2RlcygoX2EgPSB7fSwgX2Fbc3RhdGVWYWx1ZV0gPSBpbml0aWFsU3RhdGVWYWx1ZSwgX2EpKSA6IFt0aGlzLnN0YXRlc1tzdGF0ZVZhbHVlXV07XG4gICAgfVxuXG4gICAgdmFyIHN1YlN0YXRlS2V5cyA9IGtleXMoc3RhdGVWYWx1ZSk7XG4gICAgdmFyIHN1YlN0YXRlTm9kZXMgPSBzdWJTdGF0ZUtleXMubWFwKGZ1bmN0aW9uIChzdWJTdGF0ZUtleSkge1xuICAgICAgcmV0dXJuIF90aGlzLmdldFN0YXRlTm9kZShzdWJTdGF0ZUtleSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN1YlN0YXRlTm9kZXMuY29uY2F0KHN1YlN0YXRlS2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGFsbFN1YlN0YXRlTm9kZXMsIHN1YlN0YXRlS2V5KSB7XG4gICAgICB2YXIgc3ViU3RhdGVOb2RlID0gX3RoaXMuZ2V0U3RhdGVOb2RlKHN1YlN0YXRlS2V5KS5nZXRTdGF0ZU5vZGVzKHN0YXRlVmFsdWVbc3ViU3RhdGVLZXldKTtcblxuICAgICAgcmV0dXJuIGFsbFN1YlN0YXRlTm9kZXMuY29uY2F0KHN1YlN0YXRlTm9kZSk7XG4gICAgfSwgW10pKTtcbiAgfTtcbiAgLyoqXHJcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhpcyBzdGF0ZSBub2RlIGV4cGxpY2l0bHkgaGFuZGxlcyB0aGUgZ2l2ZW4gZXZlbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IGluIHF1ZXN0aW9uXHJcbiAgICovXG5cblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLmhhbmRsZXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgZXZlbnRUeXBlID0gZ2V0RXZlbnRUeXBlKGV2ZW50KTtcbiAgICByZXR1cm4gdGhpcy5ldmVudHMuaW5jbHVkZXMoZXZlbnRUeXBlKTtcbiAgfTtcbiAgLyoqXHJcbiAgICogUmVzb2x2ZXMgdGhlIGdpdmVuIGBzdGF0ZWAgdG8gYSBuZXcgYFN0YXRlYCBpbnN0YW5jZSByZWxhdGl2ZSB0byB0aGlzIG1hY2hpbmUuXHJcbiAgICpcclxuICAgKiBUaGlzIGVuc3VyZXMgdGhhdCBgLmV2ZW50c2AgYW5kIGAubmV4dEV2ZW50c2AgcmVwcmVzZW50IHRoZSBjb3JyZWN0IHZhbHVlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdGF0ZSBUaGUgc3RhdGUgdG8gcmVzb2x2ZVxyXG4gICAqL1xuXG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5yZXNvbHZlU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICB2YXIgY29uZmlndXJhdGlvbiA9IEFycmF5LmZyb20oZ2V0Q29uZmlndXJhdGlvbihbXSwgdGhpcy5nZXRTdGF0ZU5vZGVzKHN0YXRlLnZhbHVlKSkpO1xuICAgIHJldHVybiBuZXcgU3RhdGUoX19hc3NpZ24oX19hc3NpZ24oe30sIHN0YXRlKSwge1xuICAgICAgdmFsdWU6IHRoaXMucmVzb2x2ZShzdGF0ZS52YWx1ZSksXG4gICAgICBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uXG4gICAgfSkpO1xuICB9O1xuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUudHJhbnNpdGlvbkxlYWZOb2RlID0gZnVuY3Rpb24gKHN0YXRlVmFsdWUsIHN0YXRlLCBfZXZlbnQpIHtcbiAgICB2YXIgc3RhdGVOb2RlID0gdGhpcy5nZXRTdGF0ZU5vZGUoc3RhdGVWYWx1ZSk7XG4gICAgdmFyIG5leHQgPSBzdGF0ZU5vZGUubmV4dChzdGF0ZSwgX2V2ZW50KTtcblxuICAgIGlmICghbmV4dCB8fCAhbmV4dC50cmFuc2l0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5leHQoc3RhdGUsIF9ldmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQ7XG4gIH07XG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS50cmFuc2l0aW9uQ29tcG91bmROb2RlID0gZnVuY3Rpb24gKHN0YXRlVmFsdWUsIHN0YXRlLCBfZXZlbnQpIHtcbiAgICB2YXIgc3ViU3RhdGVLZXlzID0ga2V5cyhzdGF0ZVZhbHVlKTtcbiAgICB2YXIgc3RhdGVOb2RlID0gdGhpcy5nZXRTdGF0ZU5vZGUoc3ViU3RhdGVLZXlzWzBdKTtcblxuICAgIHZhciBuZXh0ID0gc3RhdGVOb2RlLl90cmFuc2l0aW9uKHN0YXRlVmFsdWVbc3ViU3RhdGVLZXlzWzBdXSwgc3RhdGUsIF9ldmVudCk7XG5cbiAgICBpZiAoIW5leHQgfHwgIW5leHQudHJhbnNpdGlvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZXh0KHN0YXRlLCBfZXZlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0O1xuICB9O1xuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUudHJhbnNpdGlvblBhcmFsbGVsTm9kZSA9IGZ1bmN0aW9uIChzdGF0ZVZhbHVlLCBzdGF0ZSwgX2V2ZW50KSB7XG4gICAgdmFyIGVfMiwgX2E7XG5cbiAgICB2YXIgdHJhbnNpdGlvbk1hcCA9IHt9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoa2V5cyhzdGF0ZVZhbHVlKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHN1YlN0YXRlS2V5ID0gX2MudmFsdWU7XG4gICAgICAgIHZhciBzdWJTdGF0ZVZhbHVlID0gc3RhdGVWYWx1ZVtzdWJTdGF0ZUtleV07XG5cbiAgICAgICAgaWYgKCFzdWJTdGF0ZVZhbHVlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3ViU3RhdGVOb2RlID0gdGhpcy5nZXRTdGF0ZU5vZGUoc3ViU3RhdGVLZXkpO1xuXG4gICAgICAgIHZhciBuZXh0ID0gc3ViU3RhdGVOb2RlLl90cmFuc2l0aW9uKHN1YlN0YXRlVmFsdWUsIHN0YXRlLCBfZXZlbnQpO1xuXG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgdHJhbnNpdGlvbk1hcFtzdWJTdGF0ZUtleV0gPSBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZV8yXzEpIHtcbiAgICAgIGVfMiA9IHtcbiAgICAgICAgZXJyb3I6IGVfMl8xXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlVHJhbnNpdGlvbnMgPSBrZXlzKHRyYW5zaXRpb25NYXApLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvbk1hcFtrZXldO1xuICAgIH0pO1xuICAgIHZhciBlbmFibGVkVHJhbnNpdGlvbnMgPSBmbGF0dGVuKHN0YXRlVHJhbnNpdGlvbnMubWFwKGZ1bmN0aW9uIChzdCkge1xuICAgICAgcmV0dXJuIHN0LnRyYW5zaXRpb25zO1xuICAgIH0pKTtcbiAgICB2YXIgd2lsbFRyYW5zaXRpb24gPSBzdGF0ZVRyYW5zaXRpb25zLnNvbWUoZnVuY3Rpb24gKHN0KSB7XG4gICAgICByZXR1cm4gc3QudHJhbnNpdGlvbnMubGVuZ3RoID4gMDtcbiAgICB9KTtcblxuICAgIGlmICghd2lsbFRyYW5zaXRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLm5leHQoc3RhdGUsIF9ldmVudCk7XG4gICAgfVxuXG4gICAgdmFyIGVudHJ5Tm9kZXMgPSBmbGF0dGVuKHN0YXRlVHJhbnNpdGlvbnMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5lbnRyeVNldDtcbiAgICB9KSk7XG4gICAgdmFyIGNvbmZpZ3VyYXRpb24gPSBmbGF0dGVuKGtleXModHJhbnNpdGlvbk1hcCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uTWFwW2tleV0uY29uZmlndXJhdGlvbjtcbiAgICB9KSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb25zOiBlbmFibGVkVHJhbnNpdGlvbnMsXG4gICAgICBlbnRyeVNldDogZW50cnlOb2RlcyxcbiAgICAgIGV4aXRTZXQ6IGZsYXR0ZW4oc3RhdGVUcmFuc2l0aW9ucy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQuZXhpdFNldDtcbiAgICAgIH0pKSxcbiAgICAgIGNvbmZpZ3VyYXRpb246IGNvbmZpZ3VyYXRpb24sXG4gICAgICBzb3VyY2U6IHN0YXRlLFxuICAgICAgYWN0aW9uczogZmxhdHRlbihrZXlzKHRyYW5zaXRpb25NYXApLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0cmFuc2l0aW9uTWFwW2tleV0uYWN0aW9ucztcbiAgICAgIH0pKVxuICAgIH07XG4gIH07XG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5fdHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChzdGF0ZVZhbHVlLCBzdGF0ZSwgX2V2ZW50KSB7XG4gICAgLy8gbGVhZiBub2RlXG4gICAgaWYgKGlzU3RyaW5nKHN0YXRlVmFsdWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2l0aW9uTGVhZk5vZGUoc3RhdGVWYWx1ZSwgc3RhdGUsIF9ldmVudCk7XG4gICAgfSAvLyBoaWVyYXJjaGljYWwgbm9kZVxuXG5cbiAgICBpZiAoa2V5cyhzdGF0ZVZhbHVlKS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zaXRpb25Db21wb3VuZE5vZGUoc3RhdGVWYWx1ZSwgc3RhdGUsIF9ldmVudCk7XG4gICAgfSAvLyBvcnRob2dvbmFsIG5vZGVcblxuXG4gICAgcmV0dXJuIHRoaXMudHJhbnNpdGlvblBhcmFsbGVsTm9kZShzdGF0ZVZhbHVlLCBzdGF0ZSwgX2V2ZW50KTtcbiAgfTtcblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoc3RhdGUsIF9ldmVudCkge1xuICAgIHZhciBlXzMsIF9hO1xuXG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBldmVudE5hbWUgPSBfZXZlbnQubmFtZTtcbiAgICB2YXIgYWN0aW9ucyA9IFtdO1xuICAgIHZhciBuZXh0U3RhdGVOb2RlcyA9IFtdO1xuICAgIHZhciBzZWxlY3RlZFRyYW5zaXRpb247XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLmdldENhbmRpZGF0ZXMoZXZlbnROYW1lKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IF9jLnZhbHVlO1xuICAgICAgICB2YXIgY29uZCA9IGNhbmRpZGF0ZS5jb25kLFxuICAgICAgICAgICAgc3RhdGVJbiA9IGNhbmRpZGF0ZS5pbjtcbiAgICAgICAgdmFyIHJlc29sdmVkQ29udGV4dCA9IHN0YXRlLmNvbnRleHQ7XG4gICAgICAgIHZhciBpc0luU3RhdGUgPSBzdGF0ZUluID8gaXNTdHJpbmcoc3RhdGVJbikgJiYgaXNTdGF0ZUlkKHN0YXRlSW4pID8gLy8gQ2hlY2sgaWYgaW4gc3RhdGUgYnkgSURcbiAgICAgICAgc3RhdGUubWF0Y2hlcyh0b1N0YXRlVmFsdWUodGhpcy5nZXRTdGF0ZU5vZGVCeUlkKHN0YXRlSW4pLnBhdGgsIHRoaXMuZGVsaW1pdGVyKSkgOiAvLyBDaGVjayBpZiBpbiBzdGF0ZSBieSByZWxhdGl2ZSBncmFuZHBhcmVudFxuICAgICAgICBtYXRjaGVzU3RhdGUodG9TdGF0ZVZhbHVlKHN0YXRlSW4sIHRoaXMuZGVsaW1pdGVyKSwgcGF0aCh0aGlzLnBhdGguc2xpY2UoMCwgLTIpKShzdGF0ZS52YWx1ZSkpIDogdHJ1ZTtcbiAgICAgICAgdmFyIGd1YXJkUGFzc2VkID0gZmFsc2U7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBndWFyZFBhc3NlZCA9ICFjb25kIHx8IHRoaXMuZXZhbHVhdGVHdWFyZChjb25kLCByZXNvbHZlZENvbnRleHQsIF9ldmVudCwgc3RhdGUpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZXZhbHVhdGUgZ3VhcmQgJ1wiICsgKGNvbmQubmFtZSB8fCBjb25kLnR5cGUpICsgXCInIGluIHRyYW5zaXRpb24gZm9yIGV2ZW50ICdcIiArIGV2ZW50TmFtZSArIFwiJyBpbiBzdGF0ZSBub2RlICdcIiArIHRoaXMuaWQgKyBcIic6XFxuXCIgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ3VhcmRQYXNzZWQgJiYgaXNJblN0YXRlKSB7XG4gICAgICAgICAgaWYgKGNhbmRpZGF0ZS50YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmV4dFN0YXRlTm9kZXMgPSBjYW5kaWRhdGUudGFyZ2V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFjdGlvbnMucHVzaC5hcHBseShhY3Rpb25zLCBfX3NwcmVhZChjYW5kaWRhdGUuYWN0aW9ucykpO1xuICAgICAgICAgIHNlbGVjdGVkVHJhbnNpdGlvbiA9IGNhbmRpZGF0ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVfM18xKSB7XG4gICAgICBlXzMgPSB7XG4gICAgICAgIGVycm9yOiBlXzNfMVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc2VsZWN0ZWRUcmFuc2l0aW9uKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICghbmV4dFN0YXRlTm9kZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2l0aW9uczogW3NlbGVjdGVkVHJhbnNpdGlvbl0sXG4gICAgICAgIGVudHJ5U2V0OiBbXSxcbiAgICAgICAgZXhpdFNldDogW10sXG4gICAgICAgIGNvbmZpZ3VyYXRpb246IHN0YXRlLnZhbHVlID8gW3RoaXNdIDogW10sXG4gICAgICAgIHNvdXJjZTogc3RhdGUsXG4gICAgICAgIGFjdGlvbnM6IGFjdGlvbnNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGFsbE5leHRTdGF0ZU5vZGVzID0gZmxhdHRlbihuZXh0U3RhdGVOb2Rlcy5tYXAoZnVuY3Rpb24gKHN0YXRlTm9kZSkge1xuICAgICAgcmV0dXJuIF90aGlzLmdldFJlbGF0aXZlU3RhdGVOb2RlcyhzdGF0ZU5vZGUsIHN0YXRlLmhpc3RvcnlWYWx1ZSk7XG4gICAgfSkpO1xuICAgIHZhciBpc0ludGVybmFsID0gISFzZWxlY3RlZFRyYW5zaXRpb24uaW50ZXJuYWw7XG4gICAgdmFyIHJlZW50cnlOb2RlcyA9IGlzSW50ZXJuYWwgPyBbXSA6IGZsYXR0ZW4oYWxsTmV4dFN0YXRlTm9kZXMubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gX3RoaXMubm9kZXNGcm9tQ2hpbGQobik7XG4gICAgfSkpO1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2l0aW9uczogW3NlbGVjdGVkVHJhbnNpdGlvbl0sXG4gICAgICBlbnRyeVNldDogcmVlbnRyeU5vZGVzLFxuICAgICAgZXhpdFNldDogaXNJbnRlcm5hbCA/IFtdIDogW3RoaXNdLFxuICAgICAgY29uZmlndXJhdGlvbjogYWxsTmV4dFN0YXRlTm9kZXMsXG4gICAgICBzb3VyY2U6IHN0YXRlLFxuICAgICAgYWN0aW9uczogYWN0aW9uc1xuICAgIH07XG4gIH07XG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5ub2Rlc0Zyb21DaGlsZCA9IGZ1bmN0aW9uIChjaGlsZFN0YXRlTm9kZSkge1xuICAgIGlmIChjaGlsZFN0YXRlTm9kZS5lc2NhcGVzKHRoaXMpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgdmFyIG1hcmtlciA9IGNoaWxkU3RhdGVOb2RlO1xuXG4gICAgd2hpbGUgKG1hcmtlciAmJiBtYXJrZXIgIT09IHRoaXMpIHtcbiAgICAgIG5vZGVzLnB1c2gobWFya2VyKTtcbiAgICAgIG1hcmtlciA9IG1hcmtlci5wYXJlbnQ7XG4gICAgfVxuXG4gICAgbm9kZXMucHVzaCh0aGlzKTsgLy8gaW5jbHVzaXZlXG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH07XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIGdpdmVuIHN0YXRlIG5vZGUgXCJlc2NhcGVzXCIgdGhpcyBzdGF0ZSBub2RlLiBJZiB0aGUgYHN0YXRlTm9kZWAgaXMgZXF1YWwgdG8gb3IgdGhlIHBhcmVudCBvZlxyXG4gICAqIHRoaXMgc3RhdGUgbm9kZSwgaXQgZG9lcyBub3QgZXNjYXBlLlxyXG4gICAqL1xuXG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5lc2NhcGVzID0gZnVuY3Rpb24gKHN0YXRlTm9kZSkge1xuICAgIGlmICh0aGlzID09PSBzdGF0ZU5vZGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XG5cbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBpZiAocGFyZW50ID09PSBzdGF0ZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUuZXZhbHVhdGVHdWFyZCA9IGZ1bmN0aW9uIChndWFyZCwgY29udGV4dCwgX2V2ZW50LCBzdGF0ZSkge1xuICAgIHZhciBndWFyZHMgPSB0aGlzLm1hY2hpbmUub3B0aW9ucy5ndWFyZHM7XG4gICAgdmFyIGd1YXJkTWV0YSA9IHtcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIGNvbmQ6IGd1YXJkLFxuICAgICAgX2V2ZW50OiBfZXZlbnRcbiAgICB9OyAvLyBUT0RPOiBkbyBub3QgaGFyZGNvZGUhXG5cbiAgICBpZiAoZ3VhcmQudHlwZSA9PT0gREVGQVVMVF9HVUFSRF9UWVBFKSB7XG4gICAgICByZXR1cm4gZ3VhcmQucHJlZGljYXRlKGNvbnRleHQsIF9ldmVudC5kYXRhLCBndWFyZE1ldGEpO1xuICAgIH1cblxuICAgIHZhciBjb25kRm4gPSBndWFyZHNbZ3VhcmQudHlwZV07XG5cbiAgICBpZiAoIWNvbmRGbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR3VhcmQgJ1wiICsgZ3VhcmQudHlwZSArIFwiJyBpcyBub3QgaW1wbGVtZW50ZWQgb24gbWFjaGluZSAnXCIgKyB0aGlzLm1hY2hpbmUuaWQgKyBcIicuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25kRm4oY29udGV4dCwgX2V2ZW50LmRhdGEsIGd1YXJkTWV0YSk7XG4gIH07XG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5nZXRBY3Rpb25zID0gZnVuY3Rpb24gKHRyYW5zaXRpb24sIGN1cnJlbnRDb250ZXh0LCBfZXZlbnQsIHByZXZTdGF0ZSkge1xuICAgIHZhciBlXzQsIF9hLCBlXzUsIF9iO1xuXG4gICAgdmFyIHByZXZDb25maWcgPSBnZXRDb25maWd1cmF0aW9uKFtdLCBwcmV2U3RhdGUgPyB0aGlzLmdldFN0YXRlTm9kZXMocHJldlN0YXRlLnZhbHVlKSA6IFt0aGlzXSk7XG4gICAgdmFyIHJlc29sdmVkQ29uZmlnID0gdHJhbnNpdGlvbi5jb25maWd1cmF0aW9uLmxlbmd0aCA/IGdldENvbmZpZ3VyYXRpb24ocHJldkNvbmZpZywgdHJhbnNpdGlvbi5jb25maWd1cmF0aW9uKSA6IHByZXZDb25maWc7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcmVzb2x2ZWRDb25maWdfMSA9IF9fdmFsdWVzKHJlc29sdmVkQ29uZmlnKSwgcmVzb2x2ZWRDb25maWdfMV8xID0gcmVzb2x2ZWRDb25maWdfMS5uZXh0KCk7ICFyZXNvbHZlZENvbmZpZ18xXzEuZG9uZTsgcmVzb2x2ZWRDb25maWdfMV8xID0gcmVzb2x2ZWRDb25maWdfMS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHNuID0gcmVzb2x2ZWRDb25maWdfMV8xLnZhbHVlO1xuXG4gICAgICAgIGlmICghaGFzKHByZXZDb25maWcsIHNuKSkge1xuICAgICAgICAgIHRyYW5zaXRpb24uZW50cnlTZXQucHVzaChzbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlXzRfMSkge1xuICAgICAgZV80ID0ge1xuICAgICAgICBlcnJvcjogZV80XzFcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChyZXNvbHZlZENvbmZpZ18xXzEgJiYgIXJlc29sdmVkQ29uZmlnXzFfMS5kb25lICYmIChfYSA9IHJlc29sdmVkQ29uZmlnXzEucmV0dXJuKSkgX2EuY2FsbChyZXNvbHZlZENvbmZpZ18xKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlXzQpIHRocm93IGVfNC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcHJldkNvbmZpZ18xID0gX192YWx1ZXMocHJldkNvbmZpZyksIHByZXZDb25maWdfMV8xID0gcHJldkNvbmZpZ18xLm5leHQoKTsgIXByZXZDb25maWdfMV8xLmRvbmU7IHByZXZDb25maWdfMV8xID0gcHJldkNvbmZpZ18xLm5leHQoKSkge1xuICAgICAgICB2YXIgc24gPSBwcmV2Q29uZmlnXzFfMS52YWx1ZTtcblxuICAgICAgICBpZiAoIWhhcyhyZXNvbHZlZENvbmZpZywgc24pIHx8IGhhcyh0cmFuc2l0aW9uLmV4aXRTZXQsIHNuLnBhcmVudCkpIHtcbiAgICAgICAgICB0cmFuc2l0aW9uLmV4aXRTZXQucHVzaChzbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlXzVfMSkge1xuICAgICAgZV81ID0ge1xuICAgICAgICBlcnJvcjogZV81XzFcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChwcmV2Q29uZmlnXzFfMSAmJiAhcHJldkNvbmZpZ18xXzEuZG9uZSAmJiAoX2IgPSBwcmV2Q29uZmlnXzEucmV0dXJuKSkgX2IuY2FsbChwcmV2Q29uZmlnXzEpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGVfNSkgdGhyb3cgZV81LmVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdHJhbnNpdGlvbi5zb3VyY2UpIHtcbiAgICAgIHRyYW5zaXRpb24uZXhpdFNldCA9IFtdOyAvLyBFbnN1cmUgdGhhdCByb290IFN0YXRlTm9kZSAobWFjaGluZSkgaXMgZW50ZXJlZFxuXG4gICAgICB0cmFuc2l0aW9uLmVudHJ5U2V0LnB1c2godGhpcyk7XG4gICAgfVxuXG4gICAgdmFyIGRvbmVFdmVudHMgPSBmbGF0dGVuKHRyYW5zaXRpb24uZW50cnlTZXQubWFwKGZ1bmN0aW9uIChzbikge1xuICAgICAgdmFyIGV2ZW50cyA9IFtdO1xuXG4gICAgICBpZiAoc24udHlwZSAhPT0gJ2ZpbmFsJykge1xuICAgICAgICByZXR1cm4gZXZlbnRzO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFyZW50ID0gc24ucGFyZW50O1xuICAgICAgZXZlbnRzLnB1c2goZG9uZShzbi5pZCwgc24uZGF0YSksIC8vIFRPRE86IGRlcHJlY2F0ZSAtIGZpbmFsIHN0YXRlcyBzaG91bGQgbm90IGVtaXQgZG9uZSBldmVudHMgZm9yIHRoZWlyIG93biBzdGF0ZS5cbiAgICAgIGRvbmUocGFyZW50LmlkLCBzbi5kYXRhID8gbWFwQ29udGV4dChzbi5kYXRhLCBjdXJyZW50Q29udGV4dCwgX2V2ZW50KSA6IHVuZGVmaW5lZCkpO1xuXG4gICAgICBpZiAocGFyZW50LnBhcmVudCkge1xuICAgICAgICB2YXIgZ3JhbmRwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuXG4gICAgICAgIGlmIChncmFuZHBhcmVudC50eXBlID09PSAncGFyYWxsZWwnKSB7XG4gICAgICAgICAgaWYgKGdldENoaWxkcmVuKGdyYW5kcGFyZW50KS5ldmVyeShmdW5jdGlvbiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIGlzSW5GaW5hbFN0YXRlKHRyYW5zaXRpb24uY29uZmlndXJhdGlvbiwgcGFyZW50Tm9kZSk7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGV2ZW50cy5wdXNoKGRvbmUoZ3JhbmRwYXJlbnQuaWQsIGdyYW5kcGFyZW50LmRhdGEpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2ZW50cztcbiAgICB9KSk7XG4gICAgdHJhbnNpdGlvbi5leGl0U2V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBiLm9yZGVyIC0gYS5vcmRlcjtcbiAgICB9KTtcbiAgICB0cmFuc2l0aW9uLmVudHJ5U2V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcbiAgICB9KTtcbiAgICB2YXIgZW50cnlTdGF0ZXMgPSBuZXcgU2V0KHRyYW5zaXRpb24uZW50cnlTZXQpO1xuICAgIHZhciBleGl0U3RhdGVzID0gbmV3IFNldCh0cmFuc2l0aW9uLmV4aXRTZXQpO1xuXG4gICAgdmFyIF9jID0gX19yZWFkKFtmbGF0dGVuKEFycmF5LmZyb20oZW50cnlTdGF0ZXMpLm1hcChmdW5jdGlvbiAoc3RhdGVOb2RlKSB7XG4gICAgICByZXR1cm4gX19zcHJlYWQoc3RhdGVOb2RlLmFjdGl2aXRpZXMubWFwKGZ1bmN0aW9uIChhY3Rpdml0eSkge1xuICAgICAgICByZXR1cm4gc3RhcnQoYWN0aXZpdHkpO1xuICAgICAgfSksIHN0YXRlTm9kZS5vbkVudHJ5KTtcbiAgICB9KSkuY29uY2F0KGRvbmVFdmVudHMubWFwKHJhaXNlKSksIGZsYXR0ZW4oQXJyYXkuZnJvbShleGl0U3RhdGVzKS5tYXAoZnVuY3Rpb24gKHN0YXRlTm9kZSkge1xuICAgICAgcmV0dXJuIF9fc3ByZWFkKHN0YXRlTm9kZS5vbkV4aXQsIHN0YXRlTm9kZS5hY3Rpdml0aWVzLm1hcChmdW5jdGlvbiAoYWN0aXZpdHkpIHtcbiAgICAgICAgcmV0dXJuIHN0b3AoYWN0aXZpdHkpO1xuICAgICAgfSkpO1xuICAgIH0pKV0sIDIpLFxuICAgICAgICBlbnRyeUFjdGlvbnMgPSBfY1swXSxcbiAgICAgICAgZXhpdEFjdGlvbnMgPSBfY1sxXTtcblxuICAgIHZhciBhY3Rpb25zID0gdG9BY3Rpb25PYmplY3RzKGV4aXRBY3Rpb25zLmNvbmNhdCh0cmFuc2l0aW9uLmFjdGlvbnMpLmNvbmNhdChlbnRyeUFjdGlvbnMpLCB0aGlzLm1hY2hpbmUub3B0aW9ucy5hY3Rpb25zKTtcbiAgICByZXR1cm4gYWN0aW9ucztcbiAgfTtcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyB0aGUgbmV4dCBzdGF0ZSBnaXZlbiB0aGUgY3VycmVudCBgc3RhdGVgIGFuZCBzZW50IGBldmVudGAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RhdGUgVGhlIGN1cnJlbnQgU3RhdGUgaW5zdGFuY2Ugb3Igc3RhdGUgdmFsdWVcclxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgd2FzIHNlbnQgYXQgdGhlIGN1cnJlbnQgc3RhdGVcclxuICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IChleHRlbmRlZCBzdGF0ZSkgb2YgdGhlIGN1cnJlbnQgc3RhdGVcclxuICAgKi9cblxuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUudHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChzdGF0ZSwgZXZlbnQsIGNvbnRleHQpIHtcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZTtcbiAgICB9XG5cbiAgICB2YXIgX2V2ZW50ID0gdG9TQ1hNTEV2ZW50KGV2ZW50KTtcblxuICAgIHZhciBjdXJyZW50U3RhdGU7XG5cbiAgICBpZiAoc3RhdGUgaW5zdGFuY2VvZiBTdGF0ZSkge1xuICAgICAgY3VycmVudFN0YXRlID0gY29udGV4dCA9PT0gdW5kZWZpbmVkID8gc3RhdGUgOiB0aGlzLnJlc29sdmVTdGF0ZShTdGF0ZS5mcm9tKHN0YXRlLCBjb250ZXh0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXNvbHZlZFN0YXRlVmFsdWUgPSBpc1N0cmluZyhzdGF0ZSkgPyB0aGlzLnJlc29sdmUocGF0aFRvU3RhdGVWYWx1ZSh0aGlzLmdldFJlc29sdmVkUGF0aChzdGF0ZSkpKSA6IHRoaXMucmVzb2x2ZShzdGF0ZSk7XG4gICAgICB2YXIgcmVzb2x2ZWRDb250ZXh0ID0gY29udGV4dCA/IGNvbnRleHQgOiB0aGlzLm1hY2hpbmUuY29udGV4dDtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IHRoaXMucmVzb2x2ZVN0YXRlKFN0YXRlLmZyb20ocmVzb2x2ZWRTdGF0ZVZhbHVlLCByZXNvbHZlZENvbnRleHQpKTtcbiAgICB9XG5cbiAgICBpZiAoIUlTX1BST0RVQ1RJT04gJiYgX2V2ZW50Lm5hbWUgPT09IFdJTERDQVJEKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbiBldmVudCBjYW5ub3QgaGF2ZSB0aGUgd2lsZGNhcmQgdHlwZSAoJ1wiICsgV0lMRENBUkQgKyBcIicpXCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0cmljdCkge1xuICAgICAgaWYgKCF0aGlzLmV2ZW50cy5pbmNsdWRlcyhfZXZlbnQubmFtZSkgJiYgIWlzQnVpbHRJbkV2ZW50KF9ldmVudC5uYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYWNoaW5lICdcIiArIHRoaXMuaWQgKyBcIicgZG9lcyBub3QgYWNjZXB0IGV2ZW50ICdcIiArIF9ldmVudC5uYW1lICsgXCInXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzdGF0ZVRyYW5zaXRpb24gPSB0aGlzLl90cmFuc2l0aW9uKGN1cnJlbnRTdGF0ZS52YWx1ZSwgY3VycmVudFN0YXRlLCBfZXZlbnQpIHx8IHtcbiAgICAgIHRyYW5zaXRpb25zOiBbXSxcbiAgICAgIGNvbmZpZ3VyYXRpb246IFtdLFxuICAgICAgZW50cnlTZXQ6IFtdLFxuICAgICAgZXhpdFNldDogW10sXG4gICAgICBzb3VyY2U6IGN1cnJlbnRTdGF0ZSxcbiAgICAgIGFjdGlvbnM6IFtdXG4gICAgfTtcbiAgICB2YXIgcHJldkNvbmZpZyA9IGdldENvbmZpZ3VyYXRpb24oW10sIHRoaXMuZ2V0U3RhdGVOb2RlcyhjdXJyZW50U3RhdGUudmFsdWUpKTtcbiAgICB2YXIgcmVzb2x2ZWRDb25maWcgPSBzdGF0ZVRyYW5zaXRpb24uY29uZmlndXJhdGlvbi5sZW5ndGggPyBnZXRDb25maWd1cmF0aW9uKHByZXZDb25maWcsIHN0YXRlVHJhbnNpdGlvbi5jb25maWd1cmF0aW9uKSA6IHByZXZDb25maWc7XG4gICAgc3RhdGVUcmFuc2l0aW9uLmNvbmZpZ3VyYXRpb24gPSBfX3NwcmVhZChyZXNvbHZlZENvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZVRyYW5zaXRpb24oc3RhdGVUcmFuc2l0aW9uLCBjdXJyZW50U3RhdGUsIF9ldmVudCk7XG4gIH07XG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5yZXNvbHZlUmFpc2VkVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChzdGF0ZSwgX2V2ZW50LCBvcmlnaW5hbEV2ZW50KSB7XG4gICAgdmFyIF9hO1xuXG4gICAgdmFyIGN1cnJlbnRBY3Rpb25zID0gc3RhdGUuYWN0aW9ucztcbiAgICBzdGF0ZSA9IHRoaXMudHJhbnNpdGlvbihzdGF0ZSwgX2V2ZW50KTsgLy8gU2F2ZSBvcmlnaW5hbCBldmVudCB0byBzdGF0ZVxuXG4gICAgc3RhdGUuX2V2ZW50ID0gb3JpZ2luYWxFdmVudDtcbiAgICBzdGF0ZS5ldmVudCA9IG9yaWdpbmFsRXZlbnQuZGF0YTtcblxuICAgIChfYSA9IHN0YXRlLmFjdGlvbnMpLnVuc2hpZnQuYXBwbHkoX2EsIF9fc3ByZWFkKGN1cnJlbnRBY3Rpb25zKSk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5yZXNvbHZlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChzdGF0ZVRyYW5zaXRpb24sIGN1cnJlbnRTdGF0ZSwgX2V2ZW50LCBjb250ZXh0KSB7XG4gICAgdmFyIGVfNiwgX2E7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKF9ldmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICBfZXZlbnQgPSBpbml0RXZlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgICAgY29udGV4dCA9IHRoaXMubWFjaGluZS5jb250ZXh0O1xuICAgIH1cblxuICAgIHZhciBjb25maWd1cmF0aW9uID0gc3RhdGVUcmFuc2l0aW9uLmNvbmZpZ3VyYXRpb247IC8vIFRyYW5zaXRpb24gd2lsbCBcImFwcGx5XCIgaWY6XG4gICAgLy8gLSB0aGlzIGlzIHRoZSBpbml0aWFsIHN0YXRlICh0aGVyZSBpcyBubyBjdXJyZW50IHN0YXRlKVxuICAgIC8vIC0gT1IgdGhlcmUgYXJlIHRyYW5zaXRpb25zXG5cbiAgICB2YXIgd2lsbFRyYW5zaXRpb24gPSAhY3VycmVudFN0YXRlIHx8IHN0YXRlVHJhbnNpdGlvbi50cmFuc2l0aW9ucy5sZW5ndGggPiAwO1xuICAgIHZhciByZXNvbHZlZFN0YXRlVmFsdWUgPSB3aWxsVHJhbnNpdGlvbiA/IGdldFZhbHVlKHRoaXMubWFjaGluZSwgY29uZmlndXJhdGlvbikgOiB1bmRlZmluZWQ7XG4gICAgdmFyIGhpc3RvcnlWYWx1ZSA9IGN1cnJlbnRTdGF0ZSA/IGN1cnJlbnRTdGF0ZS5oaXN0b3J5VmFsdWUgPyBjdXJyZW50U3RhdGUuaGlzdG9yeVZhbHVlIDogc3RhdGVUcmFuc2l0aW9uLnNvdXJjZSA/IHRoaXMubWFjaGluZS5oaXN0b3J5VmFsdWUoY3VycmVudFN0YXRlLnZhbHVlKSA6IHVuZGVmaW5lZCA6IHVuZGVmaW5lZDtcbiAgICB2YXIgY3VycmVudENvbnRleHQgPSBjdXJyZW50U3RhdGUgPyBjdXJyZW50U3RhdGUuY29udGV4dCA6IGNvbnRleHQ7XG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnMoc3RhdGVUcmFuc2l0aW9uLCBjdXJyZW50Q29udGV4dCwgX2V2ZW50LCBjdXJyZW50U3RhdGUpO1xuICAgIHZhciBhY3Rpdml0aWVzID0gY3VycmVudFN0YXRlID8gX19hc3NpZ24oe30sIGN1cnJlbnRTdGF0ZS5hY3Rpdml0aWVzKSA6IHt9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGFjdGlvbnNfMSA9IF9fdmFsdWVzKGFjdGlvbnMpLCBhY3Rpb25zXzFfMSA9IGFjdGlvbnNfMS5uZXh0KCk7ICFhY3Rpb25zXzFfMS5kb25lOyBhY3Rpb25zXzFfMSA9IGFjdGlvbnNfMS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IGFjdGlvbnNfMV8xLnZhbHVlO1xuXG4gICAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gc3RhcnQkMSkge1xuICAgICAgICAgIGFjdGl2aXRpZXNbYWN0aW9uLmFjdGl2aXR5LnR5cGVdID0gYWN0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBzdG9wJDEpIHtcbiAgICAgICAgICBhY3Rpdml0aWVzW2FjdGlvbi5hY3Rpdml0eS50eXBlXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZV82XzEpIHtcbiAgICAgIGVfNiA9IHtcbiAgICAgICAgZXJyb3I6IGVfNl8xXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoYWN0aW9uc18xXzEgJiYgIWFjdGlvbnNfMV8xLmRvbmUgJiYgKF9hID0gYWN0aW9uc18xLnJldHVybikpIF9hLmNhbGwoYWN0aW9uc18xKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlXzYpIHRocm93IGVfNi5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX2IgPSBfX3JlYWQocGFydGl0aW9uKGFjdGlvbnMsIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIHJldHVybiBhY3Rpb24udHlwZSA9PT0gYXNzaWduO1xuICAgIH0pLCAyKSxcbiAgICAgICAgYXNzaWduQWN0aW9ucyA9IF9iWzBdLFxuICAgICAgICBvdGhlckFjdGlvbnMgPSBfYlsxXTtcblxuICAgIHZhciB1cGRhdGVkQ29udGV4dCA9IGFzc2lnbkFjdGlvbnMubGVuZ3RoID8gdXBkYXRlQ29udGV4dChjdXJyZW50Q29udGV4dCwgX2V2ZW50LCBhc3NpZ25BY3Rpb25zLCBjdXJyZW50U3RhdGUpIDogY3VycmVudENvbnRleHQ7XG4gICAgdmFyIHJlc29sdmVkQWN0aW9ucyA9IGZsYXR0ZW4ob3RoZXJBY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uT2JqZWN0KSB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbk9iamVjdC50eXBlKSB7XG4gICAgICAgIGNhc2UgcmFpc2UkMTpcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZVJhaXNlKGFjdGlvbk9iamVjdCk7XG5cbiAgICAgICAgY2FzZSBzZW5kOlxuICAgICAgICAgIHZhciBzZW5kQWN0aW9uID0gcmVzb2x2ZVNlbmQoYWN0aW9uT2JqZWN0LCB1cGRhdGVkQ29udGV4dCwgX2V2ZW50LCBfdGhpcy5tYWNoaW5lLm9wdGlvbnMuZGVsYXlzKTsgLy8gVE9ETzogZml4IEFjdGlvblR5cGVzLkluaXRcblxuICAgICAgICAgIGlmICghSVNfUFJPRFVDVElPTikge1xuICAgICAgICAgICAgLy8gd2FybiBhZnRlciByZXNvbHZpbmcgYXMgd2UgY2FuIGNyZWF0ZSBiZXR0ZXIgY29udGV4dHVhbCBtZXNzYWdlIGhlcmVcbiAgICAgICAgICAgIHdhcm4oIWlzU3RyaW5nKGFjdGlvbk9iamVjdC5kZWxheSkgfHwgdHlwZW9mIHNlbmRBY3Rpb24uZGVsYXkgPT09ICdudW1iZXInLCAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICBcIk5vIGRlbGF5IHJlZmVyZW5jZSBmb3IgZGVsYXkgZXhwcmVzc2lvbiAnXCIgKyBhY3Rpb25PYmplY3QuZGVsYXkgKyBcIicgd2FzIGZvdW5kIG9uIG1hY2hpbmUgJ1wiICsgX3RoaXMubWFjaGluZS5pZCArIFwiJ1wiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc2VuZEFjdGlvbjtcblxuICAgICAgICBjYXNlIGxvZzpcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZUxvZyhhY3Rpb25PYmplY3QsIHVwZGF0ZWRDb250ZXh0LCBfZXZlbnQpO1xuXG4gICAgICAgIGNhc2UgcHVyZTpcbiAgICAgICAgICByZXR1cm4gYWN0aW9uT2JqZWN0LmdldCh1cGRhdGVkQ29udGV4dCwgX2V2ZW50LmRhdGEpIHx8IFtdO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHRvQWN0aW9uT2JqZWN0KGFjdGlvbk9iamVjdCwgX3RoaXMub3B0aW9ucy5hY3Rpb25zKTtcbiAgICAgIH1cbiAgICB9KSk7XG5cbiAgICB2YXIgX2MgPSBfX3JlYWQocGFydGl0aW9uKHJlc29sdmVkQWN0aW9ucywgZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgcmV0dXJuIGFjdGlvbi50eXBlID09PSByYWlzZSQxIHx8IGFjdGlvbi50eXBlID09PSBzZW5kICYmIGFjdGlvbi50byA9PT0gU3BlY2lhbFRhcmdldHMuSW50ZXJuYWw7XG4gICAgfSksIDIpLFxuICAgICAgICByYWlzZWRFdmVudHMgPSBfY1swXSxcbiAgICAgICAgbm9uUmFpc2VkQWN0aW9ucyA9IF9jWzFdO1xuXG4gICAgdmFyIGludm9rZUFjdGlvbnMgPSByZXNvbHZlZEFjdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIHJldHVybiBhY3Rpb24udHlwZSA9PT0gc3RhcnQkMSAmJiBhY3Rpb24uYWN0aXZpdHkudHlwZSA9PT0gaW52b2tlO1xuICAgIH0pO1xuICAgIHZhciBjaGlsZHJlbiA9IGludm9rZUFjdGlvbnMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGFjdGlvbikge1xuICAgICAgYWNjW2FjdGlvbi5hY3Rpdml0eS5pZF0gPSBjcmVhdGVJbnZvY2FibGVBY3RvcihhY3Rpb24uYWN0aXZpdHkpO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBjdXJyZW50U3RhdGUgPyBfX2Fzc2lnbih7fSwgY3VycmVudFN0YXRlLmNoaWxkcmVuKSA6IHt9KTtcbiAgICB2YXIgcmVzb2x2ZWRDb25maWd1cmF0aW9uID0gcmVzb2x2ZWRTdGF0ZVZhbHVlID8gc3RhdGVUcmFuc2l0aW9uLmNvbmZpZ3VyYXRpb24gOiBjdXJyZW50U3RhdGUgPyBjdXJyZW50U3RhdGUuY29uZmlndXJhdGlvbiA6IFtdO1xuICAgIHZhciBtZXRhID0gcmVzb2x2ZWRDb25maWd1cmF0aW9uLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzdGF0ZU5vZGUpIHtcbiAgICAgIGlmIChzdGF0ZU5vZGUubWV0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFjY1tzdGF0ZU5vZGUuaWRdID0gc3RhdGVOb2RlLm1ldGE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIHZhciBpc0RvbmUgPSBpc0luRmluYWxTdGF0ZShyZXNvbHZlZENvbmZpZ3VyYXRpb24sIHRoaXMpO1xuICAgIHZhciBuZXh0U3RhdGUgPSBuZXcgU3RhdGUoe1xuICAgICAgdmFsdWU6IHJlc29sdmVkU3RhdGVWYWx1ZSB8fCBjdXJyZW50U3RhdGUudmFsdWUsXG4gICAgICBjb250ZXh0OiB1cGRhdGVkQ29udGV4dCxcbiAgICAgIF9ldmVudDogX2V2ZW50LFxuICAgICAgLy8gUGVyc2lzdCBfc2Vzc2lvbmlkIGJldHdlZW4gc3RhdGVzXG4gICAgICBfc2Vzc2lvbmlkOiBjdXJyZW50U3RhdGUgPyBjdXJyZW50U3RhdGUuX3Nlc3Npb25pZCA6IG51bGwsXG4gICAgICBoaXN0b3J5VmFsdWU6IHJlc29sdmVkU3RhdGVWYWx1ZSA/IGhpc3RvcnlWYWx1ZSA/IHVwZGF0ZUhpc3RvcnlWYWx1ZShoaXN0b3J5VmFsdWUsIHJlc29sdmVkU3RhdGVWYWx1ZSkgOiB1bmRlZmluZWQgOiBjdXJyZW50U3RhdGUgPyBjdXJyZW50U3RhdGUuaGlzdG9yeVZhbHVlIDogdW5kZWZpbmVkLFxuICAgICAgaGlzdG9yeTogIXJlc29sdmVkU3RhdGVWYWx1ZSB8fCBzdGF0ZVRyYW5zaXRpb24uc291cmNlID8gY3VycmVudFN0YXRlIDogdW5kZWZpbmVkLFxuICAgICAgYWN0aW9uczogcmVzb2x2ZWRTdGF0ZVZhbHVlID8gbm9uUmFpc2VkQWN0aW9ucyA6IFtdLFxuICAgICAgYWN0aXZpdGllczogcmVzb2x2ZWRTdGF0ZVZhbHVlID8gYWN0aXZpdGllcyA6IGN1cnJlbnRTdGF0ZSA/IGN1cnJlbnRTdGF0ZS5hY3Rpdml0aWVzIDoge30sXG4gICAgICBtZXRhOiByZXNvbHZlZFN0YXRlVmFsdWUgPyBtZXRhIDogY3VycmVudFN0YXRlID8gY3VycmVudFN0YXRlLm1ldGEgOiB1bmRlZmluZWQsXG4gICAgICBldmVudHM6IFtdLFxuICAgICAgY29uZmlndXJhdGlvbjogcmVzb2x2ZWRDb25maWd1cmF0aW9uLFxuICAgICAgdHJhbnNpdGlvbnM6IHN0YXRlVHJhbnNpdGlvbi50cmFuc2l0aW9ucyxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgIGRvbmU6IGlzRG9uZVxuICAgIH0pO1xuICAgIG5leHRTdGF0ZS5jaGFuZ2VkID0gX2V2ZW50Lm5hbWUgPT09IHVwZGF0ZSB8fCAhIWFzc2lnbkFjdGlvbnMubGVuZ3RoOyAvLyBEaXNwb3NlIG9mIHBlbnVsdGltYXRlIGhpc3RvcmllcyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuXG4gICAgdmFyIGhpc3RvcnkgPSBuZXh0U3RhdGUuaGlzdG9yeTtcblxuICAgIGlmIChoaXN0b3J5KSB7XG4gICAgICBkZWxldGUgaGlzdG9yeS5oaXN0b3J5O1xuICAgIH1cblxuICAgIGlmICghcmVzb2x2ZWRTdGF0ZVZhbHVlKSB7XG4gICAgICByZXR1cm4gbmV4dFN0YXRlO1xuICAgIH1cblxuICAgIHZhciBtYXliZU5leHRTdGF0ZSA9IG5leHRTdGF0ZTtcblxuICAgIGlmICghaXNEb25lKSB7XG4gICAgICB2YXIgaXNUcmFuc2llbnQgPSB0aGlzLl90cmFuc2llbnQgfHwgY29uZmlndXJhdGlvbi5zb21lKGZ1bmN0aW9uIChzdGF0ZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlTm9kZS5fdHJhbnNpZW50O1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChpc1RyYW5zaWVudCkge1xuICAgICAgICBtYXliZU5leHRTdGF0ZSA9IHRoaXMucmVzb2x2ZVJhaXNlZFRyYW5zaXRpb24obWF5YmVOZXh0U3RhdGUsIHtcbiAgICAgICAgICB0eXBlOiBudWxsRXZlbnRcbiAgICAgICAgfSwgX2V2ZW50KTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHJhaXNlZEV2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHJhaXNlZEV2ZW50ID0gcmFpc2VkRXZlbnRzLnNoaWZ0KCk7XG4gICAgICAgIG1heWJlTmV4dFN0YXRlID0gdGhpcy5yZXNvbHZlUmFpc2VkVHJhbnNpdGlvbihtYXliZU5leHRTdGF0ZSwgcmFpc2VkRXZlbnQuX2V2ZW50LCBfZXZlbnQpO1xuICAgICAgfVxuICAgIH0gLy8gRGV0ZWN0IGlmIHN0YXRlIGNoYW5nZWRcblxuXG4gICAgdmFyIGNoYW5nZWQgPSBtYXliZU5leHRTdGF0ZS5jaGFuZ2VkIHx8IChoaXN0b3J5ID8gISFtYXliZU5leHRTdGF0ZS5hY3Rpb25zLmxlbmd0aCB8fCAhIWFzc2lnbkFjdGlvbnMubGVuZ3RoIHx8IHR5cGVvZiBoaXN0b3J5LnZhbHVlICE9PSB0eXBlb2YgbWF5YmVOZXh0U3RhdGUudmFsdWUgfHwgIXN0YXRlVmFsdWVzRXF1YWwobWF5YmVOZXh0U3RhdGUudmFsdWUsIGhpc3RvcnkudmFsdWUpIDogdW5kZWZpbmVkKTtcbiAgICBtYXliZU5leHRTdGF0ZS5jaGFuZ2VkID0gY2hhbmdlZDsgLy8gUHJlc2VydmUgb3JpZ2luYWwgaGlzdG9yeSBhZnRlciByYWlzZWQgZXZlbnRzXG5cbiAgICBtYXliZU5leHRTdGF0ZS5oaXN0b3J5VmFsdWUgPSBuZXh0U3RhdGUuaGlzdG9yeVZhbHVlO1xuICAgIG1heWJlTmV4dFN0YXRlLmhpc3RvcnkgPSBoaXN0b3J5O1xuICAgIHJldHVybiBtYXliZU5leHRTdGF0ZTtcbiAgfTtcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgY2hpbGQgc3RhdGUgbm9kZSBmcm9tIGl0cyByZWxhdGl2ZSBgc3RhdGVLZXlgLCBvciB0aHJvd3MuXHJcbiAgICovXG5cblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLmdldFN0YXRlTm9kZSA9IGZ1bmN0aW9uIChzdGF0ZUtleSkge1xuICAgIGlmIChpc1N0YXRlSWQoc3RhdGVLZXkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYWNoaW5lLmdldFN0YXRlTm9kZUJ5SWQoc3RhdGVLZXkpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zdGF0ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byByZXRyaWV2ZSBjaGlsZCBzdGF0ZSAnXCIgKyBzdGF0ZUtleSArIFwiJyBmcm9tICdcIiArIHRoaXMuaWQgKyBcIic7IG5vIGNoaWxkIHN0YXRlcyBleGlzdC5cIik7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuc3RhdGVzW3N0YXRlS2V5XTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDaGlsZCBzdGF0ZSAnXCIgKyBzdGF0ZUtleSArIFwiJyBkb2VzIG5vdCBleGlzdCBvbiAnXCIgKyB0aGlzLmlkICsgXCInXCIpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHN0YXRlIG5vZGUgd2l0aCB0aGUgZ2l2ZW4gYHN0YXRlSWRgLCBvciB0aHJvd3MuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RhdGVJZCBUaGUgc3RhdGUgSUQuIFRoZSBwcmVmaXggXCIjXCIgaXMgcmVtb3ZlZC5cclxuICAgKi9cblxuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUuZ2V0U3RhdGVOb2RlQnlJZCA9IGZ1bmN0aW9uIChzdGF0ZUlkKSB7XG4gICAgdmFyIHJlc29sdmVkU3RhdGVJZCA9IGlzU3RhdGVJZChzdGF0ZUlkKSA/IHN0YXRlSWQuc2xpY2UoU1RBVEVfSURFTlRJRklFUi5sZW5ndGgpIDogc3RhdGVJZDtcblxuICAgIGlmIChyZXNvbHZlZFN0YXRlSWQgPT09IHRoaXMuaWQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZU5vZGUgPSB0aGlzLm1hY2hpbmUuaWRNYXBbcmVzb2x2ZWRTdGF0ZUlkXTtcblxuICAgIGlmICghc3RhdGVOb2RlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDaGlsZCBzdGF0ZSBub2RlICcjXCIgKyByZXNvbHZlZFN0YXRlSWQgKyBcIicgZG9lcyBub3QgZXhpc3Qgb24gbWFjaGluZSAnXCIgKyB0aGlzLmlkICsgXCInXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZU5vZGU7XG4gIH07XG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHJlbGF0aXZlIHN0YXRlIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gYHN0YXRlUGF0aGAsIG9yIHRocm93cy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdGF0ZVBhdGggVGhlIHN0cmluZyBvciBzdHJpbmcgYXJyYXkgcmVsYXRpdmUgcGF0aCB0byB0aGUgc3RhdGUgbm9kZS5cclxuICAgKi9cblxuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUuZ2V0U3RhdGVOb2RlQnlQYXRoID0gZnVuY3Rpb24gKHN0YXRlUGF0aCkge1xuICAgIGlmICh0eXBlb2Ygc3RhdGVQYXRoID09PSAnc3RyaW5nJyAmJiBpc1N0YXRlSWQoc3RhdGVQYXRoKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhdGVOb2RlQnlJZChzdGF0ZVBhdGguc2xpY2UoMSkpO1xuICAgICAgfSBjYXRjaCAoZSkgey8vIHRyeSBpbmRpdmlkdWFsIHBhdGhzXG4gICAgICAgIC8vIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFycmF5U3RhdGVQYXRoID0gdG9TdGF0ZVBhdGgoc3RhdGVQYXRoLCB0aGlzLmRlbGltaXRlcikuc2xpY2UoKTtcbiAgICB2YXIgY3VycmVudFN0YXRlTm9kZSA9IHRoaXM7XG5cbiAgICB3aGlsZSAoYXJyYXlTdGF0ZVBhdGgubGVuZ3RoKSB7XG4gICAgICB2YXIga2V5ID0gYXJyYXlTdGF0ZVBhdGguc2hpZnQoKTtcblxuICAgICAgaWYgKCFrZXkubGVuZ3RoKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50U3RhdGVOb2RlID0gY3VycmVudFN0YXRlTm9kZS5nZXRTdGF0ZU5vZGUoa2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudFN0YXRlTm9kZTtcbiAgfTtcbiAgLyoqXHJcbiAgICogUmVzb2x2ZXMgYSBwYXJ0aWFsIHN0YXRlIHZhbHVlIHdpdGggaXRzIGZ1bGwgcmVwcmVzZW50YXRpb24gaW4gdGhpcyBtYWNoaW5lLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN0YXRlVmFsdWUgVGhlIHBhcnRpYWwgc3RhdGUgdmFsdWUgdG8gcmVzb2x2ZS5cclxuICAgKi9cblxuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uIChzdGF0ZVZhbHVlKSB7XG4gICAgdmFyIF9hO1xuXG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICghc3RhdGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbFN0YXRlVmFsdWUgfHwgRU1QVFlfT0JKRUNUOyAvLyBUT0RPOiB0eXBlLXNwZWNpZmljIHByb3BlcnRpZXNcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSAncGFyYWxsZWwnOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWVzKHRoaXMuaW5pdGlhbFN0YXRlVmFsdWUsIGZ1bmN0aW9uIChzdWJTdGF0ZVZhbHVlLCBzdWJTdGF0ZUtleSkge1xuICAgICAgICAgIHJldHVybiBzdWJTdGF0ZVZhbHVlID8gX3RoaXMuZ2V0U3RhdGVOb2RlKHN1YlN0YXRlS2V5KS5yZXNvbHZlKHN0YXRlVmFsdWVbc3ViU3RhdGVLZXldIHx8IHN1YlN0YXRlVmFsdWUpIDogRU1QVFlfT0JKRUNUO1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY29tcG91bmQnOlxuICAgICAgICBpZiAoaXNTdHJpbmcoc3RhdGVWYWx1ZSkpIHtcbiAgICAgICAgICB2YXIgc3ViU3RhdGVOb2RlID0gdGhpcy5nZXRTdGF0ZU5vZGUoc3RhdGVWYWx1ZSk7XG5cbiAgICAgICAgICBpZiAoc3ViU3RhdGVOb2RlLnR5cGUgPT09ICdwYXJhbGxlbCcgfHwgc3ViU3RhdGVOb2RlLnR5cGUgPT09ICdjb21wb3VuZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBfYSA9IHt9LCBfYVtzdGF0ZVZhbHVlXSA9IHN1YlN0YXRlTm9kZS5pbml0aWFsU3RhdGVWYWx1ZSwgX2E7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0YXRlVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWtleXMoc3RhdGVWYWx1ZSkubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbFN0YXRlVmFsdWUgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFwVmFsdWVzKHN0YXRlVmFsdWUsIGZ1bmN0aW9uIChzdWJTdGF0ZVZhbHVlLCBzdWJTdGF0ZUtleSkge1xuICAgICAgICAgIHJldHVybiBzdWJTdGF0ZVZhbHVlID8gX3RoaXMuZ2V0U3RhdGVOb2RlKHN1YlN0YXRlS2V5KS5yZXNvbHZlKHN1YlN0YXRlVmFsdWUpIDogRU1QVFlfT0JKRUNUO1xuICAgICAgICB9KTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlVmFsdWUgfHwgRU1QVFlfT0JKRUNUO1xuICAgIH1cbiAgfTtcblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLmdldFJlc29sdmVkUGF0aCA9IGZ1bmN0aW9uIChzdGF0ZUlkZW50aWZpZXIpIHtcbiAgICBpZiAoaXNTdGF0ZUlkKHN0YXRlSWRlbnRpZmllcikpIHtcbiAgICAgIHZhciBzdGF0ZU5vZGUgPSB0aGlzLm1hY2hpbmUuaWRNYXBbc3RhdGVJZGVudGlmaWVyLnNsaWNlKFNUQVRFX0lERU5USUZJRVIubGVuZ3RoKV07XG5cbiAgICAgIGlmICghc3RhdGVOb2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBmaW5kIHN0YXRlIG5vZGUgJ1wiICsgc3RhdGVJZGVudGlmaWVyICsgXCInXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGVOb2RlLnBhdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvU3RhdGVQYXRoKHN0YXRlSWRlbnRpZmllciwgdGhpcy5kZWxpbWl0ZXIpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdGF0ZU5vZGUucHJvdG90eXBlLCBcImluaXRpYWxTdGF0ZVZhbHVlXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfYTtcblxuICAgICAgaWYgKHRoaXMuX19jYWNoZS5pbml0aWFsU3RhdGVWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2NhY2hlLmluaXRpYWxTdGF0ZVZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5pdGlhbFN0YXRlVmFsdWU7XG5cbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdwYXJhbGxlbCcpIHtcbiAgICAgICAgaW5pdGlhbFN0YXRlVmFsdWUgPSBtYXBGaWx0ZXJWYWx1ZXModGhpcy5zdGF0ZXMsIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5pbml0aWFsU3RhdGVWYWx1ZSB8fCBFTVBUWV9PQkpFQ1Q7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChzdGF0ZU5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gIShzdGF0ZU5vZGUudHlwZSA9PT0gJ2hpc3RvcnknKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaW5pdGlhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZXNbdGhpcy5pbml0aWFsXSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluaXRpYWwgc3RhdGUgJ1wiICsgdGhpcy5pbml0aWFsICsgXCInIG5vdCBmb3VuZCBvbiAnXCIgKyB0aGlzLmtleSArIFwiJ1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluaXRpYWxTdGF0ZVZhbHVlID0gaXNMZWFmTm9kZSh0aGlzLnN0YXRlc1t0aGlzLmluaXRpYWxdKSA/IHRoaXMuaW5pdGlhbCA6IChfYSA9IHt9LCBfYVt0aGlzLmluaXRpYWxdID0gdGhpcy5zdGF0ZXNbdGhpcy5pbml0aWFsXS5pbml0aWFsU3RhdGVWYWx1ZSwgX2EpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fY2FjaGUuaW5pdGlhbFN0YXRlVmFsdWUgPSBpbml0aWFsU3RhdGVWYWx1ZTtcbiAgICAgIHJldHVybiB0aGlzLl9fY2FjaGUuaW5pdGlhbFN0YXRlVmFsdWU7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLmdldEluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZVZhbHVlLCBjb250ZXh0KSB7XG4gICAgdmFyIGNvbmZpZ3VyYXRpb24gPSB0aGlzLmdldFN0YXRlTm9kZXMoc3RhdGVWYWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZVRyYW5zaXRpb24oe1xuICAgICAgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbixcbiAgICAgIGVudHJ5U2V0OiBjb25maWd1cmF0aW9uLFxuICAgICAgZXhpdFNldDogW10sXG4gICAgICB0cmFuc2l0aW9uczogW10sXG4gICAgICBzb3VyY2U6IHVuZGVmaW5lZCxcbiAgICAgIGFjdGlvbnM6IFtdXG4gICAgfSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHQpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdGF0ZU5vZGUucHJvdG90eXBlLCBcImluaXRpYWxTdGF0ZVwiLCB7XG4gICAgLyoqXHJcbiAgICAgKiBUaGUgaW5pdGlhbCBTdGF0ZSBpbnN0YW5jZSwgd2hpY2ggaW5jbHVkZXMgYWxsIGFjdGlvbnMgdG8gYmUgZXhlY3V0ZWQgZnJvbVxyXG4gICAgICogZW50ZXJpbmcgdGhlIGluaXRpYWwgc3RhdGUuXHJcbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX2luaXQoKTtcblxuICAgICAgdmFyIGluaXRpYWxTdGF0ZVZhbHVlID0gdGhpcy5pbml0aWFsU3RhdGVWYWx1ZTtcblxuICAgICAgaWYgKCFpbml0aWFsU3RhdGVWYWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmV0cmlldmUgaW5pdGlhbCBzdGF0ZSBmcm9tIHNpbXBsZSBzdGF0ZSAnXCIgKyB0aGlzLmlkICsgXCInLlwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZVZhbHVlKTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RhdGVOb2RlLnByb3RvdHlwZSwgXCJ0YXJnZXRcIiwge1xuICAgIC8qKlxyXG4gICAgICogVGhlIHRhcmdldCBzdGF0ZSB2YWx1ZSBvZiB0aGUgaGlzdG9yeSBzdGF0ZSBub2RlLCBpZiBpdCBleGlzdHMuIFRoaXMgcmVwcmVzZW50cyB0aGVcclxuICAgICAqIGRlZmF1bHQgc3RhdGUgdmFsdWUgdG8gdHJhbnNpdGlvbiB0byBpZiBubyBoaXN0b3J5IHZhbHVlIGV4aXN0cyB5ZXQuXHJcbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0YXJnZXQ7XG5cbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdoaXN0b3J5Jykge1xuICAgICAgICB2YXIgaGlzdG9yeUNvbmZpZyA9IHRoaXMuY29uZmlnO1xuXG4gICAgICAgIGlmIChpc1N0cmluZyhoaXN0b3J5Q29uZmlnLnRhcmdldCkpIHtcbiAgICAgICAgICB0YXJnZXQgPSBpc1N0YXRlSWQoaGlzdG9yeUNvbmZpZy50YXJnZXQpID8gcGF0aFRvU3RhdGVWYWx1ZSh0aGlzLm1hY2hpbmUuZ2V0U3RhdGVOb2RlQnlJZChoaXN0b3J5Q29uZmlnLnRhcmdldCkucGF0aC5zbGljZSh0aGlzLnBhdGgubGVuZ3RoIC0gMSkpIDogaGlzdG9yeUNvbmZpZy50YXJnZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0ID0gaGlzdG9yeUNvbmZpZy50YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBsZWFmIG5vZGVzIGZyb20gYSBzdGF0ZSBwYXRoIHJlbGF0aXZlIHRvIHRoaXMgc3RhdGUgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSByZWxhdGl2ZVN0YXRlSWQgVGhlIHJlbGF0aXZlIHN0YXRlIHBhdGggdG8gcmV0cmlldmUgdGhlIHN0YXRlIG5vZGVzXHJcbiAgICogQHBhcmFtIGhpc3RvcnkgVGhlIHByZXZpb3VzIHN0YXRlIHRvIHJldHJpZXZlIGhpc3RvcnlcclxuICAgKiBAcGFyYW0gcmVzb2x2ZSBXaGV0aGVyIHN0YXRlIG5vZGVzIHNob3VsZCByZXNvbHZlIHRvIGluaXRpYWwgY2hpbGQgc3RhdGUgbm9kZXNcclxuICAgKi9cblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLmdldFJlbGF0aXZlU3RhdGVOb2RlcyA9IGZ1bmN0aW9uIChyZWxhdGl2ZVN0YXRlSWQsIGhpc3RvcnlWYWx1ZSwgcmVzb2x2ZSkge1xuICAgIGlmIChyZXNvbHZlID09PSB2b2lkIDApIHtcbiAgICAgIHJlc29sdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlID8gcmVsYXRpdmVTdGF0ZUlkLnR5cGUgPT09ICdoaXN0b3J5JyA/IHJlbGF0aXZlU3RhdGVJZC5yZXNvbHZlSGlzdG9yeShoaXN0b3J5VmFsdWUpIDogcmVsYXRpdmVTdGF0ZUlkLmluaXRpYWxTdGF0ZU5vZGVzIDogW3JlbGF0aXZlU3RhdGVJZF07XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0YXRlTm9kZS5wcm90b3R5cGUsIFwiaW5pdGlhbFN0YXRlTm9kZXNcIiwge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKGlzTGVhZk5vZGUodGhpcykpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzXTtcbiAgICAgIH0gLy8gQ2FzZSB3aGVuIHN0YXRlIG5vZGUgaXMgY29tcG91bmQgYnV0IG5vIGluaXRpYWwgc3RhdGUgaXMgZGVmaW5lZFxuXG5cbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdjb21wb3VuZCcgJiYgIXRoaXMuaW5pdGlhbCkge1xuICAgICAgICBpZiAoIUlTX1BST0RVQ1RJT04pIHtcbiAgICAgICAgICB3YXJuKGZhbHNlLCBcIkNvbXBvdW5kIHN0YXRlIG5vZGUgJ1wiICsgdGhpcy5pZCArIFwiJyBoYXMgbm8gaW5pdGlhbCBzdGF0ZS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW3RoaXNdO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5pdGlhbFN0YXRlTm9kZVBhdGhzID0gdG9TdGF0ZVBhdGhzKHRoaXMuaW5pdGlhbFN0YXRlVmFsdWUpO1xuICAgICAgcmV0dXJuIGZsYXR0ZW4oaW5pdGlhbFN0YXRlTm9kZVBhdGhzLm1hcChmdW5jdGlvbiAoaW5pdGlhbFBhdGgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmdldEZyb21SZWxhdGl2ZVBhdGgoaW5pdGlhbFBhdGgpO1xuICAgICAgfSkpO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIC8qKlxyXG4gICAqIFJldHJpZXZlcyBzdGF0ZSBub2RlcyBmcm9tIGEgcmVsYXRpdmUgcGF0aCB0byB0aGlzIHN0YXRlIG5vZGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcmVsYXRpdmVQYXRoIFRoZSByZWxhdGl2ZSBwYXRoIGZyb20gdGhpcyBzdGF0ZSBub2RlXHJcbiAgICogQHBhcmFtIGhpc3RvcnlWYWx1ZVxyXG4gICAqL1xuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUuZ2V0RnJvbVJlbGF0aXZlUGF0aCA9IGZ1bmN0aW9uIChyZWxhdGl2ZVBhdGgpIHtcbiAgICBpZiAoIXJlbGF0aXZlUGF0aC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbdGhpc107XG4gICAgfVxuXG4gICAgdmFyIF9hID0gX19yZWFkKHJlbGF0aXZlUGF0aCksXG4gICAgICAgIHN0YXRlS2V5ID0gX2FbMF0sXG4gICAgICAgIGNoaWxkU3RhdGVQYXRoID0gX2Euc2xpY2UoMSk7XG5cbiAgICBpZiAoIXRoaXMuc3RhdGVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmV0cmlldmUgc3ViUGF0aCAnXCIgKyBzdGF0ZUtleSArIFwiJyBmcm9tIG5vZGUgd2l0aCBubyBzdGF0ZXNcIik7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkU3RhdGVOb2RlID0gdGhpcy5nZXRTdGF0ZU5vZGUoc3RhdGVLZXkpO1xuXG4gICAgaWYgKGNoaWxkU3RhdGVOb2RlLnR5cGUgPT09ICdoaXN0b3J5Jykge1xuICAgICAgcmV0dXJuIGNoaWxkU3RhdGVOb2RlLnJlc29sdmVIaXN0b3J5KCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN0YXRlc1tzdGF0ZUtleV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNoaWxkIHN0YXRlICdcIiArIHN0YXRlS2V5ICsgXCInIGRvZXMgbm90IGV4aXN0IG9uICdcIiArIHRoaXMuaWQgKyBcIidcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGVzW3N0YXRlS2V5XS5nZXRGcm9tUmVsYXRpdmVQYXRoKGNoaWxkU3RhdGVQYXRoKTtcbiAgfTtcblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLmhpc3RvcnlWYWx1ZSA9IGZ1bmN0aW9uIChyZWxhdGl2ZVN0YXRlVmFsdWUpIHtcbiAgICBpZiAoIWtleXModGhpcy5zdGF0ZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudDogcmVsYXRpdmVTdGF0ZVZhbHVlIHx8IHRoaXMuaW5pdGlhbFN0YXRlVmFsdWUsXG4gICAgICBzdGF0ZXM6IG1hcEZpbHRlclZhbHVlcyh0aGlzLnN0YXRlcywgZnVuY3Rpb24gKHN0YXRlTm9kZSwga2V5KSB7XG4gICAgICAgIGlmICghcmVsYXRpdmVTdGF0ZVZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlTm9kZS5oaXN0b3J5VmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdWJTdGF0ZVZhbHVlID0gaXNTdHJpbmcocmVsYXRpdmVTdGF0ZVZhbHVlKSA/IHVuZGVmaW5lZCA6IHJlbGF0aXZlU3RhdGVWYWx1ZVtrZXldO1xuICAgICAgICByZXR1cm4gc3RhdGVOb2RlLmhpc3RvcnlWYWx1ZShzdWJTdGF0ZVZhbHVlIHx8IHN0YXRlTm9kZS5pbml0aWFsU3RhdGVWYWx1ZSk7XG4gICAgICB9LCBmdW5jdGlvbiAoc3RhdGVOb2RlKSB7XG4gICAgICAgIHJldHVybiAhc3RhdGVOb2RlLmhpc3Rvcnk7XG4gICAgICB9KVxuICAgIH07XG4gIH07XG4gIC8qKlxyXG4gICAqIFJlc29sdmVzIHRvIHRoZSBoaXN0b3JpY2FsIHZhbHVlKHMpIG9mIHRoZSBwYXJlbnQgc3RhdGUgbm9kZSxcclxuICAgKiByZXByZXNlbnRlZCBieSBzdGF0ZSBub2Rlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBoaXN0b3J5VmFsdWVcclxuICAgKi9cblxuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUucmVzb2x2ZUhpc3RvcnkgPSBmdW5jdGlvbiAoaGlzdG9yeVZhbHVlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0aGlzLnR5cGUgIT09ICdoaXN0b3J5Jykge1xuICAgICAgcmV0dXJuIFt0aGlzXTtcbiAgICB9XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XG5cbiAgICBpZiAoIWhpc3RvcnlWYWx1ZSkge1xuICAgICAgdmFyIGhpc3RvcnlUYXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgIHJldHVybiBoaXN0b3J5VGFyZ2V0ID8gZmxhdHRlbih0b1N0YXRlUGF0aHMoaGlzdG9yeVRhcmdldCkubWFwKGZ1bmN0aW9uIChyZWxhdGl2ZUNoaWxkUGF0aCkge1xuICAgICAgICByZXR1cm4gcGFyZW50LmdldEZyb21SZWxhdGl2ZVBhdGgocmVsYXRpdmVDaGlsZFBhdGgpO1xuICAgICAgfSkpIDogcGFyZW50LmluaXRpYWxTdGF0ZU5vZGVzO1xuICAgIH1cblxuICAgIHZhciBzdWJIaXN0b3J5VmFsdWUgPSBuZXN0ZWRQYXRoKHBhcmVudC5wYXRoLCAnc3RhdGVzJykoaGlzdG9yeVZhbHVlKS5jdXJyZW50O1xuXG4gICAgaWYgKGlzU3RyaW5nKHN1Ykhpc3RvcnlWYWx1ZSkpIHtcbiAgICAgIHJldHVybiBbcGFyZW50LmdldFN0YXRlTm9kZShzdWJIaXN0b3J5VmFsdWUpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmxhdHRlbih0b1N0YXRlUGF0aHMoc3ViSGlzdG9yeVZhbHVlKS5tYXAoZnVuY3Rpb24gKHN1YlN0YXRlUGF0aCkge1xuICAgICAgcmV0dXJuIF90aGlzLmhpc3RvcnkgPT09ICdkZWVwJyA/IHBhcmVudC5nZXRGcm9tUmVsYXRpdmVQYXRoKHN1YlN0YXRlUGF0aCkgOiBbcGFyZW50LnN0YXRlc1tzdWJTdGF0ZVBhdGhbMF1dXTtcbiAgICB9KSk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0YXRlTm9kZS5wcm90b3R5cGUsIFwic3RhdGVJZHNcIiwge1xuICAgIC8qKlxyXG4gICAgICogQWxsIHRoZSBzdGF0ZSBub2RlIElEcyBvZiB0aGlzIHN0YXRlIG5vZGUgYW5kIGl0cyBkZXNjZW5kYW50IHN0YXRlIG5vZGVzLlxyXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgY2hpbGRTdGF0ZUlkcyA9IGZsYXR0ZW4oa2V5cyh0aGlzLnN0YXRlcykubWFwKGZ1bmN0aW9uIChzdGF0ZUtleSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc3RhdGVzW3N0YXRlS2V5XS5zdGF0ZUlkcztcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiBbdGhpcy5pZF0uY29uY2F0KGNoaWxkU3RhdGVJZHMpO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdGF0ZU5vZGUucHJvdG90eXBlLCBcImV2ZW50c1wiLCB7XG4gICAgLyoqXHJcbiAgICAgKiBBbGwgdGhlIGV2ZW50IHR5cGVzIGFjY2VwdGVkIGJ5IHRoaXMgc3RhdGUgbm9kZSBhbmQgaXRzIGRlc2NlbmRhbnRzLlxyXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZV83LCBfYSwgZV84LCBfYjtcblxuICAgICAgaWYgKHRoaXMuX19jYWNoZS5ldmVudHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19jYWNoZS5ldmVudHM7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZXMgPSB0aGlzLnN0YXRlcztcbiAgICAgIHZhciBldmVudHMgPSBuZXcgU2V0KHRoaXMub3duRXZlbnRzKTtcblxuICAgICAgaWYgKHN0YXRlcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIF9jID0gX192YWx1ZXMoa2V5cyhzdGF0ZXMpKSwgX2QgPSBfYy5uZXh0KCk7ICFfZC5kb25lOyBfZCA9IF9jLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIHN0YXRlSWQgPSBfZC52YWx1ZTtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHN0YXRlc1tzdGF0ZUlkXTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlLnN0YXRlcykge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9lID0gKGVfOCA9IHZvaWQgMCwgX192YWx1ZXMoc3RhdGUuZXZlbnRzKSksIF9mID0gX2UubmV4dCgpOyAhX2YuZG9uZTsgX2YgPSBfZS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBldmVudF8xID0gX2YudmFsdWU7XG4gICAgICAgICAgICAgICAgICBldmVudHMuYWRkKFwiXCIgKyBldmVudF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVfOF8xKSB7XG4gICAgICAgICAgICAgICAgZV84ID0ge1xuICAgICAgICAgICAgICAgICAgZXJyb3I6IGVfOF8xXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgaWYgKF9mICYmICFfZi5kb25lICYmIChfYiA9IF9lLnJldHVybikpIF9iLmNhbGwoX2UpO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZV84KSB0aHJvdyBlXzguZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlXzdfMSkge1xuICAgICAgICAgIGVfNyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXzdfMVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChfZCAmJiAhX2QuZG9uZSAmJiAoX2EgPSBfYy5yZXR1cm4pKSBfYS5jYWxsKF9jKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKGVfNykgdGhyb3cgZV83LmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fX2NhY2hlLmV2ZW50cyA9IEFycmF5LmZyb20oZXZlbnRzKTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RhdGVOb2RlLnByb3RvdHlwZSwgXCJvd25FdmVudHNcIiwge1xuICAgIC8qKlxyXG4gICAgICogQWxsIHRoZSBldmVudHMgdGhhdCBoYXZlIHRyYW5zaXRpb25zIGRpcmVjdGx5IGZyb20gdGhpcyBzdGF0ZSBub2RlLlxyXG4gICAgICpcclxuICAgICAqIEV4Y2x1ZGVzIGFueSBpbmVydCBldmVudHMuXHJcbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBldmVudHMgPSBuZXcgU2V0KHRoaXMudHJhbnNpdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiAhKCF0cmFuc2l0aW9uLnRhcmdldCAmJiAhdHJhbnNpdGlvbi5hY3Rpb25zLmxlbmd0aCAmJiB0cmFuc2l0aW9uLmludGVybmFsKTtcbiAgICAgIH0pLm1hcChmdW5jdGlvbiAodHJhbnNpdGlvbikge1xuICAgICAgICByZXR1cm4gdHJhbnNpdGlvbi5ldmVudFR5cGU7XG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShldmVudHMpO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5yZXNvbHZlVGFyZ2V0ID0gZnVuY3Rpb24gKF90YXJnZXQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKF90YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gYW4gdW5kZWZpbmVkIHRhcmdldCBzaWduYWxzIHRoYXQgdGhlIHN0YXRlIG5vZGUgc2hvdWxkIG5vdCB0cmFuc2l0aW9uIGZyb20gdGhhdCBzdGF0ZSB3aGVuIHJlY2VpdmluZyB0aGF0IGV2ZW50XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBfdGFyZ2V0Lm1hcChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICBpZiAoIWlzU3RyaW5nKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cblxuICAgICAgdmFyIGlzSW50ZXJuYWxUYXJnZXQgPSB0YXJnZXRbMF0gPT09IF90aGlzLmRlbGltaXRlcjsgLy8gSWYgaW50ZXJuYWwgdGFyZ2V0IGlzIGRlZmluZWQgb24gbWFjaGluZSxcbiAgICAgIC8vIGRvIG5vdCBpbmNsdWRlIG1hY2hpbmUga2V5IG9uIHRhcmdldFxuXG4gICAgICBpZiAoaXNJbnRlcm5hbFRhcmdldCAmJiAhX3RoaXMucGFyZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5nZXRTdGF0ZU5vZGVCeVBhdGgodGFyZ2V0LnNsaWNlKDEpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc29sdmVkVGFyZ2V0ID0gaXNJbnRlcm5hbFRhcmdldCA/IF90aGlzLmtleSArIHRhcmdldCA6IHRhcmdldDtcblxuICAgICAgaWYgKF90aGlzLnBhcmVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciB0YXJnZXRTdGF0ZU5vZGUgPSBfdGhpcy5wYXJlbnQuZ2V0U3RhdGVOb2RlQnlQYXRoKHJlc29sdmVkVGFyZ2V0KTtcblxuICAgICAgICAgIHJldHVybiB0YXJnZXRTdGF0ZU5vZGU7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdHJhbnNpdGlvbiBkZWZpbml0aW9uIGZvciBzdGF0ZSBub2RlICdcIiArIF90aGlzLmlkICsgXCInOlxcblwiICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gX3RoaXMuZ2V0U3RhdGVOb2RlQnlQYXRoKHJlc29sdmVkVGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLmZvcm1hdFRyYW5zaXRpb24gPSBmdW5jdGlvbiAodHJhbnNpdGlvbkNvbmZpZykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgbm9ybWFsaXplZFRhcmdldCA9IG5vcm1hbGl6ZVRhcmdldCh0cmFuc2l0aW9uQ29uZmlnLnRhcmdldCk7XG4gICAgdmFyIGludGVybmFsID0gJ2ludGVybmFsJyBpbiB0cmFuc2l0aW9uQ29uZmlnID8gdHJhbnNpdGlvbkNvbmZpZy5pbnRlcm5hbCA6IG5vcm1hbGl6ZWRUYXJnZXQgPyBub3JtYWxpemVkVGFyZ2V0LnNvbWUoZnVuY3Rpb24gKF90YXJnZXQpIHtcbiAgICAgIHJldHVybiBpc1N0cmluZyhfdGFyZ2V0KSAmJiBfdGFyZ2V0WzBdID09PSBfdGhpcy5kZWxpbWl0ZXI7XG4gICAgfSkgOiB0cnVlO1xuICAgIHZhciBndWFyZHMgPSB0aGlzLm1hY2hpbmUub3B0aW9ucy5ndWFyZHM7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMucmVzb2x2ZVRhcmdldChub3JtYWxpemVkVGFyZ2V0KTtcbiAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHRyYW5zaXRpb25Db25maWcpLCB7XG4gICAgICBhY3Rpb25zOiB0b0FjdGlvbk9iamVjdHModG9BcnJheSh0cmFuc2l0aW9uQ29uZmlnLmFjdGlvbnMpKSxcbiAgICAgIGNvbmQ6IHRvR3VhcmQodHJhbnNpdGlvbkNvbmZpZy5jb25kLCBndWFyZHMpLFxuICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICBzb3VyY2U6IHRoaXMsXG4gICAgICBpbnRlcm5hbDogaW50ZXJuYWwsXG4gICAgICBldmVudFR5cGU6IHRyYW5zaXRpb25Db25maWcuZXZlbnRcbiAgICB9KTtcbiAgfTtcblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLmZvcm1hdFRyYW5zaXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlXzksIF9hO1xuXG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBvbkNvbmZpZztcblxuICAgIGlmICghdGhpcy5jb25maWcub24pIHtcbiAgICAgIG9uQ29uZmlnID0gW107XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRoaXMuY29uZmlnLm9uKSkge1xuICAgICAgb25Db25maWcgPSB0aGlzLmNvbmZpZy5vbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9iID0gdGhpcy5jb25maWcub24sXG4gICAgICAgICAgX2MgPSBXSUxEQ0FSRCxcbiAgICAgICAgICBfZCA9IF9iW19jXSxcbiAgICAgICAgICB3aWxkY2FyZENvbmZpZ3MgPSBfZCA9PT0gdm9pZCAwID8gW10gOiBfZCxcbiAgICAgICAgICBzdHJpY3RPbkNvbmZpZ3NfMSA9IF9fcmVzdChfYiwgW3R5cGVvZiBfYyA9PT0gXCJzeW1ib2xcIiA/IF9jIDogX2MgKyBcIlwiXSk7XG5cbiAgICAgIG9uQ29uZmlnID0gZmxhdHRlbihrZXlzKHN0cmljdE9uQ29uZmlnc18xKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgYXJyYXlpZmllZCA9IHRvVHJhbnNpdGlvbkNvbmZpZ0FycmF5KGtleSwgc3RyaWN0T25Db25maWdzXzFba2V5XSk7XG5cbiAgICAgICAgaWYgKCFJU19QUk9EVUNUSU9OKSB7XG4gICAgICAgICAgdmFsaWRhdGVBcnJheWlmaWVkVHJhbnNpdGlvbnMoX3RoaXMsIGtleSwgYXJyYXlpZmllZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXlpZmllZDtcbiAgICAgIH0pLmNvbmNhdCh0b1RyYW5zaXRpb25Db25maWdBcnJheShXSUxEQ0FSRCwgd2lsZGNhcmRDb25maWdzKSkpO1xuICAgIH1cblxuICAgIHZhciBkb25lQ29uZmlnID0gdGhpcy5jb25maWcub25Eb25lID8gdG9UcmFuc2l0aW9uQ29uZmlnQXJyYXkoU3RyaW5nKGRvbmUodGhpcy5pZCkpLCB0aGlzLmNvbmZpZy5vbkRvbmUpIDogW107XG4gICAgdmFyIGludm9rZUNvbmZpZyA9IGZsYXR0ZW4odGhpcy5pbnZva2UubWFwKGZ1bmN0aW9uIChpbnZva2VEZWYpIHtcbiAgICAgIHZhciBzZXR0bGVUcmFuc2l0aW9ucyA9IFtdO1xuXG4gICAgICBpZiAoaW52b2tlRGVmLm9uRG9uZSkge1xuICAgICAgICBzZXR0bGVUcmFuc2l0aW9ucy5wdXNoLmFwcGx5KHNldHRsZVRyYW5zaXRpb25zLCBfX3NwcmVhZCh0b1RyYW5zaXRpb25Db25maWdBcnJheShTdHJpbmcoZG9uZUludm9rZShpbnZva2VEZWYuaWQpKSwgaW52b2tlRGVmLm9uRG9uZSkpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGludm9rZURlZi5vbkVycm9yKSB7XG4gICAgICAgIHNldHRsZVRyYW5zaXRpb25zLnB1c2guYXBwbHkoc2V0dGxlVHJhbnNpdGlvbnMsIF9fc3ByZWFkKHRvVHJhbnNpdGlvbkNvbmZpZ0FycmF5KFN0cmluZyhlcnJvcihpbnZva2VEZWYuaWQpKSwgaW52b2tlRGVmLm9uRXJyb3IpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZXR0bGVUcmFuc2l0aW9ucztcbiAgICB9KSk7XG4gICAgdmFyIGRlbGF5ZWRUcmFuc2l0aW9ucyA9IHRoaXMuYWZ0ZXI7XG4gICAgdmFyIGZvcm1hdHRlZFRyYW5zaXRpb25zID0gZmxhdHRlbihfX3NwcmVhZChkb25lQ29uZmlnLCBpbnZva2VDb25maWcsIG9uQ29uZmlnKS5tYXAoZnVuY3Rpb24gKHRyYW5zaXRpb25Db25maWcpIHtcbiAgICAgIHJldHVybiB0b0FycmF5KHRyYW5zaXRpb25Db25maWcpLm1hcChmdW5jdGlvbiAodHJhbnNpdGlvbikge1xuICAgICAgICByZXR1cm4gX3RoaXMuZm9ybWF0VHJhbnNpdGlvbih0cmFuc2l0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pKTtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBkZWxheWVkVHJhbnNpdGlvbnNfMSA9IF9fdmFsdWVzKGRlbGF5ZWRUcmFuc2l0aW9ucyksIGRlbGF5ZWRUcmFuc2l0aW9uc18xXzEgPSBkZWxheWVkVHJhbnNpdGlvbnNfMS5uZXh0KCk7ICFkZWxheWVkVHJhbnNpdGlvbnNfMV8xLmRvbmU7IGRlbGF5ZWRUcmFuc2l0aW9uc18xXzEgPSBkZWxheWVkVHJhbnNpdGlvbnNfMS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGRlbGF5ZWRUcmFuc2l0aW9uID0gZGVsYXllZFRyYW5zaXRpb25zXzFfMS52YWx1ZTtcbiAgICAgICAgZm9ybWF0dGVkVHJhbnNpdGlvbnMucHVzaChkZWxheWVkVHJhbnNpdGlvbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZV85XzEpIHtcbiAgICAgIGVfOSA9IHtcbiAgICAgICAgZXJyb3I6IGVfOV8xXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZGVsYXllZFRyYW5zaXRpb25zXzFfMSAmJiAhZGVsYXllZFRyYW5zaXRpb25zXzFfMS5kb25lICYmIChfYSA9IGRlbGF5ZWRUcmFuc2l0aW9uc18xLnJldHVybikpIF9hLmNhbGwoZGVsYXllZFRyYW5zaXRpb25zXzEpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGVfOSkgdGhyb3cgZV85LmVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXR0ZWRUcmFuc2l0aW9ucztcbiAgfTtcblxuICByZXR1cm4gU3RhdGVOb2RlO1xufSgpO1xuXG5leHBvcnQgeyBTdGF0ZU5vZGUgfTsiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xudmFyIF9fYXNzaWduID0gZnVuY3Rpb24gKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdDtcbiAgfTtcblxuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5cbmZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLFxuICAgICAgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICByZXR1cm4ge1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogbyAmJiBvW2krK10sXG4gICAgICAgIGRvbmU6ICFvXG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSxcbiAgICAgIHIsXG4gICAgICBhciA9IFtdLFxuICAgICAgZTtcblxuICB0cnkge1xuICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGUgPSB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyO1xufVxuXG5mdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcblxuICByZXR1cm4gYXI7XG59XG5cbmV4cG9ydCB7IF9fYXNzaWduLCBfX3JlYWQsIF9fcmVzdCwgX19zcHJlYWQsIF9fdmFsdWVzIH07IiwiaW1wb3J0IHsgQWN0aW9uVHlwZXMgfSBmcm9tICcuL3R5cGVzLmpzJzsgLy8geHN0YXRlLXNwZWNpZmljIGFjdGlvbiB0eXBlc1xuXG52YXIgc3RhcnQgPSBBY3Rpb25UeXBlcy5TdGFydDtcbnZhciBzdG9wID0gQWN0aW9uVHlwZXMuU3RvcDtcbnZhciByYWlzZSA9IEFjdGlvblR5cGVzLlJhaXNlO1xudmFyIHNlbmQgPSBBY3Rpb25UeXBlcy5TZW5kO1xudmFyIGNhbmNlbCA9IEFjdGlvblR5cGVzLkNhbmNlbDtcbnZhciBudWxsRXZlbnQgPSBBY3Rpb25UeXBlcy5OdWxsRXZlbnQ7XG52YXIgYXNzaWduID0gQWN0aW9uVHlwZXMuQXNzaWduO1xudmFyIGFmdGVyID0gQWN0aW9uVHlwZXMuQWZ0ZXI7XG52YXIgZG9uZVN0YXRlID0gQWN0aW9uVHlwZXMuRG9uZVN0YXRlO1xudmFyIGxvZyA9IEFjdGlvblR5cGVzLkxvZztcbnZhciBpbml0ID0gQWN0aW9uVHlwZXMuSW5pdDtcbnZhciBpbnZva2UgPSBBY3Rpb25UeXBlcy5JbnZva2U7XG52YXIgZXJyb3JFeGVjdXRpb24gPSBBY3Rpb25UeXBlcy5FcnJvckV4ZWN1dGlvbjtcbnZhciBlcnJvclBsYXRmb3JtID0gQWN0aW9uVHlwZXMuRXJyb3JQbGF0Zm9ybTtcbnZhciBlcnJvciA9IEFjdGlvblR5cGVzLkVycm9yQ3VzdG9tO1xudmFyIHVwZGF0ZSA9IEFjdGlvblR5cGVzLlVwZGF0ZTtcbnZhciBwdXJlID0gQWN0aW9uVHlwZXMuUHVyZTtcbmV4cG9ydCB7IGFmdGVyLCBhc3NpZ24sIGNhbmNlbCwgZG9uZVN0YXRlLCBlcnJvciwgZXJyb3JFeGVjdXRpb24sIGVycm9yUGxhdGZvcm0sIGluaXQsIGludm9rZSwgbG9nLCBudWxsRXZlbnQsIHB1cmUsIHJhaXNlLCBzZW5kLCBzdGFydCwgc3RvcCwgdXBkYXRlIH07IiwiaW1wb3J0IHsgX19hc3NpZ24sIF9fcmVzdCB9IGZyb20gJy4vX3ZpcnR1YWwvX3RzbGliLmpzJztcbmltcG9ydCB7IHRvU0NYTUxFdmVudCwgaXNGdW5jdGlvbiwgdG9FdmVudE9iamVjdCwgZ2V0RXZlbnRUeXBlLCBpc1N0cmluZywgaXNBcnJheSB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgU3BlY2lhbFRhcmdldHMsIEFjdGlvblR5cGVzIH0gZnJvbSAnLi90eXBlcy5qcyc7XG5pbXBvcnQgeyBzZW5kIGFzIHNlbmQkMSwgdXBkYXRlLCBhc3NpZ24gYXMgYXNzaWduJDEsIHJhaXNlIGFzIHJhaXNlJDEsIGluaXQsIGxvZyBhcyBsb2ckMSwgY2FuY2VsIGFzIGNhbmNlbCQxLCBlcnJvciBhcyBlcnJvciQxIH0gZnJvbSAnLi9hY3Rpb25UeXBlcy5qcyc7XG52YXIgaW5pdEV2ZW50ID1cbi8qI19fUFVSRV9fKi9cbnRvU0NYTUxFdmVudCh7XG4gIHR5cGU6IGluaXRcbn0pO1xuXG5mdW5jdGlvbiBnZXRBY3Rpb25GdW5jdGlvbihhY3Rpb25UeXBlLCBhY3Rpb25GdW5jdGlvbk1hcCkge1xuICByZXR1cm4gYWN0aW9uRnVuY3Rpb25NYXAgPyBhY3Rpb25GdW5jdGlvbk1hcFthY3Rpb25UeXBlXSB8fCB1bmRlZmluZWQgOiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHRvQWN0aW9uT2JqZWN0KGFjdGlvbiwgYWN0aW9uRnVuY3Rpb25NYXApIHtcbiAgdmFyIGFjdGlvbk9iamVjdDtcblxuICBpZiAoaXNTdHJpbmcoYWN0aW9uKSB8fCB0eXBlb2YgYWN0aW9uID09PSAnbnVtYmVyJykge1xuICAgIHZhciBleGVjID0gZ2V0QWN0aW9uRnVuY3Rpb24oYWN0aW9uLCBhY3Rpb25GdW5jdGlvbk1hcCk7XG5cbiAgICBpZiAoaXNGdW5jdGlvbihleGVjKSkge1xuICAgICAgYWN0aW9uT2JqZWN0ID0ge1xuICAgICAgICB0eXBlOiBhY3Rpb24sXG4gICAgICAgIGV4ZWM6IGV4ZWNcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChleGVjKSB7XG4gICAgICBhY3Rpb25PYmplY3QgPSBleGVjO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3Rpb25PYmplY3QgPSB7XG4gICAgICAgIHR5cGU6IGFjdGlvbixcbiAgICAgICAgZXhlYzogdW5kZWZpbmVkXG4gICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKGFjdGlvbikpIHtcbiAgICBhY3Rpb25PYmplY3QgPSB7XG4gICAgICAvLyBDb252ZXJ0IGFjdGlvbiB0byBzdHJpbmcgaWYgdW5uYW1lZFxuICAgICAgdHlwZTogYWN0aW9uLm5hbWUgfHwgYWN0aW9uLnRvU3RyaW5nKCksXG4gICAgICBleGVjOiBhY3Rpb25cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHZhciBleGVjID0gZ2V0QWN0aW9uRnVuY3Rpb24oYWN0aW9uLnR5cGUsIGFjdGlvbkZ1bmN0aW9uTWFwKTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV4ZWMpKSB7XG4gICAgICBhY3Rpb25PYmplY3QgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYWN0aW9uKSwge1xuICAgICAgICBleGVjOiBleGVjXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGV4ZWMpIHtcbiAgICAgIHZhciB0eXBlID0gYWN0aW9uLnR5cGUsXG4gICAgICAgICAgb3RoZXIgPSBfX3Jlc3QoYWN0aW9uLCBbXCJ0eXBlXCJdKTtcblxuICAgICAgYWN0aW9uT2JqZWN0ID0gX19hc3NpZ24oX19hc3NpZ24oe1xuICAgICAgICB0eXBlOiB0eXBlXG4gICAgICB9LCBleGVjKSwgb3RoZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3Rpb25PYmplY3QgPSBhY3Rpb247XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFjdGlvbk9iamVjdCwgJ3RvU3RyaW5nJywge1xuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYWN0aW9uT2JqZWN0LnR5cGU7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIHJldHVybiBhY3Rpb25PYmplY3Q7XG59XG5cbnZhciB0b0FjdGlvbk9iamVjdHMgPSBmdW5jdGlvbiAoYWN0aW9uLCBhY3Rpb25GdW5jdGlvbk1hcCkge1xuICBpZiAoIWFjdGlvbikge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBhY3Rpb25zID0gaXNBcnJheShhY3Rpb24pID8gYWN0aW9uIDogW2FjdGlvbl07XG4gIHJldHVybiBhY3Rpb25zLm1hcChmdW5jdGlvbiAoc3ViQWN0aW9uKSB7XG4gICAgcmV0dXJuIHRvQWN0aW9uT2JqZWN0KHN1YkFjdGlvbiwgYWN0aW9uRnVuY3Rpb25NYXApO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIHRvQWN0aXZpdHlEZWZpbml0aW9uKGFjdGlvbikge1xuICB2YXIgYWN0aW9uT2JqZWN0ID0gdG9BY3Rpb25PYmplY3QoYWN0aW9uKTtcbiAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHtcbiAgICBpZDogaXNTdHJpbmcoYWN0aW9uKSA/IGFjdGlvbiA6IGFjdGlvbk9iamVjdC5pZFxuICB9LCBhY3Rpb25PYmplY3QpLCB7XG4gICAgdHlwZTogYWN0aW9uT2JqZWN0LnR5cGVcbiAgfSk7XG59XG4vKipcclxuICogUmFpc2VzIGFuIGV2ZW50LiBUaGlzIHBsYWNlcyB0aGUgZXZlbnQgaW4gdGhlIGludGVybmFsIGV2ZW50IHF1ZXVlLCBzbyB0aGF0XHJcbiAqIHRoZSBldmVudCBpcyBpbW1lZGlhdGVseSBjb25zdW1lZCBieSB0aGUgbWFjaGluZSBpbiB0aGUgY3VycmVudCBzdGVwLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXZlbnRUeXBlIFRoZSBldmVudCB0byByYWlzZS5cclxuICovXG5cblxuZnVuY3Rpb24gcmFpc2UoZXZlbnQpIHtcbiAgaWYgKCFpc1N0cmluZyhldmVudCkpIHtcbiAgICByZXR1cm4gc2VuZChldmVudCwge1xuICAgICAgdG86IFNwZWNpYWxUYXJnZXRzLkludGVybmFsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IHJhaXNlJDEsXG4gICAgZXZlbnQ6IGV2ZW50XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVSYWlzZShhY3Rpb24pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiByYWlzZSQxLFxuICAgIF9ldmVudDogdG9TQ1hNTEV2ZW50KGFjdGlvbi5ldmVudClcbiAgfTtcbn1cbi8qKlxyXG4gKiBTZW5kcyBhbiBldmVudC4gVGhpcyByZXR1cm5zIGFuIGFjdGlvbiB0aGF0IHdpbGwgYmUgcmVhZCBieSBhbiBpbnRlcnByZXRlciB0b1xyXG4gKiBzZW5kIHRoZSBldmVudCBpbiB0aGUgbmV4dCBzdGVwLCBhZnRlciB0aGUgY3VycmVudCBzdGVwIGlzIGZpbmlzaGVkIGV4ZWN1dGluZy5cclxuICpcclxuICogQHBhcmFtIGV2ZW50IFRoZSBldmVudCB0byBzZW5kLlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIHBhc3MgaW50byB0aGUgc2VuZCBldmVudDpcclxuICogIC0gYGlkYCAtIFRoZSB1bmlxdWUgc2VuZCBldmVudCBpZGVudGlmaWVyICh1c2VkIHdpdGggYGNhbmNlbCgpYCkuXHJcbiAqICAtIGBkZWxheWAgLSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheSB0aGUgc2VuZGluZyBvZiB0aGUgZXZlbnQuXHJcbiAqICAtIGB0b2AgLSBUaGUgdGFyZ2V0IG9mIHRoaXMgZXZlbnQgKGJ5IGRlZmF1bHQsIHRoZSBtYWNoaW5lIHRoZSBldmVudCB3YXMgc2VudCBmcm9tKS5cclxuICovXG5cblxuZnVuY3Rpb24gc2VuZChldmVudCwgb3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIHRvOiBvcHRpb25zID8gb3B0aW9ucy50byA6IHVuZGVmaW5lZCxcbiAgICB0eXBlOiBzZW5kJDEsXG4gICAgZXZlbnQ6IGlzRnVuY3Rpb24oZXZlbnQpID8gZXZlbnQgOiB0b0V2ZW50T2JqZWN0KGV2ZW50KSxcbiAgICBkZWxheTogb3B0aW9ucyA/IG9wdGlvbnMuZGVsYXkgOiB1bmRlZmluZWQsXG4gICAgaWQ6IG9wdGlvbnMgJiYgb3B0aW9ucy5pZCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5pZCA6IGlzRnVuY3Rpb24oZXZlbnQpID8gZXZlbnQubmFtZSA6IGdldEV2ZW50VHlwZShldmVudClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVNlbmQoYWN0aW9uLCBjdHgsIF9ldmVudCwgZGVsYXlzTWFwKSB7XG4gIHZhciBtZXRhID0ge1xuICAgIF9ldmVudDogX2V2ZW50XG4gIH07IC8vIFRPRE86IGhlbHBlciBmdW5jdGlvbiBmb3IgcmVzb2x2aW5nIEV4cHJcblxuICB2YXIgcmVzb2x2ZWRFdmVudCA9IHRvU0NYTUxFdmVudChpc0Z1bmN0aW9uKGFjdGlvbi5ldmVudCkgPyBhY3Rpb24uZXZlbnQoY3R4LCBfZXZlbnQuZGF0YSwgbWV0YSkgOiBhY3Rpb24uZXZlbnQpO1xuICB2YXIgcmVzb2x2ZWREZWxheTtcblxuICBpZiAoaXNTdHJpbmcoYWN0aW9uLmRlbGF5KSkge1xuICAgIHZhciBjb25maWdEZWxheSA9IGRlbGF5c01hcCAmJiBkZWxheXNNYXBbYWN0aW9uLmRlbGF5XTtcbiAgICByZXNvbHZlZERlbGF5ID0gaXNGdW5jdGlvbihjb25maWdEZWxheSkgPyBjb25maWdEZWxheShjdHgsIF9ldmVudC5kYXRhLCBtZXRhKSA6IGNvbmZpZ0RlbGF5O1xuICB9IGVsc2Uge1xuICAgIHJlc29sdmVkRGVsYXkgPSBpc0Z1bmN0aW9uKGFjdGlvbi5kZWxheSkgPyBhY3Rpb24uZGVsYXkoY3R4LCBfZXZlbnQuZGF0YSwgbWV0YSkgOiBhY3Rpb24uZGVsYXk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZWRUYXJnZXQgPSBpc0Z1bmN0aW9uKGFjdGlvbi50bykgPyBhY3Rpb24udG8oY3R4LCBfZXZlbnQuZGF0YSwgbWV0YSkgOiBhY3Rpb24udG87XG4gIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYWN0aW9uKSwge1xuICAgIHRvOiByZXNvbHZlZFRhcmdldCxcbiAgICBfZXZlbnQ6IHJlc29sdmVkRXZlbnQsXG4gICAgZXZlbnQ6IHJlc29sdmVkRXZlbnQuZGF0YSxcbiAgICBkZWxheTogcmVzb2x2ZWREZWxheVxuICB9KTtcbn1cbi8qKlxyXG4gKiBTZW5kcyBhbiBldmVudCB0byB0aGlzIG1hY2hpbmUncyBwYXJlbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgdG8gc2VuZCB0byB0aGUgcGFyZW50IG1hY2hpbmUuXHJcbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gcGFzcyBpbnRvIHRoZSBzZW5kIGV2ZW50LlxyXG4gKi9cblxuXG5mdW5jdGlvbiBzZW5kUGFyZW50KGV2ZW50LCBvcHRpb25zKSB7XG4gIHJldHVybiBzZW5kKGV2ZW50LCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHtcbiAgICB0bzogU3BlY2lhbFRhcmdldHMuUGFyZW50XG4gIH0pKTtcbn1cbi8qKlxyXG4gKiBTZW5kcyBhbiB1cGRhdGUgZXZlbnQgdG8gdGhpcyBtYWNoaW5lJ3MgcGFyZW50LlxyXG4gKi9cblxuXG5mdW5jdGlvbiBzZW5kVXBkYXRlKCkge1xuICByZXR1cm4gc2VuZFBhcmVudCh1cGRhdGUpO1xufVxuLyoqXHJcbiAqIFNlbmRzIGFuIGV2ZW50IGJhY2sgdG8gdGhlIHNlbmRlciBvZiB0aGUgb3JpZ2luYWwgZXZlbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgdG8gc2VuZCBiYWNrIHRvIHRoZSBzZW5kZXJcclxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBwYXNzIGludG8gdGhlIHNlbmQgZXZlbnRcclxuICovXG5cblxuZnVuY3Rpb24gcmVzcG9uZChldmVudCwgb3B0aW9ucykge1xuICByZXR1cm4gc2VuZChldmVudCwgX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7XG4gICAgdG86IGZ1bmN0aW9uIChfLCBfXywgX2EpIHtcbiAgICAgIHZhciBfZXZlbnQgPSBfYS5fZXZlbnQ7XG4gICAgICByZXR1cm4gX2V2ZW50Lm9yaWdpbjsgLy8gVE9ETzogaGFuZGxlIHdoZW4gX2V2ZW50Lm9yaWdpbiBpcyB1bmRlZmluZWRcbiAgICB9XG4gIH0pKTtcbn1cblxudmFyIGRlZmF1bHRMb2dFeHByID0gZnVuY3Rpb24gKGNvbnRleHQsIGV2ZW50KSB7XG4gIHJldHVybiB7XG4gICAgY29udGV4dDogY29udGV4dCxcbiAgICBldmVudDogZXZlbnRcbiAgfTtcbn07XG4vKipcclxuICpcclxuICogQHBhcmFtIGV4cHIgVGhlIGV4cHJlc3Npb24gZnVuY3Rpb24gdG8gZXZhbHVhdGUgd2hpY2ggd2lsbCBiZSBsb2dnZWQuXHJcbiAqICBUYWtlcyBpbiAyIGFyZ3VtZW50czpcclxuICogIC0gYGN0eGAgLSB0aGUgY3VycmVudCBzdGF0ZSBjb250ZXh0XHJcbiAqICAtIGBldmVudGAgLSB0aGUgZXZlbnQgdGhhdCBjYXVzZWQgdGhpcyBhY3Rpb24gdG8gYmUgZXhlY3V0ZWQuXHJcbiAqIEBwYXJhbSBsYWJlbCBUaGUgbGFiZWwgdG8gZ2l2ZSB0byB0aGUgbG9nZ2VkIGV4cHJlc3Npb24uXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGxvZyhleHByLCBsYWJlbCkge1xuICBpZiAoZXhwciA9PT0gdm9pZCAwKSB7XG4gICAgZXhwciA9IGRlZmF1bHRMb2dFeHByO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBsb2ckMSxcbiAgICBsYWJlbDogbGFiZWwsXG4gICAgZXhwcjogZXhwclxuICB9O1xufVxuXG52YXIgcmVzb2x2ZUxvZyA9IGZ1bmN0aW9uIChhY3Rpb24sIGN0eCwgX2V2ZW50KSB7XG4gIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYWN0aW9uKSwge1xuICAgIHZhbHVlOiBpc1N0cmluZyhhY3Rpb24uZXhwcikgPyBhY3Rpb24uZXhwciA6IGFjdGlvbi5leHByKGN0eCwgX2V2ZW50LmRhdGEsIHtcbiAgICAgIF9ldmVudDogX2V2ZW50XG4gICAgfSlcbiAgfSk7XG59O1xuLyoqXHJcbiAqIENhbmNlbHMgYW4gaW4tZmxpZ2h0IGBzZW5kKC4uLilgIGFjdGlvbi4gQSBjYW5jZWxlZCBzZW50IGFjdGlvbiB3aWxsIG5vdFxyXG4gKiBiZSBleGVjdXRlZCwgbm9yIHdpbGwgaXRzIGV2ZW50IGJlIHNlbnQsIHVubGVzcyBpdCBoYXMgYWxyZWFkeSBiZWVuIHNlbnRcclxuICogKGUuZy4sIGlmIGBjYW5jZWwoLi4uKWAgaXMgY2FsbGVkIGFmdGVyIHRoZSBgc2VuZCguLi4pYCBhY3Rpb24ncyBgZGVsYXlgKS5cclxuICpcclxuICogQHBhcmFtIHNlbmRJZCBUaGUgYGlkYCBvZiB0aGUgYHNlbmQoLi4uKWAgYWN0aW9uIHRvIGNhbmNlbC5cclxuICovXG5cblxudmFyIGNhbmNlbCA9IGZ1bmN0aW9uIChzZW5kSWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBjYW5jZWwkMSxcbiAgICBzZW5kSWQ6IHNlbmRJZFxuICB9O1xufTtcbi8qKlxyXG4gKiBTdGFydHMgYW4gYWN0aXZpdHkuXHJcbiAqXHJcbiAqIEBwYXJhbSBhY3Rpdml0eSBUaGUgYWN0aXZpdHkgdG8gc3RhcnQuXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIHN0YXJ0KGFjdGl2aXR5KSB7XG4gIHZhciBhY3Rpdml0eURlZiA9IHRvQWN0aXZpdHlEZWZpbml0aW9uKGFjdGl2aXR5KTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TdGFydCxcbiAgICBhY3Rpdml0eTogYWN0aXZpdHlEZWYsXG4gICAgZXhlYzogdW5kZWZpbmVkXG4gIH07XG59XG4vKipcclxuICogU3RvcHMgYW4gYWN0aXZpdHkuXHJcbiAqXHJcbiAqIEBwYXJhbSBhY3Rpdml0eSBUaGUgYWN0aXZpdHkgdG8gc3RvcC5cclxuICovXG5cblxuZnVuY3Rpb24gc3RvcChhY3Rpdml0eSkge1xuICB2YXIgYWN0aXZpdHlEZWYgPSB0b0FjdGl2aXR5RGVmaW5pdGlvbihhY3Rpdml0eSk7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU3RvcCxcbiAgICBhY3Rpdml0eTogYWN0aXZpdHlEZWYsXG4gICAgZXhlYzogdW5kZWZpbmVkXG4gIH07XG59XG4vKipcclxuICogVXBkYXRlcyB0aGUgY3VycmVudCBjb250ZXh0IG9mIHRoZSBtYWNoaW5lLlxyXG4gKlxyXG4gKiBAcGFyYW0gYXNzaWdubWVudCBBbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBwYXJ0aWFsIGNvbnRleHQgdG8gdXBkYXRlLlxyXG4gKi9cblxuXG52YXIgYXNzaWduID0gZnVuY3Rpb24gKGFzc2lnbm1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhc3NpZ24kMSxcbiAgICBhc3NpZ25tZW50OiBhc3NpZ25tZW50XG4gIH07XG59O1xuLyoqXHJcbiAqIFJldHVybnMgYW4gZXZlbnQgdHlwZSB0aGF0IHJlcHJlc2VudHMgYW4gaW1wbGljaXQgZXZlbnQgdGhhdFxyXG4gKiBpcyBzZW50IGFmdGVyIHRoZSBzcGVjaWZpZWQgYGRlbGF5YC5cclxuICpcclxuICogQHBhcmFtIGRlbGF5UmVmIFRoZSBkZWxheSBpbiBtaWxsaXNlY29uZHNcclxuICogQHBhcmFtIGlkIFRoZSBzdGF0ZSBub2RlIElEIHdoZXJlIHRoaXMgZXZlbnQgaXMgaGFuZGxlZFxyXG4gKi9cblxuXG5mdW5jdGlvbiBhZnRlcihkZWxheVJlZiwgaWQpIHtcbiAgdmFyIGlkU3VmZml4ID0gaWQgPyBcIiNcIiArIGlkIDogJyc7XG4gIHJldHVybiBBY3Rpb25UeXBlcy5BZnRlciArIFwiKFwiICsgZGVsYXlSZWYgKyBcIilcIiArIGlkU3VmZml4O1xufVxuLyoqXHJcbiAqIFJldHVybnMgYW4gZXZlbnQgdGhhdCByZXByZXNlbnRzIHRoYXQgYSBmaW5hbCBzdGF0ZSBub2RlXHJcbiAqIGhhcyBiZWVuIHJlYWNoZWQgaW4gdGhlIHBhcmVudCBzdGF0ZSBub2RlLlxyXG4gKlxyXG4gKiBAcGFyYW0gaWQgVGhlIGZpbmFsIHN0YXRlIG5vZGUncyBwYXJlbnQgc3RhdGUgbm9kZSBgaWRgXHJcbiAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgaW50byB0aGUgZXZlbnRcclxuICovXG5cblxuZnVuY3Rpb24gZG9uZShpZCwgZGF0YSkge1xuICB2YXIgdHlwZSA9IEFjdGlvblR5cGVzLkRvbmVTdGF0ZSArIFwiLlwiICsgaWQ7XG4gIHZhciBldmVudE9iamVjdCA9IHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGRhdGE6IGRhdGFcbiAgfTtcblxuICBldmVudE9iamVjdC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfTtcblxuICByZXR1cm4gZXZlbnRPYmplY3Q7XG59XG4vKipcclxuICogUmV0dXJucyBhbiBldmVudCB0aGF0IHJlcHJlc2VudHMgdGhhdCBhbiBpbnZva2VkIHNlcnZpY2UgaGFzIHRlcm1pbmF0ZWQuXHJcbiAqXHJcbiAqIEFuIGludm9rZWQgc2VydmljZSBpcyB0ZXJtaW5hdGVkIHdoZW4gaXQgaGFzIHJlYWNoZWQgYSB0b3AtbGV2ZWwgZmluYWwgc3RhdGUgbm9kZSxcclxuICogYnV0IG5vdCB3aGVuIGl0IGlzIGNhbmNlbGVkLlxyXG4gKlxyXG4gKiBAcGFyYW0gaWQgVGhlIGZpbmFsIHN0YXRlIG5vZGUgSURcclxuICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gcGFzcyBpbnRvIHRoZSBldmVudFxyXG4gKi9cblxuXG5mdW5jdGlvbiBkb25lSW52b2tlKGlkLCBkYXRhKSB7XG4gIHZhciB0eXBlID0gQWN0aW9uVHlwZXMuRG9uZUludm9rZSArIFwiLlwiICsgaWQ7XG4gIHZhciBldmVudE9iamVjdCA9IHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGRhdGE6IGRhdGFcbiAgfTtcblxuICBldmVudE9iamVjdC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfTtcblxuICByZXR1cm4gZXZlbnRPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGVycm9yKGlkLCBkYXRhKSB7XG4gIHZhciB0eXBlID0gQWN0aW9uVHlwZXMuRXJyb3JQbGF0Zm9ybSArIFwiLlwiICsgaWQ7XG4gIHZhciBldmVudE9iamVjdCA9IHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGRhdGE6IGRhdGFcbiAgfTtcblxuICBldmVudE9iamVjdC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfTtcblxuICByZXR1cm4gZXZlbnRPYmplY3Q7XG59XG4vKipcclxuICogRm9yd2FyZHMgKHNlbmRzKSBhbiBldmVudCB0byBhIHNwZWNpZmllZCBzZXJ2aWNlLlxyXG4gKlxyXG4gKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgc2VydmljZSB0byBmb3J3YXJkIHRoZSBldmVudCB0by5cclxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBwYXNzIGludG8gdGhlIHNlbmQgYWN0aW9uIGNyZWF0b3IuXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGZvcndhcmRUbyh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHNlbmQoZnVuY3Rpb24gKF8sIGV2ZW50KSB7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9LCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHtcbiAgICB0bzogdGFyZ2V0XG4gIH0pKTtcbn1cbi8qKlxyXG4gKiBFc2NhbGF0ZXMgYW4gZXJyb3IgYnkgc2VuZGluZyBpdCBhcyBhbiBldmVudCB0byB0aGlzIG1hY2hpbmUncyBwYXJlbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvckRhdGEgVGhlIGVycm9yIGRhdGEgdG8gc2VuZC5cclxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBwYXNzIGludG8gdGhlIHNlbmQgYWN0aW9uIGNyZWF0b3IuXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGVzY2FsYXRlKGVycm9yRGF0YSwgb3B0aW9ucykge1xuICByZXR1cm4gc2VuZFBhcmVudCh7XG4gICAgdHlwZTogZXJyb3IkMSxcbiAgICBkYXRhOiBlcnJvckRhdGFcbiAgfSwgX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7XG4gICAgdG86IFNwZWNpYWxUYXJnZXRzLlBhcmVudFxuICB9KSk7XG59XG5cbmV4cG9ydCB7IGFmdGVyLCBhc3NpZ24sIGNhbmNlbCwgZG9uZSwgZG9uZUludm9rZSwgZXJyb3IsIGVzY2FsYXRlLCBmb3J3YXJkVG8sIGdldEFjdGlvbkZ1bmN0aW9uLCBpbml0RXZlbnQsIGxvZywgcmFpc2UsIHJlc29sdmVMb2csIHJlc29sdmVSYWlzZSwgcmVzb2x2ZVNlbmQsIHJlc3BvbmQsIHNlbmQsIHNlbmRQYXJlbnQsIHNlbmRVcGRhdGUsIHN0YXJ0LCBzdG9wLCB0b0FjdGlvbk9iamVjdCwgdG9BY3Rpb25PYmplY3RzLCB0b0FjdGl2aXR5RGVmaW5pdGlvbiB9OyIsInZhciBTVEFURV9ERUxJTUlURVIgPSAnLic7XG52YXIgRU1QVFlfQUNUSVZJVFlfTUFQID0ge307XG52YXIgREVGQVVMVF9HVUFSRF9UWVBFID0gJ3hzdGF0ZS5ndWFyZCc7XG52YXIgVEFSR0VUTEVTU19LRVkgPSAnJztcbmV4cG9ydCB7IERFRkFVTFRfR1VBUkRfVFlQRSwgRU1QVFlfQUNUSVZJVFlfTUFQLCBTVEFURV9ERUxJTUlURVIsIFRBUkdFVExFU1NfS0VZIH07IiwiaW1wb3J0IHsgSVNfUFJPRFVDVElPTiB9IGZyb20gJy4vZW52aXJvbm1lbnQuanMnO1xuXG5mdW5jdGlvbiBnZXREZXZUb29scygpIHtcbiAgdmFyIHcgPSB3aW5kb3c7XG5cbiAgaWYgKCEhdy5fX3hzdGF0ZV9fKSB7XG4gICAgcmV0dXJuIHcuX194c3RhdGVfXztcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyU2VydmljZShzZXJ2aWNlKSB7XG4gIGlmIChJU19QUk9EVUNUSU9OIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGRldlRvb2xzID0gZ2V0RGV2VG9vbHMoKTtcblxuICBpZiAoZGV2VG9vbHMpIHtcbiAgICBkZXZUb29scy5yZWdpc3RlcihzZXJ2aWNlKTtcbiAgfVxufVxuXG5leHBvcnQgeyByZWdpc3RlclNlcnZpY2UgfTsiLCJ2YXIgSVNfUFJPRFVDVElPTiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5leHBvcnQgeyBJU19QUk9EVUNUSU9OIH07IiwiZXhwb3J0IHsgbWF0Y2hlc1N0YXRlIH0gZnJvbSAnLi91dGlscy5qcyc7XG5leHBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJy4vbWFwU3RhdGUuanMnO1xuZXhwb3J0IHsgQWN0aW9uVHlwZXMsIFNwZWNpYWxUYXJnZXRzIH0gZnJvbSAnLi90eXBlcy5qcyc7XG5pbXBvcnQgeyByYWlzZSwgc2VuZCwgc2VuZFBhcmVudCwgc2VuZFVwZGF0ZSwgbG9nLCBjYW5jZWwsIHN0YXJ0LCBzdG9wLCBhc3NpZ24sIGFmdGVyLCBkb25lLCByZXNwb25kLCBmb3J3YXJkVG8sIGVzY2FsYXRlIH0gZnJvbSAnLi9hY3Rpb25zLmpzJztcbmV4cG9ydCB7IGFzc2lnbiwgZG9uZUludm9rZSwgZm9yd2FyZFRvLCBzZW5kLCBzZW5kUGFyZW50LCBzZW5kVXBkYXRlIH0gZnJvbSAnLi9hY3Rpb25zLmpzJztcbmV4cG9ydCB7IFN0YXRlIH0gZnJvbSAnLi9TdGF0ZS5qcyc7XG5leHBvcnQgeyBTdGF0ZU5vZGUgfSBmcm9tICcuL1N0YXRlTm9kZS5qcyc7XG5leHBvcnQgeyBNYWNoaW5lLCBjcmVhdGVNYWNoaW5lIH0gZnJvbSAnLi9NYWNoaW5lLmpzJztcbmV4cG9ydCB7IEludGVycHJldGVyLCBpbnRlcnByZXQsIHNwYXduIH0gZnJvbSAnLi9pbnRlcnByZXRlci5qcyc7XG5leHBvcnQgeyBtYXRjaFN0YXRlIH0gZnJvbSAnLi9tYXRjaC5qcyc7XG52YXIgYWN0aW9ucyA9IHtcbiAgcmFpc2U6IHJhaXNlLFxuICBzZW5kOiBzZW5kLFxuICBzZW5kUGFyZW50OiBzZW5kUGFyZW50LFxuICBzZW5kVXBkYXRlOiBzZW5kVXBkYXRlLFxuICBsb2c6IGxvZyxcbiAgY2FuY2VsOiBjYW5jZWwsXG4gIHN0YXJ0OiBzdGFydCxcbiAgc3RvcDogc3RvcCxcbiAgYXNzaWduOiBhc3NpZ24sXG4gIGFmdGVyOiBhZnRlcixcbiAgZG9uZTogZG9uZSxcbiAgcmVzcG9uZDogcmVzcG9uZCxcbiAgZm9yd2FyZFRvOiBmb3J3YXJkVG8sXG4gIGVzY2FsYXRlOiBlc2NhbGF0ZVxufTtcbmV4cG9ydCB7IGFjdGlvbnMgfTsiLCJpbXBvcnQgeyBfX3ZhbHVlcywgX19hc3NpZ24sIF9fc3ByZWFkIH0gZnJvbSAnLi9fdmlydHVhbC9fdHNsaWIuanMnO1xuaW1wb3J0IHsgSVNfUFJPRFVDVElPTiB9IGZyb20gJy4vZW52aXJvbm1lbnQuanMnO1xuaW1wb3J0IHsgd2FybiwgbWFwQ29udGV4dCwgaXNGdW5jdGlvbiwga2V5cywgdG9TQ1hNTEV2ZW50LCBpc1Byb21pc2VMaWtlLCBpc09ic2VydmFibGUsIGlzTWFjaGluZSwgcmVwb3J0VW5oYW5kbGVkRXhjZXB0aW9uT25JbnZvY2F0aW9uLCBzeW1ib2xPYnNlcnZhYmxlLCBpc0FycmF5LCB0b0V2ZW50T2JqZWN0LCBpc1N0cmluZywgdW5pcXVlSWQgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IEFjdGlvblR5cGVzLCBTcGVjaWFsVGFyZ2V0cyB9IGZyb20gJy4vdHlwZXMuanMnO1xuaW1wb3J0IHsgaXNJbkZpbmFsU3RhdGUgfSBmcm9tICcuL3N0YXRlVXRpbHMuanMnO1xuaW1wb3J0IHsgZXJyb3JQbGF0Zm9ybSwgbG9nLCBzdG9wLCBzdGFydCwgY2FuY2VsLCBzZW5kLCB1cGRhdGUsIGVycm9yIGFzIGVycm9yJDEgfSBmcm9tICcuL2FjdGlvblR5cGVzLmpzJztcbmltcG9ydCB7IGRvbmVJbnZva2UsIGluaXRFdmVudCwgZ2V0QWN0aW9uRnVuY3Rpb24sIGVycm9yIH0gZnJvbSAnLi9hY3Rpb25zLmpzJztcbmltcG9ydCB7IGlzU3RhdGUsIFN0YXRlLCBiaW5kQWN0aW9uVG9TdGF0ZSB9IGZyb20gJy4vU3RhdGUuanMnO1xuaW1wb3J0IHsgaXNBY3RvciB9IGZyb20gJy4vQWN0b3IuanMnO1xuaW1wb3J0IHsgU2NoZWR1bGVyIH0gZnJvbSAnLi9zY2hlZHVsZXIuanMnO1xuaW1wb3J0IHsgcmVnaXN0cnkgfSBmcm9tICcuL3JlZ2lzdHJ5LmpzJztcbmltcG9ydCB7IHJlZ2lzdGVyU2VydmljZSB9IGZyb20gJy4vZGV2VG9vbHMuanMnO1xudmFyIERFRkFVTFRfU1BBV05fT1BUSU9OUyA9IHtcbiAgc3luYzogZmFsc2UsXG4gIGF1dG9Gb3J3YXJkOiBmYWxzZVxufTtcbi8qKlxyXG4gKiBNYWludGFpbnMgYSBzdGFjayBvZiB0aGUgY3VycmVudCBzZXJ2aWNlIGluIHNjb3BlLlxyXG4gKiBUaGlzIGlzIHVzZWQgdG8gcHJvdmlkZSB0aGUgY29ycmVjdCBzZXJ2aWNlIHRvIHNwYXduKCkuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xuXG52YXIgd2l0aFNlcnZpY2VTY29wZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBzZXJ2aWNlU3RhY2sgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzZXJ2aWNlLCBmbikge1xuICAgIHNlcnZpY2UgJiYgc2VydmljZVN0YWNrLnB1c2goc2VydmljZSk7XG4gICAgdmFyIHJlc3VsdCA9IGZuKHNlcnZpY2UgfHwgc2VydmljZVN0YWNrW3NlcnZpY2VTdGFjay5sZW5ndGggLSAxXSk7XG4gICAgc2VydmljZSAmJiBzZXJ2aWNlU3RhY2sucG9wKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKTtcblxudmFyIEludGVycHJldGVyU3RhdHVzO1xuXG4oZnVuY3Rpb24gKEludGVycHJldGVyU3RhdHVzKSB7XG4gIEludGVycHJldGVyU3RhdHVzW0ludGVycHJldGVyU3RhdHVzW1wiTm90U3RhcnRlZFwiXSA9IDBdID0gXCJOb3RTdGFydGVkXCI7XG4gIEludGVycHJldGVyU3RhdHVzW0ludGVycHJldGVyU3RhdHVzW1wiUnVubmluZ1wiXSA9IDFdID0gXCJSdW5uaW5nXCI7XG4gIEludGVycHJldGVyU3RhdHVzW0ludGVycHJldGVyU3RhdHVzW1wiU3RvcHBlZFwiXSA9IDJdID0gXCJTdG9wcGVkXCI7XG59KShJbnRlcnByZXRlclN0YXR1cyB8fCAoSW50ZXJwcmV0ZXJTdGF0dXMgPSB7fSkpO1xuXG52YXIgSW50ZXJwcmV0ZXIgPVxuLyojX19QVVJFX18qL1xuXG4vKiogQGNsYXNzICovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgSW50ZXJwcmV0ZXIgaW5zdGFuY2UgKGkuZS4sIHNlcnZpY2UpIGZvciB0aGUgZ2l2ZW4gbWFjaGluZSB3aXRoIHRoZSBwcm92aWRlZCBvcHRpb25zLCBpZiBhbnkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbWFjaGluZSBUaGUgbWFjaGluZSB0byBiZSBpbnRlcnByZXRlZFxyXG4gICAqIEBwYXJhbSBvcHRpb25zIEludGVycHJldGVyIG9wdGlvbnNcclxuICAgKi9cbiAgZnVuY3Rpb24gSW50ZXJwcmV0ZXIobWFjaGluZSwgb3B0aW9ucywgc2Vzc2lvbklkKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBJbnRlcnByZXRlci5kZWZhdWx0T3B0aW9ucztcbiAgICB9XG5cbiAgICB0aGlzLm1hY2hpbmUgPSBtYWNoaW5lO1xuICAgIHRoaXMuc2NoZWR1bGVyID0gbmV3IFNjaGVkdWxlcigpO1xuICAgIHRoaXMuZGVsYXllZEV2ZW50c01hcCA9IHt9O1xuICAgIHRoaXMubGlzdGVuZXJzID0gbmV3IFNldCgpO1xuICAgIHRoaXMuY29udGV4dExpc3RlbmVycyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLnN0b3BMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5kb25lTGlzdGVuZXJzID0gbmV3IFNldCgpO1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5zZW5kTGlzdGVuZXJzID0gbmV3IFNldCgpO1xuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgc2VydmljZSBpcyBzdGFydGVkLlxyXG4gICAgICovXG5cbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5fc3RhdHVzID0gSW50ZXJwcmV0ZXJTdGF0dXMuTm90U3RhcnRlZDtcbiAgICB0aGlzLmNoaWxkcmVuID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuZm9yd2FyZFRvID0gbmV3IFNldCgpO1xuICAgIC8qKlxyXG4gICAgICogQWxpYXMgZm9yIEludGVycHJldGVyLnByb3RvdHlwZS5zdGFydFxyXG4gICAgICovXG5cbiAgICB0aGlzLmluaXQgPSB0aGlzLnN0YXJ0O1xuICAgIC8qKlxyXG4gICAgICogU2VuZHMgYW4gZXZlbnQgdG8gdGhlIHJ1bm5pbmcgaW50ZXJwcmV0ZXIgdG8gdHJpZ2dlciBhIHRyYW5zaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQW4gYXJyYXkgb2YgZXZlbnRzIChiYXRjaGVkKSBjYW4gYmUgc2VudCBhcyB3ZWxsLCB3aGljaCB3aWxsIHNlbmQgYWxsXHJcbiAgICAgKiBiYXRjaGVkIGV2ZW50cyB0byB0aGUgcnVubmluZyBpbnRlcnByZXRlci4gVGhlIGxpc3RlbmVycyB3aWxsIGJlXHJcbiAgICAgKiBub3RpZmllZCBvbmx5ICoqb25jZSoqIHdoZW4gYWxsIGV2ZW50cyBhcmUgcHJvY2Vzc2VkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQocykgdG8gc2VuZFxyXG4gICAgICovXG5cbiAgICB0aGlzLnNlbmQgPSBmdW5jdGlvbiAoZXZlbnQsIHBheWxvYWQpIHtcbiAgICAgIGlmIChpc0FycmF5KGV2ZW50KSkge1xuICAgICAgICBfdGhpcy5iYXRjaChldmVudCk7XG5cbiAgICAgICAgcmV0dXJuIF90aGlzLnN0YXRlO1xuICAgICAgfVxuXG4gICAgICB2YXIgX2V2ZW50ID0gdG9TQ1hNTEV2ZW50KHRvRXZlbnRPYmplY3QoZXZlbnQsIHBheWxvYWQpKTtcblxuICAgICAgaWYgKF90aGlzLl9zdGF0dXMgPT09IEludGVycHJldGVyU3RhdHVzLlN0b3BwZWQpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICBpZiAoIUlTX1BST0RVQ1RJT04pIHtcbiAgICAgICAgICB3YXJuKGZhbHNlLCBcIkV2ZW50IFxcXCJcIiArIF9ldmVudC5uYW1lICsgXCJcXFwiIHdhcyBzZW50IHRvIHN0b3BwZWQgc2VydmljZSBcXFwiXCIgKyBfdGhpcy5tYWNoaW5lLmlkICsgXCJcXFwiLiBUaGlzIHNlcnZpY2UgaGFzIGFscmVhZHkgcmVhY2hlZCBpdHMgZmluYWwgc3RhdGUsIGFuZCB3aWxsIG5vdCB0cmFuc2l0aW9uLlxcbkV2ZW50OiBcIiArIEpTT04uc3RyaW5naWZ5KF9ldmVudC5kYXRhKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3RoaXMuc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5fc3RhdHVzID09PSBJbnRlcnByZXRlclN0YXR1cy5Ob3RTdGFydGVkICYmIF90aGlzLm9wdGlvbnMuZGVmZXJFdmVudHMpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgaWYgKCFJU19QUk9EVUNUSU9OKSB7XG4gICAgICAgICAgd2FybihmYWxzZSwgXCJFdmVudCBcXFwiXCIgKyBfZXZlbnQubmFtZSArIFwiXFxcIiB3YXMgc2VudCB0byB1bmluaXRpYWxpemVkIHNlcnZpY2UgXFxcIlwiICsgX3RoaXMubWFjaGluZS5pZCArIFwiXFxcIiBhbmQgaXMgZGVmZXJyZWQuIE1ha2Ugc3VyZSAuc3RhcnQoKSBpcyBjYWxsZWQgZm9yIHRoaXMgc2VydmljZS5cXG5FdmVudDogXCIgKyBKU09OLnN0cmluZ2lmeShfZXZlbnQuZGF0YSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKF90aGlzLl9zdGF0dXMgIT09IEludGVycHJldGVyU3RhdHVzLlJ1bm5pbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXZlbnQgXFxcIlwiICsgX2V2ZW50Lm5hbWUgKyBcIlxcXCIgd2FzIHNlbnQgdG8gdW5pbml0aWFsaXplZCBzZXJ2aWNlIFxcXCJcIiArIF90aGlzLm1hY2hpbmUuaWQgKyBcIlxcXCIuIE1ha2Ugc3VyZSAuc3RhcnQoKSBpcyBjYWxsZWQgZm9yIHRoaXMgc2VydmljZSwgb3Igc2V0IHsgZGVmZXJFdmVudHM6IHRydWUgfSBpbiB0aGUgc2VydmljZSBvcHRpb25zLlxcbkV2ZW50OiBcIiArIEpTT04uc3RyaW5naWZ5KF9ldmVudC5kYXRhKSk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEZvcndhcmQgY29weSBvZiBldmVudCB0byBjaGlsZCBhY3RvcnNcbiAgICAgICAgX3RoaXMuZm9yd2FyZChfZXZlbnQpO1xuXG4gICAgICAgIHZhciBuZXh0U3RhdGUgPSBfdGhpcy5uZXh0U3RhdGUoX2V2ZW50KTtcblxuICAgICAgICBfdGhpcy51cGRhdGUobmV4dFN0YXRlLCBfZXZlbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBfdGhpcy5fc3RhdGU7IC8vIFRPRE86IGRlcHJlY2F0ZSAoc2hvdWxkIHJldHVybiB2b2lkKVxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnNlbWljb2xvblxuICAgIH07XG5cbiAgICB0aGlzLnNlbmRUbyA9IGZ1bmN0aW9uIChldmVudCwgdG8pIHtcbiAgICAgIHZhciBpc1BhcmVudCA9IF90aGlzLnBhcmVudCAmJiAodG8gPT09IFNwZWNpYWxUYXJnZXRzLlBhcmVudCB8fCBfdGhpcy5wYXJlbnQuaWQgPT09IHRvKTtcbiAgICAgIHZhciB0YXJnZXQgPSBpc1BhcmVudCA/IF90aGlzLnBhcmVudCA6IGlzQWN0b3IodG8pID8gdG8gOiBfdGhpcy5jaGlsZHJlbi5nZXQodG8pIHx8IHJlZ2lzdHJ5LmdldCh0byk7XG5cbiAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgIGlmICghaXNQYXJlbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gc2VuZCBldmVudCB0byBjaGlsZCAnXCIgKyB0byArIFwiJyBmcm9tIHNlcnZpY2UgJ1wiICsgX3RoaXMuaWQgKyBcIicuXCIpO1xuICAgICAgICB9IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5cblxuICAgICAgICBpZiAoIUlTX1BST0RVQ1RJT04pIHtcbiAgICAgICAgICB3YXJuKGZhbHNlLCBcIlNlcnZpY2UgJ1wiICsgX3RoaXMuaWQgKyBcIicgaGFzIG5vIHBhcmVudDogdW5hYmxlIHRvIHNlbmQgZXZlbnQgXCIgKyBldmVudC50eXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCdtYWNoaW5lJyBpbiB0YXJnZXQpIHtcbiAgICAgICAgLy8gU2VuZCBTQ1hNTCBldmVudHMgdG8gbWFjaGluZXNcbiAgICAgICAgdGFyZ2V0LnNlbmQoX19hc3NpZ24oX19hc3NpZ24oe30sIGV2ZW50KSwge1xuICAgICAgICAgIG5hbWU6IGV2ZW50Lm5hbWUgPT09IGVycm9yJDEgPyBcIlwiICsgZXJyb3IoX3RoaXMuaWQpIDogZXZlbnQubmFtZSxcbiAgICAgICAgICBvcmlnaW46IF90aGlzLnNlc3Npb25JZFxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZW5kIG5vcm1hbCBldmVudHMgdG8gb3RoZXIgdGFyZ2V0c1xuICAgICAgICB0YXJnZXQuc2VuZChldmVudC5kYXRhKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJlc29sdmVkT3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBJbnRlcnByZXRlci5kZWZhdWx0T3B0aW9ucyksIG9wdGlvbnMpO1xuXG4gICAgdmFyIGNsb2NrID0gcmVzb2x2ZWRPcHRpb25zLmNsb2NrLFxuICAgICAgICBsb2dnZXIgPSByZXNvbHZlZE9wdGlvbnMubG9nZ2VyLFxuICAgICAgICBwYXJlbnQgPSByZXNvbHZlZE9wdGlvbnMucGFyZW50LFxuICAgICAgICBpZCA9IHJlc29sdmVkT3B0aW9ucy5pZDtcbiAgICB2YXIgcmVzb2x2ZWRJZCA9IGlkICE9PSB1bmRlZmluZWQgPyBpZCA6IG1hY2hpbmUuaWQ7XG4gICAgdGhpcy5pZCA9IHJlc29sdmVkSWQ7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgdGhpcy5jbG9jayA9IGNsb2NrO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMub3B0aW9ucyA9IHJlc29sdmVkT3B0aW9ucztcbiAgICB0aGlzLnNjaGVkdWxlciA9IG5ldyBTY2hlZHVsZXIoe1xuICAgICAgZGVmZXJFdmVudHM6IHRoaXMub3B0aW9ucy5kZWZlckV2ZW50c1xuICAgIH0pO1xuICAgIHRoaXMuc2Vzc2lvbklkID0gc2Vzc2lvbklkICE9PSB1bmRlZmluZWQgPyBzZXNzaW9uSWQgOiByZWdpc3RyeS5yZWdpc3Rlcih0aGlzKTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbnRlcnByZXRlci5wcm90b3R5cGUsIFwiaW5pdGlhbFN0YXRlXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9pbml0aWFsU3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luaXRpYWxTdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdpdGhTZXJ2aWNlU2NvcGUodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5faW5pdGlhbFN0YXRlID0gX3RoaXMubWFjaGluZS5pbml0aWFsU3RhdGU7XG4gICAgICAgIHJldHVybiBfdGhpcy5faW5pdGlhbFN0YXRlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEludGVycHJldGVyLnByb3RvdHlwZSwgXCJzdGF0ZVwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIUlTX1BST0RVQ1RJT04pIHtcbiAgICAgICAgd2Fybih0aGlzLl9zdGF0dXMgIT09IEludGVycHJldGVyU3RhdHVzLk5vdFN0YXJ0ZWQsIFwiQXR0ZW1wdGVkIHRvIHJlYWQgc3RhdGUgZnJvbSB1bmluaXRpYWxpemVkIHNlcnZpY2UgJ1wiICsgdGhpcy5pZCArIFwiJy4gTWFrZSBzdXJlIHRoZSBzZXJ2aWNlIGlzIHN0YXJ0ZWQgZmlyc3QuXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgLyoqXHJcbiAgICogRXhlY3V0ZXMgdGhlIGFjdGlvbnMgb2YgdGhlIGdpdmVuIHN0YXRlLCB3aXRoIHRoYXQgc3RhdGUncyBgY29udGV4dGAgYW5kIGBldmVudGAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RhdGUgVGhlIHN0YXRlIHdob3NlIGFjdGlvbnMgd2lsbCBiZSBleGVjdXRlZFxyXG4gICAqIEBwYXJhbSBhY3Rpb25zQ29uZmlnIFRoZSBhY3Rpb24gaW1wbGVtZW50YXRpb25zIHRvIHVzZVxyXG4gICAqL1xuXG4gIEludGVycHJldGVyLnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb25zQ29uZmlnKSB7XG4gICAgdmFyIGVfMSwgX2E7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhzdGF0ZS5hY3Rpb25zKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICB2YXIgYWN0aW9uID0gX2MudmFsdWU7XG4gICAgICAgIHRoaXMuZXhlYyhhY3Rpb24sIHN0YXRlLCBhY3Rpb25zQ29uZmlnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlXzFfMSkge1xuICAgICAgZV8xID0ge1xuICAgICAgICBlcnJvcjogZV8xXzFcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgX2V2ZW50KSB7XG4gICAgdmFyIGVfMiwgX2EsIGVfMywgX2IsIGVfNCwgX2MsIGVfNSwgX2Q7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzOyAvLyBBdHRhY2ggc2Vzc2lvbiBJRCB0byBzdGF0ZVxuXG5cbiAgICBzdGF0ZS5fc2Vzc2lvbmlkID0gdGhpcy5zZXNzaW9uSWQ7IC8vIFVwZGF0ZSBzdGF0ZVxuXG4gICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTsgLy8gRXhlY3V0ZSBhY3Rpb25zXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmV4ZWN1dGUpIHtcbiAgICAgIHRoaXMuZXhlY3V0ZSh0aGlzLnN0YXRlKTtcbiAgICB9IC8vIERldiB0b29sc1xuXG5cbiAgICBpZiAodGhpcy5kZXZUb29scykge1xuICAgICAgdGhpcy5kZXZUb29scy5zZW5kKF9ldmVudC5kYXRhLCBzdGF0ZSk7XG4gICAgfSAvLyBFeGVjdXRlIGxpc3RlbmVyc1xuXG5cbiAgICBpZiAoc3RhdGUuZXZlbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9lID0gX192YWx1ZXModGhpcy5ldmVudExpc3RlbmVycyksIF9mID0gX2UubmV4dCgpOyAhX2YuZG9uZTsgX2YgPSBfZS5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBfZi52YWx1ZTtcbiAgICAgICAgICBsaXN0ZW5lcihzdGF0ZS5ldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVfMl8xKSB7XG4gICAgICAgIGVfMiA9IHtcbiAgICAgICAgICBlcnJvcjogZV8yXzFcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKF9mICYmICFfZi5kb25lICYmIChfYSA9IF9lLnJldHVybikpIF9hLmNhbGwoX2UpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfZyA9IF9fdmFsdWVzKHRoaXMubGlzdGVuZXJzKSwgX2ggPSBfZy5uZXh0KCk7ICFfaC5kb25lOyBfaCA9IF9nLm5leHQoKSkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBfaC52YWx1ZTtcbiAgICAgICAgbGlzdGVuZXIoc3RhdGUsIHN0YXRlLmV2ZW50KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlXzNfMSkge1xuICAgICAgZV8zID0ge1xuICAgICAgICBlcnJvcjogZV8zXzFcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChfaCAmJiAhX2guZG9uZSAmJiAoX2IgPSBfZy5yZXR1cm4pKSBfYi5jYWxsKF9nKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlXzMpIHRocm93IGVfMy5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2ogPSBfX3ZhbHVlcyh0aGlzLmNvbnRleHRMaXN0ZW5lcnMpLCBfayA9IF9qLm5leHQoKTsgIV9rLmRvbmU7IF9rID0gX2oubmV4dCgpKSB7XG4gICAgICAgIHZhciBjb250ZXh0TGlzdGVuZXIgPSBfay52YWx1ZTtcbiAgICAgICAgY29udGV4dExpc3RlbmVyKHRoaXMuc3RhdGUuY29udGV4dCwgdGhpcy5zdGF0ZS5oaXN0b3J5ID8gdGhpcy5zdGF0ZS5oaXN0b3J5LmNvbnRleHQgOiB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVfNF8xKSB7XG4gICAgICBlXzQgPSB7XG4gICAgICAgIGVycm9yOiBlXzRfMVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKF9rICYmICFfay5kb25lICYmIChfYyA9IF9qLnJldHVybikpIF9jLmNhbGwoX2opO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGVfNCkgdGhyb3cgZV80LmVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBpc0RvbmUgPSBpc0luRmluYWxTdGF0ZShzdGF0ZS5jb25maWd1cmF0aW9uIHx8IFtdLCB0aGlzLm1hY2hpbmUpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuY29uZmlndXJhdGlvbiAmJiBpc0RvbmUpIHtcbiAgICAgIC8vIGdldCBmaW5hbCBjaGlsZCBzdGF0ZSBub2RlXG4gICAgICB2YXIgZmluYWxDaGlsZFN0YXRlTm9kZSA9IHN0YXRlLmNvbmZpZ3VyYXRpb24uZmluZChmdW5jdGlvbiAoc24pIHtcbiAgICAgICAgcmV0dXJuIHNuLnR5cGUgPT09ICdmaW5hbCcgJiYgc24ucGFyZW50ID09PSBfdGhpcy5tYWNoaW5lO1xuICAgICAgfSk7XG4gICAgICB2YXIgZG9uZURhdGEgPSBmaW5hbENoaWxkU3RhdGVOb2RlICYmIGZpbmFsQ2hpbGRTdGF0ZU5vZGUuZGF0YSA/IG1hcENvbnRleHQoZmluYWxDaGlsZFN0YXRlTm9kZS5kYXRhLCBzdGF0ZS5jb250ZXh0LCBfZXZlbnQpIDogdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfbCA9IF9fdmFsdWVzKHRoaXMuZG9uZUxpc3RlbmVycyksIF9tID0gX2wubmV4dCgpOyAhX20uZG9uZTsgX20gPSBfbC5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBfbS52YWx1ZTtcbiAgICAgICAgICBsaXN0ZW5lcihkb25lSW52b2tlKHRoaXMuaWQsIGRvbmVEYXRhKSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVfNV8xKSB7XG4gICAgICAgIGVfNSA9IHtcbiAgICAgICAgICBlcnJvcjogZV81XzFcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKF9tICYmICFfbS5kb25lICYmIChfZCA9IF9sLnJldHVybikpIF9kLmNhbGwoX2wpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChlXzUpIHRocm93IGVfNS5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH07XG4gIC8qXHJcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRoYXQgaXMgbm90aWZpZWQgd2hlbmV2ZXIgYSBzdGF0ZSB0cmFuc2l0aW9uIGhhcHBlbnMuIFRoZSBsaXN0ZW5lciBpcyBjYWxsZWQgd2l0aFxyXG4gICAqIHRoZSBuZXh0IHN0YXRlIGFuZCB0aGUgZXZlbnQgb2JqZWN0IHRoYXQgY2F1c2VkIHRoZSBzdGF0ZSB0cmFuc2l0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGxpc3RlbmVyIFRoZSBzdGF0ZSBsaXN0ZW5lclxyXG4gICAqL1xuXG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLm9uVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIHRoaXMubGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7IC8vIFNlbmQgY3VycmVudCBzdGF0ZSB0byBsaXN0ZW5lclxuXG4gICAgaWYgKHRoaXMuX3N0YXR1cyA9PT0gSW50ZXJwcmV0ZXJTdGF0dXMuUnVubmluZykge1xuICAgICAgbGlzdGVuZXIodGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZS5ldmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChuZXh0TGlzdGVuZXJPck9ic2VydmVyLCAvLyBAdHMtaWdub3JlXG4gIGVycm9yTGlzdGVuZXIsIGNvbXBsZXRlTGlzdGVuZXIpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKCFuZXh0TGlzdGVuZXJPck9ic2VydmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVyO1xuICAgIHZhciByZXNvbHZlZENvbXBsZXRlTGlzdGVuZXIgPSBjb21wbGV0ZUxpc3RlbmVyO1xuXG4gICAgaWYgKHR5cGVvZiBuZXh0TGlzdGVuZXJPck9ic2VydmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsaXN0ZW5lciA9IG5leHRMaXN0ZW5lck9yT2JzZXJ2ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RlbmVyID0gbmV4dExpc3RlbmVyT3JPYnNlcnZlci5uZXh0LmJpbmQobmV4dExpc3RlbmVyT3JPYnNlcnZlcik7XG4gICAgICByZXNvbHZlZENvbXBsZXRlTGlzdGVuZXIgPSBuZXh0TGlzdGVuZXJPck9ic2VydmVyLmNvbXBsZXRlLmJpbmQobmV4dExpc3RlbmVyT3JPYnNlcnZlcik7XG4gICAgfVxuXG4gICAgdGhpcy5saXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTsgLy8gU2VuZCBjdXJyZW50IHN0YXRlIHRvIGxpc3RlbmVyXG5cbiAgICBpZiAodGhpcy5fc3RhdHVzID09PSBJbnRlcnByZXRlclN0YXR1cy5SdW5uaW5nKSB7XG4gICAgICBsaXN0ZW5lcih0aGlzLnN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAocmVzb2x2ZWRDb21wbGV0ZUxpc3RlbmVyKSB7XG4gICAgICB0aGlzLm9uRG9uZShyZXNvbHZlZENvbXBsZXRlTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBsaXN0ZW5lciAmJiBfdGhpcy5saXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgICAgcmVzb2x2ZWRDb21wbGV0ZUxpc3RlbmVyICYmIF90aGlzLmRvbmVMaXN0ZW5lcnMuZGVsZXRlKHJlc29sdmVkQ29tcGxldGVMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgLyoqXHJcbiAgICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0aGF0IGlzIG5vdGlmaWVkIHdoZW5ldmVyIGFuIGV2ZW50IGlzIHNlbnQgdG8gdGhlIHJ1bm5pbmcgaW50ZXJwcmV0ZXIuXHJcbiAgICogQHBhcmFtIGxpc3RlbmVyIFRoZSBldmVudCBsaXN0ZW5lclxyXG4gICAqL1xuXG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLm9uRXZlbnQgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIC8qKlxyXG4gICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCBpcyBub3RpZmllZCB3aGVuZXZlciBhIGBzZW5kYCBldmVudCBvY2N1cnMuXHJcbiAgICogQHBhcmFtIGxpc3RlbmVyIFRoZSBldmVudCBsaXN0ZW5lclxyXG4gICAqL1xuXG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLm9uU2VuZCA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIHRoaXMuc2VuZExpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvKipcclxuICAgKiBBZGRzIGEgY29udGV4dCBsaXN0ZW5lciB0aGF0IGlzIG5vdGlmaWVkIHdoZW5ldmVyIHRoZSBzdGF0ZSBjb250ZXh0IGNoYW5nZXMuXHJcbiAgICogQHBhcmFtIGxpc3RlbmVyIFRoZSBjb250ZXh0IGxpc3RlbmVyXHJcbiAgICovXG5cblxuICBJbnRlcnByZXRlci5wcm90b3R5cGUub25DaGFuZ2UgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICB0aGlzLmNvbnRleHRMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLyoqXHJcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRoYXQgaXMgbm90aWZpZWQgd2hlbiB0aGUgbWFjaGluZSBpcyBzdG9wcGVkLlxyXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBUaGUgbGlzdGVuZXJcclxuICAgKi9cblxuXG4gIEludGVycHJldGVyLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICB0aGlzLnN0b3BMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLyoqXHJcbiAgICogQWRkcyBhIHN0YXRlIGxpc3RlbmVyIHRoYXQgaXMgbm90aWZpZWQgd2hlbiB0aGUgc3RhdGVjaGFydCBoYXMgcmVhY2hlZCBpdHMgZmluYWwgc3RhdGUuXHJcbiAgICogQHBhcmFtIGxpc3RlbmVyIFRoZSBzdGF0ZSBsaXN0ZW5lclxyXG4gICAqL1xuXG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLm9uRG9uZSA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIHRoaXMuZG9uZUxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvKipcclxuICAgKiBSZW1vdmVzIGEgbGlzdGVuZXIuXHJcbiAgICogQHBhcmFtIGxpc3RlbmVyIFRoZSBsaXN0ZW5lciB0byByZW1vdmVcclxuICAgKi9cblxuXG4gIEludGVycHJldGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICB0aGlzLnNlbmRMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICB0aGlzLnN0b3BMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICB0aGlzLmRvbmVMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICB0aGlzLmNvbnRleHRMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLyoqXHJcbiAgICogU3RhcnRzIHRoZSBpbnRlcnByZXRlciBmcm9tIHRoZSBnaXZlbiBzdGF0ZSwgb3IgdGhlIGluaXRpYWwgc3RhdGUuXHJcbiAgICogQHBhcmFtIGluaXRpYWxTdGF0ZSBUaGUgc3RhdGUgdG8gc3RhcnQgdGhlIHN0YXRlY2hhcnQgZnJvbVxyXG4gICAqL1xuXG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKGluaXRpYWxTdGF0ZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5fc3RhdHVzID09PSBJbnRlcnByZXRlclN0YXR1cy5SdW5uaW5nKSB7XG4gICAgICAvLyBEbyBub3QgcmVzdGFydCB0aGUgc2VydmljZSBpZiBpdCBpcyBhbHJlYWR5IHN0YXJ0ZWRcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuX3N0YXR1cyA9IEludGVycHJldGVyU3RhdHVzLlJ1bm5pbmc7XG4gICAgdmFyIHJlc29sdmVkU3RhdGUgPSBpbml0aWFsU3RhdGUgPT09IHVuZGVmaW5lZCA/IHRoaXMuaW5pdGlhbFN0YXRlIDogd2l0aFNlcnZpY2VTY29wZSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaXNTdGF0ZShpbml0aWFsU3RhdGUpID8gX3RoaXMubWFjaGluZS5yZXNvbHZlU3RhdGUoaW5pdGlhbFN0YXRlKSA6IF90aGlzLm1hY2hpbmUucmVzb2x2ZVN0YXRlKFN0YXRlLmZyb20oaW5pdGlhbFN0YXRlLCBfdGhpcy5tYWNoaW5lLmNvbnRleHQpKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGV2VG9vbHMpIHtcbiAgICAgIHRoaXMuYXR0YWNoRGV2KCk7XG4gICAgfVxuXG4gICAgdGhpcy5zY2hlZHVsZXIuaW5pdGlhbGl6ZShmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy51cGRhdGUocmVzb2x2ZWRTdGF0ZSwgaW5pdEV2ZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLyoqXHJcbiAgICogU3RvcHMgdGhlIGludGVycHJldGVyIGFuZCB1bnN1YnNjcmliZSBhbGwgbGlzdGVuZXJzLlxyXG4gICAqXHJcbiAgICogVGhpcyB3aWxsIGFsc28gbm90aWZ5IHRoZSBgb25TdG9wYCBsaXN0ZW5lcnMuXHJcbiAgICovXG5cblxuICBJbnRlcnByZXRlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZV82LCBfYSwgZV83LCBfYiwgZV84LCBfYywgZV85LCBfZCwgZV8xMCwgX2U7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2YgPSBfX3ZhbHVlcyh0aGlzLmxpc3RlbmVycyksIF9nID0gX2YubmV4dCgpOyAhX2cuZG9uZTsgX2cgPSBfZi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gX2cudmFsdWU7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZV82XzEpIHtcbiAgICAgIGVfNiA9IHtcbiAgICAgICAgZXJyb3I6IGVfNl8xXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoX2cgJiYgIV9nLmRvbmUgJiYgKF9hID0gX2YucmV0dXJuKSkgX2EuY2FsbChfZik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZV82KSB0aHJvdyBlXzYuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9oID0gX192YWx1ZXModGhpcy5zdG9wTGlzdGVuZXJzKSwgX2ogPSBfaC5uZXh0KCk7ICFfai5kb25lOyBfaiA9IF9oLm5leHQoKSkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBfai52YWx1ZTsgLy8gY2FsbCBsaXN0ZW5lciwgdGhlbiByZW1vdmVcblxuICAgICAgICBsaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnN0b3BMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlXzdfMSkge1xuICAgICAgZV83ID0ge1xuICAgICAgICBlcnJvcjogZV83XzFcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChfaiAmJiAhX2ouZG9uZSAmJiAoX2IgPSBfaC5yZXR1cm4pKSBfYi5jYWxsKF9oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlXzcpIHRocm93IGVfNy5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2sgPSBfX3ZhbHVlcyh0aGlzLmNvbnRleHRMaXN0ZW5lcnMpLCBfbCA9IF9rLm5leHQoKTsgIV9sLmRvbmU7IF9sID0gX2submV4dCgpKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IF9sLnZhbHVlO1xuICAgICAgICB0aGlzLmNvbnRleHRMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlXzhfMSkge1xuICAgICAgZV84ID0ge1xuICAgICAgICBlcnJvcjogZV84XzFcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChfbCAmJiAhX2wuZG9uZSAmJiAoX2MgPSBfay5yZXR1cm4pKSBfYy5jYWxsKF9rKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlXzgpIHRocm93IGVfOC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX20gPSBfX3ZhbHVlcyh0aGlzLmRvbmVMaXN0ZW5lcnMpLCBfbyA9IF9tLm5leHQoKTsgIV9vLmRvbmU7IF9vID0gX20ubmV4dCgpKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IF9vLnZhbHVlO1xuICAgICAgICB0aGlzLmRvbmVMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlXzlfMSkge1xuICAgICAgZV85ID0ge1xuICAgICAgICBlcnJvcjogZV85XzFcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChfbyAmJiAhX28uZG9uZSAmJiAoX2QgPSBfbS5yZXR1cm4pKSBfZC5jYWxsKF9tKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlXzkpIHRocm93IGVfOS5lcnJvcjtcbiAgICAgIH1cbiAgICB9IC8vIFN0b3AgYWxsIGNoaWxkcmVuXG5cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKGNoaWxkLnN0b3ApKSB7XG4gICAgICAgIGNoaWxkLnN0b3AoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBDYW5jZWwgYWxsIGRlbGF5ZWQgZXZlbnRzXG4gICAgICBmb3IgKHZhciBfcCA9IF9fdmFsdWVzKGtleXModGhpcy5kZWxheWVkRXZlbnRzTWFwKSksIF9xID0gX3AubmV4dCgpOyAhX3EuZG9uZTsgX3EgPSBfcC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGtleSA9IF9xLnZhbHVlO1xuICAgICAgICB0aGlzLmNsb2NrLmNsZWFyVGltZW91dCh0aGlzLmRlbGF5ZWRFdmVudHNNYXBba2V5XSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZV8xMF8xKSB7XG4gICAgICBlXzEwID0ge1xuICAgICAgICBlcnJvcjogZV8xMF8xXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoX3EgJiYgIV9xLmRvbmUgJiYgKF9lID0gX3AucmV0dXJuKSkgX2UuY2FsbChfcCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZV8xMCkgdGhyb3cgZV8xMC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNjaGVkdWxlci5jbGVhcigpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9zdGF0dXMgPSBJbnRlcnByZXRlclN0YXR1cy5TdG9wcGVkO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEludGVycHJldGVyLnByb3RvdHlwZS5iYXRjaCA9IGZ1bmN0aW9uIChldmVudHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuX3N0YXR1cyA9PT0gSW50ZXJwcmV0ZXJTdGF0dXMuTm90U3RhcnRlZCAmJiB0aGlzLm9wdGlvbnMuZGVmZXJFdmVudHMpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICBpZiAoIUlTX1BST0RVQ1RJT04pIHtcbiAgICAgICAgd2FybihmYWxzZSwgZXZlbnRzLmxlbmd0aCArIFwiIGV2ZW50KHMpIHdlcmUgc2VudCB0byB1bmluaXRpYWxpemVkIHNlcnZpY2UgXFxcIlwiICsgdGhpcy5tYWNoaW5lLmlkICsgXCJcXFwiIGFuZCBhcmUgZGVmZXJyZWQuIE1ha2Ugc3VyZSAuc3RhcnQoKSBpcyBjYWxsZWQgZm9yIHRoaXMgc2VydmljZS5cXG5FdmVudDogXCIgKyBKU09OLnN0cmluZ2lmeShldmVudCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdHVzICE9PSBJbnRlcnByZXRlclN0YXR1cy5SdW5uaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgIGV2ZW50cy5sZW5ndGggKyBcIiBldmVudChzKSB3ZXJlIHNlbnQgdG8gdW5pbml0aWFsaXplZCBzZXJ2aWNlIFxcXCJcIiArIHRoaXMubWFjaGluZS5pZCArIFwiXFxcIi4gTWFrZSBzdXJlIC5zdGFydCgpIGlzIGNhbGxlZCBmb3IgdGhpcyBzZXJ2aWNlLCBvciBzZXQgeyBkZWZlckV2ZW50czogdHJ1ZSB9IGluIHRoZSBzZXJ2aWNlIG9wdGlvbnMuXCIpO1xuICAgIH1cblxuICAgIHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlXzExLCBfYTtcblxuICAgICAgdmFyIG5leHRTdGF0ZSA9IF90aGlzLnN0YXRlO1xuICAgICAgdmFyIGJhdGNoQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdmFyIGJhdGNoZWRBY3Rpb25zID0gW107XG5cbiAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGV2ZW50XzEpIHtcbiAgICAgICAgdmFyIF9ldmVudCA9IHRvU0NYTUxFdmVudChldmVudF8xKTtcblxuICAgICAgICBfdGhpcy5mb3J3YXJkKF9ldmVudCk7XG5cbiAgICAgICAgbmV4dFN0YXRlID0gd2l0aFNlcnZpY2VTY29wZShfdGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5tYWNoaW5lLnRyYW5zaXRpb24obmV4dFN0YXRlLCBfZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgYmF0Y2hlZEFjdGlvbnMucHVzaC5hcHBseShiYXRjaGVkQWN0aW9ucywgX19zcHJlYWQobmV4dFN0YXRlLmFjdGlvbnMubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgcmV0dXJuIGJpbmRBY3Rpb25Ub1N0YXRlKGEsIG5leHRTdGF0ZSk7XG4gICAgICAgIH0pKSk7XG4gICAgICAgIGJhdGNoQ2hhbmdlZCA9IGJhdGNoQ2hhbmdlZCB8fCAhIW5leHRTdGF0ZS5jaGFuZ2VkO1xuICAgICAgfTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgZXZlbnRzXzEgPSBfX3ZhbHVlcyhldmVudHMpLCBldmVudHNfMV8xID0gZXZlbnRzXzEubmV4dCgpOyAhZXZlbnRzXzFfMS5kb25lOyBldmVudHNfMV8xID0gZXZlbnRzXzEubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGV2ZW50XzEgPSBldmVudHNfMV8xLnZhbHVlO1xuXG4gICAgICAgICAgX2xvb3BfMShldmVudF8xKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZV8xMV8xKSB7XG4gICAgICAgIGVfMTEgPSB7XG4gICAgICAgICAgZXJyb3I6IGVfMTFfMVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoZXZlbnRzXzFfMSAmJiAhZXZlbnRzXzFfMS5kb25lICYmIChfYSA9IGV2ZW50c18xLnJldHVybikpIF9hLmNhbGwoZXZlbnRzXzEpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChlXzExKSB0aHJvdyBlXzExLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGF0ZS5jaGFuZ2VkID0gYmF0Y2hDaGFuZ2VkO1xuICAgICAgbmV4dFN0YXRlLmFjdGlvbnMgPSBiYXRjaGVkQWN0aW9ucztcblxuICAgICAgX3RoaXMudXBkYXRlKG5leHRTdGF0ZSwgdG9TQ1hNTEV2ZW50KGV2ZW50c1tldmVudHMubGVuZ3RoIC0gMV0pKTtcbiAgICB9KTtcbiAgfTtcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIHNlbmQgZnVuY3Rpb24gYm91bmQgdG8gdGhpcyBpbnRlcnByZXRlciBpbnN0YW5jZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgdG8gYmUgc2VudCBieSB0aGUgc2VuZGVyLlxyXG4gICAqL1xuXG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnNlbmRlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiB0aGlzLnNlbmQuYmluZCh0aGlzLCBldmVudCk7XG4gIH07XG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIG5leHQgc3RhdGUgZ2l2ZW4gdGhlIGludGVycHJldGVyJ3MgY3VycmVudCBzdGF0ZSBhbmQgdGhlIGV2ZW50LlxyXG4gICAqXHJcbiAgICogVGhpcyBpcyBhIHB1cmUgbWV0aG9kIHRoYXQgZG9lcyBfbm90XyB1cGRhdGUgdGhlIGludGVycHJldGVyJ3Mgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IHRvIGRldGVybWluZSB0aGUgbmV4dCBzdGF0ZVxyXG4gICAqL1xuXG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLm5leHRTdGF0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX2V2ZW50ID0gdG9TQ1hNTEV2ZW50KGV2ZW50KTtcblxuICAgIGlmIChfZXZlbnQubmFtZS5pbmRleE9mKGVycm9yUGxhdGZvcm0pID09PSAwICYmICF0aGlzLnN0YXRlLm5leHRFdmVudHMuc29tZShmdW5jdGlvbiAobmV4dEV2ZW50KSB7XG4gICAgICByZXR1cm4gbmV4dEV2ZW50LmluZGV4T2YoZXJyb3JQbGF0Zm9ybSkgPT09IDA7XG4gICAgfSkpIHtcbiAgICAgIHRocm93IF9ldmVudC5kYXRhLmRhdGE7XG4gICAgfVxuXG4gICAgdmFyIG5leHRTdGF0ZSA9IHdpdGhTZXJ2aWNlU2NvcGUodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLm1hY2hpbmUudHJhbnNpdGlvbihfdGhpcy5zdGF0ZSwgX2V2ZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9O1xuXG4gIEludGVycHJldGVyLnByb3RvdHlwZS5mb3J3YXJkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGVfMTIsIF9hO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy5mb3J3YXJkVG8pLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgIHZhciBpZCA9IF9jLnZhbHVlO1xuICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkcmVuLmdldChpZCk7XG5cbiAgICAgICAgaWYgKCFjaGlsZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBmb3J3YXJkIGV2ZW50ICdcIiArIGV2ZW50ICsgXCInIGZyb20gaW50ZXJwcmV0ZXIgJ1wiICsgdGhpcy5pZCArIFwiJyB0byBub25leGlzdGFudCBjaGlsZCAnXCIgKyBpZCArIFwiJy5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5zZW5kKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlXzEyXzEpIHtcbiAgICAgIGVfMTIgPSB7XG4gICAgICAgIGVycm9yOiBlXzEyXzFcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlXzEyKSB0aHJvdyBlXzEyLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBJbnRlcnByZXRlci5wcm90b3R5cGUuZGVmZXIgPSBmdW5jdGlvbiAoc2VuZEFjdGlvbikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLmRlbGF5ZWRFdmVudHNNYXBbc2VuZEFjdGlvbi5pZF0gPSB0aGlzLmNsb2NrLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbmRBY3Rpb24udG8pIHtcbiAgICAgICAgX3RoaXMuc2VuZFRvKHNlbmRBY3Rpb24uX2V2ZW50LCBzZW5kQWN0aW9uLnRvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnNlbmQoc2VuZEFjdGlvbi5fZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIHNlbmRBY3Rpb24uZGVsYXkpO1xuICB9O1xuXG4gIEludGVycHJldGVyLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoc2VuZElkKSB7XG4gICAgdGhpcy5jbG9jay5jbGVhclRpbWVvdXQodGhpcy5kZWxheWVkRXZlbnRzTWFwW3NlbmRJZF0pO1xuICAgIGRlbGV0ZSB0aGlzLmRlbGF5ZWRFdmVudHNNYXBbc2VuZElkXTtcbiAgfTtcblxuICBJbnRlcnByZXRlci5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uIChhY3Rpb24sIHN0YXRlLCBhY3Rpb25GdW5jdGlvbk1hcCkge1xuICAgIHZhciBjb250ZXh0ID0gc3RhdGUuY29udGV4dCxcbiAgICAgICAgX2V2ZW50ID0gc3RhdGUuX2V2ZW50O1xuICAgIHZhciBhY3Rpb25PckV4ZWMgPSBnZXRBY3Rpb25GdW5jdGlvbihhY3Rpb24udHlwZSwgYWN0aW9uRnVuY3Rpb25NYXApIHx8IGFjdGlvbi5leGVjO1xuICAgIHZhciBleGVjID0gaXNGdW5jdGlvbihhY3Rpb25PckV4ZWMpID8gYWN0aW9uT3JFeGVjIDogYWN0aW9uT3JFeGVjID8gYWN0aW9uT3JFeGVjLmV4ZWMgOiBhY3Rpb24uZXhlYztcblxuICAgIGlmIChleGVjKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZXhlYyhjb250ZXh0LCBfZXZlbnQuZGF0YSwge1xuICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgICAgIF9ldmVudDogX2V2ZW50XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgIHRoaXMucGFyZW50LnNlbmQoe1xuICAgICAgICAgICAgdHlwZTogJ3hzdGF0ZS5lcnJvcicsXG4gICAgICAgICAgICBkYXRhOiBlcnJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIHNlbmQ6XG4gICAgICAgIHZhciBzZW5kQWN0aW9uID0gYWN0aW9uO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc2VuZEFjdGlvbi5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB0aGlzLmRlZmVyKHNlbmRBY3Rpb24pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc2VuZEFjdGlvbi50bykge1xuICAgICAgICAgICAgdGhpcy5zZW5kVG8oc2VuZEFjdGlvbi5fZXZlbnQsIHNlbmRBY3Rpb24udG8pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbmQoc2VuZEFjdGlvbi5fZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGNhbmNlbDpcbiAgICAgICAgdGhpcy5jYW5jZWwoYWN0aW9uLnNlbmRJZCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGFjdGl2aXR5ID0gYWN0aW9uLmFjdGl2aXR5OyAvLyBJZiB0aGUgYWN0aXZpdHkgd2lsbCBiZSBzdG9wcGVkIHJpZ2h0IGFmdGVyIGl0J3Mgc3RhcnRlZFxuICAgICAgICAgIC8vIChzdWNoIGFzIGluIHRyYW5zaWVudCBzdGF0ZXMpXG4gICAgICAgICAgLy8gZG9uJ3QgYm90aGVyIHN0YXJ0aW5nIHRoZSBhY3Rpdml0eS5cblxuICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5hY3Rpdml0aWVzW2FjdGl2aXR5LnR5cGVdKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IC8vIEludm9rZWQgc2VydmljZXNcblxuXG4gICAgICAgICAgaWYgKGFjdGl2aXR5LnR5cGUgPT09IEFjdGlvblR5cGVzLkludm9rZSkge1xuICAgICAgICAgICAgdmFyIHNlcnZpY2VDcmVhdG9yID0gdGhpcy5tYWNoaW5lLm9wdGlvbnMuc2VydmljZXMgPyB0aGlzLm1hY2hpbmUub3B0aW9ucy5zZXJ2aWNlc1thY3Rpdml0eS5zcmNdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIGlkID0gYWN0aXZpdHkuaWQsXG4gICAgICAgICAgICAgICAgZGF0YSA9IGFjdGl2aXR5LmRhdGE7XG5cbiAgICAgICAgICAgIGlmICghSVNfUFJPRFVDVElPTikge1xuICAgICAgICAgICAgICB3YXJuKCEoJ2ZvcndhcmQnIGluIGFjdGl2aXR5KSwgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgICBcImBmb3J3YXJkYCBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkIChmb3VuZCBpbiBpbnZvY2F0aW9uIG9mICdcIiArIGFjdGl2aXR5LnNyYyArIFwiJyBpbiBpbiBtYWNoaW5lICdcIiArIHRoaXMubWFjaGluZS5pZCArIFwiJykuIFwiICsgXCJQbGVhc2UgdXNlIGBhdXRvRm9yd2FyZGAgaW5zdGVhZC5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhdXRvRm9yd2FyZCA9ICdhdXRvRm9yd2FyZCcgaW4gYWN0aXZpdHkgPyBhY3Rpdml0eS5hdXRvRm9yd2FyZCA6ICEhYWN0aXZpdHkuZm9yd2FyZDtcblxuICAgICAgICAgICAgaWYgKCFzZXJ2aWNlQ3JlYXRvcikge1xuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgICAgICBpZiAoIUlTX1BST0RVQ1RJT04pIHtcbiAgICAgICAgICAgICAgICB3YXJuKGZhbHNlLCBcIk5vIHNlcnZpY2UgZm91bmQgZm9yIGludm9jYXRpb24gJ1wiICsgYWN0aXZpdHkuc3JjICsgXCInIGluIG1hY2hpbmUgJ1wiICsgdGhpcy5tYWNoaW5lLmlkICsgXCInLlwiKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGlzRnVuY3Rpb24oc2VydmljZUNyZWF0b3IpID8gc2VydmljZUNyZWF0b3IoY29udGV4dCwgX2V2ZW50LmRhdGEpIDogc2VydmljZUNyZWF0b3I7XG5cbiAgICAgICAgICAgIGlmIChpc1Byb21pc2VMaWtlKHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jaGlsZHJlbltpZF0gPSB0aGlzLnNwYXduUHJvbWlzZShQcm9taXNlLnJlc29sdmUoc291cmNlKSwgaWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jaGlsZHJlbltpZF0gPSB0aGlzLnNwYXduQ2FsbGJhY2soc291cmNlLCBpZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZShzb3VyY2UpKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2hpbGRyZW5baWRdID0gdGhpcy5zcGF3bk9ic2VydmFibGUoc291cmNlLCBpZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTWFjaGluZShzb3VyY2UpKSB7XG4gICAgICAgICAgICAgIC8vIFRPRE86IHRyeS9jYXRjaCBoZXJlXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2hpbGRyZW5baWRdID0gdGhpcy5zcGF3bk1hY2hpbmUoZGF0YSA/IHNvdXJjZS53aXRoQ29udGV4dChtYXBDb250ZXh0KGRhdGEsIGNvbnRleHQsIF9ldmVudCkpIDogc291cmNlLCB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIGF1dG9Gb3J3YXJkOiBhdXRvRm9yd2FyZFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zcGF3bkFjdGl2aXR5KGFjdGl2aXR5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIHN0b3A6XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0b3BDaGlsZChhY3Rpb24uYWN0aXZpdHkuaWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgbG9nOlxuICAgICAgICB2YXIgbGFiZWwgPSBhY3Rpb24ubGFiZWwsXG4gICAgICAgICAgICB2YWx1ZSA9IGFjdGlvbi52YWx1ZTtcblxuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICB0aGlzLmxvZ2dlcihsYWJlbCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubG9nZ2VyKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoIUlTX1BST0RVQ1RJT04pIHtcbiAgICAgICAgICB3YXJuKGZhbHNlLCBcIk5vIGltcGxlbWVudGF0aW9uIGZvdW5kIGZvciBhY3Rpb24gdHlwZSAnXCIgKyBhY3Rpb24udHlwZSArIFwiJ1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnN0b3BDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZElkKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZHJlbi5nZXQoY2hpbGRJZCk7XG5cbiAgICBpZiAoIWNoaWxkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jaGlsZHJlbi5kZWxldGUoY2hpbGRJZCk7XG4gICAgdGhpcy5mb3J3YXJkVG8uZGVsZXRlKGNoaWxkSWQpO1xuICAgIGRlbGV0ZSB0aGlzLnN0YXRlLmNoaWxkcmVuW2NoaWxkSWRdO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oY2hpbGQuc3RvcCkpIHtcbiAgICAgIGNoaWxkLnN0b3AoKTtcbiAgICB9XG4gIH07XG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnNwYXduID0gZnVuY3Rpb24gKGVudGl0eSwgbmFtZSwgb3B0aW9ucykge1xuICAgIGlmIChpc1Byb21pc2VMaWtlKGVudGl0eSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNwYXduUHJvbWlzZShQcm9taXNlLnJlc29sdmUoZW50aXR5KSwgbmFtZSk7XG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKGVudGl0eSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNwYXduQ2FsbGJhY2soZW50aXR5LCBuYW1lKTtcbiAgICB9IGVsc2UgaWYgKGlzQWN0b3IoZW50aXR5KSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3Bhd25BY3RvcihlbnRpdHkpO1xuICAgIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlKGVudGl0eSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNwYXduT2JzZXJ2YWJsZShlbnRpdHksIG5hbWUpO1xuICAgIH0gZWxzZSBpZiAoaXNNYWNoaW5lKGVudGl0eSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNwYXduTWFjaGluZShlbnRpdHksIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zKSwge1xuICAgICAgICBpZDogbmFtZVxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gc3Bhd24gZW50aXR5IFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgb2YgdHlwZSBcXFwiXCIgKyB0eXBlb2YgZW50aXR5ICsgXCJcXFwiLlwiKTtcbiAgICB9XG4gIH07XG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnNwYXduTWFjaGluZSA9IGZ1bmN0aW9uIChtYWNoaW5lLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRTZXJ2aWNlID0gbmV3IEludGVycHJldGVyKG1hY2hpbmUsIF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMpLCB7XG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBpZDogb3B0aW9ucy5pZCB8fCBtYWNoaW5lLmlkXG4gICAgfSkpO1xuXG4gICAgdmFyIHJlc29sdmVkT3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBERUZBVUxUX1NQQVdOX09QVElPTlMpLCBvcHRpb25zKTtcblxuICAgIGlmIChyZXNvbHZlZE9wdGlvbnMuc3luYykge1xuICAgICAgY2hpbGRTZXJ2aWNlLm9uVHJhbnNpdGlvbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgX3RoaXMuc2VuZCh1cGRhdGUsIHtcbiAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgaWQ6IGNoaWxkU2VydmljZS5pZFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoaWxkU2VydmljZS5vbkRvbmUoZnVuY3Rpb24gKGRvbmVFdmVudCkge1xuICAgICAgX3RoaXMuc2VuZCh0b1NDWE1MRXZlbnQoZG9uZUV2ZW50LCB7XG4gICAgICAgIG9yaWdpbjogY2hpbGRTZXJ2aWNlLmlkXG4gICAgICB9KSk7XG4gICAgfSkuc3RhcnQoKTtcbiAgICB2YXIgYWN0b3IgPSBjaGlsZFNlcnZpY2U7XG4gICAgdGhpcy5jaGlsZHJlbi5zZXQoY2hpbGRTZXJ2aWNlLmlkLCBhY3Rvcik7XG5cbiAgICBpZiAocmVzb2x2ZWRPcHRpb25zLmF1dG9Gb3J3YXJkKSB7XG4gICAgICB0aGlzLmZvcndhcmRUby5hZGQoY2hpbGRTZXJ2aWNlLmlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0b3I7XG4gIH07XG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnNwYXduUHJvbWlzZSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpZCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgY2FuY2VsZWQgPSBmYWxzZTtcbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiAoIWNhbmNlbGVkKSB7XG4gICAgICAgIF90aGlzLnNlbmQodG9TQ1hNTEV2ZW50KGRvbmVJbnZva2UoaWQsIHJlc3BvbnNlKSwge1xuICAgICAgICAgIG9yaWdpbjogaWRcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnJvckRhdGEpIHtcbiAgICAgIGlmICghY2FuY2VsZWQpIHtcbiAgICAgICAgdmFyIGVycm9yRXZlbnQgPSBlcnJvcihpZCwgZXJyb3JEYXRhKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNlbmQgXCJlcnJvci5wbGF0Zm9ybS5pZFwiIHRvIHRoaXMgKHBhcmVudCkuXG4gICAgICAgICAgX3RoaXMuc2VuZCh0b1NDWE1MRXZlbnQoZXJyb3JFdmVudCwge1xuICAgICAgICAgICAgb3JpZ2luOiBpZFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZXBvcnRVbmhhbmRsZWRFeGNlcHRpb25Pbkludm9jYXRpb24oZXJyb3JEYXRhLCBlcnJvciwgaWQpO1xuXG4gICAgICAgICAgaWYgKF90aGlzLmRldlRvb2xzKSB7XG4gICAgICAgICAgICBfdGhpcy5kZXZUb29scy5zZW5kKGVycm9yRXZlbnQsIF90aGlzLnN0YXRlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3RoaXMubWFjaGluZS5zdHJpY3QpIHtcbiAgICAgICAgICAgIC8vIGl0IHdvdWxkIGJlIGJldHRlciB0byBhbHdheXMgc3RvcCB0aGUgc3RhdGUgbWFjaGluZSBpZiB1bmhhbmRsZWRcbiAgICAgICAgICAgIC8vIGV4Y2VwdGlvbi9wcm9taXNlIHJlamVjdGlvbiBoYXBwZW5zIGJ1dCBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgICAgIC8vIGJyZWFrIGV4aXN0aW5nIGNvZGUgc28gZW5mb3JjZSBpdCBvbiBzdHJpY3QgbW9kZSBvbmx5IGVzcGVjaWFsbHkgc29cbiAgICAgICAgICAgIC8vIGJlY2F1c2UgZG9jdW1lbnRhdGlvbiBzYXlzIHRoYXQgb25FcnJvciBpcyBvcHRpb25hbFxuICAgICAgICAgICAgX3RoaXMuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBhY3RvciA9IHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgIH0sXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIChuZXh0LCBoYW5kbGVFcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKHVuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQgJiYgbmV4dChyZXNwb25zZSk7XG5cbiAgICAgICAgICBpZiAodW5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29tcGxldGUgJiYgY29tcGxldGUoKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGlmICh1bnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuc3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FuY2VsZWQgPSB0cnVlO1xuICAgICAgfSxcbiAgICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBpZFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jaGlsZHJlbi5zZXQoaWQsIGFjdG9yKTtcbiAgICByZXR1cm4gYWN0b3I7XG4gIH07XG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnNwYXduQ2FsbGJhY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGlkKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBjYW5jZWxlZCA9IGZhbHNlO1xuICAgIHZhciByZWNlaXZlcnMgPSBuZXcgU2V0KCk7XG4gICAgdmFyIGxpc3RlbmVycyA9IG5ldyBTZXQoKTtcblxuICAgIHZhciByZWNlaXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXIoZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNhbmNlbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2VuZChlKTtcbiAgICB9O1xuXG4gICAgdmFyIGNhbGxiYWNrU3RvcDtcblxuICAgIHRyeSB7XG4gICAgICBjYWxsYmFja1N0b3AgPSBjYWxsYmFjayhyZWNlaXZlLCBmdW5jdGlvbiAobmV3TGlzdGVuZXIpIHtcbiAgICAgICAgcmVjZWl2ZXJzLmFkZChuZXdMaXN0ZW5lcik7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuc2VuZChlcnJvcihpZCwgZXJyKSk7XG4gICAgfVxuXG4gICAgaWYgKGlzUHJvbWlzZUxpa2UoY2FsbGJhY2tTdG9wKSkge1xuICAgICAgLy8gaXQgdHVybmVkIG91dCB0byBiZSBhbiBhc3luYyBmdW5jdGlvbiwgY2FuJ3QgcmVsaWFibHkgY2hlY2sgdGhpcyBiZWZvcmUgY2FsbGluZyBgY2FsbGJhY2tgXG4gICAgICAvLyBiZWNhdXNlIHRyYW5zcGlsZWQgYXN5bmMgZnVuY3Rpb25zIGFyZSBub3QgcmVjb2duaXphYmxlXG4gICAgICByZXR1cm4gdGhpcy5zcGF3blByb21pc2UoY2FsbGJhY2tTdG9wLCBpZCk7XG4gICAgfVxuXG4gICAgdmFyIGFjdG9yID0ge1xuICAgICAgaWQ6IGlkLFxuICAgICAgc2VuZDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiByZWNlaXZlcnMuZm9yRWFjaChmdW5jdGlvbiAocmVjZWl2ZXIpIHtcbiAgICAgICAgICByZXR1cm4gcmVjZWl2ZXIoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIGxpc3RlbmVycy5hZGQobmV4dCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUobmV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FuY2VsZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGNhbGxiYWNrU3RvcCkpIHtcbiAgICAgICAgICBjYWxsYmFja1N0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBpZFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jaGlsZHJlbi5zZXQoaWQsIGFjdG9yKTtcbiAgICByZXR1cm4gYWN0b3I7XG4gIH07XG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnNwYXduT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChzb3VyY2UsIGlkKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBzdWJzY3JpcHRpb24gPSBzb3VyY2Uuc3Vic2NyaWJlKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgX3RoaXMuc2VuZCh0b1NDWE1MRXZlbnQodmFsdWUsIHtcbiAgICAgICAgb3JpZ2luOiBpZFxuICAgICAgfSkpO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIF90aGlzLnNlbmQodG9TQ1hNTEV2ZW50KGVycm9yKGlkLCBlcnIpLCB7XG4gICAgICAgIG9yaWdpbjogaWRcbiAgICAgIH0pKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZW5kKHRvU0NYTUxFdmVudChkb25lSW52b2tlKGlkKSwge1xuICAgICAgICBvcmlnaW46IGlkXG4gICAgICB9KSk7XG4gICAgfSk7XG4gICAgdmFyIGFjdG9yID0ge1xuICAgICAgaWQ6IGlkLFxuICAgICAgc2VuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgfSxcbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKG5leHQsIGhhbmRsZUVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXh0LCBoYW5kbGVFcnJvciwgY29tcGxldGUpO1xuICAgICAgfSxcbiAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgfSxcbiAgICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBpZFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jaGlsZHJlbi5zZXQoaWQsIGFjdG9yKTtcbiAgICByZXR1cm4gYWN0b3I7XG4gIH07XG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnNwYXduQWN0b3IgPSBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnNldChhY3Rvci5pZCwgYWN0b3IpO1xuICAgIHJldHVybiBhY3RvcjtcbiAgfTtcblxuICBJbnRlcnByZXRlci5wcm90b3R5cGUuc3Bhd25BY3Rpdml0eSA9IGZ1bmN0aW9uIChhY3Rpdml0eSkge1xuICAgIHZhciBpbXBsZW1lbnRhdGlvbiA9IHRoaXMubWFjaGluZS5vcHRpb25zICYmIHRoaXMubWFjaGluZS5vcHRpb25zLmFjdGl2aXRpZXMgPyB0aGlzLm1hY2hpbmUub3B0aW9ucy5hY3Rpdml0aWVzW2FjdGl2aXR5LnR5cGVdIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKCFpbXBsZW1lbnRhdGlvbikge1xuICAgICAgaWYgKCFJU19QUk9EVUNUSU9OKSB7XG4gICAgICAgIHdhcm4oZmFsc2UsIFwiTm8gaW1wbGVtZW50YXRpb24gZm91bmQgZm9yIGFjdGl2aXR5ICdcIiArIGFjdGl2aXR5LnR5cGUgKyBcIidcIik7XG4gICAgICB9IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5cblxuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gU3RhcnQgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGRpc3Bvc2UgPSBpbXBsZW1lbnRhdGlvbih0aGlzLnN0YXRlLmNvbnRleHQsIGFjdGl2aXR5KTtcbiAgICB0aGlzLnNwYXduRWZmZWN0KGFjdGl2aXR5LmlkLCBkaXNwb3NlKTtcbiAgfTtcblxuICBJbnRlcnByZXRlci5wcm90b3R5cGUuc3Bhd25FZmZlY3QgPSBmdW5jdGlvbiAoaWQsIGRpc3Bvc2UpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnNldChpZCwge1xuICAgICAgaWQ6IGlkLFxuICAgICAgc2VuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgfSxcbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBzdG9wOiBkaXNwb3NlIHx8IHVuZGVmaW5lZCxcbiAgICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBpZFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIEludGVycHJldGVyLnByb3RvdHlwZS5hdHRhY2hEZXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kZXZUb29scyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKSB7XG4gICAgICAgIHZhciBkZXZUb29sc09wdGlvbnMgPSB0eXBlb2YgdGhpcy5vcHRpb25zLmRldlRvb2xzID09PSAnb2JqZWN0JyA/IHRoaXMub3B0aW9ucy5kZXZUb29scyA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5kZXZUb29scyA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fLmNvbm5lY3QoX19hc3NpZ24oX19hc3NpZ24oe1xuICAgICAgICAgIG5hbWU6IHRoaXMuaWQsXG4gICAgICAgICAgYXV0b1BhdXNlOiB0cnVlLFxuICAgICAgICAgIHN0YXRlU2FuaXRpemVyOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBzdGF0ZS52YWx1ZSxcbiAgICAgICAgICAgICAgY29udGV4dDogc3RhdGUuY29udGV4dCxcbiAgICAgICAgICAgICAgYWN0aW9uczogc3RhdGUuYWN0aW9uc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGRldlRvb2xzT3B0aW9ucyksIHtcbiAgICAgICAgICBmZWF0dXJlczogX19hc3NpZ24oe1xuICAgICAgICAgICAganVtcDogZmFsc2UsXG4gICAgICAgICAgICBza2lwOiBmYWxzZVxuICAgICAgICAgIH0sIGRldlRvb2xzT3B0aW9ucyA/IGRldlRvb2xzT3B0aW9ucy5mZWF0dXJlcyA6IHVuZGVmaW5lZClcbiAgICAgICAgfSksIHRoaXMubWFjaGluZSk7XG4gICAgICAgIHRoaXMuZGV2VG9vbHMuaW5pdCh0aGlzLnN0YXRlKTtcbiAgICAgIH0gLy8gYWRkIFhTdGF0ZS1zcGVjaWZpYyBkZXYgdG9vbGluZyBob29rXG5cblxuICAgICAgcmVnaXN0ZXJTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBJbnRlcnByZXRlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZFxuICAgIH07XG4gIH07XG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlW3N5bWJvbE9ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvKipcclxuICAgKiBUaGUgZGVmYXVsdCBpbnRlcnByZXRlciBvcHRpb25zOlxyXG4gICAqXHJcbiAgICogLSBgY2xvY2tgIHVzZXMgdGhlIGdsb2JhbCBgc2V0VGltZW91dGAgYW5kIGBjbGVhclRpbWVvdXRgIGZ1bmN0aW9uc1xyXG4gICAqIC0gYGxvZ2dlcmAgdXNlcyB0aGUgZ2xvYmFsIGBjb25zb2xlLmxvZygpYCBtZXRob2RcclxuICAgKi9cblxuXG4gIEludGVycHJldGVyLmRlZmF1bHRPcHRpb25zID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4ZWN1dGU6IHRydWUsXG4gICAgICBkZWZlckV2ZW50czogdHJ1ZSxcbiAgICAgIGNsb2NrOiB7XG4gICAgICAgIHNldFRpbWVvdXQ6IGZ1bmN0aW9uIChmbiwgbXMpIHtcbiAgICAgICAgICByZXR1cm4gZ2xvYmFsLnNldFRpbWVvdXQuY2FsbChudWxsLCBmbiwgbXMpO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhclRpbWVvdXQ6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIHJldHVybiBnbG9iYWwuY2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgaWQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbG9nZ2VyOiBnbG9iYWwuY29uc29sZS5sb2cuYmluZChjb25zb2xlKSxcbiAgICAgIGRldlRvb2xzOiBmYWxzZVxuICAgIH07XG4gIH0odHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3cpO1xuXG4gIEludGVycHJldGVyLmludGVycHJldCA9IGludGVycHJldDtcbiAgcmV0dXJuIEludGVycHJldGVyO1xufSgpO1xuXG52YXIgY3JlYXRlTnVsbEFjdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKG5hbWUgPT09IHZvaWQgMCkge1xuICAgIG5hbWUgPSAnbnVsbCc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlkOiBuYW1lLFxuICAgIHNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHt9XG4gICAgICB9O1xuICAgIH0sXG4gICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogbmFtZVxuICAgICAgfTtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgcmVzb2x2ZVNwYXduT3B0aW9ucyA9IGZ1bmN0aW9uIChuYW1lT3JPcHRpb25zKSB7XG4gIGlmIChpc1N0cmluZyhuYW1lT3JPcHRpb25zKSkge1xuICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgREVGQVVMVF9TUEFXTl9PUFRJT05TKSwge1xuICAgICAgbmFtZTogbmFtZU9yT3B0aW9uc1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCBERUZBVUxUX1NQQVdOX09QVElPTlMpLCB7XG4gICAgbmFtZTogdW5pcXVlSWQoKVxuICB9KSwgbmFtZU9yT3B0aW9ucyk7XG59O1xuXG5mdW5jdGlvbiBzcGF3bihlbnRpdHksIG5hbWVPck9wdGlvbnMpIHtcbiAgdmFyIHJlc29sdmVkT3B0aW9ucyA9IHJlc29sdmVTcGF3bk9wdGlvbnMobmFtZU9yT3B0aW9ucyk7XG4gIHJldHVybiB3aXRoU2VydmljZVNjb3BlKHVuZGVmaW5lZCwgZnVuY3Rpb24gKHNlcnZpY2UpIHtcbiAgICBpZiAoIUlTX1BST0RVQ1RJT04pIHtcbiAgICAgIHdhcm4oISFzZXJ2aWNlLCBcIkF0dGVtcHRlZCB0byBzcGF3biBhbiBBY3RvciAoSUQ6IFxcXCJcIiArIChpc01hY2hpbmUoZW50aXR5KSA/IGVudGl0eS5pZCA6ICd1bmRlZmluZWQnKSArIFwiXFxcIikgb3V0c2lkZSBvZiBhIHNlcnZpY2UuIFRoaXMgd2lsbCBoYXZlIG5vIGVmZmVjdC5cIik7XG4gICAgfVxuXG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIHJldHVybiBzZXJ2aWNlLnNwYXduKGVudGl0eSwgcmVzb2x2ZWRPcHRpb25zLm5hbWUsIHJlc29sdmVkT3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjcmVhdGVOdWxsQWN0b3IocmVzb2x2ZWRPcHRpb25zLm5hbWUpO1xuICAgIH1cbiAgfSk7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBJbnRlcnByZXRlciBpbnN0YW5jZSBmb3IgdGhlIGdpdmVuIG1hY2hpbmUgd2l0aCB0aGUgcHJvdmlkZWQgb3B0aW9ucywgaWYgYW55LlxyXG4gKlxyXG4gKiBAcGFyYW0gbWFjaGluZSBUaGUgbWFjaGluZSB0byBpbnRlcnByZXRcclxuICogQHBhcmFtIG9wdGlvbnMgSW50ZXJwcmV0ZXIgb3B0aW9uc1xyXG4gKi9cblxuXG5mdW5jdGlvbiBpbnRlcnByZXQobWFjaGluZSwgb3B0aW9ucykge1xuICB2YXIgaW50ZXJwcmV0ZXIgPSBuZXcgSW50ZXJwcmV0ZXIobWFjaGluZSwgb3B0aW9ucyk7XG4gIHJldHVybiBpbnRlcnByZXRlcjtcbn1cblxuZXhwb3J0IHsgSW50ZXJwcmV0ZXIsIGludGVycHJldCwgc3Bhd24gfTsiLCJpbXBvcnQgeyBfX3ZhbHVlcyB9IGZyb20gJy4vX3ZpcnR1YWwvX3RzbGliLmpzJztcbmltcG9ydCB7IGtleXMsIG1hdGNoZXNTdGF0ZSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZU1hcCwgc3RhdGVJZCkge1xuICB2YXIgZV8xLCBfYTtcblxuICB2YXIgZm91bmRTdGF0ZUlkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhrZXlzKHN0YXRlTWFwKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgIHZhciBtYXBwZWRTdGF0ZUlkID0gX2MudmFsdWU7XG5cbiAgICAgIGlmIChtYXRjaGVzU3RhdGUobWFwcGVkU3RhdGVJZCwgc3RhdGVJZCkgJiYgKCFmb3VuZFN0YXRlSWQgfHwgc3RhdGVJZC5sZW5ndGggPiBmb3VuZFN0YXRlSWQubGVuZ3RoKSkge1xuICAgICAgICBmb3VuZFN0YXRlSWQgPSBtYXBwZWRTdGF0ZUlkO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZV8xXzEpIHtcbiAgICBlXzEgPSB7XG4gICAgICBlcnJvcjogZV8xXzFcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVNYXBbZm91bmRTdGF0ZUlkXTtcbn1cblxuZXhwb3J0IHsgbWFwU3RhdGUgfTsiLCJpbXBvcnQgeyBfX3ZhbHVlcywgX19yZWFkIH0gZnJvbSAnLi9fdmlydHVhbC9fdHNsaWIuanMnO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL1N0YXRlLmpzJztcblxuZnVuY3Rpb24gbWF0Y2hTdGF0ZShzdGF0ZSwgcGF0dGVybnMsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgZV8xLCBfYTtcblxuICB2YXIgcmVzb2x2ZWRTdGF0ZSA9IFN0YXRlLmZyb20oc3RhdGUsIHN0YXRlIGluc3RhbmNlb2YgU3RhdGUgPyBzdGF0ZS5jb250ZXh0IDogdW5kZWZpbmVkKTtcblxuICB0cnkge1xuICAgIGZvciAodmFyIHBhdHRlcm5zXzEgPSBfX3ZhbHVlcyhwYXR0ZXJucyksIHBhdHRlcm5zXzFfMSA9IHBhdHRlcm5zXzEubmV4dCgpOyAhcGF0dGVybnNfMV8xLmRvbmU7IHBhdHRlcm5zXzFfMSA9IHBhdHRlcm5zXzEubmV4dCgpKSB7XG4gICAgICB2YXIgX2IgPSBfX3JlYWQocGF0dGVybnNfMV8xLnZhbHVlLCAyKSxcbiAgICAgICAgICBzdGF0ZVZhbHVlID0gX2JbMF0sXG4gICAgICAgICAgZ2V0VmFsdWUgPSBfYlsxXTtcblxuICAgICAgaWYgKHJlc29sdmVkU3RhdGUubWF0Y2hlcyhzdGF0ZVZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZ2V0VmFsdWUocmVzb2x2ZWRTdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlXzFfMSkge1xuICAgIGVfMSA9IHtcbiAgICAgIGVycm9yOiBlXzFfMVxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChwYXR0ZXJuc18xXzEgJiYgIXBhdHRlcm5zXzFfMS5kb25lICYmIChfYSA9IHBhdHRlcm5zXzEucmV0dXJuKSkgX2EuY2FsbChwYXR0ZXJuc18xKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0VmFsdWUocmVzb2x2ZWRTdGF0ZSk7XG59XG5cbmV4cG9ydCB7IG1hdGNoU3RhdGUgfTsiLCJ2YXIgY2hpbGRyZW4gPVxuLyojX19QVVJFX18qL1xubmV3IE1hcCgpO1xudmFyIGlkTWFwID1cbi8qI19fUFVSRV9fKi9cbm5ldyBNYXAoKTtcbnZhciBzZXNzaW9uSWRJbmRleCA9IDA7XG52YXIgcmVnaXN0cnkgPSB7XG4gIHJlZ2lzdGVyOiBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICB2YXIgaWQgPSBcIng6XCIgKyBzZXNzaW9uSWRJbmRleCsrO1xuICAgIGNoaWxkcmVuLnNldChpZCwgYWN0b3IpO1xuICAgIGlkTWFwLnNldChhY3RvciwgaWQpO1xuICAgIHJldHVybiBpZDtcbiAgfSxcbiAgZ2V0OiBmdW5jdGlvbiAoaWQpIHtcbiAgICByZXR1cm4gY2hpbGRyZW4uZ2V0KGlkKTtcbiAgfSxcbiAgbG9va3VwOiBmdW5jdGlvbiAoYWN0b3JSZWYpIHtcbiAgICByZXR1cm4gaWRNYXAuZ2V0KGFjdG9yUmVmKTtcbiAgfVxufTtcbmV4cG9ydCB7IHJlZ2lzdHJ5IH07IiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tICcuL192aXJ0dWFsL190c2xpYi5qcyc7XG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGRlZmVyRXZlbnRzOiBmYWxzZVxufTtcblxudmFyIFNjaGVkdWxlciA9XG4vKiNfX1BVUkVfXyovXG5cbi8qKiBAY2xhc3MgKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2NoZWR1bGVyKG9wdGlvbnMpIHtcbiAgICB0aGlzLnByb2Nlc3NpbmdFdmVudCA9IGZhbHNlO1xuICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5vcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucyk7XG4gIH1cblxuICBTY2hlZHVsZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZGVmZXJFdmVudHMpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZShjYWxsYmFjayk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9jZXNzKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICB0aGlzLmZsdXNoRXZlbnRzKCk7XG4gIH07XG5cbiAgU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkIHx8IHRoaXMucHJvY2Vzc2luZ0V2ZW50KSB7XG4gICAgICB0aGlzLnF1ZXVlLnB1c2godGFzayk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V2ZW50IHF1ZXVlIHNob3VsZCBiZSBlbXB0eSB3aGVuIGl0IGlzIG5vdCBwcm9jZXNzaW5nIGV2ZW50cycpO1xuICAgIH1cblxuICAgIHRoaXMucHJvY2Vzcyh0YXNrKTtcbiAgICB0aGlzLmZsdXNoRXZlbnRzKCk7XG4gIH07XG5cbiAgU2NoZWR1bGVyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnF1ZXVlID0gW107XG4gIH07XG5cbiAgU2NoZWR1bGVyLnByb3RvdHlwZS5mbHVzaEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmV4dENhbGxiYWNrID0gdGhpcy5xdWV1ZS5zaGlmdCgpO1xuXG4gICAgd2hpbGUgKG5leHRDYWxsYmFjaykge1xuICAgICAgdGhpcy5wcm9jZXNzKG5leHRDYWxsYmFjayk7XG4gICAgICBuZXh0Q2FsbGJhY2sgPSB0aGlzLnF1ZXVlLnNoaWZ0KCk7XG4gICAgfVxuICB9O1xuXG4gIFNjaGVkdWxlci5wcm90b3R5cGUucHJvY2VzcyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHRoaXMucHJvY2Vzc2luZ0V2ZW50ID0gdHJ1ZTtcblxuICAgIHRyeSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIHRoZXJlIGlzIG5vIHVzZSB0byBrZWVwIHRoZSBmdXR1cmUgZXZlbnRzXG4gICAgICAvLyBhcyB0aGUgc2l0dWF0aW9uIGlzIG5vdCBhbnltb3JlIHRoZSBzYW1lXG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB0aHJvdyBlO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnByb2Nlc3NpbmdFdmVudCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU2NoZWR1bGVyO1xufSgpO1xuXG5leHBvcnQgeyBTY2hlZHVsZXIgfTsiLCJpbXBvcnQgeyBfX3ZhbHVlcywgX19zcHJlYWQgfSBmcm9tICcuL192aXJ0dWFsL190c2xpYi5qcyc7XG5pbXBvcnQgeyBrZXlzLCBmbGF0dGVuIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbnZhciBpc0xlYWZOb2RlID0gZnVuY3Rpb24gKHN0YXRlTm9kZSkge1xuICByZXR1cm4gc3RhdGVOb2RlLnR5cGUgPT09ICdhdG9taWMnIHx8IHN0YXRlTm9kZS50eXBlID09PSAnZmluYWwnO1xufTtcblxuZnVuY3Rpb24gZ2V0Q2hpbGRyZW4oc3RhdGVOb2RlKSB7XG4gIHJldHVybiBrZXlzKHN0YXRlTm9kZS5zdGF0ZXMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHN0YXRlTm9kZS5zdGF0ZXNba2V5XTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEFsbFN0YXRlTm9kZXMoc3RhdGVOb2RlKSB7XG4gIHZhciBzdGF0ZU5vZGVzID0gW3N0YXRlTm9kZV07XG5cbiAgaWYgKGlzTGVhZk5vZGUoc3RhdGVOb2RlKSkge1xuICAgIHJldHVybiBzdGF0ZU5vZGVzO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlTm9kZXMuY29uY2F0KGZsYXR0ZW4oZ2V0Q2hpbGRyZW4oc3RhdGVOb2RlKS5tYXAoZ2V0QWxsU3RhdGVOb2RlcykpKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29uZmlndXJhdGlvbihwcmV2U3RhdGVOb2Rlcywgc3RhdGVOb2Rlcykge1xuICB2YXIgZV8xLCBfYSwgZV8yLCBfYiwgZV8zLCBfYywgZV80LCBfZDtcblxuICB2YXIgcHJldkNvbmZpZ3VyYXRpb24gPSBuZXcgU2V0KHByZXZTdGF0ZU5vZGVzKTtcbiAgdmFyIHByZXZBZGpMaXN0ID0gZ2V0QWRqTGlzdChwcmV2Q29uZmlndXJhdGlvbik7XG4gIHZhciBjb25maWd1cmF0aW9uID0gbmV3IFNldChzdGF0ZU5vZGVzKTtcblxuICB0cnkge1xuICAgIC8vIGFkZCBhbGwgYW5jZXN0b3JzXG4gICAgZm9yICh2YXIgY29uZmlndXJhdGlvbl8xID0gX192YWx1ZXMoY29uZmlndXJhdGlvbiksIGNvbmZpZ3VyYXRpb25fMV8xID0gY29uZmlndXJhdGlvbl8xLm5leHQoKTsgIWNvbmZpZ3VyYXRpb25fMV8xLmRvbmU7IGNvbmZpZ3VyYXRpb25fMV8xID0gY29uZmlndXJhdGlvbl8xLm5leHQoKSkge1xuICAgICAgdmFyIHMgPSBjb25maWd1cmF0aW9uXzFfMS52YWx1ZTtcbiAgICAgIHZhciBtID0gcy5wYXJlbnQ7XG5cbiAgICAgIHdoaWxlIChtICYmICFjb25maWd1cmF0aW9uLmhhcyhtKSkge1xuICAgICAgICBjb25maWd1cmF0aW9uLmFkZChtKTtcbiAgICAgICAgbSA9IG0ucGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZV8xXzEpIHtcbiAgICBlXzEgPSB7XG4gICAgICBlcnJvcjogZV8xXzFcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoY29uZmlndXJhdGlvbl8xXzEgJiYgIWNvbmZpZ3VyYXRpb25fMV8xLmRvbmUgJiYgKF9hID0gY29uZmlndXJhdGlvbl8xLnJldHVybikpIF9hLmNhbGwoY29uZmlndXJhdGlvbl8xKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHZhciBhZGpMaXN0ID0gZ2V0QWRqTGlzdChjb25maWd1cmF0aW9uKTtcblxuICB0cnkge1xuICAgIC8vIGFkZCBkZXNjZW5kYW50c1xuICAgIGZvciAodmFyIGNvbmZpZ3VyYXRpb25fMiA9IF9fdmFsdWVzKGNvbmZpZ3VyYXRpb24pLCBjb25maWd1cmF0aW9uXzJfMSA9IGNvbmZpZ3VyYXRpb25fMi5uZXh0KCk7ICFjb25maWd1cmF0aW9uXzJfMS5kb25lOyBjb25maWd1cmF0aW9uXzJfMSA9IGNvbmZpZ3VyYXRpb25fMi5uZXh0KCkpIHtcbiAgICAgIHZhciBzID0gY29uZmlndXJhdGlvbl8yXzEudmFsdWU7IC8vIGlmIHByZXZpb3VzbHkgYWN0aXZlLCBhZGQgZXhpc3RpbmcgY2hpbGQgbm9kZXNcblxuICAgICAgaWYgKHMudHlwZSA9PT0gJ2NvbXBvdW5kJyAmJiAoIWFkakxpc3QuZ2V0KHMpIHx8ICFhZGpMaXN0LmdldChzKS5sZW5ndGgpKSB7XG4gICAgICAgIGlmIChwcmV2QWRqTGlzdC5nZXQocykpIHtcbiAgICAgICAgICBwcmV2QWRqTGlzdC5nZXQocykuZm9yRWFjaChmdW5jdGlvbiAoc24pIHtcbiAgICAgICAgICAgIHJldHVybiBjb25maWd1cmF0aW9uLmFkZChzbik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcy5pbml0aWFsU3RhdGVOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChzbikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ3VyYXRpb24uYWRkKHNuKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHMudHlwZSA9PT0gJ3BhcmFsbGVsJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfZSA9IChlXzMgPSB2b2lkIDAsIF9fdmFsdWVzKGdldENoaWxkcmVuKHMpKSksIF9mID0gX2UubmV4dCgpOyAhX2YuZG9uZTsgX2YgPSBfZS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgdmFyIGNoaWxkID0gX2YudmFsdWU7XG5cbiAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdoaXN0b3J5Jykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFjb25maWd1cmF0aW9uLmhhcyhjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uLmFkZChjaGlsZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJldkFkakxpc3QuZ2V0KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgcHJldkFkakxpc3QuZ2V0KGNoaWxkKS5mb3JFYWNoKGZ1bmN0aW9uIChzbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlndXJhdGlvbi5hZGQoc24pO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNoaWxkLmluaXRpYWxTdGF0ZU5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHNuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25maWd1cmF0aW9uLmFkZChzbik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlXzNfMSkge1xuICAgICAgICAgICAgZV8zID0ge1xuICAgICAgICAgICAgICBlcnJvcjogZV8zXzFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmIChfZiAmJiAhX2YuZG9uZSAmJiAoX2MgPSBfZS5yZXR1cm4pKSBfYy5jYWxsKF9lKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGlmIChlXzMpIHRocm93IGVfMy5lcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVfMl8xKSB7XG4gICAgZV8yID0ge1xuICAgICAgZXJyb3I6IGVfMl8xXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKGNvbmZpZ3VyYXRpb25fMl8xICYmICFjb25maWd1cmF0aW9uXzJfMS5kb25lICYmIChfYiA9IGNvbmZpZ3VyYXRpb25fMi5yZXR1cm4pKSBfYi5jYWxsKGNvbmZpZ3VyYXRpb25fMik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjtcbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIC8vIGFkZCBhbGwgYW5jZXN0b3JzXG4gICAgZm9yICh2YXIgY29uZmlndXJhdGlvbl8zID0gX192YWx1ZXMoY29uZmlndXJhdGlvbiksIGNvbmZpZ3VyYXRpb25fM18xID0gY29uZmlndXJhdGlvbl8zLm5leHQoKTsgIWNvbmZpZ3VyYXRpb25fM18xLmRvbmU7IGNvbmZpZ3VyYXRpb25fM18xID0gY29uZmlndXJhdGlvbl8zLm5leHQoKSkge1xuICAgICAgdmFyIHMgPSBjb25maWd1cmF0aW9uXzNfMS52YWx1ZTtcbiAgICAgIHZhciBtID0gcy5wYXJlbnQ7XG5cbiAgICAgIHdoaWxlIChtICYmICFjb25maWd1cmF0aW9uLmhhcyhtKSkge1xuICAgICAgICBjb25maWd1cmF0aW9uLmFkZChtKTtcbiAgICAgICAgbSA9IG0ucGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZV80XzEpIHtcbiAgICBlXzQgPSB7XG4gICAgICBlcnJvcjogZV80XzFcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoY29uZmlndXJhdGlvbl8zXzEgJiYgIWNvbmZpZ3VyYXRpb25fM18xLmRvbmUgJiYgKF9kID0gY29uZmlndXJhdGlvbl8zLnJldHVybikpIF9kLmNhbGwoY29uZmlndXJhdGlvbl8zKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGVfNCkgdGhyb3cgZV80LmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWd1cmF0aW9uO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21BZGooYmFzZU5vZGUsIGFkakxpc3QpIHtcbiAgdmFyIGNoaWxkU3RhdGVOb2RlcyA9IGFkakxpc3QuZ2V0KGJhc2VOb2RlKTtcblxuICBpZiAoIWNoaWxkU3RhdGVOb2Rlcykge1xuICAgIHJldHVybiB7fTsgLy8gdG9kbzogZml4P1xuICB9XG5cbiAgaWYgKGJhc2VOb2RlLnR5cGUgPT09ICdjb21wb3VuZCcpIHtcbiAgICB2YXIgY2hpbGRTdGF0ZU5vZGUgPSBjaGlsZFN0YXRlTm9kZXNbMF07XG5cbiAgICBpZiAoY2hpbGRTdGF0ZU5vZGUpIHtcbiAgICAgIGlmIChpc0xlYWZOb2RlKGNoaWxkU3RhdGVOb2RlKSkge1xuICAgICAgICByZXR1cm4gY2hpbGRTdGF0ZU5vZGUua2V5O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICB9XG5cbiAgdmFyIHN0YXRlVmFsdWUgPSB7fTtcbiAgY2hpbGRTdGF0ZU5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNzbikge1xuICAgIHN0YXRlVmFsdWVbY3NuLmtleV0gPSBnZXRWYWx1ZUZyb21BZGooY3NuLCBhZGpMaXN0KTtcbiAgfSk7XG4gIHJldHVybiBzdGF0ZVZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRBZGpMaXN0KGNvbmZpZ3VyYXRpb24pIHtcbiAgdmFyIGVfNSwgX2E7XG5cbiAgdmFyIGFkakxpc3QgPSBuZXcgTWFwKCk7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBjb25maWd1cmF0aW9uXzQgPSBfX3ZhbHVlcyhjb25maWd1cmF0aW9uKSwgY29uZmlndXJhdGlvbl80XzEgPSBjb25maWd1cmF0aW9uXzQubmV4dCgpOyAhY29uZmlndXJhdGlvbl80XzEuZG9uZTsgY29uZmlndXJhdGlvbl80XzEgPSBjb25maWd1cmF0aW9uXzQubmV4dCgpKSB7XG4gICAgICB2YXIgcyA9IGNvbmZpZ3VyYXRpb25fNF8xLnZhbHVlO1xuXG4gICAgICBpZiAoIWFkakxpc3QuaGFzKHMpKSB7XG4gICAgICAgIGFkakxpc3Quc2V0KHMsIFtdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHMucGFyZW50KSB7XG4gICAgICAgIGlmICghYWRqTGlzdC5oYXMocy5wYXJlbnQpKSB7XG4gICAgICAgICAgYWRqTGlzdC5zZXQocy5wYXJlbnQsIFtdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkakxpc3QuZ2V0KHMucGFyZW50KS5wdXNoKHMpO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZV81XzEpIHtcbiAgICBlXzUgPSB7XG4gICAgICBlcnJvcjogZV81XzFcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoY29uZmlndXJhdGlvbl80XzEgJiYgIWNvbmZpZ3VyYXRpb25fNF8xLmRvbmUgJiYgKF9hID0gY29uZmlndXJhdGlvbl80LnJldHVybikpIF9hLmNhbGwoY29uZmlndXJhdGlvbl80KTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGVfNSkgdGhyb3cgZV81LmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhZGpMaXN0O1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZShyb290Tm9kZSwgY29uZmlndXJhdGlvbikge1xuICB2YXIgY29uZmlnID0gZ2V0Q29uZmlndXJhdGlvbihbcm9vdE5vZGVdLCBjb25maWd1cmF0aW9uKTtcbiAgcmV0dXJuIGdldFZhbHVlRnJvbUFkaihyb290Tm9kZSwgZ2V0QWRqTGlzdChjb25maWcpKTtcbn1cblxuZnVuY3Rpb24gaGFzKGl0ZXJhYmxlLCBpdGVtKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGl0ZXJhYmxlKSkge1xuICAgIHJldHVybiBpdGVyYWJsZS5zb21lKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgIHJldHVybiBtZW1iZXIgPT09IGl0ZW07XG4gICAgfSk7XG4gIH1cblxuICBpZiAoaXRlcmFibGUgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICByZXR1cm4gaXRlcmFibGUuaGFzKGl0ZW0pO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlOyAvLyBUT0RPOiBmaXhcbn1cblxuZnVuY3Rpb24gbmV4dEV2ZW50cyhjb25maWd1cmF0aW9uKSB7XG4gIHJldHVybiBmbGF0dGVuKF9fc3ByZWFkKG5ldyBTZXQoY29uZmlndXJhdGlvbi5tYXAoZnVuY3Rpb24gKHNuKSB7XG4gICAgcmV0dXJuIHNuLm93bkV2ZW50cztcbiAgfSkpKSk7XG59XG5cbmZ1bmN0aW9uIGlzSW5GaW5hbFN0YXRlKGNvbmZpZ3VyYXRpb24sIHN0YXRlTm9kZSkge1xuICBpZiAoc3RhdGVOb2RlLnR5cGUgPT09ICdjb21wb3VuZCcpIHtcbiAgICByZXR1cm4gZ2V0Q2hpbGRyZW4oc3RhdGVOb2RlKS5zb21lKGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gcy50eXBlID09PSAnZmluYWwnICYmIGhhcyhjb25maWd1cmF0aW9uLCBzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChzdGF0ZU5vZGUudHlwZSA9PT0gJ3BhcmFsbGVsJykge1xuICAgIHJldHVybiBnZXRDaGlsZHJlbihzdGF0ZU5vZGUpLmV2ZXJ5KGZ1bmN0aW9uIChzbikge1xuICAgICAgcmV0dXJuIGlzSW5GaW5hbFN0YXRlKGNvbmZpZ3VyYXRpb24sIHNuKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IHsgZ2V0QWRqTGlzdCwgZ2V0QWxsU3RhdGVOb2RlcywgZ2V0Q2hpbGRyZW4sIGdldENvbmZpZ3VyYXRpb24sIGdldFZhbHVlLCBoYXMsIGlzSW5GaW5hbFN0YXRlLCBpc0xlYWZOb2RlLCBuZXh0RXZlbnRzIH07IiwidmFyIEFjdGlvblR5cGVzO1xuXG4oZnVuY3Rpb24gKEFjdGlvblR5cGVzKSB7XG4gIEFjdGlvblR5cGVzW1wiU3RhcnRcIl0gPSBcInhzdGF0ZS5zdGFydFwiO1xuICBBY3Rpb25UeXBlc1tcIlN0b3BcIl0gPSBcInhzdGF0ZS5zdG9wXCI7XG4gIEFjdGlvblR5cGVzW1wiUmFpc2VcIl0gPSBcInhzdGF0ZS5yYWlzZVwiO1xuICBBY3Rpb25UeXBlc1tcIlNlbmRcIl0gPSBcInhzdGF0ZS5zZW5kXCI7XG4gIEFjdGlvblR5cGVzW1wiQ2FuY2VsXCJdID0gXCJ4c3RhdGUuY2FuY2VsXCI7XG4gIEFjdGlvblR5cGVzW1wiTnVsbEV2ZW50XCJdID0gXCJcIjtcbiAgQWN0aW9uVHlwZXNbXCJBc3NpZ25cIl0gPSBcInhzdGF0ZS5hc3NpZ25cIjtcbiAgQWN0aW9uVHlwZXNbXCJBZnRlclwiXSA9IFwieHN0YXRlLmFmdGVyXCI7XG4gIEFjdGlvblR5cGVzW1wiRG9uZVN0YXRlXCJdID0gXCJkb25lLnN0YXRlXCI7XG4gIEFjdGlvblR5cGVzW1wiRG9uZUludm9rZVwiXSA9IFwiZG9uZS5pbnZva2VcIjtcbiAgQWN0aW9uVHlwZXNbXCJMb2dcIl0gPSBcInhzdGF0ZS5sb2dcIjtcbiAgQWN0aW9uVHlwZXNbXCJJbml0XCJdID0gXCJ4c3RhdGUuaW5pdFwiO1xuICBBY3Rpb25UeXBlc1tcIkludm9rZVwiXSA9IFwieHN0YXRlLmludm9rZVwiO1xuICBBY3Rpb25UeXBlc1tcIkVycm9yRXhlY3V0aW9uXCJdID0gXCJlcnJvci5leGVjdXRpb25cIjtcbiAgQWN0aW9uVHlwZXNbXCJFcnJvckNvbW11bmljYXRpb25cIl0gPSBcImVycm9yLmNvbW11bmljYXRpb25cIjtcbiAgQWN0aW9uVHlwZXNbXCJFcnJvclBsYXRmb3JtXCJdID0gXCJlcnJvci5wbGF0Zm9ybVwiO1xuICBBY3Rpb25UeXBlc1tcIkVycm9yQ3VzdG9tXCJdID0gXCJ4c3RhdGUuZXJyb3JcIjtcbiAgQWN0aW9uVHlwZXNbXCJVcGRhdGVcIl0gPSBcInhzdGF0ZS51cGRhdGVcIjtcbiAgQWN0aW9uVHlwZXNbXCJQdXJlXCJdID0gXCJ4c3RhdGUucHVyZVwiO1xufSkoQWN0aW9uVHlwZXMgfHwgKEFjdGlvblR5cGVzID0ge30pKTtcblxudmFyIFNwZWNpYWxUYXJnZXRzO1xuXG4oZnVuY3Rpb24gKFNwZWNpYWxUYXJnZXRzKSB7XG4gIFNwZWNpYWxUYXJnZXRzW1wiUGFyZW50XCJdID0gXCIjX3BhcmVudFwiO1xuICBTcGVjaWFsVGFyZ2V0c1tcIkludGVybmFsXCJdID0gXCIjX2ludGVybmFsXCI7XG59KShTcGVjaWFsVGFyZ2V0cyB8fCAoU3BlY2lhbFRhcmdldHMgPSB7fSkpO1xuXG5leHBvcnQgeyBBY3Rpb25UeXBlcywgU3BlY2lhbFRhcmdldHMgfTsiLCJpbXBvcnQgeyBfX3NwcmVhZCwgX192YWx1ZXMsIF9fcmVhZCwgX19hc3NpZ24gfSBmcm9tICcuL192aXJ0dWFsL190c2xpYi5qcyc7XG5pbXBvcnQgeyBERUZBVUxUX0dVQVJEX1RZUEUsIFRBUkdFVExFU1NfS0VZLCBTVEFURV9ERUxJTUlURVIgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgeyBJU19QUk9EVUNUSU9OIH0gZnJvbSAnLi9lbnZpcm9ubWVudC5qcyc7XG5cbmZ1bmN0aW9uIGtleXModmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hlc1N0YXRlKHBhcmVudFN0YXRlSWQsIGNoaWxkU3RhdGVJZCwgZGVsaW1pdGVyKSB7XG4gIGlmIChkZWxpbWl0ZXIgPT09IHZvaWQgMCkge1xuICAgIGRlbGltaXRlciA9IFNUQVRFX0RFTElNSVRFUjtcbiAgfVxuXG4gIHZhciBwYXJlbnRTdGF0ZVZhbHVlID0gdG9TdGF0ZVZhbHVlKHBhcmVudFN0YXRlSWQsIGRlbGltaXRlcik7XG4gIHZhciBjaGlsZFN0YXRlVmFsdWUgPSB0b1N0YXRlVmFsdWUoY2hpbGRTdGF0ZUlkLCBkZWxpbWl0ZXIpO1xuXG4gIGlmIChpc1N0cmluZyhjaGlsZFN0YXRlVmFsdWUpKSB7XG4gICAgaWYgKGlzU3RyaW5nKHBhcmVudFN0YXRlVmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2hpbGRTdGF0ZVZhbHVlID09PSBwYXJlbnRTdGF0ZVZhbHVlO1xuICAgIH0gLy8gUGFyZW50IG1vcmUgc3BlY2lmaWMgdGhhbiBjaGlsZFxuXG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNTdHJpbmcocGFyZW50U3RhdGVWYWx1ZSkpIHtcbiAgICByZXR1cm4gcGFyZW50U3RhdGVWYWx1ZSBpbiBjaGlsZFN0YXRlVmFsdWU7XG4gIH1cblxuICByZXR1cm4ga2V5cyhwYXJlbnRTdGF0ZVZhbHVlKS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCEoa2V5IGluIGNoaWxkU3RhdGVWYWx1ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc1N0YXRlKHBhcmVudFN0YXRlVmFsdWVba2V5XSwgY2hpbGRTdGF0ZVZhbHVlW2tleV0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRUeXBlKGV2ZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKGV2ZW50KSB8fCB0eXBlb2YgZXZlbnQgPT09ICdudW1iZXInID8gXCJcIiArIGV2ZW50IDogZXZlbnQudHlwZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXZlbnRzIG11c3QgYmUgc3RyaW5ncyBvciBvYmplY3RzIHdpdGggYSBzdHJpbmcgZXZlbnQudHlwZSBwcm9wZXJ0eS4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b1N0YXRlUGF0aChzdGF0ZUlkLCBkZWxpbWl0ZXIpIHtcbiAgdHJ5IHtcbiAgICBpZiAoaXNBcnJheShzdGF0ZUlkKSkge1xuICAgICAgcmV0dXJuIHN0YXRlSWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlSWQudG9TdHJpbmcoKS5zcGxpdChkZWxpbWl0ZXIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiJ1wiICsgc3RhdGVJZCArIFwiJyBpcyBub3QgYSB2YWxpZCBzdGF0ZSBwYXRoLlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1N0YXRlTGlrZShzdGF0ZSkge1xuICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSAnb2JqZWN0JyAmJiAndmFsdWUnIGluIHN0YXRlICYmICdjb250ZXh0JyBpbiBzdGF0ZSAmJiAnZXZlbnQnIGluIHN0YXRlICYmICdfZXZlbnQnIGluIHN0YXRlO1xufVxuXG5mdW5jdGlvbiB0b1N0YXRlVmFsdWUoc3RhdGVWYWx1ZSwgZGVsaW1pdGVyKSB7XG4gIGlmIChpc1N0YXRlTGlrZShzdGF0ZVZhbHVlKSkge1xuICAgIHJldHVybiBzdGF0ZVZhbHVlLnZhbHVlO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkoc3RhdGVWYWx1ZSkpIHtcbiAgICByZXR1cm4gcGF0aFRvU3RhdGVWYWx1ZShzdGF0ZVZhbHVlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3RhdGVWYWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gc3RhdGVWYWx1ZTtcbiAgfVxuXG4gIHZhciBzdGF0ZVBhdGggPSB0b1N0YXRlUGF0aChzdGF0ZVZhbHVlLCBkZWxpbWl0ZXIpO1xuICByZXR1cm4gcGF0aFRvU3RhdGVWYWx1ZShzdGF0ZVBhdGgpO1xufVxuXG5mdW5jdGlvbiBwYXRoVG9TdGF0ZVZhbHVlKHN0YXRlUGF0aCkge1xuICBpZiAoc3RhdGVQYXRoLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBzdGF0ZVBhdGhbMF07XG4gIH1cblxuICB2YXIgdmFsdWUgPSB7fTtcbiAgdmFyIG1hcmtlciA9IHZhbHVlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGVQYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGlmIChpID09PSBzdGF0ZVBhdGgubGVuZ3RoIC0gMikge1xuICAgICAgbWFya2VyW3N0YXRlUGF0aFtpXV0gPSBzdGF0ZVBhdGhbaSArIDFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXJrZXJbc3RhdGVQYXRoW2ldXSA9IHt9O1xuICAgICAgbWFya2VyID0gbWFya2VyW3N0YXRlUGF0aFtpXV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBtYXBWYWx1ZXMoY29sbGVjdGlvbiwgaXRlcmF0ZWUpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICB2YXIgY29sbGVjdGlvbktleXMgPSBrZXlzKGNvbGxlY3Rpb24pO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29sbGVjdGlvbktleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gY29sbGVjdGlvbktleXNbaV07XG4gICAgcmVzdWx0W2tleV0gPSBpdGVyYXRlZShjb2xsZWN0aW9uW2tleV0sIGtleSwgY29sbGVjdGlvbiwgaSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtYXBGaWx0ZXJWYWx1ZXMoY29sbGVjdGlvbiwgaXRlcmF0ZWUsIHByZWRpY2F0ZSkge1xuICB2YXIgZV8xLCBfYTtcblxuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKGtleXMoY29sbGVjdGlvbikpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICB2YXIga2V5ID0gX2MudmFsdWU7XG4gICAgICB2YXIgaXRlbSA9IGNvbGxlY3Rpb25ba2V5XTtcblxuICAgICAgaWYgKCFwcmVkaWNhdGUoaXRlbSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdFtrZXldID0gaXRlcmF0ZWUoaXRlbSwga2V5LCBjb2xsZWN0aW9uKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVfMV8xKSB7XG4gICAgZV8xID0ge1xuICAgICAgZXJyb3I6IGVfMV8xXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxyXG4gKiBSZXRyaWV2ZXMgYSB2YWx1ZSBhdCB0aGUgZ2l2ZW4gcGF0aC5cclxuICogQHBhcmFtIHByb3BzIFRoZSBkZWVwIHBhdGggdG8gdGhlIHByb3Agb2YgdGhlIGRlc2lyZWQgdmFsdWVcclxuICovXG5cblxudmFyIHBhdGggPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICB2YXIgZV8yLCBfYTtcblxuICAgIHZhciByZXN1bHQgPSBvYmplY3Q7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcHJvcHNfMSA9IF9fdmFsdWVzKHByb3BzKSwgcHJvcHNfMV8xID0gcHJvcHNfMS5uZXh0KCk7ICFwcm9wc18xXzEuZG9uZTsgcHJvcHNfMV8xID0gcHJvcHNfMS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHByb3AgPSBwcm9wc18xXzEudmFsdWU7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdFtwcm9wXTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlXzJfMSkge1xuICAgICAgZV8yID0ge1xuICAgICAgICBlcnJvcjogZV8yXzFcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChwcm9wc18xXzEgJiYgIXByb3BzXzFfMS5kb25lICYmIChfYSA9IHByb3BzXzEucmV0dXJuKSkgX2EuY2FsbChwcm9wc18xKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgYSB2YWx1ZSBhdCB0aGUgZ2l2ZW4gcGF0aCB2aWEgdGhlIG5lc3RlZCBhY2Nlc3NvciBwcm9wLlxyXG4gKiBAcGFyYW0gcHJvcHMgVGhlIGRlZXAgcGF0aCB0byB0aGUgcHJvcCBvZiB0aGUgZGVzaXJlZCB2YWx1ZVxyXG4gKi9cblxuXG5mdW5jdGlvbiBuZXN0ZWRQYXRoKHByb3BzLCBhY2Nlc3NvclByb3ApIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICB2YXIgZV8zLCBfYTtcblxuICAgIHZhciByZXN1bHQgPSBvYmplY3Q7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcHJvcHNfMiA9IF9fdmFsdWVzKHByb3BzKSwgcHJvcHNfMl8xID0gcHJvcHNfMi5uZXh0KCk7ICFwcm9wc18yXzEuZG9uZTsgcHJvcHNfMl8xID0gcHJvcHNfMi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHByb3AgPSBwcm9wc18yXzEudmFsdWU7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdFthY2Nlc3NvclByb3BdW3Byb3BdO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVfM18xKSB7XG4gICAgICBlXzMgPSB7XG4gICAgICAgIGVycm9yOiBlXzNfMVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHByb3BzXzJfMSAmJiAhcHJvcHNfMl8xLmRvbmUgJiYgKF9hID0gcHJvcHNfMi5yZXR1cm4pKSBfYS5jYWxsKHByb3BzXzIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvU3RhdGVQYXRocyhzdGF0ZVZhbHVlKSB7XG4gIGlmICghc3RhdGVWYWx1ZSkge1xuICAgIHJldHVybiBbW11dO1xuICB9XG5cbiAgaWYgKGlzU3RyaW5nKHN0YXRlVmFsdWUpKSB7XG4gICAgcmV0dXJuIFtbc3RhdGVWYWx1ZV1dO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IGZsYXR0ZW4oa2V5cyhzdGF0ZVZhbHVlKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBzdWJTdGF0ZVZhbHVlID0gc3RhdGVWYWx1ZVtrZXldO1xuXG4gICAgaWYgKHR5cGVvZiBzdWJTdGF0ZVZhbHVlICE9PSAnc3RyaW5nJyAmJiAoIXN1YlN0YXRlVmFsdWUgfHwgIU9iamVjdC5rZXlzKHN1YlN0YXRlVmFsdWUpLmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBbW2tleV1dO1xuICAgIH1cblxuICAgIHJldHVybiB0b1N0YXRlUGF0aHMoc3RhdGVWYWx1ZVtrZXldKS5tYXAoZnVuY3Rpb24gKHN1YlBhdGgpIHtcbiAgICAgIHJldHVybiBba2V5XS5jb25jYXQoc3ViUGF0aCk7XG4gICAgfSk7XG4gIH0pKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbihhcnJheSkge1xuICB2YXIgX2E7XG5cbiAgcmV0dXJuIChfYSA9IFtdKS5jb25jYXQuYXBwbHkoX2EsIF9fc3ByZWFkKGFycmF5KSk7XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXlTdHJpY3QodmFsdWUpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIFt2YWx1ZV07XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICByZXR1cm4gdG9BcnJheVN0cmljdCh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIG1hcENvbnRleHQobWFwcGVyLCBjb250ZXh0LCBfZXZlbnQpIHtcbiAgdmFyIGVfNSwgX2E7XG5cbiAgaWYgKGlzRnVuY3Rpb24obWFwcGVyKSkge1xuICAgIHJldHVybiBtYXBwZXIoY29udGV4dCwgX2V2ZW50LmRhdGEpO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhrZXlzKG1hcHBlcikpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICB2YXIga2V5ID0gX2MudmFsdWU7XG4gICAgICB2YXIgc3ViTWFwcGVyID0gbWFwcGVyW2tleV07XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKHN1Yk1hcHBlcikpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBzdWJNYXBwZXIoY29udGV4dCwgX2V2ZW50LmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBzdWJNYXBwZXI7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlXzVfMSkge1xuICAgIGVfNSA9IHtcbiAgICAgIGVycm9yOiBlXzVfMVxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGVfNSkgdGhyb3cgZV81LmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGlzQnVpbHRJbkV2ZW50KGV2ZW50VHlwZSkge1xuICByZXR1cm4gL14oZG9uZXxlcnJvcilcXC4vLnRlc3QoZXZlbnRUeXBlKTtcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlTGlrZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gQ2hlY2sgaWYgc2hhcGUgbWF0Y2hlcyB0aGUgUHJvbWlzZS9BKyBzcGVjaWZpY2F0aW9uIGZvciBhIFwidGhlbmFibGVcIi5cblxuXG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgJiYgaXNGdW5jdGlvbih2YWx1ZS50aGVuKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb24oaXRlbXMsIHByZWRpY2F0ZSkge1xuICB2YXIgZV82LCBfYTtcblxuICB2YXIgX2IgPSBfX3JlYWQoW1tdLCBbXV0sIDIpLFxuICAgICAgdHJ1dGh5ID0gX2JbMF0sXG4gICAgICBmYWxzeSA9IF9iWzFdO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgaXRlbXNfMSA9IF9fdmFsdWVzKGl0ZW1zKSwgaXRlbXNfMV8xID0gaXRlbXNfMS5uZXh0KCk7ICFpdGVtc18xXzEuZG9uZTsgaXRlbXNfMV8xID0gaXRlbXNfMS5uZXh0KCkpIHtcbiAgICAgIHZhciBpdGVtID0gaXRlbXNfMV8xLnZhbHVlO1xuXG4gICAgICBpZiAocHJlZGljYXRlKGl0ZW0pKSB7XG4gICAgICAgIHRydXRoeS5wdXNoKGl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmFsc3kucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVfNl8xKSB7XG4gICAgZV82ID0ge1xuICAgICAgZXJyb3I6IGVfNl8xXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKGl0ZW1zXzFfMSAmJiAhaXRlbXNfMV8xLmRvbmUgJiYgKF9hID0gaXRlbXNfMS5yZXR1cm4pKSBfYS5jYWxsKGl0ZW1zXzEpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZV82KSB0aHJvdyBlXzYuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFt0cnV0aHksIGZhbHN5XTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSGlzdG9yeVN0YXRlcyhoaXN0LCBzdGF0ZVZhbHVlKSB7XG4gIHJldHVybiBtYXBWYWx1ZXMoaGlzdC5zdGF0ZXMsIGZ1bmN0aW9uIChzdWJIaXN0LCBrZXkpIHtcbiAgICBpZiAoIXN1Ykhpc3QpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIHN1YlN0YXRlVmFsdWUgPSAoaXNTdHJpbmcoc3RhdGVWYWx1ZSkgPyB1bmRlZmluZWQgOiBzdGF0ZVZhbHVlW2tleV0pIHx8IChzdWJIaXN0ID8gc3ViSGlzdC5jdXJyZW50IDogdW5kZWZpbmVkKTtcblxuICAgIGlmICghc3ViU3RhdGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudDogc3ViU3RhdGVWYWx1ZSxcbiAgICAgIHN0YXRlczogdXBkYXRlSGlzdG9yeVN0YXRlcyhzdWJIaXN0LCBzdWJTdGF0ZVZhbHVlKVxuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVIaXN0b3J5VmFsdWUoaGlzdCwgc3RhdGVWYWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnQ6IHN0YXRlVmFsdWUsXG4gICAgc3RhdGVzOiB1cGRhdGVIaXN0b3J5U3RhdGVzKGhpc3QsIHN0YXRlVmFsdWUpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbnRleHQoY29udGV4dCwgX2V2ZW50LCBhc3NpZ25BY3Rpb25zLCBzdGF0ZSkge1xuICBpZiAoIUlTX1BST0RVQ1RJT04pIHtcbiAgICB3YXJuKCEhY29udGV4dCwgJ0F0dGVtcHRpbmcgdG8gdXBkYXRlIHVuZGVmaW5lZCBjb250ZXh0Jyk7XG4gIH1cblxuICB2YXIgdXBkYXRlZENvbnRleHQgPSBjb250ZXh0ID8gYXNzaWduQWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXNzaWduQWN0aW9uKSB7XG4gICAgdmFyIGVfNywgX2E7XG5cbiAgICB2YXIgYXNzaWdubWVudCA9IGFzc2lnbkFjdGlvbi5hc3NpZ25tZW50O1xuICAgIHZhciBtZXRhID0ge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgYWN0aW9uOiBhc3NpZ25BY3Rpb24sXG4gICAgICBfZXZlbnQ6IF9ldmVudFxuICAgIH07XG4gICAgdmFyIHBhcnRpYWxVcGRhdGUgPSB7fTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGFzc2lnbm1lbnQpKSB7XG4gICAgICBwYXJ0aWFsVXBkYXRlID0gYXNzaWdubWVudChhY2MsIF9ldmVudC5kYXRhLCBtZXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhrZXlzKGFzc2lnbm1lbnQpKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgIHZhciBrZXkgPSBfYy52YWx1ZTtcbiAgICAgICAgICB2YXIgcHJvcEFzc2lnbm1lbnQgPSBhc3NpZ25tZW50W2tleV07XG4gICAgICAgICAgcGFydGlhbFVwZGF0ZVtrZXldID0gaXNGdW5jdGlvbihwcm9wQXNzaWdubWVudCkgPyBwcm9wQXNzaWdubWVudChhY2MsIF9ldmVudC5kYXRhLCBtZXRhKSA6IHByb3BBc3NpZ25tZW50O1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlXzdfMSkge1xuICAgICAgICBlXzcgPSB7XG4gICAgICAgICAgZXJyb3I6IGVfN18xXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoZV83KSB0aHJvdyBlXzcuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWNjLCBwYXJ0aWFsVXBkYXRlKTtcbiAgfSwgY29udGV4dCkgOiBjb250ZXh0O1xuICByZXR1cm4gdXBkYXRlZENvbnRleHQ7XG59IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eVxuXG5cbnZhciB3YXJuID0gZnVuY3Rpb24gKCkge307XG5cbmlmICghSVNfUFJPRFVDVElPTikge1xuICB3YXJuID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICAgIHZhciBlcnJvciA9IGNvbmRpdGlvbiBpbnN0YW5jZW9mIEVycm9yID8gY29uZGl0aW9uIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKCFlcnJvciAmJiBjb25kaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29uc29sZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgYXJncyA9IFtcIldhcm5pbmc6IFwiICsgbWVzc2FnZV07XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBhcmdzLnB1c2goZXJyb3IpO1xuICAgICAgfSAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuXG5cbiAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpO1xufSAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6YmFuLXR5cGVzXG5cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn0gLy8gZXhwb3J0IGZ1bmN0aW9uIG1lbW9pemVkR2V0dGVyPFQsIFRQIGV4dGVuZHMgeyBwcm90b3R5cGU6IG9iamVjdCB9Pihcbi8vICAgbzogVFAsXG4vLyAgIHByb3BlcnR5OiBzdHJpbmcsXG4vLyAgIGdldHRlcjogKCkgPT4gVFxuLy8gKTogdm9pZCB7XG4vLyAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLnByb3RvdHlwZSwgcHJvcGVydHksIHtcbi8vICAgICBnZXQ6IGdldHRlcixcbi8vICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbi8vICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4vLyAgIH0pO1xuLy8gfVxuXG5cbmZ1bmN0aW9uIHRvR3VhcmQoY29uZGl0aW9uLCBndWFyZE1hcCkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoaXNTdHJpbmcoY29uZGl0aW9uKSkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBERUZBVUxUX0dVQVJEX1RZUEUsXG4gICAgICBuYW1lOiBjb25kaXRpb24sXG4gICAgICBwcmVkaWNhdGU6IGd1YXJkTWFwID8gZ3VhcmRNYXBbY29uZGl0aW9uXSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICBpZiAoaXNGdW5jdGlvbihjb25kaXRpb24pKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IERFRkFVTFRfR1VBUkRfVFlQRSxcbiAgICAgIG5hbWU6IGNvbmRpdGlvbi5uYW1lLFxuICAgICAgcHJlZGljYXRlOiBjb25kaXRpb25cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGNvbmRpdGlvbjtcbn1cblxuZnVuY3Rpb24gaXNPYnNlcnZhYmxlKHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICdzdWJzY3JpYmUnIGluIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUuc3Vic2NyaWJlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG52YXIgc3ltYm9sT2JzZXJ2YWJsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlIHx8ICdAQG9ic2VydmFibGUnO1xufSgpO1xuXG5mdW5jdGlvbiBpc01hY2hpbmUodmFsdWUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJ19feHN0YXRlbm9kZScgaW4gdmFsdWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxudmFyIHVuaXF1ZUlkID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgdmFyIGN1cnJlbnRJZCA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY3VycmVudElkKys7XG4gICAgcmV0dXJuIGN1cnJlbnRJZC50b1N0cmluZygxNik7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIHRvRXZlbnRPYmplY3QoZXZlbnQsIHBheWxvYWQgLy8gaWQ/OiBURXZlbnRbJ3R5cGUnXVxuKSB7XG4gIGlmIChpc1N0cmluZyhldmVudCkgfHwgdHlwZW9mIGV2ZW50ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBfX2Fzc2lnbih7XG4gICAgICB0eXBlOiBldmVudFxuICAgIH0sIHBheWxvYWQpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50O1xufVxuXG5mdW5jdGlvbiB0b1NDWE1MRXZlbnQoZXZlbnQsIHNjeG1sRXZlbnQpIHtcbiAgaWYgKCFpc1N0cmluZyhldmVudCkgJiYgJyQkdHlwZScgaW4gZXZlbnQgJiYgZXZlbnQuJCR0eXBlID09PSAnc2N4bWwnKSB7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG5cbiAgdmFyIGV2ZW50T2JqZWN0ID0gdG9FdmVudE9iamVjdChldmVudCk7XG4gIHJldHVybiBfX2Fzc2lnbih7XG4gICAgbmFtZTogZXZlbnRPYmplY3QudHlwZSxcbiAgICBkYXRhOiBldmVudE9iamVjdCxcbiAgICAkJHR5cGU6ICdzY3htbCcsXG4gICAgdHlwZTogJ2V4dGVybmFsJ1xuICB9LCBzY3htbEV2ZW50KTtcbn1cblxuZnVuY3Rpb24gdG9UcmFuc2l0aW9uQ29uZmlnQXJyYXkoZXZlbnQsIGNvbmZpZ0xpa2UpIHtcbiAgdmFyIHRyYW5zaXRpb25zID0gdG9BcnJheVN0cmljdChjb25maWdMaWtlKS5tYXAoZnVuY3Rpb24gKHRyYW5zaXRpb25MaWtlKSB7XG4gICAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uTGlrZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHRyYW5zaXRpb25MaWtlID09PSAnc3RyaW5nJyB8fCBpc01hY2hpbmUodHJhbnNpdGlvbkxpa2UpKSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHVudGlsIFR5cGUgaW5zdGFudGlhdGlvbiBpcyBleGNlc3NpdmVseSBkZWVwIGFuZCBwb3NzaWJseSBpbmZpbml0ZSBidWcgaXMgZml4ZWRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRhcmdldDogdHJhbnNpdGlvbkxpa2UsXG4gICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHRyYW5zaXRpb25MaWtlKSwge1xuICAgICAgZXZlbnQ6IGV2ZW50XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gdHJhbnNpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkIHx8IHRhcmdldCA9PT0gVEFSR0VUTEVTU19LRVkpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIHRvQXJyYXkodGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gcmVwb3J0VW5oYW5kbGVkRXhjZXB0aW9uT25JbnZvY2F0aW9uKG9yaWdpbmFsRXJyb3IsIGN1cnJlbnRFcnJvciwgaWQpIHtcbiAgaWYgKCFJU19QUk9EVUNUSU9OKSB7XG4gICAgdmFyIG9yaWdpbmFsU3RhY2tUcmFjZSA9IG9yaWdpbmFsRXJyb3Iuc3RhY2sgPyBcIiBTdGFja3RyYWNlIHdhcyAnXCIgKyBvcmlnaW5hbEVycm9yLnN0YWNrICsgXCInXCIgOiAnJztcblxuICAgIGlmIChvcmlnaW5hbEVycm9yID09PSBjdXJyZW50RXJyb3IpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKFwiTWlzc2luZyBvbkVycm9yIGhhbmRsZXIgZm9yIGludm9jYXRpb24gJ1wiICsgaWQgKyBcIicsIGVycm9yIHdhcyAnXCIgKyBvcmlnaW5hbEVycm9yICsgXCInLlwiICsgb3JpZ2luYWxTdGFja1RyYWNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YWNrVHJhY2UgPSBjdXJyZW50RXJyb3Iuc3RhY2sgPyBcIiBTdGFja3RyYWNlIHdhcyAnXCIgKyBjdXJyZW50RXJyb3Iuc3RhY2sgKyBcIidcIiA6ICcnOyAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLmVycm9yKFwiTWlzc2luZyBvbkVycm9yIGhhbmRsZXIgYW5kL29yIHVuaGFuZGxlZCBleGNlcHRpb24vcHJvbWlzZSByZWplY3Rpb24gZm9yIGludm9jYXRpb24gJ1wiICsgaWQgKyBcIicuIFwiICsgKFwiT3JpZ2luYWwgZXJyb3I6ICdcIiArIG9yaWdpbmFsRXJyb3IgKyBcIicuIFwiICsgb3JpZ2luYWxTdGFja1RyYWNlICsgXCIgQ3VycmVudCBlcnJvciBpcyAnXCIgKyBjdXJyZW50RXJyb3IgKyBcIicuXCIgKyBzdGFja1RyYWNlKSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IGZsYXR0ZW4sIGdldEV2ZW50VHlwZSwgaXNBcnJheSwgaXNCdWlsdEluRXZlbnQsIGlzRnVuY3Rpb24sIGlzTWFjaGluZSwgaXNPYnNlcnZhYmxlLCBpc1Byb21pc2VMaWtlLCBpc1N0YXRlTGlrZSwgaXNTdHJpbmcsIGtleXMsIG1hcENvbnRleHQsIG1hcEZpbHRlclZhbHVlcywgbWFwVmFsdWVzLCBtYXRjaGVzU3RhdGUsIG5lc3RlZFBhdGgsIG5vcm1hbGl6ZVRhcmdldCwgcGFydGl0aW9uLCBwYXRoLCBwYXRoVG9TdGF0ZVZhbHVlLCByZXBvcnRVbmhhbmRsZWRFeGNlcHRpb25Pbkludm9jYXRpb24sIHN5bWJvbE9ic2VydmFibGUsIHRvQXJyYXksIHRvQXJyYXlTdHJpY3QsIHRvRXZlbnRPYmplY3QsIHRvR3VhcmQsIHRvU0NYTUxFdmVudCwgdG9TdGF0ZVBhdGgsIHRvU3RhdGVQYXRocywgdG9TdGF0ZVZhbHVlLCB0b1RyYW5zaXRpb25Db25maWdBcnJheSwgdW5pcXVlSWQsIHVwZGF0ZUNvbnRleHQsIHVwZGF0ZUhpc3RvcnlTdGF0ZXMsIHVwZGF0ZUhpc3RvcnlWYWx1ZSwgd2FybiB9OyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5pbXBvcnQgVG9kb3MgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2Rvcyc7XHJcblxyXG5jb25zdCBJbmRleFRvZG9zID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlRlbXBsYXRlIOKAoiBUb2RvTVZDPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy90b2RvbXZjLWNvbW1vbi9iYXNlLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvdG9kb212Yy1hcHAtY3NzL2luZGV4LmNzc1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPFRvZG9zIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4VG9kb3M7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUhhc2hDaGFuZ2Uob25IYXNoQ2hhbmdlKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBvbkhhc2hDaGFuZ2UpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgb25IYXNoQ2hhbmdlKTtcclxuICB9LCBbXSk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODU7Il0sInNvdXJjZVJvb3QiOiIifQ==