module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("eb00");


/***/ }),

/***/ "01f8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVideoTo", function() { return getVideoTo; });
function getVideoTo(id) {
  return {
    name: 'video-single',
    params: {
      videoId: id
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
  var app = _a.app;
  app.config.globalProperties.$common = {
    getVideoTo: getVideoTo
  };
});

/***/ }),

/***/ "068d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RDrawer.vue?vue&type=template&id=3c1278b4


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${Object(server_renderer_["ssrRenderAttrs"])(Object(external_vue_["mergeProps"])({
    class: ["transition-all bg-white overflow-hidden border-r h-full", _ctx.model ? 'w-64' : 'w-0']
  }, _attrs))}>`);

  Object(server_renderer_["ssrRenderSlot"])(_ctx.$slots, "default", {}, null, _push, _parent);

  _push(`</div>`);
}
// CONCATENATED MODULE: ./src/components/RDrawer.vue?vue&type=template&id=3c1278b4

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RDrawer.vue?vue&type=script&lang=ts

/* harmony default export */ var RDrawervue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup: function (props, _a) {
    var emit = _a.emit;
    var model = Object(external_vue_["computed"])({
      get: function () {
        return props.modelValue;
      },
      set: function (value) {
        emit('update:modelValue', value);
      }
    });
    return {
      model: model
    };
  }
}));
// CONCATENATED MODULE: ./src/components/RDrawer.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/RDrawer.vue



RDrawervue_type_script_lang_ts.ssrRender = ssrRender

/* harmony default export */ var RDrawer = __webpack_exports__["default"] = (RDrawervue_type_script_lang_ts);

/***/ }),

/***/ "0787":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RList.vue?vue&type=template&id=80b0f9e6

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<ul${Object(server_renderer_["ssrRenderAttrs"])(_attrs)}>`);

  Object(server_renderer_["ssrRenderSlot"])(_ctx.$slots, "default", {}, null, _push, _parent);

  _push(`</ul>`);
}
// CONCATENATED MODULE: ./src/components/RList.vue?vue&type=template&id=80b0f9e6

// CONCATENATED MODULE: ./src/components/RList.vue

const script = {}
script.ssrRender = ssrRender

/* harmony default export */ var RList = __webpack_exports__["default"] = (script);

/***/ }),

/***/ "07a2":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/vue-fontawesome");

/***/ }),

/***/ "18c3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RComment.vue?vue&type=template&id=c01152f8


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_r_item = Object(external_vue_["resolveComponent"])("r-item");

  const _component_r_item_section = Object(external_vue_["resolveComponent"])("r-item-section");

  const _component_r_avatar = Object(external_vue_["resolveComponent"])("r-avatar");

  const _component_r_img = Object(external_vue_["resolveComponent"])("r-img");

  const _component_r_btn = Object(external_vue_["resolveComponent"])("r-btn");

  const _component_f_icon = Object(external_vue_["resolveComponent"])("f-icon");

  const _component_r_comment = Object(external_vue_["resolveComponent"])("r-comment", true);

  if (_ctx.comment) {
    _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_item, Object(external_vue_["mergeProps"])({
      class: "mb-2 pl-0"
    }, _attrs), {
      default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_item_section, {
            side: ""
          }, {
            default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_avatar, null, {
                  default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
                    if (_push) {
                      _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_img, {
                        src: _ctx.comment.avatarSrc
                      }, null, _parent, _scopeId));
                    } else {
                      return [Object(external_vue_["createVNode"])(_component_r_img, {
                        src: _ctx.comment.avatarSrc
                      }, null, 8, ["src"])];
                    }
                  }),
                  _: 1
                }, _parent, _scopeId));
              } else {
                return [Object(external_vue_["createVNode"])(_component_r_avatar, null, {
                  default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_r_img, {
                    src: _ctx.comment.avatarSrc
                  }, null, 8, ["src"])]),
                  _: 1
                })];
              }
            }),
            _: 1
          }, _parent, _scopeId));

          _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_item_section, {
            class: "px-4"
          }, {
            default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<span class="font-bold leading-none"${_scopeId}>${Object(server_renderer_["ssrInterpolate"])(_ctx.comment.username)}</span><p style="${Object(server_renderer_["ssrRenderStyle"])({
                  "white-space": "pre-line",
                  "word-break": "break-word"
                })}"${_scopeId}>${Object(server_renderer_["ssrInterpolate"])(_ctx.comment.content)}</p><div class="flex text-sm"${_scopeId}>`);

                _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_btn, {
                  flat: "",
                  color: "gray-400",
                  icon: "thumbs-up",
                  label: _ctx.comment.totalLikeCount
                }, null, _parent, _scopeId));

                _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_btn, {
                  flat: "",
                  color: "gray-400",
                  icon: "thumbs-down",
                  label: _ctx.comment.totalUnlikeCount
                }, null, _parent, _scopeId));

                if (_ctx.replies.length) {
                  _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_btn, {
                    flat: "",
                    color: "gray-400"
                  }, {
                    default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
                      if (_push) {
                        _push(`<span class="mr-2"${_scopeId}>${Object(server_renderer_["ssrInterpolate"])(_ctx.$t('showReplies', [_ctx.replies.length]))}</span>`);

                        _push(Object(server_renderer_["ssrRenderComponent"])(_component_f_icon, {
                          icon: "chevron-down",
                          class: ["transition-transform transform", _ctx.showReplies ? 'rotate-180' : '']
                        }, null, _parent, _scopeId));
                      } else {
                        return [Object(external_vue_["createVNode"])("span", {
                          class: "mr-2"
                        }, Object(external_vue_["toDisplayString"])(_ctx.$t('showReplies', [_ctx.replies.length])), 1), Object(external_vue_["createVNode"])(_component_f_icon, {
                          icon: "chevron-down",
                          class: ["transition-transform transform", _ctx.showReplies ? 'rotate-180' : '']
                        }, null, 8, ["class"])];
                      }
                    }),
                    _: 1
                  }, _parent, _scopeId));
                } else {
                  _push(`<!---->`);
                }

                _push(`</div>`);

                if (_ctx.replies.length) {
                  _push(`<div class="my-4" style="${Object(server_renderer_["ssrRenderStyle"])(_ctx.showReplies ? null : {
                    display: "none"
                  })}"${_scopeId}><!--[-->`);

                  Object(server_renderer_["ssrRenderList"])(_ctx.replies, comment => {
                    _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_comment, {
                      key: comment.id,
                      comment: comment
                    }, null, _parent, _scopeId));
                  });

                  _push(`<!--]--></div>`);
                } else {
                  _push(`<!---->`);
                }
              } else {
                return [Object(external_vue_["createVNode"])("span", {
                  class: "font-bold leading-none"
                }, Object(external_vue_["toDisplayString"])(_ctx.comment.username), 1), Object(external_vue_["createVNode"])("p", {
                  style: {
                    "white-space": "pre-line",
                    "word-break": "break-word"
                  }
                }, Object(external_vue_["toDisplayString"])(_ctx.comment.content), 1), Object(external_vue_["createVNode"])("div", {
                  class: "flex text-sm"
                }, [Object(external_vue_["createVNode"])(_component_r_btn, {
                  flat: "",
                  color: "gray-400",
                  icon: "thumbs-up",
                  label: _ctx.comment.totalLikeCount
                }, null, 8, ["label"]), Object(external_vue_["createVNode"])(_component_r_btn, {
                  flat: "",
                  color: "gray-400",
                  icon: "thumbs-down",
                  label: _ctx.comment.totalUnlikeCount
                }, null, 8, ["label"]), _ctx.replies.length ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(_component_r_btn, {
                  key: 0,
                  onClick: $event => _ctx.showReplies = !_ctx.showReplies,
                  flat: "",
                  color: "gray-400"
                }, {
                  default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])("span", {
                    class: "mr-2"
                  }, Object(external_vue_["toDisplayString"])(_ctx.$t('showReplies', [_ctx.replies.length])), 1), Object(external_vue_["createVNode"])(_component_f_icon, {
                    icon: "chevron-down",
                    class: ["transition-transform transform", _ctx.showReplies ? 'rotate-180' : '']
                  }, null, 8, ["class"])]),
                  _: 1
                }, 8, ["onClick"])) : Object(external_vue_["createCommentVNode"])("", true)]), _ctx.replies.length ? Object(external_vue_["withDirectives"])((Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", {
                  key: 0,
                  class: "my-4"
                }, [(Object(external_vue_["openBlock"])(true), Object(external_vue_["createBlock"])(external_vue_["Fragment"], null, Object(external_vue_["renderList"])(_ctx.replies, comment => {
                  return Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(_component_r_comment, {
                    key: comment.id,
                    comment: comment
                  }, null, 8, ["comment"]);
                }), 128))], 512)), [[external_vue_["vShow"], _ctx.showReplies]]) : Object(external_vue_["createCommentVNode"])("", true)];
              }
            }),
            _: 1
          }, _parent, _scopeId));
        } else {
          return [Object(external_vue_["createVNode"])(_component_r_item_section, {
            side: ""
          }, {
            default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_r_avatar, null, {
              default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_r_img, {
                src: _ctx.comment.avatarSrc
              }, null, 8, ["src"])]),
              _: 1
            })]),
            _: 1
          }), Object(external_vue_["createVNode"])(_component_r_item_section, {
            class: "px-4"
          }, {
            default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])("span", {
              class: "font-bold leading-none"
            }, Object(external_vue_["toDisplayString"])(_ctx.comment.username), 1), Object(external_vue_["createVNode"])("p", {
              style: {
                "white-space": "pre-line",
                "word-break": "break-word"
              }
            }, Object(external_vue_["toDisplayString"])(_ctx.comment.content), 1), Object(external_vue_["createVNode"])("div", {
              class: "flex text-sm"
            }, [Object(external_vue_["createVNode"])(_component_r_btn, {
              flat: "",
              color: "gray-400",
              icon: "thumbs-up",
              label: _ctx.comment.totalLikeCount
            }, null, 8, ["label"]), Object(external_vue_["createVNode"])(_component_r_btn, {
              flat: "",
              color: "gray-400",
              icon: "thumbs-down",
              label: _ctx.comment.totalUnlikeCount
            }, null, 8, ["label"]), _ctx.replies.length ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(_component_r_btn, {
              key: 0,
              onClick: $event => _ctx.showReplies = !_ctx.showReplies,
              flat: "",
              color: "gray-400"
            }, {
              default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])("span", {
                class: "mr-2"
              }, Object(external_vue_["toDisplayString"])(_ctx.$t('showReplies', [_ctx.replies.length])), 1), Object(external_vue_["createVNode"])(_component_f_icon, {
                icon: "chevron-down",
                class: ["transition-transform transform", _ctx.showReplies ? 'rotate-180' : '']
              }, null, 8, ["class"])]),
              _: 1
            }, 8, ["onClick"])) : Object(external_vue_["createCommentVNode"])("", true)]), _ctx.replies.length ? Object(external_vue_["withDirectives"])((Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", {
              key: 0,
              class: "my-4"
            }, [(Object(external_vue_["openBlock"])(true), Object(external_vue_["createBlock"])(external_vue_["Fragment"], null, Object(external_vue_["renderList"])(_ctx.replies, comment => {
              return Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(_component_r_comment, {
                key: comment.id,
                comment: comment
              }, null, 8, ["comment"]);
            }), 128))], 512)), [[external_vue_["vShow"], _ctx.showReplies]]) : Object(external_vue_["createCommentVNode"])("", true)]),
            _: 1
          })];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
}
// CONCATENATED MODULE: ./src/components/RComment.vue?vue&type=template&id=c01152f8

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RComment.vue?vue&type=script&lang=ts

