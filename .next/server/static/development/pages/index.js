module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Todo.jsx":
/*!*****************************!*\
  !*** ./components/Todo.jsx ***!
  \*****************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xstate/react */ "@xstate/react");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xstate_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Alex\\react-componentes-e-projetos-diversos\\todo-xstate-nextjs\\components\\Todo.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Todo({
  todoRef
}) {
  const [state, send] = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_1__["useService"])(todoRef);
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    id,
    title,
    completed
  } = state.context;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    todoRef.execute(state, {
      focusInput() {
        inputRef.current && inputRef.current.select();
      }

    });
  }, [state, todoRef]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      editing: state.matches("editing"),
      completed
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
    onChange: _ => {
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
    onDoubleClick: e => {
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
    onClick: () => send("DELETE"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  })), __jsx("input", {
    className: "edit",
    value: title,
    onBlur: _ => send("BLUR"),
    onChange: e => send("CHANGE", {
      value: e.target.value
    }),
    onKeyPress: e => {
      if (e.key === "Enter") {
        send("COMMIT");
      }
    },
    onKeyDown: e => {
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

/***/ }),

/***/ "./components/Todos.jsx":
/*!******************************!*\
  !*** ./components/Todos.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Todos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @xstate/react */ "@xstate/react");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_xstate_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_useHashChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useHashChange */ "./utils/useHashChange.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Todo */ "./components/Todo.jsx");
/* harmony import */ var _machines_todosMachine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../machines/todosMachine */ "./machines/todosMachine.js");
var _jsxFileName = "C:\\Users\\Alex\\react-componentes-e-projetos-diversos\\todo-xstate-nextjs\\components\\Todos.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //import "todomvc-app-css/index.css";






function filterTodos(state, todos) {
  if (state.matches("active")) {
    return todos.filter(todo => !todo.completed);
  }

  if (state.matches("completed")) {
    return todos.filter(todo => todo.completed);
  }

  return todos;
}

