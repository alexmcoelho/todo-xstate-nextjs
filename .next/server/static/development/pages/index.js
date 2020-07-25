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
  todo: "Aprenda máquinas de estado",
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
        lineNumber: 57,
        columnNumber: 7
      }
    }, __jsx("header", {
      className: "header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }, "todos"), __jsx("input", {
      className: "new-todo",
      placeholder: "O que precisa ser feito?",
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
        lineNumber: 60,
        columnNumber: 11
      }
    })), __jsx("section", {
      className: "main",
      __self: this,
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
      onChange: () => {
        send(markEvent);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    }), __jsx("label", {
      htmlFor: "toggle-all",
      title: `Mark all as ${mark}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }
    }, "Mark all as ", mark), __jsx("ul", {
      className: "todo-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }
    }, filteredTodos.map(todo => todo ? __jsx(_Todo__WEBPACK_IMPORTED_MODULE_4__["Todo"], {
      key: todo.id,
      todoRef: todo.ref,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 22
      }
    }) : null))), !!todos.length && __jsx("footer", {
      className: "footer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "todo-count",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }
    }, __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }
    }, numActiveTodos), numActiveTodos === 1 ? " item restante" : " itens restantes"), __jsx("ul", {
      className: "filters",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
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
        lineNumber: 100,
        columnNumber: 17
      }
    }, "Todos")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
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
        lineNumber: 110,
        columnNumber: 17
      }
    }, "Ativos")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
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
        lineNumber: 120,
        columnNumber: 17
      }
    }, "Conclu\xEDdos"))), numActiveTodos < todos.length && __jsx("button", {
      onClick: _ => send("CLEAR_COMPLETED"),
      className: "clear-completed",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 15
      }
    }, "Limpa conclu\xEDdos"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9zLmpzeCIsIndlYnBhY2s6Ly8vLi9tYWNoaW5lcy90b2RvTWFjaGluZS5qcyIsIndlYnBhY2s6Ly8vLi9tYWNoaW5lcy90b2Rvc01hY2hpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdXNlSGFzaENoYW5nZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAeHN0YXRlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZC12NFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInhzdGF0ZVwiIl0sIm5hbWVzIjpbIlRvZG8iLCJ0b2RvUmVmIiwic3RhdGUiLCJzZW5kIiwidXNlU2VydmljZSIsImlucHV0UmVmIiwidXNlUmVmIiwiaWQiLCJ0aXRsZSIsImNvbXBsZXRlZCIsImNvbnRleHQiLCJ1c2VFZmZlY3QiLCJleGVjdXRlIiwiZm9jdXNJbnB1dCIsImN1cnJlbnQiLCJzZWxlY3QiLCJjbiIsImVkaXRpbmciLCJtYXRjaGVzIiwiXyIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImtleSIsImZpbHRlclRvZG9zIiwidG9kb3MiLCJmaWx0ZXIiLCJ0b2RvIiwicGVyc2lzdGVkVG9kb3NNYWNoaW5lIiwidG9kb3NNYWNoaW5lIiwid2l0aENvbmZpZyIsImFjdGlvbnMiLCJwZXJzaXN0IiwiY3R4IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsImdldEl0ZW0iLCJUb2RvcyIsInVzZU1hY2hpbmUiLCJjb250ZW5kIiwic2V0Q29udGVudCIsInVzZVN0YXRlIiwidXNlSGFzaENoYW5nZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInNsaWNlIiwidG9TdHJpbmdzIiwiYWxsQ29tcGxldGVkIiwibWFya0V2ZW50IiwibWFyayIsImZpbHRlcmVkVG9kb3MiLCJtYXAiLCJyZWYiLCJsZW5ndGgiLCJudW1BY3RpdmVUb2RvcyIsInNlbGVjdGVkIiwiYXNzaWduIiwidG9kb01hY2hpbmUiLCJNYWNoaW5lIiwiaW5pdGlhbCIsInVuZGVmaW5lZCIsInByZXZUaXRsZSIsIm9uIiwiVE9HR0xFX0NPTVBMRVRFIiwic2VuZFBhcmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiREVMRVRFIiwic3RhdGVzIiwicmVhZGluZyIsInVua25vd24iLCJjb25kIiwicGVuZGluZyIsIlNFVF9DT01QTEVURUQiLCJTRVRfQUNUSVZFIiwiaGlzdCIsIkVESVQiLCJvbkVudHJ5IiwiQ0hBTkdFIiwiQ09NTUlUIiwidHJpbSIsIkJMVVIiLCJDQU5DRUwiLCJkZWxldGVkIiwiY3JlYXRlVG9kbyIsInV1aWQiLCJpbml0aWFsaXppbmciLCJlbnRyeSIsInNwYXduIiwid2l0aENvbnRleHQiLCJhbGwiLCJhY3RpdmUiLCJuZXdUb2RvIiwiY29uY2F0IiwiZm9yRWFjaCIsIkNMRUFSX0NPTVBMRVRFRCIsIkluZGV4VG9kb3MiLCJvbkhhc2hDaGFuZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztR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O0FBQUE7QUFBQTtBQUFBLElBUkosQ0FESjtBQVlILENBYkQ7O0FBZWVBLHlFQUFmLEU7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU3hELGFBQVQsQ0FBdUJ5RCxZQUF2QixFQUFxQztBQUMxQzNGLHlEQUFTLENBQUMsTUFBTTtBQUNkbUMsVUFBTSxDQUFDeUQsZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0NELFlBQXRDO0FBRUEsV0FBTyxNQUFNeEQsTUFBTSxDQUFDMEQsbUJBQVAsQ0FBMkIsWUFBM0IsRUFBeUNGLFlBQXpDLENBQWI7QUFDRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBS0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRCwwQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlcnZpY2UgfSBmcm9tIFwiQHhzdGF0ZS9yZWFjdFwiO1xuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBUb2RvKHsgdG9kb1JlZiB9KSB7XG5cdGNvbnN0IFtzdGF0ZSwgc2VuZF0gPSB1c2VTZXJ2aWNlKHRvZG9SZWYpO1xuXHRjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcblx0Y29uc3QgeyBpZCwgdGl0bGUsIGNvbXBsZXRlZCB9ID0gc3RhdGUuY29udGV4dDtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHRvZG9SZWYuZXhlY3V0ZShzdGF0ZSwge1xuXHRcdFx0Zm9jdXNJbnB1dCgpIHtcblx0XHRcdFx0aW5wdXRSZWYuY3VycmVudCAmJiBpbnB1dFJlZi5jdXJyZW50LnNlbGVjdCgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LCBbc3RhdGUsIHRvZG9SZWZdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8bGlcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbih7XG5cdFx0XHRcdFx0ZWRpdGluZzogc3RhdGUubWF0Y2hlcyhcImVkaXRpbmdcIiksXG5cdFx0XHRcdFx0Y29tcGxldGVkXG5cdFx0XHRcdH0pfVxuXHRcdFx0XHRkYXRhLXRvZG8tc3RhdGU9e2NvbXBsZXRlZCA/IFwiY29tcGxldGVkXCIgOiBcImFjdGl2ZVwifVxuXHRcdFx0XHRrZXk9e2lkfVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpZXdcIj5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRvZ2dsZVwiXG5cdFx0XHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e18gPT4ge1xuXHRcdFx0XHRcdFx0XHRzZW5kKFwiVE9HR0xFX0NPTVBMRVRFXCIpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdHZhbHVlPXtjb21wbGV0ZWR9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtjb21wbGV0ZWR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8bGFiZWxcblx0XHRcdFx0XHRcdG9uRG91YmxlQ2xpY2s9e2UgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZW5kKFwiRURJVFwiKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0XHRcdDwvbGFiZWw+e1wiIFwifVxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiZGVzdHJveVwiIG9uQ2xpY2s9eygpID0+IHNlbmQoXCJERUxFVEVcIil9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJlZGl0XCJcblx0XHRcdFx0XHR2YWx1ZT17dGl0bGV9XG5cdFx0XHRcdFx0b25CbHVyPXtfID0+IHNlbmQoXCJCTFVSXCIpfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHNlbmQoXCJDSEFOR0VcIiwgeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSl9XG5cdFx0XHRcdFx0b25LZXlQcmVzcz17ZSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuXHRcdFx0XHRcdFx0XHRzZW5kKFwiQ09NTUlUXCIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0b25LZXlEb3duPXtlID0+IHtcblx0XHRcdFx0XHRcdGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuXHRcdFx0XHRcdFx0XHRzZW5kKFwiQ0FOQ0VMXCIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0cmVmPXtpbnB1dFJlZn1cblx0XHRcdFx0Lz5cblx0XHRcdDwvbGk+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyB1c2VNYWNoaW5lIH0gZnJvbSBcIkB4c3RhdGUvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUhhc2hDaGFuZ2UgfSBmcm9tIFwiLi4vdXRpbHMvdXNlSGFzaENoYW5nZVwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL1RvZG9cIjtcbmltcG9ydCB7IHRvZG9zTWFjaGluZSB9IGZyb20gXCIuLi9tYWNoaW5lcy90b2Rvc01hY2hpbmVcIjtcblxuZnVuY3Rpb24gZmlsdGVyVG9kb3Moc3RhdGUsIHRvZG9zKSB7XG4gIGlmIChzdGF0ZS5tYXRjaGVzKFwiYWN0aXZlXCIpKSB7XG4gICAgcmV0dXJuIHRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlZCk7XG4gIH1cblxuICBpZiAoc3RhdGUubWF0Y2hlcyhcImNvbXBsZXRlZFwiKSkge1xuICAgIHJldHVybiB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmNvbXBsZXRlZCk7XG4gIH1cblxuICByZXR1cm4gdG9kb3M7XG59XG5cbmNvbnN0IHBlcnNpc3RlZFRvZG9zTWFjaGluZSA9IHRvZG9zTWFjaGluZS53aXRoQ29uZmlnKFxuICB7XG4gICAgYWN0aW9uczoge1xuICAgICAgcGVyc2lzdDogY3R4ID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvcy14c3RhdGVcIiwgSlNPTi5zdHJpbmdpZnkoY3R4LnRvZG9zKSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvLyBpbml0aWFsIHN0YXRlIGZyb20gbG9jYWxzdG9yYWdlXG4gIHtcbiAgICB0b2RvOiBcIkFwcmVuZGEgbcOhcXVpbmFzIGRlIGVzdGFkb1wiLFxuICAgIHRvZG9zOiAoKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvcy14c3RhdGVcIikpIHx8IFtdO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSkoKVxuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvcygpIHtcbiAgY29uc3QgW3N0YXRlLCBzZW5kXSA9IHVzZU1hY2hpbmUocGVyc2lzdGVkVG9kb3NNYWNoaW5lKTtcbiAgY29uc3QgW2NvbnRlbmQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlSGFzaENoYW5nZSgoKSA9PiB7XG4gICAgc2VuZChgU0hPVy4ke3dpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDIpIHx8IFwiYWxsXCJ9YCk7XG4gIH0pO1xuXG4gIC8vIENhcHR1cmUgaW5pdGlhbCBzdGF0ZSBvZiBicm93c2VyIGhhc2hcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgyKSAmJlxuICAgICAgc2VuZChgU0hPVy4ke3dpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDIpfWApO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENvbnRlbnQoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0b2RvYXBwXCIgZGF0YS1zdGF0ZT17c3RhdGUudG9TdHJpbmdzKCl9PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxoMT50b2RvczwvaDE+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuZXctdG9kb1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk8gcXVlIHByZWNpc2Egc2VyIGZlaXRvP1wiXG4gICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgIG9uS2V5UHJlc3M9e2UgPT4ge1xuICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgIHNlbmQoXCJORVdUT0RPLkNPTU1JVFwiLCB7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNlbmQoXCJORVdUT0RPLkNIQU5HRVwiLCB7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgIHZhbHVlPXt0b2RvfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInRvZ2dsZS1hbGxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9nZ2xlLWFsbFwiXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY2hlY2tlZD17YWxsQ29tcGxldGVkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgc2VuZChtYXJrRXZlbnQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG9nZ2xlLWFsbFwiIHRpdGxlPXtgTWFyayBhbGwgYXMgJHttYXJrfWB9PlxuICAgICAgICAgICAgTWFyayBhbGwgYXMge21hcmt9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9kby1saXN0XCI+XG4gICAgICAgICAgICB7ZmlsdGVyZWRUb2Rvcy5tYXAodG9kbyA9PiAoXG4gICAgICAgICAgICAgIHRvZG8gPyA8VG9kbyBrZXk9e3RvZG8uaWR9IHRvZG9SZWY9e3RvZG8ucmVmfSAvPiA6IG51bGxcbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgeyEhdG9kb3MubGVuZ3RoICYmIChcbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9kby1jb3VudFwiPlxuICAgICAgICAgICAgICA8c3Ryb25nPntudW1BY3RpdmVUb2Rvc308L3N0cm9uZz5cbiAgICAgICAgICAgICAge251bUFjdGl2ZVRvZG9zID09PSAxID8gXCIgaXRlbSByZXN0YW50ZVwiIDogXCIgaXRlbnMgcmVzdGFudGVzXCJ9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmlsdGVyc1wiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogc3RhdGUubWF0Y2hlcyhcImFsbFwiKVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBocmVmPVwiIy9cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRvZG9zXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHN0YXRlLm1hdGNoZXMoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiMvYWN0aXZlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBdGl2b3NcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogc3RhdGUubWF0Y2hlcyhcImNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBocmVmPVwiIy9jb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvbmNsdcOtZG9zXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICB7bnVtQWN0aXZlVG9kb3MgPCB0b2Rvcy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17XyA9PiBzZW5kKFwiQ0xFQVJfQ09NUExFVEVEXCIpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsZWFyLWNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMaW1wYSBjb25jbHXDrWRvc1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9LCBbc3RhdGVdKVxuXG4gIGNvbnN0IHsgdG9kb3MsIHRvZG8gfSA9IHN0YXRlLmNvbnRleHQ7XG5cbiAgY29uc3QgbnVtQWN0aXZlVG9kb3MgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZWQpLmxlbmd0aDtcbiAgY29uc3QgYWxsQ29tcGxldGVkID0gdG9kb3MubGVuZ3RoID4gMCAmJiBudW1BY3RpdmVUb2RvcyA9PT0gMDtcbiAgY29uc3QgbWFyayA9ICFhbGxDb21wbGV0ZWQgPyBcImNvbXBsZXRlZFwiIDogXCJhY3RpdmVcIjtcbiAgY29uc3QgbWFya0V2ZW50ID0gYE1BUksuJHttYXJrfWA7XG4gIGNvbnN0IGZpbHRlcmVkVG9kb3MgPSBmaWx0ZXJUb2RvcyhzdGF0ZSwgdG9kb3MpO1xuXG4gIHJldHVybiAoXG4gICAgY29udGVuZFxuICApO1xufVxuIiwiaW1wb3J0IHsgTWFjaGluZSwgYWN0aW9ucywgc2VuZFBhcmVudCB9IGZyb20gXCJ4c3RhdGVcIjtcbmNvbnN0IHsgYXNzaWduIH0gPSBhY3Rpb25zO1xuXG5leHBvcnQgY29uc3QgdG9kb01hY2hpbmUgPSBNYWNoaW5lKHtcblx0aWQ6IFwidG9kb1wiLFxuXHRpbml0aWFsOiBcInJlYWRpbmdcIixcblx0Y29udGV4dDoge1xuXHRcdGlkOiB1bmRlZmluZWQsXG5cdFx0dGl0bGU6IFwiXCIsXG5cdFx0cHJldlRpdGxlOiBcIlwiXG5cdH0sXG5cdG9uOiB7XG5cdFx0VE9HR0xFX0NPTVBMRVRFOiB7XG5cdFx0XHR0YXJnZXQ6IFwiLnJlYWRpbmcuY29tcGxldGVkXCIsXG5cdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdGFzc2lnbih7IGNvbXBsZXRlZDogdHJ1ZSB9KSxcblx0XHRcdFx0c2VuZFBhcmVudChjdHggPT4gKGNvbnNvbGUubG9nKCdjb21taXQnKSwgeyB0eXBlOiBcIlRPRE8uQ09NTUlUXCIsIHRvZG86IGN0eCB9KSlcblx0XHRcdF1cblx0XHR9LFxuXHRcdERFTEVURTogXCJkZWxldGVkXCJcblx0fSxcblx0c3RhdGVzOiB7XG5cdFx0cmVhZGluZzoge1xuXHRcdFx0aW5pdGlhbDogXCJ1bmtub3duXCIsXG5cdFx0XHRzdGF0ZXM6IHtcblx0XHRcdFx0dW5rbm93bjoge1xuXHRcdFx0XHRcdG9uOiB7XG5cdFx0XHRcdFx0XHRcIlwiOiBbXG5cdFx0XHRcdFx0XHRcdHsgdGFyZ2V0OiBcImNvbXBsZXRlZFwiLCBjb25kOiBjdHggPT4gY3R4LmNvbXBsZXRlZCB9LFxuXHRcdFx0XHRcdFx0XHR7IHRhcmdldDogXCJwZW5kaW5nXCIgfVxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0cGVuZGluZzoge1xuXHRcdFx0XHRcdG9uOiB7XG5cdFx0XHRcdFx0XHRTRVRfQ09NUExFVEVEOiB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldDogXCJjb21wbGV0ZWRcIixcblx0XHRcdFx0XHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHRcdFx0XHRcdGFzc2lnbih7IGNvbXBsZXRlZDogdHJ1ZSB9KSxcblx0XHRcdFx0XHRcdFx0XHRzZW5kUGFyZW50KGN0eCA9PiAoeyB0eXBlOiBcIlRPRE8uQ09NTUlUXCIsIHRvZG86IGN0eCB9KSlcblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0Y29tcGxldGVkOiB7XG5cdFx0XHRcdFx0b246IHtcblx0XHRcdFx0XHRcdFRPR0dMRV9DT01QTEVURToge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXQ6IFwicGVuZGluZ1wiLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdFx0XHRcdFx0YXNzaWduKHsgY29tcGxldGVkOiBmYWxzZSB9KSxcblx0XHRcdFx0XHRcdFx0XHRzZW5kUGFyZW50KGN0eCA9PiAoeyB0eXBlOiBcIlRPRE8uQ09NTUlUXCIsIHRvZG86IGN0eCB9KSlcblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFNFVF9BQ1RJVkU6IHtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0OiBcInBlbmRpbmdcIixcblx0XHRcdFx0XHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHRcdFx0XHRcdGFzc2lnbih7IGNvbXBsZXRlZDogZmFsc2UgfSksXG5cdFx0XHRcdFx0XHRcdFx0c2VuZFBhcmVudChjdHggPT4gKHsgdHlwZTogXCJUT0RPLkNPTU1JVFwiLCB0b2RvOiBjdHggfSkpXG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGhpc3Q6IHtcblx0XHRcdFx0XHR0eXBlOiBcImhpc3RvcnlcIlxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0b246IHtcblx0XHRcdFx0RURJVDoge1xuXHRcdFx0XHRcdHRhcmdldDogXCJlZGl0aW5nXCIsXG5cdFx0XHRcdFx0YWN0aW9uczogXCJmb2N1c0lucHV0XCJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZWRpdGluZzoge1xuXHRcdFx0b25FbnRyeTogYXNzaWduKHsgcHJldlRpdGxlOiBjdHggPT4gY3R4LnRpdGxlIH0pLFxuXHRcdFx0b246IHtcblx0XHRcdFx0Q0hBTkdFOiB7XG5cdFx0XHRcdFx0YWN0aW9uczogYXNzaWduKHtcblx0XHRcdFx0XHRcdHRpdGxlOiAoY3R4LCBlKSA9PiBlLnZhbHVlXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSxcblx0XHRcdFx0Q09NTUlUOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGFyZ2V0OiBcInJlYWRpbmcuaGlzdFwiLFxuXHRcdFx0XHRcdFx0YWN0aW9uczogc2VuZFBhcmVudChjdHggPT4gKHsgdHlwZTogXCJUT0RPLkNPTU1JVFwiLCB0b2RvOiBjdHggfSkpLFxuXHRcdFx0XHRcdFx0Y29uZDogY3R4ID0+IGN0eC50aXRsZS50cmltKCkubGVuZ3RoID4gMFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0eyB0YXJnZXQ6IFwiZGVsZXRlZFwiIH1cblx0XHRcdFx0XSxcblx0XHRcdFx0QkxVUjoge1xuXHRcdFx0XHRcdHRhcmdldDogXCJyZWFkaW5nXCIsXG5cdFx0XHRcdFx0YWN0aW9uczogc2VuZFBhcmVudChjdHggPT4gKHsgdHlwZTogXCJUT0RPLkNPTU1JVFwiLCB0b2RvOiBjdHggfSkpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdENBTkNFTDoge1xuXHRcdFx0XHRcdHRhcmdldDogXCJyZWFkaW5nXCIsXG5cdFx0XHRcdFx0YWN0aW9uczogYXNzaWduKHsgdGl0bGU6IGN0eCA9PiBjdHgucHJldlRpdGxlIH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGRlbGV0ZWQ6IHtcblx0XHRcdG9uRW50cnk6IHNlbmRQYXJlbnQoY3R4ID0+ICh7IHR5cGU6IFwiVE9ETy5ERUxFVEVcIiwgaWQ6IGN0eC5pZCB9KSlcblx0XHR9XG5cdH1cbn0pO1xuIiwiaW1wb3J0IHsgTWFjaGluZSwgYXNzaWduLCBzcGF3biB9IGZyb20gXCJ4c3RhdGVcIjtcbmltcG9ydCB1dWlkIGZyb20gXCJ1dWlkLXY0XCI7XG5pbXBvcnQgeyB0b2RvTWFjaGluZSB9IGZyb20gXCIuL3RvZG9NYWNoaW5lXCI7XG5cbmNvbnN0IGNyZWF0ZVRvZG8gPSB0aXRsZSA9PiB7XG5cdHJldHVybiB7XG5cdFx0aWQ6IHV1aWQoKSxcblx0XHR0aXRsZTogdGl0bGUsXG5cdFx0Y29tcGxldGVkOiBmYWxzZVxuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IHRvZG9zTWFjaGluZSA9IE1hY2hpbmUoe1xuXHRpZDogXCJ0b2Rvc1wiLFxuXHRjb250ZXh0OiB7XG5cdFx0dG9kbzogXCJcIiwgLy8gbmV3IHRvZG9cblx0XHR0b2RvczogW11cblx0fSxcblx0aW5pdGlhbDogXCJpbml0aWFsaXppbmdcIixcblx0c3RhdGVzOiB7XG5cdFx0aW5pdGlhbGl6aW5nOiB7XG5cdFx0XHRlbnRyeTogYXNzaWduKHtcblx0XHRcdFx0dG9kb3M6IChjdHgsIGUpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gY3R4LnRvZG9zLm1hcCh0b2RvID0+ICh7XG5cdFx0XHRcdFx0XHQuLi50b2RvLFxuXHRcdFx0XHRcdFx0cmVmOiBzcGF3bih0b2RvTWFjaGluZS53aXRoQ29udGV4dCh0b2RvKSlcblx0XHRcdFx0XHR9KSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0b246IHtcblx0XHRcdFx0XCJcIjogXCJhbGxcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YWxsOiB7fSxcblx0XHRhY3RpdmU6IHt9LFxuXHRcdGNvbXBsZXRlZDoge31cblx0fSxcblx0b246IHtcblx0XHRcIk5FV1RPRE8uQ0hBTkdFXCI6IHtcblx0XHRcdGFjdGlvbnM6IGFzc2lnbih7XG5cdFx0XHRcdHRvZG86IChjdHgsIGUpID0+IGUudmFsdWVcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRcIk5FV1RPRE8uQ09NTUlUXCI6IHtcblx0XHRcdGFjdGlvbnM6IFtcblx0XHRcdFx0YXNzaWduKHtcblx0XHRcdFx0XHR0b2RvOiBcIlwiLCAvLyBjbGVhciB0b2RvXG5cdFx0XHRcdFx0dG9kb3M6IChjdHgsIGUpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IG5ld1RvZG8gPSBjcmVhdGVUb2RvKGUudmFsdWUudHJpbSgpKTtcblx0XHRcdFx0XHRcdHJldHVybiBjdHgudG9kb3MuY29uY2F0KHtcblx0XHRcdFx0XHRcdFx0Li4ubmV3VG9kbyxcblx0XHRcdFx0XHRcdFx0cmVmOiBzcGF3bih0b2RvTWFjaGluZS53aXRoQ29udGV4dChuZXdUb2RvKSlcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSksXG5cdFx0XHRcdFwicGVyc2lzdFwiXG5cdFx0XHRdLFxuXHRcdFx0Y29uZDogKGN0eCwgZSkgPT4gZS52YWx1ZS50cmltKCkubGVuZ3RoXG5cdFx0fSxcblx0XHRcIlRPRE8uQ09NTUlUXCI6IHtcblx0XHRcdGFjdGlvbnM6IFtcblx0XHRcdFx0YXNzaWduKHtcblx0XHRcdFx0XHR0b2RvczogKGN0eCwgZSkgPT5cblx0XHRcdFx0XHRcdGN0eC50b2Rvcy5tYXAodG9kbyA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0b2RvLmlkID09PSBlLnRvZG8uaWRcblx0XHRcdFx0XHRcdFx0XHQ/IHsgLi4udG9kbywgLi4uZS50b2RvLCByZWY6IHRvZG8ucmVmIH1cblx0XHRcdFx0XHRcdFx0XHQ6IHRvZG87XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0XCJwZXJzaXN0XCJcblx0XHRcdF1cblx0XHR9LFxuXHRcdFwiVE9ETy5ERUxFVEVcIjoge1xuXHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHRhc3NpZ24oe1xuXHRcdFx0XHRcdHRvZG9zOiAoY3R4LCBlKSA9PiBjdHgudG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5pZCAhPT0gZS5pZClcblx0XHRcdFx0fSksXG5cdFx0XHRcdFwicGVyc2lzdFwiXG5cdFx0XHRdXG5cdFx0fSxcblx0XHRcIlNIT1cuYWxsXCI6IFwiLmFsbFwiLFxuXHRcdFwiU0hPVy5hY3RpdmVcIjogXCIuYWN0aXZlXCIsXG5cdFx0XCJTSE9XLmNvbXBsZXRlZFwiOiBcIi5jb21wbGV0ZWRcIixcblx0XHRcIk1BUksuY29tcGxldGVkXCI6IHtcblx0XHRcdGFjdGlvbnM6IGN0eCA9PiB7XG5cdFx0XHRcdGN0eC50b2Rvcy5mb3JFYWNoKHRvZG8gPT4gdG9kby5yZWYuc2VuZChcIlNFVF9DT01QTEVURURcIikpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCJNQVJLLmFjdGl2ZVwiOiB7XG5cdFx0XHRhY3Rpb25zOiBjdHggPT4ge1xuXHRcdFx0XHRjdHgudG9kb3MuZm9yRWFjaCh0b2RvID0+IHRvZG8ucmVmLnNlbmQoXCJTRVRfQUNUSVZFXCIpKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdENMRUFSX0NPTVBMRVRFRDoge1xuXHRcdFx0YWN0aW9uczogYXNzaWduKHtcblx0XHRcdFx0dG9kb3M6IGN0eCA9PiBjdHgudG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uY29tcGxldGVkKVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbn0pO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCBUb2RvcyBmcm9tICcuLi9jb21wb25lbnRzL1RvZG9zJztcclxuXHJcbmNvbnN0IEluZGV4VG9kb3MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+VGVtcGxhdGUg4oCiIFRvZG9NVkM8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL3RvZG9tdmMtY29tbW9uL2Jhc2UuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8VG9kb3MgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhUb2RvcztcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlSGFzaENoYW5nZShvbkhhc2hDaGFuZ2UpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIG9uSGFzaENoYW5nZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBvbkhhc2hDaGFuZ2UpO1xyXG4gIH0sIFtdKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAeHN0YXRlL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWQtdjRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieHN0YXRlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=