/* harmony default export */ var RCommentvue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  props: {
    comment: {
      type: Object,
      required: false
    },
    replies: {
      type: Array,
      required: false,
      default: function () {
        return [];
      }
    }
  },
  setup: function () {
    var showReplies = Object(external_vue_["ref"])(false);
    return {
      showReplies: showReplies
    };
  }
}));
// CONCATENATED MODULE: ./src/components/RComment.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/RComment.vue



RCommentvue_type_script_lang_ts.ssrRender = ssrRender

/* harmony default export */ var RComment = __webpack_exports__["default"] = (RCommentvue_type_script_lang_ts);

/***/ }),

/***/ "2557":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "289e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "machine", function() { return machine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMachine", function() { return useMachine; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _machine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e02e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMachine", function() { return _machine__WEBPACK_IMPORTED_MODULE_1__["createMachine"]; });



var machineSymbol = Symbol('you-space-machine');
var machine = Object(_machine__WEBPACK_IMPORTED_MODULE_1__["createMachine"])('http://localhost:3333');
var machinePlugin = {
  install: function (app) {
    app.provide(machineSymbol, machine);
  }
};
function useMachine() {
  var machine = Object(vue__WEBPACK_IMPORTED_MODULE_0__["inject"])(machineSymbol);

  if (!machine) {
    throw new Error('machine symbol not found');
  }

  return machine;
}
/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
  var app = _a.app;
  app.use(machinePlugin);
});


/***/ }),

/***/ "368f":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "3c28":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RBtn.vue?vue&type=template&id=7dd6d035


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_f_icon = Object(external_vue_["resolveComponent"])("f-icon");

  _push(`<button${Object(server_renderer_["ssrRenderAttrs"])(Object(external_vue_["mergeProps"])({
    class: _ctx.classes
  }, _attrs))}>`);

  if (_ctx.icon) {
    _push(Object(server_renderer_["ssrRenderComponent"])(_component_f_icon, {
      icon: _ctx.icon,
      class: _ctx.label ? 'mr-2' : ''
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }

  if (_ctx.label) {
    _push(`<!--[-->${Object(server_renderer_["ssrInterpolate"])(_ctx.label)}<!--]-->`);
  } else {
    _push(`<!---->`);
  }

  Object(server_renderer_["ssrRenderSlot"])(_ctx.$slots, "default", {}, null, _push, _parent);

  _push(`</button>`);
}
// CONCATENATED MODULE: ./src/components/RBtn.vue?vue&type=template&id=7dd6d035

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RBtn.vue?vue&type=script&lang=ts

/* harmony default export */ var RBtnvue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  props: {
    label: {
      type: [String, Number],
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: 'gray-500'
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  setup: function (props) {
    var classes = Object(external_vue_["ref"])(['px-3 py-2 flex items-center']);

    if (!props.flat) {
      classes.value.push(props.color);
    } else {
      classes.value.push("text-" + props.color);
    }

    return {
      classes: classes
    };
  }
}));
// CONCATENATED MODULE: ./src/components/RBtn.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/RBtn.vue



RBtnvue_type_script_lang_ts.ssrRender = ssrRender

/* harmony default export */ var RBtn = __webpack_exports__["default"] = (RBtnvue_type_script_lang_ts);

/***/ }),