const persistedTodosMachine = _machines_todosMachine__WEBPACK_IMPORTED_MODULE_5__["todosMachine"].withConfig({
  actions: {
    persist: ctx => {
      localStorage.setItem("todos-xstate", JSON.stringify(ctx.todos));
    }
  }
}, // initial state from localstorage
{
  todo: "Learn state machines",
  todos: (() => {
    try {
      return JSON.parse(localStorage.getItem("todos-xstate")) || [];
    } catch (e) {
      return [];
    }
  })()
});
function Todos() {
  const [state, send] = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_2__["useMachine"])(persistedTodosMachine);
  const {
    0: contend,
    1: setContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(_utils_useHashChange__WEBPACK_IMPORTED_MODULE_3__["useHashChange"])(() => {
    send(`SHOW.${window.location.hash.slice(2) || "all"}`);
  }); // Capture initial state of browser hash

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.location.hash.slice(2) && send(`SHOW.${window.location.hash.slice(2)}`);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setContent(__jsx("section", {
      className: "todoapp",
      "data-state": state.toStrings(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }
    }, __jsx("header", {
      className: "header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    }, "todos"), __jsx("input", {
      className: "new-todo",
      placeholder: "What needs to be done?",
      autoFocus: true,
      onKeyPress: e => {
        if (e.key === "Enter") {
          send("NEWTODO.COMMIT", {
            value: e.target.value
          });
        }
      },
      onChange: e => send("NEWTODO.CHANGE", {
        value: e.target.value
      }),
      value: todo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    })), __jsx("section", {
      className: "main",
      __self: this,
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
      onChange: () => {
        send(markEvent);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }), __jsx("label", {
      htmlFor: "toggle-all",
      title: `Mark all as ${mark}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }
    }, "Mark all as ", mark), __jsx("ul", {
      className: "todo-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }
    }, filteredTodos.map(todo => todo ? __jsx(_Todo__WEBPACK_IMPORTED_MODULE_4__["Todo"], {
      key: todo.id,
      todoRef: todo.ref,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 22
      }
    }) : null))), !!todos.length && __jsx("footer", {
      className: "footer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "todo-count",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }, __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 15
      }
    }, numActiveTodos), " item", numActiveTodos === 1 ? "" : "s", " left"), __jsx("ul", {
      className: "filters",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        selected: state.matches("all")
      }),
      href: "#/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, "All")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        selected: state.matches("active")
      }),
      href: "#/active",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }
    }, "Active")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        selected: state.matches("completed")
      }),
      href: "#/completed",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }, "Completed"))), numActiveTodos < todos.length && __jsx("button", {
      onClick: _ => send("CLEAR_COMPLETED"),
      className: "clear-completed",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 15
      }
    }, "Clear completed"))));
  }, [state]);
  const {
    todos,
    todo
  } = state.context;
  const numActiveTodos = todos.filter(todo => !todo.completed).length;
  const allCompleted = todos.length > 0 && numActiveTodos === 0;
  const mark = !allCompleted ? "completed" : "active";
  const markEvent = `MARK.${mark}`;
  const filteredTodos = filterTodos(state, todos);
  return contend;
}

/***/ }),

/***/ "./machines/todoMachine.js":
/*!*********************************!*\
  !*** ./machines/todoMachine.js ***!
  \*********************************/
/*! exports provided: todoMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoMachine", function() { return todoMachine; });
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ "xstate");
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xstate__WEBPACK_IMPORTED_MODULE_0__);

const {
  assign
} = xstate__WEBPACK_IMPORTED_MODULE_0__["actions"];
const todoMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_0__["Machine"])({
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
      }), Object(xstate__WEBPACK_IMPORTED_MODULE_0__["sendParent"])(ctx => (console.log('commit'), {
        type: "TODO.COMMIT",
        todo: ctx
      }))]
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
              cond: ctx => ctx.completed
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
              }), Object(xstate__WEBPACK_IMPORTED_MODULE_0__["sendParent"])(ctx => ({
                type: "TODO.COMMIT",
                todo: ctx
              }))]
            }
          }
        },
        completed: {
          on: {
            TOGGLE_COMPLETE: {
              target: "pending",
              actions: [assign({
                completed: false
              }), Object(xstate__WEBPACK_IMPORTED_MODULE_0__["sendParent"])(ctx => ({
                type: "TODO.COMMIT",
                todo: ctx
              }))]
            },
            SET_ACTIVE: {
              target: "pending",
              actions: [assign({
                completed: false
              }), Object(xstate__WEBPACK_IMPORTED_MODULE_0__["sendParent"])(ctx => ({
                type: "TODO.COMMIT",
                todo: ctx
              }))]
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
        prevTitle: ctx => ctx.title
      }),
      on: {
        CHANGE: {
          actions: assign({
            title: (ctx, e) => e.value
          })
        },
        COMMIT: [{
          target: "reading.hist",
          actions: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["sendParent"])(ctx => ({
            type: "TODO.COMMIT",
            todo: ctx
          })),
          cond: ctx => ctx.title.trim().length > 0
        }, {
          target: "deleted"
        }],
        BLUR: {
          target: "reading",
          actions: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["sendParent"])(ctx => ({
            type: "TODO.COMMIT",
            todo: ctx
          }))
        },
        CANCEL: {
          target: "reading",
          actions: assign({
            title: ctx => ctx.prevTitle
          })
        }
      }
    },
    deleted: {
      onEntry: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["sendParent"])(ctx => ({
        type: "TODO.DELETE",
        id: ctx.id
      }))
    }
  }
});

/***/ }),

/***/ "./machines/todosMachine.js":
/*!**********************************!*\
  !*** ./machines/todosMachine.js ***!
  \**********************************/
/*! exports provided: todosMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todosMachine", function() { return todosMachine; });
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ "xstate");
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xstate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid-v4 */ "uuid-v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _todoMachine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoMachine */ "./machines/todoMachine.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const createTodo = title => {
  return {
    id: uuid_v4__WEBPACK_IMPORTED_MODULE_1___default()(),
    title: title,
    completed: false
  };
};

const todosMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_0__["Machine"])({
  id: "todos",
  context: {
    todo: "",
    // new todo
    todos: []
  },
  initial: "initializing",
  states: {
    initializing: {
      entry: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
        todos: (ctx, e) => {
          return ctx.todos.map(todo => _objectSpread(_objectSpread({}, todo), {}, {
            ref: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["spawn"])(_todoMachine__WEBPACK_IMPORTED_MODULE_2__["todoMachine"].withContext(todo))
          }));
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
      actions: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
        todo: (ctx, e) => e.value
      })
    },
    "NEWTODO.COMMIT": {
      actions: [Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
        todo: "",
        // clear todo
        todos: (ctx, e) => {
          const newTodo = createTodo(e.value.trim());
          return ctx.todos.concat(_objectSpread(_objectSpread({}, newTodo), {}, {
            ref: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["spawn"])(_todoMachine__WEBPACK_IMPORTED_MODULE_2__["todoMachine"].withContext(newTodo))
          }));
        }
      }), "persist"],
      cond: (ctx, e) => e.value.trim().length
    },
    "TODO.COMMIT": {
      actions: [Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
        todos: (ctx, e) => ctx.todos.map(todo => {
          return todo.id === e.todo.id ? _objectSpread(_objectSpread(_objectSpread({}, todo), e.todo), {}, {
            ref: todo.ref
          }) : todo;
        })
      }), "persist"]
    },
    "TODO.DELETE": {
      actions: [Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
        todos: (ctx, e) => ctx.todos.filter(todo => todo.id !== e.id)
      }), "persist"]
    },
    "SHOW.all": ".all",
    "SHOW.active": ".active",
    "SHOW.completed": ".completed",
    "MARK.completed": {
      actions: ctx => {
        ctx.todos.forEach(todo => todo.ref.send("SET_COMPLETED"));
      }
    },
    "MARK.active": {
      actions: ctx => {
        ctx.todos.forEach(todo => todo.ref.send("SET_ACTIVE"));
      }
    },
    CLEAR_COMPLETED: {
      actions: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
        todos: ctx => ctx.todos.filter(todo => !todo.completed)
      })
    }
  }
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Todos */ "./components/Todos.jsx");
var _jsxFileName = "C:\\Users\\Alex\\react-componentes-e-projetos-diversos\\todo-xstate-nextjs\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const IndexTodos = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("meta", {
    charset: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, "Template \u2022 TodoMVC"), __jsx("link", {
    rel: "stylesheet",
    href: "/static/todomvc-common/base.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/static/todomvc-app-css/index.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  })), __jsx(_components_Todos__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexTodos);

/***/ }),

/***/ "./utils/useHashChange.js":
/*!********************************!*\
  !*** ./utils/useHashChange.js ***!
  \********************************/
/*! exports provided: useHashChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHashChange", function() { return useHashChange; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useHashChange(onHashChange) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alex\react-componentes-e-projetos-diversos\todo-xstate-nextjs\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@xstate/react":
/*!********************************!*\
  !*** external "@xstate/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@xstate/react");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "uuid-v4":
/*!**************************!*\
  !*** external "uuid-v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid-v4");

/***/ }),

/***/ "xstate":
/*!*************************!*\
  !*** external "xstate" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xstate");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9zLmpzeCIsIndlYnBhY2s6Ly8vLi9tYWNoaW5lcy90b2RvTWFjaGluZS5qcyIsIndlYnBhY2s6Ly8vLi9tYWNoaW5lcy90b2Rvc01hY2hpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdXNlSGFzaENoYW5nZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAeHN0YXRlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZC12NFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInhzdGF0ZVwiIl0sIm5hbWVzIjpbIlRvZG8iLCJ0b2RvUmVmIiwic3RhdGUiLCJzZW5kIiwidXNlU2VydmljZSIsImlucHV0UmVmIiwidXNlUmVmIiwiaWQiLCJ0aXRsZSIsImNvbXBsZXRlZCIsImNvbnRleHQiLCJ1c2VFZmZlY3QiLCJleGVjdXRlIiwiZm9jdXNJbnB1dCIsImN1cnJlbnQiLCJzZWxlY3QiLCJjbiIsImVkaXRpbmciLCJtYXRjaGVzIiwiXyIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImtleSIsImZpbHRlclRvZG9zIiwidG9kb3MiLCJmaWx0ZXIiLCJ0b2RvIiwicGVyc2lzdGVkVG9kb3NNYWNoaW5lIiwidG9kb3NNYWNoaW5lIiwid2l0aENvbmZpZyIsImFjdGlvbnMiLCJwZXJzaXN0IiwiY3R4IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsImdldEl0ZW0iLCJUb2RvcyIsInVzZU1hY2hpbmUiLCJjb250ZW5kIiwic2V0Q29udGVudCIsInVzZVN0YXRlIiwidXNlSGFzaENoYW5nZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInNsaWNlIiwidG9TdHJpbmdzIiwiYWxsQ29tcGxldGVkIiwibWFya0V2ZW50IiwibWFyayIsImZpbHRlcmVkVG9kb3MiLCJtYXAiLCJyZWYiLCJsZW5ndGgiLCJudW1BY3RpdmVUb2RvcyIsInNlbGVjdGVkIiwiYXNzaWduIiwidG9kb01hY2hpbmUiLCJNYWNoaW5lIiwiaW5pdGlhbCIsInVuZGVmaW5lZCIsInByZXZUaXRsZSIsIm9uIiwiVE9HR0xFX0NPTVBMRVRFIiwic2VuZFBhcmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiREVMRVRFIiwic3RhdGVzIiwicmVhZGluZyIsInVua25vd24iLCJjb25kIiwicGVuZGluZyIsIlNFVF9DT01QTEVURUQiLCJTRVRfQUNUSVZFIiwiaGlzdCIsIkVESVQiLCJvbkVudHJ5IiwiQ0hBTkdFIiwiQ09NTUlUIiwidHJpbSIsIkJMVVIiLCJDQU5DRUwiLCJkZWxldGVkIiwiY3JlYXRlVG9kbyIsInV1aWQiLCJpbml0aWFsaXppbmciLCJlbnRyeSIsInNwYXduIiwid2l0aENvbnRleHQiLCJhbGwiLCJhY3RpdmUiLCJuZXdUb2RvIiwiY29uY2F0IiwiZm9yRWFjaCIsIkNMRUFSX0NPTVBMRVRFRCIsIkluZGV4VG9kb3MiLCJvbkhhc2hDaGFuZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztR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QUFBQTtBQUFBO0FBQUEsSUFSSixDQURKO0FBWUgsQ0FiRDs7QUFlZUEseUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTeEQsYUFBVCxDQUF1QnlELFlBQXZCLEVBQXFDO0FBQzFDM0YseURBQVMsQ0FBQyxNQUFNO0FBQ2RtQyxVQUFNLENBQUN5RCxnQkFBUCxDQUF3QixZQUF4QixFQUFzQ0QsWUFBdEM7QUFFQSxXQUFPLE1BQU14RCxNQUFNLENBQUMwRCxtQkFBUCxDQUEyQixZQUEzQixFQUF5Q0YsWUFBekMsQ0FBYjtBQUNELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFLRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JELDBDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG1DIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VydmljZSB9IGZyb20gXCJAeHN0YXRlL3JlYWN0XCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFRvZG8oeyB0b2RvUmVmIH0pIHtcblx0Y29uc3QgW3N0YXRlLCBzZW5kXSA9IHVzZVNlcnZpY2UodG9kb1JlZik7XG5cdGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuXHRjb25zdCB7IGlkLCB0aXRsZSwgY29tcGxldGVkIH0gPSBzdGF0ZS5jb250ZXh0O1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0dG9kb1JlZi5leGVjdXRlKHN0YXRlLCB7XG5cdFx0XHRmb2N1c0lucHV0KCkge1xuXHRcdFx0XHRpbnB1dFJlZi5jdXJyZW50ICYmIGlucHV0UmVmLmN1cnJlbnQuc2VsZWN0KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sIFtzdGF0ZSwgdG9kb1JlZl0pO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxsaVxuXHRcdFx0XHRjbGFzc05hbWU9e2NuKHtcblx0XHRcdFx0XHRlZGl0aW5nOiBzdGF0ZS5tYXRjaGVzKFwiZWRpdGluZ1wiKSxcblx0XHRcdFx0XHRjb21wbGV0ZWRcblx0XHRcdFx0fSl9XG5cdFx0XHRcdGRhdGEtdG9kby1zdGF0ZT17Y29tcGxldGVkID8gXCJjb21wbGV0ZWRcIiA6IFwiYWN0aXZlXCJ9XG5cdFx0XHRcdGtleT17aWR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlld1wiPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidG9nZ2xlXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17XyA9PiB7XG5cdFx0XHRcdFx0XHRcdHNlbmQoXCJUT0dHTEVfQ09NUExFVEVcIik7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0dmFsdWU9e2NvbXBsZXRlZH1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2NvbXBsZXRlZH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxsYWJlbFxuXHRcdFx0XHRcdFx0b25Eb3VibGVDbGljaz17ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNlbmQoXCJFRElUXCIpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdFx0PC9sYWJlbD57XCIgXCJ9XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJkZXN0cm95XCIgb25DbGljaz17KCkgPT4gc2VuZChcIkRFTEVURVwiKX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImVkaXRcIlxuXHRcdFx0XHRcdHZhbHVlPXt0aXRsZX1cblx0XHRcdFx0XHRvbkJsdXI9e18gPT4gc2VuZChcIkJMVVJcIil9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gc2VuZChcIkNIQU5HRVwiLCB7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KX1cblx0XHRcdFx0XHRvbktleVByZXNzPXtlID0+IHtcblx0XHRcdFx0XHRcdGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG5cdFx0XHRcdFx0XHRcdHNlbmQoXCJDT01NSVRcIik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRvbktleURvd249e2UgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG5cdFx0XHRcdFx0XHRcdHNlbmQoXCJDQU5DRUxcIik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRyZWY9e2lucHV0UmVmfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9saT5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vaW1wb3J0IFwidG9kb212Yy1hcHAtY3NzL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgdXNlTWFjaGluZSB9IGZyb20gXCJAeHN0YXRlL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VIYXNoQ2hhbmdlIH0gZnJvbSBcIi4uL3V0aWxzL3VzZUhhc2hDaGFuZ2VcIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi9Ub2RvXCI7XG5pbXBvcnQgeyB0b2Rvc01hY2hpbmUgfSBmcm9tIFwiLi4vbWFjaGluZXMvdG9kb3NNYWNoaW5lXCI7XG5cbmZ1bmN0aW9uIGZpbHRlclRvZG9zKHN0YXRlLCB0b2Rvcykge1xuICBpZiAoc3RhdGUubWF0Y2hlcyhcImFjdGl2ZVwiKSkge1xuICAgIHJldHVybiB0b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZWQpO1xuICB9XG5cbiAgaWYgKHN0YXRlLm1hdGNoZXMoXCJjb21wbGV0ZWRcIikpIHtcbiAgICByZXR1cm4gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5jb21wbGV0ZWQpO1xuICB9XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuXG5jb25zdCBwZXJzaXN0ZWRUb2Rvc01hY2hpbmUgPSB0b2Rvc01hY2hpbmUud2l0aENvbmZpZyhcbiAge1xuICAgIGFjdGlvbnM6IHtcbiAgICAgIHBlcnNpc3Q6IGN0eCA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3MteHN0YXRlXCIsIEpTT04uc3RyaW5naWZ5KGN0eC50b2RvcykpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8gaW5pdGlhbCBzdGF0ZSBmcm9tIGxvY2Fsc3RvcmFnZVxuICB7XG4gICAgdG9kbzogXCJMZWFybiBzdGF0ZSBtYWNoaW5lc1wiLFxuICAgIHRvZG9zOiAoKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvcy14c3RhdGVcIikpIHx8IFtdO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSkoKVxuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvcygpIHtcbiAgY29uc3QgW3N0YXRlLCBzZW5kXSA9IHVzZU1hY2hpbmUocGVyc2lzdGVkVG9kb3NNYWNoaW5lKTtcbiAgY29uc3QgW2NvbnRlbmQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlSGFzaENoYW5nZSgoKSA9PiB7XG4gICAgc2VuZChgU0hPVy4ke3dpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDIpIHx8IFwiYWxsXCJ9YCk7XG4gIH0pO1xuXG4gIC8vIENhcHR1cmUgaW5pdGlhbCBzdGF0ZSBvZiBicm93c2VyIGhhc2hcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgyKSAmJlxuICAgICAgc2VuZChgU0hPVy4ke3dpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDIpfWApO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENvbnRlbnQoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0b2RvYXBwXCIgZGF0YS1zdGF0ZT17c3RhdGUudG9TdHJpbmdzKCl9PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxoMT50b2RvczwvaDE+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuZXctdG9kb1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgbmVlZHMgdG8gYmUgZG9uZT9cIlxuICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICBvbktleVByZXNzPXtlID0+IHtcbiAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICBzZW5kKFwiTkVXVE9ETy5DT01NSVRcIiwgeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZW5kKFwiTkVXVE9ETy5DSEFOR0VcIiwgeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICB2YWx1ZT17dG9kb31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJ0b2dnbGUtYWxsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvZ2dsZS1hbGxcIlxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2FsbENvbXBsZXRlZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNlbmQobWFya0V2ZW50KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZ2dsZS1hbGxcIiB0aXRsZT17YE1hcmsgYWxsIGFzICR7bWFya31gfT5cbiAgICAgICAgICAgIE1hcmsgYWxsIGFzIHttYXJrfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvZG8tbGlzdFwiPlxuICAgICAgICAgICAge2ZpbHRlcmVkVG9kb3MubWFwKHRvZG8gPT4gKFxuICAgICAgICAgICAgICB0b2RvID8gPFRvZG8ga2V5PXt0b2RvLmlkfSB0b2RvUmVmPXt0b2RvLnJlZn0gLz4gOiBudWxsXG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIHshIXRvZG9zLmxlbmd0aCAmJiAoXG4gICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvZG8tY291bnRcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz57bnVtQWN0aXZlVG9kb3N9PC9zdHJvbmc+IGl0ZW1cbiAgICAgICAgICAgIHtudW1BY3RpdmVUb2RvcyA9PT0gMSA/IFwiXCIgOiBcInNcIn0gbGVmdFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmaWx0ZXJzXCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbih7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBzdGF0ZS5tYXRjaGVzKFwiYWxsXCIpXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjL1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQWxsXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHN0YXRlLm1hdGNoZXMoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiMvYWN0aXZlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBY3RpdmVcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogc3RhdGUubWF0Y2hlcyhcImNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBocmVmPVwiIy9jb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvbXBsZXRlZFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAge251bUFjdGl2ZVRvZG9zIDwgdG9kb3MubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e18gPT4gc2VuZChcIkNMRUFSX0NPTVBMRVRFRFwiKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGVhci1jb21wbGV0ZWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2xlYXIgY29tcGxldGVkXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgKX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH0sIFtzdGF0ZV0pXG5cbiAgY29uc3QgeyB0b2RvcywgdG9kbyB9ID0gc3RhdGUuY29udGV4dDtcblxuICBjb25zdCBudW1BY3RpdmVUb2RvcyA9IHRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlZCkubGVuZ3RoO1xuICBjb25zdCBhbGxDb21wbGV0ZWQgPSB0b2Rvcy5sZW5ndGggPiAwICYmIG51bUFjdGl2ZVRvZG9zID09PSAwO1xuICBjb25zdCBtYXJrID0gIWFsbENvbXBsZXRlZCA/IFwiY29tcGxldGVkXCIgOiBcImFjdGl2ZVwiO1xuICBjb25zdCBtYXJrRXZlbnQgPSBgTUFSSy4ke21hcmt9YDtcbiAgY29uc3QgZmlsdGVyZWRUb2RvcyA9IGZpbHRlclRvZG9zKHN0YXRlLCB0b2Rvcyk7XG5cbiAgcmV0dXJuIChcbiAgICBjb250ZW5kXG4gICk7XG59XG4iLCJpbXBvcnQgeyBNYWNoaW5lLCBhY3Rpb25zLCBzZW5kUGFyZW50IH0gZnJvbSBcInhzdGF0ZVwiO1xuY29uc3QgeyBhc3NpZ24gfSA9IGFjdGlvbnM7XG5cbmV4cG9ydCBjb25zdCB0b2RvTWFjaGluZSA9IE1hY2hpbmUoe1xuXHRpZDogXCJ0b2RvXCIsXG5cdGluaXRpYWw6IFwicmVhZGluZ1wiLFxuXHRjb250ZXh0OiB7XG5cdFx0aWQ6IHVuZGVmaW5lZCxcblx0XHR0aXRsZTogXCJcIixcblx0XHRwcmV2VGl0bGU6IFwiXCJcblx0fSxcblx0b246IHtcblx0XHRUT0dHTEVfQ09NUExFVEU6IHtcblx0XHRcdHRhcmdldDogXCIucmVhZGluZy5jb21wbGV0ZWRcIixcblx0XHRcdGFjdGlvbnM6IFtcblx0XHRcdFx0YXNzaWduKHsgY29tcGxldGVkOiB0cnVlIH0pLFxuXHRcdFx0XHRzZW5kUGFyZW50KGN0eCA9PiAoY29uc29sZS5sb2coJ2NvbW1pdCcpLCB7IHR5cGU6IFwiVE9ETy5DT01NSVRcIiwgdG9kbzogY3R4IH0pKVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0REVMRVRFOiBcImRlbGV0ZWRcIlxuXHR9LFxuXHRzdGF0ZXM6IHtcblx0XHRyZWFkaW5nOiB7XG5cdFx0XHRpbml0aWFsOiBcInVua25vd25cIixcblx0XHRcdHN0YXRlczoge1xuXHRcdFx0XHR1bmtub3duOiB7XG5cdFx0XHRcdFx0b246IHtcblx0XHRcdFx0XHRcdFwiXCI6IFtcblx0XHRcdFx0XHRcdFx0eyB0YXJnZXQ6IFwiY29tcGxldGVkXCIsIGNvbmQ6IGN0eCA9PiBjdHguY29tcGxldGVkIH0sXG5cdFx0XHRcdFx0XHRcdHsgdGFyZ2V0OiBcInBlbmRpbmdcIiB9XG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRwZW5kaW5nOiB7XG5cdFx0XHRcdFx0b246IHtcblx0XHRcdFx0XHRcdFNFVF9DT01QTEVURUQ6IHtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0OiBcImNvbXBsZXRlZFwiLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdFx0XHRcdFx0YXNzaWduKHsgY29tcGxldGVkOiB0cnVlIH0pLFxuXHRcdFx0XHRcdFx0XHRcdHNlbmRQYXJlbnQoY3R4ID0+ICh7IHR5cGU6IFwiVE9ETy5DT01NSVRcIiwgdG9kbzogY3R4IH0pKVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRjb21wbGV0ZWQ6IHtcblx0XHRcdFx0XHRvbjoge1xuXHRcdFx0XHRcdFx0VE9HR0xFX0NPTVBMRVRFOiB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldDogXCJwZW5kaW5nXCIsXG5cdFx0XHRcdFx0XHRcdGFjdGlvbnM6IFtcblx0XHRcdFx0XHRcdFx0XHRhc3NpZ24oeyBjb21wbGV0ZWQ6IGZhbHNlIH0pLFxuXHRcdFx0XHRcdFx0XHRcdHNlbmRQYXJlbnQoY3R4ID0+ICh7IHR5cGU6IFwiVE9ETy5DT01NSVRcIiwgdG9kbzogY3R4IH0pKVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0U0VUX0FDVElWRToge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXQ6IFwicGVuZGluZ1wiLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdFx0XHRcdFx0YXNzaWduKHsgY29tcGxldGVkOiBmYWxzZSB9KSxcblx0XHRcdFx0XHRcdFx0XHRzZW5kUGFyZW50KGN0eCA9PiAoeyB0eXBlOiBcIlRPRE8uQ09NTUlUXCIsIHRvZG86IGN0eCB9KSlcblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0aGlzdDoge1xuXHRcdFx0XHRcdHR5cGU6IFwiaGlzdG9yeVwiXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRvbjoge1xuXHRcdFx0XHRFRElUOiB7XG5cdFx0XHRcdFx0dGFyZ2V0OiBcImVkaXRpbmdcIixcblx0XHRcdFx0XHRhY3Rpb25zOiBcImZvY3VzSW5wdXRcIlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRlZGl0aW5nOiB7XG5cdFx0XHRvbkVudHJ5OiBhc3NpZ24oeyBwcmV2VGl0bGU6IGN0eCA9PiBjdHgudGl0bGUgfSksXG5cdFx0XHRvbjoge1xuXHRcdFx0XHRDSEFOR0U6IHtcblx0XHRcdFx0XHRhY3Rpb25zOiBhc3NpZ24oe1xuXHRcdFx0XHRcdFx0dGl0bGU6IChjdHgsIGUpID0+IGUudmFsdWVcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRDT01NSVQ6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0YXJnZXQ6IFwicmVhZGluZy5oaXN0XCIsXG5cdFx0XHRcdFx0XHRhY3Rpb25zOiBzZW5kUGFyZW50KGN0eCA9PiAoeyB0eXBlOiBcIlRPRE8uQ09NTUlUXCIsIHRvZG86IGN0eCB9KSksXG5cdFx0XHRcdFx0XHRjb25kOiBjdHggPT4gY3R4LnRpdGxlLnRyaW0oKS5sZW5ndGggPiAwXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7IHRhcmdldDogXCJkZWxldGVkXCIgfVxuXHRcdFx0XHRdLFxuXHRcdFx0XHRCTFVSOiB7XG5cdFx0XHRcdFx0dGFyZ2V0OiBcInJlYWRpbmdcIixcblx0XHRcdFx0XHRhY3Rpb25zOiBzZW5kUGFyZW50KGN0eCA9PiAoeyB0eXBlOiBcIlRPRE8uQ09NTUlUXCIsIHRvZG86IGN0eCB9KSlcblx0XHRcdFx0fSxcblx0XHRcdFx0Q0FOQ0VMOiB7XG5cdFx0XHRcdFx0dGFyZ2V0OiBcInJlYWRpbmdcIixcblx0XHRcdFx0XHRhY3Rpb25zOiBhc3NpZ24oeyB0aXRsZTogY3R4ID0+IGN0eC5wcmV2VGl0bGUgfSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGVsZXRlZDoge1xuXHRcdFx0b25FbnRyeTogc2VuZFBhcmVudChjdHggPT4gKHsgdHlwZTogXCJUT0RPLkRFTEVURVwiLCBpZDogY3R4LmlkIH0pKVxuXHRcdH1cblx0fVxufSk7XG4iLCJpbXBvcnQgeyBNYWNoaW5lLCBhc3NpZ24sIHNwYXduIH0gZnJvbSBcInhzdGF0ZVwiO1xuaW1wb3J0IHV1aWQgZnJvbSBcInV1aWQtdjRcIjtcbmltcG9ydCB7IHRvZG9NYWNoaW5lIH0gZnJvbSBcIi4vdG9kb01hY2hpbmVcIjtcblxuY29uc3QgY3JlYXRlVG9kbyA9IHRpdGxlID0+IHtcblx0cmV0dXJuIHtcblx0XHRpZDogdXVpZCgpLFxuXHRcdHRpdGxlOiB0aXRsZSxcblx0XHRjb21wbGV0ZWQ6IGZhbHNlXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3QgdG9kb3NNYWNoaW5lID0gTWFjaGluZSh7XG5cdGlkOiBcInRvZG9zXCIsXG5cdGNvbnRleHQ6IHtcblx0XHR0b2RvOiBcIlwiLCAvLyBuZXcgdG9kb1xuXHRcdHRvZG9zOiBbXVxuXHR9LFxuXHRpbml0aWFsOiBcImluaXRpYWxpemluZ1wiLFxuXHRzdGF0ZXM6IHtcblx0XHRpbml0aWFsaXppbmc6IHtcblx0XHRcdGVudHJ5OiBhc3NpZ24oe1xuXHRcdFx0XHR0b2RvczogKGN0eCwgZSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBjdHgudG9kb3MubWFwKHRvZG8gPT4gKHtcblx0XHRcdFx0XHRcdC4uLnRvZG8sXG5cdFx0XHRcdFx0XHRyZWY6IHNwYXduKHRvZG9NYWNoaW5lLndpdGhDb250ZXh0KHRvZG8pKVxuXHRcdFx0XHRcdH0pKTtcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHRvbjoge1xuXHRcdFx0XHRcIlwiOiBcImFsbFwiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhbGw6IHt9LFxuXHRcdGFjdGl2ZToge30sXG5cdFx0Y29tcGxldGVkOiB7fVxuXHR9LFxuXHRvbjoge1xuXHRcdFwiTkVXVE9ETy5DSEFOR0VcIjoge1xuXHRcdFx0YWN0aW9uczogYXNzaWduKHtcblx0XHRcdFx0dG9kbzogKGN0eCwgZSkgPT4gZS52YWx1ZVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdFwiTkVXVE9ETy5DT01NSVRcIjoge1xuXHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHRhc3NpZ24oe1xuXHRcdFx0XHRcdHRvZG86IFwiXCIsIC8vIGNsZWFyIHRvZG9cblx0XHRcdFx0XHR0b2RvczogKGN0eCwgZSkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgbmV3VG9kbyA9IGNyZWF0ZVRvZG8oZS52YWx1ZS50cmltKCkpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGN0eC50b2Rvcy5jb25jYXQoe1xuXHRcdFx0XHRcdFx0XHQuLi5uZXdUb2RvLFxuXHRcdFx0XHRcdFx0XHRyZWY6IHNwYXduKHRvZG9NYWNoaW5lLndpdGhDb250ZXh0KG5ld1RvZG8pKVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0XCJwZXJzaXN0XCJcblx0XHRcdF0sXG5cdFx0XHRjb25kOiAoY3R4LCBlKSA9PiBlLnZhbHVlLnRyaW0oKS5sZW5ndGhcblx0XHR9LFxuXHRcdFwiVE9ETy5DT01NSVRcIjoge1xuXHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHRhc3NpZ24oe1xuXHRcdFx0XHRcdHRvZG9zOiAoY3R4LCBlKSA9PlxuXHRcdFx0XHRcdFx0Y3R4LnRvZG9zLm1hcCh0b2RvID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRvZG8uaWQgPT09IGUudG9kby5pZFxuXHRcdFx0XHRcdFx0XHRcdD8geyAuLi50b2RvLCAuLi5lLnRvZG8sIHJlZjogdG9kby5yZWYgfVxuXHRcdFx0XHRcdFx0XHRcdDogdG9kbztcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRcInBlcnNpc3RcIlxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0XCJUT0RPLkRFTEVURVwiOiB7XG5cdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdGFzc2lnbih7XG5cdFx0XHRcdFx0dG9kb3M6IChjdHgsIGUpID0+IGN0eC50b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmlkICE9PSBlLmlkKVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0XCJwZXJzaXN0XCJcblx0XHRcdF1cblx0XHR9LFxuXHRcdFwiU0hPVy5hbGxcIjogXCIuYWxsXCIsXG5cdFx0XCJTSE9XLmFjdGl2ZVwiOiBcIi5hY3RpdmVcIixcblx0XHRcIlNIT1cuY29tcGxldGVkXCI6IFwiLmNvbXBsZXRlZFwiLFxuXHRcdFwiTUFSSy5jb21wbGV0ZWRcIjoge1xuXHRcdFx0YWN0aW9uczogY3R4ID0+IHtcblx0XHRcdFx0Y3R4LnRvZG9zLmZvckVhY2godG9kbyA9PiB0b2RvLnJlZi5zZW5kKFwiU0VUX0NPTVBMRVRFRFwiKSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcIk1BUksuYWN0aXZlXCI6IHtcblx0XHRcdGFjdGlvbnM6IGN0eCA9PiB7XG5cdFx0XHRcdGN0eC50b2Rvcy5mb3JFYWNoKHRvZG8gPT4gdG9kby5yZWYuc2VuZChcIlNFVF9BQ1RJVkVcIikpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Q0xFQVJfQ09NUExFVEVEOiB7XG5cdFx0XHRhY3Rpb25zOiBhc3NpZ24oe1xuXHRcdFx0XHR0b2RvczogY3R4ID0+IGN0eC50b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZWQpXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxufSk7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IFRvZG9zIGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb3MnO1xyXG5cclxuY29uc3QgSW5kZXhUb2RvcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5UZW1wbGF0ZSDigKIgVG9kb01WQzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvdG9kb212Yy1jb21tb24vYmFzZS5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL3RvZG9tdmMtYXBwLWNzcy9pbmRleC5jc3NcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxUb2RvcyAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFRvZG9zO1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VIYXNoQ2hhbmdlKG9uSGFzaENoYW5nZSkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgb25IYXNoQ2hhbmdlKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIG9uSGFzaENoYW5nZSk7XHJcbiAgfSwgW10pO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB4c3RhdGUvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZC12NFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ4c3RhdGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==