/***/ "450f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RContainer.vue?vue&type=template&id=0f5c3684


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${Object(server_renderer_["ssrRenderAttrs"])(Object(external_vue_["mergeProps"])({
    class: "min-h-full"
  }, _attrs))}>`);

  Object(server_renderer_["ssrRenderSlot"])(_ctx.$slots, "default", {}, null, _push, _parent);

  _push(`</div>`);
}
// CONCATENATED MODULE: ./src/components/RContainer.vue?vue&type=template&id=0f5c3684

// CONCATENATED MODULE: ./src/components/RContainer.vue

const script = {}
script.ssrRender = ssrRender

/* harmony default export */ var RContainer = __webpack_exports__["default"] = (script);

/***/ }),

/***/ "49e9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/pages/VideoSingle.vue?vue&type=template&id=5b8d9e26


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_r_page = Object(external_vue_["resolveComponent"])("r-page");

  const _component_r_inner_loading = Object(external_vue_["resolveComponent"])("r-inner-loading");

  const _component_r_video = Object(external_vue_["resolveComponent"])("r-video");

  const _component_r_list = Object(external_vue_["resolveComponent"])("r-list");

  const _component_r_comment = Object(external_vue_["resolveComponent"])("r-comment");

  const _component_r_item = Object(external_vue_["resolveComponent"])("r-item");

  const _component_r_item_section = Object(external_vue_["resolveComponent"])("r-item-section");

  const _component_router_link = Object(external_vue_["resolveComponent"])("router-link");

  const _component_r_img = Object(external_vue_["resolveComponent"])("r-img");

  _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_page, Object(external_vue_["mergeProps"])({
    class: "flex",
    padding: ""
  }, _attrs), {
    default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="w-8/12 px-4"${_scopeId}>`);

        _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_inner_loading, {
          modelValue: _ctx.loading,
          "onUpdate:modelValue": $event => _ctx.loading = $event
        }, null, _parent, _scopeId));

        if (!_ctx.loading) {
          _push(`<!--[-->`);

          _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_video, {
            src: _ctx.video.src,
            width: "w-full",
            style: {
              "height": "500px",
              "max-width": "1100px"
            }
          }, null, _parent, _scopeId));

          _push(`<h2 class="text-xl font-bold mt-4 mb-2"${_scopeId}>${Object(server_renderer_["ssrInterpolate"])(_ctx.video.title)}</h2><p style="${Object(server_renderer_["ssrRenderStyle"])({
            "white-space": "pre-line"
          })}"${_scopeId}>${Object(server_renderer_["ssrInterpolate"])(_ctx.video.description)}</p>`);

          _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_list, {
            class: "my-4"
          }, {
            default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<!--[-->`);

                Object(server_renderer_["ssrRenderList"])(_ctx.comments, comment => {
                  _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_comment, {
                    key: comment.id,
                    comment: comment,
                    replies: comment.replies
                  }, null, _parent, _scopeId));
                });

                _push(`<!--]-->`);
              } else {
                return [(Object(external_vue_["openBlock"])(true), Object(external_vue_["createBlock"])(external_vue_["Fragment"], null, Object(external_vue_["renderList"])(_ctx.comments, comment => {
                  return Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(_component_r_comment, {
                    key: comment.id,
                    comment: comment,
                    replies: comment.replies
                  }, null, 8, ["comment", "replies"]);
                }), 128))];
              }
            }),
            _: 1
          }, _parent, _scopeId));

          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }

        _push(`</div><div class="w-4/12 px-2 border-l border-gray-300"${_scopeId}>`);

        _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_inner_loading, {
          modelValue: _ctx.loading,
          "onUpdate:modelValue": $event => _ctx.loading = $event
        }, null, _parent, _scopeId));

        if (!_ctx.loading) {
          _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_list, null, {
            default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_item, {
                  class: "pt-0"
                }, {
                  default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
                    if (_push) {
                      _push(`<h3 class="text-2xl my-0 font-bold leading-none"${_scopeId}>${Object(server_renderer_["ssrInterpolate"])(_ctx.$t('related'))}</h3>`);
                    } else {
                      return [Object(external_vue_["createVNode"])("h3", {
                        class: "text-2xl my-0 font-bold leading-none"
                      }, Object(external_vue_["toDisplayString"])(_ctx.$t('related')), 1)];
                    }
                  }),
                  _: 1
                }, _parent, _scopeId));

                _push(`<!--[-->`);

                Object(server_renderer_["ssrRenderList"])(_ctx.sidebarVideos, sVideo => {
                  _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_item, {
                    key: sVideo.id
                  }, {
                    default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
                      if (_push) {
                        _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_item_section, null, {
                          default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
                            if (_push) {
                              _push(Object(server_renderer_["ssrRenderComponent"])(_component_router_link, {
                                to: _ctx.$common.getVideoTo(sVideo.id)
                              }, {
                                default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
                                  if (_push) {
                                    _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_img, {
                                      src: sVideo.thumbnailSrc,
                                      height: "h-32",
                                      width: "w-full",
                                      "max-width": "240px"
                                    }, null, _parent, _scopeId));
                                  } else {
                                    return [Object(external_vue_["createVNode"])(_component_r_img, {
                                      src: sVideo.thumbnailSrc,
                                      height: "h-32",
                                      width: "w-full",
                                      "max-width": "240px"
                                    }, null, 8, ["src"])];
                                  }
                                }),
                                _: 2
                              }, _parent, _scopeId));
                            } else {
                              return [Object(external_vue_["createVNode"])(_component_router_link, {
                                to: _ctx.$common.getVideoTo(sVideo.id)
                              }, {
                                default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_r_img, {
                                  src: sVideo.thumbnailSrc,
                                  height: "h-32",
                                  width: "w-full",
                                  "max-width": "240px"
                                }, null, 8, ["src"])]),
                                _: 2
                              }, 1032, ["to"])];
                            }
                          }),
                          _: 2
                        }, _parent, _scopeId));

                        _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_item_section, {
                          class: "px-2"
                        }, {
                          default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
                            if (_push) {
                              _push(Object(server_renderer_["ssrRenderComponent"])(_component_router_link, {
                                to: _ctx.$common.getVideoTo(sVideo.id),
                                "active-class": "text-primary"
                              }, {
                                default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
                                  if (_push) {
                                    _push(`<h3 class="text-base font-bold"${_scopeId}>${Object(server_renderer_["ssrInterpolate"])(sVideo.title)}</h3>`);
                                  } else {
                                    return [Object(external_vue_["createVNode"])("h3", {
                                      class: "text-base font-bold"
                                    }, Object(external_vue_["toDisplayString"])(sVideo.title), 1)];
                                  }
                                }),
                                _: 2
                              }, _parent, _scopeId));

                              _push(`<h5 class="text-sm"${_scopeId}>${Object(server_renderer_["ssrInterpolate"])(_ctx.$t('viewsLength', [_ctx.video.totalViews]))} <span class="my-2"${_scopeId}>-</span> ${Object(server_renderer_["ssrInterpolate"])(_ctx.$d(_ctx.video.publishedAt))}</h5>`);
                            } else {
                              return [Object(external_vue_["createVNode"])(_component_router_link, {
                                to: _ctx.$common.getVideoTo(sVideo.id),
                                "active-class": "text-primary"
                              }, {
                                default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])("h3", {
                                  class: "text-base font-bold"
                                }, Object(external_vue_["toDisplayString"])(sVideo.title), 1)]),
                                _: 2
                              }, 1032, ["to"]), Object(external_vue_["createVNode"])("h5", {
                                class: "text-sm"
                              }, [Object(external_vue_["createTextVNode"])(Object(external_vue_["toDisplayString"])(_ctx.$t('viewsLength', [_ctx.video.totalViews])) + " ", 1), Object(external_vue_["createVNode"])("span", {
                                class: "my-2"
                              }, "-"), Object(external_vue_["createTextVNode"])(" " + Object(external_vue_["toDisplayString"])(_ctx.$d(_ctx.video.publishedAt)), 1)])];
                            }
                          }),
                          _: 2
                        }, _parent, _scopeId));
                      } else {
                        return [Object(external_vue_["createVNode"])(_component_r_item_section, null, {
                          default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_router_link, {
                            to: _ctx.$common.getVideoTo(sVideo.id)
                          }, {
                            default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_r_img, {
                              src: sVideo.thumbnailSrc,
                              height: "h-32",
                              width: "w-full",
                              "max-width": "240px"
                            }, null, 8, ["src"])]),
                            _: 2
                          }, 1032, ["to"])]),
                          _: 2
                        }, 1024), Object(external_vue_["createVNode"])(_component_r_item_section, {
                          class: "px-2"
                        }, {
                          default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_router_link, {
                            to: _ctx.$common.getVideoTo(sVideo.id),
                            "active-class": "text-primary"
                          }, {
                            default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])("h3", {
                              class: "text-base font-bold"
                            }, Object(external_vue_["toDisplayString"])(sVideo.title), 1)]),
                            _: 2
                          }, 1032, ["to"]), Object(external_vue_["createVNode"])("h5", {
                            class: "text-sm"
                          }, [Object(external_vue_["createTextVNode"])(Object(external_vue_["toDisplayString"])(_ctx.$t('viewsLength', [_ctx.video.totalViews])) + " ", 1), Object(external_vue_["createVNode"])("span", {
                            class: "my-2"
                          }, "-"), Object(external_vue_["createTextVNode"])(" " + Object(external_vue_["toDisplayString"])(_ctx.$d(_ctx.video.publishedAt)), 1)])]),
                          _: 2
                        }, 1024)];
                      }
                    }),
                    _: 2
                  }, _parent, _scopeId));
                });

                _push(`<!--]-->`);
              } else {
                return [Object(external_vue_["createVNode"])(_component_r_item, {
                  class: "pt-0"
                }, {
                  default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])("h3", {
                    class: "text-2xl my-0 font-bold leading-none"
                  }, Object(external_vue_["toDisplayString"])(_ctx.$t('related')), 1)]),
                  _: 1
                }), (Object(external_vue_["openBlock"])(true), Object(external_vue_["createBlock"])(external_vue_["Fragment"], null, Object(external_vue_["renderList"])(_ctx.sidebarVideos, sVideo => {
                  return Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(_component_r_item, {
                    key: sVideo.id
                  }, {
                    default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_r_item_section, null, {
                      default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_router_link, {
                        to: _ctx.$common.getVideoTo(sVideo.id)
                      }, {
                        default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_r_img, {
                          src: sVideo.thumbnailSrc,
                          height: "h-32",
                          width: "w-full",
                          "max-width": "240px"
                        }, null, 8, ["src"])]),
                        _: 2
                      }, 1032, ["to"])]),
                      _: 2
                    }, 1024), Object(external_vue_["createVNode"])(_component_r_item_section, {
                      class: "px-2"
                    }, {
                      default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_router_link, {
                        to: _ctx.$common.getVideoTo(sVideo.id),
                        "active-class": "text-primary"
                      }, {
                        default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])("h3", {
                          class: "text-base font-bold"
                        }, Object(external_vue_["toDisplayString"])(sVideo.title), 1)]),
                        _: 2
                      }, 1032, ["to"]), Object(external_vue_["createVNode"])("h5", {
                        class: "text-sm"
                      }, [Object(external_vue_["createTextVNode"])(Object(external_vue_["toDisplayString"])(_ctx.$t('viewsLength', [_ctx.video.totalViews])) + " ", 1), Object(external_vue_["createVNode"])("span", {
                        class: "my-2"
                      }, "-"), Object(external_vue_["createTextVNode"])(" " + Object(external_vue_["toDisplayString"])(_ctx.$d(_ctx.video.publishedAt)), 1)])]),
                      _: 2
                    }, 1024)]),
                    _: 2
                  }, 1024);
                }), 128))];
              }
            }),
            _: 1
          }, _parent, _scopeId));
        } else {
          _push(`<!---->`);
        }

        _push(`</div>`);
      } else {
        return [Object(external_vue_["createVNode"])("div", {
          class: "w-8/12 px-4"
        }, [Object(external_vue_["createVNode"])(_component_r_inner_loading, {
          modelValue: _ctx.loading,
          "onUpdate:modelValue": $event => _ctx.loading = $event
        }, null, 8, ["modelValue", "onUpdate:modelValue"]), !_ctx.loading ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(external_vue_["Fragment"], {
          key: 0
        }, [Object(external_vue_["createVNode"])(_component_r_video, {
          src: _ctx.video.src,
          width: "w-full",
          style: {
            "height": "500px",
            "max-width": "1100px"
          }
        }, null, 8, ["src"]), Object(external_vue_["createVNode"])("h2", {
          class: "text-xl font-bold mt-4 mb-2"
        }, Object(external_vue_["toDisplayString"])(_ctx.video.title), 1), Object(external_vue_["createVNode"])("p", {
          style: {
            "white-space": "pre-line"
          }
        }, Object(external_vue_["toDisplayString"])(_ctx.video.description), 1), Object(external_vue_["createVNode"])(_component_r_list, {
          class: "my-4"
        }, {
          default: Object(external_vue_["withCtx"])(() => [(Object(external_vue_["openBlock"])(true), Object(external_vue_["createBlock"])(external_vue_["Fragment"], null, Object(external_vue_["renderList"])(_ctx.comments, comment => {
            return Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(_component_r_comment, {
              key: comment.id,
              comment: comment,
              replies: comment.replies
            }, null, 8, ["comment", "replies"]);
          }), 128))]),
          _: 1
        })], 64)) : Object(external_vue_["createCommentVNode"])("", true)]), Object(external_vue_["createVNode"])("div", {
          class: "w-4/12 px-2 border-l border-gray-300"
        }, [Object(external_vue_["createVNode"])(_component_r_inner_loading, {
          modelValue: _ctx.loading,
          "onUpdate:modelValue": $event => _ctx.loading = $event
        }, null, 8, ["modelValue", "onUpdate:modelValue"]), !_ctx.loading ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(_component_r_list, {
          key: 0
        }, {
          default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_r_item, {
            class: "pt-0"
          }, {
            default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])("h3", {
              class: "text-2xl my-0 font-bold leading-none"
            }, Object(external_vue_["toDisplayString"])(_ctx.$t('related')), 1)]),
            _: 1
          }), (Object(external_vue_["openBlock"])(true), Object(external_vue_["createBlock"])(external_vue_["Fragment"], null, Object(external_vue_["renderList"])(_ctx.sidebarVideos, sVideo => {
            return Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(_component_r_item, {
              key: sVideo.id
            }, {
              default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_r_item_section, null, {
                default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_router_link, {
                  to: _ctx.$common.getVideoTo(sVideo.id)
                }, {
                  default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_r_img, {
                    src: sVideo.thumbnailSrc,
                    height: "h-32",
                    width: "w-full",
                    "max-width": "240px"
                  }, null, 8, ["src"])]),
                  _: 2
                }, 1032, ["to"])]),
                _: 2
              }, 1024), Object(external_vue_["createVNode"])(_component_r_item_section, {
                class: "px-2"
              }, {
                default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_router_link, {
                  to: _ctx.$common.getVideoTo(sVideo.id),
                  "active-class": "text-primary"
                }, {
                  default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])("h3", {
                    class: "text-base font-bold"
                  }, Object(external_vue_["toDisplayString"])(sVideo.title), 1)]),
                  _: 2
                }, 1032, ["to"]), Object(external_vue_["createVNode"])("h5", {
                  class: "text-sm"
                }, [Object(external_vue_["createTextVNode"])(Object(external_vue_["toDisplayString"])(_ctx.$t('viewsLength', [_ctx.video.totalViews])) + " ", 1), Object(external_vue_["createVNode"])("span", {
                  class: "my-2"
                }, "-"), Object(external_vue_["createTextVNode"])(" " + Object(external_vue_["toDisplayString"])(_ctx.$d(_ctx.video.publishedAt)), 1)])]),
                _: 2
              }, 1024)]),
              _: 2
            }, 1024);
          }), 128))]),
          _: 1
        })) : Object(external_vue_["createCommentVNode"])("", true)])];
      }
    }),
    _: 1
  }, _parent));
}
// CONCATENATED MODULE: ./src/pages/VideoSingle.vue?vue&type=template&id=5b8d9e26

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__("d7bc");

// EXTERNAL MODULE: ./src/plugins/you-space/index.ts
var you_space = __webpack_require__("289e");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist??ref--0-0!./src/pages/VideoSingle.vue?vue&type=script&lang=ts



/* harmony default export */ var VideoSinglevue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  props: {
    videoId: {
      type: String,
      required: true
    }
  },
  setup: function (props) {
    var machine = Object(you_space["useMachine"])();
    var video = Object(external_vue_["ref"])(null);
    var comments = Object(external_vue_["ref"])([]);
    var sidebarVideos = Object(external_vue_["ref"])([]);
    var loading = Object(external_vue_["ref"])(false);

    function setVideo() {
      return Object(external_tslib_["__awaiter"])(this, void 0, void 0, function () {
        var _a, _b;

        var _this = this;

        return Object(external_tslib_["__generator"])(this, function (_c) {
          switch (_c.label) {
            case 0:
              loading.value = true;
              _a = video;
              return [4
              /*yield*/
              , machine.findVideo(props.videoId)];

            case 1:
              _a.value = _c.sent();
              _b = comments;
              return [4
              /*yield*/
              , machine.fetchVideoComments(props.videoId)];

            case 2:
              _b.value = _c.sent();
              setTimeout(function () {
                return Object(external_tslib_["__awaiter"])(_this, void 0, void 0, function () {
                  return Object(external_tslib_["__generator"])(this, function (_a) {
                    loading.value = false;
                    return [2
                    /*return*/
                    ];
                  });
                });
              }, 800);
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    function setSidebarVideos() {
      return Object(external_tslib_["__awaiter"])(this, void 0, void 0, function () {
        var data;
        return Object(external_tslib_["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , machine.fetchVideos()];

            case 1:
              data = _a.sent().data;
              sidebarVideos.value = data;
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    void setSidebarVideos();
    Object(external_vue_["watch"])(function () {
      return props.videoId;
    }, setVideo, {
      immediate: true
    });
    return {
      video: video,
      sidebarVideos: sidebarVideos,
      comments: comments,
      loading: loading
    };
  }
}));
// CONCATENATED MODULE: ./src/pages/VideoSingle.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/pages/VideoSingle.vue



VideoSinglevue_type_script_lang_ts.ssrRender = ssrRender

/* harmony default export */ var VideoSingle = __webpack_exports__["default"] = (VideoSinglevue_type_script_lang_ts);

/***/ }),

/***/ "4a13":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./common-funcitons.ts": "01f8",
	"./font-awesome.ts": "89c7",
	"./global-components.ts": "aec5",
	"./i18n/en-US/index.ts": "a1c9",
	"./i18n/index.ts": "d4b0",
	"./you-space/index.ts": "289e",
	"./you-space/machine.ts": "e02e"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "4a13";

/***/ }),

/***/ "5880":
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),

/***/ "5cb4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RInfiniteScroll.vue?vue&type=template&id=31a161aa


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${Object(server_renderer_["ssrRenderAttrs"])(Object(external_vue_["mergeProps"])({
    class: "r-infinite-scroll"
  }, _attrs))}>`);

  Object(server_renderer_["ssrRenderSlot"])(_ctx.$slots, "default", {}, null, _push, _parent);

  _push(`</div>`);
}
// CONCATENATED MODULE: ./src/components/RInfiniteScroll.vue?vue&type=template&id=31a161aa

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RInfiniteScroll.vue?vue&type=script&lang=ts

/* harmony default export */ var RInfiniteScrollvue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  emits: ['load'],
  setup: function (_, _a) {
    var emit = _a.emit;
    emit('load');
    return {};
  }
}));
// CONCATENATED MODULE: ./src/components/RInfiniteScroll.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/RInfiniteScroll.vue



RInfiniteScrollvue_type_script_lang_ts.ssrRender = ssrRender

/* harmony default export */ var RInfiniteScroll = __webpack_exports__["default"] = (RInfiniteScrollvue_type_script_lang_ts);

/***/ }),

/***/ "60bb":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "6389":
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),

/***/ "6c39":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "70d2":
/***/ (function(module, exports) {

module.exports = require("@vue/server-renderer");

/***/ }),

/***/ "7794":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RVideo.vue?vue&type=template&id=d35c97c6


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<iframe${Object(server_renderer_["ssrRenderAttrs"])(Object(external_vue_["mergeProps"])({
    src: _ctx.src,
    class: [_ctx.width, _ctx.height],
    frameborder: "0"
  }, _attrs))}></iframe>`);
}
// CONCATENATED MODULE: ./src/components/RVideo.vue?vue&type=template&id=d35c97c6

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RVideo.vue?vue&type=script&lang=ts

/* harmony default export */ var RVideovue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  props: {
    src: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: 'h-64'
    },
    width: {
      type: String,
      required: true,
      default: 'w-64'
    }
  }
}));
// CONCATENATED MODULE: ./src/components/RVideo.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/RVideo.vue



RVideovue_type_script_lang_ts.ssrRender = ssrRender

/* harmony default export */ var RVideo = __webpack_exports__["default"] = (RVideovue_type_script_lang_ts);

/***/ }),

/***/ "8012":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vue_loader_v16_dist_index_js_ref_0_0_RInnerLoading_vue_vue_type_style_index_0_id_0ba011d4_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6c39");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vue_loader_v16_dist_index_js_ref_0_0_RInnerLoading_vue_vue_type_style_index_0_id_0ba011d4_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vue_loader_v16_dist_index_js_ref_0_0_RInnerLoading_vue_vue_type_style_index_0_id_0ba011d4_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "85b3":
/***/ (function(module, exports) {

module.exports = require("vue-i18n");

/***/ }),

/***/ "87a9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RAvatar.vue?vue&type=template&id=082ab0a8


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${Object(server_renderer_["ssrRenderAttrs"])(Object(external_vue_["mergeProps"])({
    class: "r-avatar"
  }, _attrs))}>`);

  Object(server_renderer_["ssrRenderSlot"])(_ctx.$slots, "default", {}, null, _push, _parent);

  _push(`</div>`);
}
// CONCATENATED MODULE: ./src/components/RAvatar.vue?vue&type=template&id=082ab0a8

// EXTERNAL MODULE: ./src/components/RAvatar.vue?vue&type=style&index=0&id=082ab0a8&lang=scss
var RAvatarvue_type_style_index_0_id_082ab0a8_lang_scss = __webpack_require__("e370");

// CONCATENATED MODULE: ./src/components/RAvatar.vue

const script = {}


script.ssrRender = ssrRender

/* harmony default export */ var RAvatar = __webpack_exports__["default"] = (script);

/***/ }),

/***/ "89c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b0b2");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("368f");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2557");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("b3b7");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("07a2");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
  var app = _a.app;
  _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["far"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["fab"]);
  app.component('FIcon', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"]);
});

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "96ba":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./RAvatar.vue": "87a9",
	"./RBtn.vue": "3c28",
	"./RComment.vue": "18c3",
	"./RContainer.vue": "450f",
	"./RDrawer.vue": "068d",
	"./RHeader.vue": "dd64",
	"./RImg.vue": "9960",
	"./RInfiniteScroll.vue": "5cb4",
	"./RInnerLoading.vue": "b974",
	"./RItem.vue": "c75f",
	"./RItemSection.vue": "aea3",
	"./RLayout.vue": "e420",
	"./RList.vue": "0787",
	"./RPage.vue": "bd41",
	"./RVideo.vue": "7794"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "96ba";

/***/ }),

/***/ "9960":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RImg.vue?vue&type=template&id=3551678f


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_f_icon = Object(external_vue_["resolveComponent"])("f-icon");

  _push(`<div${Object(server_renderer_["ssrRenderAttrs"])(Object(external_vue_["mergeProps"])({
    style: `width: ${_ctx.width}; height: ${_ctx.height}`,
    class: "relative-position"
  }, _attrs))}>`);

  if (_ctx.src) {
    _push(`<img${Object(server_renderer_["ssrRenderAttr"])("src", _ctx.src)} class="${Object(server_renderer_["ssrRenderClass"])(`${_ctx.width} ${_ctx.height} object-cover`)}"${Object(server_renderer_["ssrRenderAttr"])("img-style", {
      maxWidth: _ctx.maxWidth
    })}>`);
  } else {
    _push(`<div class="full-width text-center bg-grey-4 flex items-center justify-center" style="${Object(server_renderer_["ssrRenderStyle"])(`width: ${_ctx.width}; height: ${_ctx.height}`)}">`);

    _push(Object(server_renderer_["ssrRenderComponent"])(_component_f_icon, {
      icon: "image"
    }, null, _parent));

    _push(`</div>`);
  }

  if (_ctx.caption) {
    _push(`<div class="absolute-bottom text-caption flex items-center justify-center text-white" style="${Object(server_renderer_["ssrRenderStyle"])({
      "background-color": "rgba(0, 0, 0, 0.6)",
      "height": "30%"
    })}">${Object(server_renderer_["ssrInterpolate"])(_ctx.caption)}</div>`);
  } else {
    _push(`<!---->`);
  }

  _push(`</div>`);
}
// CONCATENATED MODULE: ./src/components/RImg.vue?vue&type=template&id=3551678f

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RImg.vue?vue&type=script&lang=ts

/* harmony default export */ var RImgvue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  props: {
    width: {
      type: String,
      required: false,
      default: 'w-10'
    },
    height: {
      type: String,
      required: false,
      default: 'h-10'
    },
    src: {
      type: String,
      default: null
    },
    caption: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    }
  }
}));
// CONCATENATED MODULE: ./src/components/RImg.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/RImg.vue



RImgvue_type_script_lang_ts.ssrRender = ssrRender

/* harmony default export */ var RImg = __webpack_exports__["default"] = (RImgvue_type_script_lang_ts);

/***/ }),

/***/ "a1c9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var messages = {
  viewsLength: 'Views {0}',
  related: 'Related',
  showReplies: 'Show replies {0}',
  home: 'Home',
  latestVideos: 'Latest videos',
  recommendations: 'Recommendations',
  favorites: 'Favorites',
  history: 'History'
};
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "abba":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aea3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RItemSection.vue?vue&type=template&id=0db39c09


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${Object(server_renderer_["ssrRenderAttrs"])(Object(external_vue_["mergeProps"])({
    class: _ctx.classes
  }, _attrs))}>`);

  Object(server_renderer_["ssrRenderSlot"])(_ctx.$slots, "default", {}, null, _push, _parent);

  _push(`</div>`);
}
// CONCATENATED MODULE: ./src/components/RItemSection.vue?vue&type=template&id=0db39c09

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RItemSection.vue?vue&type=script&lang=ts

/* harmony default export */ var RItemSectionvue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  props: {
    side: {
      type: Boolean,
      default: false
    }
  },
  setup: function (props) {
    var classes = [];

    if (props.side) {
      classes.push('flex-grow-0');
    } else {
      classes.push('flex-1');
    }

    return {
      classes: classes
    };
  }
}));
// CONCATENATED MODULE: ./src/components/RItemSection.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/RItemSection.vue



RItemSectionvue_type_script_lang_ts.ssrRender = ssrRender

/* harmony default export */ var RItemSection = __webpack_exports__["default"] = (RItemSectionvue_type_script_lang_ts);

/***/ }),

/***/ "aec5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("60bb");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


var getComponentName = function (filename) {
  var name = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["upperFirst"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["camelCase"])(filename.replace(/^\.\//, '').replace(/\.\w+$/, '').replace('index', '')));
  var duplicates = name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(' ');

  if (duplicates.length > 1) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"])(duplicates).join('');
  }

  return duplicates.join('');
};

/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
  var app = _a.app;

  var context = __webpack_require__("96ba");

  var fileNames = context.keys();
  var componentsLoaded = [];
  fileNames.forEach(function (filename) {
    var component = context(filename);
    var componentName = getComponentName(filename);

    if (componentsLoaded.includes(componentName)) {
      return;
    }

    componentsLoaded.push(componentName);
    app.component(componentName, component.default || component);
  });
});

/***/ }),

/***/ "b0b2":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "b20f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b3b7":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "b974":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RInnerLoading.vue?vue&type=template&id=0ba011d4


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${Object(server_renderer_["ssrRenderAttrs"])(Object(external_vue_["mergeProps"])({
    style: _ctx.model ? null : {
      display: "none"
    },
    class: "w-full h-full relative"
  }, _attrs))}><div class="absolute inset-0 flex justify-center items-center text-white"><div class="r-spinner animate-spin"></div></div></div>`);
}
// CONCATENATED MODULE: ./src/components/RInnerLoading.vue?vue&type=template&id=0ba011d4

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RInnerLoading.vue?vue&type=script&lang=ts

/* harmony default export */ var RInnerLoadingvue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup: function (props, _a) {
    var emit = _a.emit;
    var model = Object(external_vue_["computed"])({
      get: function () {
        return props.modelValue;
      },
      set: function (value) {
        return emit('update:modelValue', value);
      }
    });
    return {
      model: model
    };
  }
}));
// CONCATENATED MODULE: ./src/components/RInnerLoading.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./src/components/RInnerLoading.vue?vue&type=style&index=0&id=0ba011d4&lang=scss
var RInnerLoadingvue_type_style_index_0_id_0ba011d4_lang_scss = __webpack_require__("8012");

// CONCATENATED MODULE: ./src/components/RInnerLoading.vue





RInnerLoadingvue_type_script_lang_ts.ssrRender = ssrRender

/* harmony default export */ var RInnerLoading = __webpack_exports__["default"] = (RInnerLoadingvue_type_script_lang_ts);

/***/ }),

/***/ "bc13":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/pages/Home.vue?vue&type=template&id=13c411d2


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_r_page = Object(external_vue_["resolveComponent"])("r-page");

  const _component_r_infinite_scroll = Object(external_vue_["resolveComponent"])("r-infinite-scroll");

  const _component_router_link = Object(external_vue_["resolveComponent"])("router-link");

  const _component_r_img = Object(external_vue_["resolveComponent"])("r-img");

  const _component_f_icon = Object(external_vue_["resolveComponent"])("f-icon");

  _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_page, Object(external_vue_["mergeProps"])({
    padding: ""
  }, _attrs), {
    default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_infinite_scroll, {
          disable: _ctx.disableInfiniteScroll,
          offset: 250
        }, {
          loading: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="row justify-center q-my-md"${_scopeId}>`);

              _push(Object(server_renderer_["ssrRenderComponent"])(_component_f_icon, {
                icon: "spinner"
              }, null, _parent, _scopeId));

              _push(`</div>`);
            } else {
              return [Object(external_vue_["createVNode"])("div", {
                class: "row justify-center q-my-md"
              }, [Object(external_vue_["createVNode"])(_component_f_icon, {
                icon: "spinner"
              })])];
            }
          }),
          default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="grid grid-cols-5 gap-5"${_scopeId}><!--[-->`);

              Object(server_renderer_["ssrRenderList"])(_ctx.videos, video => {
                _push(`<div${_scopeId}>`);

                _push(Object(server_renderer_["ssrRenderComponent"])(_component_router_link, {
                  to: _ctx.$common.getVideoTo(video.id)
                }, {
                  default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
                    if (_push) {
                      _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_img, {
                        src: video.thumbnailSrc,
                        width: "w-full",
                        height: "h-48"
                      }, null, _parent, _scopeId));
                    } else {
                      return [Object(external_vue_["createVNode"])(_component_r_img, {
                        src: video.thumbnailSrc,
                        width: "w-full",
                        height: "h-48"
                      }, null, 8, ["src"])];
                    }
                  }),
                  _: 2
                }, _parent, _scopeId));

                _push(Object(server_renderer_["ssrRenderComponent"])(_component_router_link, {
                  to: _ctx.$common.getVideoTo(video.id)
                }, {
                  default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
                    if (_push) {
                      _push(`<h2 class="text-base my-2 font-bold text-gray-500 hover:text-blue-500"${_scopeId}>${Object(server_renderer_["ssrInterpolate"])(video.title)}</h2>`);
                    } else {
                      return [Object(external_vue_["createVNode"])("h2", {
                        class: "text-base my-2 font-bold text-gray-500 hover:text-blue-500"
                      }, Object(external_vue_["toDisplayString"])(video.title), 1)];
                    }
                  }),
                  _: 2
                }, _parent, _scopeId));

                _push(`<div class="flex"${_scopeId}><h3 class="text-sm"${_scopeId}>${Object(server_renderer_["ssrInterpolate"])(_ctx.$t('viewsLength', [video.totalViews]))} <span class="mx-1"${_scopeId}>-</span> ${Object(server_renderer_["ssrInterpolate"])(_ctx.$d(video.publishedAt))}</h3></div></div>`);
              });

              _push(`<!--]--></div>`);
            } else {
              return [Object(external_vue_["createVNode"])("div", {
                class: "grid grid-cols-5 gap-5"
              }, [(Object(external_vue_["openBlock"])(true), Object(external_vue_["createBlock"])(external_vue_["Fragment"], null, Object(external_vue_["renderList"])(_ctx.videos, video => {
                return Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", {
                  key: video.id
                }, [Object(external_vue_["createVNode"])(_component_router_link, {
                  to: _ctx.$common.getVideoTo(video.id)
                }, {
                  default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_r_img, {
                    src: video.thumbnailSrc,
                    width: "w-full",
                    height: "h-48"
                  }, null, 8, ["src"])]),
                  _: 2
                }, 1032, ["to"]), Object(external_vue_["createVNode"])(_component_router_link, {
                  to: _ctx.$common.getVideoTo(video.id)
                }, {
                  default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])("h2", {
                    class: "text-base my-2 font-bold text-gray-500 hover:text-blue-500"
                  }, Object(external_vue_["toDisplayString"])(video.title), 1)]),
                  _: 2
                }, 1032, ["to"]), Object(external_vue_["createVNode"])("div", {
                  class: "flex"
                }, [Object(external_vue_["createVNode"])("h3", {
                  class: "text-sm"
                }, [Object(external_vue_["createTextVNode"])(Object(external_vue_["toDisplayString"])(_ctx.$t('viewsLength', [video.totalViews])) + " ", 1), Object(external_vue_["createVNode"])("span", {
                  class: "mx-1"
                }, "-"), Object(external_vue_["createTextVNode"])(" " + Object(external_vue_["toDisplayString"])(_ctx.$d(video.publishedAt)), 1)])])]);
              }), 128))])];
            }
          }),
          _: 1
        }, _parent, _scopeId));
      } else {
        return [Object(external_vue_["createVNode"])(_component_r_infinite_scroll, {
          disable: _ctx.disableInfiniteScroll,
          offset: 250
        }, {
          loading: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])("div", {
            class: "row justify-center q-my-md"
          }, [Object(external_vue_["createVNode"])(_component_f_icon, {
            icon: "spinner"
          })])]),
          default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])("div", {
            class: "grid grid-cols-5 gap-5"
          }, [(Object(external_vue_["openBlock"])(true), Object(external_vue_["createBlock"])(external_vue_["Fragment"], null, Object(external_vue_["renderList"])(_ctx.videos, video => {
            return Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", {
              key: video.id
            }, [Object(external_vue_["createVNode"])(_component_router_link, {
              to: _ctx.$common.getVideoTo(video.id)
            }, {
              default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_r_img, {
                src: video.thumbnailSrc,
                width: "w-full",
                height: "h-48"
              }, null, 8, ["src"])]),
              _: 2
            }, 1032, ["to"]), Object(external_vue_["createVNode"])(_component_router_link, {
              to: _ctx.$common.getVideoTo(video.id)
            }, {
              default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])("h2", {
                class: "text-base my-2 font-bold text-gray-500 hover:text-blue-500"
              }, Object(external_vue_["toDisplayString"])(video.title), 1)]),
              _: 2
            }, 1032, ["to"]), Object(external_vue_["createVNode"])("div", {
              class: "flex"
            }, [Object(external_vue_["createVNode"])("h3", {
              class: "text-sm"
            }, [Object(external_vue_["createTextVNode"])(Object(external_vue_["toDisplayString"])(_ctx.$t('viewsLength', [video.totalViews])) + " ", 1), Object(external_vue_["createVNode"])("span", {
              class: "mx-1"
            }, "-"), Object(external_vue_["createTextVNode"])(" " + Object(external_vue_["toDisplayString"])(_ctx.$d(video.publishedAt)), 1)])])]);
          }), 128))])]),
          _: 1
        }, 8, ["disable"])];
      }
    }),
    _: 1
  }, _parent));
}
// CONCATENATED MODULE: ./src/pages/Home.vue?vue&type=template&id=13c411d2

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__("d7bc");

// EXTERNAL MODULE: ./src/plugins/you-space/index.ts
var you_space = __webpack_require__("289e");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist??ref--0-0!./src/pages/Home.vue?vue&type=script&lang=ts



var page = Object(external_vue_["ref"])(1);
var lastPage = Object(external_vue_["ref"])(10);

function addVideosPage() {
  return Object(external_tslib_["__awaiter"])(this, void 0, void 0, function () {
    var _a, data, meta;

    return Object(external_tslib_["__generator"])(this, function (_b) {
      switch (_b.label) {
        case 0:
          if (page.value === lastPage.value) {
            disableInfiniteScroll.value = true;
            return [2
            /*return*/
            ];
          }

          return [4
          /*yield*/
          , you_space["machine"].fetchVideos({
            page: page.value
          })];

        case 1:
          _a = _b.sent(), data = _a.data, meta = _a.meta;
          videos.value = videos.value.concat(data);
          lastPage.value = meta.last_page;
          page.value++;
          return [2
          /*return*/
          ];
      }
    });
  });
}

var videos = Object(external_vue_["ref"])([]);
var disableInfiniteScroll = Object(external_vue_["ref"])(false);
/* harmony default export */ var Homevue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  name: 'Home',
  serverPrefetch: function () {
    return Object(external_tslib_["__awaiter"])(this, void 0, void 0, function () {
      return Object(external_tslib_["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , addVideosPage()];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  },
  setup: function () {
    Object(external_vue_["onMounted"])(function () {
      if (videos.value.length === 0) {
        addVideosPage();
      }
    });
    return {
      videos: videos,
      disableInfiniteScroll: disableInfiniteScroll
    };
  }
}));
// CONCATENATED MODULE: ./src/pages/Home.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/pages/Home.vue



Homevue_type_script_lang_ts.ssrRender = ssrRender

/* harmony default export */ var Home = __webpack_exports__["default"] = (Homevue_type_script_lang_ts);

/***/ }),

/***/ "bd41":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RPage.vue?vue&type=template&id=70dfe10c


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${Object(server_renderer_["ssrRenderAttrs"])(Object(external_vue_["mergeProps"])({
    class: _ctx.classes
  }, _attrs))}>`);

  Object(server_renderer_["ssrRenderSlot"])(_ctx.$slots, "default", {}, null, _push, _parent);

  _push(`</div>`);
}
// CONCATENATED MODULE: ./src/components/RPage.vue?vue&type=template&id=70dfe10c

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RPage.vue?vue&type=script&lang=ts

/* harmony default export */ var RPagevue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  props: {
    padding: {
      type: Boolean,
      default: false
    }
  },
  setup: function (props) {
    var classes = ['r-page w-full h-full overflow-y-auto'];

    if (props.padding) {
      classes.push('p-6');
    }

    return {
      classes: classes
    };
  }
}));
// CONCATENATED MODULE: ./src/components/RPage.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/RPage.vue



RPagevue_type_script_lang_ts.ssrRender = ssrRender

/* harmony default export */ var RPage = __webpack_exports__["default"] = (RPagevue_type_script_lang_ts);

/***/ }),

/***/ "c75f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RItem.vue?vue&type=template&id=1235ca64


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = Object(external_vue_["resolveComponent"])("router-link");

  if (_ctx.to) {
    _push(Object(server_renderer_["ssrRenderComponent"])(_component_router_link, Object(external_vue_["mergeProps"])({
      class: _ctx.classes,
      "exact-active-class": "bg-gray-300",
      to: _ctx.to
    }, _attrs), {
      default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
        if (_push) {
          Object(server_renderer_["ssrRenderSlot"])(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
        } else {
          return [Object(external_vue_["renderSlot"])(_ctx.$slots, "default")];
        }
      }),
      _: 3
    }, _parent));
  } else {
    _push(`<li${Object(server_renderer_["ssrRenderAttrs"])(Object(external_vue_["mergeProps"])({
      class: _ctx.classes
    }, _attrs))}>`);

    Object(server_renderer_["ssrRenderSlot"])(_ctx.$slots, "default", {}, null, _push, _parent);

    _push(`</li>`);
  }
}
// CONCATENATED MODULE: ./src/components/RItem.vue?vue&type=template&id=1235ca64

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RItem.vue?vue&type=script&lang=ts

/* harmony default export */ var RItemvue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  props: {
    to: {
      type: Object,
      default: null
    },
    clickable: {
      type: Boolean,
      default: false
    }
  },
  setup: function (props) {
    var classes = ['flex px-4  py-3'];
    var clickableClasses = 'transition-all hover:bg-gray-200 cursor-pointer';

    if (props.to || props.clickable) {
      classes.push(clickableClasses);
    }

    return {
      classes: classes
    };
  }
}));
// CONCATENATED MODULE: ./src/components/RItem.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/RItem.vue



RItemvue_type_script_lang_ts.ssrRender = ssrRender

/* harmony default export */ var RItem = __webpack_exports__["default"] = (RItemvue_type_script_lang_ts);

/***/ }),

/***/ "cebe":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "d4b0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("85b3");
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _en_US__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a1c9");


var i18n = Object(vue_i18n__WEBPACK_IMPORTED_MODULE_0__["createI18n"])({
  messages: {
    'en-US': _en_US__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
  var app = _a.app;
  app.use(i18n);
});

/***/ }),

/***/ "d7bc":
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "dd64":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RHeader.vue?vue&type=template&id=289e98b9


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${Object(server_renderer_["ssrRenderAttrs"])(Object(external_vue_["mergeProps"])({
    class: "w-full self-start border-b p-2"
  }, _attrs))}>`);

  Object(server_renderer_["ssrRenderSlot"])(_ctx.$slots, "default", {}, null, _push, _parent);

  _push(`</div>`);
}
// CONCATENATED MODULE: ./src/components/RHeader.vue?vue&type=template&id=289e98b9

// CONCATENATED MODULE: ./src/components/RHeader.vue

const script = {}
script.ssrRender = ssrRender

/* harmony default export */ var RHeader = __webpack_exports__["default"] = (script);

/***/ }),

/***/ "e02e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMachine", function() { return createMachine; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d7bc");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cebe");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var api = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create();

function fetchVideos(filters) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, Promise, function () {
    var data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , api.get('/api/v1/videos', {
            params: filters
          })];

        case 1:
          data = _a.sent().data;
          return [2
          /*return*/
          , data];
      }
    });
  });
}

function findVideo(id) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
    var data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , api.get("api/v1/videos/" + id)];

        case 1:
          data = _a.sent().data;
          return [2
          /*return*/
          , data];
      }
    });
  });
}

function fetchVideoComments(id) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
    var data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , api.get("api/v1/videos/" + id + "/comments")];

        case 1:
          data = _a.sent().data;
          return [2
          /*return*/
          , data];
      }
    });
  });
}

function createMachine(baseURL) {
  if (baseURL === void 0) {
    baseURL = '/';
  }

  api.defaults.baseURL = baseURL;
  return {
    fetchVideos: fetchVideos,
    findVideo: findVideo,
    fetchVideoComments: fetchVideoComments
  };
}
/* harmony default export */ __webpack_exports__["default"] = (createMachine);

/***/ }),

/***/ "e370":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vue_loader_v16_dist_index_js_ref_0_0_RAvatar_vue_vue_type_style_index_0_id_082ab0a8_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("abba");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vue_loader_v16_dist_index_js_ref_0_0_RAvatar_vue_vue_type_style_index_0_id_082ab0a8_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vue_loader_v16_dist_index_js_ref_0_0_RAvatar_vue_vue_type_style_index_0_id_082ab0a8_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e420":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RLayout.vue?vue&type=template&id=596c5593


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${Object(server_renderer_["ssrRenderAttrs"])(Object(external_vue_["mergeProps"])({
    class: "h-screen"
  }, _attrs))}><div class="header-content">`);

  Object(server_renderer_["ssrRenderSlot"])(_ctx.$slots, "header", {}, null, _push, _parent);

  _push(`</div><div class="flex w-full items-stretch" style="${Object(server_renderer_["ssrRenderStyle"])(`height: ${_ctx.height}`)}"><div class="r-layout-drawer">`);

  Object(server_renderer_["ssrRenderSlot"])(_ctx.$slots, "drawer", {}, null, _push, _parent);

  _push(`</div><div class="r-layout-content flex-grow h-full w-auto">`);

  Object(server_renderer_["ssrRenderSlot"])(_ctx.$slots, "default", {}, null, _push, _parent);

  _push(`</div></div></div>`);
}
// CONCATENATED MODULE: ./src/components/RLayout.vue?vue&type=template&id=596c5593

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist??ref--0-0!./src/components/RLayout.vue?vue&type=script&lang=ts

/* harmony default export */ var RLayoutvue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  setup: function () {
    var header = Object(external_vue_["ref"])(null);
    var height = Object(external_vue_["computed"])(function () {
      if (header.value) {
        return "calc(100% - " + header.value.clientHeight + ")";
      }

      return '100%';
    });
    return {
      height: height,
      header: header
    };
  }
}));
// CONCATENATED MODULE: ./src/components/RLayout.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/RLayout.vue



RLayoutvue_type_script_lang_ts.ssrRender = ssrRender

/* harmony default export */ var RLayout = __webpack_exports__["default"] = (RLayoutvue_type_script_lang_ts);

/***/ }),

/***/ "ea2a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/layouts/Default.vue?vue&type=template&id=32bfa85e


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_r_layout = Object(external_vue_["resolveComponent"])("r-layout");

  const _component_r_header = Object(external_vue_["resolveComponent"])("r-header");

  const _component_r_btn = Object(external_vue_["resolveComponent"])("r-btn");

  const _component_r_drawer = Object(external_vue_["resolveComponent"])("r-drawer");

  const _component_r_list = Object(external_vue_["resolveComponent"])("r-list");

  const _component_r_item = Object(external_vue_["resolveComponent"])("r-item");

  const _component_r_item_section = Object(external_vue_["resolveComponent"])("r-item-section");

  const _component_f_icon = Object(external_vue_["resolveComponent"])("f-icon");

  const _component_r_container = Object(external_vue_["resolveComponent"])("r-container");

  const _component_router_view = Object(external_vue_["resolveComponent"])("router-view");

  _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_layout, _attrs, {
    header: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_header, {
          class: "bg-white flex items-center"
        }, {
          default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_btn, {
                class: "mr-4",
                icon: "bars"
              }, null, _parent, _scopeId));

              _push(`<h1${_scopeId}>You space</h1>`);
            } else {
              return [Object(external_vue_["createVNode"])(_component_r_btn, {
                class: "mr-4",
                onClick: _ctx.toggleLeftDrawer,
                icon: "bars"
              }, null, 8, ["onClick"]), Object(external_vue_["createVNode"])("h1", null, "You space")];
            }
          }),
          _: 1
        }, _parent, _scopeId));
      } else {
        return [Object(external_vue_["createVNode"])(_component_r_header, {
          class: "bg-white flex items-center"
        }, {
          default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_r_btn, {
            class: "mr-4",
            onClick: _ctx.toggleLeftDrawer,
            icon: "bars"
          }, null, 8, ["onClick"]), Object(external_vue_["createVNode"])("h1", null, "You space")]),
          _: 1
        })];
      }
    }),
    drawer: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_drawer, {
          modelValue: _ctx.leftDrawerOpen,
          "onUpdate:modelValue": $event => _ctx.leftDrawerOpen = $event
        }, {
          default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_list, {
                class: "text-blue-grey-500"
              }, {
                default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<!--[-->`);

                    Object(server_renderer_["ssrRenderList"])(_ctx.menuList, (item, index) => {
                      _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_item, {
                        clickable: "",
                        to: item.to
                      }, {
                        default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
                          if (_push) {
                            _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_item_section, {
                              side: ""
                            }, {
                              default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
                                if (_push) {
                                  _push(Object(server_renderer_["ssrRenderComponent"])(_component_f_icon, {
                                    icon: item.icon
                                  }, null, _parent, _scopeId));
                                } else {
                                  return [Object(external_vue_["createVNode"])(_component_f_icon, {
                                    icon: item.icon
                                  }, null, 8, ["icon"])];
                                }
                              }),
                              _: 2
                            }, _parent, _scopeId));

                            _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_item_section, {
                              class: "ml-4"
                            }, {
                              default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
                                if (_push) {
                                  _push(`${Object(server_renderer_["ssrInterpolate"])(item.label)}`);
                                } else {
                                  return [Object(external_vue_["createTextVNode"])(Object(external_vue_["toDisplayString"])(item.label), 1)];
                                }
                              }),
                              _: 2
                            }, _parent, _scopeId));
                          } else {
                            return [Object(external_vue_["createVNode"])(_component_r_item_section, {
                              side: ""
                            }, {
                              default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_f_icon, {
                                icon: item.icon
                              }, null, 8, ["icon"])]),
                              _: 2
                            }, 1024), Object(external_vue_["createVNode"])(_component_r_item_section, {
                              class: "ml-4"
                            }, {
                              default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createTextVNode"])(Object(external_vue_["toDisplayString"])(item.label), 1)]),
                              _: 2
                            }, 1024)];
                          }
                        }),
                        _: 2
                      }, _parent, _scopeId));
                    });

                    _push(`<!--]-->`);
                  } else {
                    return [(Object(external_vue_["openBlock"])(true), Object(external_vue_["createBlock"])(external_vue_["Fragment"], null, Object(external_vue_["renderList"])(_ctx.menuList, (item, index) => {
                      return Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(_component_r_item, {
                        key: index,
                        clickable: "",
                        to: item.to
                      }, {
                        default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_r_item_section, {
                          side: ""
                        }, {
                          default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_f_icon, {
                            icon: item.icon
                          }, null, 8, ["icon"])]),
                          _: 2
                        }, 1024), Object(external_vue_["createVNode"])(_component_r_item_section, {
                          class: "ml-4"
                        }, {
                          default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createTextVNode"])(Object(external_vue_["toDisplayString"])(item.label), 1)]),
                          _: 2
                        }, 1024)]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128))];
                  }
                }),
                _: 1
              }, _parent, _scopeId));
            } else {
              return [Object(external_vue_["createVNode"])(_component_r_list, {
                class: "text-blue-grey-500"
              }, {
                default: Object(external_vue_["withCtx"])(() => [(Object(external_vue_["openBlock"])(true), Object(external_vue_["createBlock"])(external_vue_["Fragment"], null, Object(external_vue_["renderList"])(_ctx.menuList, (item, index) => {
                  return Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(_component_r_item, {
                    key: index,
                    clickable: "",
                    to: item.to
                  }, {
                    default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_r_item_section, {
                      side: ""
                    }, {
                      default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_f_icon, {
                        icon: item.icon
                      }, null, 8, ["icon"])]),
                      _: 2
                    }, 1024), Object(external_vue_["createVNode"])(_component_r_item_section, {
                      class: "ml-4"
                    }, {
                      default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createTextVNode"])(Object(external_vue_["toDisplayString"])(item.label), 1)]),
                      _: 2
                    }, 1024)]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128))]),
                _: 1
              })];
            }
          }),
          _: 1
        }, _parent, _scopeId));
      } else {
        return [Object(external_vue_["createVNode"])(_component_r_drawer, {
          modelValue: _ctx.leftDrawerOpen,
          "onUpdate:modelValue": $event => _ctx.leftDrawerOpen = $event
        }, {
          default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_r_list, {
            class: "text-blue-grey-500"
          }, {
            default: Object(external_vue_["withCtx"])(() => [(Object(external_vue_["openBlock"])(true), Object(external_vue_["createBlock"])(external_vue_["Fragment"], null, Object(external_vue_["renderList"])(_ctx.menuList, (item, index) => {
              return Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(_component_r_item, {
                key: index,
                clickable: "",
                to: item.to
              }, {
                default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_r_item_section, {
                  side: ""
                }, {
                  default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_f_icon, {
                    icon: item.icon
                  }, null, 8, ["icon"])]),
                  _: 2
                }, 1024), Object(external_vue_["createVNode"])(_component_r_item_section, {
                  class: "ml-4"
                }, {
                  default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createTextVNode"])(Object(external_vue_["toDisplayString"])(item.label), 1)]),
                  _: 2
                }, 1024)]),
                _: 2
              }, 1032, ["to"]);
            }), 128))]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "onUpdate:modelValue"])];
      }
    }),
    default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(Object(server_renderer_["ssrRenderComponent"])(_component_r_container, {
          class: "bg-gray-100 h-full"
        }, {
          default: Object(external_vue_["withCtx"])((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(Object(server_renderer_["ssrRenderComponent"])(_component_router_view, null, null, _parent, _scopeId));
            } else {
              return [Object(external_vue_["createVNode"])(_component_router_view)];
            }
          }),
          _: 1
        }, _parent, _scopeId));
      } else {
        return [Object(external_vue_["createVNode"])(_component_r_container, {
          class: "bg-gray-100 h-full"
        }, {
          default: Object(external_vue_["withCtx"])(() => [Object(external_vue_["createVNode"])(_component_router_view)]),
          _: 1
        })];
      }
    }),
    _: 1
  }, _parent));
}
// CONCATENATED MODULE: ./src/layouts/Default.vue?vue&type=template&id=32bfa85e

// EXTERNAL MODULE: external "vue-i18n"
var external_vue_i18n_ = __webpack_require__("85b3");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist??ref--0-0!./src/layouts/Default.vue?vue&type=script&lang=ts


/* harmony default export */ var Defaultvue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  name: 'Default',
  setup: function () {
    var tm = Object(external_vue_i18n_["useI18n"])();
    var leftDrawerOpen = Object(external_vue_["ref"])(true);
    var menuList = [{
      label: tm.t('home'),
      icon: 'home',
      to: {
        name: 'home'
      }
    }, {
      label: tm.t('latestVideos'),
      icon: ['fab', 'telegram-plane']
    }, {
      label: tm.t('recommendations'),
      icon: 'play-circle'
    }, {
      label: tm.t('favorites'),
      icon: 'heart'
    }, {
      label: tm.t('history'),
      icon: 'history'
    }];
    return {
      menuList: menuList,
      leftDrawerOpen: leftDrawerOpen,
      toggleLeftDrawer: function () {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  }
}));
// CONCATENATED MODULE: ./src/layouts/Default.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/layouts/Default.vue



Defaultvue_type_script_lang_ts.ssrRender = ssrRender

/* harmony default export */ var Default = __webpack_exports__["default"] = (Defaultvue_type_script_lang_ts);

/***/ }),

/***/ "eb00":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__("d7bc");

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/App.vue?vue&type=template&id=69c423e2


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_view = Object(external_vue_["resolveComponent"])("router-view");

  _push(Object(server_renderer_["ssrRenderComponent"])(_component_router_view, _attrs, null, _parent));
}
// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=69c423e2

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist??ref--0-0!./src/App.vue?vue&type=script&lang=js
/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: 'App',

  setup() {
    return {};
  }

});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/App.vue



Appvue_type_script_lang_js.ssrRender = ssrRender

/* harmony default export */ var App = (Appvue_type_script_lang_js);
// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__("6389");

// CONCATENATED MODULE: ./src/router/index.ts

var isServer = typeof window === 'undefined';
var router_history = isServer ? Object(external_vue_router_["createMemoryHistory"])() : Object(external_vue_router_["createWebHistory"])();
var routes = [{
  path: '/',
  component: function () {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "ea2a"));
  },
  children: [{
    path: '',
    name: 'home',
    component: function () {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "bc13"));
    }
  }, {
    path: 'videos/:videoId',
    name: 'video-single',
    props: true,
    component: function () {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "49e9"));
    }
  }]
}, // Always leave this as last one,
// but you can also remove it
{
  path: '/:catchAll(.*)*',
  component: function () {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "ee5d"));
  }
}];
function createAppRouter() {
  return Object(external_vue_router_["createRouter"])({
    history: router_history,
    routes: routes
  });
}
// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__("b20f");

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__("5880");

// CONCATENATED MODULE: ./src/store/index.ts

/* harmony default export */ var store = (Object(external_vuex_["createStore"])({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
}));
// CONCATENATED MODULE: ./src/boot.ts


function bootPlugins(app) {
  return Object(external_tslib_["__awaiter"])(this, void 0, void 0, function () {
    var context, fileNames, boots;

    var _this = this;

    return Object(external_tslib_["__generator"])(this, function (_a) {
      context = __webpack_require__("4a13");
      fileNames = context.keys().filter(function (filename) {
        var _a = filename.replace('./', '').split('/'),
            plugin = _a[0],
            deepFile = _a[1];

        if (plugin.includes('.ts')) {
          return true;
        }

        if (deepFile === 'index.ts') {
          return true;
        }

        return false;
      });
      boots = [];
      fileNames.forEach(function (filename) {
        var plugin = context(filename);
        boots.push(plugin.default);
      });
      return [2
      /*return*/
      , Promise.all(boots.map(function (boot) {
        return Object(external_tslib_["__awaiter"])(_this, void 0, void 0, function () {
          return Object(external_tslib_["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , boot({
                  app: app
                })];

              case 1:
                return [2
                /*return*/
                , _a.sent()];
            }
          });
        });
      }))];
    });
  });
}

/* harmony default export */ var src_boot = (bootPlugins);
// CONCATENATED MODULE: ./src/app.ts







function createApp() {
  return Object(external_tslib_["__awaiter"])(this, void 0, void 0, function () {
    var app, router;
    return Object(external_tslib_["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          app = Object(external_vue_["createSSRApp"])(App);
          router = createAppRouter();
          return [4
          /*yield*/
          , src_boot(app)];

        case 1:
          _a.sent();

          app.use(store);
          app.use(router);
          return [2
          /*return*/
          , {
            app: app,
            router: router
          }];
      }
    });
  });
}
// CONCATENATED MODULE: ./src/entry-server.ts

/* harmony default export */ var entry_server = __webpack_exports__["default"] = (createApp);

/***/ }),

/***/ "ee5d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__("70d2");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/vue-loader-v16/dist??ref--0-0!./src/pages/404.vue?vue&type=template&id=8020dbfa

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${Object(server_renderer_["ssrRenderAttrs"])(_attrs)}>404 not found</div>`);
}
// CONCATENATED MODULE: ./src/pages/404.vue?vue&type=template&id=8020dbfa

// CONCATENATED MODULE: ./src/pages/404.vue

const script = {}
script.ssrRender = ssrRender

/* harmony default export */ var _404 = __webpack_exports__["default"] = (script);

/***/ })

/******/ });
//# sourceMappingURL=app.666002a7.js.map