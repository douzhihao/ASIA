(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!**************************************!*\
  !*** D:/Develop/ASIA-POTASH/main.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));\n__webpack_require__(/*! uni-pages */ 6);\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 99));\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ 47));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 102));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\ntry {\n  var isPromise = function isPromise(obj) {\n    return !!obj && ((0, _typeof2.default)(obj) === \"object\" || typeof obj === \"function\") && typeof obj.then === \"function\";\n  }; // 统一 vue2 API Promise 化返回格式与 vue3 保持一致\n  uni.addInterceptor({\n    returnValue: function returnValue(res) {\n      if (!isPromise(res)) {\n        return res;\n      }\n      return new Promise(function (resolve, reject) {\n        res.then(function (res) {\n          if (res[0]) {\n            reject(res[0]);\n          } else {\n            resolve(res[1]);\n          }\n        });\n      });\n    }\n  });\n} catch (error) {}\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiaXNQcm9taXNlIiwib2JqIiwidGhlbiIsInVuaSIsImFkZEludGVyY2VwdG9yIiwicmV0dXJuVmFsdWUiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVycm9yIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQW1CO0FBRW5CO0FBSUE7QUFBcUI7QUFBQTtBQUNyQkEsWUFBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBQ2hDQyxZQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLElBQUk7RUFBQSxJQUNPQyxTQUFTLEdBQWxCLFNBQVNBLFNBQVMsQ0FBQ0MsR0FBRyxFQUFFO0lBQ3RCLE9BQ0UsQ0FBQyxDQUFDQSxHQUFHLEtBQ0osc0JBQU9BLEdBQUcsTUFBSyxRQUFRLElBQUksT0FBT0EsR0FBRyxLQUFLLFVBQVUsQ0FBQyxJQUN0RCxPQUFPQSxHQUFHLENBQUNDLElBQUksS0FBSyxVQUFVO0VBRWxDLENBQUMsRUFFRDtFQUNBQyxHQUFHLENBQUNDLGNBQWMsQ0FBQztJQUNqQkMsV0FBVyx1QkFBQ0MsR0FBRyxFQUFFO01BQ2YsSUFBSSxDQUFDTixTQUFTLENBQUNNLEdBQUcsQ0FBQyxFQUFFO1FBQ25CLE9BQU9BLEdBQUc7TUFDWjtNQUNBLE9BQU8sSUFBSUMsT0FBTyxDQUFDLFVBQUNDLE9BQU8sRUFBRUMsTUFBTSxFQUFLO1FBQ3RDSCxHQUFHLENBQUNKLElBQUksQ0FBQyxVQUFDSSxHQUFHLEVBQUs7VUFDaEIsSUFBSUEsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1ZHLE1BQU0sQ0FBQ0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ2hCLENBQUMsTUFBTTtZQUNMRSxPQUFPLENBQUNGLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUNqQjtRQUNGLENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQztJQUNKO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLE9BQU9JLEtBQUssRUFBRSxDQUFFO0FBRWxCLElBQU1DLEdBQUcsR0FBRyxJQUFJaEIsWUFBRyxtQkFDZEcsWUFBRyxFQUNOO0FBQ0ZhLEdBQUcsQ0FBQ0MsTUFBTSxFQUFFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuIFxyXG5cclxuXHJcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbnRyeSB7XHJcbiAgZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgISFvYmogJiZcclxuICAgICAgKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSAmJlxyXG4gICAgICB0eXBlb2Ygb2JqLnRoZW4gPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIOe7n+S4gCB2dWUyIEFQSSBQcm9taXNlIOWMlui/lOWbnuagvOW8j+S4jiB2dWUzIOS/neaMgeS4gOiHtFxyXG4gIHVuaS5hZGRJbnRlcmNlcHRvcih7XHJcbiAgICByZXR1cm5WYWx1ZShyZXMpIHtcclxuICAgICAgaWYgKCFpc1Byb21pc2UocmVzKSkge1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICByZXMudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzWzBdKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChyZXNbMF0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXNbMV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn0gY2F0Y2ggKGVycm9yKSB7IH1cclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gIC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KClcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
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
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!*****************************************!*\
  !*** D:/Develop/ASIA-POTASH/pages.json ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 7).default);
});

/***/ }),
/* 7 */
/*!****************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/pages/index/index.vue?mpType=page ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 39);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 28);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzZLO0FBQzdLLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hidWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**********************************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Develop/ASIA-POTASH/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 10)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("view", {
        staticClass: _vm._$s(1, "sc", "contentBg"),
        attrs: { _i: 1 },
      }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "custom"), attrs: { _i: 2 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(3, "sc", "customLeft"),
              attrs: { _i: 3 },
              on: {
                click: function ($event) {
                  return _vm.clickShowPopupWSS()
                },
              },
            },
            [
              _c("image", {
                attrs: {
                  src: _vm._$s(
                    4,
                    "a-src",
                    __webpack_require__(/*! ../../static/icon-logo.png */ 31)
                  ),
                  _i: 4,
                },
              }),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(5, "sc", "customMid"), attrs: { _i: 5 } },
            [
              _c("image", {
                attrs: {
                  src: _vm._$s(
                    6,
                    "a-src",
                    __webpack_require__(/*! ../../static/icon-title.png */ 32)
                  ),
                  _i: 6,
                },
              }),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(7, "sc", "customRight"),
              attrs: { _i: 7 },
              on: {
                click: function ($event) {
                  return _vm.clickShowPopup()
                },
              },
            },
            [
              _c("image", {
                attrs: {
                  src: _vm._$s(
                    8,
                    "a-src",
                    __webpack_require__(/*! ../../static/icon-option.png */ 33)
                  ),
                  _i: 8,
                },
              }),
            ]
          ),
        ]
      ),
      _c("view", { staticClass: _vm._$s(9, "sc", "main"), attrs: { _i: 9 } }, [
        _c(
          "view",
          { staticClass: _vm._$s(10, "sc", "chat"), attrs: { _i: 10 } },
          [
            _c(
              "view",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm._$s(11, "v-show", _vm.showUserPart),
                    expression: "_$s(11,'v-show',showUserPart)",
                  },
                ],
                staticClass: _vm._$s(11, "sc", "userPart"),
                attrs: { _i: 11 },
              },
              [
                _c(
                  "view",
                  { staticClass: _vm._$s(12, "sc", "text"), attrs: { _i: 12 } },
                  [_vm._v(_vm._$s(12, "t0-0", _vm._s(_vm.userMsg)))]
                ),
                _c("view", {
                  staticClass: _vm._$s(13, "sc", "triangle"),
                  attrs: { _i: 13 },
                }),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(14, "sc", "headimg"),
                    attrs: { _i: 14 },
                  },
                  [
                    _c("image", {
                      attrs: {
                        src: _vm._$s(
                          15,
                          "a-src",
                          __webpack_require__(/*! ../../static/icon-headimg.png */ 34)
                        ),
                        _i: 15,
                      },
                    }),
                  ]
                ),
              ]
            ),
            _c(
              "view",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm._$s(16, "v-show", _vm.showRobotPart),
                    expression: "_$s(16,'v-show',showRobotPart)",
                  },
                ],
                staticClass: _vm._$s(16, "sc", "robotPart"),
                attrs: { _i: 16 },
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(17, "sc", "headimg"),
                    attrs: { _i: 17 },
                  },
                  [
                    _c("image", {
                      attrs: {
                        src: _vm._$s(
                          18,
                          "a-src",
                          __webpack_require__(/*! ../../static/icon-robot1.png */ 35)
                        ),
                        _i: 18,
                      },
                    }),
                  ]
                ),
                _c("view", {
                  staticClass: _vm._$s(19, "sc", "triangle"),
                  attrs: { _i: 19 },
                }),
                _c(
                  "view",
                  { staticClass: _vm._$s(20, "sc", "text"), attrs: { _i: 20 } },
                  [_vm._v(_vm._$s(20, "t0-0", _vm._s(_vm.robotMsg)))]
                ),
              ]
            ),
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(21, "sc", "inputWav"), attrs: { _i: 21 } },
          [
            _c(
              "view",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm._$s(22, "v-show", _vm.recording),
                    expression: "_$s(22,'v-show',recording)",
                  },
                ],
                staticClass: _vm._$s(22, "sc", "inputTipsSlide"),
                attrs: { _i: 22 },
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(23, "sc", "slideMain"),
                    attrs: { _i: 23 },
                  },
                  [
                    _c("image", {
                      attrs: {
                        src: _vm._$s(
                          24,
                          "a-src",
                          __webpack_require__(/*! ../../static/icon-arrow.png */ 36)
                        ),
                        _i: 24,
                      },
                    }),
                  ]
                ),
              ]
            ),
            _c(
              "view",
              { staticClass: _vm._$s(25, "sc", "inputBox"), attrs: { _i: 25 } },
              [
                _c(
                  "view",
                  {
                    class: _vm._$s(
                      26,
                      "c",
                      _vm.recording ? "inputBtnRecording" : "inputBtnDefault"
                    ),
                    attrs: { _i: 26 },
                    on: {
                      touchstart: _vm.touchStart,
                      touchmove: _vm.touchMove,
                      touchend: _vm.touchEnd,
                      longpress: _vm.langTap,
                    },
                  },
                  [
                    _c(
                      "view",
                      {
                        class: _vm._$s(
                          27,
                          "c",
                          _vm.cancelRecord
                            ? "inputIconBox"
                            : "inputIconBoxCannel"
                        ),
                        attrs: { _i: 27 },
                      },
                      [
                        _vm._$s(28, "i", _vm.recording && _vm.recordStatus == 2)
                          ? _c("image", {
                              staticClass: _vm._$s(28, "sc", "inputIcon"),
                              attrs: {
                                src: _vm._$s(
                                  28,
                                  "a-src",
                                  __webpack_require__(/*! ../../static/icon-mic.png */ 37)
                                ),
                                _i: 28,
                              },
                            })
                          : _vm._e(),
                        _vm._$s(29, "i", _vm.recording && _vm.recordStatus == 1)
                          ? _c("image", {
                              staticClass: _vm._$s(29, "sc", "inputIcon"),
                              attrs: {
                                src: _vm._$s(
                                  29,
                                  "a-src",
                                  __webpack_require__(/*! ../../static/icon-mic1.png */ 38)
                                ),
                                _i: 29,
                              },
                            })
                          : _vm._e(),
                        _vm._$s(
                          30,
                          "i",
                          !_vm.recording && _vm.recordStatus == 0
                        )
                          ? _c("image", {
                              staticClass: _vm._$s(30, "sc", "inputIcon"),
                              attrs: {
                                src: _vm._$s(
                                  30,
                                  "a-src",
                                  __webpack_require__(/*! ../../static/icon-mic1.png */ 38)
                                ),
                                _i: 30,
                              },
                            })
                          : _vm._e(),
                      ]
                    ),
                  ]
                ),
                _c("view", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm._$s(31, "v-show", !_vm.recording),
                      expression: "_$s(31,'v-show',!recording)",
                    },
                  ],
                  staticClass: _vm._$s(31, "sc", "inputTipsHold"),
                  attrs: { _i: 31 },
                }),
                _c("view", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm._$s(32, "v-show", _vm.recording),
                      expression: "_$s(32,'v-show',recording)",
                    },
                  ],
                  staticClass: _vm._$s(32, "sc", "inputTipsRelease"),
                  attrs: { _i: 32 },
                }),
              ]
            ),
          ]
        ),
      ]),
      _c(
        "uni-popup",
        {
          ref: "popup",
          attrs: {
            type: "bottom",
            "mask-background-color": "rgba(0,0,0,0.7)",
            _i: 33,
          },
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(34, "sc", "optionBtn"), attrs: { _i: 34 } },
            [
              _c("view", {
                staticClass: _vm._$s(35, "sc", "_line"),
                attrs: { _i: 35 },
              }),
              _c("button", {
                attrs: { _i: 36 },
                on: { click: _vm.clickPlayVideo },
              }),
              _c("view", {
                staticClass: _vm._$s(37, "sc", "_line"),
                attrs: { _i: 37 },
              }),
              _c("button", {
                attrs: { _i: 38 },
                on: { click: _vm.clickPlayVideo },
              }),
              _c("view", {
                staticClass: _vm._$s(39, "sc", "_line"),
                attrs: { _i: 39 },
              }),
              _c("button", {
                attrs: { _i: 40 },
                on: { click: _vm.clickPlayVideo },
              }),
              _c("view", {
                staticClass: _vm._$s(41, "sc", "_line"),
                attrs: { _i: 41 },
              }),
              _c("button", {
                attrs: { _i: 42 },
                on: { click: _vm.clickLinkServices },
              }),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(43, "sc", "cannelBtn"), attrs: { _i: 43 } },
            [
              _c("button", {
                attrs: { _i: 44 },
                on: { click: _vm.clickHidePopup },
              }),
            ]
          ),
        ]
      ),
      _c(
        "uni-popup",
        {
          ref: "popupWSS",
          attrs: {
            type: "center",
            "mask-background-color": "rgba(0,0,0,0.7)",
            _i: 45,
          },
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(46, "sc", "popupWSSMain"),
              attrs: { _i: 46 },
            },
            [
              _c("input", {
                attrs: {
                  id: "",
                  value: _vm._$s(47, "a-value", _vm.WSSUrl),
                  _i: 47,
                },
                on: { input: _vm.inputWSS },
              }),
              _c("button", {
                attrs: { _i: 48 },
                on: { click: _vm.disconnectWSS },
              }),
              _c("button", {
                attrs: { _i: 49 },
                on: { click: _vm.clickHidePopupWSS },
              }),
              _c("button", {
                attrs: { _i: 50 },
                on: { click: _vm.connectWSS },
              }),
              _c("view", [
                _c("text"),
                _c("switch", {
                  attrs: {
                    checked: _vm._$s(53, "a-checked", _vm.language),
                    _i: 53,
                  },
                  on: { change: _vm.languageSwitch },
                }),
              ]),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!***************************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/uni_modules/uni-popup/components/uni-popup/uni-popup.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=template&id=7c43d41b& */ 11);\n/* harmony import */ var _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=script&lang=js& */ 29);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 28);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/uni-popup/components/uni-popup/uni-popup.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0g7QUFDdEg7QUFDNkQ7QUFDTDs7O0FBR3hEO0FBQ21MO0FBQ25MLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2M0M2Q0MWImXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9IYnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlfbW9kdWxlcy91bmktcG9wdXAvY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!**********************************************************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=template&id=7c43d41b& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=template&id=7c43d41b& */ 12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 12 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Develop/ASIA-POTASH/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=template&id=7c43d41b& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniTransition:
      __webpack_require__(/*! @/uni_modules/uni-transition/components/uni-transition/uni-transition.vue */ 13)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._$s(0, "i", _vm.showPopup)
    ? _c(
        "view",
        {
          staticClass: _vm._$s(0, "sc", "uni-popup"),
          class: _vm._$s(0, "c", [
            _vm.popupstyle,
            _vm.isDesktop ? "fixforpc-z-index" : "",
          ]),
          attrs: { _i: 0 },
        },
        [
          _c(
            "view",
            { attrs: { _i: 1 }, on: { touchstart: _vm.touchstart } },
            [
              _vm._$s(2, "i", _vm.maskShow)
                ? _c("uni-transition", {
                    key: "1",
                    attrs: {
                      name: "mask",
                      "mode-class": "fade",
                      styles: _vm.maskClass,
                      duration: _vm.duration,
                      show: _vm.showTrans,
                      _i: 2,
                    },
                    on: { click: _vm.onTap },
                  })
                : _vm._e(),
              _c(
                "uni-transition",
                {
                  key: "2",
                  attrs: {
                    "mode-class": _vm.ani,
                    name: "content",
                    styles: _vm.transClass,
                    duration: _vm.duration,
                    show: _vm.showTrans,
                    _i: 3,
                  },
                  on: { click: _vm.onTap },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(4, "sc", "uni-popup__wrapper"),
                      class: _vm._$s(4, "c", [_vm.popupstyle]),
                      style: _vm._$s(4, "s", { backgroundColor: _vm.bg }),
                      attrs: { _i: 4 },
                      on: { click: _vm.clear },
                    },
                    [_vm._t("default", null, { _i: 5 })],
                    2
                  ),
                ]
              ),
            ],
            1
          ),
        ]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 13 */
/*!******************************************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/uni_modules/uni-transition/components/uni-transition/uni-transition.vue ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=template&id=6369f8c4& */ 14);\n/* harmony import */ var _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=script&lang=js& */ 16);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 28);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/uni-transition/components/uni-transition/uni-transition.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDs7O0FBRzdEO0FBQ21MO0FBQ25MLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MzY5ZjhjNCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9IYnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlfbW9kdWxlcy91bmktdHJhbnNpdGlvbi9jb21wb25lbnRzL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*************************************************************************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=template&id=6369f8c4& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=template&id=6369f8c4& */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Develop/ASIA-POTASH/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=template&id=6369f8c4& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._$s(0, "i", _vm.isShow)
    ? _c(
        "view",
        {
          ref: "ani",
          class: _vm._$s(0, "c", _vm.customClass),
          style: _vm._$s(0, "s", _vm.transformStyles),
          attrs: {
            animation: _vm._$s(0, "a-animation", _vm.animationData),
            _i: 0,
          },
          on: { click: _vm.onClick },
        },
        [_vm._t("default", null, { _i: 1 })],
        2
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 16 */
/*!*******************************************************************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=script&lang=js& */ 17);\n/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBtQixDQUFnQiw0bUJBQUcsRUFBQyIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSGJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSGJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vSGJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hidWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSGJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSGJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vSGJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hidWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Develop/ASIA-POTASH/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 19));\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _createAnimation = __webpack_require__(/*! ./createAnimation */ 25);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n/**\r\n * Transition 过渡动画\r\n * @description 简单过渡动画组件\r\n * @tutorial https://ext.dcloud.net.cn/plugin?id=985\r\n * @property {Boolean} show = [false|true] 控制组件显示或隐藏\r\n * @property {Array|String} modeClass = [fade|slide-top|slide-right|slide-bottom|slide-left|zoom-in|zoom-out] 过渡动画类型\r\n *  @value fade 渐隐渐出过渡\r\n *  @value slide-top 由上至下过渡\r\n *  @value slide-right 由右至左过渡\r\n *  @value slide-bottom 由下至上过渡\r\n *  @value slide-left 由左至右过渡\r\n *  @value zoom-in 由小到大过渡\r\n *  @value zoom-out 由大到小过渡\r\n * @property {Number} duration 过渡动画持续时间\r\n * @property {Object} styles 组件样式，同 css 样式，注意带’-‘连接符的属性需要使用小驼峰写法如：`backgroundColor:red`\r\n */\nvar _default2 = {\n  name: 'uniTransition',\n  emits: ['click', 'change'],\n  props: {\n    show: {\n      type: Boolean,\n      default: false\n    },\n    modeClass: {\n      type: [Array, String],\n      default: function _default() {\n        return 'fade';\n      }\n    },\n    duration: {\n      type: Number,\n      default: 300\n    },\n    styles: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    },\n    customClass: {\n      type: String,\n      default: ''\n    }\n  },\n  data: function data() {\n    return {\n      isShow: false,\n      transform: '',\n      opacity: 1,\n      animationData: {},\n      durationTime: 300,\n      config: {}\n    };\n  },\n  watch: {\n    show: {\n      handler: function handler(newVal) {\n        if (newVal) {\n          this.open();\n        } else {\n          // 避免上来就执行 close,导致动画错乱\n          if (this.isShow) {\n            this.close();\n          }\n        }\n      },\n      immediate: true\n    }\n  },\n  computed: {\n    // 生成样式数据\n    stylesObject: function stylesObject() {\n      var styles = _objectSpread(_objectSpread({}, this.styles), {}, {\n        'transition-duration': this.duration / 1000 + 's'\n      });\n      var transform = '';\n      for (var i in styles) {\n        var line = this.toLine(i);\n        transform += line + ':' + styles[i] + ';';\n      }\n      return transform;\n    },\n    // 初始化动画条件\n    transformStyles: function transformStyles() {\n      return 'transform:' + this.transform + ';' + 'opacity:' + this.opacity + ';' + this.stylesObject;\n    }\n  },\n  created: function created() {\n    // 动画默认配置\n    this.config = {\n      duration: this.duration,\n      timingFunction: 'ease',\n      transformOrigin: '50% 50%',\n      delay: 0\n    };\n    this.durationTime = this.duration;\n  },\n  methods: {\n    /**\r\n     *  ref 触发 初始化动画\r\n     */\n    init: function init() {\n      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      if (obj.duration) {\n        this.durationTime = obj.duration;\n      }\n      this.animation = (0, _createAnimation.createAnimation)(Object.assign(this.config, obj), this);\n    },\n    /**\r\n     * 点击组件触发回调\r\n     */\n    onClick: function onClick() {\n      this.$emit('click', {\n        detail: this.isShow\n      });\n    },\n    /**\r\n     * ref 触发 动画分组\r\n     * @param {Object} obj\r\n     */\n    step: function step(obj) {\n      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      if (!this.animation) return;\n      for (var i in obj) {\n        try {\n          if ((0, _typeof2.default)(obj[i]) === 'object') {\n            var _this$animation;\n            (_this$animation = this.animation)[i].apply(_this$animation, (0, _toConsumableArray2.default)(obj[i]));\n          } else {\n            this.animation[i](obj[i]);\n          }\n        } catch (e) {\n          __f__(\"error\", \"\\u65B9\\u6CD5 \".concat(i, \" \\u4E0D\\u5B58\\u5728\"), \" at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139\");\n        }\n      }\n      this.animation.step(config);\n      return this;\n    },\n    /**\r\n     *  ref 触发 执行动画\r\n     */\n    run: function run(fn) {\n      if (!this.animation) return;\n      this.animation.run(fn);\n    },\n    // 开始过度动画\n    open: function open() {\n      var _this = this;\n      clearTimeout(this.timer);\n      this.transform = '';\n      this.isShow = true;\n      var _this$styleInit = this.styleInit(false),\n        opacity = _this$styleInit.opacity,\n        transform = _this$styleInit.transform;\n      if (typeof opacity !== 'undefined') {\n        this.opacity = opacity;\n      }\n      this.transform = transform;\n      // 确保动态样式已经生效后，执行动画，如果不加 nextTick ，会导致 wx 动画执行异常\n      this.$nextTick(function () {\n        // TODO 定时器保证动画完全执行，目前有些问题，后面会取消定时器\n        _this.timer = setTimeout(function () {\n          _this.animation = (0, _createAnimation.createAnimation)(_this.config, _this);\n          _this.tranfromInit(false).step();\n          _this.animation.run();\n          _this.$emit('change', {\n            detail: _this.isShow\n          });\n        }, 20);\n      });\n    },\n    // 关闭过度动画\n    close: function close(type) {\n      var _this2 = this;\n      if (!this.animation) return;\n      this.tranfromInit(true).step().run(function () {\n        _this2.isShow = false;\n        _this2.animationData = null;\n        _this2.animation = null;\n        var _this2$styleInit = _this2.styleInit(false),\n          opacity = _this2$styleInit.opacity,\n          transform = _this2$styleInit.transform;\n        _this2.opacity = opacity || 1;\n        _this2.transform = transform;\n        _this2.$emit('change', {\n          detail: _this2.isShow\n        });\n      });\n    },\n    // 处理动画开始前的默认样式\n    styleInit: function styleInit(type) {\n      var _this3 = this;\n      var styles = {\n        transform: ''\n      };\n      var buildStyle = function buildStyle(type, mode) {\n        if (mode === 'fade') {\n          styles.opacity = _this3.animationType(type)[mode];\n        } else {\n          styles.transform += _this3.animationType(type)[mode] + ' ';\n        }\n      };\n      if (typeof this.modeClass === 'string') {\n        buildStyle(type, this.modeClass);\n      } else {\n        this.modeClass.forEach(function (mode) {\n          buildStyle(type, mode);\n        });\n      }\n      return styles;\n    },\n    // 处理内置组合动画\n    tranfromInit: function tranfromInit(type) {\n      var _this4 = this;\n      var buildTranfrom = function buildTranfrom(type, mode) {\n        var aniNum = null;\n        if (mode === 'fade') {\n          aniNum = type ? 0 : 1;\n        } else {\n          aniNum = type ? '-100%' : '0';\n          if (mode === 'zoom-in') {\n            aniNum = type ? 0.8 : 1;\n          }\n          if (mode === 'zoom-out') {\n            aniNum = type ? 1.2 : 1;\n          }\n          if (mode === 'slide-right') {\n            aniNum = type ? '100%' : '0';\n          }\n          if (mode === 'slide-bottom') {\n            aniNum = type ? '100%' : '0';\n          }\n        }\n        _this4.animation[_this4.animationMode()[mode]](aniNum);\n      };\n      if (typeof this.modeClass === 'string') {\n        buildTranfrom(type, this.modeClass);\n      } else {\n        this.modeClass.forEach(function (mode) {\n          buildTranfrom(type, mode);\n        });\n      }\n      return this.animation;\n    },\n    animationType: function animationType(type) {\n      return {\n        fade: type ? 1 : 0,\n        'slide-top': \"translateY(\".concat(type ? '0' : '-100%', \")\"),\n        'slide-right': \"translateX(\".concat(type ? '0' : '100%', \")\"),\n        'slide-bottom': \"translateY(\".concat(type ? '0' : '100%', \")\"),\n        'slide-left': \"translateX(\".concat(type ? '0' : '-100%', \")\"),\n        'zoom-in': \"scaleX(\".concat(type ? 1 : 0.8, \") scaleY(\").concat(type ? 1 : 0.8, \")\"),\n        'zoom-out': \"scaleX(\".concat(type ? 1 : 1.2, \") scaleY(\").concat(type ? 1 : 1.2, \")\")\n      };\n    },\n    // 内置动画类型与实际动画对应字典\n    animationMode: function animationMode() {\n      return {\n        fade: 'opacity',\n        'slide-top': 'translateY',\n        'slide-right': 'translateX',\n        'slide-bottom': 'translateY',\n        'slide-left': 'translateX',\n        'zoom-in': 'scale',\n        'zoom-out': 'scale'\n      };\n    },\n    // 驼峰转中横线\n    toLine: function toLine(name) {\n      return name.replace(/([A-Z])/g, '-$1').toLowerCase();\n    }\n  }\n};\nexports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXRyYW5zaXRpb24vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWUiXSwibmFtZXMiOlsibmFtZSIsImVtaXRzIiwicHJvcHMiLCJzaG93IiwidHlwZSIsImRlZmF1bHQiLCJtb2RlQ2xhc3MiLCJkdXJhdGlvbiIsInN0eWxlcyIsImN1c3RvbUNsYXNzIiwiZGF0YSIsImlzU2hvdyIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJhbmltYXRpb25EYXRhIiwiZHVyYXRpb25UaW1lIiwiY29uZmlnIiwid2F0Y2giLCJoYW5kbGVyIiwiaW1tZWRpYXRlIiwiY29tcHV0ZWQiLCJzdHlsZXNPYmplY3QiLCJ0cmFuc2Zvcm1TdHlsZXMiLCJjcmVhdGVkIiwidGltaW5nRnVuY3Rpb24iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJkZWxheSIsIm1ldGhvZHMiLCJpbml0Iiwib25DbGljayIsImRldGFpbCIsInN0ZXAiLCJydW4iLCJvcGVuIiwiY2xlYXJUaW1lb3V0IiwiY2xvc2UiLCJzdHlsZUluaXQiLCJidWlsZFN0eWxlIiwidHJhbmZyb21Jbml0IiwiYW5pTnVtIiwiYnVpbGRUcmFuZnJvbSIsImFuaW1hdGlvblR5cGUiLCJmYWRlIiwiYW5pbWF0aW9uTW9kZSIsInRvTGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkEsZ0JBZ0JBO0VBQ0FBO0VBQ0FDO0VBQ0FDO0lBQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7SUFDQUM7TUFDQUY7TUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQUU7TUFDQUg7TUFDQUM7SUFDQTtJQUNBRztNQUNBSjtNQUNBQztRQUNBO01BQ0E7SUFDQTtJQUNBSTtNQUNBTDtNQUNBQztJQUNBO0VBQ0E7RUFDQUs7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQWQ7TUFDQWU7UUFDQTtVQUNBO1FBQ0E7VUFDQTtVQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQSw2Q0FDQTtRQUNBO01BQUEsRUFDQTtNQUNBO01BQ0E7UUFDQTtRQUNBVDtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FVO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtNQUNBaEI7TUFDQWlCO01BQ0FDO01BQ0FDO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQUE7TUFDQTtRQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7UUFDQUM7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQUM7TUFBQTtNQUNBO01BQ0E7UUFDQTtVQUNBO1lBQUE7WUFDQTtVQUNBO1lBQ0E7VUFDQTtRQUNBO1VBQ0E7UUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBQztNQUNBO01BQ0E7TUFDQTtRQUFBckI7UUFBQUQ7TUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQTtRQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7WUFDQWtCO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBSztNQUFBO01BQ0E7TUFDQSx3QkFDQUosT0FDQUM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtVQUFBbkI7VUFBQUQ7UUFDQTtRQUNBO1FBQ0E7VUFDQWtCO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQU07TUFBQTtNQUNBO1FBQ0F4QjtNQUNBO01BQ0E7UUFDQTtVQUNBSjtRQUNBO1VBQ0FBO1FBQ0E7TUFDQTtNQUNBO1FBQ0E2QjtNQUNBO1FBQ0E7VUFDQUE7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTtRQUNBO1FBQ0E7VUFDQUM7UUFDQTtVQUNBQTtVQUNBO1lBQ0FBO1VBQ0E7VUFDQTtZQUNBQTtVQUNBO1VBQ0E7WUFDQUE7VUFDQTtVQUNBO1lBQ0FBO1VBQ0E7UUFDQTtRQUNBO01BQ0E7TUFDQTtRQUNBQztNQUNBO1FBQ0E7VUFDQUE7UUFDQTtNQUNBO01BRUE7SUFDQTtJQUNBQztNQUNBO1FBQ0FDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7UUFDQUQ7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUU7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDRCIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IHYtaWY9XCJpc1Nob3dcIiByZWY9XCJhbmlcIiA6YW5pbWF0aW9uPVwiYW5pbWF0aW9uRGF0YVwiIDpjbGFzcz1cImN1c3RvbUNsYXNzXCIgOnN0eWxlPVwidHJhbnNmb3JtU3R5bGVzXCIgQGNsaWNrPVwib25DbGlja1wiPjxzbG90Pjwvc2xvdD48L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2NyZWF0ZUFuaW1hdGlvbidcclxuXHJcbi8qKlxyXG4gKiBUcmFuc2l0aW9uIOi/h+a4oeWKqOeUu1xyXG4gKiBAZGVzY3JpcHRpb24g566A5Y2V6L+H5rih5Yqo55S757uE5Lu2XHJcbiAqIEB0dXRvcmlhbCBodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD05ODVcclxuICogQHByb3BlcnR5IHtCb29sZWFufSBzaG93ID0gW2ZhbHNlfHRydWVdIOaOp+WItue7hOS7tuaYvuekuuaIlumakOiXj1xyXG4gKiBAcHJvcGVydHkge0FycmF5fFN0cmluZ30gbW9kZUNsYXNzID0gW2ZhZGV8c2xpZGUtdG9wfHNsaWRlLXJpZ2h0fHNsaWRlLWJvdHRvbXxzbGlkZS1sZWZ0fHpvb20taW58em9vbS1vdXRdIOi/h+a4oeWKqOeUu+exu+Wei1xyXG4gKiAgQHZhbHVlIGZhZGUg5riQ6ZqQ5riQ5Ye66L+H5rihXHJcbiAqICBAdmFsdWUgc2xpZGUtdG9wIOeUseS4iuiHs+S4i+i/h+a4oVxyXG4gKiAgQHZhbHVlIHNsaWRlLXJpZ2h0IOeUseWPs+iHs+W3pui/h+a4oVxyXG4gKiAgQHZhbHVlIHNsaWRlLWJvdHRvbSDnlLHkuIvoh7PkuIrov4fmuKFcclxuICogIEB2YWx1ZSBzbGlkZS1sZWZ0IOeUseW3puiHs+WPs+i/h+a4oVxyXG4gKiAgQHZhbHVlIHpvb20taW4g55Sx5bCP5Yiw5aSn6L+H5rihXHJcbiAqICBAdmFsdWUgem9vbS1vdXQg55Sx5aSn5Yiw5bCP6L+H5rihXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBkdXJhdGlvbiDov4fmuKHliqjnlLvmjIHnu63ml7bpl7RcclxuICogQHByb3BlcnR5IHtPYmplY3R9IHN0eWxlcyDnu4Tku7bmoLflvI/vvIzlkIwgY3NzIOagt+W8j++8jOazqOaEj+W4puKAmS3igJjov57mjqXnrKbnmoTlsZ7mgKfpnIDopoHkvb/nlKjlsI/pqbzls7Dlhpnms5XlpoLvvJpgYmFja2dyb3VuZENvbG9yOnJlZGBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAndW5pVHJhbnNpdGlvbicsXHJcblx0ZW1pdHM6WydjbGljaycsJ2NoYW5nZSddLFxyXG5cdHByb3BzOiB7XHJcblx0XHRzaG93OiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0bW9kZUNsYXNzOiB7XHJcblx0XHRcdHR5cGU6IFtBcnJheSwgU3RyaW5nXSxcclxuXHRcdFx0ZGVmYXVsdCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gJ2ZhZGUnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkdXJhdGlvbjoge1xyXG5cdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdGRlZmF1bHQ6IDMwMFxyXG5cdFx0fSxcclxuXHRcdHN0eWxlczoge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHt9XHJcblx0XHRcdH1cclxuXHRcdH0sXG5cdFx0Y3VzdG9tQ2xhc3M6e1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogJydcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0aXNTaG93OiBmYWxzZSxcclxuXHRcdFx0dHJhbnNmb3JtOiAnJyxcclxuXHRcdFx0b3BhY2l0eTogMSxcclxuXHRcdFx0YW5pbWF0aW9uRGF0YToge30sXHJcblx0XHRcdGR1cmF0aW9uVGltZTogMzAwLFxyXG5cdFx0XHRjb25maWc6IHt9XHJcblx0XHR9XHJcblx0fSxcclxuXHR3YXRjaDoge1xyXG5cdFx0c2hvdzoge1xyXG5cdFx0XHRoYW5kbGVyKG5ld1ZhbCkge1xyXG5cdFx0XHRcdGlmIChuZXdWYWwpIHtcclxuXHRcdFx0XHRcdHRoaXMub3BlbigpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIOmBv+WFjeS4iuadpeWwseaJp+ihjCBjbG9zZSzlr7zoh7TliqjnlLvplJnkubFcclxuXHRcdFx0XHRcdGlmICh0aGlzLmlzU2hvdykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNsb3NlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdC8vIOeUn+aIkOagt+W8j+aVsOaNrlxyXG5cdFx0c3R5bGVzT2JqZWN0KCkge1xyXG5cdFx0XHRsZXQgc3R5bGVzID0ge1xyXG5cdFx0XHRcdC4uLnRoaXMuc3R5bGVzLFxyXG5cdFx0XHRcdCd0cmFuc2l0aW9uLWR1cmF0aW9uJzogdGhpcy5kdXJhdGlvbiAvIDEwMDAgKyAncydcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgdHJhbnNmb3JtID0gJydcclxuXHRcdFx0Zm9yIChsZXQgaSBpbiBzdHlsZXMpIHtcclxuXHRcdFx0XHRsZXQgbGluZSA9IHRoaXMudG9MaW5lKGkpXHJcblx0XHRcdFx0dHJhbnNmb3JtICs9IGxpbmUgKyAnOicgKyBzdHlsZXNbaV0gKyAnOydcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHJhbnNmb3JtXHJcblx0XHR9LFxyXG5cdFx0Ly8g5Yid5aeL5YyW5Yqo55S75p2h5Lu2XHJcblx0XHR0cmFuc2Zvcm1TdHlsZXMoKSB7XHJcblx0XHRcdHJldHVybiAndHJhbnNmb3JtOicgKyB0aGlzLnRyYW5zZm9ybSArICc7JyArICdvcGFjaXR5OicgKyB0aGlzLm9wYWNpdHkgKyAnOycgKyB0aGlzLnN0eWxlc09iamVjdFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdC8vIOWKqOeUu+m7mOiupOmFjee9rlxyXG5cdFx0dGhpcy5jb25maWcgPSB7XHJcblx0XHRcdGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxyXG5cdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxyXG5cdFx0XHR0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlJyxcclxuXHRcdFx0ZGVsYXk6IDBcclxuXHRcdH1cclxuXHRcdHRoaXMuZHVyYXRpb25UaW1lID0gdGhpcy5kdXJhdGlvblxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0LyoqXHJcblx0XHQgKiAgcmVmIOinpuWPkSDliJ3lp4vljJbliqjnlLtcclxuXHRcdCAqL1xyXG5cdFx0aW5pdChvYmogPSB7fSkge1xyXG5cdFx0XHRpZiAob2JqLmR1cmF0aW9uKSB7XHJcblx0XHRcdFx0dGhpcy5kdXJhdGlvblRpbWUgPSBvYmouZHVyYXRpb25cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbihPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBvYmopLHRoaXMpXHJcblx0XHR9LFxyXG5cdFx0LyoqXHJcblx0XHQgKiDngrnlh7vnu4Tku7bop6blj5Hlm57osINcclxuXHRcdCAqL1xyXG5cdFx0b25DbGljaygpIHtcclxuXHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snLCB7XHJcblx0XHRcdFx0ZGV0YWlsOiB0aGlzLmlzU2hvd1xyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICogcmVmIOinpuWPkSDliqjnlLvliIbnu4RcclxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuXHRcdCAqL1xyXG5cdFx0c3RlcChvYmosIGNvbmZpZyA9IHt9KSB7XHJcblx0XHRcdGlmICghdGhpcy5hbmltYXRpb24pIHJldHVyblxuXHRcdFx0Zm9yIChsZXQgaSBpbiBvYmopIHtcclxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmKHR5cGVvZiBvYmpbaV0gPT09ICdvYmplY3QnKXtcblx0XHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uW2ldKC4uLm9ialtpXSlcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uW2ldKG9ialtpXSlcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihg5pa55rOVICR7aX0g5LiN5a2Y5ZyoYClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5hbmltYXRpb24uc3RlcChjb25maWcpXG5cdFx0XHRyZXR1cm4gdGhpc1xyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICogIHJlZiDop6blj5Eg5omn6KGM5Yqo55S7XHJcblx0XHQgKi9cclxuXHRcdHJ1bihmbikge1xyXG5cdFx0XHRpZiAoIXRoaXMuYW5pbWF0aW9uKSByZXR1cm5cclxuXHRcdFx0dGhpcy5hbmltYXRpb24ucnVuKGZuKVxyXG5cdFx0fSxcclxuXHRcdC8vIOW8gOWni+i/h+W6puWKqOeUu1xyXG5cdFx0b3BlbigpIHtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXHJcblx0XHRcdHRoaXMudHJhbnNmb3JtID0gJydcclxuXHRcdFx0dGhpcy5pc1Nob3cgPSB0cnVlXHJcblx0XHRcdGxldCB7IG9wYWNpdHksIHRyYW5zZm9ybSB9ID0gdGhpcy5zdHlsZUluaXQoZmFsc2UpXHJcblx0XHRcdGlmICh0eXBlb2Ygb3BhY2l0eSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHR0aGlzLm9wYWNpdHkgPSBvcGFjaXR5XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cclxuXHRcdFx0Ly8g56Gu5L+d5Yqo5oCB5qC35byP5bey57uP55Sf5pWI5ZCO77yM5omn6KGM5Yqo55S777yM5aaC5p6c5LiN5YqgIG5leHRUaWNrIO+8jOS8muWvvOiHtCB3eCDliqjnlLvmiafooYzlvILluLhcclxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFRPRE8g5a6a5pe25Zmo5L+d6K+B5Yqo55S75a6M5YWo5omn6KGM77yM55uu5YmN5pyJ5Lqb6Zeu6aKY77yM5ZCO6Z2i5Lya5Y+W5raI5a6a5pe25ZmoXHJcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5hbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24odGhpcy5jb25maWcsIHRoaXMpXHJcblx0XHRcdFx0XHR0aGlzLnRyYW5mcm9tSW5pdChmYWxzZSkuc3RlcCgpXHJcblx0XHRcdFx0XHR0aGlzLmFuaW1hdGlvbi5ydW4oKVxyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xyXG5cdFx0XHRcdFx0XHRkZXRhaWw6IHRoaXMuaXNTaG93XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0sIDIwKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdC8vIOWFs+mXrei/h+W6puWKqOeUu1xyXG5cdFx0Y2xvc2UodHlwZSkge1xyXG5cdFx0XHRpZiAoIXRoaXMuYW5pbWF0aW9uKSByZXR1cm5cclxuXHRcdFx0dGhpcy50cmFuZnJvbUluaXQodHJ1ZSlcclxuXHRcdFx0XHQuc3RlcCgpXHJcblx0XHRcdFx0LnJ1bigoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmlzU2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0XHR0aGlzLmFuaW1hdGlvbkRhdGEgPSBudWxsXHJcblx0XHRcdFx0XHR0aGlzLmFuaW1hdGlvbiA9IG51bGxcclxuXHRcdFx0XHRcdGxldCB7IG9wYWNpdHksIHRyYW5zZm9ybSB9ID0gdGhpcy5zdHlsZUluaXQoZmFsc2UpXHJcblx0XHRcdFx0XHR0aGlzLm9wYWNpdHkgPSBvcGFjaXR5IHx8IDFcclxuXHRcdFx0XHRcdHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtXHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XHJcblx0XHRcdFx0XHRcdGRldGFpbDogdGhpcy5pc1Nob3dcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHQvLyDlpITnkIbliqjnlLvlvIDlp4vliY3nmoTpu5jorqTmoLflvI9cclxuXHRcdHN0eWxlSW5pdCh0eXBlKSB7XHJcblx0XHRcdGxldCBzdHlsZXMgPSB7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiAnJ1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBidWlsZFN0eWxlID0gKHR5cGUsIG1vZGUpID0+IHtcclxuXHRcdFx0XHRpZiAobW9kZSA9PT0gJ2ZhZGUnKSB7XHJcblx0XHRcdFx0XHRzdHlsZXMub3BhY2l0eSA9IHRoaXMuYW5pbWF0aW9uVHlwZSh0eXBlKVttb2RlXVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IHRoaXMuYW5pbWF0aW9uVHlwZSh0eXBlKVttb2RlXSArICcgJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMubW9kZUNsYXNzID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdGJ1aWxkU3R5bGUodHlwZSwgdGhpcy5tb2RlQ2xhc3MpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5tb2RlQ2xhc3MuZm9yRWFjaChtb2RlID0+IHtcclxuXHRcdFx0XHRcdGJ1aWxkU3R5bGUodHlwZSwgbW9kZSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBzdHlsZXNcclxuXHRcdH0sXHJcblx0XHQvLyDlpITnkIblhoXnva7nu4TlkIjliqjnlLtcclxuXHRcdHRyYW5mcm9tSW5pdCh0eXBlKSB7XHJcblx0XHRcdGxldCBidWlsZFRyYW5mcm9tID0gKHR5cGUsIG1vZGUpID0+IHtcclxuXHRcdFx0XHRsZXQgYW5pTnVtID0gbnVsbFxyXG5cdFx0XHRcdGlmIChtb2RlID09PSAnZmFkZScpIHtcclxuXHRcdFx0XHRcdGFuaU51bSA9IHR5cGUgPyAwIDogMVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gJy0xMDAlJyA6ICcwJ1xyXG5cdFx0XHRcdFx0aWYgKG1vZGUgPT09ICd6b29tLWluJykge1xyXG5cdFx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gMC44IDogMVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKG1vZGUgPT09ICd6b29tLW91dCcpIHtcclxuXHRcdFx0XHRcdFx0YW5pTnVtID0gdHlwZSA/IDEuMiA6IDFcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChtb2RlID09PSAnc2xpZGUtcmlnaHQnKSB7XHJcblx0XHRcdFx0XHRcdGFuaU51bSA9IHR5cGUgPyAnMTAwJScgOiAnMCdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChtb2RlID09PSAnc2xpZGUtYm90dG9tJykge1xyXG5cdFx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gJzEwMCUnIDogJzAnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuYW5pbWF0aW9uW3RoaXMuYW5pbWF0aW9uTW9kZSgpW21vZGVdXShhbmlOdW0pXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLm1vZGVDbGFzcyA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRidWlsZFRyYW5mcm9tKHR5cGUsIHRoaXMubW9kZUNsYXNzKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMubW9kZUNsYXNzLmZvckVhY2gobW9kZSA9PiB7XHJcblx0XHRcdFx0XHRidWlsZFRyYW5mcm9tKHR5cGUsIG1vZGUpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXMuYW5pbWF0aW9uXHJcblx0XHR9LFxyXG5cdFx0YW5pbWF0aW9uVHlwZSh0eXBlKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZmFkZTogdHlwZSA/IDEgOiAwLFxyXG5cdFx0XHRcdCdzbGlkZS10b3AnOiBgdHJhbnNsYXRlWSgke3R5cGUgPyAnMCcgOiAnLTEwMCUnfSlgLFxyXG5cdFx0XHRcdCdzbGlkZS1yaWdodCc6IGB0cmFuc2xhdGVYKCR7dHlwZSA/ICcwJyA6ICcxMDAlJ30pYCxcclxuXHRcdFx0XHQnc2xpZGUtYm90dG9tJzogYHRyYW5zbGF0ZVkoJHt0eXBlID8gJzAnIDogJzEwMCUnfSlgLFxyXG5cdFx0XHRcdCdzbGlkZS1sZWZ0JzogYHRyYW5zbGF0ZVgoJHt0eXBlID8gJzAnIDogJy0xMDAlJ30pYCxcclxuXHRcdFx0XHQnem9vbS1pbic6IGBzY2FsZVgoJHt0eXBlID8gMSA6IDAuOH0pIHNjYWxlWSgke3R5cGUgPyAxIDogMC44fSlgLFxyXG5cdFx0XHRcdCd6b29tLW91dCc6IGBzY2FsZVgoJHt0eXBlID8gMSA6IDEuMn0pIHNjYWxlWSgke3R5cGUgPyAxIDogMS4yfSlgXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvLyDlhoXnva7liqjnlLvnsbvlnovkuI7lrp7pmYXliqjnlLvlr7nlupTlrZflhbhcclxuXHRcdGFuaW1hdGlvbk1vZGUoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZmFkZTogJ29wYWNpdHknLFxyXG5cdFx0XHRcdCdzbGlkZS10b3AnOiAndHJhbnNsYXRlWScsXHJcblx0XHRcdFx0J3NsaWRlLXJpZ2h0JzogJ3RyYW5zbGF0ZVgnLFxyXG5cdFx0XHRcdCdzbGlkZS1ib3R0b20nOiAndHJhbnNsYXRlWScsXHJcblx0XHRcdFx0J3NsaWRlLWxlZnQnOiAndHJhbnNsYXRlWCcsXHJcblx0XHRcdFx0J3pvb20taW4nOiAnc2NhbGUnLFxyXG5cdFx0XHRcdCd6b29tLW91dCc6ICdzY2FsZSdcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vIOmpvOWzsOi9rOS4reaoque6v1xyXG5cdFx0dG9MaW5lKG5hbWUpIHtcclxuXHRcdFx0cmV0dXJuIG5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCAnLSQxJykudG9Mb3dlckNhc2UoKVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 19 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 20);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 22);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 23);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 24);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 20 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 21);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 21 */
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
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 22 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 23 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 21);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 24 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 25 */
/*!******************************************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createAnimation = createAnimation;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 26));\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 27));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n// const defaultOption = {\n// \tduration: 300,\n// \ttimingFunction: 'linear',\n// \tdelay: 0,\n// \ttransformOrigin: '50% 50% 0'\n// }\nvar MPAnimation = /*#__PURE__*/function () {\n  function MPAnimation(options, _this) {\n    (0, _classCallCheck2.default)(this, MPAnimation);\n    this.options = options;\n    this.animation = uni.createAnimation(options);\n    this.currentStepAnimates = {};\n    this.next = 0;\n    this.$ = _this;\n  }\n  (0, _createClass2.default)(MPAnimation, [{\n    key: \"_nvuePushAnimates\",\n    value: function _nvuePushAnimates(type, args) {\n      var aniObj = this.currentStepAnimates[this.next];\n      var styles = {};\n      if (!aniObj) {\n        styles = {\n          styles: {},\n          config: {}\n        };\n      } else {\n        styles = aniObj;\n      }\n      if (animateTypes1.includes(type)) {\n        if (!styles.styles.transform) {\n          styles.styles.transform = '';\n        }\n        var unit = '';\n        if (type === 'rotate') {\n          unit = 'deg';\n        }\n        styles.styles.transform += \"\".concat(type, \"(\").concat(args + unit, \") \");\n      } else {\n        styles.styles[type] = \"\".concat(args);\n      }\n      this.currentStepAnimates[this.next] = styles;\n    }\n  }, {\n    key: \"_animateRun\",\n    value: function _animateRun() {\n      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var ref = this.$.$refs['ani'].ref;\n      if (!ref) return;\n      return new Promise(function (resolve, reject) {\n        nvueAnimation.transition(ref, _objectSpread({\n          styles: styles\n        }, config), function (res) {\n          resolve();\n        });\n      });\n    }\n  }, {\n    key: \"_nvueNextAnimate\",\n    value: function _nvueNextAnimate(animates) {\n      var _this2 = this;\n      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      var fn = arguments.length > 2 ? arguments[2] : undefined;\n      var obj = animates[step];\n      if (obj) {\n        var styles = obj.styles,\n          config = obj.config;\n        this._animateRun(styles, config).then(function () {\n          step += 1;\n          _this2._nvueNextAnimate(animates, step, fn);\n        });\n      } else {\n        this.currentStepAnimates = {};\n        typeof fn === 'function' && fn();\n        this.isEnd = true;\n      }\n    }\n  }, {\n    key: \"step\",\n    value: function step() {\n      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      this.animation.step(config);\n      return this;\n    }\n  }, {\n    key: \"run\",\n    value: function run(fn) {\n      this.$.animationData = this.animation.export();\n      this.$.timer = setTimeout(function () {\n        typeof fn === 'function' && fn();\n      }, this.$.durationTime);\n    }\n  }]);\n  return MPAnimation;\n}();\nvar animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY', 'translateZ'];\nvar animateTypes2 = ['opacity', 'backgroundColor'];\nvar animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];\nanimateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {\n  MPAnimation.prototype[type] = function () {\n    var _this$animation;\n    (_this$animation = this.animation)[type].apply(_this$animation, arguments);\n    return this;\n  };\n});\nfunction createAnimation(option, _this) {\n  if (!_this) return;\n  clearTimeout(_this.timer);\n  return new MPAnimation(option, _this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXRyYW5zaXRpb24vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi9jcmVhdGVBbmltYXRpb24uanMiXSwibmFtZXMiOlsiTVBBbmltYXRpb24iLCJvcHRpb25zIiwiX3RoaXMiLCJhbmltYXRpb24iLCJ1bmkiLCJjcmVhdGVBbmltYXRpb24iLCJjdXJyZW50U3RlcEFuaW1hdGVzIiwibmV4dCIsIiQiLCJ0eXBlIiwiYXJncyIsImFuaU9iaiIsInN0eWxlcyIsImNvbmZpZyIsImFuaW1hdGVUeXBlczEiLCJpbmNsdWRlcyIsInRyYW5zZm9ybSIsInVuaXQiLCJyZWYiLCIkcmVmcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibnZ1ZUFuaW1hdGlvbiIsInRyYW5zaXRpb24iLCJyZXMiLCJhbmltYXRlcyIsInN0ZXAiLCJmbiIsIm9iaiIsIl9hbmltYXRlUnVuIiwidGhlbiIsIl9udnVlTmV4dEFuaW1hdGUiLCJpc0VuZCIsImFuaW1hdGlvbkRhdGEiLCJleHBvcnQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJkdXJhdGlvblRpbWUiLCJhbmltYXRlVHlwZXMyIiwiYW5pbWF0ZVR5cGVzMyIsImNvbmNhdCIsImZvckVhY2giLCJwcm90b3R5cGUiLCJvcHRpb24iLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLElBSU1BLFdBQVc7RUFDaEIscUJBQVlDLE9BQU8sRUFBRUMsS0FBSyxFQUFFO0lBQUE7SUFDM0IsSUFBSSxDQUFDRCxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDRSxTQUFTLEdBQUdDLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDSixPQUFPLENBQUM7SUFDN0MsSUFBSSxDQUFDSyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7SUFDN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUcsQ0FBQztJQUNiLElBQUksQ0FBQ0Ms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Q0FBQ3VDLE1BQU0sRUFBRTFDLEtBQUssRUFBRTtFQUM5QyxJQUFHLENBQUNBLEtBQUssRUFBRTtFQUNYMkMsWUFBWSxDQUFDM0MsS0FBSyxDQUFDa0MsS0FBSyxDQUFDO0VBQ3pCLE9BQU8sSUFBSXBDLFdBQVcsQ0FBQzRDLE1BQU0sRUFBRTFDLEtBQUssQ0FBQztBQUN0QyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGRlZmF1bHRPcHRpb24gPSB7XHJcbi8vIFx0ZHVyYXRpb246IDMwMCxcclxuLy8gXHR0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXHJcbi8vIFx0ZGVsYXk6IDAsXHJcbi8vIFx0dHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJSAwJ1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbmNsYXNzIE1QQW5pbWF0aW9uIHtcclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCBfdGhpcykge1xyXG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9uc1xyXG5cdFx0dGhpcy5hbmltYXRpb24gPSB1bmkuY3JlYXRlQW5pbWF0aW9uKG9wdGlvbnMpXHJcblx0XHR0aGlzLmN1cnJlbnRTdGVwQW5pbWF0ZXMgPSB7fVxyXG5cdFx0dGhpcy5uZXh0ID0gMFxyXG5cdFx0dGhpcy4kID0gX3RoaXNcclxuXHJcblx0fVxyXG5cclxuXHRfbnZ1ZVB1c2hBbmltYXRlcyh0eXBlLCBhcmdzKSB7XHJcblx0XHRsZXQgYW5pT2JqID0gdGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzW3RoaXMubmV4dF1cclxuXHRcdGxldCBzdHlsZXMgPSB7fVxyXG5cdFx0aWYgKCFhbmlPYmopIHtcclxuXHRcdFx0c3R5bGVzID0ge1xyXG5cdFx0XHRcdHN0eWxlczoge30sXHJcblx0XHRcdFx0Y29uZmlnOiB7fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZXMgPSBhbmlPYmpcclxuXHRcdH1cclxuXHRcdGlmIChhbmltYXRlVHlwZXMxLmluY2x1ZGVzKHR5cGUpKSB7XHJcblx0XHRcdGlmICghc3R5bGVzLnN0eWxlcy50cmFuc2Zvcm0pIHtcclxuXHRcdFx0XHRzdHlsZXMuc3R5bGVzLnRyYW5zZm9ybSA9ICcnXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHVuaXQgPSAnJ1xyXG5cdFx0XHRpZih0eXBlID09PSAncm90YXRlJyl7XHJcblx0XHRcdFx0dW5pdCA9ICdkZWcnXHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzLnN0eWxlcy50cmFuc2Zvcm0gKz0gYCR7dHlwZX0oJHthcmdzK3VuaXR9KSBgXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZXMuc3R5bGVzW3R5cGVdID0gYCR7YXJnc31gXHJcblx0XHR9XHJcblx0XHR0aGlzLmN1cnJlbnRTdGVwQW5pbWF0ZXNbdGhpcy5uZXh0XSA9IHN0eWxlc1xyXG5cdH1cclxuXHRfYW5pbWF0ZVJ1bihzdHlsZXMgPSB7fSwgY29uZmlnID0ge30pIHtcclxuXHRcdGxldCByZWYgPSB0aGlzLiQuJHJlZnNbJ2FuaSddLnJlZlxyXG5cdFx0aWYgKCFyZWYpIHJldHVyblxyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0bnZ1ZUFuaW1hdGlvbi50cmFuc2l0aW9uKHJlZiwge1xyXG5cdFx0XHRcdHN0eWxlcyxcclxuXHRcdFx0XHQuLi5jb25maWdcclxuXHRcdFx0fSwgcmVzID0+IHtcclxuXHRcdFx0XHRyZXNvbHZlKClcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRfbnZ1ZU5leHRBbmltYXRlKGFuaW1hdGVzLCBzdGVwID0gMCwgZm4pIHtcclxuXHRcdGxldCBvYmogPSBhbmltYXRlc1tzdGVwXVxyXG5cdFx0aWYgKG9iaikge1xyXG5cdFx0XHRsZXQge1xyXG5cdFx0XHRcdHN0eWxlcyxcclxuXHRcdFx0XHRjb25maWdcclxuXHRcdFx0fSA9IG9ialxyXG5cdFx0XHR0aGlzLl9hbmltYXRlUnVuKHN0eWxlcywgY29uZmlnKS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRzdGVwICs9IDFcclxuXHRcdFx0XHR0aGlzLl9udnVlTmV4dEFuaW1hdGUoYW5pbWF0ZXMsIHN0ZXAsIGZuKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzID0ge31cclxuXHRcdFx0dHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIGZuKClcclxuXHRcdFx0dGhpcy5pc0VuZCA9IHRydWVcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0ZXAoY29uZmlnID0ge30pIHtcclxuXHJcblx0XHR0aGlzLmFuaW1hdGlvbi5zdGVwKGNvbmZpZylcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRcdHJldHVybiB0aGlzXHJcblx0fVxyXG5cclxuXHRydW4oZm4pIHtcclxuXHJcblx0XHR0aGlzLiQuYW5pbWF0aW9uRGF0YSA9IHRoaXMuYW5pbWF0aW9uLmV4cG9ydCgpXHJcblx0XHR0aGlzLiQudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIGZuKClcclxuXHRcdH0sIHRoaXMuJC5kdXJhdGlvblRpbWUpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHR9XHJcbn1cclxuXHJcblxyXG5jb25zdCBhbmltYXRlVHlwZXMxID0gWydtYXRyaXgnLCAnbWF0cml4M2QnLCAncm90YXRlJywgJ3JvdGF0ZTNkJywgJ3JvdGF0ZVgnLCAncm90YXRlWScsICdyb3RhdGVaJywgJ3NjYWxlJywgJ3NjYWxlM2QnLFxyXG5cdCdzY2FsZVgnLCAnc2NhbGVZJywgJ3NjYWxlWicsICdza2V3JywgJ3NrZXdYJywgJ3NrZXdZJywgJ3RyYW5zbGF0ZScsICd0cmFuc2xhdGUzZCcsICd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLFxyXG5cdCd0cmFuc2xhdGVaJ1xyXG5dXHJcbmNvbnN0IGFuaW1hdGVUeXBlczIgPSBbJ29wYWNpdHknLCAnYmFja2dyb3VuZENvbG9yJ11cclxuY29uc3QgYW5pbWF0ZVR5cGVzMyA9IFsnd2lkdGgnLCAnaGVpZ2h0JywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddXHJcbmFuaW1hdGVUeXBlczEuY29uY2F0KGFuaW1hdGVUeXBlczIsIGFuaW1hdGVUeXBlczMpLmZvckVhY2godHlwZSA9PiB7XHJcblx0TVBBbmltYXRpb24ucHJvdG90eXBlW3R5cGVdID0gZnVuY3Rpb24oLi4uYXJncykge1xyXG5cclxuXHRcdHRoaXMuYW5pbWF0aW9uW3R5cGVdKC4uLmFyZ3MpXHJcblxyXG5cclxuXHJcblxyXG5cdFx0cmV0dXJuIHRoaXNcclxuXHR9XHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5pbWF0aW9uKG9wdGlvbiwgX3RoaXMpIHtcclxuXHRpZighX3RoaXMpIHJldHVyblxyXG5cdGNsZWFyVGltZW91dChfdGhpcy50aW1lcilcclxuXHRyZXR1cm4gbmV3IE1QQW5pbWF0aW9uKG9wdGlvbiwgX3RoaXMpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
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
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 27 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 28 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 29 */
/*!****************************************************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=script&lang=js& */ 30);\n/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFtQixDQUFnQix1bUJBQUcsRUFBQyIsImZpbGUiOiIyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSGJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSGJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vSGJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hidWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0hidWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hidWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uL0hidWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IYnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Develop/ASIA-POTASH/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/**\n * PopUp 弹出层\n * @description 弹出层组件，为了解决遮罩弹层的问题\n * @tutorial https://ext.dcloud.net.cn/plugin?id=329\n * @property {String} type = [top|center|bottom|left|right|message|dialog|share] 弹出方式\n * \t@value top 顶部弹出\n * \t@value center 中间弹出\n * \t@value bottom 底部弹出\n * \t@value left\t\t左侧弹出\n * \t@value right  右侧弹出\n * \t@value message 消息提示\n * \t@value dialog 对话框\n * \t@value share 底部分享示例\n * @property {Boolean} animation = [true|false] 是否开启动画\n * @property {Boolean} maskClick = [true|false] 蒙版点击是否关闭弹窗(废弃)\n * @property {Boolean} isMaskClick = [true|false] 蒙版点击是否关闭弹窗\n * @property {String}  backgroundColor 主窗口背景色\n * @property {String}  maskBackgroundColor 蒙版颜色\n * @property {Boolean} safeArea\t\t   是否适配底部安全区\n * @event {Function} change 打开关闭弹窗触发，e={show: false}\n * @event {Function} maskClick 点击遮罩触发\n */\nvar _default = {\n  name: 'uniPopup',\n  components: {},\n  emits: ['change', 'maskClick'],\n  props: {\n    // 开启动画\n    animation: {\n      type: Boolean,\n      default: true\n    },\n    // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层\n    // message: 消息提示 ; dialog : 对话框\n    type: {\n      type: String,\n      default: 'center'\n    },\n    // maskClick\n    isMaskClick: {\n      type: Boolean,\n      default: null\n    },\n    // TODO 2 个版本后废弃属性 ，使用 isMaskClick\n    maskClick: {\n      type: Boolean,\n      default: null\n    },\n    backgroundColor: {\n      type: String,\n      default: 'none'\n    },\n    safeArea: {\n      type: Boolean,\n      default: true\n    },\n    maskBackgroundColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.4)'\n    }\n  },\n  watch: {\n    /**\n     * 监听type类型\n     */\n    type: {\n      handler: function handler(type) {\n        if (!this.config[type]) return;\n        this[this.config[type]](true);\n      },\n      immediate: true\n    },\n    isDesktop: {\n      handler: function handler(newVal) {\n        if (!this.config[newVal]) return;\n        this[this.config[this.type]](true);\n      },\n      immediate: true\n    },\n    /**\n     * 监听遮罩是否可点击\n     * @param {Object} val\n     */\n    maskClick: {\n      handler: function handler(val) {\n        this.mkclick = val;\n      },\n      immediate: true\n    },\n    isMaskClick: {\n      handler: function handler(val) {\n        this.mkclick = val;\n      },\n      immediate: true\n    },\n    // H5 下禁止底部滚动\n    showPopup: function showPopup(show) {}\n  },\n  data: function data() {\n    return {\n      duration: 300,\n      ani: [],\n      showPopup: false,\n      showTrans: false,\n      popupWidth: 0,\n      popupHeight: 0,\n      config: {\n        top: 'top',\n        bottom: 'bottom',\n        center: 'center',\n        left: 'left',\n        right: 'right',\n        message: 'top',\n        dialog: 'center',\n        share: 'bottom'\n      },\n      maskClass: {\n        position: 'fixed',\n        bottom: 0,\n        top: 0,\n        left: 0,\n        right: 0,\n        backgroundColor: 'rgba(0, 0, 0, 0.4)'\n      },\n      transClass: {\n        position: 'fixed',\n        left: 0,\n        right: 0\n      },\n      maskShow: true,\n      mkclick: true,\n      popupstyle: this.isDesktop ? 'fixforpc-top' : 'top'\n    };\n  },\n  computed: {\n    isDesktop: function isDesktop() {\n      return this.popupWidth >= 500 && this.popupHeight >= 500;\n    },\n    bg: function bg() {\n      if (this.backgroundColor === '' || this.backgroundColor === 'none') {\n        return 'transparent';\n      }\n      return this.backgroundColor;\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n    var fixSize = function fixSize() {\n      var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),\n        windowWidth = _uni$getSystemInfoSyn.windowWidth,\n        windowHeight = _uni$getSystemInfoSyn.windowHeight,\n        windowTop = _uni$getSystemInfoSyn.windowTop,\n        safeArea = _uni$getSystemInfoSyn.safeArea,\n        screenHeight = _uni$getSystemInfoSyn.screenHeight,\n        safeAreaInsets = _uni$getSystemInfoSyn.safeAreaInsets;\n      _this.popupWidth = windowWidth;\n      _this.popupHeight = windowHeight + (windowTop || 0);\n      // TODO fix by mehaotian 是否适配底部安全区 ,目前微信ios 、和 app ios 计算有差异，需要框架修复\n      if (safeArea && _this.safeArea) {\n        _this.safeAreaInsets = safeAreaInsets.bottom;\n      } else {\n        _this.safeAreaInsets = 0;\n      }\n    };\n    fixSize();\n  },\n  // TODO vue2\n  destroyed: function destroyed() {\n    this.setH5Visible();\n  },\n  created: function created() {\n    // this.mkclick =  this.isMaskClick || this.maskClick\n    if (this.isMaskClick === null && this.maskClick === null) {\n      this.mkclick = true;\n    } else {\n      this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;\n    }\n    if (this.animation) {\n      this.duration = 300;\n    } else {\n      this.duration = 0;\n    }\n    // TODO 处理 message 组件生命周期异常的问题\n    this.messageChild = null;\n    // TODO 解决头条冒泡的问题\n    this.clearPropagation = false;\n    this.maskClass.backgroundColor = this.maskBackgroundColor;\n  },\n  methods: {\n    setH5Visible: function setH5Visible() {},\n    /**\n     * 公用方法，不显示遮罩层\n     */\n    closeMask: function closeMask() {\n      this.maskShow = false;\n    },\n    /**\n     * 公用方法，遮罩层禁止点击\n     */\n    disableMask: function disableMask() {\n      this.mkclick = false;\n    },\n    // TODO nvue 取消冒泡\n    clear: function clear(e) {\n      e.stopPropagation();\n      this.clearPropagation = true;\n    },\n    open: function open(direction) {\n      // fix by mehaotian 处理快速打开关闭的情况\n      if (this.showPopup) {\n        return;\n      }\n      var innerType = ['top', 'center', 'bottom', 'left', 'right', 'message', 'dialog', 'share'];\n      if (!(direction && innerType.indexOf(direction) !== -1)) {\n        direction = this.type;\n      }\n      if (!this.config[direction]) {\n        __f__(\"error\", '缺少类型：', direction, \" at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:279\");\n        return;\n      }\n      this[this.config[direction]]();\n      this.$emit('change', {\n        show: true,\n        type: direction\n      });\n    },\n    close: function close(type) {\n      var _this2 = this;\n      this.showTrans = false;\n      this.$emit('change', {\n        show: false,\n        type: this.type\n      });\n      clearTimeout(this.timer);\n      // // 自定义关闭事件\n      // this.customOpen && this.customClose()\n      this.timer = setTimeout(function () {\n        _this2.showPopup = false;\n      }, 300);\n    },\n    // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容\n    touchstart: function touchstart() {\n      this.clearPropagation = false;\n    },\n    onTap: function onTap() {\n      if (this.clearPropagation) {\n        // fix by mehaotian 兼容 nvue\n        this.clearPropagation = false;\n        return;\n      }\n      this.$emit('maskClick');\n      if (!this.mkclick) return;\n      this.close();\n    },\n    /**\n     * 顶部弹出样式处理\n     */\n    top: function top(type) {\n      var _this3 = this;\n      this.popupstyle = this.isDesktop ? 'fixforpc-top' : 'top';\n      this.ani = ['slide-top'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        right: 0,\n        backgroundColor: this.bg\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n      this.$nextTick(function () {\n        if (_this3.messageChild && _this3.type === 'message') {\n          _this3.messageChild.timerClose();\n        }\n      });\n    },\n    /**\n     * 底部弹出样式处理\n     */\n    bottom: function bottom(type) {\n      this.popupstyle = 'bottom';\n      this.ani = ['slide-bottom'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        right: 0,\n        bottom: 0,\n        paddingBottom: this.safeAreaInsets + 'px',\n        backgroundColor: this.bg\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    /**\n     * 中间弹出样式处理\n     */\n    center: function center(type) {\n      this.popupstyle = 'center';\n      this.ani = ['zoom-out', 'fade'];\n      this.transClass = {\n        position: 'fixed',\n        display: 'flex',\n        flexDirection: 'column',\n        bottom: 0,\n        left: 0,\n        right: 0,\n        top: 0,\n        justifyContent: 'center',\n        alignItems: 'center'\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    left: function left(type) {\n      this.popupstyle = 'left';\n      this.ani = ['slide-left'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        bottom: 0,\n        top: 0,\n        backgroundColor: this.bg,\n        display: 'flex',\n        flexDirection: 'column'\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    right: function right(type) {\n      this.popupstyle = 'right';\n      this.ani = ['slide-right'];\n      this.transClass = {\n        position: 'fixed',\n        bottom: 0,\n        right: 0,\n        top: 0,\n        backgroundColor: this.bg,\n        display: 'flex',\n        flexDirection: 'column'\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cC52dWUiXSwibmFtZXMiOlsibmFtZSIsImNvbXBvbmVudHMiLCJlbWl0cyIsInByb3BzIiwiYW5pbWF0aW9uIiwidHlwZSIsImRlZmF1bHQiLCJpc01hc2tDbGljayIsIm1hc2tDbGljayIsImJhY2tncm91bmRDb2xvciIsInNhZmVBcmVhIiwibWFza0JhY2tncm91bmRDb2xvciIsIndhdGNoIiwiaGFuZGxlciIsImltbWVkaWF0ZSIsImlzRGVza3RvcCIsInNob3dQb3B1cCIsImRhdGEiLCJkdXJhdGlvbiIsImFuaSIsInNob3dUcmFucyIsInBvcHVwV2lkdGgiLCJwb3B1cEhlaWdodCIsImNvbmZpZyIsInRvcCIsImJvdHRvbSIsImNlbnRlciIsImxlZnQiLCJyaWdodCIsIm1lc3NhZ2UiLCJkaWFsb2ciLCJzaGFyZSIsIm1hc2tDbGFzcyIsInBvc2l0aW9uIiwidHJhbnNDbGFzcyIsIm1hc2tTaG93IiwibWtjbGljayIsInBvcHVwc3R5bGUiLCJjb21wdXRlZCIsImJnIiwibW91bnRlZCIsInVuaSIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0Iiwid2luZG93VG9wIiwic2NyZWVuSGVpZ2h0Iiwic2FmZUFyZWFJbnNldHMiLCJmaXhTaXplIiwiZGVzdHJveWVkIiwiY3JlYXRlZCIsIm1ldGhvZHMiLCJzZXRINVZpc2libGUiLCJjbG9zZU1hc2siLCJkaXNhYmxlTWFzayIsImNsZWFyIiwiZSIsIm9wZW4iLCJkaXJlY3Rpb24iLCJzaG93IiwiY2xvc2UiLCJjbGVhclRpbWVvdXQiLCJ0b3VjaHN0YXJ0Iiwib25UYXAiLCJwYWRkaW5nQm90dG9tIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQSxlQXVCQTtFQUNBQTtFQUNBQyxhQUlBO0VBQ0FDO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtJQUNBO0lBQ0E7SUFDQUQ7TUFDQUE7TUFDQUM7SUFDQTtJQUNBO0lBQ0FDO01BQ0FGO01BQ0FDO0lBQ0E7SUFDQTtJQUNBRTtNQUNBSDtNQUNBQztJQUNBO0lBQ0FHO01BQ0FKO01BQ0FDO0lBQ0E7SUFDQUk7TUFDQUw7TUFDQUM7SUFDQTtJQUNBSztNQUNBTjtNQUNBQztJQUNBO0VBQ0E7RUFFQU07SUFDQTtBQUNBO0FBQ0E7SUFDQVA7TUFDQVE7UUFDQTtRQUNBO01BQ0E7TUFDQUM7SUFDQTtJQUNBQztNQUNBRjtRQUNBO1FBQ0E7TUFDQTtNQUNBQztJQUNBO0lBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQU47TUFDQUs7UUFDQTtNQUNBO01BQ0FDO0lBQ0E7SUFDQVA7TUFDQU07UUFDQTtNQUNBO01BQ0FDO0lBQ0E7SUFDQTtJQUNBRSxxQ0FLQTtFQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUg7TUFDQUk7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUNBQztRQUNBQztRQUNBUjtRQUNBRDtRQUNBRztRQUNBQztRQUNBbkI7TUFDQTtNQUNBeUI7UUFDQUQ7UUFDQU47UUFDQUM7TUFDQTtNQUNBTztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQXZCO01BQ0E7SUFDQTtJQUNBd0I7TUFDQTtRQUNBO01BQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFBQTtJQUNBO01BQ0EsNEJBT0FDO1FBTkFDO1FBQ0FDO1FBQ0FDO1FBQ0FsQztRQUNBbUM7UUFDQUM7TUFFQTtNQUNBO01BQ0E7TUFDQTtRQUtBO01BRUE7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7RUFPQTtFQUVBO0VBQ0FDO0lBQ0E7RUFDQTtFQVFBQztJQUNBO0lBQ0E7TUFDQTtJQUNBO01BQ0E7SUFDQTtJQUNBO01BQ0E7SUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUMsdUNBS0E7SUFDQTtBQUNBO0FBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BRUFDO01BRUE7SUFDQTtJQUVBQztNQUNBO01BQ0E7UUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBQztNQUNBO01BQ0E7UUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0FDO1FBQ0FyRDtNQUNBO0lBQ0E7SUFDQXNEO01BQUE7TUFDQTtNQUNBO1FBQ0FEO1FBQ0FyRDtNQUNBO01BQ0F1RDtNQUNBO01BQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUVBQztNQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBdEM7TUFBQTtNQUNBO01BQ0E7TUFDQTtRQUNBUztRQUNBTjtRQUNBQztRQUNBbkI7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FnQjtNQUNBO01BQ0E7TUFDQTtRQUNBUTtRQUNBTjtRQUNBQztRQUNBSDtRQUNBc0M7UUFDQXREO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FpQjtNQUNBO01BQ0E7TUFDQTtRQUNBTztRQUVBK0I7UUFDQUM7UUFFQXhDO1FBQ0FFO1FBQ0FDO1FBQ0FKO1FBQ0EwQztRQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBeEM7TUFDQTtNQUNBO01BQ0E7UUFDQU07UUFDQU47UUFDQUY7UUFDQUQ7UUFDQWY7UUFFQXVEO1FBQ0FDO01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FyQztNQUNBO01BQ0E7TUFDQTtRQUNBSztRQUNBUjtRQUNBRztRQUNBSjtRQUNBZjtRQUVBdUQ7UUFDQUM7TUFFQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiMzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3IHYtaWY9XCJzaG93UG9wdXBcIiBjbGFzcz1cInVuaS1wb3B1cFwiIDpjbGFzcz1cIltwb3B1cHN0eWxlLCBpc0Rlc2t0b3AgPyAnZml4Zm9ycGMtei1pbmRleCcgOiAnJ11cIj5cblx0XHQ8dmlldyBAdG91Y2hzdGFydD1cInRvdWNoc3RhcnRcIj5cblx0XHRcdDx1bmktdHJhbnNpdGlvbiBrZXk9XCIxXCIgdi1pZj1cIm1hc2tTaG93XCIgbmFtZT1cIm1hc2tcIiBtb2RlLWNsYXNzPVwiZmFkZVwiIDpzdHlsZXM9XCJtYXNrQ2xhc3NcIlxuXHRcdFx0XHQ6ZHVyYXRpb249XCJkdXJhdGlvblwiIDpzaG93PVwic2hvd1RyYW5zXCIgQGNsaWNrPVwib25UYXBcIiAvPlxuXHRcdFx0PHVuaS10cmFuc2l0aW9uIGtleT1cIjJcIiA6bW9kZS1jbGFzcz1cImFuaVwiIG5hbWU9XCJjb250ZW50XCIgOnN0eWxlcz1cInRyYW5zQ2xhc3NcIiA6ZHVyYXRpb249XCJkdXJhdGlvblwiXG5cdFx0XHRcdDpzaG93PVwic2hvd1RyYW5zXCIgQGNsaWNrPVwib25UYXBcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktcG9wdXBfX3dyYXBwZXJcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogYmcgfVwiIDpjbGFzcz1cIltwb3B1cHN0eWxlXVwiIEBjbGljaz1cImNsZWFyXCI+XG5cdFx0XHRcdFx0PHNsb3QgLz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC91bmktdHJhbnNpdGlvbj5cblx0XHQ8L3ZpZXc+XG5cdFx0PCEtLSAjaWZkZWYgSDUgLS0+XG5cdFx0PGtleXByZXNzIHYtaWY9XCJtYXNrU2hvd1wiIEBlc2M9XCJvblRhcFwiIC8+XG5cdFx0PCEtLSAjZW5kaWYgLS0+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdC8vICNpZmRlZiBINVxuXHRpbXBvcnQga2V5cHJlc3MgZnJvbSAnLi9rZXlwcmVzcy5qcydcblx0Ly8gI2VuZGlmXG5cblx0LyoqXG5cdCAqIFBvcFVwIOW8ueWHuuWxglxuXHQgKiBAZGVzY3JpcHRpb24g5by55Ye65bGC57uE5Lu277yM5Li65LqG6Kej5Yaz6YGu572p5by55bGC55qE6Zeu6aKYXG5cdCAqIEB0dXRvcmlhbCBodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD0zMjlcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGUgPSBbdG9wfGNlbnRlcnxib3R0b218bGVmdHxyaWdodHxtZXNzYWdlfGRpYWxvZ3xzaGFyZV0g5by55Ye65pa55byPXG5cdCAqIFx0QHZhbHVlIHRvcCDpobbpg6jlvLnlh7pcblx0ICogXHRAdmFsdWUgY2VudGVyIOS4remXtOW8ueWHulxuXHQgKiBcdEB2YWx1ZSBib3R0b20g5bqV6YOo5by55Ye6XG5cdCAqIFx0QHZhbHVlIGxlZnRcdFx05bem5L6n5by55Ye6XG5cdCAqIFx0QHZhbHVlIHJpZ2h0ICDlj7PkvqflvLnlh7pcblx0ICogXHRAdmFsdWUgbWVzc2FnZSDmtojmga/mj5DnpLpcblx0ICogXHRAdmFsdWUgZGlhbG9nIOWvueivneahhlxuXHQgKiBcdEB2YWx1ZSBzaGFyZSDlupXpg6jliIbkuqvnpLrkvotcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBhbmltYXRpb24gPSBbdHJ1ZXxmYWxzZV0g5piv5ZCm5byA5ZCv5Yqo55S7XG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbWFza0NsaWNrID0gW3RydWV8ZmFsc2VdIOiSmeeJiOeCueWHu+aYr+WQpuWFs+mXreW8ueeqlyjlup/lvIMpXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gaXNNYXNrQ2xpY2sgPSBbdHJ1ZXxmYWxzZV0g6JKZ54mI54K55Ye75piv5ZCm5YWz6Zet5by556qXXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSAgYmFja2dyb3VuZENvbG9yIOS4u+eql+WPo+iDjOaZr+iJslxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gIG1hc2tCYWNrZ3JvdW5kQ29sb3Ig6JKZ54mI6aKc6ImyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2FmZUFyZWFcdFx0ICAg5piv5ZCm6YCC6YWN5bqV6YOo5a6J5YWo5Yy6XG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGNoYW5nZSDmiZPlvIDlhbPpl63lvLnnqpfop6blj5HvvIxlPXtzaG93OiBmYWxzZX1cblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gbWFza0NsaWNrIOeCueWHu+mBrue9qeinpuWPkVxuXHQgKi9cblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ3VuaVBvcHVwJyxcblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHQvLyAjaWZkZWYgSDVcblx0XHRcdGtleXByZXNzXG5cdFx0XHQvLyAjZW5kaWZcblx0XHR9LFxuXHRcdGVtaXRzOiBbJ2NoYW5nZScsICdtYXNrQ2xpY2snXSxcblx0XHRwcm9wczoge1xuXHRcdFx0Ly8g5byA5ZCv5Yqo55S7XG5cdFx0XHRhbmltYXRpb246IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdC8vIOW8ueWHuuWxguexu+Wei++8jOWPr+mAieWAvO+8jHRvcDog6aG26YOo5by55Ye65bGC77ybYm90dG9t77ya5bqV6YOo5by55Ye65bGC77ybY2VudGVy77ya5YWo5bGP5by55Ye65bGCXG5cdFx0XHQvLyBtZXNzYWdlOiDmtojmga/mj5DnpLogOyBkaWFsb2cgOiDlr7nor53moYZcblx0XHRcdHR5cGU6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnY2VudGVyJ1xuXHRcdFx0fSxcblx0XHRcdC8vIG1hc2tDbGlja1xuXHRcdFx0aXNNYXNrQ2xpY2s6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogbnVsbFxuXHRcdFx0fSxcblx0XHRcdC8vIFRPRE8gMiDkuKrniYjmnKzlkI7lup/lvIPlsZ7mgKcg77yM5L2/55SoIGlzTWFza0NsaWNrXG5cdFx0XHRtYXNrQ2xpY2s6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogbnVsbFxuXHRcdFx0fSxcblx0XHRcdGJhY2tncm91bmRDb2xvcjoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICdub25lJ1xuXHRcdFx0fSxcblx0XHRcdHNhZmVBcmVhOiB7XG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRtYXNrQmFja2dyb3VuZENvbG9yOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJ3JnYmEoMCwgMCwgMCwgMC40KSdcblx0XHRcdH0sXG5cdFx0fSxcblxuXHRcdHdhdGNoOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIOebkeWQrHR5cGXnsbvlnotcblx0XHRcdCAqL1xuXHRcdFx0dHlwZToge1xuXHRcdFx0XHRoYW5kbGVyOiBmdW5jdGlvbih0eXBlKSB7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLmNvbmZpZ1t0eXBlXSkgcmV0dXJuXG5cdFx0XHRcdFx0dGhpc1t0aGlzLmNvbmZpZ1t0eXBlXV0odHJ1ZSlcblx0XHRcdFx0fSxcblx0XHRcdFx0aW1tZWRpYXRlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0aXNEZXNrdG9wOiB7XG5cdFx0XHRcdGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1ZhbCkge1xuXHRcdFx0XHRcdGlmICghdGhpcy5jb25maWdbbmV3VmFsXSkgcmV0dXJuXG5cdFx0XHRcdFx0dGhpc1t0aGlzLmNvbmZpZ1t0aGlzLnR5cGVdXSh0cnVlKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWVcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIOebkeWQrOmBrue9qeaYr+WQpuWPr+eCueWHu1xuXHRcdFx0ICogQHBhcmFtIHtPYmplY3R9IHZhbFxuXHRcdFx0ICovXG5cdFx0XHRtYXNrQ2xpY2s6IHtcblx0XHRcdFx0aGFuZGxlcjogZnVuY3Rpb24odmFsKSB7XG5cdFx0XHRcdFx0dGhpcy5ta2NsaWNrID0gdmFsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdGlzTWFza0NsaWNrOiB7XG5cdFx0XHRcdGhhbmRsZXI6IGZ1bmN0aW9uKHZhbCkge1xuXHRcdFx0XHRcdHRoaXMubWtjbGljayA9IHZhbFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWVcblx0XHRcdH0sXG5cdFx0XHQvLyBINSDkuIvnpoHmraLlupXpg6jmu5rliqhcblx0XHRcdHNob3dQb3B1cChzaG93KSB7XG5cdFx0XHRcdC8vICNpZmRlZiBINVxuXHRcdFx0XHQvLyBmaXggYnkgbWVoYW90aWFuIOWkhOeQhiBoNSDmu5rliqjnqb/pgI/nmoTpl67pophcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9IHNob3cgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1xuXHRcdFx0XHQvLyAjZW5kaWZcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkdXJhdGlvbjogMzAwLFxuXHRcdFx0XHRhbmk6IFtdLFxuXHRcdFx0XHRzaG93UG9wdXA6IGZhbHNlLFxuXHRcdFx0XHRzaG93VHJhbnM6IGZhbHNlLFxuXHRcdFx0XHRwb3B1cFdpZHRoOiAwLFxuXHRcdFx0XHRwb3B1cEhlaWdodDogMCxcblx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0dG9wOiAndG9wJyxcblx0XHRcdFx0XHRib3R0b206ICdib3R0b20nLFxuXHRcdFx0XHRcdGNlbnRlcjogJ2NlbnRlcicsXG5cdFx0XHRcdFx0bGVmdDogJ2xlZnQnLFxuXHRcdFx0XHRcdHJpZ2h0OiAncmlnaHQnLFxuXHRcdFx0XHRcdG1lc3NhZ2U6ICd0b3AnLFxuXHRcdFx0XHRcdGRpYWxvZzogJ2NlbnRlcicsXG5cdFx0XHRcdFx0c2hhcmU6ICdib3R0b20nXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1hc2tDbGFzczoge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRcdGJvdHRvbTogMCxcblx0XHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0XHRyaWdodDogMCxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNCknXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRyYW5zQ2xhc3M6IHtcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdHJpZ2h0OiAwXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1hc2tTaG93OiB0cnVlLFxuXHRcdFx0XHRta2NsaWNrOiB0cnVlLFxuXHRcdFx0XHRwb3B1cHN0eWxlOiB0aGlzLmlzRGVza3RvcCA/ICdmaXhmb3JwYy10b3AnIDogJ3RvcCdcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRpc0Rlc2t0b3AoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnBvcHVwV2lkdGggPj0gNTAwICYmIHRoaXMucG9wdXBIZWlnaHQgPj0gNTAwXG5cdFx0XHR9LFxuXHRcdFx0YmcoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmJhY2tncm91bmRDb2xvciA9PT0gJycgfHwgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPT09ICdub25lJykge1xuXHRcdFx0XHRcdHJldHVybiAndHJhbnNwYXJlbnQnXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtb3VudGVkKCkge1xuXHRcdFx0Y29uc3QgZml4U2l6ZSA9ICgpID0+IHtcblx0XHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRcdHdpbmRvd1dpZHRoLFxuXHRcdFx0XHRcdHdpbmRvd0hlaWdodCxcblx0XHRcdFx0XHR3aW5kb3dUb3AsXG5cdFx0XHRcdFx0c2FmZUFyZWEsXG5cdFx0XHRcdFx0c2NyZWVuSGVpZ2h0LFxuXHRcdFx0XHRcdHNhZmVBcmVhSW5zZXRzXG5cdFx0XHRcdH0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxuXHRcdFx0XHR0aGlzLnBvcHVwV2lkdGggPSB3aW5kb3dXaWR0aFxuXHRcdFx0XHR0aGlzLnBvcHVwSGVpZ2h0ID0gd2luZG93SGVpZ2h0ICsgKHdpbmRvd1RvcCB8fCAwKVxuXHRcdFx0XHQvLyBUT0RPIGZpeCBieSBtZWhhb3RpYW4g5piv5ZCm6YCC6YWN5bqV6YOo5a6J5YWo5Yy6ICznm67liY3lvq7kv6Fpb3Mg44CB5ZKMIGFwcCBpb3Mg6K6h566X5pyJ5beu5byC77yM6ZyA6KaB5qGG5p625L+u5aSNXG5cdFx0XHRcdGlmIChzYWZlQXJlYSAmJiB0aGlzLnNhZmVBcmVhKSB7XG5cdFx0XHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTlxuXHRcdFx0XHRcdHRoaXMuc2FmZUFyZWFJbnNldHMgPSBzY3JlZW5IZWlnaHQgLSBzYWZlQXJlYS5ib3R0b21cblx0XHRcdFx0XHQvLyAjZW5kaWZcblx0XHRcdFx0XHQvLyAjaWZuZGVmIE1QLVdFSVhJTlxuXHRcdFx0XHRcdHRoaXMuc2FmZUFyZWFJbnNldHMgPSBzYWZlQXJlYUluc2V0cy5ib3R0b21cblx0XHRcdFx0XHQvLyAjZW5kaWZcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNhZmVBcmVhSW5zZXRzID0gMFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRmaXhTaXplKClcblx0XHRcdC8vICNpZmRlZiBINVxuXHRcdFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZpeFNpemUpXG5cdFx0XHQvLyB0aGlzLiRvbmNlKCdob29rOmJlZm9yZURlc3Ryb3knLCAoKSA9PiB7XG5cdFx0XHQvLyBcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmaXhTaXplKVxuXHRcdFx0Ly8gfSlcblx0XHRcdC8vICNlbmRpZlxuXHRcdH0sXG5cdFx0Ly8gI2lmbmRlZiBWVUUzXG5cdFx0Ly8gVE9ETyB2dWUyXG5cdFx0ZGVzdHJveWVkKCkge1xuXHRcdFx0dGhpcy5zZXRINVZpc2libGUoKVxuXHRcdH0sXG5cdFx0Ly8gI2VuZGlmXG5cdFx0Ly8gI2lmZGVmIFZVRTNcblx0XHQvLyBUT0RPIHZ1ZTNcblx0XHR1bm1vdW50ZWQoKSB7XG5cdFx0XHR0aGlzLnNldEg1VmlzaWJsZSgpXG5cdFx0fSxcblx0XHQvLyAjZW5kaWZcblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0Ly8gdGhpcy5ta2NsaWNrID0gIHRoaXMuaXNNYXNrQ2xpY2sgfHwgdGhpcy5tYXNrQ2xpY2tcblx0XHRcdGlmICh0aGlzLmlzTWFza0NsaWNrID09PSBudWxsICYmIHRoaXMubWFza0NsaWNrID09PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMubWtjbGljayA9IHRydWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubWtjbGljayA9IHRoaXMuaXNNYXNrQ2xpY2sgIT09IG51bGwgPyB0aGlzLmlzTWFza0NsaWNrIDogdGhpcy5tYXNrQ2xpY2tcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmFuaW1hdGlvbikge1xuXHRcdFx0XHR0aGlzLmR1cmF0aW9uID0gMzAwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmR1cmF0aW9uID0gMFxuXHRcdFx0fVxuXHRcdFx0Ly8gVE9ETyDlpITnkIYgbWVzc2FnZSDnu4Tku7bnlJ/lkb3lkajmnJ/lvILluLjnmoTpl67pophcblx0XHRcdHRoaXMubWVzc2FnZUNoaWxkID0gbnVsbFxuXHRcdFx0Ly8gVE9ETyDop6PlhrPlpLTmnaHlhpLms6HnmoTpl67pophcblx0XHRcdHRoaXMuY2xlYXJQcm9wYWdhdGlvbiA9IGZhbHNlXG5cdFx0XHR0aGlzLm1hc2tDbGFzcy5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLm1hc2tCYWNrZ3JvdW5kQ29sb3Jcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHNldEg1VmlzaWJsZSgpIHtcblx0XHRcdFx0Ly8gI2lmZGVmIEg1XG5cdFx0XHRcdC8vIGZpeCBieSBtZWhhb3RpYW4g5aSE55CGIGg1IOa7muWKqOepv+mAj+eahOmXrumimFxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXG5cdFx0XHRcdC8vICNlbmRpZlxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICog5YWs55So5pa55rOV77yM5LiN5pi+56S66YGu572p5bGCXG5cdFx0XHQgKi9cblx0XHRcdGNsb3NlTWFzaygpIHtcblx0XHRcdFx0dGhpcy5tYXNrU2hvdyA9IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiDlhaznlKjmlrnms5XvvIzpga7nvanlsYLnpoHmraLngrnlh7tcblx0XHRcdCAqL1xuXHRcdFx0ZGlzYWJsZU1hc2soKSB7XG5cdFx0XHRcdHRoaXMubWtjbGljayA9IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0Ly8gVE9ETyBudnVlIOWPlua2iOWGkuazoVxuXHRcdFx0Y2xlYXIoZSkge1xuXHRcdFx0XHQvLyAjaWZuZGVmIEFQUC1OVlVFXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdFx0Ly8gI2VuZGlmXG5cdFx0XHRcdHRoaXMuY2xlYXJQcm9wYWdhdGlvbiA9IHRydWVcblx0XHRcdH0sXG5cblx0XHRcdG9wZW4oZGlyZWN0aW9uKSB7XG5cdFx0XHRcdC8vIGZpeCBieSBtZWhhb3RpYW4g5aSE55CG5b+r6YCf5omT5byA5YWz6Zet55qE5oOF5Ya1XG5cdFx0XHRcdGlmICh0aGlzLnNob3dQb3B1cCkge1xuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBpbm5lclR5cGUgPSBbJ3RvcCcsICdjZW50ZXInLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnLCAnbWVzc2FnZScsICdkaWFsb2cnLCAnc2hhcmUnXVxuXHRcdFx0XHRpZiAoIShkaXJlY3Rpb24gJiYgaW5uZXJUeXBlLmluZGV4T2YoZGlyZWN0aW9uKSAhPT0gLTEpKSB7XG5cdFx0XHRcdFx0ZGlyZWN0aW9uID0gdGhpcy50eXBlXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCF0aGlzLmNvbmZpZ1tkaXJlY3Rpb25dKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcign57y65bCR57G75Z6L77yaJywgZGlyZWN0aW9uKVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXNbdGhpcy5jb25maWdbZGlyZWN0aW9uXV0oKVxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdFx0XHR0eXBlOiBkaXJlY3Rpb25cblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRjbG9zZSh0eXBlKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1RyYW5zID0gZmFsc2Vcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xuXHRcdFx0XHRcdHNob3c6IGZhbHNlLFxuXHRcdFx0XHRcdHR5cGU6IHRoaXMudHlwZVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lcilcblx0XHRcdFx0Ly8gLy8g6Ieq5a6a5LmJ5YWz6Zet5LqL5Lu2XG5cdFx0XHRcdC8vIHRoaXMuY3VzdG9tT3BlbiAmJiB0aGlzLmN1c3RvbUNsb3NlKClcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gZmFsc2Vcblx0XHRcdFx0fSwgMzAwKVxuXHRcdFx0fSxcblx0XHRcdC8vIFRPRE8g5aSE55CG5YaS5rOh5LqL5Lu277yM5aS05p2h55qE5YaS5rOh5LqL5Lu25pyJ6Zeu6aKYIO+8jOWFiOi/meagt+WFvOWuuVxuXHRcdFx0dG91Y2hzdGFydCgpIHtcblx0XHRcdFx0dGhpcy5jbGVhclByb3BhZ2F0aW9uID0gZmFsc2Vcblx0XHRcdH0sXG5cblx0XHRcdG9uVGFwKCkge1xuXHRcdFx0XHRpZiAodGhpcy5jbGVhclByb3BhZ2F0aW9uKSB7XG5cdFx0XHRcdFx0Ly8gZml4IGJ5IG1laGFvdGlhbiDlhbzlrrkgbnZ1ZVxuXHRcdFx0XHRcdHRoaXMuY2xlYXJQcm9wYWdhdGlvbiA9IGZhbHNlXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kZW1pdCgnbWFza0NsaWNrJylcblx0XHRcdFx0aWYgKCF0aGlzLm1rY2xpY2spIHJldHVyblxuXHRcdFx0XHR0aGlzLmNsb3NlKClcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIOmhtumDqOW8ueWHuuagt+W8j+WkhOeQhlxuXHRcdFx0ICovXG5cdFx0XHR0b3AodHlwZSkge1xuXHRcdFx0XHR0aGlzLnBvcHVwc3R5bGUgPSB0aGlzLmlzRGVza3RvcCA/ICdmaXhmb3JwYy10b3AnIDogJ3RvcCdcblx0XHRcdFx0dGhpcy5hbmkgPSBbJ3NsaWRlLXRvcCddXG5cdFx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdHJpZ2h0OiAwLFxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhpcy5iZ1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xuXHRcdFx0XHRpZiAodHlwZSkgcmV0dXJuXG5cdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gdHJ1ZVxuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLm1lc3NhZ2VDaGlsZCAmJiB0aGlzLnR5cGUgPT09ICdtZXNzYWdlJykge1xuXHRcdFx0XHRcdFx0dGhpcy5tZXNzYWdlQ2hpbGQudGltZXJDbG9zZSgpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICog5bqV6YOo5by55Ye65qC35byP5aSE55CGXG5cdFx0XHQgKi9cblx0XHRcdGJvdHRvbSh0eXBlKSB7XG5cdFx0XHRcdHRoaXMucG9wdXBzdHlsZSA9ICdib3R0b20nXG5cdFx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS1ib3R0b20nXVxuXHRcdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XG5cdFx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0XHRyaWdodDogMCxcblx0XHRcdFx0XHRib3R0b206IDAsXG5cdFx0XHRcdFx0cGFkZGluZ0JvdHRvbTogdGhpcy5zYWZlQXJlYUluc2V0cyArICdweCcsXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLmJnXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gVE9ETyDlhbzlrrkgdHlwZSDlsZ7mgKcg77yM5ZCO57ut5Lya5bqf5byDXG5cdFx0XHRcdGlmICh0eXBlKSByZXR1cm5cblx0XHRcdFx0dGhpcy5zaG93UG9wdXAgPSB0cnVlXG5cdFx0XHRcdHRoaXMuc2hvd1RyYW5zID0gdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICog5Lit6Ze05by55Ye65qC35byP5aSE55CGXG5cdFx0XHQgKi9cblx0XHRcdGNlbnRlcih0eXBlKSB7XG5cdFx0XHRcdHRoaXMucG9wdXBzdHlsZSA9ICdjZW50ZXInXG5cdFx0XHRcdHRoaXMuYW5pID0gWyd6b29tLW91dCcsICdmYWRlJ11cblx0XHRcdFx0dGhpcy50cmFuc0NsYXNzID0ge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cdFx0XHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHRcdFx0Ym90dG9tOiAwLFxuXHRcdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdFx0cmlnaHQ6IDAsXG5cdFx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xuXHRcdFx0XHRpZiAodHlwZSkgcmV0dXJuXG5cdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gdHJ1ZVxuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcblx0XHRcdH0sXG5cdFx0XHRsZWZ0KHR5cGUpIHtcblx0XHRcdFx0dGhpcy5wb3B1cHN0eWxlID0gJ2xlZnQnXG5cdFx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS1sZWZ0J11cblx0XHRcdFx0dGhpcy50cmFuc0NsYXNzID0ge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdFx0Ym90dG9tOiAwLFxuXHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmcsXG5cdFx0XHRcdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuXHRcdFx0XHRcdC8qICNlbmRpZiAqL1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xuXHRcdFx0XHRpZiAodHlwZSkgcmV0dXJuXG5cdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gdHJ1ZVxuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcblx0XHRcdH0sXG5cdFx0XHRyaWdodCh0eXBlKSB7XG5cdFx0XHRcdHRoaXMucG9wdXBzdHlsZSA9ICdyaWdodCdcblx0XHRcdFx0dGhpcy5hbmkgPSBbJ3NsaWRlLXJpZ2h0J11cblx0XHRcdFx0dGhpcy50cmFuc0NsYXNzID0ge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRcdGJvdHRvbTogMCxcblx0XHRcdFx0XHRyaWdodDogMCxcblx0XHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLmJnLFxuXHRcdFx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbidcblx0XHRcdFx0XHQvKiAjZW5kaWYgKi9cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBUT0RPIOWFvOWuuSB0eXBlIOWxnuaApyDvvIzlkI7nu63kvJrlup/lvINcblx0XHRcdFx0aWYgKHR5cGUpIHJldHVyblxuXHRcdFx0XHR0aGlzLnNob3dQb3B1cCA9IHRydWVcblx0XHRcdFx0dGhpcy5zaG93VHJhbnMgPSB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuXHQudW5pLXBvcHVwIHtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdHotaW5kZXg6IDk5O1xuXG5cdFx0LyogI2VuZGlmICovXG5cdFx0Ji50b3AsXG5cdFx0Ji5sZWZ0LFxuXHRcdCYucmlnaHQge1xuXHRcdFx0LyogI2lmZGVmIEg1ICovXG5cdFx0XHR0b3A6IHZhcigtLXdpbmRvdy10b3ApO1xuXHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHQvKiAjaWZuZGVmIEg1ICovXG5cdFx0XHR0b3A6IDA7XG5cdFx0XHQvKiAjZW5kaWYgKi9cblx0XHR9XG5cblx0XHQudW5pLXBvcHVwX193cmFwcGVyIHtcblx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHRcdC8qIGlwaG9uZXgg562J5a6J5YWo5Yy66K6+572u77yM5bqV6YOo5a6J5YWo5Yy66YCC6YWNICovXG5cdFx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0XHQvLyBwYWRkaW5nLWJvdHRvbTogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG5cdFx0XHQvLyBwYWRkaW5nLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuXHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHQmLmxlZnQsXG5cdFx0XHQmLnJpZ2h0IHtcblx0XHRcdFx0LyogI2lmZGVmIEg1ICovXG5cdFx0XHRcdHBhZGRpbmctdG9wOiB2YXIoLS13aW5kb3ctdG9wKTtcblx0XHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHRcdC8qICNpZm5kZWYgSDUgKi9cblx0XHRcdFx0cGFkZGluZy10b3A6IDA7XG5cdFx0XHRcdC8qICNlbmRpZiAqL1xuXHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5maXhmb3JwYy16LWluZGV4IHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ei1pbmRleDogOTk5O1xuXHRcdC8qICNlbmRpZiAqL1xuXHR9XG5cblx0LmZpeGZvcnBjLXRvcCB7XG5cdFx0dG9wOiAwO1xuXHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!***************************************************!*\
  !*** D:/Develop/ASIA-POTASH/static/icon-logo.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon-logo.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbi1sb2dvLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!****************************************************!*\
  !*** D:/Develop/ASIA-POTASH/static/icon-title.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon-title.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbi10aXRsZS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*****************************************************!*\
  !*** D:/Develop/ASIA-POTASH/static/icon-option.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon-option.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbi1vcHRpb24ucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!******************************************************!*\
  !*** D:/Develop/ASIA-POTASH/static/icon-headimg.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon-headimg.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbi1oZWFkaW1nLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!*****************************************************!*\
  !*** D:/Develop/ASIA-POTASH/static/icon-robot1.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon-robot1.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbi1yb2JvdDEucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!****************************************************!*\
  !*** D:/Develop/ASIA-POTASH/static/icon-arrow.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon-arrow.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbi1hcnJvdy5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!**************************************************!*\
  !*** D:/Develop/ASIA-POTASH/static/icon-mic.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon-mic.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbi1taWMucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!***************************************************!*\
  !*** D:/Develop/ASIA-POTASH/static/icon-mic1.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon-mic1.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbi1taWMxLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!****************************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 40);\n/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9sQixDQUFnQiw4bUJBQUcsRUFBQyIsImZpbGUiOiIzOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSGJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSGJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vSGJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hidWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IYnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IYnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi9IYnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vSGJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///39\n");

/***/ }),
/* 40 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Develop/ASIA-POTASH/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n__webpack_require__(/*! @/common/net/netAgent.js */ 41);\nvar _HZRecorder = __webpack_require__(/*! ../../Utils/HZRecorder.js */ 45);\nvar _ws = __webpack_require__(/*! ../../Utils/ws.js */ 46);\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ 47));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      clientX: 0,\n      clientY: 0,\n      recording: false,\n      //在录音中\n      cancelRecord: false,\n      //取消录制\n      recordStatus: 0,\n      //录音状态 0=默认 1=录音中 2=上滑取消录音\n      userMsg: '',\n      //\n      robotMsg: '',\n      //\n\n      recorder: null,\n      innerAudioContext: '',\n      showUserPart: false,\n      showRobotPart: false,\n      isLangTap: false,\n      WSSUrl: 'wss://i25817465a.imdo.co',\n      // WSSUrl:'wss://s33egzmdhkawshsh3.neiwangyun.net',\n\n      language: true,\n      langugeType: 'recognition'\n    };\n  },\n  onLoad: function onLoad() {},\n  mounted: function mounted() {\n    var that = this;\n    that.$nextTick(function () {\n      try {\n        window.AudioContext = window.AudioContext || window.webkitAudioContext;\n        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;\n        window.URL = window.URL || window.webkitURL;\n        audio_context = new AudioContext();\n        __f__(\"log\", 'navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'), \" at pages/index/index.vue:155\");\n      } catch (e) {\n        __f__(\"log\", 'No web audio support in this browser!', \" at pages/index/index.vue:158\");\n      }\n      if (navigator.getUserMedia) {\n        navigator.getUserMedia({\n          audio: true\n        }, function (stream) {\n          that.recorder = new _HZRecorder.HZRecorder(stream);\n          __f__(\"log\", '初始化完成', \" at pages/index/index.vue:166\");\n        }, function (e) {\n          __f__(\"log\", 'No live audio input: ' + e, \" at pages/index/index.vue:168\");\n        });\n      } else {\n        uni.showModal({\n          title: '提示',\n          content: '当前设备不支持录音',\n          success: function success(res) {\n            if (res.confirm) {\n              // console.log('用户点击确定');\n            } else if (res.cancel) {\n              // console.log('用户点击取消');\n            }\n          }\n        });\n      }\n    });\n    that.innerAudioContext = uni.createInnerAudioContext();\n    that.innerAudioContext.autoplay = true;\n    // this.innerAudioContext.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';\n    that.innerAudioContext.onPlay(function () {\n      __f__(\"log\", '开始播放', \" at pages/index/index.vue:191\");\n    });\n    that.innerAudioContext.onError(function (res) {\n      __f__(\"log\", res.errMsg, \" at pages/index/index.vue:194\");\n      __f__(\"log\", res.errCode, \" at pages/index/index.vue:195\");\n    });\n    (0, _ws.initWebSocketPotassium)(that.WSSUrl, function (msg) {\n      // console.log(\"heartCheck\")；\n      var _msg = JSON.parse(msg.data);\n      if (_msg.answer) {\n        __f__(\"log\", _msg.answer, \" at pages/index/index.vue:201\");\n        that.showRobotPart = true;\n        that.robotMsg = that.robotMsg + _msg.answer + \"。\";\n      }\n    });\n  },\n  beforeDestroy: function beforeDestroy() {\n    (0, _ws.closeWebsocketPotassium)();\n    uni.showModal({\n      title: '提示',\n      content: '断开提示',\n      success: function success(res) {\n        if (res.confirm) {\n          // console.log('用户点击确定');\n        } else if (res.cancel) {\n          // console.log('用户点击取消');\n        }\n      }\n    });\n  },\n  methods: {\n    clickShowPopupWSS: function clickShowPopupWSS() {\n      this.$refs.popupWSS.open();\n    },\n    clickHidePopupWSS: function clickHidePopupWSS() {\n      this.$refs.popupWSS.close();\n    },\n    inputWSS: function inputWSS(e) {\n      __f__(\"log\", e.detail.value, \" at pages/index/index.vue:230\");\n      this.WSSUrl = e.detail.value;\n    },\n    disconnectWSS: function disconnectWSS() {\n      (0, _ws.closeWebsocketPotassium)();\n    },\n    connectWSS: function connectWSS() {\n      var _this = this;\n      (0, _ws.closeWebsocketPotassium)();\n      (0, _ws.initWebSocketPotassium)(this.WSSUrl, function (msg) {\n        // console.log(\"heartCheck\")；\n        var _msg = JSON.parse(msg.data);\n        if (_msg.answer) {\n          __f__(\"log\", _msg.answer, \" at pages/index/index.vue:242\");\n          _this.showRobotPart = true;\n          _this.robotMsg = _this.robotMsg + _msg.answer + \"。\";\n        }\n      });\n    },\n    languageSwitch: function languageSwitch(e) {\n      __f__(\"log\", e.detail.value, \" at pages/index/index.vue:249\");\n      if (e.detail.value) {\n        this.language = e.detail.value;\n        this.langugeType = 'recognition';\n      } else if (!e.detail.value) {\n        this.language = e.detail.value;\n        this.langugeType = 'recognitionCN';\n      }\n    },\n    clickShowPopup: function clickShowPopup() {\n      // console.log(\"clickShowPopup\")\n      this.$refs.popup.open();\n    },\n    clickHidePopup: function clickHidePopup() {\n      // console.log(\"clickHidePopup\")\n      this.$refs.popup.close();\n    },\n    clickLinkServices: function clickLinkServices() {\n      // console.log(\"clickLinkServices\");\n      this.clickHidePopup();\n      (0, _ws.sendDataPotassium)(JSON.stringify({\n        close: 'close'\n      }));\n    },\n    clickPlayVideo: function clickPlayVideo(e) {\n      // console.log(e.currentTarget.dataset.index);\n      this.clickHidePopup();\n      (0, _ws.sendDataPotassium)(JSON.stringify({\n        close: 'close'\n      }));\n      (0, _ws.sendDataPotassium)(JSON.stringify({\n        sence: e.currentTarget.dataset.index\n      }));\n    },\n    clickPlayAudio: function clickPlayAudio(e) {\n      // console.log(e.currentTarget.dataset.index);\n      this.clickHidePopup();\n      (0, _ws.sendDataPotassium)(JSON.stringify({\n        close: 'close'\n      }));\n      (0, _ws.sendDataPotassium)(JSON.stringify({\n        audio: e.currentTarget.dataset.index\n      }));\n    },\n    langTap: function langTap() {\n      var _this2 = this;\n      clearTimeout(langtaptimeout);\n      var langtaptimeout = setTimeout(function () {\n        __f__(\"log\", 'langTap', \" at pages/index/index.vue:286\");\n        _this2.recorder.start();\n        _this2.showUserPart = false;\n        _this2.showRobotPart = false;\n        _this2.isLangTap = true;\n        _this2.userMsg = '';\n        _this2.robotMsg = '';\n        _this2.recording = true;\n        _this2.recordStatus = 2;\n        // sendDataPotassium(JSON.stringify({ sence: '3'}));\n        (0, _ws.sendDataPotassium)(JSON.stringify({\n          close: 'close'\n        }));\n      }, 200);\n    },\n    touchStart: function touchStart(e) {\n      var that = this;\n      that.clientX = e.changedTouches[0].clientX; //手指按下时的X坐标\n      that.clientY = e.changedTouches[0].clientY; //手指按下时的Y坐标\n      // if(that.isLangTap){\n      navigator.getUserMedia({\n        audio: true\n      }, function (stream) {\n        that.recorder = new _HZRecorder.HZRecorder(stream);\n        __f__(\"log\", '初始化完成', \" at pages/index/index.vue:309\");\n      }, function (e) {\n        __f__(\"log\", 'No live audio input: ' + e, \" at pages/index/index.vue:311\");\n      });\n      // }\n    },\n    touchMove: function touchMove(e) {\n      var touchData = e.touches[0];\n      var moveX = touchData.clientX - this.clientX;\n      var moveY = touchData.clientY - this.clientY;\n      if (moveY < -50) {\n        // 向上滑动\n        this.cancelRecord = true;\n        this.recordStatus = 1;\n        // console.log(\"向上滑动\");\n      } else {\n        // 向下滑动\n        this.cancelRecord = false;\n        this.recordStatus = 2;\n        // console.log(\"向下滑动\");\n      }\n    },\n    touchEnd: function touchEnd() {\n      var _this3 = this;\n      this.recordStatus = 0;\n      if (!this.cancelRecord) {\n        // \t// 完成录音\n\n        this.recorder.stop();\n        this.recorder.getBlob();\n        var mp3Blob = this.recorder.getBlob();\n        // console.log(mp3Blob);\n        var files = new File([mp3Blob], 'input.wav', {\n          type: 'audio/wav',\n          lastModified: Date.now()\n        });\n        var fd = new FormData();\n        // fd.append('file', files);\n        fd.append('multipartFile', files);\n        var url = window.URL.createObjectURL(mp3Blob);\n        __f__(\"log\", url, \" at pages/index/index.vue:351\");\n        (0, _axios.default)({\n          // baseURL: 'http://182.92.118.211:30020/business/aiSend/',\n          // baseURL: 'https://share-test.metazen-tech.com/business/aiSend/',\n          baseURL: 'https://aigc.metazen-tech.com/meta-tts/speech/',\n          method: 'POST',\n          // url: 'speakChange',\n          url: this.langugeType,\n          // url: 'recognitionCN',\n          headers: {\n            \"Content-Type\": \"multipart/form-data\"\n          },\n          data: fd\n        }).then(function (res) {\n          __f__(\"info\", res, \" at pages/index/index.vue:366\");\n          // if(res.data.msg||res.data.msg.length>0||res.data.msg!==\"\"){\n          if (res.data.data || res.data.data.length > 0 || res.data.data !== \"\") {\n            // this.userMsg = res.data.msg;\n            _this3.userMsg = res.data.data;\n            _this3.showUserPart = true;\n            // sendDataPotassium(JSON.stringify({ ask: res.data.msg}));\n            (0, _ws.sendDataPotassium)(JSON.stringify({\n              ask: res.data.data\n            }));\n          } else {\n            uni.showToast({\n              title: '当前为说话或录入声音太小',\n              icon: 'error',\n              duration: 2000\n            });\n          }\n        }).catch(function (err) {\n          __f__(\"info\", err, \" at pages/index/index.vue:382\");\n        });\n      } else {\n        // 此时松手后响应的是取消录音\n        __f__(\"info\", '取消录音', \" at pages/index/index.vue:386\");\n      }\n\n      // sendDataPotassium(JSON.stringify({ ask: \"你好\"}));\n\n      // this.recorder.play(this.innerAudioContext);\n      this.recording = false;\n      this.cancelRecord = false;\n      this.isLangTap = false;\n    },\n    playVoice: function playVoice() {\n      __f__(\"log\", '播放录音', \" at pages/index/index.vue:398\");\n      if (this.voicePath) {\n        this.innerAudioContext.src = this.voicePath;\n        this.innerAudioContext.play();\n      }\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJjbGllbnRYIiwiY2xpZW50WSIsInJlY29yZGluZyIsImNhbmNlbFJlY29yZCIsInJlY29yZFN0YXR1cyIsInVzZXJNc2ciLCJyb2JvdE1zZyIsInJlY29yZGVyIiwiaW5uZXJBdWRpb0NvbnRleHQiLCJzaG93VXNlclBhcnQiLCJzaG93Um9ib3RQYXJ0IiwiaXNMYW5nVGFwIiwiV1NTVXJsIiwibGFuZ3VhZ2UiLCJsYW5ndWdlVHlwZSIsIm9uTG9hZCIsIm1vdW50ZWQiLCJ0aGF0IiwiJG5leHRUaWNrIiwid2luZG93IiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwibmF2aWdhdG9yIiwiZ2V0VXNlck1lZGlhIiwid2Via2l0R2V0VXNlck1lZGlhIiwiVVJMIiwid2Via2l0VVJMIiwiYXVkaW9fY29udGV4dCIsImUiLCJhdWRpbyIsInN0cmVhbSIsIkhaUmVjb3JkZXIiLCJ1bmkiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsImNhbmNlbCIsImNyZWF0ZUlubmVyQXVkaW9Db250ZXh0IiwiYXV0b3BsYXkiLCJvblBsYXkiLCJvbkVycm9yIiwiZXJyTXNnIiwiZXJyQ29kZSIsImluaXRXZWJTb2NrZXRQb3Rhc3NpdW0iLCJtc2ciLCJfbXNnIiwiSlNPTiIsInBhcnNlIiwiYW5zd2VyIiwiYmVmb3JlRGVzdHJveSIsImNsb3NlV2Vic29ja2V0UG90YXNzaXVtIiwibWV0aG9kcyIsImNsaWNrU2hvd1BvcHVwV1NTIiwiJHJlZnMiLCJwb3B1cFdTUyIsIm9wZW4iLCJjbGlja0hpZGVQb3B1cFdTUyIsImNsb3NlIiwiaW5wdXRXU1MiLCJkZXRhaWwiLCJ2YWx1ZSIsImRpc2Nvbm5lY3RXU1MiLCJjb25uZWN0V1NTIiwibGFuZ3VhZ2VTd2l0Y2giLCJjbGlja1Nob3dQb3B1cCIsInBvcHVwIiwiY2xpY2tIaWRlUG9wdXAiLCJjbGlja0xpbmtTZXJ2aWNlcyIsInNlbmREYXRhUG90YXNzaXVtIiwic3RyaW5naWZ5IiwiY2xpY2tQbGF5VmlkZW8iLCJzZW5jZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJjbGlja1BsYXlBdWRpbyIsImxhbmdUYXAiLCJjbGVhclRpbWVvdXQiLCJsYW5ndGFwdGltZW91dCIsInNldFRpbWVvdXQiLCJzdGFydCIsInRvdWNoU3RhcnQiLCJjaGFuZ2VkVG91Y2hlcyIsInRvdWNoTW92ZSIsInRvdWNoRGF0YSIsInRvdWNoZXMiLCJtb3ZlWCIsIm1vdmVZIiwidG91Y2hFbmQiLCJzdG9wIiwiZ2V0QmxvYiIsIm1wM0Jsb2IiLCJmaWxlcyIsIkZpbGUiLCJ0eXBlIiwibGFzdE1vZGlmaWVkIiwiRGF0ZSIsIm5vdyIsImZkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ1cmwiLCJjcmVhdGVPYmplY3RVUkwiLCJheGlvcyIsImJhc2VVUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsImxlbmd0aCIsImFzayIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsImNhdGNoIiwiZXJyIiwicGxheVZvaWNlIiwidm9pY2VQYXRoIiwic3JjIiwicGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQXdHQTtBQUNBO0FBR0E7QUFPQTtBQW5IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QyxDQUFDLENBQUNDLEtBQUssQ0FBQyxVQUFBQyxHQUFHLEVBQUk7VUFDZixjQUFhQSxHQUFHO1FBQ2pCLENBQUMsQ0FBQztNQUNILENBQUMsTUFBTTtRQUNOO1FBQ0EsY0FBYSxNQUFNO01BQ3BCOztNQUVBOztNQUVBO01BQ0EsSUFBSSxDQUFDbkgsU0FBUyxHQUFHLEtBQUs7TUFDdEIsSUFBSSxDQUFDQyxZQUFZLEdBQUcsS0FBSztNQUN6QixJQUFJLENBQUNRLFNBQVMsR0FBRyxLQUFLO0lBRXZCLENBQUM7SUFDRDJHLFNBQVMsdUJBQUc7TUFDWCxhQUFZLE1BQU07TUFFbEIsSUFBSSxJQUFJLENBQUNDLFNBQVMsRUFBRTtRQUNuQixJQUFJLENBQUMvRyxpQkFBaUIsQ0FBQ2dILEdBQUcsR0FBRyxJQUFJLENBQUNELFNBQVM7UUFDM0MsSUFBSSxDQUFDL0csaUJBQWlCLENBQUNpSCxJQUFJLEVBQUU7TUFDOUI7SUFDRDtFQUdEO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjQwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuaW1wb3J0ICdAL2NvbW1vbi9uZXQvbmV0QWdlbnQuanMnXG5pbXBvcnQge1xuXHRIWlJlY29yZGVyXG59IGZyb20gJy4uLy4uL1V0aWxzL0haUmVjb3JkZXIuanMnO1xuaW1wb3J0IHtcblx0aW5pdFdlYlNvY2tldFBvdGFzc2l1bSxcblx0c2VuZERhdGFQb3Rhc3NpdW0sXG5cdHdlYnNvY2tldE9ubWVzc2FnZVBvdGFzc2l1bSxcblx0Y2xvc2VXZWJzb2NrZXRQb3Rhc3NpdW1cbn0gZnJvbSAnLi4vLi4vVXRpbHMvd3MuanMnO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGllbnRYOiAwLFxuXHRcdFx0Y2xpZW50WTogMCxcblx0XHRcdHJlY29yZGluZzogZmFsc2UsIC8v5Zyo5b2V6Z+z5LitXG5cdFx0XHRjYW5jZWxSZWNvcmQ6IGZhbHNlLCAvL+WPlua2iOW9leWItlxuXHRcdFx0cmVjb3JkU3RhdHVzOiAwLCAvL+W9lemfs+eKtuaAgSAwPem7mOiupCAxPeW9lemfs+S4rSAyPeS4iua7keWPlua2iOW9lemfs1xuXHRcdFx0dXNlck1zZzogJycsIC8vXG5cdFx0XHRyb2JvdE1zZzogJycsIC8vXG5cblx0XHRcdHJlY29yZGVyOiBudWxsLFxuXHRcdFx0aW5uZXJBdWRpb0NvbnRleHQ6ICcnLFxuXG5cdFx0XHRzaG93VXNlclBhcnQ6IGZhbHNlLFxuXHRcdFx0c2hvd1JvYm90UGFydDogZmFsc2UsXG5cblx0XHRcdGlzTGFuZ1RhcDogZmFsc2UsXG5cdFx0XHRXU1NVcmw6J3dzczovL2kyNTgxNzQ2NWEuaW1kby5jbycsXG5cdFx0XHQvLyBXU1NVcmw6J3dzczovL3MzM2Vnem1kaGthd3Noc2gzLm5laXdhbmd5dW4ubmV0Jyxcblx0XHRcdFxuXHRcdFx0bGFuZ3VhZ2U6dHJ1ZSxcblx0XHRcdGxhbmd1Z2VUeXBlOidyZWNvZ25pdGlvbidcblx0XHR9XG5cdH0sXG5cdG9uTG9hZCgpIHtcblxuXHR9LFxuXHRtb3VudGVkKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpcztcblx0XHR0aGF0LiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuXHRcdFx0XHRuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLmdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhO1xuXHRcdFx0XHR3aW5kb3cuVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuXHRcdFx0XHRhdWRpb19jb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dDtcblx0XHRcdFx0Y29uc29sZS5sb2coJ25hdmlnYXRvci5nZXRVc2VyTWVkaWEgJyArIChuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID8gJ2F2YWlsYWJsZS4nIDpcblx0XHRcdFx0XHQnbm90IHByZXNlbnQhJykpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnTm8gd2ViIGF1ZGlvIHN1cHBvcnQgaW4gdGhpcyBicm93c2VyIScpO1xuXG5cdFx0XHR9XG5cdFx0XHRpZiAobmF2aWdhdG9yLmdldFVzZXJNZWRpYSkge1xuXHRcdFx0XHRuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhKHtcblx0XHRcdFx0XHRhdWRpbzogdHJ1ZVxuXHRcdFx0XHR9LCBmdW5jdGlvbihzdHJlYW0pIHtcblx0XHRcdFx0XHR0aGF0LnJlY29yZGVyID0gbmV3IEhaUmVjb3JkZXIoc3RyZWFtKVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfliJ3lp4vljJblrozmiJAnKTtcblx0XHRcdFx0fSwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdObyBsaXZlIGF1ZGlvIGlucHV0OiAnICsgZSk7XG5cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0XHR0aXRsZTogJ+aPkOekuicsXG5cdFx0XHRcdFx0Y29udGVudDogJ+W9k+WJjeiuvuWkh+S4jeaUr+aMgeW9lemfsycsXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cblx0XHR9KVxuXHRcdHRoYXQuaW5uZXJBdWRpb0NvbnRleHQgPSB1bmkuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcblx0XHR0aGF0LmlubmVyQXVkaW9Db250ZXh0LmF1dG9wbGF5ID0gdHJ1ZTtcblx0XHQvLyB0aGlzLmlubmVyQXVkaW9Db250ZXh0LnNyYyA9ICdodHRwczovL2JqZXR4Z3p2LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLWhlbGxvLXVuaWFwcC8yY2MyMjBlMC1jMjdhLTExZWEtOWRmYi02ZGE4ZTMwOWUwZDgubXAzJztcblx0XHR0aGF0LmlubmVyQXVkaW9Db250ZXh0Lm9uUGxheSgoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygn5byA5aeL5pKt5pS+Jyk7XG5cdFx0fSk7XG5cdFx0dGhhdC5pbm5lckF1ZGlvQ29udGV4dC5vbkVycm9yKChyZXMpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpO1xuXHRcdFx0Y29uc29sZS5sb2cocmVzLmVyckNvZGUpO1xuXHRcdH0pO1xuXHRcdGluaXRXZWJTb2NrZXRQb3Rhc3NpdW0odGhhdC5XU1NVcmwsKG1zZykgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJoZWFydENoZWNrXCIp77ybXG5cdFx0XHR2YXIgX21zZyA9IEpTT04ucGFyc2UobXNnLmRhdGEpO1xuXHRcdFx0aWYgKF9tc2cuYW5zd2VyKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKF9tc2cuYW5zd2VyKTtcblx0XHRcdFx0dGhhdC5zaG93Um9ib3RQYXJ0ID0gdHJ1ZTtcblx0XHRcdFx0dGhhdC5yb2JvdE1zZyA9IHRoYXQucm9ib3RNc2cgKyBfbXNnLmFuc3dlciArIFwi44CCXCI7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHRcblx0fSxcblx0YmVmb3JlRGVzdHJveSgpIHtcblx0XHRjbG9zZVdlYnNvY2tldFBvdGFzc2l1bSgpO1xuXHRcdHVuaS5zaG93TW9kYWwoe1xuXHRcdFx0dGl0bGU6ICfmj5DnpLonLFxuXHRcdFx0Y29udGVudDogJ+aWreW8gOaPkOekuicsXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygn55So5oi354K55Ye75Y+W5raIJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGNsaWNrU2hvd1BvcHVwV1NTKCl7XG5cdFx0XHR0aGlzLiRyZWZzLnBvcHVwV1NTLm9wZW4oKTtcblx0XHR9LFxuXHRcdGNsaWNrSGlkZVBvcHVwV1NTKCl7XG5cdFx0XHR0aGlzLiRyZWZzLnBvcHVwV1NTLmNsb3NlKCk7XG5cdFx0fSxcblx0XHRpbnB1dFdTUyhlKXtcblx0XHRcdGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKTtcblx0XHRcdHRoaXMuV1NTVXJsID0gZS5kZXRhaWwudmFsdWU7XG5cdFx0fSxcblx0XHRkaXNjb25uZWN0V1NTKCl7XG5cdFx0XHRjbG9zZVdlYnNvY2tldFBvdGFzc2l1bSgpO1xuXHRcdH0sXG5cdFx0Y29ubmVjdFdTUygpe1xuXHRcdFx0Y2xvc2VXZWJzb2NrZXRQb3Rhc3NpdW0oKTtcblx0XHRcdGluaXRXZWJTb2NrZXRQb3Rhc3NpdW0odGhpcy5XU1NVcmwsKG1zZykgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcImhlYXJ0Q2hlY2tcIinvvJtcblx0XHRcdFx0dmFyIF9tc2cgPSBKU09OLnBhcnNlKG1zZy5kYXRhKTtcblx0XHRcdFx0aWYgKF9tc2cuYW5zd2VyKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coX21zZy5hbnN3ZXIpO1xuXHRcdFx0XHRcdHRoaXMuc2hvd1JvYm90UGFydCA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy5yb2JvdE1zZyA9IHRoaXMucm9ib3RNc2cgKyBfbXNnLmFuc3dlciArIFwi44CCXCI7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSxcblx0XHRsYW5ndWFnZVN3aXRjaChlKXtcblx0XHRcdGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxuXHRcdFx0aWYoZS5kZXRhaWwudmFsdWUpe1xuXHRcdFx0XHR0aGlzLmxhbmd1YWdlID0gZS5kZXRhaWwudmFsdWU7XG5cdFx0XHRcdHRoaXMubGFuZ3VnZVR5cGU9J3JlY29nbml0aW9uJztcblx0XHRcdH1lbHNlIGlmKCFlLmRldGFpbC52YWx1ZSl7XG5cdFx0XHRcdHRoaXMubGFuZ3VhZ2UgPSBlLmRldGFpbC52YWx1ZVxuXHRcdFx0XHR0aGlzLmxhbmd1Z2VUeXBlPSdyZWNvZ25pdGlvbkNOJztcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNsaWNrU2hvd1BvcHVwKCkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJjbGlja1Nob3dQb3B1cFwiKVxuXHRcdFx0dGhpcy4kcmVmcy5wb3B1cC5vcGVuKCk7XG5cdFx0fSxcblx0XHRjbGlja0hpZGVQb3B1cCgpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwiY2xpY2tIaWRlUG9wdXBcIilcblx0XHRcdHRoaXMuJHJlZnMucG9wdXAuY2xvc2UoKTtcblx0XHR9LFxuXHRcdGNsaWNrTGlua1NlcnZpY2VzKCkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJjbGlja0xpbmtTZXJ2aWNlc1wiKTtcblx0XHRcdHRoaXMuY2xpY2tIaWRlUG9wdXAoKTtcblx0XHRcdHNlbmREYXRhUG90YXNzaXVtKEpTT04uc3RyaW5naWZ5KHtjbG9zZTogJ2Nsb3NlJ30pKTtcblx0XHR9LFxuXHRcdGNsaWNrUGxheVZpZGVvKGUpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcblx0XHRcdHRoaXMuY2xpY2tIaWRlUG9wdXAoKTtcblx0XHRcdHNlbmREYXRhUG90YXNzaXVtKEpTT04uc3RyaW5naWZ5KHtjbG9zZTogJ2Nsb3NlJ30pKTtcblx0XHRcdHNlbmREYXRhUG90YXNzaXVtKEpTT04uc3RyaW5naWZ5KHtzZW5jZTogZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXh9KSk7XG5cdFx0fSxcblx0XHRjbGlja1BsYXlBdWRpbyhlKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCk7XG5cdFx0XHR0aGlzLmNsaWNrSGlkZVBvcHVwKCk7XG5cdFx0XHRzZW5kRGF0YVBvdGFzc2l1bShKU09OLnN0cmluZ2lmeSh7Y2xvc2U6ICdjbG9zZSd9KSk7XG5cdFx0XHRzZW5kRGF0YVBvdGFzc2l1bShKU09OLnN0cmluZ2lmeSh7YXVkaW86IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4fSkpO1xuXHRcdH0sXG5cdFx0bGFuZ1RhcCgpIHtcblx0XHRcdGNsZWFyVGltZW91dChsYW5ndGFwdGltZW91dCk7XG5cdFx0XHRsZXQgbGFuZ3RhcHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2xhbmdUYXAnKTtcblx0XHRcdFx0dGhpcy5yZWNvcmRlci5zdGFydCgpO1xuXHRcdFx0XHR0aGlzLnNob3dVc2VyUGFydCA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLnNob3dSb2JvdFBhcnQgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5pc0xhbmdUYXAgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnVzZXJNc2cgPSAnJztcblx0XHRcdFx0dGhpcy5yb2JvdE1zZyA9ICcnO1xuXHRcdFx0XHR0aGlzLnJlY29yZGluZyA9IHRydWU7XG5cdFx0XHRcdHRoaXMucmVjb3JkU3RhdHVzID0gMjtcblx0XHRcdFx0Ly8gc2VuZERhdGFQb3Rhc3NpdW0oSlNPTi5zdHJpbmdpZnkoeyBzZW5jZTogJzMnfSkpO1xuXHRcdFx0XHRzZW5kRGF0YVBvdGFzc2l1bShKU09OLnN0cmluZ2lmeSh7IGNsb3NlOiAnY2xvc2UnfSkpO1xuXHRcdFx0fSwgMjAwKVxuXHRcdH0sXG5cdFx0dG91Y2hTdGFydChlKSB7XG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XG5cblx0XHRcdHRoYXQuY2xpZW50WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDsgLy/miYvmjIfmjInkuIvml7bnmoRY5Z2Q5qCHXG5cdFx0XHR0aGF0LmNsaWVudFkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7IC8v5omL5oyH5oyJ5LiL5pe255qEWeWdkOagh1xuXHRcdFx0Ly8gaWYodGhhdC5pc0xhbmdUYXApe1xuXHRcdFx0bmF2aWdhdG9yLmdldFVzZXJNZWRpYSh7XG5cdFx0XHRcdGF1ZGlvOiB0cnVlXG5cdFx0XHR9LCBmdW5jdGlvbihzdHJlYW0pIHtcblx0XHRcdFx0dGhhdC5yZWNvcmRlciA9IG5ldyBIWlJlY29yZGVyKHN0cmVhbSlcblx0XHRcdFx0Y29uc29sZS5sb2coJ+WIneWni+WMluWujOaIkCcpO1xuXHRcdFx0fSwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnTm8gbGl2ZSBhdWRpbyBpbnB1dDogJyArIGUpO1xuXHRcdFx0fSk7XG5cdFx0XHQvLyB9XG5cblx0XHR9LFxuXHRcdHRvdWNoTW92ZShlKSB7XG5cdFx0XHRsZXQgdG91Y2hEYXRhID0gZS50b3VjaGVzWzBdO1xuXHRcdFx0bGV0IG1vdmVYID0gdG91Y2hEYXRhLmNsaWVudFggLSB0aGlzLmNsaWVudFg7XG5cdFx0XHRsZXQgbW92ZVkgPSB0b3VjaERhdGEuY2xpZW50WSAtIHRoaXMuY2xpZW50WTtcblx0XHRcdGlmIChtb3ZlWSA8IC01MCkge1xuXHRcdFx0XHQvLyDlkJHkuIrmu5Hliqhcblx0XHRcdFx0dGhpcy5jYW5jZWxSZWNvcmQgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnJlY29yZFN0YXR1cyA9IDE7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwi5ZCR5LiK5ruR5YqoXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8g5ZCR5LiL5ruR5YqoXG5cdFx0XHRcdHRoaXMuY2FuY2VsUmVjb3JkID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMucmVjb3JkU3RhdHVzID0gMjtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCLlkJHkuIvmu5HliqhcIik7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR0b3VjaEVuZCgpIHtcblx0XHRcdHRoaXMucmVjb3JkU3RhdHVzID0gMDtcblx0XHRcdGlmICghdGhpcy5jYW5jZWxSZWNvcmQpIHtcblx0XHRcdC8vIFx0Ly8g5a6M5oiQ5b2V6Z+zXG5cblx0XHRcdFx0dGhpcy5yZWNvcmRlci5zdG9wKCk7XG5cdFx0XHRcdHRoaXMucmVjb3JkZXIuZ2V0QmxvYigpO1xuXG5cdFx0XHRcdHZhciBtcDNCbG9iID0gdGhpcy5yZWNvcmRlci5nZXRCbG9iKCk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKG1wM0Jsb2IpO1xuXHRcdFx0XHRsZXQgZmlsZXMgPSBuZXcgRmlsZShbbXAzQmxvYl0sICdpbnB1dC53YXYnLCB7XG5cdFx0XHRcdFx0dHlwZTogJ2F1ZGlvL3dhdicsXG5cdFx0XHRcdFx0bGFzdE1vZGlmaWVkOiBEYXRlLm5vdygpXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRcdFx0Ly8gZmQuYXBwZW5kKCdmaWxlJywgZmlsZXMpO1xuXHRcdFx0XHRmZC5hcHBlbmQoJ211bHRpcGFydEZpbGUnLCBmaWxlcyk7XG5cdFx0XHRcdFxuXHRcdFx0XHR2YXIgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobXAzQmxvYik7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHVybCk7XG5cblx0XHRcdFx0YXhpb3Moe1xuXHRcdFx0XHRcdC8vIGJhc2VVUkw6ICdodHRwOi8vMTgyLjkyLjExOC4yMTE6MzAwMjAvYnVzaW5lc3MvYWlTZW5kLycsXG5cdFx0XHRcdFx0Ly8gYmFzZVVSTDogJ2h0dHBzOi8vc2hhcmUtdGVzdC5tZXRhemVuLXRlY2guY29tL2J1c2luZXNzL2FpU2VuZC8nLFxuXHRcdFx0XHRcdGJhc2VVUkw6ICdodHRwczovL2FpZ2MubWV0YXplbi10ZWNoLmNvbS9tZXRhLXR0cy9zcGVlY2gvJyxcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0XHQvLyB1cmw6ICdzcGVha0NoYW5nZScsXG5cdFx0XHRcdFx0dXJsOiB0aGlzLmxhbmd1Z2VUeXBlLFxuXHRcdFx0XHRcdC8vIHVybDogJ3JlY29nbml0aW9uQ04nLFxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZGF0YTogZmQsXG5cdFx0XHRcdH0pLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmluZm8ocmVzKTtcblx0XHRcdFx0XHQvLyBpZihyZXMuZGF0YS5tc2d8fHJlcy5kYXRhLm1zZy5sZW5ndGg+MHx8cmVzLmRhdGEubXNnIT09XCJcIil7XG5cdFx0XHRcdFx0aWYocmVzLmRhdGEuZGF0YXx8cmVzLmRhdGEuZGF0YS5sZW5ndGg+MHx8cmVzLmRhdGEuZGF0YSE9PVwiXCIpe1xuXHRcdFx0XHRcdFx0Ly8gdGhpcy51c2VyTXNnID0gcmVzLmRhdGEubXNnO1xuXHRcdFx0XHRcdFx0dGhpcy51c2VyTXNnID0gcmVzLmRhdGEuZGF0YTtcblx0XHRcdFx0XHRcdHRoaXMuc2hvd1VzZXJQYXJ0ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdC8vIHNlbmREYXRhUG90YXNzaXVtKEpTT04uc3RyaW5naWZ5KHsgYXNrOiByZXMuZGF0YS5tc2d9KSk7XG5cdFx0XHRcdFx0XHRzZW5kRGF0YVBvdGFzc2l1bShKU09OLnN0cmluZ2lmeSh7IGFzazogcmVzLmRhdGEuZGF0YX0pKTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W9k+WJjeS4uuivtOivneaIluW9leWFpeWjsOmfs+WkquWwjycsXG5cdFx0XHRcdFx0XHRcdGljb246ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pLmNhdGNoKGVyciA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5pbmZvKGVycilcblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIOatpOaXtuadvuaJi+WQjuWTjeW6lOeahOaYr+WPlua2iOW9lemfs1xuXHRcdFx0XHRjb25zb2xlLmluZm8oJ+WPlua2iOW9lemfsycpXG5cdFx0XHR9XG5cblx0XHRcdC8vIHNlbmREYXRhUG90YXNzaXVtKEpTT04uc3RyaW5naWZ5KHsgYXNrOiBcIuS9oOWlvVwifSkpO1xuXG5cdFx0XHQvLyB0aGlzLnJlY29yZGVyLnBsYXkodGhpcy5pbm5lckF1ZGlvQ29udGV4dCk7XG5cdFx0XHR0aGlzLnJlY29yZGluZyA9IGZhbHNlO1xuXHRcdFx0dGhpcy5jYW5jZWxSZWNvcmQgPSBmYWxzZTtcblx0XHRcdHRoaXMuaXNMYW5nVGFwID0gZmFsc2U7XG5cblx0XHR9LFxuXHRcdHBsYXlWb2ljZSgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCfmkq3mlL7lvZXpn7MnKTtcblxuXHRcdFx0aWYgKHRoaXMudm9pY2VQYXRoKSB7XG5cdFx0XHRcdHRoaXMuaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gdGhpcy52b2ljZVBhdGg7XG5cdFx0XHRcdHRoaXMuaW5uZXJBdWRpb0NvbnRleHQucGxheSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///40\n");

/***/ }),
/* 41 */
/*!*****************************************************!*\
  !*** D:/Develop/ASIA-POTASH/common/net/netAgent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 26));\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 27));\nvar _netEngine = _interopRequireDefault(__webpack_require__(/*! ./netEngine.js */ 42));\nvar _vconsoleMin = _interopRequireDefault(__webpack_require__(/*! ../../common/vconsole/vconsole.min.js */ 43));\nvar NetAgent = /*#__PURE__*/function () {\n  function NetAgent() {\n    (0, _classCallCheck2.default)(this, NetAgent);\n    this.isShowLog = true;\n    this.isver; //判断ios系统版本\n\n    if (this.isShowLog) {\n      // new vConsole();\n    }\n    var isOffline = false; //是否单机模式\n    this.netEngine = new _netEngine.default(this.isShowLog, isOffline);\n  }\n\n  // 获取系统版本号\n  // getSystemVer() {\n  // \tvar str = navigator.userAgent.toLowerCase();\n  // \tvar ver = str.match(/cpu iphone os (.*?) like mac os/);\n\n  // \tif (ver == null) {\n  // \t\tconsole.log(\"安卓\");\n  // \t} else {\n  // \t\tvar vnum = ver[1].replace(/_/g, \",\");\n  // \t\tvar arr = vnum.split(\",\")\n  // \t\t// console.log(arr);\n  // \t\tif (arr[0] > 13 && arr[1] >= 3) {\n  // \t\t\tthis.isver = false;\n  // \t\t} else {\n  // \t\t\tthis.isver = true;\n  // \t\t}\n  // \t}\n  // }\n  (0, _createClass2.default)(NetAgent, [{\n    key: \"faceSwap\",\n    value: function faceSwap(sourceImage, targetVideo, callback) {\n      var _data = {\n        sourceImage: sourceImage,\n        targetVideo: targetVideo\n      };\n      // let _data = {\n      // \t\tsourceImage: \"4142.jpeg\",\n      // \t\ttargetVideo:\"YUAN_xiaomei_qipao_stand_001.mp4\"\n      // \t}\n      this.netEngine.netEngineRequest(this.netEngine.fACE_SWAP, _data, \"POST\", function (res) {\n        // console.log(res);\n        if (callback != null) {\n          callback(res);\n        }\n      }, function (res) {\n        __f__(\"log\", \"-faceSwap-失败！\", res, \" at common/net/netAgent.js:56\");\n        uni.showToast({\n          title: res.msg,\n          icon: \"none\"\n        });\n      });\n    }\n  }, {\n    key: \"speakChange\",\n    value: function speakChange(blob, callback) {\n      // let _data = {\n      // \t\"file\":blob\n      // }\n      var _data = blob;\n      // console.log(blob,this.netEngine.SPEAK_CHANGE);\n\n      this.netEngine.netEngineRequest(this.netEngine.SPEAK_CHANGE, _data, \"POST\", function (res) {\n        __f__(\"log\", res, \" at common/net/netAgent.js:76\");\n        if (callback != null) {\n          callback(res);\n        }\n      }, function (res) {\n        __f__(\"log\", \"-speakChange-失败！\", res, \" at common/net/netAgent.js:82\");\n        uni.showToast({\n          title: res.msg,\n          icon: \"none\"\n        });\n      });\n    }\n\n    //---------------示例-------------\n    // 分享\n  }, {\n    key: \"share\",\n    value: function share(callback) {\n      this.netEngine.netEngineRequest(this.netEngine.SHARE, null, \"POST\", function (res) {\n        // console.log(res);\n        if (callback != null) {\n          callback(res);\n        }\n      }, function (res) {\n        __f__(\"log\", \"-分享-失败！\", res, \" at common/net/netAgent.js:107\");\n        uni.showToast({\n          title: res.msg,\n          icon: \"none\"\n        });\n      });\n    }\n\n    // 中奖记录\n  }, {\n    key: \"record\",\n    value: function record(callback) {\n      this.netEngine.netEngineRequest(this.netEngine.RECORD, null, \"GET\", function (res) {\n        __f__(\"log\", res, \" at common/net/netAgent.js:123\");\n        if (callback != null) {\n          callback(res);\n        }\n      }, function (res) {\n        __f__(\"log\", \"-中奖记录-失败！\", res, \" at common/net/netAgent.js:129\");\n        uni.showToast({\n          title: res.msg,\n          icon: \"none\"\n        });\n      });\n    }\n\n    //---------------示例-------------\n  }]);\n  return NetAgent;\n}();\nvar netAgent = new NetAgent();\nwindow.netAgent = netAgent;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL25ldC9uZXRBZ2VudC5qcyJdLCJuYW1lcyI6WyJOZXRBZ2VudCIsImlzU2hvd0xvZyIsImlzdmVyIiwiaXNPZmZsaW5lIiwibmV0RW5naW5lIiwiTmV0RW5naW5lIiwic291cmNlSW1hZ2UiLCJ0YXJnZXRWaWRlbyIsImNhbGxiYWNrIiwiX2RhdGEiLCJuZXRFbmdpbmVSZXF1ZXN0IiwiZkFDRV9TV0FQIiwicmVzIiwidW5pIiwic2hvd1RvYXN0IiwidGl0bGUiLCJtc2ciLCJpY29uIiwiYmxvYiIsIlNQRUFLX0NIQU5HRSIsIlNIQVJFIiwiUkVDT1JEIiwibmV0QWdlbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUE2RCxJQUV2REEsUUFBUTtFQUViLG9CQUFjO0lBQUE7SUFDYixJQUFJLENBQUNDLFNBQVMsR0FBRyxJQUFJO0lBQ3JCLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUM7O0lBRVosSUFBSSxJQUFJLENBQUNELFNBQVMsRUFBRTtNQUNuQjtJQUFBO0lBRUQsSUFBSUUsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLElBQUlDLGtCQUFTLENBQUMsSUFBSSxDQUFDSixTQUFTLEVBQUVFLFNBQVMsQ0FBQztFQUUxRDs7RUFFQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUFBO0lBQUE7SUFBQSxPQUNBLGtCQUFTRyxXQUFXLEVBQUNDLFdBQVcsRUFBQ0MsUUFBUSxFQUFFO01BQzFDLElBQUlDLEtBQUssR0FBRTtRQUNUSCxXQUFXLEVBQUVBLFdBQVc7UUFDeEJDLFdBQVcsRUFBRUE7TUFDZCxDQUFDO01BQ0Y7TUFDQTtNQUNBO01BQ0E7TUFDQSxJQUFJLENBQUNILFNBQVMsQ0FBQ00sZ0JBQWdCLENBQzlCLElBQUksQ0FBQ04sU0FBUyxDQUFDTyxTQUFTLEVBQ3hCRixLQUFLLEVBQ0wsTUFBTSxFQUNOLFVBQUNHLEdBQUcsRUFBSztRQUNSO1FBQ0EsSUFBSUosUUFBUSxJQUFJLElBQUksRUFBRTtVQUNyQkEsUUFBUSxDQUFDSSxHQUFHLENBQUM7UUFDZDtNQUNELENBQUMsRUFDRCxVQUFDQSxHQUFHLEVBQUs7UUFDUixhQUFZLGVBQWUsRUFBRUEsR0FBRztRQUNoQ0MsR0FBRyxDQUFDQyxTQUFTLENBQUM7VUFDYkMsS0FBSyxFQUFFSCxHQUFHLENBQUNJLEdBQUc7VUFDZEMsSUFBSSxFQUFFO1FBQ1AsQ0FBQyxDQUFDO01BQ0gsQ0FBQyxDQUNEO0lBQ0Y7RUFBQztJQUFBO0lBQUEsT0FDRCxxQkFBWUMsSUFBSSxFQUFDVixRQUFRLEVBQUU7TUFDMUI7TUFDQTtNQUNBO01BQ0EsSUFBSUMsS0FBSyxHQUFHUyxJQUFJO01BQ2hCOztNQUVBLElBQUksQ0FBQ2QsU0FBUyxDQUFDTSxnQkFBZ0IsQ0FDOUIsSUFBSSxDQUFDTixTQUFTLENBQUNlLFlBQVksRUFDM0JWLEtBQUssRUFDTCxNQUFNLEVBQ04sVUFBQ0csR0FBRyxFQUFLO1FBQ1IsYUFBWUEsR0FBRztRQUNmLElBQUlKLFFBQVEsSUFBSSxJQUFJLEVBQUU7VUFDckJBLFFBQVEsQ0FBQ0ksR0FBRyxDQUFDO1FBQ2Q7TUFDRCxDQUFDLEVBQ0QsVUFBQ0EsR0FBRyxFQUFLO1FBQ1IsYUFBWSxrQkFBa0IsRUFBRUEsR0FBRztRQUNuQ0MsR0FBRyxDQUFDQyxTQUFTLENBQUM7VUFDYkMsS0FBSyxFQUFFSCxHQUFHLENBQUNJLEdBQUc7VUFDZEMsSUFBSSxFQUFFO1FBQ1AsQ0FBQyxDQUFDO01BQ0gsQ0FBQyxDQUNEO0lBQ0Y7O0lBR0E7SUFDQTtFQUFBO0lBQUE7SUFBQSxPQUNBLGVBQU1ULFFBQVEsRUFBRTtNQUNmLElBQUksQ0FBQ0osU0FBUyxDQUFDTSxnQkFBZ0IsQ0FDOUIsSUFBSSxDQUFDTixTQUFTLENBQUNnQixLQUFLLEVBQ3BCLElBQUksRUFDSixNQUFNLEVBQ04sVUFBQ1IsR0FBRyxFQUFLO1FBQ1I7UUFDQSxJQUFJSixRQUFRLElBQUksSUFBSSxFQUFFO1VBQ3JCQSxRQUFRLENBQUNJLEdBQUcsQ0FBQztRQUNkO01BRUQsQ0FBQyxFQUNELFVBQUNBLEdBQUcsRUFBSztRQUNSLGFBQVksU0FBUyxFQUFFQSxHQUFHO1FBQzFCQyxHQUFHLENBQUNDLFNBQVMsQ0FBQztVQUNiQyxLQUFLLEVBQUVILEdBQUcsQ0FBQ0ksR0FBRztVQUNkQyxJQUFJLEVBQUU7UUFDUCxDQUFDLENBQUM7TUFDSCxDQUFDLENBQ0Q7SUFDRjs7SUFFQTtFQUFBO0lBQUE7SUFBQSxPQUNBLGdCQUFPVCxRQUFRLEVBQUU7TUFDaEIsSUFBSSxDQUFDSixTQUFTLENBQUNNLGdCQUFnQixDQUM5QixJQUFJLENBQUNOLFNBQVMsQ0FBQ2lCLE1BQU0sRUFDckIsSUFBSSxFQUNKLEtBQUssRUFDTCxVQUFDVCxHQUFHLEVBQUs7UUFDUixhQUFZQSxHQUFHO1FBQ2YsSUFBSUosUUFBUSxJQUFJLElBQUksRUFBRTtVQUNyQkEsUUFBUSxDQUFDSSxHQUFHLENBQUM7UUFDZDtNQUNELENBQUMsRUFDRCxVQUFDQSxHQUFHLEVBQUs7UUFDUixhQUFZLFdBQVcsRUFBRUEsR0FBRztRQUM1QkMsR0FBRyxDQUFDQyxTQUFTLENBQUM7VUFDYkMsS0FBSyxFQUFFSCxHQUFHLENBQUNJLEdBQUc7VUFDZEMsSUFBSSxFQUFFO1FBQ1AsQ0FBQyxDQUFDO01BQ0gsQ0FBQyxDQUNEO0lBQ0Y7O0lBRUE7RUFBQTtFQUFBO0FBQUE7QUFPRCxJQUFNSyxRQUFRLEdBQUcsSUFBSXRCLFFBQVEsRUFBRTtBQUMvQnVCLE1BQU0sQ0FBQ0QsUUFBUSxHQUFHQSxRQUFRLEMiLCJmaWxlIjoiNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV0RW5naW5lIGZyb20gJy4vbmV0RW5naW5lLmpzJ1xyXG5pbXBvcnQgdkNvbnNvbGUgZnJvbSAnLi4vLi4vY29tbW9uL3Zjb25zb2xlL3Zjb25zb2xlLm1pbi5qcyc7XHJcblxyXG5jbGFzcyBOZXRBZ2VudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5pc1Nob3dMb2cgPSB0cnVlO1xyXG5cdFx0dGhpcy5pc3ZlcjsgLy/liKTmlq1pb3Pns7vnu5/niYjmnKxcclxuXHJcblx0XHRpZiAodGhpcy5pc1Nob3dMb2cpIHtcclxuXHRcdFx0Ly8gbmV3IHZDb25zb2xlKCk7XHJcblx0XHR9XHJcblx0XHRsZXQgaXNPZmZsaW5lID0gZmFsc2U7IC8v5piv5ZCm5Y2V5py65qih5byPXHJcblx0XHR0aGlzLm5ldEVuZ2luZSA9IG5ldyBOZXRFbmdpbmUodGhpcy5pc1Nob3dMb2csIGlzT2ZmbGluZSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g6I635Y+W57O757uf54mI5pys5Y+3XHJcblx0Ly8gZ2V0U3lzdGVtVmVyKCkge1xyXG5cdC8vIFx0dmFyIHN0ciA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuXHQvLyBcdHZhciB2ZXIgPSBzdHIubWF0Y2goL2NwdSBpcGhvbmUgb3MgKC4qPykgbGlrZSBtYWMgb3MvKTtcclxuXHJcblx0Ly8gXHRpZiAodmVyID09IG51bGwpIHtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coXCLlronljZNcIik7XHJcblx0Ly8gXHR9IGVsc2Uge1xyXG5cdC8vIFx0XHR2YXIgdm51bSA9IHZlclsxXS5yZXBsYWNlKC9fL2csIFwiLFwiKTtcclxuXHQvLyBcdFx0dmFyIGFyciA9IHZudW0uc3BsaXQoXCIsXCIpXHJcblx0Ly8gXHRcdC8vIGNvbnNvbGUubG9nKGFycik7XHJcblx0Ly8gXHRcdGlmIChhcnJbMF0gPiAxMyAmJiBhcnJbMV0gPj0gMykge1xyXG5cdC8vIFx0XHRcdHRoaXMuaXN2ZXIgPSBmYWxzZTtcclxuXHQvLyBcdFx0fSBlbHNlIHtcclxuXHQvLyBcdFx0XHR0aGlzLmlzdmVyID0gdHJ1ZTtcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHRmYWNlU3dhcChzb3VyY2VJbWFnZSx0YXJnZXRWaWRlbyxjYWxsYmFjaykge1xyXG5cdFx0bGV0IF9kYXRhID17XHJcblx0XHRcdFx0c291cmNlSW1hZ2U6IHNvdXJjZUltYWdlLFxyXG5cdFx0XHRcdHRhcmdldFZpZGVvOiB0YXJnZXRWaWRlb1xyXG5cdFx0XHR9XHJcblx0XHQvLyBsZXQgX2RhdGEgPSB7XHJcblx0XHQvLyBcdFx0c291cmNlSW1hZ2U6IFwiNDE0Mi5qcGVnXCIsXHJcblx0XHQvLyBcdFx0dGFyZ2V0VmlkZW86XCJZVUFOX3hpYW9tZWlfcWlwYW9fc3RhbmRfMDAxLm1wNFwiXHJcblx0XHQvLyBcdH1cclxuXHRcdHRoaXMubmV0RW5naW5lLm5ldEVuZ2luZVJlcXVlc3QoXHJcblx0XHRcdHRoaXMubmV0RW5naW5lLmZBQ0VfU1dBUCxcclxuXHRcdFx0X2RhdGEsXHJcblx0XHRcdFwiUE9TVFwiLFxyXG5cdFx0XHQocmVzKSA9PiB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRpZiAoY2FsbGJhY2sgIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2socmVzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdChyZXMpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIi1mYWNlU3dhcC3lpLHotKXvvIFcIiwgcmVzKTtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiByZXMubXNnLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJub25lXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fVxyXG5cdHNwZWFrQ2hhbmdlKGJsb2IsY2FsbGJhY2spIHtcclxuXHRcdC8vIGxldCBfZGF0YSA9IHtcclxuXHRcdC8vIFx0XCJmaWxlXCI6YmxvYlxyXG5cdFx0Ly8gfVxyXG5cdFx0bGV0IF9kYXRhID0gYmxvYlxyXG5cdFx0Ly8gY29uc29sZS5sb2coYmxvYix0aGlzLm5ldEVuZ2luZS5TUEVBS19DSEFOR0UpO1xyXG5cclxuXHRcdHRoaXMubmV0RW5naW5lLm5ldEVuZ2luZVJlcXVlc3QoXHJcblx0XHRcdHRoaXMubmV0RW5naW5lLlNQRUFLX0NIQU5HRSxcclxuXHRcdFx0X2RhdGEsXHJcblx0XHRcdFwiUE9TVFwiLFxyXG5cdFx0XHQocmVzKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRpZiAoY2FsbGJhY2sgIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2socmVzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdChyZXMpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIi1zcGVha0NoYW5nZS3lpLHotKXvvIFcIiwgcmVzKTtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiByZXMubXNnLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJub25lXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fVxyXG5cdFxyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLeekuuS+iy0tLS0tLS0tLS0tLS1cclxuXHQvLyDliIbkuqtcclxuXHRzaGFyZShjYWxsYmFjaykge1xyXG5cdFx0dGhpcy5uZXRFbmdpbmUubmV0RW5naW5lUmVxdWVzdChcclxuXHRcdFx0dGhpcy5uZXRFbmdpbmUuU0hBUkUsXHJcblx0XHRcdG51bGwsXHJcblx0XHRcdFwiUE9TVFwiLFxyXG5cdFx0XHQocmVzKSA9PiB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRpZiAoY2FsbGJhY2sgIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2socmVzKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHQocmVzKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCIt5YiG5LqrLeWksei0pe+8gVwiLCByZXMpO1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6IHJlcy5tc2csXHJcblx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9XHJcblxyXG5cdC8vIOS4reWlluiusOW9lVxyXG5cdHJlY29yZChjYWxsYmFjaykge1xyXG5cdFx0dGhpcy5uZXRFbmdpbmUubmV0RW5naW5lUmVxdWVzdChcclxuXHRcdFx0dGhpcy5uZXRFbmdpbmUuUkVDT1JELFxyXG5cdFx0XHRudWxsLFxyXG5cdFx0XHRcIkdFVFwiLFxyXG5cdFx0XHQocmVzKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRpZiAoY2FsbGJhY2sgIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2socmVzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdChyZXMpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIi3kuK3lpZborrDlvZUt5aSx6LSl77yBXCIsIHJlcyk7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogcmVzLm1zZyxcclxuXHRcdFx0XHRcdGljb246IFwibm9uZVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdH1cclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS3npLrkvostLS0tLS0tLS0tLS0tXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBuZXRBZ2VudCA9IG5ldyBOZXRBZ2VudCgpO1xyXG53aW5kb3cubmV0QWdlbnQgPSBuZXRBZ2VudDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!******************************************************!*\
  !*** D:/Develop/ASIA-POTASH/common/net/netEngine.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 26));\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 27));\nvar authorization = null;\nvar userId = null;\nvar NetEngine = /*#__PURE__*/function () {\n  function NetEngine(isShowLog, isOffline) {\n    (0, _classCallCheck2.default)(this, NetEngine);\n    this.isShowLog = isShowLog;\n    this.isOffline = isOffline;\n\n    // 部署环境\n    // this.netURL = \"http://share-test.metazen-tech.com/api/business/aiSend/\"; //开发环境\n    this.netURL = \"http://182.92.118.211:30020/business/aiSend/\"; //测试环境\n    // this.netURL = \"http://182.92.118.211:30020/business/aiSend/speakChange\"; //测试环境\n    // 接口\n    this.SPEAK_CHANGE = \"speakChange\";\n  }\n  (0, _createClass2.default)(NetEngine, [{\n    key: \"netEngineRequest\",\n    value: function netEngineRequest(_name, _data, _type, success, fail) {\n      if (this.isOffline) {\n        __f__(\"log\", this.isOffline, 11, \" at common/net/netEngine.js:20\");\n        this.loadLocalJson(_name, _data, success);\n      } else {\n        this.xmlHttpRequest(this.netURL, _name, _data, _type, success, fail);\n      }\n    }\n    // setAuthorization\n  }, {\n    key: \"setAuthorization\",\n    value: function setAuthorization(_authorization) {\n      authorization = _authorization;\n      // console.log(\"设置authorization\", _authorization);\n    }\n  }, {\n    key: \"setUserId\",\n    value: function setUserId(_userId) {\n      userId = _userId;\n      // console.log(\"设置userId\", _userId);\n    }\n\n    //网络请求\n  }, {\n    key: \"xmlHttpRequest\",\n    value: function xmlHttpRequest(_url, _name, _data, _type, _success, _fail) {\n      __f__(\"log\", _data, \" at common/net/netEngine.js:38\");\n      uni.request({\n        url: _url + _name,\n        // url: _url,\n        data: _data,\n        method: _type,\n        // headers : {'Content-Type': 'application/json'},\n        // headers : {'Content-Type': 'multipart/form-data'},\n        header: {\n          // 'Content-Type':'multipart/form-data'\n          'Content-Type': 'application/json'\n        },\n        success: function success(res) {\n          // console.log(res);\n          if (res.data.code == 200) {\n            // if (res.data.status == 200) {\n            _success(res.data);\n            // } else {\n            // _fail(res.data)\n            // }\n          } else {\n            _fail(res.data);\n            // console.log('res.statusCode',res.statusCode)\n          }\n        },\n\n        fail: function fail(res) {\n          // console.log(res);\n          uni.showToast({\n            title: \"请求失败\",\n            icon: \"none\"\n          });\n          _fail(res);\n        }\n      });\n    }\n  }]);\n  return NetEngine;\n}();\nexports.default = NetEngine;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL25ldC9uZXRFbmdpbmUuanMiXSwibmFtZXMiOlsiYXV0aG9yaXphdGlvbiIsInVzZXJJZCIsIk5ldEVuZ2luZSIsImlzU2hvd0xvZyIsImlzT2ZmbGluZSIsIm5ldFVSTCIsIlNQRUFLX0NIQU5HRSIsIl9uYW1lIiwiX2RhdGEiLCJfdHlwZSIsInN1Y2Nlc3MiLCJmYWlsIiwibG9hZExvY2FsSnNvbiIsInhtbEh0dHBSZXF1ZXN0IiwiX2F1dGhvcml6YXRpb24iLCJfdXNlcklkIiwiX3VybCIsIl9zdWNjZXNzIiwiX2ZhaWwiLCJ1bmkiLCJyZXF1ZXN0IiwidXJsIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlciIsInJlcyIsImNvZGUiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBRyxJQUFJO0FBQ3hCLElBQUlDLE1BQU0sR0FBRyxJQUFJO0FBQUMsSUFDR0MsU0FBUztFQUU3QixtQkFBWUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFBQTtJQUNqQyxJQUFJLENBQUNELFNBQVMsR0FBR0EsU0FBUztJQUMxQixJQUFJLENBQUNDLFNBQVMsR0FBR0EsU0FBUzs7SUFFMUI7SUFDQTtJQUNBLElBQUksQ0FBQ0MsTUFBTSxHQUFHLDhDQUE4QyxDQUFDLENBQUM7SUFDOUQ7SUFDQTtJQUNBLElBQUksQ0FBQ0MsWUFBWSxHQUFHLGFBQWE7RUFDbEM7RUFBQztJQUFBO0lBQUEsT0FHRCwwQkFBaUJDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFO01BQ3BELElBQUksSUFBSSxDQUFDUCxTQUFTLEVBQUU7UUFDbkIsYUFBWSxJQUFJLENBQUNBLFNBQVMsRUFBRSxFQUFFO1FBQzlCLElBQUksQ0FBQ1EsYUFBYSxDQUFDTCxLQUFLLEVBQUVDLEtBQUssRUFBRUUsT0FBTyxDQUFDO01BQzFDLENBQUMsTUFBTTtRQUNOLElBQUksQ0FBQ0csY0FBYyxDQUFDLElBQUksQ0FBQ1IsTUFBTSxFQUFFRSxLQUFLLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLElBQUksQ0FBQztNQUNyRTtJQUNEO0lBQ0E7RUFBQTtJQUFBO0lBQUEsT0FDQSwwQkFBaUJHLGNBQWMsRUFBRTtNQUNoQ2QsYUFBYSxHQUFHYyxjQUFjO01BQzlCO0lBQ0Q7RUFBQztJQUFBO0lBQUEsT0FDRCxtQkFBVUMsT0FBTyxFQUFFO01BQ2xCZCxNQUFNLEdBQUdjLE9BQU87TUFDaEI7SUFDRDs7SUFFQTtFQUFBO0lBQUE7SUFBQSxPQUNBLHdCQUFlQyxJQUFJLEVBQUVULEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVRLFFBQVEsRUFBRUMsS0FBSyxFQUFFO01BQzFELGFBQWFWLEtBQUs7TUFDbEJXLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDO1FBQ1hDLEdBQUcsRUFBRUwsSUFBSSxHQUFHVCxLQUFLO1FBQ2pCO1FBQ0FlLElBQUksRUFBRWQsS0FBSztRQUNYZSxNQUFNLEVBQUVkLEtBQUs7UUFDYjtRQUNBO1FBQ0FlLE1BQU0sRUFBRTtVQUNQO1VBQ0EsY0FBYyxFQUFFO1FBQ2pCLENBQUM7UUFDRGQsT0FBTyxFQUFFLGlCQUFDZSxHQUFHLEVBQUs7VUFDakI7VUFDQSxJQUFJQSxHQUFHLENBQUNILElBQUksQ0FBQ0ksSUFBSSxJQUFJLEdBQUcsRUFBRTtZQUN6QjtZQUNBVCxRQUFRLENBQUNRLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDO1lBQ2xCO1lBQ0M7WUFDRDtVQUNELENBQUMsTUFBTTtZQUNOSixLQUFLLENBQUNPLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDO1lBQ2Y7VUFDRDtRQUNELENBQUM7O1FBQ0RYLElBQUksRUFBRSxjQUFDYyxHQUFHLEVBQUs7VUFDZDtVQUNBTixHQUFHLENBQUNRLFNBQVMsQ0FBQztZQUNiQyxLQUFLLEVBQUUsTUFBTTtZQUNiQyxJQUFJLEVBQUU7VUFDUCxDQUFDLENBQUM7VUFDRlgsS0FBSyxDQUFDTyxHQUFHLENBQUM7UUFDWDtNQUNELENBQUMsQ0FBQztJQUNIO0VBQUM7RUFBQTtBQUFBO0FBQUEsNEIiLCJmaWxlIjoiNDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYXV0aG9yaXphdGlvbiA9IG51bGw7XHJcbmxldCB1c2VySWQgPSBudWxsO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXRFbmdpbmUge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihpc1Nob3dMb2csIGlzT2ZmbGluZSkge1xyXG5cdFx0dGhpcy5pc1Nob3dMb2cgPSBpc1Nob3dMb2c7XHJcblx0XHR0aGlzLmlzT2ZmbGluZSA9IGlzT2ZmbGluZTtcclxuXHJcblx0XHQvLyDpg6jnvbLnjq/looNcclxuXHRcdC8vIHRoaXMubmV0VVJMID0gXCJodHRwOi8vc2hhcmUtdGVzdC5tZXRhemVuLXRlY2guY29tL2FwaS9idXNpbmVzcy9haVNlbmQvXCI7IC8v5byA5Y+R546v5aKDXHJcblx0XHR0aGlzLm5ldFVSTCA9IFwiaHR0cDovLzE4Mi45Mi4xMTguMjExOjMwMDIwL2J1c2luZXNzL2FpU2VuZC9cIjsgLy/mtYvor5Xnjq/looNcclxuXHRcdC8vIHRoaXMubmV0VVJMID0gXCJodHRwOi8vMTgyLjkyLjExOC4yMTE6MzAwMjAvYnVzaW5lc3MvYWlTZW5kL3NwZWFrQ2hhbmdlXCI7IC8v5rWL6K+V546v5aKDXHJcblx0XHQvLyDmjqXlj6NcclxuXHRcdHRoaXMuU1BFQUtfQ0hBTkdFID0gXCJzcGVha0NoYW5nZVwiIFxyXG5cdH1cclxuXHJcblxyXG5cdG5ldEVuZ2luZVJlcXVlc3QoX25hbWUsIF9kYXRhLCBfdHlwZSwgc3VjY2VzcywgZmFpbCkge1xyXG5cdFx0aWYgKHRoaXMuaXNPZmZsaW5lKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuaXNPZmZsaW5lLCAxMSk7XHJcblx0XHRcdHRoaXMubG9hZExvY2FsSnNvbihfbmFtZSwgX2RhdGEsIHN1Y2Nlc3MpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy54bWxIdHRwUmVxdWVzdCh0aGlzLm5ldFVSTCwgX25hbWUsIF9kYXRhLCBfdHlwZSwgc3VjY2VzcywgZmFpbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIHNldEF1dGhvcml6YXRpb25cclxuXHRzZXRBdXRob3JpemF0aW9uKF9hdXRob3JpemF0aW9uKSB7XHJcblx0XHRhdXRob3JpemF0aW9uID0gX2F1dGhvcml6YXRpb247XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIuiuvue9rmF1dGhvcml6YXRpb25cIiwgX2F1dGhvcml6YXRpb24pO1xyXG5cdH1cclxuXHRzZXRVc2VySWQoX3VzZXJJZCkge1xyXG5cdFx0dXNlcklkID0gX3VzZXJJZDtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwi6K6+572udXNlcklkXCIsIF91c2VySWQpO1xyXG5cdH1cclxuXHJcblx0Ly/nvZHnu5zor7fmsYJcclxuXHR4bWxIdHRwUmVxdWVzdChfdXJsLCBfbmFtZSwgX2RhdGEsIF90eXBlLCBfc3VjY2VzcywgX2ZhaWwpIHtcclxuXHRcdGNvbnNvbGUubG9nKCBfZGF0YSlcclxuXHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiBfdXJsICsgX25hbWUsXHJcblx0XHRcdC8vIHVybDogX3VybCxcclxuXHRcdFx0ZGF0YTogX2RhdGEsXHJcblx0XHRcdG1ldGhvZDogX3R5cGUsXHJcblx0XHRcdC8vIGhlYWRlcnMgOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXHJcblx0XHRcdC8vIGhlYWRlcnMgOiB7J0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ30sXHJcblx0XHRcdGhlYWRlcjoge1xyXG5cdFx0XHRcdC8vICdDb250ZW50LVR5cGUnOidtdWx0aXBhcnQvZm9ybS1kYXRhJ1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHQvLyBpZiAocmVzLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG5cdFx0XHRcdFx0X3N1Y2Nlc3MocmVzLmRhdGEpO1xyXG5cdFx0XHRcdFx0Ly8gfSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8gX2ZhaWwocmVzLmRhdGEpXHJcblx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9mYWlsKHJlcy5kYXRhKVxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3Jlcy5zdGF0dXNDb2RlJyxyZXMuc3RhdHVzQ29kZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWw6IChyZXMpID0+IHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6IFwi6K+35rGC5aSx6LSlXCIsXHJcblx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdF9mYWlsKHJlcyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!**************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/common/vconsole/vconsole.min.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);\n/*!\r\n * vConsole v3.2.0 (https://github.com/Tencent/vConsole)\r\n * \r\n * Tencent is pleased to support the open source community by making vConsole available.\r\n * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.\r\n * Licensed under the MIT License (the \"License\"); you may not use this file except in compliance with the License. You may obtain a copy of the License at\r\n * http://opensource.org/licenses/MIT\r\n * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.\r\n */\n!function (e, t) {\n  \"object\" == ( false ? undefined : _typeof(exports)) && \"object\" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n}(this, function () {\n  return function (e) {\n    function t(n) {\n      if (o[n]) return o[n].exports;\n      var i = o[n] = {\n        exports: {},\n        id: n,\n        loaded: !1\n      };\n      return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;\n    }\n    var o = {};\n    return t.m = e, t.c = o, t.p = \"\", t(0);\n  }([function (e, t, o) {\n    \"use strict\";\n\n    function n(e) {\n      return e && e.__esModule ? e : {\n        \"default\": e\n      };\n    }\n    Object.defineProperty(t, \"__esModule\", {\n      value: !0\n    }), o(1);\n    var i = o(2),\n      a = n(i),\n      r = o(18),\n      l = n(r);\n    a[\"default\"].VConsolePlugin = l[\"default\"], t[\"default\"] = a[\"default\"], e.exports = t[\"default\"];\n  }, function (e, t) {\n    \"use strict\";\n\n    if (\"undefined\" == typeof Symbol) {\n      window.Symbol = function () {};\n      var o = \"__symbol_iterator_key\";\n      window.Symbol.iterator = o, Array.prototype[o] = function () {\n        var e = this,\n          t = 0;\n        return {\n          next: function next() {\n            return {\n              done: e.length === t,\n              value: e.length === t ? void 0 : e[t++]\n            };\n          }\n        };\n      };\n    }\n  }, function (e, t, o) {\n    \"use strict\";\n\n    function n(e) {\n      if (e && e.__esModule) return e;\n      var t = {};\n      if (null != e) for (var o in e) {\n        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);\n      }\n      return t[\"default\"] = e, t;\n    }\n    function i(e) {\n      return e && e.__esModule ? e : {\n        \"default\": e\n      };\n    }\n    function a(e, t) {\n      if (!(e instanceof t)) throw new TypeError(\"Cannot call a class as a function\");\n    }\n    Object.defineProperty(t, \"__esModule\", {\n      value: !0\n    });\n    var r = function () {\n        function e(e, t) {\n          for (var o = 0; o < t.length; o++) {\n            var n = t[o];\n            n.enumerable = n.enumerable || !1, n.configurable = !0, \"value\" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);\n          }\n        }\n        return function (t, o, n) {\n          return o && e(t.prototype, o), n && e(t, n), t;\n        };\n      }(),\n      l = o(3),\n      c = i(l),\n      s = o(4),\n      d = n(s),\n      u = o(5),\n      v = i(u);\n    o(7);\n    var f = o(11),\n      p = i(f),\n      h = o(12),\n      g = i(h),\n      b = o(13),\n      m = i(b),\n      y = o(14),\n      _ = i(y),\n      w = o(15),\n      x = i(w),\n      k = o(16),\n      C = i(k),\n      T = o(24),\n      O = i(T),\n      E = o(26),\n      S = i(E),\n      L = o(30),\n      j = i(L),\n      N = o(37),\n      P = i(N),\n      M = \"#__vconsole\",\n      A = function () {\n        function e(t) {\n          if (a(this, e), v[\"default\"].one(M)) return void __f__(\"log\", \"vConsole is already exists.\", \" at common/vconsole/vconsole.min.js:10\");\n          var o = this;\n          if (this.version = c[\"default\"].version, this.$dom = null, this.isInited = !1, this.option = {\n            defaultPlugins: [\"system\", \"network\", \"element\", \"storage\"]\n          }, this.activedTab = \"\", this.tabList = [], this.pluginList = {}, this.switchPos = {\n            x: 10,\n            y: 10,\n            startX: 0,\n            startY: 0,\n            endX: 0,\n            endY: 0\n          }, this.tool = d, this.$ = v[\"default\"], d.isObject(t)) for (var n in t) {\n            this.option[n] = t[n];\n          }\n          this._addBuiltInPlugins();\n          var i = function i() {\n            o.isInited || (o._render(), o._mockTap(), o._bindEvent(), o._autoRun());\n          };\n          void 0 !== document ? \"complete\" == document.readyState ? i() : v[\"default\"].bind(window, \"load\", i) : !function () {\n            var e = void 0,\n              t = function o() {\n                document && \"complete\" == document.readyState ? (e && clearTimeout(e), i()) : e = setTimeout(o, 1);\n              };\n            e = setTimeout(t, 1);\n          }();\n        }\n        return r(e, [{\n          key: \"_addBuiltInPlugins\",\n          value: function value() {\n            this.addPlugin(new C[\"default\"](\"default\", \"Log\"));\n            var e = this.option.defaultPlugins,\n              t = {\n                system: {\n                  proto: O[\"default\"],\n                  name: \"System\"\n                },\n                network: {\n                  proto: S[\"default\"],\n                  name: \"Network\"\n                },\n                element: {\n                  proto: j[\"default\"],\n                  name: \"Element\"\n                },\n                storage: {\n                  proto: P[\"default\"],\n                  name: \"Storage\"\n                }\n              };\n            if (e && d.isArray(e)) for (var o = 0; o < e.length; o++) {\n              var n = t[e[o]];\n              n ? this.addPlugin(new n.proto(e[o], n.name)) : __f__(\"log\", \"Unrecognized default plugin ID:\", e[o], \" at common/vconsole/vconsole.min.js:10\");\n            }\n          }\n        }, {\n          key: \"_render\",\n          value: function value() {\n            if (!v[\"default\"].one(M)) {\n              var e = document.createElement(\"div\");\n              e.innerHTML = p[\"default\"], document.documentElement.insertAdjacentElement(\"beforeend\", e.children[0]);\n            }\n            this.$dom = v[\"default\"].one(M);\n            var t = v[\"default\"].one(\".vc-switch\", this.$dom),\n              o = 1 * d.getStorage(\"switch_x\"),\n              n = 1 * d.getStorage(\"switch_y\");\n            (o || n) && (o + t.offsetWidth > document.documentElement.offsetWidth && (o = document.documentElement.offsetWidth - t.offsetWidth), n + t.offsetHeight > document.documentElement.offsetHeight && (n = document.documentElement.offsetHeight - t.offsetHeight), 0 > o && (o = 0), 0 > n && (n = 0), this.switchPos.x = o, this.switchPos.y = n, v[\"default\"].one(\".vc-switch\").style.right = o + \"px\", v[\"default\"].one(\".vc-switch\").style.bottom = n + \"px\");\n            var i = window.devicePixelRatio || 1,\n              a = document.querySelector('[name=\"viewport\"]');\n            if (a && a.content) {\n              var r = a.content.match(/initial\\-scale\\=\\d+(\\.\\d+)?/),\n                l = r ? parseFloat(r[0].split(\"=\")[1]) : 1;\n              1 > l && (this.$dom.style.fontSize = 13 * i + \"px\");\n            }\n            v[\"default\"].one(\".vc-mask\", this.$dom).style.display = \"none\";\n          }\n        }, {\n          key: \"_mockTap\",\n          value: function value() {\n            var e = 700,\n              t = 10,\n              o = void 0,\n              n = void 0,\n              i = void 0,\n              a = !1,\n              r = null;\n            this.$dom.addEventListener(\"touchstart\", function (e) {\n              if (void 0 === o) {\n                var t = e.targetTouches[0];\n                n = t.pageX, i = t.pageY, o = e.timeStamp, r = e.target.nodeType === Node.TEXT_NODE ? e.target.parentNode : e.target;\n              }\n            }, !1), this.$dom.addEventListener(\"touchmove\", function (e) {\n              var o = e.changedTouches[0];\n              (Math.abs(o.pageX - n) > t || Math.abs(o.pageY - i) > t) && (a = !0);\n            }), this.$dom.addEventListener(\"touchend\", function (t) {\n              if (a === !1 && t.timeStamp - o < e && null != r) {\n                var n = r.tagName.toLowerCase(),\n                  i = !1;\n                switch (n) {\n                  case \"textarea\":\n                    i = !0;\n                    break;\n                  case \"input\":\n                    switch (r.type) {\n                      case \"button\":\n                      case \"checkbox\":\n                      case \"file\":\n                      case \"image\":\n                      case \"radio\":\n                      case \"submit\":\n                        i = !1;\n                        break;\n                      default:\n                        i = !r.disabled && !r.readOnly;\n                    }\n                }\n                i ? r.focus() : t.preventDefault();\n                var l = t.changedTouches[0],\n                  c = document.createEvent(\"MouseEvents\");\n                c.initMouseEvent(\"click\", !0, !0, window, 1, l.screenX, l.screenY, l.clientX, l.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, c.initEvent(\"click\", !0, !0), r.dispatchEvent(c);\n              }\n              o = void 0, a = !1, r = null;\n            }, !1);\n          }\n        }, {\n          key: \"_bindEvent\",\n          value: function value() {\n            var e = this,\n              t = v[\"default\"].one(\".vc-switch\", e.$dom);\n            v[\"default\"].bind(t, \"touchstart\", function (t) {\n              e.switchPos.startX = t.touches[0].pageX, e.switchPos.startY = t.touches[0].pageY;\n            }), v[\"default\"].bind(t, \"touchend\", function (t) {\n              e.switchPos.x = e.switchPos.endX, e.switchPos.y = e.switchPos.endY, e.switchPos.startX = 0, e.switchPos.startY = 0, e.switchPos.endX = 0, e.switchPos.endY = 0, d.setStorage(\"switch_x\", e.switchPos.x), d.setStorage(\"switch_y\", e.switchPos.y);\n            }), v[\"default\"].bind(t, \"touchmove\", function (o) {\n              if (o.touches.length > 0) {\n                var n = o.touches[0].pageX - e.switchPos.startX,\n                  i = o.touches[0].pageY - e.switchPos.startY,\n                  a = e.switchPos.x - n,\n                  r = e.switchPos.y - i;\n                a + t.offsetWidth > document.documentElement.offsetWidth && (a = document.documentElement.offsetWidth - t.offsetWidth), r + t.offsetHeight > document.documentElement.offsetHeight && (r = document.documentElement.offsetHeight - t.offsetHeight), 0 > a && (a = 0), 0 > r && (r = 0), t.style.right = a + \"px\", t.style.bottom = r + \"px\", e.switchPos.endX = a, e.switchPos.endY = r, o.preventDefault();\n              }\n            }), v[\"default\"].bind(v[\"default\"].one(\".vc-switch\", e.$dom), \"click\", function () {\n              e.show();\n            }), v[\"default\"].bind(v[\"default\"].one(\".vc-hide\", e.$dom), \"click\", function () {\n              e.hide();\n            }), v[\"default\"].bind(v[\"default\"].one(\".vc-mask\", e.$dom), \"click\", function (t) {\n              return t.target != v[\"default\"].one(\".vc-mask\") ? !1 : void e.hide();\n            }), v[\"default\"].delegate(v[\"default\"].one(\".vc-tabbar\", e.$dom), \"click\", \".vc-tab\", function (t) {\n              var o = this.dataset.tab;\n              o != e.activedTab && e.showTab(o);\n            }), v[\"default\"].bind(v[\"default\"].one(\".vc-panel\", e.$dom), \"transitionend webkitTransitionEnd oTransitionEnd otransitionend\", function (t) {\n              return t.target != v[\"default\"].one(\".vc-panel\") ? !1 : void (v[\"default\"].hasClass(e.$dom, \"vc-toggle\") || (t.target.style.display = \"none\"));\n            });\n            var o = v[\"default\"].one(\".vc-content\", e.$dom),\n              n = !1;\n            v[\"default\"].bind(o, \"touchstart\", function (e) {\n              var t = o.scrollTop,\n                i = o.scrollHeight,\n                a = t + o.offsetHeight;\n              0 === t ? (o.scrollTop = 1, 0 === o.scrollTop && (v[\"default\"].hasClass(e.target, \"vc-cmd-input\") || (n = !0))) : a === i && (o.scrollTop = t - 1, o.scrollTop === t && (v[\"default\"].hasClass(e.target, \"vc-cmd-input\") || (n = !0)));\n            }), v[\"default\"].bind(o, \"touchmove\", function (e) {\n              n && e.preventDefault();\n            }), v[\"default\"].bind(o, \"touchend\", function (e) {\n              n = !1;\n            });\n          }\n        }, {\n          key: \"_autoRun\",\n          value: function value() {\n            this.isInited = !0;\n            for (var e in this.pluginList) {\n              this._initPlugin(this.pluginList[e]);\n            }\n            this.tabList.length > 0 && this.showTab(this.tabList[0]), this.triggerEvent(\"ready\");\n          }\n        }, {\n          key: \"triggerEvent\",\n          value: function value(e, t) {\n            e = \"on\" + e.charAt(0).toUpperCase() + e.slice(1), d.isFunction(this.option[e]) && this.option[e].apply(this, t);\n          }\n        }, {\n          key: \"_initPlugin\",\n          value: function value(e) {\n            var t = this;\n            e.vConsole = this, e.trigger(\"init\"), e.trigger(\"renderTab\", function (o) {\n              t.tabList.push(e.id);\n              var n = v[\"default\"].render(g[\"default\"], {\n                id: e.id,\n                name: e.name\n              });\n              v[\"default\"].one(\".vc-tabbar\", t.$dom).insertAdjacentElement(\"beforeend\", n);\n              var i = v[\"default\"].render(m[\"default\"], {\n                id: e.id\n              });\n              o && (d.isString(o) ? i.innerHTML += o : d.isFunction(o.appendTo) ? o.appendTo(i) : d.isElement(o) && i.insertAdjacentElement(\"beforeend\", o)), v[\"default\"].one(\".vc-content\", t.$dom).insertAdjacentElement(\"beforeend\", i);\n            }), e.trigger(\"addTopBar\", function (o) {\n              if (o) for (var n = v[\"default\"].one(\".vc-topbar\", t.$dom), i = function i(t) {\n                  var i = o[t],\n                    a = v[\"default\"].render(_[\"default\"], {\n                      name: i.name || \"Undefined\",\n                      className: i.className || \"\",\n                      pluginID: e.id\n                    });\n                  if (i.data) for (var r in i.data) {\n                    a.dataset[r] = i.data[r];\n                  }\n                  d.isFunction(i.onClick) && v[\"default\"].bind(a, \"click\", function (t) {\n                    var o = i.onClick.call(a);\n                    o === !1 || (v[\"default\"].removeClass(v[\"default\"].all(\".vc-topbar-\" + e.id), \"vc-actived\"), v[\"default\"].addClass(a, \"vc-actived\"));\n                  }), n.insertAdjacentElement(\"beforeend\", a);\n                }, a = 0; a < o.length; a++) {\n                i(a);\n              }\n            }), e.trigger(\"addTool\", function (o) {\n              if (o) for (var n = v[\"default\"].one(\".vc-tool-last\", t.$dom), i = function i(t) {\n                  var i = o[t],\n                    a = v[\"default\"].render(x[\"default\"], {\n                      name: i.name || \"Undefined\",\n                      pluginID: e.id\n                    });\n                  1 == i.global && v[\"default\"].addClass(a, \"vc-global-tool\"), d.isFunction(i.onClick) && v[\"default\"].bind(a, \"click\", function (e) {\n                    i.onClick.call(a);\n                  }), n.parentNode.insertBefore(a, n);\n                }, a = 0; a < o.length; a++) {\n                i(a);\n              }\n            }), e.isReady = !0, e.trigger(\"ready\");\n          }\n        }, {\n          key: \"_triggerPluginsEvent\",\n          value: function value(e) {\n            for (var t in this.pluginList) {\n              this.pluginList[t].isReady && this.pluginList[t].trigger(e);\n            }\n          }\n        }, {\n          key: \"_triggerPluginEvent\",\n          value: function value(e, t) {\n            var o = this.pluginList[e];\n            o && o.isReady && o.trigger(t);\n          }\n        }, {\n          key: \"addPlugin\",\n          value: function value(e) {\n            return void 0 !== this.pluginList[e.id] ? (__f__(\"log\", \"Plugin \" + e.id + \" has already been added.\", \" at common/vconsole/vconsole.min.js:10\"), !1) : (this.pluginList[e.id] = e, this.isInited && (this._initPlugin(e), 1 == this.tabList.length && this.showTab(this.tabList[0])), !0);\n          }\n        }, {\n          key: \"removePlugin\",\n          value: function value(e) {\n            e = (e + \"\").toLowerCase();\n            var t = this.pluginList[e];\n            if (void 0 === t) return __f__(\"log\", \"Plugin \" + e + \" does not exist.\", \" at common/vconsole/vconsole.min.js:10\"), !1;\n            if (t.trigger(\"remove\"), this.isInited) {\n              var o = v[\"default\"].one(\"#__vc_tab_\" + e);\n              o && o.parentNode.removeChild(o);\n              for (var n = v[\"default\"].all(\".vc-topbar-\" + e, this.$dom), i = 0; i < n.length; i++) {\n                n[i].parentNode.removeChild(n[i]);\n              }\n              var a = v[\"default\"].one(\"#__vc_log_\" + e);\n              a && a.parentNode.removeChild(a);\n              for (var r = v[\"default\"].all(\".vc-tool-\" + e, this.$dom), l = 0; l < r.length; l++) {\n                r[l].parentNode.removeChild(r[l]);\n              }\n            }\n            var c = this.tabList.indexOf(e);\n            c > -1 && this.tabList.splice(c, 1);\n            try {\n              delete this.pluginList[e];\n            } catch (s) {\n              this.pluginList[e] = void 0;\n            }\n            return this.activedTab == e && this.tabList.length > 0 && this.showTab(this.tabList[0]), !0;\n          }\n        }, {\n          key: \"show\",\n          value: function value() {\n            if (this.isInited) {\n              var e = this,\n                t = v[\"default\"].one(\".vc-panel\", this.$dom);\n              t.style.display = \"block\", setTimeout(function () {\n                v[\"default\"].addClass(e.$dom, \"vc-toggle\"), e._triggerPluginsEvent(\"showConsole\");\n                var t = v[\"default\"].one(\".vc-mask\", e.$dom);\n                t.style.display = \"block\";\n              }, 10);\n            }\n          }\n        }, {\n          key: \"hide\",\n          value: function value() {\n            if (this.isInited) {\n              v[\"default\"].removeClass(this.$dom, \"vc-toggle\"), this._triggerPluginsEvent(\"hideConsole\");\n              var e = v[\"default\"].one(\".vc-mask\", this.$dom),\n                t = v[\"default\"].one(\".vc-panel\", this.$dom);\n              v[\"default\"].bind(e, \"transitionend\", function (o) {\n                e.style.display = \"none\", t.style.display = \"none\";\n              });\n            }\n          }\n        }, {\n          key: \"showSwitch\",\n          value: function value() {\n            if (this.isInited) {\n              var e = v[\"default\"].one(\".vc-switch\", this.$dom);\n              e.style.display = \"block\";\n            }\n          }\n        }, {\n          key: \"hideSwitch\",\n          value: function value() {\n            if (this.isInited) {\n              var e = v[\"default\"].one(\".vc-switch\", this.$dom);\n              e.style.display = \"none\";\n            }\n          }\n        }, {\n          key: \"showTab\",\n          value: function value(e) {\n            if (this.isInited) {\n              var t = v[\"default\"].one(\"#__vc_log_\" + e);\n              v[\"default\"].removeClass(v[\"default\"].all(\".vc-tab\", this.$dom), \"vc-actived\"), v[\"default\"].addClass(v[\"default\"].one(\"#__vc_tab_\" + e), \"vc-actived\"), v[\"default\"].removeClass(v[\"default\"].all(\".vc-logbox\", this.$dom), \"vc-actived\"), v[\"default\"].addClass(t, \"vc-actived\");\n              var o = v[\"default\"].all(\".vc-topbar-\" + e, this.$dom);\n              v[\"default\"].removeClass(v[\"default\"].all(\".vc-toptab\", this.$dom), \"vc-toggle\"), v[\"default\"].addClass(o, \"vc-toggle\"), o.length > 0 ? v[\"default\"].addClass(v[\"default\"].one(\".vc-content\", this.$dom), \"vc-has-topbar\") : v[\"default\"].removeClass(v[\"default\"].one(\".vc-content\", this.$dom), \"vc-has-topbar\"), v[\"default\"].removeClass(v[\"default\"].all(\".vc-tool\", this.$dom), \"vc-toggle\"), v[\"default\"].addClass(v[\"default\"].all(\".vc-tool-\" + e, this.$dom), \"vc-toggle\"), this.activedTab && this._triggerPluginEvent(this.activedTab, \"hide\"), this.activedTab = e, this._triggerPluginEvent(this.activedTab, \"show\");\n            }\n          }\n        }, {\n          key: \"setOption\",\n          value: function value(e, t) {\n            if (d.isString(e)) this.option[e] = t, this._triggerPluginsEvent(\"updateOption\");else if (d.isObject(e)) {\n              for (var o in e) {\n                this.option[o] = e[o];\n              }\n              this._triggerPluginsEvent(\"updateOption\");\n            } else __f__(\"log\", \"The first parameter of vConsole.setOption() must be a string or an object.\", \" at common/vconsole/vconsole.min.js:10\");\n          }\n        }, {\n          key: \"destroy\",\n          value: function value() {\n            if (this.isInited) {\n              for (var e = Object.keys(this.pluginList), t = e.length - 1; t >= 0; t--) {\n                this.removePlugin(e[t]);\n              }\n              this.$dom.parentNode.removeChild(this.$dom);\n            }\n          }\n        }]), e;\n      }();\n    t[\"default\"] = A, e.exports = t[\"default\"];\n  }, function (e, t) {\n    e.exports = {\n      name: \"vconsole\",\n      version: \"3.2.0\",\n      description: \"A lightweight, extendable front-end developer tool for mobile web page.\",\n      homepage: \"https://github.com/Tencent/vConsole\",\n      main: \"dist/vconsole.min.js\",\n      scripts: {\n        test: \"mocha\",\n        dist: \"webpack\"\n      },\n      keywords: [\"console\", \"debug\", \"mobile\"],\n      repository: {\n        type: \"git\",\n        url: \"git+https://github.com/Tencent/vConsole.git\"\n      },\n      dependencies: {},\n      devDependencies: {\n        \"babel-core\": \"^6.7.7\",\n        \"babel-loader\": \"^6.2.4\",\n        \"babel-plugin-add-module-exports\": \"^0.1.4\",\n        \"babel-preset-es2015\": \"^6.6.0\",\n        \"babel-preset-stage-3\": \"^6.5.0\",\n        chai: \"^3.5.0\",\n        \"css-loader\": \"^0.23.1\",\n        \"extract-text-webpack-plugin\": \"^1.0.1\",\n        \"html-loader\": \"^0.4.3\",\n        jsdom: \"^9.2.1\",\n        \"json-loader\": \"^0.5.4\",\n        less: \"^2.5.3\",\n        \"less-loader\": \"^2.2.3\",\n        mocha: \"^2.5.3\",\n        \"style-loader\": \"^0.13.1\",\n        webpack: \"~1.12.11\"\n      },\n      author: \"Tencent\",\n      license: \"MIT\"\n    };\n  }, function (e, t) {\n    \"use strict\";\n\n    function o(e) {\n      var t = e > 0 ? new Date(e) : new Date(),\n        o = t.getDate() < 10 ? \"0\" + t.getDate() : t.getDate(),\n        n = t.getMonth() < 9 ? \"0\" + (t.getMonth() + 1) : t.getMonth() + 1,\n        i = t.getFullYear(),\n        a = t.getHours() < 10 ? \"0\" + t.getHours() : t.getHours(),\n        r = t.getMinutes() < 10 ? \"0\" + t.getMinutes() : t.getMinutes(),\n        l = t.getSeconds() < 10 ? \"0\" + t.getSeconds() : t.getSeconds(),\n        c = t.getMilliseconds() < 10 ? \"0\" + t.getMilliseconds() : t.getMilliseconds();\n      return 100 > c && (c = \"0\" + c), {\n        time: +t,\n        year: i,\n        month: n,\n        day: o,\n        hour: a,\n        minute: r,\n        second: l,\n        millisecond: c\n      };\n    }\n    function n(e) {\n      return \"[object Number]\" == Object.prototype.toString.call(e);\n    }\n    function i(e) {\n      return \"[object String]\" == Object.prototype.toString.call(e);\n    }\n    function a(e) {\n      return \"[object Array]\" == Object.prototype.toString.call(e);\n    }\n    function r(e) {\n      return \"[object Boolean]\" == Object.prototype.toString.call(e);\n    }\n    function l(e) {\n      return \"[object Undefined]\" == Object.prototype.toString.call(e);\n    }\n    function c(e) {\n      return \"[object Null]\" == Object.prototype.toString.call(e);\n    }\n    function s(e) {\n      return \"[object Symbol]\" == Object.prototype.toString.call(e);\n    }\n    function d(e) {\n      return !(\"[object Object]\" != Object.prototype.toString.call(e) && (n(e) || i(e) || r(e) || a(e) || c(e) || u(e) || l(e) || s(e)));\n    }\n    function u(e) {\n      return \"[object Function]\" == Object.prototype.toString.call(e);\n    }\n    function v(e) {\n      return \"object\" === (\"undefined\" == typeof HTMLElement ? \"undefined\" : w(HTMLElement)) ? e instanceof HTMLElement : e && \"object\" === (\"undefined\" == typeof e ? \"undefined\" : w(e)) && null !== e && 1 === e.nodeType && \"string\" == typeof e.nodeName;\n    }\n    function f(e) {\n      var t = Object.prototype.toString.call(e);\n      return \"[object global]\" == t || \"[object Window]\" == t || \"[object DOMWindow]\" == t;\n    }\n    function p(e) {\n      var t = Object.prototype.hasOwnProperty;\n      if (!e || \"object\" !== (\"undefined\" == typeof e ? \"undefined\" : w(e)) || e.nodeType || f(e)) return !1;\n      try {\n        if (e.constructor && !t.call(e, \"constructor\") && !t.call(e.constructor.prototype, \"isPrototypeOf\")) return !1;\n      } catch (o) {\n        return !1;\n      }\n      var n = void 0;\n      for (n in e) {\n        ;\n      }\n      return void 0 === n || t.call(e, n);\n    }\n    function h(e) {\n      return document.createElement(\"a\").appendChild(document.createTextNode(e)).parentNode.innerHTML;\n    }\n    function g(e) {\n      var t = arguments.length <= 1 || void 0 === arguments[1] ? \"\t\" : arguments[1],\n        o = arguments.length <= 2 || void 0 === arguments[2] ? \"CIRCULAR_DEPENDECY_OBJECT\" : arguments[2],\n        n = [],\n        i = JSON.stringify(e, function (e, t) {\n          if (\"object\" === (\"undefined\" == typeof t ? \"undefined\" : w(t)) && null !== t) {\n            if (~n.indexOf(t)) return o;\n            n.push(t);\n          }\n          return t;\n        }, t);\n      return n = null, i;\n    }\n    function b(e) {\n      if (!d(e) && !a(e)) return [];\n      var t = [\"toString\", \"toLocaleString\", \"valueOf\", \"hasOwnProperty\", \"isPrototypeOf\", \"propertyIsEnumerable\", \"constructor\"],\n        o = [];\n      for (var n in e) {\n        t.indexOf(n) < 0 && o.push(n);\n      }\n      return o = o.sort();\n    }\n    function m(e) {\n      return Object.prototype.toString.call(e).replace(\"[object \", \"\").replace(\"]\", \"\");\n    }\n    function y(e, t) {\n      window.localStorage && (e = \"vConsole_\" + e, localStorage.setItem(e, t));\n    }\n    function _(e) {\n      return window.localStorage ? (e = \"vConsole_\" + e, localStorage.getItem(e)) : void 0;\n    }\n    Object.defineProperty(t, \"__esModule\", {\n      value: !0\n    });\n    var w = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (e) {\n      return _typeof(e);\n    } : function (e) {\n      return e && \"function\" == typeof Symbol && e.constructor === Symbol ? \"symbol\" : _typeof(e);\n    };\n    t.getDate = o, t.isNumber = n, t.isString = i, t.isArray = a, t.isBoolean = r, t.isUndefined = l, t.isNull = c, t.isSymbol = s, t.isObject = d, t.isFunction = u, t.isElement = v, t.isWindow = f, t.isPlainObject = p, t.htmlEncode = h, t.JSONStringify = g, t.getObjAllKeys = b, t.getObjName = m, t.setStorage = y, t.getStorage = _;\n  }, function (e, t, o) {\n    \"use strict\";\n\n    function n(e) {\n      return e && e.__esModule ? e : {\n        \"default\": e\n      };\n    }\n    Object.defineProperty(t, \"__esModule\", {\n      value: !0\n    });\n    var i = o(4),\n      a = o(6),\n      r = n(a),\n      l = {};\n    l.one = function (e, t) {\n      return t ? t.querySelector(e) : document.querySelector(e);\n    }, l.all = function (e, t) {\n      var o = void 0,\n        n = [];\n      return o = t ? t.querySelectorAll(e) : document.querySelectorAll(e), o && o.length > 0 && (n = Array.prototype.slice.call(o)), n;\n    }, l.addClass = function (e, t) {\n      if (e) {\n        (0, i.isArray)(e) || (e = [e]);\n        for (var o = 0; o < e.length; o++) {\n          var n = e[o].className || \"\",\n            a = n.split(\" \");\n          a.indexOf(t) > -1 || (a.push(t), e[o].className = a.join(\" \"));\n        }\n      }\n    }, l.removeClass = function (e, t) {\n      if (e) {\n        (0, i.isArray)(e) || (e = [e]);\n        for (var o = 0; o < e.length; o++) {\n          for (var n = e[o].className.split(\" \"), a = 0; a < n.length; a++) {\n            n[a] == t && (n[a] = \"\");\n          }\n          e[o].className = n.join(\" \").trim();\n        }\n      }\n    }, l.hasClass = function (e, t) {\n      if (!e) return !1;\n      for (var o = e.className.split(\" \"), n = 0; n < o.length; n++) {\n        if (o[n] == t) return !0;\n      }\n      return !1;\n    }, l.bind = function (e, t, o, n) {\n      if (e) {\n        void 0 === n && (n = !1), (0, i.isArray)(e) || (e = [e]);\n        for (var a = 0; a < e.length; a++) {\n          e[a].addEventListener(t, o, n);\n        }\n      }\n    }, l.delegate = function (e, t, o, n) {\n      e && e.addEventListener(t, function (t) {\n        var i = l.all(o, e);\n        if (i) e: for (var a = 0; a < i.length; a++) {\n          for (var r = t.target; r;) {\n            if (r == i[a]) {\n              n.call(r, t);\n              break e;\n            }\n            if (r = r.parentNode, r == e) break;\n          }\n        }\n      }, !1);\n    }, l.render = r[\"default\"], t[\"default\"] = l, e.exports = t[\"default\"];\n  }, function (e, t) {\n    \"use strict\";\n\n    function o(e, t, o) {\n      var n = /\\{\\{([^\\}]+)\\}\\}/g,\n        i = \"\",\n        a = \"\",\n        r = 0,\n        l = [],\n        c = function c(e, t) {\n          \"\" !== e && (i += t ? e.match(/^ ?else/g) ? \"} \" + e + \" {\\n\" : e.match(/\\/(if|for|switch)/g) ? \"}\\n\" : e.match(/^ ?if|for|switch/g) ? e + \" {\\n\" : e.match(/^ ?(break|continue) ?$/g) ? e + \";\\n\" : e.match(/^ ?(case|default)/g) ? e + \":\\n\" : \"arr.push(\" + e + \");\\n\" : 'arr.push(\"' + e.replace(/\"/g, '\\\\\"') + '\");\\n');\n        };\n      for (window.__mito_data = t, window.__mito_code = \"\", window.__mito_result = \"\", e = e.replace(/(\\{\\{ ?switch(.+?)\\}\\})[\\r\\n\\t ]+\\{\\{/g, \"$1{{\"), e = e.replace(/^[\\r\\n]/, \"\").replace(/\\n/g, \"\\\\\\n\").replace(/\\r/g, \"\\\\\\r\"), a = \"(function(){\\n\", i = \"var arr = [];\\n\"; l = n.exec(e);) {\n        c(e.slice(r, l.index), !1), c(l[1], !0), r = l.index + l[0].length;\n      }\n      c(e.substr(r, e.length - r), !1), i += '__mito_result = arr.join(\"\");', i = \"with (__mito_data) {\\n\" + i + \"\\n}\", a += i, a += \"})();\";\n      var s = document.getElementsByTagName(\"script\"),\n        d = \"\";\n      s.length > 0 && (d = s[0].getAttribute(\"nonce\") || \"\");\n      var u = document.createElement(\"SCRIPT\");\n      u.innerHTML = a, u.setAttribute(\"nonce\", d), document.documentElement.appendChild(u);\n      var v = __mito_result;\n      if (document.documentElement.removeChild(u), !o) {\n        var f = document.createElement(\"DIV\");\n        f.innerHTML = v, v = f.children[0];\n      }\n      return v;\n    }\n    Object.defineProperty(t, \"__esModule\", {\n      value: !0\n    }), t[\"default\"] = o, e.exports = t[\"default\"];\n  }, function (e, t, o) {\n    var n = o(8);\n    \"string\" == typeof n && (n = [[e.id, n, \"\"]]);\n    o(10)(n, {});\n    n.locals && (e.exports = n.locals);\n  }, function (e, t, o) {\n    t = e.exports = o(9)(), t.push([e.id, '#__vconsole{color:#000;font-size:13px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#__vconsole .vc-max-height{max-height:19.23076923em}#__vconsole .vc-max-height-line{max-height:3.38461538em}#__vconsole .vc-min-height{min-height:3.07692308em}#__vconsole dd,#__vconsole dl,#__vconsole pre{margin:0}#__vconsole .vc-switch{display:block;position:fixed;right:.76923077em;bottom:.76923077em;color:#fff;background-color:#04be02;line-height:1;font-size:1.07692308em;padding:.61538462em 1.23076923em;z-index:10000;border-radius:.30769231em;box-shadow:0 0 .61538462em rgba(0,0,0,.4)}#__vconsole .vc-mask{top:0;background:transparent;z-index:10001;transition:background .3s;-webkit-tap-highlight-color:transparent;overflow-y:scroll}#__vconsole .vc-mask,#__vconsole .vc-panel{display:none;position:fixed;left:0;right:0;bottom:0}#__vconsole .vc-panel{min-height:85%;z-index:10002;background-color:#efeff4;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-transform:translateY(100%);transform:translateY(100%)}#__vconsole .vc-tabbar{border-bottom:1px solid #d9d9d9;overflow-x:auto;height:3em;width:auto;white-space:nowrap}#__vconsole .vc-tabbar .vc-tab{display:inline-block;line-height:3em;padding:0 1.15384615em;border-right:1px solid #d9d9d9;text-decoration:none;color:#000;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}#__vconsole .vc-tabbar .vc-tab:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-tabbar .vc-tab.vc-actived{background-color:#fff}#__vconsole .vc-content{background-color:#fff;overflow-x:hidden;overflow-y:auto;position:absolute;top:3.07692308em;left:0;right:0;bottom:3.07692308em;-webkit-overflow-scrolling:touch}#__vconsole .vc-content.vc-has-topbar{top:5.46153846em}#__vconsole .vc-topbar{background-color:#fbf9fe;display:flex;display:-webkit-box;flex-direction:row;flex-wrap:wrap;-webkit-box-direction:row;-webkit-flex-wrap:wrap;width:100%}#__vconsole .vc-topbar .vc-toptab{display:none;flex:1;-webkit-box-flex:1;line-height:2.30769231em;padding:0 1.15384615em;border-bottom:1px solid #d9d9d9;text-decoration:none;text-align:center;color:#000;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}#__vconsole .vc-topbar .vc-toptab.vc-toggle{display:block}#__vconsole .vc-topbar .vc-toptab:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-topbar .vc-toptab.vc-actived{border-bottom:1px solid #3e82f7}#__vconsole .vc-logbox{display:none;position:relative;min-height:100%}#__vconsole .vc-logbox i{font-style:normal}#__vconsole .vc-logbox .vc-log{padding-bottom:3em;-webkit-tap-highlight-color:transparent}#__vconsole .vc-logbox .vc-log:empty:before{content:\"Empty\";color:#999;position:absolute;top:45%;left:0;right:0;bottom:0;font-size:1.15384615em;text-align:center}#__vconsole .vc-logbox .vc-item{margin:0;padding:.46153846em .61538462em;overflow:hidden;line-height:1.3;border-bottom:1px solid #eee;word-break:break-word}#__vconsole .vc-logbox .vc-item-info{color:#6a5acd}#__vconsole .vc-logbox .vc-item-debug{color:#daa520}#__vconsole .vc-logbox .vc-item-warn{color:orange;border-color:#ffb930;background-color:#fffacd}#__vconsole .vc-logbox .vc-item-error{color:#dc143c;border-color:#f4a0ab;background-color:#ffe4e1}#__vconsole .vc-logbox .vc-log.vc-log-partly .vc-item{display:none}#__vconsole .vc-logbox .vc-log.vc-log-partly-error .vc-item-error,#__vconsole .vc-logbox .vc-log.vc-log-partly-info .vc-item-info,#__vconsole .vc-logbox .vc-log.vc-log-partly-log .vc-item-log,#__vconsole .vc-logbox .vc-log.vc-log-partly-warn .vc-item-warn{display:block}#__vconsole .vc-logbox .vc-item .vc-item-content{margin-right:4.61538462em;display:block}#__vconsole .vc-logbox .vc-item .vc-item-meta{color:#888;float:right;width:4.61538462em;text-align:right}#__vconsole .vc-logbox .vc-item.vc-item-nometa .vc-item-content{margin-right:0}#__vconsole .vc-logbox .vc-item.vc-item-nometa .vc-item-meta{display:none}#__vconsole .vc-logbox .vc-item .vc-item-code{display:block;white-space:pre-wrap;overflow:auto;position:relative}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input,#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output{padding-left:.92307692em}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input:before,#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before{content:\"\\\\203A\";position:absolute;top:-.23076923em;left:0;font-size:1.23076923em;color:#6a5acd}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before{content:\"\\\\2039\"}#__vconsole .vc-logbox .vc-item .vc-fold{display:block;overflow:auto;-webkit-overflow-scrolling:touch}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer{display:block;font-style:italic;padding-left:.76923077em;position:relative}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:active{background-color:#e6e6e6}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:before{content:\"\";position:absolute;top:.30769231em;left:.15384615em;width:0;height:0;border:.30769231em solid transparent;border-left-color:#000}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer.vc-toggle:before{top:.46153846em;left:0;border-top-color:#000;border-left-color:transparent}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner{display:none;margin-left:.76923077em}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner.vc-toggle{display:block}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner .vc-code-key{margin-left:.76923077em}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer .vc-code-key{margin-left:0}#__vconsole .vc-logbox .vc-code-key{color:#905}#__vconsole .vc-logbox .vc-code-private-key{color:#d391b5}#__vconsole .vc-logbox .vc-code-function{color:#905;font-style:italic}#__vconsole .vc-logbox .vc-code-boolean,#__vconsole .vc-logbox .vc-code-number{color:#0086b3}#__vconsole .vc-logbox .vc-code-string{color:#183691}#__vconsole .vc-logbox .vc-code-null,#__vconsole .vc-logbox .vc-code-undefined{color:#666}#__vconsole .vc-logbox .vc-cmd{position:absolute;height:3.07692308em;left:0;right:0;bottom:0;border-top:1px solid #d9d9d9;display:block!important}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input-wrap{display:block;height:2.15384615em;margin-right:3.07692308em;padding:.46153846em .61538462em}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input{width:100%;border:none;resize:none;outline:none;padding:0;font-size:.92307692em}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input::-webkit-input-placeholder{line-height:2.15384615em}#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn{position:absolute;top:0;right:0;bottom:0;width:3.07692308em;border:none;background-color:#efeff4;outline:none;-webkit-touch-callout:none;font-size:1em}#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-logbox .vc-group .vc-group-preview{-webkit-touch-callout:none}#__vconsole .vc-logbox .vc-group .vc-group-preview:active{background-color:#e6e6e6}#__vconsole .vc-logbox .vc-group .vc-group-detail{display:none;padding:0 0 .76923077em 1.53846154em;border-bottom:1px solid #eee}#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-detail{display:block;background-color:#fbf9fe}#__vconsole .vc-logbox .vc-group.vc-actived .vc-table-row{background-color:#fff}#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-preview{background-color:#fbf9fe}#__vconsole .vc-logbox .vc-table .vc-table-row{display:flex;display:-webkit-flex;flex-direction:row;flex-wrap:wrap;-webkit-box-direction:row;-webkit-flex-wrap:wrap;overflow:hidden;border-bottom:1px solid #eee}#__vconsole .vc-logbox .vc-table .vc-table-row.vc-left-border{border-left:1px solid #eee}#__vconsole .vc-logbox .vc-table .vc-table-col{flex:1;-webkit-box-flex:1;padding:.23076923em .30769231em;border-left:1px solid #eee;overflow:auto;white-space:pre-wrap;word-break:break-word;-webkit-overflow-scrolling:touch}#__vconsole .vc-logbox .vc-table .vc-table-col:first-child{border:none}#__vconsole .vc-logbox .vc-table .vc-small .vc-table-col{padding:0 .30769231em;font-size:.92307692em}#__vconsole .vc-logbox .vc-table .vc-table-col-2{flex:2;-webkit-box-flex:2}#__vconsole .vc-logbox .vc-table .vc-table-col-3{flex:3;-webkit-box-flex:3}#__vconsole .vc-logbox .vc-table .vc-table-col-4{flex:4;-webkit-box-flex:4}#__vconsole .vc-logbox .vc-table .vc-table-col-5{flex:5;-webkit-box-flex:5}#__vconsole .vc-logbox .vc-table .vc-table-col-6{flex:6;-webkit-box-flex:6}#__vconsole .vc-logbox .vc-table .vc-table-row-error{border-color:#f4a0ab;background-color:#ffe4e1}#__vconsole .vc-logbox .vc-table .vc-table-row-error .vc-table-col{color:#dc143c;border-color:#f4a0ab}#__vconsole .vc-logbox .vc-table .vc-table-col-title{font-weight:700}#__vconsole .vc-logbox.vc-actived{display:block}#__vconsole .vc-toolbar{border-top:1px solid #d9d9d9;line-height:3em;position:absolute;left:0;right:0;bottom:0;display:flex;display:-webkit-box;flex-direction:row;-webkit-box-direction:row}#__vconsole .vc-toolbar .vc-tool{display:none;text-decoration:none;color:#000;width:50%;flex:1;-webkit-box-flex:1;text-align:center;position:relative;-webkit-touch-callout:none}#__vconsole .vc-toolbar .vc-tool.vc-global-tool,#__vconsole .vc-toolbar .vc-tool.vc-toggle{display:block}#__vconsole .vc-toolbar .vc-tool:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-toolbar .vc-tool:after{content:\" \";position:absolute;top:.53846154em;bottom:.53846154em;right:0;border-left:1px solid #d9d9d9}#__vconsole .vc-toolbar .vc-tool-last:after{border:none}#__vconsole.vc-toggle .vc-switch{display:none}#__vconsole.vc-toggle .vc-mask{background:rgba(0,0,0,.6);display:block}#__vconsole.vc-toggle .vc-panel{-webkit-transform:translate(0);transform:translate(0)}', \"\"]);\n  }, function (e, t) {\n    \"use strict\";\n\n    e.exports = function () {\n      var e = [];\n      return e.toString = function () {\n        for (var e = [], t = 0; t < this.length; t++) {\n          var o = this[t];\n          o[2] ? e.push(\"@media \" + o[2] + \"{\" + o[1] + \"}\") : e.push(o[1]);\n        }\n        return e.join(\"\");\n      }, e.i = function (t, o) {\n        \"string\" == typeof t && (t = [[null, t, \"\"]]);\n        for (var n = {}, i = 0; i < this.length; i++) {\n          var a = this[i][0];\n          \"number\" == typeof a && (n[a] = !0);\n        }\n        for (i = 0; i < t.length; i++) {\n          var r = t[i];\n          \"number\" == typeof r[0] && n[r[0]] || (o && !r[2] ? r[2] = o : o && (r[2] = \"(\" + r[2] + \") and (\" + o + \")\"), e.push(r));\n        }\n      }, e;\n    };\n  }, function (e, t, o) {\n    function n(e, t) {\n      for (var o = 0; o < e.length; o++) {\n        var n = e[o],\n          i = f[n.id];\n        if (i) {\n          i.refs++;\n          for (var a = 0; a < i.parts.length; a++) {\n            i.parts[a](n.parts[a]);\n          }\n          for (; a < n.parts.length; a++) {\n            i.parts.push(s(n.parts[a], t));\n          }\n        } else {\n          for (var r = [], a = 0; a < n.parts.length; a++) {\n            r.push(s(n.parts[a], t));\n          }\n          f[n.id] = {\n            id: n.id,\n            refs: 1,\n            parts: r\n          };\n        }\n      }\n    }\n    function i(e) {\n      for (var t = [], o = {}, n = 0; n < e.length; n++) {\n        var i = e[n],\n          a = i[0],\n          r = i[1],\n          l = i[2],\n          c = i[3],\n          s = {\n            css: r,\n            media: l,\n            sourceMap: c\n          };\n        o[a] ? o[a].parts.push(s) : t.push(o[a] = {\n          id: a,\n          parts: [s]\n        });\n      }\n      return t;\n    }\n    function a(e, t) {\n      var o = g(),\n        n = y[y.length - 1];\n      if (\"top\" === e.insertAt) n ? n.nextSibling ? o.insertBefore(t, n.nextSibling) : o.appendChild(t) : o.insertBefore(t, o.firstChild), y.push(t);else {\n        if (\"bottom\" !== e.insertAt) throw new Error(\"Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.\");\n        o.appendChild(t);\n      }\n    }\n    function r(e) {\n      e.parentNode.removeChild(e);\n      var t = y.indexOf(e);\n      t >= 0 && y.splice(t, 1);\n    }\n    function l(e) {\n      var t = document.createElement(\"style\");\n      return t.type = \"text/css\", a(e, t), t;\n    }\n    function c(e) {\n      var t = document.createElement(\"link\");\n      return t.rel = \"stylesheet\", a(e, t), t;\n    }\n    function s(e, t) {\n      var o, n, i;\n      if (t.singleton) {\n        var a = m++;\n        o = b || (b = l(t)), n = d.bind(null, o, a, !1), i = d.bind(null, o, a, !0);\n      } else e.sourceMap && \"function\" == typeof URL && \"function\" == typeof URL.createObjectURL && \"function\" == typeof URL.revokeObjectURL && \"function\" == typeof Blob && \"function\" == typeof btoa ? (o = c(t), n = v.bind(null, o), i = function i() {\n        r(o), o.href && URL.revokeObjectURL(o.href);\n      }) : (o = l(t), n = u.bind(null, o), i = function i() {\n        r(o);\n      });\n      return n(e), function (t) {\n        if (t) {\n          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;\n          n(e = t);\n        } else i();\n      };\n    }\n    function d(e, t, o, n) {\n      var i = o ? \"\" : n.css;\n      if (e.styleSheet) e.styleSheet.cssText = _(t, i);else {\n        var a = document.createTextNode(i),\n          r = e.childNodes;\n        r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(a, r[t]) : e.appendChild(a);\n      }\n    }\n    function u(e, t) {\n      var o = t.css,\n        n = t.media;\n      if (n && e.setAttribute(\"media\", n), e.styleSheet) e.styleSheet.cssText = o;else {\n        for (; e.firstChild;) {\n          e.removeChild(e.firstChild);\n        }\n        e.appendChild(document.createTextNode(o));\n      }\n    }\n    function v(e, t) {\n      var o = t.css,\n        n = t.sourceMap;\n      n && (o += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + \" */\");\n      var i = new Blob([o], {\n          type: \"text/css\"\n        }),\n        a = e.href;\n      e.href = URL.createObjectURL(i), a && URL.revokeObjectURL(a);\n    }\n    var f = {},\n      p = function p(e) {\n        var t;\n        return function () {\n          return \"undefined\" == typeof t && (t = e.apply(this, arguments)), t;\n        };\n      },\n      h = p(function () {\n        return /msie [6-9]\\b/.test(window.navigator.userAgent.toLowerCase());\n      }),\n      g = p(function () {\n        return document.head || document.getElementsByTagName(\"head\")[0];\n      }),\n      b = null,\n      m = 0,\n      y = [];\n    e.exports = function (e, t) {\n      t = t || {}, \"undefined\" == typeof t.singleton && (t.singleton = h()), \"undefined\" == typeof t.insertAt && (t.insertAt = \"bottom\");\n      var o = i(e);\n      return n(o, t), function (e) {\n        for (var a = [], r = 0; r < o.length; r++) {\n          var l = o[r],\n            c = f[l.id];\n          c.refs--, a.push(c);\n        }\n        if (e) {\n          var s = i(e);\n          n(s, t);\n        }\n        for (var r = 0; r < a.length; r++) {\n          var c = a[r];\n          if (0 === c.refs) {\n            for (var d = 0; d < c.parts.length; d++) {\n              c.parts[d]();\n            }\n            delete f[c.id];\n          }\n        }\n      };\n    };\n    var _ = function () {\n      var e = [];\n      return function (t, o) {\n        return e[t] = o, e.filter(Boolean).join(\"\\n\");\n      };\n    }();\n  }, function (e, t) {\n    e.exports = '<div id=\"__vconsole\" class=\"\">\\n  <div class=\"vc-switch\">vConsole</div>\\n  <div class=\"vc-mask\">\\n  </div>\\n  <div class=\"vc-panel\">\\n    <div class=\"vc-tabbar\">\\n    </div>\\n    <div class=\"vc-topbar\">\\n    </div>\\n    <div class=\"vc-content\">\\n    </div>\\n    <div class=\"vc-toolbar\">\\n      <a class=\"vc-tool vc-global-tool vc-tool-last vc-hide\">Hide</a>\\n    </div>\\n  </div>\\n</div>';\n  }, function (e, t) {\n    e.exports = '<a class=\"vc-tab\" data-tab=\"{{id}}\" id=\"__vc_tab_{{id}}\">{{name}}</a>';\n  }, function (e, t) {\n    e.exports = '<div class=\"vc-logbox\" id=\"__vc_log_{{id}}\">\\n  \\n</div>';\n  }, function (e, t) {\n    e.exports = '<a class=\"vc-toptab vc-topbar-{{pluginID}}{{if (className)}} {{className}}{{/if}}\">{{name}}</a>';\n  }, function (e, t) {\n    e.exports = '<a class=\"vc-tool vc-tool-{{pluginID}}\">{{name}}</a>';\n  }, function (e, t, o) {\n    \"use strict\";\n\n    function n(e) {\n      if (e && e.__esModule) return e;\n      var t = {};\n      if (null != e) for (var o in e) {\n        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);\n      }\n      return t[\"default\"] = e, t;\n    }\n    function i(e) {\n      return e && e.__esModule ? e : {\n        \"default\": e\n      };\n    }\n    function a(e, t) {\n      if (!(e instanceof t)) throw new TypeError(\"Cannot call a class as a function\");\n    }\n    function r(e, t) {\n      if (!e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n      return !t || \"object\" != _typeof(t) && \"function\" != typeof t ? e : t;\n    }\n    function l(e, t) {\n      if (\"function\" != typeof t && null !== t) throw new TypeError(\"Super expression must either be null or a function, not \" + _typeof(t));\n      e.prototype = Object.create(t && t.prototype, {\n        constructor: {\n          value: e,\n          enumerable: !1,\n          writable: !0,\n          configurable: !0\n        }\n      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);\n    }\n    Object.defineProperty(t, \"__esModule\", {\n      value: !0\n    });\n    var c = function () {\n        function e(e, t) {\n          for (var o = 0; o < t.length; o++) {\n            var n = t[o];\n            n.enumerable = n.enumerable || !1, n.configurable = !0, \"value\" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);\n          }\n        }\n        return function (t, o, n) {\n          return o && e(t.prototype, o), n && e(t, n), t;\n        };\n      }(),\n      s = function w(e, t, o) {\n        null === e && (e = Function.prototype);\n        var n = Object.getOwnPropertyDescriptor(e, t);\n        if (void 0 === n) {\n          var i = Object.getPrototypeOf(e);\n          return null === i ? void 0 : w(i, t, o);\n        }\n        if (\"value\" in n) return n.value;\n        var a = n.get;\n        if (void 0 !== a) return a.call(o);\n      },\n      d = o(5),\n      u = i(d),\n      v = o(4),\n      f = n(v),\n      p = o(17),\n      h = i(p),\n      g = o(22),\n      b = i(g),\n      m = o(23),\n      y = i(m),\n      _ = function (e) {\n        function t() {\n          var e;\n          a(this, t);\n          for (var o = arguments.length, n = Array(o), i = 0; o > i; i++) {\n            n[i] = arguments[i];\n          }\n          var l = r(this, (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(n)));\n          return l.tplTabbox = b[\"default\"], l.windowOnError = null, l;\n        }\n        return l(t, e), c(t, [{\n          key: \"onReady\",\n          value: function value() {\n            var e = this;\n            s(Object.getPrototypeOf(t.prototype), \"onReady\", this).call(this), u[\"default\"].bind(u[\"default\"].one(\".vc-cmd\", this.$tabbox), \"submit\", function (t) {\n              t.preventDefault();\n              var o = u[\"default\"].one(\".vc-cmd-input\", t.target),\n                n = o.value;\n              o.value = \"\", \"\" !== n && e.evalCommand(n);\n            });\n            var o = \"\";\n            o += \"if (!!window) {\", o += \"window.__vConsole_cmd_result = undefined;\", o += \"window.__vConsole_cmd_error = false;\", o += \"}\";\n            var n = document.getElementsByTagName(\"script\"),\n              i = \"\";\n            n.length > 0 && (i = n[0].getAttribute(\"nonce\") || \"\");\n            var a = document.createElement(\"SCRIPT\");\n            a.innerHTML = o, a.setAttribute(\"nonce\", i), document.documentElement.appendChild(a), document.documentElement.removeChild(a);\n          }\n        }, {\n          key: \"mockConsole\",\n          value: function value() {\n            s(Object.getPrototypeOf(t.prototype), \"mockConsole\", this).call(this);\n            var e = this;\n            f.isFunction(window.onerror) && (this.windowOnError = window.onerror), window.onerror = function (t, o, n, i, a) {\n              var r = t;\n              o && (r += \"\\n\" + o.replace(location.origin, \"\")), (n || i) && (r += \":\" + n + \":\" + i);\n              var l = !!a && !!a.stack,\n                c = l && a.stack.toString() || \"\";\n              e.printLog({\n                logType: \"error\",\n                logs: [r, c],\n                noOrigin: !0\n              }), f.isFunction(e.windowOnError) && e.windowOnError.call(window, t, o, n, i, a);\n            };\n          }\n        }, {\n          key: \"evalCommand\",\n          value: function value(e) {\n            this.printLog({\n              logType: \"log\",\n              content: u[\"default\"].render(y[\"default\"], {\n                content: e,\n                type: \"input\"\n              }),\n              noMeta: !0,\n              style: \"\"\n            });\n            var t = \"\";\n            t += \"try {\\n\", t += \"window.__vConsole_cmd_result = (function() {\\n\", t += \"return \" + e + \";\\n\", t += \"})();\\n\", t += \"window.__vConsole_cmd_error = false;\\n\", t += \"} catch (e) {\\n\", t += \"window.__vConsole_cmd_result = e.message;\\n\", t += \"window.__vConsole_cmd_error = true;\\n\", t += \"}\";\n            var o = document.getElementsByTagName(\"script\"),\n              n = \"\";\n            o.length > 0 && (n = o[0].getAttribute(\"nonce\") || \"\");\n            var i = document.createElement(\"SCRIPT\");\n            i.innerHTML = t, i.setAttribute(\"nonce\", n), document.documentElement.appendChild(i);\n            var a = window.__vConsole_cmd_result,\n              r = window.__vConsole_cmd_error;\n            if (document.documentElement.removeChild(i), 0 == r) {\n              var l = void 0;\n              f.isArray(a) || f.isObject(a) ? l = this.getFoldedLine(a) : (f.isNull(a) ? a = \"null\" : f.isUndefined(a) ? a = \"undefined\" : f.isFunction(a) ? a = \"function()\" : f.isString(a) && (a = '\"' + a + '\"'), l = u[\"default\"].render(y[\"default\"], {\n                content: a,\n                type: \"output\"\n              })), this.printLog({\n                logType: \"log\",\n                content: l,\n                noMeta: !0,\n                style: \"\"\n              });\n            } else this.printLog({\n              logType: \"error\",\n              logs: [a],\n              noMeta: !0,\n              style: \"\"\n            });\n          }\n        }]), t;\n      }(h[\"default\"]);\n    t[\"default\"] = _, e.exports = t[\"default\"];\n  }, function (e, t, o) {\n    \"use strict\";\n\n    function n(e) {\n      return e && e.__esModule ? e : {\n        \"default\": e\n      };\n    }\n    function i(e) {\n      if (e && e.__esModule) return e;\n      var t = {};\n      if (null != e) for (var o in e) {\n        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);\n      }\n      return t[\"default\"] = e, t;\n    }\n    function a(e, t) {\n      if (!(e instanceof t)) throw new TypeError(\"Cannot call a class as a function\");\n    }\n    function r(e, t) {\n      if (!e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n      return !t || \"object\" != _typeof(t) && \"function\" != typeof t ? e : t;\n    }\n    function l(e, t) {\n      if (\"function\" != typeof t && null !== t) throw new TypeError(\"Super expression must either be null or a function, not \" + _typeof(t));\n      e.prototype = Object.create(t && t.prototype, {\n        constructor: {\n          value: e,\n          enumerable: !1,\n          writable: !0,\n          configurable: !0\n        }\n      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);\n    }\n    Object.defineProperty(t, \"__esModule\", {\n      value: !0\n    });\n    var c = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (e) {\n        return _typeof(e);\n      } : function (e) {\n        return e && \"function\" == typeof Symbol && e.constructor === Symbol ? \"symbol\" : _typeof(e);\n      },\n      s = function () {\n        function e(e, t) {\n          for (var o = 0; o < t.length; o++) {\n            var n = t[o];\n            n.enumerable = n.enumerable || !1, n.configurable = !0, \"value\" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);\n          }\n        }\n        return function (t, o, n) {\n          return o && e(t.prototype, o), n && e(t, n), t;\n        };\n      }(),\n      d = o(4),\n      u = i(d),\n      v = o(5),\n      f = n(v),\n      p = o(18),\n      h = n(p),\n      g = o(19),\n      b = n(g),\n      m = o(20),\n      y = n(m),\n      _ = o(21),\n      w = n(_),\n      x = 1e3,\n      k = function (e) {\n        function t() {\n          var e;\n          a(this, t);\n          for (var o = arguments.length, n = Array(o), i = 0; o > i; i++) {\n            n[i] = arguments[i];\n          }\n          var l = r(this, (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(n)));\n          return l.tplTabbox = \"\", l.allowUnformattedLog = !0, l.isReady = !1, l.isShow = !1, l.$tabbox = null, l.console = {}, l.logList = [], l.isInBottom = !0, l.maxLogNumber = x, l.logNumber = 0, l.mockConsole(), l;\n        }\n        return l(t, e), s(t, [{\n          key: \"onInit\",\n          value: function value() {\n            this.$tabbox = f[\"default\"].render(this.tplTabbox, {}), this.updateMaxLogNumber();\n          }\n        }, {\n          key: \"onRenderTab\",\n          value: function value(e) {\n            e(this.$tabbox);\n          }\n        }, {\n          key: \"onAddTopBar\",\n          value: function value(e) {\n            for (var t = this, o = [\"All\", \"Log\", \"Info\", \"Warn\", \"Error\"], n = [], i = 0; i < o.length; i++) {\n              n.push({\n                name: o[i],\n                data: {\n                  type: o[i].toLowerCase()\n                },\n                className: \"\",\n                onClick: function onClick() {\n                  return f[\"default\"].hasClass(this, \"vc-actived\") ? !1 : void t.showLogType(this.dataset.type || \"all\");\n                }\n              });\n            }\n            n[0].className = \"vc-actived\", e(n);\n          }\n        }, {\n          key: \"onAddTool\",\n          value: function value(e) {\n            var t = this,\n              o = [{\n                name: \"Clear\",\n                global: !1,\n                onClick: function onClick() {\n                  t.clearLog(), t.vConsole.triggerEvent(\"clearLog\");\n                }\n              }];\n            e(o);\n          }\n        }, {\n          key: \"onReady\",\n          value: function value() {\n            var e = this;\n            e.isReady = !0;\n            var t = f[\"default\"].all(\".vc-subtab\", e.$tabbox);\n            f[\"default\"].bind(t, \"click\", function (o) {\n              if (o.preventDefault(), f[\"default\"].hasClass(this, \"vc-actived\")) return !1;\n              f[\"default\"].removeClass(t, \"vc-actived\"), f[\"default\"].addClass(this, \"vc-actived\");\n              var n = this.dataset.type,\n                i = f[\"default\"].one(\".vc-log\", e.$tabbox);\n              f[\"default\"].removeClass(i, \"vc-log-partly-log\"), f[\"default\"].removeClass(i, \"vc-log-partly-info\"), f[\"default\"].removeClass(i, \"vc-log-partly-warn\"), f[\"default\"].removeClass(i, \"vc-log-partly-error\"), \"all\" == n ? f[\"default\"].removeClass(i, \"vc-log-partly\") : (f[\"default\"].addClass(i, \"vc-log-partly\"), f[\"default\"].addClass(i, \"vc-log-partly-\" + n));\n            });\n            var o = f[\"default\"].one(\".vc-content\");\n            f[\"default\"].bind(o, \"scroll\", function (t) {\n              e.isShow && (o.scrollTop + o.offsetHeight >= o.scrollHeight ? e.isInBottom = !0 : e.isInBottom = !1);\n            });\n            for (var n = 0; n < e.logList.length; n++) {\n              e.printLog(e.logList[n]);\n            }\n            e.logList = [];\n          }\n        }, {\n          key: \"onRemove\",\n          value: function value() {\n            window.console.log = this.console.log, window.console.info = this.console.info, window.console.warn = this.console.warn, window.console.debug = this.console.debug, window.console.error = this.console.error, window.console.time = this.console.time, window.console.timeEnd = this.console.timeEnd, window.console.clear = this.console.clear, this.console = {};\n          }\n        }, {\n          key: \"onShow\",\n          value: function value() {\n            this.isShow = !0, 1 == this.isInBottom && this.autoScrollToBottom();\n          }\n        }, {\n          key: \"onHide\",\n          value: function value() {\n            this.isShow = !1;\n          }\n        }, {\n          key: \"onShowConsole\",\n          value: function value() {\n            1 == this.isInBottom && this.autoScrollToBottom();\n          }\n        }, {\n          key: \"onUpdateOption\",\n          value: function value() {\n            this.vConsole.option.maxLogNumber != this.maxLogNumber && (this.updateMaxLogNumber(), this.limitMaxLogs());\n          }\n        }, {\n          key: \"updateMaxLogNumber\",\n          value: function value() {\n            this.maxLogNumber = this.vConsole.option.maxLogNumber || x, this.maxLogNumber = Math.max(1, this.maxLogNumber);\n          }\n        }, {\n          key: \"limitMaxLogs\",\n          value: function value() {\n            if (this.isReady) for (; this.logNumber > this.maxLogNumber;) {\n              var e = f[\"default\"].one(\".vc-item\", this.$tabbox);\n              if (!e) break;\n              e.parentNode.removeChild(e), this.logNumber--;\n            }\n          }\n        }, {\n          key: \"showLogType\",\n          value: function value(e) {\n            var t = f[\"default\"].one(\".vc-log\", this.$tabbox);\n            f[\"default\"].removeClass(t, \"vc-log-partly-log\"), f[\"default\"].removeClass(t, \"vc-log-partly-info\"), f[\"default\"].removeClass(t, \"vc-log-partly-warn\"), f[\"default\"].removeClass(t, \"vc-log-partly-error\"), \"all\" == e ? f[\"default\"].removeClass(t, \"vc-log-partly\") : (f[\"default\"].addClass(t, \"vc-log-partly\"), f[\"default\"].addClass(t, \"vc-log-partly-\" + e));\n          }\n        }, {\n          key: \"autoScrollToBottom\",\n          value: function value() {\n            this.vConsole.option.disableLogScrolling || this.scrollToBottom();\n          }\n        }, {\n          key: \"scrollToBottom\",\n          value: function value() {\n            var e = f[\"default\"].one(\".vc-content\");\n            e && (e.scrollTop = e.scrollHeight - e.offsetHeight);\n          }\n        }, {\n          key: \"mockConsole\",\n          value: function value() {\n            var e = this,\n              t = this,\n              o = [\"log\", \"info\", \"warn\", \"debug\", \"error\"];\n            window.console ? (o.map(function (e) {\n              t.console[e] = window.console[e];\n            }), t.console.time = window.console.time, t.console.timeEnd = window.console.timeEnd, t.console.clear = window.console.clear) : window.console = {}, o.map(function (t) {\n              window.console[t] = function () {\n                for (var o = arguments.length, n = Array(o), i = 0; o > i; i++) {\n                  n[i] = arguments[i];\n                }\n                e.printLog({\n                  logType: t,\n                  logs: n\n                });\n              };\n            });\n            var n = {};\n            window.console.time = function (e) {\n              n[e] = Date.now();\n            }, window.console.timeEnd = function (e) {\n              var t = n[e];\n              t ? (__f__(\"log\", e + \":\", Date.now() - t + \"ms\", \" at common/vconsole/vconsole.min.js:11\"), delete n[e]) : __f__(\"log\", e + \": 0ms\", \" at common/vconsole/vconsole.min.js:11\");\n            }, window.console.clear = function () {\n              for (var e = arguments.length, o = Array(e), n = 0; e > n; n++) {\n                o[n] = arguments[n];\n              }\n              t.clearLog(), t.console.clear.apply(window.console, o);\n            };\n          }\n        }, {\n          key: \"clearLog\",\n          value: function value() {\n            f[\"default\"].one(\".vc-log\", this.$tabbox).innerHTML = \"\";\n          }\n        }, {\n          key: \"printOriginLog\",\n          value: function value(e) {\n            \"function\" == typeof this.console[e.logType] && this.console[e.logType].apply(window.console, e.logs);\n          }\n        }, {\n          key: \"printLog\",\n          value: function value(e) {\n            var t = e.logs || [];\n            if (t.length || e.content) {\n              t = [].slice.call(t || []);\n              var o = !0,\n                n = /^\\[(\\w+)\\]$/i,\n                i = \"\";\n              if (u.isString(t[0])) {\n                var a = t[0].match(n);\n                null !== a && a.length > 0 && (i = a[1].toLowerCase());\n              }\n              if (i ? o = i == this.id : 0 == this.allowUnformattedLog && (o = !1), !o) return void (e.noOrigin || this.printOriginLog(e));\n              if (e.date || (e.date = +new Date()), !this.isReady) return void this.logList.push(e);\n              if (u.isString(t[0]) && (t[0] = t[0].replace(n, \"\"), \"\" === t[0] && t.shift()), !e.meta) {\n                var r = u.getDate(e.date);\n                e.meta = r.hour + \":\" + r.minute + \":\" + r.second;\n              }\n              for (var l = f[\"default\"].render(b[\"default\"], {\n                  logType: e.logType,\n                  noMeta: !!e.noMeta,\n                  meta: e.meta,\n                  style: e.style || \"\"\n                }), s = f[\"default\"].one(\".vc-item-content\", l), d = 0; d < t.length; d++) {\n                var v = void 0;\n                try {\n                  if (\"\" === t[d]) continue;\n                  v = u.isFunction(t[d]) ? \"<span> \" + t[d].toString() + \"</span>\" : u.isObject(t[d]) || u.isArray(t[d]) ? this.getFoldedLine(t[d]) : \"<span> \" + u.htmlEncode(t[d]).replace(/\\n/g, \"<br/>\") + \"</span>\";\n                } catch (p) {\n                  v = \"<span> [\" + c(t[d]) + \"]</span>\";\n                }\n                v && (\"string\" == typeof v ? s.insertAdjacentHTML(\"beforeend\", v) : s.insertAdjacentElement(\"beforeend\", v));\n              }\n              u.isObject(e.content) && s.insertAdjacentElement(\"beforeend\", e.content), f[\"default\"].one(\".vc-log\", this.$tabbox).insertAdjacentElement(\"beforeend\", l), this.logNumber++, this.limitMaxLogs(), this.isInBottom && this.autoScrollToBottom(), e.noOrigin || this.printOriginLog(e);\n            }\n          }\n        }, {\n          key: \"getFoldedLine\",\n          value: function value(e, t) {\n            var o = this;\n            if (!t) {\n              var n = u.JSONStringify(e),\n                i = n.substr(0, 26);\n              t = u.getObjName(e), n.length > 26 && (i += \"...\"), t += \" \" + i;\n            }\n            var a = f[\"default\"].render(y[\"default\"], {\n              outer: t,\n              lineType: \"obj\"\n            });\n            return f[\"default\"].bind(f[\"default\"].one(\".vc-fold-outer\", a), \"click\", function (t) {\n              t.preventDefault(), t.stopPropagation(), f[\"default\"].hasClass(a, \"vc-toggle\") ? (f[\"default\"].removeClass(a, \"vc-toggle\"), f[\"default\"].removeClass(f[\"default\"].one(\".vc-fold-inner\", a), \"vc-toggle\"), f[\"default\"].removeClass(f[\"default\"].one(\".vc-fold-outer\", a), \"vc-toggle\")) : (f[\"default\"].addClass(a, \"vc-toggle\"), f[\"default\"].addClass(f[\"default\"].one(\".vc-fold-inner\", a), \"vc-toggle\"), f[\"default\"].addClass(f[\"default\"].one(\".vc-fold-outer\", a), \"vc-toggle\"));\n              var n = f[\"default\"].one(\".vc-fold-inner\", a);\n              if (0 == n.children.length && e) {\n                for (var i = u.getObjAllKeys(e), r = 0; r < i.length; r++) {\n                  var l = e[i[r]],\n                    c = \"undefined\",\n                    s = \"\";\n                  u.isString(l) ? (c = \"string\", l = '\"' + l + '\"') : u.isNumber(l) ? c = \"number\" : u.isBoolean(l) ? c = \"boolean\" : u.isNull(l) ? (c = \"null\", l = \"null\") : u.isUndefined(l) ? (c = \"undefined\", l = \"undefined\") : u.isFunction(l) ? (c = \"function\", l = \"function()\") : u.isSymbol(l) && (c = \"symbol\");\n                  var d = void 0;\n                  if (u.isArray(l)) {\n                    var v = u.getObjName(l) + \"[\" + l.length + \"]\";\n                    d = o.getFoldedLine(l, f[\"default\"].render(w[\"default\"], {\n                      key: i[r],\n                      keyType: s,\n                      value: v,\n                      valueType: \"array\"\n                    }, !0));\n                  } else if (u.isObject(l)) {\n                    var p = u.getObjName(l);\n                    d = o.getFoldedLine(l, f[\"default\"].render(w[\"default\"], {\n                      key: u.htmlEncode(i[r]),\n                      keyType: s,\n                      value: p,\n                      valueType: \"object\"\n                    }, !0));\n                  } else {\n                    e.hasOwnProperty && !e.hasOwnProperty(i[r]) && (s = \"private\");\n                    var h = {\n                      lineType: \"kv\",\n                      key: u.htmlEncode(i[r]),\n                      keyType: s,\n                      value: u.htmlEncode(l),\n                      valueType: c\n                    };\n                    d = f[\"default\"].render(y[\"default\"], h);\n                  }\n                  n.insertAdjacentElement(\"beforeend\", d);\n                }\n                if (u.isObject(e)) {\n                  var g = e.__proto__,\n                    b = void 0;\n                  b = u.isObject(g) ? o.getFoldedLine(g, f[\"default\"].render(w[\"default\"], {\n                    key: \"__proto__\",\n                    keyType: \"private\",\n                    value: u.getObjName(g),\n                    valueType: \"object\"\n                  }, !0)) : f[\"default\"].render(w[\"default\"], {\n                    key: \"__proto__\",\n                    keyType: \"private\",\n                    value: \"null\",\n                    valueType: \"null\"\n                  }), n.insertAdjacentElement(\"beforeend\", b);\n                }\n              }\n              return !1;\n            }), a;\n          }\n        }]), t;\n      }(h[\"default\"]);\n    t[\"default\"] = k, e.exports = t[\"default\"];\n  }, function (e, t) {\n    \"use strict\";\n\n    function o(e, t) {\n      if (!(e instanceof t)) throw new TypeError(\"Cannot call a class as a function\");\n    }\n    Object.defineProperty(t, \"__esModule\", {\n      value: !0\n    });\n    var n = function () {\n        function e(e, t) {\n          for (var o = 0; o < t.length; o++) {\n            var n = t[o];\n            n.enumerable = n.enumerable || !1, n.configurable = !0, \"value\" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);\n          }\n        }\n        return function (t, o, n) {\n          return o && e(t.prototype, o), n && e(t, n), t;\n        };\n      }(),\n      i = function () {\n        function e(t) {\n          var n = arguments.length <= 1 || void 0 === arguments[1] ? \"newPlugin\" : arguments[1];\n          o(this, e), this.id = t, this.name = n, this.isReady = !1, this.eventList = {};\n        }\n        return n(e, [{\n          key: \"on\",\n          value: function value(e, t) {\n            return this.eventList[e] = t, this;\n          }\n        }, {\n          key: \"trigger\",\n          value: function value(e, t) {\n            if (\"function\" == typeof this.eventList[e]) this.eventList[e].call(this, t);else {\n              var o = \"on\" + e.charAt(0).toUpperCase() + e.slice(1);\n              \"function\" == typeof this[o] && this[o].call(this, t);\n            }\n            return this;\n          }\n        }, {\n          key: \"id\",\n          get: function get() {\n            return this._id;\n          },\n          set: function set(e) {\n            if (!e) throw \"Plugin ID cannot be empty\";\n            this._id = e.toLowerCase();\n          }\n        }, {\n          key: \"name\",\n          get: function get() {\n            return this._name;\n          },\n          set: function set(e) {\n            if (!e) throw \"Plugin name cannot be empty\";\n            this._name = e;\n          }\n        }, {\n          key: \"vConsole\",\n          get: function get() {\n            return this._vConsole || void 0;\n          },\n          set: function set(e) {\n            if (!e) throw \"vConsole cannot be empty\";\n            this._vConsole = e;\n          }\n        }]), e;\n      }();\n    t[\"default\"] = i, e.exports = t[\"default\"];\n  }, function (e, t) {\n    e.exports = '<div class=\"vc-item vc-item-{{logType}} {{if (!noMeta)}}vc-item-nometa{{/if}} {{style}}\">\\n\t<span class=\"vc-item-meta\">{{if (!noMeta)}}{{meta}}{{/if}}</span>\\n\t<div class=\"vc-item-content\"></div>\\n</div>';\n  }, function (e, t) {\n    e.exports = '<div class=\"vc-fold\">\\n  {{if (lineType == \\'obj\\')}}\\n    <i class=\"vc-fold-outer\">{{outer}}</i>\\n    <div class=\"vc-fold-inner\"></div>\\n  {{else if (lineType == \\'value\\')}}\\n    <i class=\"vc-code-{{valueType}}\">{{value}}</i>\\n  {{else if (lineType == \\'kv\\')}}\\n    <i class=\"vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}\">{{key}}</i>: <i class=\"vc-code-{{valueType}}\">{{value}}</i>\\n  {{/if}}\\n</div>';\n  }, function (e, t) {\n    e.exports = '<span>\\n  <i class=\"vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}\">{{key}}</i>: <i class=\"vc-code-{{valueType}}\">{{value}}</i>\\n</span>';\n  }, function (e, t) {\n    e.exports = '<div>\\n  <div class=\"vc-log\"></div>\\n  <form class=\"vc-cmd\">\\n    <button class=\"vc-cmd-btn\" type=\"submit\">OK</button>\\n    <div class=\"vc-cmd-input-wrap\">\\n      <textarea class=\"vc-cmd-input\" placeholder=\"command...\"></textarea>\\n    </div>\\n  </form>\\n</div>';\n  }, function (e, t) {\n    e.exports = '<pre class=\"vc-item-code vc-item-code-{{type}}\">{{content}}</pre>';\n  }, function (e, t, o) {\n    \"use strict\";\n\n    function n(e) {\n      return e && e.__esModule ? e : {\n        \"default\": e\n      };\n    }\n    function i(e) {\n      if (e && e.__esModule) return e;\n      var t = {};\n      if (null != e) for (var o in e) {\n        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);\n      }\n      return t[\"default\"] = e, t;\n    }\n    function a(e, t) {\n      if (!(e instanceof t)) throw new TypeError(\"Cannot call a class as a function\");\n    }\n    function r(e, t) {\n      if (!e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n      return !t || \"object\" != _typeof(t) && \"function\" != typeof t ? e : t;\n    }\n    function l(e, t) {\n      if (\"function\" != typeof t && null !== t) throw new TypeError(\"Super expression must either be null or a function, not \" + _typeof(t));\n      e.prototype = Object.create(t && t.prototype, {\n        constructor: {\n          value: e,\n          enumerable: !1,\n          writable: !0,\n          configurable: !0\n        }\n      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);\n    }\n    Object.defineProperty(t, \"__esModule\", {\n      value: !0\n    });\n    var c = function () {\n        function e(e, t) {\n          for (var o = 0; o < t.length; o++) {\n            var n = t[o];\n            n.enumerable = n.enumerable || !1, n.configurable = !0, \"value\" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);\n          }\n        }\n        return function (t, o, n) {\n          return o && e(t.prototype, o), n && e(t, n), t;\n        };\n      }(),\n      s = function g(e, t, o) {\n        null === e && (e = Function.prototype);\n        var n = Object.getOwnPropertyDescriptor(e, t);\n        if (void 0 === n) {\n          var i = Object.getPrototypeOf(e);\n          return null === i ? void 0 : g(i, t, o);\n        }\n        if (\"value\" in n) return n.value;\n        var a = n.get;\n        if (void 0 !== a) return a.call(o);\n      },\n      d = o(4),\n      u = (i(d), o(17)),\n      v = n(u),\n      f = o(25),\n      p = n(f),\n      h = function (e) {\n        function t() {\n          var e;\n          a(this, t);\n          for (var o = arguments.length, n = Array(o), i = 0; o > i; i++) {\n            n[i] = arguments[i];\n          }\n          var l = r(this, (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(n)));\n          return l.tplTabbox = p[\"default\"], l.allowUnformattedLog = !1, l;\n        }\n        return l(t, e), c(t, [{\n          key: \"onInit\",\n          value: function value() {\n            s(Object.getPrototypeOf(t.prototype), \"onInit\", this).call(this), this.printSystemInfo();\n          }\n        }, {\n          key: \"printSystemInfo\",\n          value: function value() {\n            var e = navigator.userAgent,\n              t = \"\",\n              o = e.match(/(ipod).*\\s([\\d_]+)/i),\n              n = e.match(/(ipad).*\\s([\\d_]+)/i),\n              i = e.match(/(iphone)\\sos\\s([\\d_]+)/i),\n              a = e.match(/(android)\\s([\\d\\.]+)/i);\n            t = \"Unknown\", a ? t = \"Android \" + a[2] : i ? t = \"iPhone, iOS \" + i[2].replace(/_/g, \".\") : n ? t = \"iPad, iOS \" + n[2].replace(/_/g, \".\") : o && (t = \"iPod, iOS \" + o[2].replace(/_/g, \".\"));\n            var r = t,\n              l = e.match(/MicroMessenger\\/([\\d\\.]+)/i);\n            t = \"Unknown\", l && l[1] ? (t = l[1], r += \", WeChat \" + t, __f__(\"info\", \"[system]\", \"System:\", r, \" at common/vconsole/vconsole.min.js:11\")) : __f__(\"info\", \"[system]\", \"System:\", r, \" at common/vconsole/vconsole.min.js:11\"), t = \"Unknown\", t = \"https:\" == location.protocol ? \"HTTPS\" : \"http:\" == location.protocol ? \"HTTP\" : location.protocol.replace(\":\", \"\"), r = t;\n            var c = e.toLowerCase().match(/ nettype\\/([^ ]+)/g);\n            t = \"Unknown\", c && c[0] ? (c = c[0].split(\"/\"), t = c[1], r += \", \" + t, __f__(\"info\", \"[system]\", \"Network:\", r, \" at common/vconsole/vconsole.min.js:11\")) : __f__(\"info\", \"[system]\", \"Protocol:\", r, \" at common/vconsole/vconsole.min.js:11\"), __f__(\"info\", \"[system]\", \"UA:\", e, \" at common/vconsole/vconsole.min.js:11\"), setTimeout(function () {\n              var e = window.performance || window.msPerformance || window.webkitPerformance;\n              if (e && e.timing) {\n                var t = e.timing;\n                t.navigationStart && __f__(\"info\", \"[system]\", \"navigationStart:\", t.navigationStart, \" at common/vconsole/vconsole.min.js:11\"), t.navigationStart && t.domainLookupStart && __f__(\"info\", \"[system]\", \"navigation:\", t.domainLookupStart - t.navigationStart + \"ms\", \" at common/vconsole/vconsole.min.js:11\"), t.domainLookupEnd && t.domainLookupStart && __f__(\"info\", \"[system]\", \"dns:\", t.domainLookupEnd - t.domainLookupStart + \"ms\", \" at common/vconsole/vconsole.min.js:11\"), t.connectEnd && t.connectStart && (t.connectEnd && t.secureConnectionStart ? __f__(\"info\", \"[system]\", \"tcp (ssl):\", t.connectEnd - t.connectStart + \"ms (\" + (t.connectEnd - t.secureConnectionStart) + \"ms)\", \" at common/vconsole/vconsole.min.js:11\") : __f__(\"info\", \"[system]\", \"tcp:\", t.connectEnd - t.connectStart + \"ms\", \" at common/vconsole/vconsole.min.js:11\")), t.responseStart && t.requestStart && __f__(\"info\", \"[system]\", \"request:\", t.responseStart - t.requestStart + \"ms\", \" at common/vconsole/vconsole.min.js:11\"), t.responseEnd && t.responseStart && __f__(\"info\", \"[system]\", \"response:\", t.responseEnd - t.responseStart + \"ms\", \" at common/vconsole/vconsole.min.js:11\"), t.domComplete && t.domLoading && (t.domContentLoadedEventStart && t.domLoading ? __f__(\"info\", \"[system]\", \"domComplete (domLoaded):\", t.domComplete - t.domLoading + \"ms (\" + (t.domContentLoadedEventStart - t.domLoading) + \"ms)\", \" at common/vconsole/vconsole.min.js:11\") : __f__(\"info\", \"[system]\", \"domComplete:\", t.domComplete - t.domLoading + \"ms\", \" at common/vconsole/vconsole.min.js:11\")), t.loadEventEnd && t.loadEventStart && __f__(\"info\", \"[system]\", \"loadEvent:\", t.loadEventEnd - t.loadEventStart + \"ms\", \" at common/vconsole/vconsole.min.js:11\"), t.navigationStart && t.loadEventEnd && __f__(\"info\", \"[system]\", \"total (DOM):\", t.loadEventEnd - t.navigationStart + \"ms (\" + (t.domComplete - t.navigationStart) + \"ms)\", \" at common/vconsole/vconsole.min.js:11\");\n              }\n            }, 0);\n          }\n        }]), t;\n      }(v[\"default\"]);\n    t[\"default\"] = h, e.exports = t[\"default\"];\n  }, function (e, t) {\n    e.exports = '<div>\\n  <div class=\"vc-log\"></div>\\n</div>';\n  }, function (e, t, o) {\n    \"use strict\";\n\n    function n(e) {\n      if (e && e.__esModule) return e;\n      var t = {};\n      if (null != e) for (var o in e) {\n        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);\n      }\n      return t[\"default\"] = e, t;\n    }\n    function i(e) {\n      return e && e.__esModule ? e : {\n        \"default\": e\n      };\n    }\n    function a(e, t) {\n      if (!(e instanceof t)) throw new TypeError(\"Cannot call a class as a function\");\n    }\n    function r(e, t) {\n      if (!e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n      return !t || \"object\" != _typeof(t) && \"function\" != typeof t ? e : t;\n    }\n    function l(e, t) {\n      if (\"function\" != typeof t && null !== t) throw new TypeError(\"Super expression must either be null or a function, not \" + _typeof(t));\n      e.prototype = Object.create(t && t.prototype, {\n        constructor: {\n          value: e,\n          enumerable: !1,\n          writable: !0,\n          configurable: !0\n        }\n      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);\n    }\n    Object.defineProperty(t, \"__esModule\", {\n      value: !0\n    });\n    var c = function () {\n        function e(e, t) {\n          for (var o = 0; o < t.length; o++) {\n            var n = t[o];\n            n.enumerable = n.enumerable || !1, n.configurable = !0, \"value\" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);\n          }\n        }\n        return function (t, o, n) {\n          return o && e(t.prototype, o), n && e(t, n), t;\n        };\n      }(),\n      s = o(5),\n      d = i(s),\n      u = o(4),\n      v = n(u),\n      f = o(18),\n      p = i(f),\n      h = o(27),\n      g = i(h),\n      b = o(28),\n      m = i(b),\n      y = o(29),\n      _ = i(y),\n      w = function (e) {\n        function t() {\n          var e;\n          a(this, t);\n          for (var o = arguments.length, n = Array(o), i = 0; o > i; i++) {\n            n[i] = arguments[i];\n          }\n          var l = r(this, (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(n)));\n          return l.$tabbox = d[\"default\"].render(g[\"default\"], {}), l.$header = null, l.reqList = {}, l.domList = {}, l.isReady = !1, l.isShow = !1, l.isInBottom = !0, l._open = void 0, l._send = void 0, l.mockAjax(), l;\n        }\n        return l(t, e), c(t, [{\n          key: \"onRenderTab\",\n          value: function value(e) {\n            e(this.$tabbox);\n          }\n        }, {\n          key: \"onAddTool\",\n          value: function value(e) {\n            var t = this,\n              o = [{\n                name: \"Clear\",\n                global: !1,\n                onClick: function onClick(e) {\n                  t.clearLog();\n                }\n              }];\n            e(o);\n          }\n        }, {\n          key: \"onReady\",\n          value: function value() {\n            var e = this;\n            e.isReady = !0, this.renderHeader(), d[\"default\"].delegate(d[\"default\"].one(\".vc-log\", this.$tabbox), \"click\", \".vc-group-preview\", function (t) {\n              var o = this.dataset.reqid,\n                n = this.parentNode;\n              d[\"default\"].hasClass(n, \"vc-actived\") ? (d[\"default\"].removeClass(n, \"vc-actived\"), e.updateRequest(o, {\n                actived: !1\n              })) : (d[\"default\"].addClass(n, \"vc-actived\"), e.updateRequest(o, {\n                actived: !0\n              })), t.preventDefault();\n            });\n            var t = d[\"default\"].one(\".vc-content\");\n            d[\"default\"].bind(t, \"scroll\", function (o) {\n              e.isShow && (t.scrollTop + t.offsetHeight >= t.scrollHeight ? e.isInBottom = !0 : e.isInBottom = !1);\n            });\n            for (var o in e.reqList) {\n              e.updateRequest(o, {});\n            }\n          }\n        }, {\n          key: \"onRemove\",\n          value: function value() {\n            window.XMLHttpRequest && (window.XMLHttpRequest.prototype.open = this._open, window.XMLHttpRequest.prototype.send = this._send, this._open = void 0, this._send = void 0);\n          }\n        }, {\n          key: \"onShow\",\n          value: function value() {\n            this.isShow = !0, 1 == this.isInBottom && this.scrollToBottom();\n          }\n        }, {\n          key: \"onHide\",\n          value: function value() {\n            this.isShow = !1;\n          }\n        }, {\n          key: \"onShowConsole\",\n          value: function value() {\n            1 == this.isInBottom && this.scrollToBottom();\n          }\n        }, {\n          key: \"scrollToBottom\",\n          value: function value() {\n            var e = d[\"default\"].one(\".vc-content\");\n            e.scrollTop = e.scrollHeight - e.offsetHeight;\n          }\n        }, {\n          key: \"clearLog\",\n          value: function value() {\n            this.reqList = {};\n            for (var e in this.domList) {\n              this.domList[e].remove(), this.domList[e] = void 0;\n            }\n            this.domList = {}, this.renderHeader();\n          }\n        }, {\n          key: \"renderHeader\",\n          value: function value() {\n            var e = Object.keys(this.reqList).length,\n              t = d[\"default\"].render(m[\"default\"], {\n                count: e\n              }),\n              o = d[\"default\"].one(\".vc-log\", this.$tabbox);\n            this.$header ? this.$header.parentNode.replaceChild(t, this.$header) : o.parentNode.insertBefore(t, o), this.$header = t;\n          }\n        }, {\n          key: \"updateRequest\",\n          value: function value(e, t) {\n            var o = Object.keys(this.reqList).length,\n              n = this.reqList[e] || {};\n            for (var i in t) {\n              n[i] = t[i];\n            }\n            if (this.reqList[e] = n, this.isReady) {\n              var a = {\n                id: e,\n                url: n.url,\n                status: n.status,\n                method: n.method || \"-\",\n                costTime: n.costTime > 0 ? n.costTime + \"ms\" : \"-\",\n                header: n.header || null,\n                getData: n.getData || null,\n                postData: n.postData || null,\n                response: null,\n                actived: !!n.actived\n              };\n              switch (n.responseType) {\n                case \"\":\n                case \"text\":\n                  if (v.isString(n.response)) try {\n                    a.response = JSON.parse(n.response), a.response = JSON.stringify(a.response, null, 1), a.response = v.htmlEncode(a.response);\n                  } catch (r) {\n                    a.response = v.htmlEncode(n.response);\n                  } else \"undefined\" != typeof n.response && (a.response = Object.prototype.toString.call(n.response));\n                  break;\n                case \"json\":\n                  \"undefined\" != typeof n.response && (a.response = JSON.stringify(n.response, null, 1));\n                  break;\n                case \"blob\":\n                case \"document\":\n                case \"arraybuffer\":\n                default:\n                  \"undefined\" != typeof n.response && (a.response = Object.prototype.toString.call(n.response));\n              }\n              0 == n.readyState || 1 == n.readyState ? a.status = \"Pending\" : 2 == n.readyState || 3 == n.readyState ? a.status = \"Loading\" : 4 == n.readyState || (a.status = \"Unknown\");\n              var l = d[\"default\"].render(_[\"default\"], a),\n                c = this.domList[e];\n              n.status >= 400 && d[\"default\"].addClass(d[\"default\"].one(\".vc-group-preview\", l), \"vc-table-row-error\"), c ? c.parentNode.replaceChild(l, c) : d[\"default\"].one(\".vc-log\", this.$tabbox).insertAdjacentElement(\"beforeend\", l), this.domList[e] = l;\n              var s = Object.keys(this.reqList).length;\n              s != o && this.renderHeader(), this.isInBottom && this.scrollToBottom();\n            }\n          }\n        }, {\n          key: \"mockAjax\",\n          value: function value() {\n            var e = window.XMLHttpRequest;\n            if (e) {\n              var t = this,\n                o = window.XMLHttpRequest.prototype.open,\n                n = window.XMLHttpRequest.prototype.send;\n              t._open = o, t._send = n, window.XMLHttpRequest.prototype.open = function () {\n                var e = this,\n                  n = [].slice.call(arguments),\n                  i = n[0],\n                  a = n[1],\n                  r = t.getUniqueID(),\n                  l = null;\n                e._requestID = r, e._method = i, e._url = a;\n                var c = e.onreadystatechange || function () {},\n                  s = function s() {\n                    var o = t.reqList[r] || {};\n                    if (o.readyState = e.readyState, o.status = 0, e.readyState > 1 && (o.status = e.status), o.responseType = e.responseType, 0 == e.readyState) o.startTime || (o.startTime = +new Date());else if (1 == e.readyState) o.startTime || (o.startTime = +new Date());else if (2 == e.readyState) {\n                      o.header = {};\n                      for (var n = e.getAllResponseHeaders() || \"\", i = n.split(\"\\n\"), a = 0; a < i.length; a++) {\n                        var s = i[a];\n                        if (s) {\n                          var d = s.split(\": \"),\n                            u = d[0],\n                            v = d.slice(1).join(\": \");\n                          o.header[u] = v;\n                        }\n                      }\n                    } else 3 == e.readyState || (4 == e.readyState ? (clearInterval(l), o.endTime = +new Date(), o.costTime = o.endTime - (o.startTime || o.endTime), o.response = e.response) : clearInterval(l));\n                    return e._noVConsole || t.updateRequest(r, o), c.apply(e, arguments);\n                  };\n                e.onreadystatechange = s;\n                var d = -1;\n                return l = setInterval(function () {\n                  d != e.readyState && (d = e.readyState, s.call(e));\n                }, 10), o.apply(e, n);\n              }, window.XMLHttpRequest.prototype.send = function () {\n                var e = this,\n                  o = [].slice.call(arguments),\n                  i = o[0],\n                  a = t.reqList[e._requestID] || {};\n                a.method = e._method.toUpperCase();\n                var r = e._url.split(\"?\");\n                if (a.url = r.shift(), r.length > 0) {\n                  a.getData = {}, r = r.join(\"?\"), r = r.split(\"&\");\n                  var l = !0,\n                    c = !1,\n                    s = void 0;\n                  try {\n                    for (var d, u = r[Symbol.iterator](); !(l = (d = u.next()).done); l = !0) {\n                      var f = d.value;\n                      f = f.split(\"=\"), a.getData[f[0]] = f[1];\n                    }\n                  } catch (p) {\n                    c = !0, s = p;\n                  } finally {\n                    try {\n                      !l && u[\"return\"] && u[\"return\"]();\n                    } finally {\n                      if (c) throw s;\n                    }\n                  }\n                }\n                if (\"POST\" == a.method) if (v.isString(i)) {\n                  var h = i.split(\"&\");\n                  a.postData = {};\n                  var g = !0,\n                    b = !1,\n                    m = void 0;\n                  try {\n                    for (var y, _ = h[Symbol.iterator](); !(g = (y = _.next()).done); g = !0) {\n                      var w = y.value;\n                      w = w.split(\"=\"), a.postData[w[0]] = w[1];\n                    }\n                  } catch (p) {\n                    b = !0, m = p;\n                  } finally {\n                    try {\n                      !g && _[\"return\"] && _[\"return\"]();\n                    } finally {\n                      if (b) throw m;\n                    }\n                  }\n                } else v.isPlainObject(i) && (a.postData = i);\n                return e._noVConsole || t.updateRequest(e._requestID, a), n.apply(e, o);\n              };\n            }\n          }\n        }, {\n          key: \"getUniqueID\",\n          value: function value() {\n            var e = \"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(/[xy]/g, function (e) {\n              var t = 16 * Math.random() | 0,\n                o = \"x\" == e ? t : 3 & t | 8;\n              return o.toString(16);\n            });\n            return e;\n          }\n        }]), t;\n      }(p[\"default\"]);\n    t[\"default\"] = w, e.exports = t[\"default\"];\n  }, function (e, t) {\n    e.exports = '<div class=\"vc-table\">\\n  <div class=\"vc-log\"></div>\\n</div>';\n  }, function (e, t) {\n    e.exports = '<dl class=\"vc-table-row\">\\n  <dd class=\"vc-table-col vc-table-col-4\">Name {{if (count > 0)}}({{count}}){{/if}}</dd>\\n  <dd class=\"vc-table-col\">Method</dd>\\n  <dd class=\"vc-table-col\">Status</dd>\\n  <dd class=\"vc-table-col\">Time</dd>\\n</dl>';\n  }, function (e, t) {\n    e.exports = '<div class=\"vc-group {{actived ? \\'vc-actived\\' : \\'\\'}}\">\\n  <dl class=\"vc-table-row vc-group-preview\" data-reqid=\"{{id}}\">\\n    <dd class=\"vc-table-col vc-table-col-4\">{{url}}</dd>\\n    <dd class=\"vc-table-col\">{{method}}</dd>\\n    <dd class=\"vc-table-col\">{{status}}</dd>\\n    <dd class=\"vc-table-col\">{{costTime}}</dd>\\n  </dl>\\n  <div class=\"vc-group-detail\">\\n    {{if (header !== null)}}\\n    <div>\\n      <dl class=\"vc-table-row vc-left-border\">\\n        <dt class=\"vc-table-col vc-table-col-title\">Headers</dt>\\n      </dl>\\n      {{for (var key in header)}}\\n      <div class=\"vc-table-row vc-left-border vc-small\">\\n        <div class=\"vc-table-col vc-table-col-2\">{{key}}</div>\\n        <div class=\"vc-table-col vc-table-col-4 vc-max-height-line\">{{header[key]}}</div>\\n      </div>\\n      {{/for}}\\n    </div>\\n    {{/if}}\\n    {{if (getData !== null)}}\\n    <div>\\n      <dl class=\"vc-table-row vc-left-border\">\\n        <dt class=\"vc-table-col vc-table-col-title\">Query String Parameters</dt>\\n      </dl>\\n      {{for (var key in getData)}}\\n      <div class=\"vc-table-row vc-left-border vc-small\">\\n        <div class=\"vc-table-col vc-table-col-2\">{{key}}</div>\\n        <div class=\"vc-table-col vc-table-col-4 vc-max-height-line\">{{getData[key]}}</div>\\n      </div>\\n      {{/for}}\\n    </div>\\n    {{/if}}\\n    {{if (postData !== null)}}\\n    <div>\\n      <dl class=\"vc-table-row vc-left-border\">\\n        <dt class=\"vc-table-col vc-table-col-title\">Form Data</dt>\\n      </dl>\\n      {{for (var key in postData)}}\\n      <div class=\"vc-table-row vc-left-border vc-small\">\\n        <div class=\"vc-table-col vc-table-col-2\">{{key}}</div>\\n        <div class=\"vc-table-col vc-table-col-4 vc-max-height-line\">{{postData[key]}}</div>\\n      </div>\\n      {{/for}}\\n    </div>\\n    {{/if}}\\n    <div>\\n      <dl class=\"vc-table-row vc-left-border\">\\n        <dt class=\"vc-table-col vc-table-col-title\">Response</dt>\\n      </dl>\\n      <div class=\"vc-table-row vc-left-border vc-small\">\\n        <pre class=\"vc-table-col vc-max-height vc-min-height\">{{response || \\'\\'}}</pre>\\n      </div>\\n    </div>\\n  </div>\\n</div>';\n  }, function (e, t, o) {\n    \"use strict\";\n\n    function n(e) {\n      if (e && e.__esModule) return e;\n      var t = {};\n      if (null != e) for (var o in e) {\n        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);\n      }\n      return t[\"default\"] = e, t;\n    }\n    function i(e) {\n      return e && e.__esModule ? e : {\n        \"default\": e\n      };\n    }\n    function a(e, t) {\n      if (!(e instanceof t)) throw new TypeError(\"Cannot call a class as a function\");\n    }\n    function r(e, t) {\n      if (!e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n      return !t || \"object\" != _typeof(t) && \"function\" != typeof t ? e : t;\n    }\n    function l(e, t) {\n      if (\"function\" != typeof t && null !== t) throw new TypeError(\"Super expression must either be null or a function, not \" + _typeof(t));\n      e.prototype = Object.create(t && t.prototype, {\n        constructor: {\n          value: e,\n          enumerable: !1,\n          writable: !0,\n          configurable: !0\n        }\n      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);\n    }\n    Object.defineProperty(t, \"__esModule\", {\n      value: !0\n    });\n    var c = function () {\n      function e(e, t) {\n        for (var o = 0; o < t.length; o++) {\n          var n = t[o];\n          n.enumerable = n.enumerable || !1, n.configurable = !0, \"value\" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);\n        }\n      }\n      return function (t, o, n) {\n        return o && e(t.prototype, o), n && e(t, n), t;\n      };\n    }();\n    o(31);\n    var s = o(18),\n      d = i(s),\n      u = o(33),\n      v = i(u),\n      f = o(34),\n      p = i(f),\n      h = o(4),\n      g = (n(h), o(5)),\n      b = i(g),\n      m = function (e) {\n        function t() {\n          var e;\n          a(this, t);\n          for (var o = arguments.length, n = Array(o), i = 0; o > i; i++) {\n            n[i] = arguments[i];\n          }\n          var l = r(this, (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(n))),\n            c = l;\n          c.isInited = !1, c.node = {}, c.$tabbox = b[\"default\"].render(v[\"default\"], {}), c.nodes = [], c.activedElem = {};\n          var s = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;\n          return c.observer = new s(function (e) {\n            for (var t = 0; t < e.length; t++) {\n              var o = e[t];\n              c._isInVConsole(o.target) || c.onMutation(o);\n            }\n          }), l;\n        }\n        return l(t, e), c(t, [{\n          key: \"onRenderTab\",\n          value: function value(e) {\n            e(this.$tabbox);\n          }\n        }, {\n          key: \"onAddTool\",\n          value: function value(e) {\n            var t = this,\n              o = [{\n                name: \"Expend\",\n                global: !1,\n                onClick: function onClick(e) {\n                  if (t.activedElem) if (b[\"default\"].hasClass(t.activedElem, \"vc-toggle\")) for (var o = 0; o < t.activedElem.childNodes.length; o++) {\n                    var n = t.activedElem.childNodes[o];\n                    if (b[\"default\"].hasClass(n, \"vcelm-l\") && !b[\"default\"].hasClass(n, \"vcelm-noc\") && !b[\"default\"].hasClass(n, \"vc-toggle\")) {\n                      b[\"default\"].one(\".vcelm-node\", n).click();\n                      break;\n                    }\n                  } else b[\"default\"].one(\".vcelm-node\", t.activedElem).click();\n                }\n              }, {\n                name: \"Collapse\",\n                global: !1,\n                onClick: function onClick(e) {\n                  t.activedElem && (b[\"default\"].hasClass(t.activedElem, \"vc-toggle\") ? b[\"default\"].one(\".vcelm-node\", t.activedElem).click() : t.activedElem.parentNode && b[\"default\"].hasClass(t.activedElem.parentNode, \"vcelm-l\") && b[\"default\"].one(\".vcelm-node\", t.activedElem.parentNode).click());\n                }\n              }];\n            e(o);\n          }\n        }, {\n          key: \"onShow\",\n          value: function value() {\n            if (!this.isInited) {\n              this.isInited = !0, this.node = this.getNode(document.documentElement);\n              var e = this.renderView(this.node, b[\"default\"].one(\".vc-log\", this.$tabbox)),\n                t = b[\"default\"].one(\".vcelm-node\", e);\n              t && t.click();\n              var o = {\n                attributes: !0,\n                childList: !0,\n                characterData: !0,\n                subtree: !0\n              };\n              this.observer.observe(document.documentElement, o);\n            }\n          }\n        }, {\n          key: \"onRemove\",\n          value: function value() {\n            this.observer.disconnect();\n          }\n        }, {\n          key: \"onMutation\",\n          value: function value(e) {\n            switch (e.type) {\n              case \"childList\":\n                e.removedNodes.length > 0 && this.onChildRemove(e), e.addedNodes.length > 0 && this.onChildAdd(e);\n                break;\n              case \"attributes\":\n                this.onAttributesChange(e);\n                break;\n              case \"characterData\":\n                this.onCharacterDataChange(e);\n            }\n          }\n        }, {\n          key: \"onChildRemove\",\n          value: function value(e) {\n            var t = e.target,\n              o = t.__vconsole_node;\n            if (o) {\n              for (var n = 0; n < e.removedNodes.length; n++) {\n                var i = e.removedNodes[n],\n                  a = i.__vconsole_node;\n                a && a.view && a.view.parentNode.removeChild(a.view);\n              }\n              this.getNode(t);\n            }\n          }\n        }, {\n          key: \"onChildAdd\",\n          value: function value(e) {\n            var t = e.target,\n              o = t.__vconsole_node;\n            if (o) {\n              this.getNode(t), o.view && b[\"default\"].removeClass(o.view, \"vcelm-noc\");\n              for (var n = 0; n < e.addedNodes.length; n++) {\n                var i = e.addedNodes[n],\n                  a = i.__vconsole_node;\n                if (a) if (null !== e.nextSibling) {\n                  var r = e.nextSibling.__vconsole_node;\n                  r.view && this.renderView(a, r.view, \"insertBefore\");\n                } else o.view && (o.view.lastChild ? this.renderView(a, o.view.lastChild, \"insertBefore\") : this.renderView(a, o.view));\n              }\n            }\n          }\n        }, {\n          key: \"onAttributesChange\",\n          value: function value(e) {\n            var t = e.target.__vconsole_node;\n            t && (t = this.getNode(e.target), t.view && this.renderView(t, t.view, !0));\n          }\n        }, {\n          key: \"onCharacterDataChange\",\n          value: function value(e) {\n            var t = e.target.__vconsole_node;\n            t && (t = this.getNode(e.target), t.view && this.renderView(t, t.view, !0));\n          }\n        }, {\n          key: \"renderView\",\n          value: function value(e, t, o) {\n            var n = this,\n              i = new p[\"default\"](e).get();\n            switch (e.view = i, b[\"default\"].delegate(i, \"click\", \".vcelm-node\", function (t) {\n              t.stopPropagation();\n              var o = this.parentNode;\n              if (!b[\"default\"].hasClass(o, \"vcelm-noc\")) {\n                n.activedElem = o, b[\"default\"].hasClass(o, \"vc-toggle\") ? b[\"default\"].removeClass(o, \"vc-toggle\") : b[\"default\"].addClass(o, \"vc-toggle\");\n                for (var i = -1, a = 0; a < o.children.length; a++) {\n                  var r = o.children[a];\n                  b[\"default\"].hasClass(r, \"vcelm-l\") && (i++, r.children.length > 0 || (e.childNodes[i] ? n.renderView(e.childNodes[i], r, \"replace\") : r.style.display = \"none\"));\n                }\n              }\n            }), o) {\n              case \"replace\":\n                t.parentNode.replaceChild(i, t);\n                break;\n              case \"insertBefore\":\n                t.parentNode.insertBefore(i, t);\n                break;\n              default:\n                t.appendChild(i);\n            }\n            return i;\n          }\n        }, {\n          key: \"getNode\",\n          value: function value(e) {\n            if (!this._isIgnoredElement(e)) {\n              var t = e.__vconsole_node || {};\n              if (t.nodeType = e.nodeType, t.nodeName = e.nodeName, t.tagName = e.tagName || \"\", t.textContent = \"\", t.nodeType != e.TEXT_NODE && t.nodeType != e.DOCUMENT_TYPE_NODE || (t.textContent = e.textContent), t.id = e.id || \"\", t.className = e.className || \"\", t.attributes = [], e.hasAttributes && e.hasAttributes()) for (var o = 0; o < e.attributes.length; o++) {\n                t.attributes.push({\n                  name: e.attributes[o].name,\n                  value: e.attributes[o].value || \"\"\n                });\n              }\n              if (t.childNodes = [], e.childNodes.length > 0) for (var n = 0; n < e.childNodes.length; n++) {\n                var i = this.getNode(e.childNodes[n]);\n                i && t.childNodes.push(i);\n              }\n              return e.__vconsole_node = t, t;\n            }\n          }\n        }, {\n          key: \"_isIgnoredElement\",\n          value: function value(e) {\n            return e.nodeType == e.TEXT_NODE && \"\" == e.textContent.replace(/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$|\\n+/g, \"\");\n          }\n        }, {\n          key: \"_isInVConsole\",\n          value: function value(e) {\n            for (var t = e; void 0 != t;) {\n              if (\"__vconsole\" == t.id) return !0;\n              t = t.parentNode || void 0;\n            }\n            return !1;\n          }\n        }]), t;\n      }(d[\"default\"]);\n    t[\"default\"] = m, e.exports = t[\"default\"];\n  }, function (e, t, o) {\n    var n = o(32);\n    \"string\" == typeof n && (n = [[e.id, n, \"\"]]);\n    o(10)(n, {});\n    n.locals && (e.exports = n.locals);\n  }, function (e, t, o) {\n    t = e.exports = o(9)(), t.push([e.id, '.vcelm-node{color:#183691}.vcelm-k{color:#0086b3}.vcelm-v{color:#905}.vcelm-l{padding-left:8px;position:relative;word-wrap:break-word;line-height:1}.vcelm-l.vc-toggle>.vcelm-node{display:block}.vcelm-l .vcelm-node:active{background-color:rgba(0,0,0,.15)}.vcelm-l.vcelm-noc .vcelm-node:active{background-color:transparent}.vcelm-t{white-space:pre-wrap;word-wrap:break-word}.vcelm-l .vcelm-l{display:none}.vcelm-l.vc-toggle>.vcelm-l{margin-left:4px;display:block}.vcelm-l:before{content:\"\";display:block;position:absolute;top:6px;left:3px;width:0;height:0;border:3px solid transparent;border-left-color:#000}.vcelm-l.vc-toggle:before{display:block;top:6px;left:0;border-top-color:#000;border-left-color:transparent}.vcelm-l.vcelm-noc:before{display:none}', \"\"]);\n  }, function (e, t) {\n    e.exports = '<div>\\n  <div class=\"vc-log\"></div>\\n</div>';\n  }, function (e, t, o) {\n    \"use strict\";\n\n    function n(e) {\n      if (e && e.__esModule) return e;\n      var t = {};\n      if (null != e) for (var o in e) {\n        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);\n      }\n      return t[\"default\"] = e, t;\n    }\n    function i(e) {\n      return e && e.__esModule ? e : {\n        \"default\": e\n      };\n    }\n    function a(e, t) {\n      if (!(e instanceof t)) throw new TypeError(\"Cannot call a class as a function\");\n    }\n    function r(e) {\n      var t = [\"br\", \"hr\", \"img\", \"input\", \"link\", \"meta\"];\n      return e = e ? e.toLowerCase() : \"\", t.indexOf(e) > -1;\n    }\n    function l(e) {\n      return document.createTextNode(e);\n    }\n    function c(e) {\n      return e.replace(/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g, \"\");\n    }\n    Object.defineProperty(t, \"__esModule\", {\n      value: !0\n    });\n    var s = function () {\n        function e(e, t) {\n          for (var o = 0; o < t.length; o++) {\n            var n = t[o];\n            n.enumerable = n.enumerable || !1, n.configurable = !0, \"value\" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);\n          }\n        }\n        return function (t, o, n) {\n          return o && e(t.prototype, o), n && e(t, n), t;\n        };\n      }(),\n      d = o(35),\n      u = i(d),\n      v = o(36),\n      f = i(v),\n      p = o(4),\n      h = (n(p), o(5)),\n      g = i(h),\n      b = function () {\n        function e(t) {\n          a(this, e), this.node = t, this.view = this._create(this.node);\n        }\n        return s(e, [{\n          key: \"get\",\n          value: function value() {\n            return this.view;\n          }\n        }, {\n          key: \"_create\",\n          value: function value(e, t) {\n            var o = document.createElement(\"DIV\");\n            switch (g[\"default\"].addClass(o, \"vcelm-l\"), e.nodeType) {\n              case o.ELEMENT_NODE:\n                this._createElementNode(e, o);\n                break;\n              case o.TEXT_NODE:\n                this._createTextNode(e, o);\n                break;\n              case o.COMMENT_NODE:\n              case o.DOCUMENT_NODE:\n              case o.DOCUMENT_TYPE_NODE:\n              case o.DOCUMENT_FRAGMENT_NODE:\n            }\n            return o;\n          }\n        }, {\n          key: \"_createTextNode\",\n          value: function value(e, t) {\n            g[\"default\"].addClass(t, \"vcelm-t vcelm-noc\"), e.textContent && t.appendChild(l(c(e.textContent)));\n          }\n        }, {\n          key: \"_createElementNode\",\n          value: function value(e, t) {\n            var o = r(e.tagName),\n              n = o;\n            0 == e.childNodes.length && (n = !0);\n            var i = g[\"default\"].render(u[\"default\"], {\n                node: e\n              }),\n              a = g[\"default\"].render(f[\"default\"], {\n                node: e\n              });\n            if (n) g[\"default\"].addClass(t, \"vcelm-noc\"), t.appendChild(i), o || t.appendChild(a);else {\n              t.appendChild(i);\n              for (var l = 0; l < e.childNodes.length; l++) {\n                var c = document.createElement(\"DIV\");\n                g[\"default\"].addClass(c, \"vcelm-l\"), t.appendChild(c);\n              }\n              o || t.appendChild(a);\n            }\n          }\n        }]), e;\n      }();\n    t[\"default\"] = b, e.exports = t[\"default\"];\n  }, function (e, t) {\n    e.exports = '<span class=\"vcelm-node\">&lt;{{node.tagName.toLowerCase()}}{{if (node.className || node.attributes.length)}}\\n  <i class=\"vcelm-k\">\\n    {{for (var i = 0; i < node.attributes.length; i++)}}\\n      {{if (node.attributes[i].value !== \\'\\')}}\\n        {{node.attributes[i].name}}=\"<i class=\"vcelm-v\">{{node.attributes[i].value}}</i>\"{{else}}\\n        {{node.attributes[i].name}}{{/if}}{{/for}}</i>{{/if}}&gt;</span>';\n  }, function (e, t) {\n    e.exports = '<span class=\"vcelm-node\">&lt;/{{node.tagName.toLowerCase()}}&gt;</span>';\n  }, function (e, t, o) {\n    \"use strict\";\n\n    function n(e) {\n      if (e && e.__esModule) return e;\n      var t = {};\n      if (null != e) for (var o in e) {\n        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);\n      }\n      return t[\"default\"] = e, t;\n    }\n    function i(e) {\n      return e && e.__esModule ? e : {\n        \"default\": e\n      };\n    }\n    function a(e, t) {\n      if (!(e instanceof t)) throw new TypeError(\"Cannot call a class as a function\");\n    }\n    function r(e, t) {\n      if (!e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n      return !t || \"object\" != _typeof(t) && \"function\" != typeof t ? e : t;\n    }\n    function l(e, t) {\n      if (\"function\" != typeof t && null !== t) throw new TypeError(\"Super expression must either be null or a function, not \" + _typeof(t));\n      e.prototype = Object.create(t && t.prototype, {\n        constructor: {\n          value: e,\n          enumerable: !1,\n          writable: !0,\n          configurable: !0\n        }\n      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);\n    }\n    Object.defineProperty(t, \"__esModule\", {\n      value: !0\n    });\n    var c = function () {\n        function e(e, t) {\n          for (var o = 0; o < t.length; o++) {\n            var n = t[o];\n            n.enumerable = n.enumerable || !1, n.configurable = !0, \"value\" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);\n          }\n        }\n        return function (t, o, n) {\n          return o && e(t.prototype, o), n && e(t, n), t;\n        };\n      }(),\n      s = o(18),\n      d = i(s),\n      u = o(38),\n      v = i(u),\n      f = o(39),\n      p = i(f),\n      h = o(4),\n      g = n(h),\n      b = o(5),\n      m = i(b),\n      y = function (e) {\n        function t() {\n          var e;\n          a(this, t);\n          for (var o = arguments.length, n = Array(o), i = 0; o > i; i++) {\n            n[i] = arguments[i];\n          }\n          var l = r(this, (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(n)));\n          return l.$tabbox = m[\"default\"].render(v[\"default\"], {}), l.currentType = \"\", l.typeNameMap = {\n            cookies: \"Cookies\",\n            localstorage: \"LocalStorage\"\n          }, l;\n        }\n        return l(t, e), c(t, [{\n          key: \"onRenderTab\",\n          value: function value(e) {\n            e(this.$tabbox);\n          }\n        }, {\n          key: \"onAddTopBar\",\n          value: function value(e) {\n            for (var t = this, o = [\"Cookies\", \"LocalStorage\"], n = [], i = 0; i < o.length; i++) {\n              n.push({\n                name: o[i],\n                data: {\n                  type: o[i].toLowerCase()\n                },\n                className: \"\",\n                onClick: function onClick() {\n                  return m[\"default\"].hasClass(this, \"vc-actived\") ? !1 : (t.currentType = this.dataset.type, void t.renderStorage());\n                }\n              });\n            }\n            n[0].className = \"vc-actived\", e(n);\n          }\n        }, {\n          key: \"onAddTool\",\n          value: function value(e) {\n            var t = this,\n              o = [{\n                name: \"Refresh\",\n                global: !1,\n                onClick: function onClick(e) {\n                  t.renderStorage();\n                }\n              }, {\n                name: \"Clear\",\n                global: !1,\n                onClick: function onClick(e) {\n                  t.clearLog();\n                }\n              }];\n            e(o);\n          }\n        }, {\n          key: \"onReady\",\n          value: function value() {}\n        }, {\n          key: \"onShow\",\n          value: function value() {\n            \"\" == this.currentType && (this.currentType = \"cookies\", this.renderStorage());\n          }\n        }, {\n          key: \"clearLog\",\n          value: function value() {\n            if (this.currentType && window.confirm) {\n              var e = window.confirm(\"Remove all \" + this.typeNameMap[this.currentType] + \"?\");\n              if (!e) return !1;\n            }\n            switch (this.currentType) {\n              case \"cookies\":\n                this.clearCookieList();\n                break;\n              case \"localstorage\":\n                this.clearLocalStorageList();\n                break;\n              default:\n                return !1;\n            }\n            this.renderStorage();\n          }\n        }, {\n          key: \"renderStorage\",\n          value: function value() {\n            var e = [];\n            switch (this.currentType) {\n              case \"cookies\":\n                e = this.getCookieList();\n                break;\n              case \"localstorage\":\n                e = this.getLocalStorageList();\n                break;\n              default:\n                return !1;\n            }\n            var t = m[\"default\"].one(\".vc-log\", this.$tabbox);\n            if (0 == e.length) t.innerHTML = \"\";else {\n              for (var o = 0; o < e.length; o++) {\n                e[o].name = g.htmlEncode(e[o].name), e[o].value = g.htmlEncode(e[o].value);\n              }\n              t.innerHTML = m[\"default\"].render(p[\"default\"], {\n                list: e\n              }, !0);\n            }\n          }\n        }, {\n          key: \"getCookieList\",\n          value: function value() {\n            if (!document.cookie || !navigator.cookieEnabled) return [];\n            for (var e = [], t = document.cookie.split(\";\"), o = 0; o < t.length; o++) {\n              var n = t[o].split(\"=\"),\n                i = n.shift().replace(/^ /, \"\"),\n                a = n.join(\"=\");\n              e.push({\n                name: decodeURIComponent(i),\n                value: decodeURIComponent(a)\n              });\n            }\n            return e;\n          }\n        }, {\n          key: \"getLocalStorageList\",\n          value: function value() {\n            if (!window.localStorage) return [];\n            try {\n              for (var e = [], t = 0; t < localStorage.length; t++) {\n                var o = localStorage.key(t),\n                  n = localStorage.getItem(o);\n                e.push({\n                  name: o,\n                  value: n\n                });\n              }\n              return e;\n            } catch (i) {\n              return [];\n            }\n          }\n        }, {\n          key: \"clearCookieList\",\n          value: function value() {\n            if (document.cookie && navigator.cookieEnabled) {\n              for (var e = this.getCookieList(), t = 0; t < e.length; t++) {\n                document.cookie = e[t].name + \"=;expires=Thu, 01 Jan 1970 00:00:00 GMT\";\n              }\n              this.renderStorage();\n            }\n          }\n        }, {\n          key: \"clearLocalStorageList\",\n          value: function value() {\n            if (window.localStorage) try {\n              localStorage.clear(), this.renderStorage();\n            } catch (e) {\n              alert(\"localStorage.clear() fail.\");\n            }\n          }\n        }]), t;\n      }(d[\"default\"]);\n    t[\"default\"] = y, e.exports = t[\"default\"];\n  }, function (e, t) {\n    e.exports = '<div class=\"vc-table\">\\n  <div class=\"vc-log\"></div>\\n</div>';\n  }, function (e, t) {\n    e.exports = '<div>\\n  <dl class=\"vc-table-row\">\\n    <dd class=\"vc-table-col\">Name</dd>\\n    <dd class=\"vc-table-col vc-table-col-2\">Value</dd>\\n  </dl>\\n  {{for (var i = 0; i < list.length; i++)}}\\n  <dl class=\"vc-table-row\">\\n    <dd class=\"vc-table-col\">{{list[i].name}}</dd>\\n    <dd class=\"vc-table-col vc-table-col-2\">{{list[i].value}}</dd>\\n  </dl>\\n  {{/for}}\\n</div>';\n  }]);\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"], __webpack_require__(/*! ./../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/module.js */ 44)(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL3Zjb25zb2xlL3Zjb25zb2xlLm1pbi5qcyJdLCJuYW1lcyI6WyJlIiwidCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJuIiwibyIsImkiLCJpZCIsImxvYWRlZCIsImNhbGwiLCJtIiwiYyIsInAiLCJfX2VzTW9kdWxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImEiLCJyIiwibCIsIlZDb25zb2xlUGx1Z2luIiwiU3ltYm9sIiwid2luZG93IiwiaXRlcmF0b3IiLCJBcnJheSIsInByb3RvdHlwZSIsIm5leHQiLCJkb25lIiwibGVuZ3RoIiwiaGFzT3duUHJvcGVydHkiLCJUeXBlRXJyb3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJzIiwiZCIsInUiLCJ2IiwiZiIsImgiLCJnIiwiYiIsInkiLCJfIiwidyIsIngiLCJrIiwiQyIsIlQiLCJPIiwiRSIsIlMiLCJMIiwiaiIsIk4iLCJQIiwiTSIsIkEiLCJvbmUiLCJ2ZXJzaW9uIiwiJGRvbSIsImlzSW5pdGVkIiwib3B0aW9uIiwiZGVmYXVsdFBsdWdpbnMiLCJhY3RpdmVkVGFiIiwidGFiTGlzdCIsInBsdWdpbkxpc3QiLCJzd2l0Y2hQb3MiLCJzdGFydFgiLCJzdGFydFkiLCJlbmRYIiwiZW5kWSIsInRvb2wiLCIkIiwiaXNPYmplY3QiLCJfYWRkQnVpbHRJblBsdWdpbnMiLCJfcmVuZGVyIiwiX21vY2tUYXAiLCJfYmluZEV2ZW50IiwiX2F1dG9SdW4iLCJkb2N1bWVudCIsInJlYWR5U3RhdGUiLCJiaW5kIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImFkZFBsdWdpbiIsInN5c3RlbSIsInByb3RvIiwibmFtZSIsIm5ldHdvcmsiLCJlbGVtZW50Iiwic3RvcmFnZSIsImlzQXJyYXkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZG9jdW1lbnRFbGVtZW50IiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiY2hpbGRyZW4iLCJnZXRTdG9yYWdlIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsInJpZ2h0IiwiYm90dG9tIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwibWF0Y2giLCJwYXJzZUZsb2F0Iiwic3BsaXQiLCJmb250U2l6ZSIsImRpc3BsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwidGFyZ2V0VG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJ0aW1lU3RhbXAiLCJ0YXJnZXQiLCJub2RlVHlwZSIsIk5vZGUiLCJURVhUX05PREUiLCJwYXJlbnROb2RlIiwiY2hhbmdlZFRvdWNoZXMiLCJNYXRoIiwiYWJzIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwidHlwZSIsImRpc2FibGVkIiwicmVhZE9ubHkiLCJmb2N1cyIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsInNjcmVlblgiLCJzY3JlZW5ZIiwiY2xpZW50WCIsImNsaWVudFkiLCJmb3J3YXJkZWRUb3VjaEV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInRvdWNoZXMiLCJzZXRTdG9yYWdlIiwic2hvdyIsImhpZGUiLCJkZWxlZ2F0ZSIsImRhdGFzZXQiLCJ0YWIiLCJzaG93VGFiIiwiaGFzQ2xhc3MiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJfaW5pdFBsdWdpbiIsInRyaWdnZXJFdmVudCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJpc0Z1bmN0aW9uIiwiYXBwbHkiLCJ2Q29uc29sZSIsInRyaWdnZXIiLCJwdXNoIiwicmVuZGVyIiwiaXNTdHJpbmciLCJhcHBlbmRUbyIsImlzRWxlbWVudCIsImNsYXNzTmFtZSIsInBsdWdpbklEIiwiZGF0YSIsIm9uQ2xpY2siLCJyZW1vdmVDbGFzcyIsImFsbCIsImFkZENsYXNzIiwiZ2xvYmFsIiwiaW5zZXJ0QmVmb3JlIiwiaXNSZWFkeSIsInJlbW92ZUNoaWxkIiwiaW5kZXhPZiIsInNwbGljZSIsIl90cmlnZ2VyUGx1Z2luc0V2ZW50IiwiX3RyaWdnZXJQbHVnaW5FdmVudCIsImtleXMiLCJyZW1vdmVQbHVnaW4iLCJkZXNjcmlwdGlvbiIsImhvbWVwYWdlIiwibWFpbiIsInNjcmlwdHMiLCJ0ZXN0IiwiZGlzdCIsImtleXdvcmRzIiwicmVwb3NpdG9yeSIsInVybCIsImRlcGVuZGVuY2llcyIsImRldkRlcGVuZGVuY2llcyIsImNoYWkiLCJqc2RvbSIsImxlc3MiLCJtb2NoYSIsIndlYnBhY2siLCJhdXRob3IiLCJsaWNlbnNlIiwiRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInRpbWUiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwibWlsbGlzZWNvbmQiLCJ0b1N0cmluZyIsIkhUTUxFbGVtZW50Iiwibm9kZU5hbWUiLCJjb25zdHJ1Y3RvciIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJhcmd1bWVudHMiLCJKU09OIiwic3RyaW5naWZ5Iiwic29ydCIsInJlcGxhY2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsImlzTnVtYmVyIiwiaXNCb29sZWFuIiwiaXNVbmRlZmluZWQiLCJpc051bGwiLCJpc1N5bWJvbCIsImlzV2luZG93IiwiaXNQbGFpbk9iamVjdCIsImh0bWxFbmNvZGUiLCJKU09OU3RyaW5naWZ5IiwiZ2V0T2JqQWxsS2V5cyIsImdldE9iak5hbWUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiam9pbiIsInRyaW0iLCJfX21pdG9fZGF0YSIsIl9fbWl0b19jb2RlIiwiX19taXRvX3Jlc3VsdCIsImV4ZWMiLCJpbmRleCIsInN1YnN0ciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwibG9jYWxzIiwicmVmcyIsInBhcnRzIiwiY3NzIiwibWVkaWEiLCJzb3VyY2VNYXAiLCJpbnNlcnRBdCIsIm5leHRTaWJsaW5nIiwiZmlyc3RDaGlsZCIsIkVycm9yIiwicmVsIiwic2luZ2xldG9uIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiQmxvYiIsImJ0b2EiLCJocmVmIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjaGlsZE5vZGVzIiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJoZWFkIiwiZmlsdGVyIiwiQm9vbGVhbiIsIlJlZmVyZW5jZUVycm9yIiwiY3JlYXRlIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJGdW5jdGlvbiIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldFByb3RvdHlwZU9mIiwiZ2V0IiwiY29uY2F0IiwidHBsVGFiYm94Iiwid2luZG93T25FcnJvciIsIiR0YWJib3giLCJldmFsQ29tbWFuZCIsIm9uZXJyb3IiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInN0YWNrIiwicHJpbnRMb2ciLCJsb2dUeXBlIiwibG9ncyIsIm5vT3JpZ2luIiwibm9NZXRhIiwiX192Q29uc29sZV9jbWRfcmVzdWx0IiwiX192Q29uc29sZV9jbWRfZXJyb3IiLCJnZXRGb2xkZWRMaW5lIiwiYWxsb3dVbmZvcm1hdHRlZExvZyIsImlzU2hvdyIsImNvbnNvbGUiLCJsb2dMaXN0IiwiaXNJbkJvdHRvbSIsIm1heExvZ051bWJlciIsImxvZ051bWJlciIsIm1vY2tDb25zb2xlIiwidXBkYXRlTWF4TG9nTnVtYmVyIiwic2hvd0xvZ1R5cGUiLCJjbGVhckxvZyIsImxvZyIsImluZm8iLCJ3YXJuIiwiZGVidWciLCJlcnJvciIsInRpbWVFbmQiLCJjbGVhciIsImF1dG9TY3JvbGxUb0JvdHRvbSIsImxpbWl0TWF4TG9ncyIsIm1heCIsImRpc2FibGVMb2dTY3JvbGxpbmciLCJzY3JvbGxUb0JvdHRvbSIsIm1hcCIsIm5vdyIsInByaW50T3JpZ2luTG9nIiwiZGF0ZSIsInNoaWZ0IiwibWV0YSIsImluc2VydEFkamFjZW50SFRNTCIsIm91dGVyIiwibGluZVR5cGUiLCJzdG9wUHJvcGFnYXRpb24iLCJrZXlUeXBlIiwidmFsdWVUeXBlIiwiZXZlbnRMaXN0IiwiX2lkIiwic2V0IiwiX25hbWUiLCJfdkNvbnNvbGUiLCJwcmludFN5c3RlbUluZm8iLCJwcm90b2NvbCIsInBlcmZvcm1hbmNlIiwibXNQZXJmb3JtYW5jZSIsIndlYmtpdFBlcmZvcm1hbmNlIiwidGltaW5nIiwibmF2aWdhdGlvblN0YXJ0IiwiZG9tYWluTG9va3VwU3RhcnQiLCJkb21haW5Mb29rdXBFbmQiLCJjb25uZWN0RW5kIiwiY29ubmVjdFN0YXJ0Iiwic2VjdXJlQ29ubmVjdGlvblN0YXJ0IiwicmVzcG9uc2VTdGFydCIsInJlcXVlc3RTdGFydCIsInJlc3BvbnNlRW5kIiwiZG9tQ29tcGxldGUiLCJkb21Mb2FkaW5nIiwiZG9tQ29udGVudExvYWRlZEV2ZW50U3RhcnQiLCJsb2FkRXZlbnRFbmQiLCJsb2FkRXZlbnRTdGFydCIsIiRoZWFkZXIiLCJyZXFMaXN0IiwiZG9tTGlzdCIsIl9vcGVuIiwiX3NlbmQiLCJtb2NrQWpheCIsInJlbmRlckhlYWRlciIsInJlcWlkIiwidXBkYXRlUmVxdWVzdCIsImFjdGl2ZWQiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwicmVtb3ZlIiwiY291bnQiLCJyZXBsYWNlQ2hpbGQiLCJzdGF0dXMiLCJtZXRob2QiLCJjb3N0VGltZSIsImhlYWRlciIsImdldERhdGEiLCJwb3N0RGF0YSIsInJlc3BvbnNlIiwicmVzcG9uc2VUeXBlIiwicGFyc2UiLCJnZXRVbmlxdWVJRCIsIl9yZXF1ZXN0SUQiLCJfbWV0aG9kIiwiX3VybCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInN0YXJ0VGltZSIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsImNsZWFySW50ZXJ2YWwiLCJlbmRUaW1lIiwiX25vVkNvbnNvbGUiLCJzZXRJbnRlcnZhbCIsInJhbmRvbSIsIm5vZGUiLCJub2RlcyIsImFjdGl2ZWRFbGVtIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYktpdE11dGF0aW9uT2JzZXJ2ZXIiLCJNb3pNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJfaXNJblZDb25zb2xlIiwib25NdXRhdGlvbiIsImNsaWNrIiwiZ2V0Tm9kZSIsInJlbmRlclZpZXciLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YSIsInN1YnRyZWUiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsInJlbW92ZWROb2RlcyIsIm9uQ2hpbGRSZW1vdmUiLCJhZGRlZE5vZGVzIiwib25DaGlsZEFkZCIsIm9uQXR0cmlidXRlc0NoYW5nZSIsIm9uQ2hhcmFjdGVyRGF0YUNoYW5nZSIsIl9fdmNvbnNvbGVfbm9kZSIsInZpZXciLCJsYXN0Q2hpbGQiLCJfaXNJZ25vcmVkRWxlbWVudCIsInRleHRDb250ZW50IiwiRE9DVU1FTlRfVFlQRV9OT0RFIiwiaGFzQXR0cmlidXRlcyIsIl9jcmVhdGUiLCJFTEVNRU5UX05PREUiLCJfY3JlYXRlRWxlbWVudE5vZGUiLCJfY3JlYXRlVGV4dE5vZGUiLCJDT01NRU5UX05PREUiLCJET0NVTUVOVF9OT0RFIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsImN1cnJlbnRUeXBlIiwidHlwZU5hbWVNYXAiLCJjb29raWVzIiwibG9jYWxzdG9yYWdlIiwicmVuZGVyU3RvcmFnZSIsImNvbmZpcm0iLCJjbGVhckNvb2tpZUxpc3QiLCJjbGVhckxvY2FsU3RvcmFnZUxpc3QiLCJnZXRDb29raWVMaXN0IiwiZ2V0TG9jYWxTdG9yYWdlTGlzdCIsImxpc3QiLCJjb29raWUiLCJjb29raWVFbmFibGVkIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFVBQVNB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LFlBQVksQ0FBQyxFQUFDdkIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDdUksUUFBUSxDQUFDdkksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDcUIsR0FBRyxDQUFDLFlBQVksR0FBQzVELENBQUMsQ0FBQyxFQUFDLFlBQVksQ0FBQyxFQUFDdUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDcUksV0FBVyxDQUFDckksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDc0ksR0FBRyxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMvRyxJQUFJLENBQUMsRUFBQyxZQUFZLENBQUMsRUFBQ3ZCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQ3VJLFFBQVEsQ0FBQzdLLENBQUMsRUFBQyxZQUFZLENBQUM7Y0FBQyxJQUFJSyxDQUFDLEdBQUNpQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNzSSxHQUFHLENBQUMsYUFBYSxHQUFDN0ssQ0FBQyxFQUFDLElBQUksQ0FBQzhELElBQUksQ0FBQztjQUFDdkIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDcUksV0FBVyxDQUFDckksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDc0ksR0FBRyxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMvRyxJQUFJLENBQUMsRUFBQyxXQUFXLENBQUMsRUFBQ3ZCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQ3VJLFFBQVEsQ0FBQ3hLLENBQUMsRUFBQyxXQUFXLENBQUMsRUFBQ0EsQ0FBQyxDQUFDdUIsTUFBTSxHQUFDLENBQUMsR0FBQ1UsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDdUksUUFBUSxDQUFDdkksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDcUIsR0FBRyxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUNFLElBQUksQ0FBQyxFQUFDLGVBQWUsQ0FBQyxHQUFDdkIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDcUksV0FBVyxDQUFDckksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDcUIsR0FBRyxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUNFLElBQUksQ0FB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YyxLQUFLLENBQUMsNEJBQTRCLENBQUM7WUFBQTtVQUFDO1FBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ3pjLENBQUM7TUFBQSxDQUFDLENBQUNvQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFBQ3BDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBQzJDLENBQUMsRUFBQzVDLENBQUMsQ0FBQ0UsT0FBTyxHQUFDRCxDQUFDLENBQUMsU0FBUyxDQUFDO0VBQUEsQ0FBQyxFQUFDLFVBQVNELENBQUMsRUFBQ0MsQ0FBQyxFQUFDO0lBQUNELENBQUMsQ0FBQ0UsT0FBTyxHQUFDLDhEQUE4RDtFQUFBLENBQUMsRUFBQyxVQUFTRixDQUFDLEVBQUNDLENBQUMsRUFBQztJQUFDRCxDQUFDLENBQUNFLE9BQU8sR0FBQyw0V0FBNFc7RUFBQSxDQUFDLENBQUMsQ0FBQztBQUFBLENBQUMsQ0FBQyxDIiwiZmlsZSI6IjQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqIHZDb25zb2xlIHYzLjIuMCAoaHR0cHM6Ly9naXRodWIuY29tL1RlbmNlbnQvdkNvbnNvbGUpXHJcbiAqIFxyXG4gKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyB2Q29uc29sZSBhdmFpbGFibGUuXHJcbiAqIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5WQ29uc29sZT10KCk6ZS5WQ29uc29sZT10KCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChuKXtpZihvW25dKXJldHVybiBvW25dLmV4cG9ydHM7dmFyIGk9b1tuXT17ZXhwb3J0czp7fSxpZDpuLGxvYWRlZDohMX07cmV0dXJuIGVbbl0uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsdCksaS5sb2FkZWQ9ITAsaS5leHBvcnRzfXZhciBvPXt9O3JldHVybiB0Lm09ZSx0LmM9byx0LnA9XCJcIix0KDApfShbZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKDEpO3ZhciBpPW8oMiksYT1uKGkpLHI9bygxOCksbD1uKHIpO2FbXCJkZWZhdWx0XCJdLlZDb25zb2xlUGx1Z2luPWxbXCJkZWZhdWx0XCJdLHRbXCJkZWZhdWx0XCJdPWFbXCJkZWZhdWx0XCJdLGUuZXhwb3J0cz10W1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgU3ltYm9sKXt3aW5kb3cuU3ltYm9sPWZ1bmN0aW9uKCl7fTt2YXIgbz1cIl9fc3ltYm9sX2l0ZXJhdG9yX2tleVwiO3dpbmRvdy5TeW1ib2wuaXRlcmF0b3I9byxBcnJheS5wcm90b3R5cGVbb109ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9MDtyZXR1cm57bmV4dDpmdW5jdGlvbigpe3JldHVybntkb25lOmUubGVuZ3RoPT09dCx2YWx1ZTplLmxlbmd0aD09PXQ/dm9pZCAwOmVbdCsrXX19fX19fSxmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtpZihlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHQ9e307aWYobnVsbCE9ZSlmb3IodmFyIG8gaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxvKSYmKHRbb109ZVtvXSk7cmV0dXJuIHRbXCJkZWZhdWx0XCJdPWUsdH1mdW5jdGlvbiBpKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19ZnVuY3Rpb24gYShlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciBuPXRbb107bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX1yZXR1cm4gZnVuY3Rpb24odCxvLG4pe3JldHVybiBvJiZlKHQucHJvdG90eXBlLG8pLG4mJmUodCxuKSx0fX0oKSxsPW8oMyksYz1pKGwpLHM9byg0KSxkPW4ocyksdT1vKDUpLHY9aSh1KTtvKDcpO3ZhciBmPW8oMTEpLHA9aShmKSxoPW8oMTIpLGc9aShoKSxiPW8oMTMpLG09aShiKSx5PW8oMTQpLF89aSh5KSx3PW8oMTUpLHg9aSh3KSxrPW8oMTYpLEM9aShrKSxUPW8oMjQpLE89aShUKSxFPW8oMjYpLFM9aShFKSxMPW8oMzApLGo9aShMKSxOPW8oMzcpLFA9aShOKSxNPVwiI19fdmNvbnNvbGVcIixBPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXtpZihhKHRoaXMsZSksdltcImRlZmF1bHRcIl0ub25lKE0pKXJldHVybiB2b2lkIGNvbnNvbGUuZGVidWcoXCJ2Q29uc29sZSBpcyBhbHJlYWR5IGV4aXN0cy5cIik7dmFyIG89dGhpcztpZih0aGlzLnZlcnNpb249Y1tcImRlZmF1bHRcIl0udmVyc2lvbix0aGlzLiRkb209bnVsbCx0aGlzLmlzSW5pdGVkPSExLHRoaXMub3B0aW9uPXtkZWZhdWx0UGx1Z2luczpbXCJzeXN0ZW1cIixcIm5ldHdvcmtcIixcImVsZW1lbnRcIixcInN0b3JhZ2VcIl19LHRoaXMuYWN0aXZlZFRhYj1cIlwiLHRoaXMudGFiTGlzdD1bXSx0aGlzLnBsdWdpbkxpc3Q9e30sdGhpcy5zd2l0Y2hQb3M9e3g6MTAseToxMCxzdGFydFg6MCxzdGFydFk6MCxlbmRYOjAsZW5kWTowfSx0aGlzLnRvb2w9ZCx0aGlzLiQ9dltcImRlZmF1bHRcIl0sZC5pc09iamVjdCh0KSlmb3IodmFyIG4gaW4gdCl0aGlzLm9wdGlvbltuXT10W25dO3RoaXMuX2FkZEJ1aWx0SW5QbHVnaW5zKCk7dmFyIGk9ZnVuY3Rpb24oKXtvLmlzSW5pdGVkfHwoby5fcmVuZGVyKCksby5fbW9ja1RhcCgpLG8uX2JpbmRFdmVudCgpLG8uX2F1dG9SdW4oKSl9O3ZvaWQgMCE9PWRvY3VtZW50P1wiY29tcGxldGVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZT9pKCk6dltcImRlZmF1bHRcIl0uYmluZCh3aW5kb3csXCJsb2FkXCIsaSk6IWZ1bmN0aW9uKCl7dmFyIGU9dm9pZCAwLHQ9ZnVuY3Rpb24gbygpe2RvY3VtZW50JiZcImNvbXBsZXRlXCI9PWRvY3VtZW50LnJlYWR5U3RhdGU/KGUmJmNsZWFyVGltZW91dChlKSxpKCkpOmU9c2V0VGltZW91dChvLDEpfTtlPXNldFRpbWVvdXQodCwxKX0oKX1yZXR1cm4gcihlLFt7a2V5OlwiX2FkZEJ1aWx0SW5QbHVnaW5zXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmFkZFBsdWdpbihuZXcgQ1tcImRlZmF1bHRcIl0oXCJkZWZhdWx0XCIsXCJMb2dcIikpO3ZhciBlPXRoaXMub3B0aW9uLmRlZmF1bHRQbHVnaW5zLHQ9e3N5c3RlbTp7cHJvdG86T1tcImRlZmF1bHRcIl0sbmFtZTpcIlN5c3RlbVwifSxuZXR3b3JrOntwcm90bzpTW1wiZGVmYXVsdFwiXSxuYW1lOlwiTmV0d29ya1wifSxlbGVtZW50Ontwcm90bzpqW1wiZGVmYXVsdFwiXSxuYW1lOlwiRWxlbWVudFwifSxzdG9yYWdlOntwcm90bzpQW1wiZGVmYXVsdFwiXSxuYW1lOlwiU3RvcmFnZVwifX07aWYoZSYmZC5pc0FycmF5KGUpKWZvcih2YXIgbz0wO288ZS5sZW5ndGg7bysrKXt2YXIgbj10W2Vbb11dO24/dGhpcy5hZGRQbHVnaW4obmV3IG4ucHJvdG8oZVtvXSxuLm5hbWUpKTpjb25zb2xlLmRlYnVnKFwiVW5yZWNvZ25pemVkIGRlZmF1bHQgcGx1Z2luIElEOlwiLGVbb10pfX19LHtrZXk6XCJfcmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXtpZighdltcImRlZmF1bHRcIl0ub25lKE0pKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuaW5uZXJIVE1MPXBbXCJkZWZhdWx0XCJdLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIixlLmNoaWxkcmVuWzBdKX10aGlzLiRkb209dltcImRlZmF1bHRcIl0ub25lKE0pO3ZhciB0PXZbXCJkZWZhdWx0XCJdLm9uZShcIi52Yy1zd2l0Y2hcIix0aGlzLiRkb20pLG89MSpkLmdldFN0b3JhZ2UoXCJzd2l0Y2hfeFwiKSxuPTEqZC5nZXRTdG9yYWdlKFwic3dpdGNoX3lcIik7KG98fG4pJiYobyt0Lm9mZnNldFdpZHRoPmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aCYmKG89ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoLXQub2Zmc2V0V2lkdGgpLG4rdC5vZmZzZXRIZWlnaHQ+ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCYmKG49ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodC10Lm9mZnNldEhlaWdodCksMD5vJiYobz0wKSwwPm4mJihuPTApLHRoaXMuc3dpdGNoUG9zLng9byx0aGlzLnN3aXRjaFBvcy55PW4sdltcImRlZmF1bHRcIl0ub25lKFwiLnZjLXN3aXRjaFwiKS5zdHlsZS5yaWdodD1vK1wicHhcIix2W1wiZGVmYXVsdFwiXS5vbmUoXCIudmMtc3dpdGNoXCIpLnN0eWxlLmJvdHRvbT1uK1wicHhcIik7dmFyIGk9d2luZG93LmRldmljZVBpeGVsUmF0aW98fDEsYT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInZpZXdwb3J0XCJdJyk7aWYoYSYmYS5jb250ZW50KXt2YXIgcj1hLmNvbnRlbnQubWF0Y2goL2luaXRpYWxcXC1zY2FsZVxcPVxcZCsoXFwuXFxkKyk/LyksbD1yP3BhcnNlRmxvYXQoclswXS5zcGxpdChcIj1cIilbMV0pOjE7MT5sJiYodGhpcy4kZG9tLnN0eWxlLmZvbnRTaXplPTEzKmkrXCJweFwiKX12W1wiZGVmYXVsdFwiXS5vbmUoXCIudmMtbWFza1wiLHRoaXMuJGRvbSkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIn19LHtrZXk6XCJfbW9ja1RhcFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9NzAwLHQ9MTAsbz12b2lkIDAsbj12b2lkIDAsaT12b2lkIDAsYT0hMSxyPW51bGw7dGhpcy4kZG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsZnVuY3Rpb24oZSl7aWYodm9pZCAwPT09byl7dmFyIHQ9ZS50YXJnZXRUb3VjaGVzWzBdO249dC5wYWdlWCxpPXQucGFnZVksbz1lLnRpbWVTdGFtcCxyPWUudGFyZ2V0Lm5vZGVUeXBlPT09Tm9kZS5URVhUX05PREU/ZS50YXJnZXQucGFyZW50Tm9kZTplLnRhcmdldH19LCExKSx0aGlzLiRkb20uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGZ1bmN0aW9uKGUpe3ZhciBvPWUuY2hhbmdlZFRvdWNoZXNbMF07KE1hdGguYWJzKG8ucGFnZVgtbik+dHx8TWF0aC5hYnMoby5wYWdlWS1pKT50KSYmKGE9ITApfSksdGhpcy4kZG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLGZ1bmN0aW9uKHQpe2lmKGE9PT0hMSYmdC50aW1lU3RhbXAtbzxlJiZudWxsIT1yKXt2YXIgbj1yLnRhZ05hbWUudG9Mb3dlckNhc2UoKSxpPSExO3N3aXRjaChuKXtjYXNlXCJ0ZXh0YXJlYVwiOmk9ITA7YnJlYWs7Y2FzZVwiaW5wdXRcIjpzd2l0Y2goci50eXBlKXtjYXNlXCJidXR0b25cIjpjYXNlXCJjaGVja2JveFwiOmNhc2VcImZpbGVcIjpjYXNlXCJpbWFnZVwiOmNhc2VcInJhZGlvXCI6Y2FzZVwic3VibWl0XCI6aT0hMTticmVhaztkZWZhdWx0Omk9IXIuZGlzYWJsZWQmJiFyLnJlYWRPbmx5fX1pP3IuZm9jdXMoKTp0LnByZXZlbnREZWZhdWx0KCk7dmFyIGw9dC5jaGFuZ2VkVG91Y2hlc1swXSxjPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7Yy5pbml0TW91c2VFdmVudChcImNsaWNrXCIsITAsITAsd2luZG93LDEsbC5zY3JlZW5YLGwuc2NyZWVuWSxsLmNsaWVudFgsbC5jbGllbnRZLCExLCExLCExLCExLDAsbnVsbCksYy5mb3J3YXJkZWRUb3VjaEV2ZW50PSEwLGMuaW5pdEV2ZW50KFwiY2xpY2tcIiwhMCwhMCksci5kaXNwYXRjaEV2ZW50KGMpfW89dm9pZCAwLGE9ITEscj1udWxsfSwhMSl9fSx7a2V5OlwiX2JpbmRFdmVudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PXZbXCJkZWZhdWx0XCJdLm9uZShcIi52Yy1zd2l0Y2hcIixlLiRkb20pO3ZbXCJkZWZhdWx0XCJdLmJpbmQodCxcInRvdWNoc3RhcnRcIixmdW5jdGlvbih0KXtlLnN3aXRjaFBvcy5zdGFydFg9dC50b3VjaGVzWzBdLnBhZ2VYLGUuc3dpdGNoUG9zLnN0YXJ0WT10LnRvdWNoZXNbMF0ucGFnZVl9KSx2W1wiZGVmYXVsdFwiXS5iaW5kKHQsXCJ0b3VjaGVuZFwiLGZ1bmN0aW9uKHQpe2Uuc3dpdGNoUG9zLng9ZS5zd2l0Y2hQb3MuZW5kWCxlLnN3aXRjaFBvcy55PWUuc3dpdGNoUG9zLmVuZFksZS5zd2l0Y2hQb3Muc3RhcnRYPTAsZS5zd2l0Y2hQb3Muc3RhcnRZPTAsZS5zd2l0Y2hQb3MuZW5kWD0wLGUuc3dpdGNoUG9zLmVuZFk9MCxkLnNldFN0b3JhZ2UoXCJzd2l0Y2hfeFwiLGUuc3dpdGNoUG9zLngpLGQuc2V0U3RvcmFnZShcInN3aXRjaF95XCIsZS5zd2l0Y2hQb3MueSl9KSx2W1wiZGVmYXVsdFwiXS5iaW5kKHQsXCJ0b3VjaG1vdmVcIixmdW5jdGlvbihvKXtpZihvLnRvdWNoZXMubGVuZ3RoPjApe3ZhciBuPW8udG91Y2hlc1swXS5wYWdlWC1lLnN3aXRjaFBvcy5zdGFydFgsaT1vLnRvdWNoZXNbMF0ucGFnZVktZS5zd2l0Y2hQb3Muc3RhcnRZLGE9ZS5zd2l0Y2hQb3MueC1uLHI9ZS5zd2l0Y2hQb3MueS1pO2ErdC5vZmZzZXRXaWR0aD5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgmJihhPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aC10Lm9mZnNldFdpZHRoKSxyK3Qub2Zmc2V0SGVpZ2h0PmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQmJihyPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQtdC5vZmZzZXRIZWlnaHQpLDA+YSYmKGE9MCksMD5yJiYocj0wKSx0LnN0eWxlLnJpZ2h0PWErXCJweFwiLHQuc3R5bGUuYm90dG9tPXIrXCJweFwiLGUuc3dpdGNoUG9zLmVuZFg9YSxlLnN3aXRjaFBvcy5lbmRZPXIsby5wcmV2ZW50RGVmYXVsdCgpfX0pLHZbXCJkZWZhdWx0XCJdLmJpbmQodltcImRlZmF1bHRcIl0ub25lKFwiLnZjLXN3aXRjaFwiLGUuJGRvbSksXCJjbGlja1wiLGZ1bmN0aW9uKCl7ZS5zaG93KCl9KSx2W1wiZGVmYXVsdFwiXS5iaW5kKHZbXCJkZWZhdWx0XCJdLm9uZShcIi52Yy1oaWRlXCIsZS4kZG9tKSxcImNsaWNrXCIsZnVuY3Rpb24oKXtlLmhpZGUoKX0pLHZbXCJkZWZhdWx0XCJdLmJpbmQodltcImRlZmF1bHRcIl0ub25lKFwiLnZjLW1hc2tcIixlLiRkb20pLFwiY2xpY2tcIixmdW5jdGlvbih0KXtyZXR1cm4gdC50YXJnZXQhPXZbXCJkZWZhdWx0XCJdLm9uZShcIi52Yy1tYXNrXCIpPyExOnZvaWQgZS5oaWRlKCl9KSx2W1wiZGVmYXVsdFwiXS5kZWxlZ2F0ZSh2W1wiZGVmYXVsdFwiXS5vbmUoXCIudmMtdGFiYmFyXCIsZS4kZG9tKSxcImNsaWNrXCIsXCIudmMtdGFiXCIsZnVuY3Rpb24odCl7dmFyIG89dGhpcy5kYXRhc2V0LnRhYjtvIT1lLmFjdGl2ZWRUYWImJmUuc2hvd1RhYihvKX0pLHZbXCJkZWZhdWx0XCJdLmJpbmQodltcImRlZmF1bHRcIl0ub25lKFwiLnZjLXBhbmVsXCIsZS4kZG9tKSxcInRyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvVHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZFwiLGZ1bmN0aW9uKHQpe3JldHVybiB0LnRhcmdldCE9dltcImRlZmF1bHRcIl0ub25lKFwiLnZjLXBhbmVsXCIpPyExOnZvaWQodltcImRlZmF1bHRcIl0uaGFzQ2xhc3MoZS4kZG9tLFwidmMtdG9nZ2xlXCIpfHwodC50YXJnZXQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIikpfSk7dmFyIG89dltcImRlZmF1bHRcIl0ub25lKFwiLnZjLWNvbnRlbnRcIixlLiRkb20pLG49ITE7dltcImRlZmF1bHRcIl0uYmluZChvLFwidG91Y2hzdGFydFwiLGZ1bmN0aW9uKGUpe3ZhciB0PW8uc2Nyb2xsVG9wLGk9by5zY3JvbGxIZWlnaHQsYT10K28ub2Zmc2V0SGVpZ2h0OzA9PT10PyhvLnNjcm9sbFRvcD0xLDA9PT1vLnNjcm9sbFRvcCYmKHZbXCJkZWZhdWx0XCJdLmhhc0NsYXNzKGUudGFyZ2V0LFwidmMtY21kLWlucHV0XCIpfHwobj0hMCkpKTphPT09aSYmKG8uc2Nyb2xsVG9wPXQtMSxvLnNjcm9sbFRvcD09PXQmJih2W1wiZGVmYXVsdFwiXS5oYXNDbGFzcyhlLnRhcmdldCxcInZjLWNtZC1pbnB1dFwiKXx8KG49ITApKSl9KSx2W1wiZGVmYXVsdFwiXS5iaW5kKG8sXCJ0b3VjaG1vdmVcIixmdW5jdGlvbihlKXtuJiZlLnByZXZlbnREZWZhdWx0KCl9KSx2W1wiZGVmYXVsdFwiXS5iaW5kKG8sXCJ0b3VjaGVuZFwiLGZ1bmN0aW9uKGUpe249ITF9KX19LHtrZXk6XCJfYXV0b1J1blwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5pc0luaXRlZD0hMDtmb3IodmFyIGUgaW4gdGhpcy5wbHVnaW5MaXN0KXRoaXMuX2luaXRQbHVnaW4odGhpcy5wbHVnaW5MaXN0W2VdKTt0aGlzLnRhYkxpc3QubGVuZ3RoPjAmJnRoaXMuc2hvd1RhYih0aGlzLnRhYkxpc3RbMF0pLHRoaXMudHJpZ2dlckV2ZW50KFwicmVhZHlcIil9fSx7a2V5OlwidHJpZ2dlckV2ZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtlPVwib25cIitlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksZC5pc0Z1bmN0aW9uKHRoaXMub3B0aW9uW2VdKSYmdGhpcy5vcHRpb25bZV0uYXBwbHkodGhpcyx0KX19LHtrZXk6XCJfaW5pdFBsdWdpblwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7ZS52Q29uc29sZT10aGlzLGUudHJpZ2dlcihcImluaXRcIiksZS50cmlnZ2VyKFwicmVuZGVyVGFiXCIsZnVuY3Rpb24obyl7dC50YWJMaXN0LnB1c2goZS5pZCk7dmFyIG49dltcImRlZmF1bHRcIl0ucmVuZGVyKGdbXCJkZWZhdWx0XCJdLHtpZDplLmlkLG5hbWU6ZS5uYW1lfSk7dltcImRlZmF1bHRcIl0ub25lKFwiLnZjLXRhYmJhclwiLHQuJGRvbSkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsbik7dmFyIGk9dltcImRlZmF1bHRcIl0ucmVuZGVyKG1bXCJkZWZhdWx0XCJdLHtpZDplLmlkfSk7byYmKGQuaXNTdHJpbmcobyk/aS5pbm5lckhUTUwrPW86ZC5pc0Z1bmN0aW9uKG8uYXBwZW5kVG8pP28uYXBwZW5kVG8oaSk6ZC5pc0VsZW1lbnQobykmJmkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsbykpLHZbXCJkZWZhdWx0XCJdLm9uZShcIi52Yy1jb250ZW50XCIsdC4kZG9tKS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIixpKX0pLGUudHJpZ2dlcihcImFkZFRvcEJhclwiLGZ1bmN0aW9uKG8pe2lmKG8pZm9yKHZhciBuPXZbXCJkZWZhdWx0XCJdLm9uZShcIi52Yy10b3BiYXJcIix0LiRkb20pLGk9ZnVuY3Rpb24odCl7dmFyIGk9b1t0XSxhPXZbXCJkZWZhdWx0XCJdLnJlbmRlcihfW1wiZGVmYXVsdFwiXSx7bmFtZTppLm5hbWV8fFwiVW5kZWZpbmVkXCIsY2xhc3NOYW1lOmkuY2xhc3NOYW1lfHxcIlwiLHBsdWdpbklEOmUuaWR9KTtpZihpLmRhdGEpZm9yKHZhciByIGluIGkuZGF0YSlhLmRhdGFzZXRbcl09aS5kYXRhW3JdO2QuaXNGdW5jdGlvbihpLm9uQ2xpY2spJiZ2W1wiZGVmYXVsdFwiXS5iaW5kKGEsXCJjbGlja1wiLGZ1bmN0aW9uKHQpe3ZhciBvPWkub25DbGljay5jYWxsKGEpO289PT0hMXx8KHZbXCJkZWZhdWx0XCJdLnJlbW92ZUNsYXNzKHZbXCJkZWZhdWx0XCJdLmFsbChcIi52Yy10b3BiYXItXCIrZS5pZCksXCJ2Yy1hY3RpdmVkXCIpLHZbXCJkZWZhdWx0XCJdLmFkZENsYXNzKGEsXCJ2Yy1hY3RpdmVkXCIpKX0pLG4uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsYSl9LGE9MDthPG8ubGVuZ3RoO2ErKylpKGEpfSksZS50cmlnZ2VyKFwiYWRkVG9vbFwiLGZ1bmN0aW9uKG8pe2lmKG8pZm9yKHZhciBuPXZbXCJkZWZhdWx0XCJdLm9uZShcIi52Yy10b29sLWxhc3RcIix0LiRkb20pLGk9ZnVuY3Rpb24odCl7dmFyIGk9b1t0XSxhPXZbXCJkZWZhdWx0XCJdLnJlbmRlcih4W1wiZGVmYXVsdFwiXSx7bmFtZTppLm5hbWV8fFwiVW5kZWZpbmVkXCIscGx1Z2luSUQ6ZS5pZH0pOzE9PWkuZ2xvYmFsJiZ2W1wiZGVmYXVsdFwiXS5hZGRDbGFzcyhhLFwidmMtZ2xvYmFsLXRvb2xcIiksZC5pc0Z1bmN0aW9uKGkub25DbGljaykmJnZbXCJkZWZhdWx0XCJdLmJpbmQoYSxcImNsaWNrXCIsZnVuY3Rpb24oZSl7aS5vbkNsaWNrLmNhbGwoYSl9KSxuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsbil9LGE9MDthPG8ubGVuZ3RoO2ErKylpKGEpfSksZS5pc1JlYWR5PSEwLGUudHJpZ2dlcihcInJlYWR5XCIpfX0se2tleTpcIl90cmlnZ2VyUGx1Z2luc0V2ZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0IGluIHRoaXMucGx1Z2luTGlzdCl0aGlzLnBsdWdpbkxpc3RbdF0uaXNSZWFkeSYmdGhpcy5wbHVnaW5MaXN0W3RdLnRyaWdnZXIoZSl9fSx7a2V5OlwiX3RyaWdnZXJQbHVnaW5FdmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG89dGhpcy5wbHVnaW5MaXN0W2VdO28mJm8uaXNSZWFkeSYmby50cmlnZ2VyKHQpfX0se2tleTpcImFkZFBsdWdpblwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDAhPT10aGlzLnBsdWdpbkxpc3RbZS5pZF0/KGNvbnNvbGUuZGVidWcoXCJQbHVnaW4gXCIrZS5pZCtcIiBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkLlwiKSwhMSk6KHRoaXMucGx1Z2luTGlzdFtlLmlkXT1lLHRoaXMuaXNJbml0ZWQmJih0aGlzLl9pbml0UGx1Z2luKGUpLDE9PXRoaXMudGFiTGlzdC5sZW5ndGgmJnRoaXMuc2hvd1RhYih0aGlzLnRhYkxpc3RbMF0pKSwhMCl9fSx7a2V5OlwicmVtb3ZlUGx1Z2luXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZT0oZStcIlwiKS50b0xvd2VyQ2FzZSgpO3ZhciB0PXRoaXMucGx1Z2luTGlzdFtlXTtpZih2b2lkIDA9PT10KXJldHVybiBjb25zb2xlLmRlYnVnKFwiUGx1Z2luIFwiK2UrXCIgZG9lcyBub3QgZXhpc3QuXCIpLCExO2lmKHQudHJpZ2dlcihcInJlbW92ZVwiKSx0aGlzLmlzSW5pdGVkKXt2YXIgbz12W1wiZGVmYXVsdFwiXS5vbmUoXCIjX192Y190YWJfXCIrZSk7byYmby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pO2Zvcih2YXIgbj12W1wiZGVmYXVsdFwiXS5hbGwoXCIudmMtdG9wYmFyLVwiK2UsdGhpcy4kZG9tKSxpPTA7aTxuLmxlbmd0aDtpKyspbltpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5baV0pO3ZhciBhPXZbXCJkZWZhdWx0XCJdLm9uZShcIiNfX3ZjX2xvZ19cIitlKTthJiZhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSk7Zm9yKHZhciByPXZbXCJkZWZhdWx0XCJdLmFsbChcIi52Yy10b29sLVwiK2UsdGhpcy4kZG9tKSxsPTA7bDxyLmxlbmd0aDtsKyspcltsXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJbbF0pfXZhciBjPXRoaXMudGFiTGlzdC5pbmRleE9mKGUpO2M+LTEmJnRoaXMudGFiTGlzdC5zcGxpY2UoYywxKTt0cnl7ZGVsZXRlIHRoaXMucGx1Z2luTGlzdFtlXX1jYXRjaChzKXt0aGlzLnBsdWdpbkxpc3RbZV09dm9pZCAwfXJldHVybiB0aGlzLmFjdGl2ZWRUYWI9PWUmJnRoaXMudGFiTGlzdC5sZW5ndGg+MCYmdGhpcy5zaG93VGFiKHRoaXMudGFiTGlzdFswXSksITB9fSx7a2V5Olwic2hvd1wiLHZhbHVlOmZ1bmN0aW9uKCl7aWYodGhpcy5pc0luaXRlZCl7dmFyIGU9dGhpcyx0PXZbXCJkZWZhdWx0XCJdLm9uZShcIi52Yy1wYW5lbFwiLHRoaXMuJGRvbSk7dC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dltcImRlZmF1bHRcIl0uYWRkQ2xhc3MoZS4kZG9tLFwidmMtdG9nZ2xlXCIpLGUuX3RyaWdnZXJQbHVnaW5zRXZlbnQoXCJzaG93Q29uc29sZVwiKTt2YXIgdD12W1wiZGVmYXVsdFwiXS5vbmUoXCIudmMtbWFza1wiLGUuJGRvbSk7dC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIn0sMTApfX19LHtrZXk6XCJoaWRlXCIsdmFsdWU6ZnVuY3Rpb24oKXtpZih0aGlzLmlzSW5pdGVkKXt2W1wiZGVmYXVsdFwiXS5yZW1vdmVDbGFzcyh0aGlzLiRkb20sXCJ2Yy10b2dnbGVcIiksdGhpcy5fdHJpZ2dlclBsdWdpbnNFdmVudChcImhpZGVDb25zb2xlXCIpO3ZhciBlPXZbXCJkZWZhdWx0XCJdLm9uZShcIi52Yy1tYXNrXCIsdGhpcy4kZG9tKSx0PXZbXCJkZWZhdWx0XCJdLm9uZShcIi52Yy1wYW5lbFwiLHRoaXMuJGRvbSk7dltcImRlZmF1bHRcIl0uYmluZChlLFwidHJhbnNpdGlvbmVuZFwiLGZ1bmN0aW9uKG8pe2Uuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0LnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9KX19fSx7a2V5Olwic2hvd1N3aXRjaFwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYodGhpcy5pc0luaXRlZCl7dmFyIGU9dltcImRlZmF1bHRcIl0ub25lKFwiLnZjLXN3aXRjaFwiLHRoaXMuJGRvbSk7ZS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIn19fSx7a2V5OlwiaGlkZVN3aXRjaFwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYodGhpcy5pc0luaXRlZCl7dmFyIGU9dltcImRlZmF1bHRcIl0ub25lKFwiLnZjLXN3aXRjaFwiLHRoaXMuJGRvbSk7ZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwifX19LHtrZXk6XCJzaG93VGFiXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYodGhpcy5pc0luaXRlZCl7dmFyIHQ9dltcImRlZmF1bHRcIl0ub25lKFwiI19fdmNfbG9nX1wiK2UpO3ZbXCJkZWZhdWx0XCJdLnJlbW92ZUNsYXNzKHZbXCJkZWZhdWx0XCJdLmFsbChcIi52Yy10YWJcIix0aGlzLiRkb20pLFwidmMtYWN0aXZlZFwiKSx2W1wiZGVmYXVsdFwiXS5hZGRDbGFzcyh2W1wiZGVmYXVsdFwiXS5vbmUoXCIjX192Y190YWJfXCIrZSksXCJ2Yy1hY3RpdmVkXCIpLHZbXCJkZWZhdWx0XCJdLnJlbW92ZUNsYXNzKHZbXCJkZWZhdWx0XCJdLmFsbChcIi52Yy1sb2dib3hcIix0aGlzLiRkb20pLFwidmMtYWN0aXZlZFwiKSx2W1wiZGVmYXVsdFwiXS5hZGRDbGFzcyh0LFwidmMtYWN0aXZlZFwiKTt2YXIgbz12W1wiZGVmYXVsdFwiXS5hbGwoXCIudmMtdG9wYmFyLVwiK2UsdGhpcy4kZG9tKTt2W1wiZGVmYXVsdFwiXS5yZW1vdmVDbGFzcyh2W1wiZGVmYXVsdFwiXS5hbGwoXCIudmMtdG9wdGFiXCIsdGhpcy4kZG9tKSxcInZjLXRvZ2dsZVwiKSx2W1wiZGVmYXVsdFwiXS5hZGRDbGFzcyhvLFwidmMtdG9nZ2xlXCIpLG8ubGVuZ3RoPjA/dltcImRlZmF1bHRcIl0uYWRkQ2xhc3ModltcImRlZmF1bHRcIl0ub25lKFwiLnZjLWNvbnRlbnRcIix0aGlzLiRkb20pLFwidmMtaGFzLXRvcGJhclwiKTp2W1wiZGVmYXVsdFwiXS5yZW1vdmVDbGFzcyh2W1wiZGVmYXVsdFwiXS5vbmUoXCIudmMtY29udGVudFwiLHRoaXMuJGRvbSksXCJ2Yy1oYXMtdG9wYmFyXCIpLHZbXCJkZWZhdWx0XCJdLnJlbW92ZUNsYXNzKHZbXCJkZWZhdWx0XCJdLmFsbChcIi52Yy10b29sXCIsdGhpcy4kZG9tKSxcInZjLXRvZ2dsZVwiKSx2W1wiZGVmYXVsdFwiXS5hZGRDbGFzcyh2W1wiZGVmYXVsdFwiXS5hbGwoXCIudmMtdG9vbC1cIitlLHRoaXMuJGRvbSksXCJ2Yy10b2dnbGVcIiksdGhpcy5hY3RpdmVkVGFiJiZ0aGlzLl90cmlnZ2VyUGx1Z2luRXZlbnQodGhpcy5hY3RpdmVkVGFiLFwiaGlkZVwiKSx0aGlzLmFjdGl2ZWRUYWI9ZSx0aGlzLl90cmlnZ2VyUGx1Z2luRXZlbnQodGhpcy5hY3RpdmVkVGFiLFwic2hvd1wiKX19fSx7a2V5Olwic2V0T3B0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZihkLmlzU3RyaW5nKGUpKXRoaXMub3B0aW9uW2VdPXQsdGhpcy5fdHJpZ2dlclBsdWdpbnNFdmVudChcInVwZGF0ZU9wdGlvblwiKTtlbHNlIGlmKGQuaXNPYmplY3QoZSkpe2Zvcih2YXIgbyBpbiBlKXRoaXMub3B0aW9uW29dPWVbb107dGhpcy5fdHJpZ2dlclBsdWdpbnNFdmVudChcInVwZGF0ZU9wdGlvblwiKX1lbHNlIGNvbnNvbGUuZGVidWcoXCJUaGUgZmlyc3QgcGFyYW1ldGVyIG9mIHZDb25zb2xlLnNldE9wdGlvbigpIG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gb2JqZWN0LlwiKX19LHtrZXk6XCJkZXN0cm95XCIsdmFsdWU6ZnVuY3Rpb24oKXtpZih0aGlzLmlzSW5pdGVkKXtmb3IodmFyIGU9T2JqZWN0LmtleXModGhpcy5wbHVnaW5MaXN0KSx0PWUubGVuZ3RoLTE7dD49MDt0LS0pdGhpcy5yZW1vdmVQbHVnaW4oZVt0XSk7dGhpcy4kZG9tLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy4kZG9tKX19fV0pLGV9KCk7dFtcImRlZmF1bHRcIl09QSxlLmV4cG9ydHM9dFtcImRlZmF1bHRcIl19LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPXtuYW1lOlwidmNvbnNvbGVcIix2ZXJzaW9uOlwiMy4yLjBcIixkZXNjcmlwdGlvbjpcIkEgbGlnaHR3ZWlnaHQsIGV4dGVuZGFibGUgZnJvbnQtZW5kIGRldmVsb3BlciB0b29sIGZvciBtb2JpbGUgd2ViIHBhZ2UuXCIsaG9tZXBhZ2U6XCJodHRwczovL2dpdGh1Yi5jb20vVGVuY2VudC92Q29uc29sZVwiLG1haW46XCJkaXN0L3Zjb25zb2xlLm1pbi5qc1wiLHNjcmlwdHM6e3Rlc3Q6XCJtb2NoYVwiLGRpc3Q6XCJ3ZWJwYWNrXCJ9LGtleXdvcmRzOltcImNvbnNvbGVcIixcImRlYnVnXCIsXCJtb2JpbGVcIl0scmVwb3NpdG9yeTp7dHlwZTpcImdpdFwiLHVybDpcImdpdCtodHRwczovL2dpdGh1Yi5jb20vVGVuY2VudC92Q29uc29sZS5naXRcIn0sZGVwZW5kZW5jaWVzOnt9LGRldkRlcGVuZGVuY2llczp7XCJiYWJlbC1jb3JlXCI6XCJeNi43LjdcIixcImJhYmVsLWxvYWRlclwiOlwiXjYuMi40XCIsXCJiYWJlbC1wbHVnaW4tYWRkLW1vZHVsZS1leHBvcnRzXCI6XCJeMC4xLjRcIixcImJhYmVsLXByZXNldC1lczIwMTVcIjpcIl42LjYuMFwiLFwiYmFiZWwtcHJlc2V0LXN0YWdlLTNcIjpcIl42LjUuMFwiLGNoYWk6XCJeMy41LjBcIixcImNzcy1sb2FkZXJcIjpcIl4wLjIzLjFcIixcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiOlwiXjEuMC4xXCIsXCJodG1sLWxvYWRlclwiOlwiXjAuNC4zXCIsanNkb206XCJeOS4yLjFcIixcImpzb24tbG9hZGVyXCI6XCJeMC41LjRcIixsZXNzOlwiXjIuNS4zXCIsXCJsZXNzLWxvYWRlclwiOlwiXjIuMi4zXCIsbW9jaGE6XCJeMi41LjNcIixcInN0eWxlLWxvYWRlclwiOlwiXjAuMTMuMVwiLHdlYnBhY2s6XCJ+MS4xMi4xMVwifSxhdXRob3I6XCJUZW5jZW50XCIsbGljZW5zZTpcIk1JVFwifX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3ZhciB0PWU+MD9uZXcgRGF0ZShlKTpuZXcgRGF0ZSxvPXQuZ2V0RGF0ZSgpPDEwP1wiMFwiK3QuZ2V0RGF0ZSgpOnQuZ2V0RGF0ZSgpLG49dC5nZXRNb250aCgpPDk/XCIwXCIrKHQuZ2V0TW9udGgoKSsxKTp0LmdldE1vbnRoKCkrMSxpPXQuZ2V0RnVsbFllYXIoKSxhPXQuZ2V0SG91cnMoKTwxMD9cIjBcIit0LmdldEhvdXJzKCk6dC5nZXRIb3VycygpLHI9dC5nZXRNaW51dGVzKCk8MTA/XCIwXCIrdC5nZXRNaW51dGVzKCk6dC5nZXRNaW51dGVzKCksbD10LmdldFNlY29uZHMoKTwxMD9cIjBcIit0LmdldFNlY29uZHMoKTp0LmdldFNlY29uZHMoKSxjPXQuZ2V0TWlsbGlzZWNvbmRzKCk8MTA/XCIwXCIrdC5nZXRNaWxsaXNlY29uZHMoKTp0LmdldE1pbGxpc2Vjb25kcygpO3JldHVybiAxMDA+YyYmKGM9XCIwXCIrYykse3RpbWU6K3QseWVhcjppLG1vbnRoOm4sZGF5Om8saG91cjphLG1pbnV0ZTpyLHNlY29uZDpsLG1pbGxpc2Vjb25kOmN9fWZ1bmN0aW9uIG4oZSl7cmV0dXJuXCJbb2JqZWN0IE51bWJlcl1cIj09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfWZ1bmN0aW9uIGkoZSl7cmV0dXJuXCJbb2JqZWN0IFN0cmluZ11cIj09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfWZ1bmN0aW9uIGEoZSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl9ZnVuY3Rpb24gcihlKXtyZXR1cm5cIltvYmplY3QgQm9vbGVhbl1cIj09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfWZ1bmN0aW9uIGwoZSl7cmV0dXJuXCJbb2JqZWN0IFVuZGVmaW5lZF1cIj09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfWZ1bmN0aW9uIGMoZSl7cmV0dXJuXCJbb2JqZWN0IE51bGxdXCI9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX1mdW5jdGlvbiBzKGUpe3JldHVyblwiW29iamVjdCBTeW1ib2xdXCI9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX1mdW5jdGlvbiBkKGUpe3JldHVybiEoXCJbb2JqZWN0IE9iamVjdF1cIiE9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpJiYobihlKXx8aShlKXx8cihlKXx8YShlKXx8YyhlKXx8dShlKXx8bChlKXx8cyhlKSkpfWZ1bmN0aW9uIHUoZSl7cmV0dXJuXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl9ZnVuY3Rpb24gdihlKXtyZXR1cm5cIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBIVE1MRWxlbWVudD9cInVuZGVmaW5lZFwiOncoSFRNTEVsZW1lbnQpKT9lIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ6ZSYmXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOncoZSkpJiZudWxsIT09ZSYmMT09PWUubm9kZVR5cGUmJlwic3RyaW5nXCI9PXR5cGVvZiBlLm5vZGVOYW1lfWZ1bmN0aW9uIGYoZSl7dmFyIHQ9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpO3JldHVyblwiW29iamVjdCBnbG9iYWxdXCI9PXR8fFwiW29iamVjdCBXaW5kb3ddXCI9PXR8fFwiW29iamVjdCBET01XaW5kb3ddXCI9PXR9ZnVuY3Rpb24gcChlKXt2YXIgdD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O2lmKCFlfHxcIm9iamVjdFwiIT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6dyhlKSl8fGUubm9kZVR5cGV8fGYoZSkpcmV0dXJuITE7dHJ5e2lmKGUuY29uc3RydWN0b3ImJiF0LmNhbGwoZSxcImNvbnN0cnVjdG9yXCIpJiYhdC5jYWxsKGUuY29uc3RydWN0b3IucHJvdG90eXBlLFwiaXNQcm90b3R5cGVPZlwiKSlyZXR1cm4hMX1jYXRjaChvKXtyZXR1cm4hMX12YXIgbj12b2lkIDA7Zm9yKG4gaW4gZSk7cmV0dXJuIHZvaWQgMD09PW58fHQuY2FsbChlLG4pfWZ1bmN0aW9uIGgoZSl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGUpKS5wYXJlbnROb2RlLmlubmVySFRNTH1mdW5jdGlvbiBnKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg8PTF8fHZvaWQgMD09PWFyZ3VtZW50c1sxXT9cIlx0XCI6YXJndW1lbnRzWzFdLG89YXJndW1lbnRzLmxlbmd0aDw9Mnx8dm9pZCAwPT09YXJndW1lbnRzWzJdP1wiQ0lSQ1VMQVJfREVQRU5ERUNZX09CSkVDVFwiOmFyZ3VtZW50c1syXSxuPVtdLGk9SlNPTi5zdHJpbmdpZnkoZSxmdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjp3KHQpKSYmbnVsbCE9PXQpe2lmKH5uLmluZGV4T2YodCkpcmV0dXJuIG87bi5wdXNoKHQpfXJldHVybiB0fSx0KTtyZXR1cm4gbj1udWxsLGl9ZnVuY3Rpb24gYihlKXtpZighZChlKSYmIWEoZSkpcmV0dXJuW107dmFyIHQ9W1widG9TdHJpbmdcIixcInRvTG9jYWxlU3RyaW5nXCIsXCJ2YWx1ZU9mXCIsXCJoYXNPd25Qcm9wZXJ0eVwiLFwiaXNQcm90b3R5cGVPZlwiLFwicHJvcGVydHlJc0VudW1lcmFibGVcIixcImNvbnN0cnVjdG9yXCJdLG89W107Zm9yKHZhciBuIGluIGUpdC5pbmRleE9mKG4pPDAmJm8ucHVzaChuKTtyZXR1cm4gbz1vLnNvcnQoKX1mdW5jdGlvbiBtKGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkucmVwbGFjZShcIltvYmplY3QgXCIsXCJcIikucmVwbGFjZShcIl1cIixcIlwiKX1mdW5jdGlvbiB5KGUsdCl7d2luZG93LmxvY2FsU3RvcmFnZSYmKGU9XCJ2Q29uc29sZV9cIitlLGxvY2FsU3RvcmFnZS5zZXRJdGVtKGUsdCkpfWZ1bmN0aW9uIF8oZSl7cmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U/KGU9XCJ2Q29uc29sZV9cIitlLGxvY2FsU3RvcmFnZS5nZXRJdGVtKGUpKTp2b2lkIDB9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHc9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbD9cInN5bWJvbFwiOnR5cGVvZiBlfTt0LmdldERhdGU9byx0LmlzTnVtYmVyPW4sdC5pc1N0cmluZz1pLHQuaXNBcnJheT1hLHQuaXNCb29sZWFuPXIsdC5pc1VuZGVmaW5lZD1sLHQuaXNOdWxsPWMsdC5pc1N5bWJvbD1zLHQuaXNPYmplY3Q9ZCx0LmlzRnVuY3Rpb249dSx0LmlzRWxlbWVudD12LHQuaXNXaW5kb3c9Zix0LmlzUGxhaW5PYmplY3Q9cCx0Lmh0bWxFbmNvZGU9aCx0LkpTT05TdHJpbmdpZnk9Zyx0LmdldE9iakFsbEtleXM9Yix0LmdldE9iak5hbWU9bSx0LnNldFN0b3JhZ2U9eSx0LmdldFN0b3JhZ2U9X30sZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1vKDQpLGE9byg2KSxyPW4oYSksbD17fTtsLm9uZT1mdW5jdGlvbihlLHQpe3JldHVybiB0P3QucXVlcnlTZWxlY3RvcihlKTpkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpfSxsLmFsbD1mdW5jdGlvbihlLHQpe3ZhciBvPXZvaWQgMCxuPVtdO3JldHVybiBvPXQ/dC5xdWVyeVNlbGVjdG9yQWxsKGUpOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZSksbyYmby5sZW5ndGg+MCYmKG49QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobykpLG59LGwuYWRkQ2xhc3M9ZnVuY3Rpb24oZSx0KXtpZihlKXsoMCxpLmlzQXJyYXkpKGUpfHwoZT1bZV0pO2Zvcih2YXIgbz0wO288ZS5sZW5ndGg7bysrKXt2YXIgbj1lW29dLmNsYXNzTmFtZXx8XCJcIixhPW4uc3BsaXQoXCIgXCIpO2EuaW5kZXhPZih0KT4tMXx8KGEucHVzaCh0KSxlW29dLmNsYXNzTmFtZT1hLmpvaW4oXCIgXCIpKX19fSxsLnJlbW92ZUNsYXNzPWZ1bmN0aW9uKGUsdCl7aWYoZSl7KDAsaS5pc0FycmF5KShlKXx8KGU9W2VdKTtmb3IodmFyIG89MDtvPGUubGVuZ3RoO28rKyl7Zm9yKHZhciBuPWVbb10uY2xhc3NOYW1lLnNwbGl0KFwiIFwiKSxhPTA7YTxuLmxlbmd0aDthKyspblthXT09dCYmKG5bYV09XCJcIik7ZVtvXS5jbGFzc05hbWU9bi5qb2luKFwiIFwiKS50cmltKCl9fX0sbC5oYXNDbGFzcz1mdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybiExO2Zvcih2YXIgbz1lLmNsYXNzTmFtZS5zcGxpdChcIiBcIiksbj0wO248by5sZW5ndGg7bisrKWlmKG9bbl09PXQpcmV0dXJuITA7cmV0dXJuITF9LGwuYmluZD1mdW5jdGlvbihlLHQsbyxuKXtpZihlKXt2b2lkIDA9PT1uJiYobj0hMSksKDAsaS5pc0FycmF5KShlKXx8KGU9W2VdKTtmb3IodmFyIGE9MDthPGUubGVuZ3RoO2ErKyllW2FdLmFkZEV2ZW50TGlzdGVuZXIodCxvLG4pfX0sbC5kZWxlZ2F0ZT1mdW5jdGlvbihlLHQsbyxuKXtlJiZlLmFkZEV2ZW50TGlzdGVuZXIodCxmdW5jdGlvbih0KXt2YXIgaT1sLmFsbChvLGUpO2lmKGkpZTpmb3IodmFyIGE9MDthPGkubGVuZ3RoO2ErKylmb3IodmFyIHI9dC50YXJnZXQ7cjspe2lmKHI9PWlbYV0pe24uY2FsbChyLHQpO2JyZWFrIGV9aWYocj1yLnBhcmVudE5vZGUscj09ZSlicmVha319LCExKX0sbC5yZW5kZXI9cltcImRlZmF1bHRcIl0sdFtcImRlZmF1bHRcIl09bCxlLmV4cG9ydHM9dFtcImRlZmF1bHRcIl19LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlLHQsbyl7dmFyIG49L1xce1xceyhbXlxcfV0rKVxcfVxcfS9nLGk9XCJcIixhPVwiXCIscj0wLGw9W10sYz1mdW5jdGlvbihlLHQpe1wiXCIhPT1lJiYoaSs9dD9lLm1hdGNoKC9eID9lbHNlL2cpP1wifSBcIitlK1wiIHtcXG5cIjplLm1hdGNoKC9cXC8oaWZ8Zm9yfHN3aXRjaCkvZyk/XCJ9XFxuXCI6ZS5tYXRjaCgvXiA/aWZ8Zm9yfHN3aXRjaC9nKT9lK1wiIHtcXG5cIjplLm1hdGNoKC9eID8oYnJlYWt8Y29udGludWUpID8kL2cpP2UrXCI7XFxuXCI6ZS5tYXRjaCgvXiA/KGNhc2V8ZGVmYXVsdCkvZyk/ZStcIjpcXG5cIjpcImFyci5wdXNoKFwiK2UrXCIpO1xcblwiOidhcnIucHVzaChcIicrZS5yZXBsYWNlKC9cIi9nLCdcXFxcXCInKSsnXCIpO1xcbicpfTtmb3Iod2luZG93Ll9fbWl0b19kYXRhPXQsd2luZG93Ll9fbWl0b19jb2RlPVwiXCIsd2luZG93Ll9fbWl0b19yZXN1bHQ9XCJcIixlPWUucmVwbGFjZSgvKFxce1xceyA/c3dpdGNoKC4rPylcXH1cXH0pW1xcclxcblxcdCBdK1xce1xcey9nLFwiJDF7e1wiKSxlPWUucmVwbGFjZSgvXltcXHJcXG5dLyxcIlwiKS5yZXBsYWNlKC9cXG4vZyxcIlxcXFxcXG5cIikucmVwbGFjZSgvXFxyL2csXCJcXFxcXFxyXCIpLGE9XCIoZnVuY3Rpb24oKXtcXG5cIixpPVwidmFyIGFyciA9IFtdO1xcblwiO2w9bi5leGVjKGUpOyljKGUuc2xpY2UocixsLmluZGV4KSwhMSksYyhsWzFdLCEwKSxyPWwuaW5kZXgrbFswXS5sZW5ndGg7YyhlLnN1YnN0cihyLGUubGVuZ3RoLXIpLCExKSxpKz0nX19taXRvX3Jlc3VsdCA9IGFyci5qb2luKFwiXCIpOycsaT1cIndpdGggKF9fbWl0b19kYXRhKSB7XFxuXCIraStcIlxcbn1cIixhKz1pLGErPVwifSkoKTtcIjt2YXIgcz1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKSxkPVwiXCI7cy5sZW5ndGg+MCYmKGQ9c1swXS5nZXRBdHRyaWJ1dGUoXCJub25jZVwiKXx8XCJcIik7dmFyIHU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNDUklQVFwiKTt1LmlubmVySFRNTD1hLHUuc2V0QXR0cmlidXRlKFwibm9uY2VcIixkKSxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodSk7dmFyIHY9X19taXRvX3Jlc3VsdDtpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodSksIW8pe3ZhciBmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7Zi5pbm5lckhUTUw9dix2PWYuY2hpbGRyZW5bMF19cmV0dXJuIHZ9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdFtcImRlZmF1bHRcIl09byxlLmV4cG9ydHM9dFtcImRlZmF1bHRcIl19LGZ1bmN0aW9uKGUsdCxvKXt2YXIgbj1vKDgpO1wic3RyaW5nXCI9PXR5cGVvZiBuJiYobj1bW2UuaWQsbixcIlwiXV0pO28oMTApKG4se30pO24ubG9jYWxzJiYoZS5leHBvcnRzPW4ubG9jYWxzKX0sZnVuY3Rpb24oZSx0LG8pe3Q9ZS5leHBvcnRzPW8oOSkoKSx0LnB1c2goW2UuaWQsJyNfX3Zjb25zb2xle2NvbG9yOiMwMDA7Zm9udC1zaXplOjEzcHg7Zm9udC1mYW1pbHk6SGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWZ9I19fdmNvbnNvbGUgLnZjLW1heC1oZWlnaHR7bWF4LWhlaWdodDoxOS4yMzA3NjkyM2VtfSNfX3Zjb25zb2xlIC52Yy1tYXgtaGVpZ2h0LWxpbmV7bWF4LWhlaWdodDozLjM4NDYxNTM4ZW19I19fdmNvbnNvbGUgLnZjLW1pbi1oZWlnaHR7bWluLWhlaWdodDozLjA3NjkyMzA4ZW19I19fdmNvbnNvbGUgZGQsI19fdmNvbnNvbGUgZGwsI19fdmNvbnNvbGUgcHJle21hcmdpbjowfSNfX3Zjb25zb2xlIC52Yy1zd2l0Y2h7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpmaXhlZDtyaWdodDouNzY5MjMwNzdlbTtib3R0b206Ljc2OTIzMDc3ZW07Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMwNGJlMDI7bGluZS1oZWlnaHQ6MTtmb250LXNpemU6MS4wNzY5MjMwOGVtO3BhZGRpbmc6LjYxNTM4NDYyZW0gMS4yMzA3NjkyM2VtO3otaW5kZXg6MTAwMDA7Ym9yZGVyLXJhZGl1czouMzA3NjkyMzFlbTtib3gtc2hhZG93OjAgMCAuNjE1Mzg0NjJlbSByZ2JhKDAsMCwwLC40KX0jX192Y29uc29sZSAudmMtbWFza3t0b3A6MDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O3otaW5kZXg6MTAwMDE7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4zczstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7b3ZlcmZsb3cteTpzY3JvbGx9I19fdmNvbnNvbGUgLnZjLW1hc2ssI19fdmNvbnNvbGUgLnZjLXBhbmVse2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjpmaXhlZDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MH0jX192Y29uc29sZSAudmMtcGFuZWx7bWluLWhlaWdodDo4NSU7ei1pbmRleDoxMDAwMjtiYWNrZ3JvdW5kLWNvbG9yOiNlZmVmZjQ7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzLC13ZWJraXQtdHJhbnNmb3JtIC4zczstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwMCUpfSNfX3Zjb25zb2xlIC52Yy10YWJiYXJ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2Q5ZDlkOTtvdmVyZmxvdy14OmF1dG87aGVpZ2h0OjNlbTt3aWR0aDphdXRvO3doaXRlLXNwYWNlOm5vd3JhcH0jX192Y29uc29sZSAudmMtdGFiYmFyIC52Yy10YWJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bGluZS1oZWlnaHQ6M2VtO3BhZGRpbmc6MCAxLjE1Mzg0NjE1ZW07Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZDlkOWQ5O3RleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiMwMDA7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lfSNfX3Zjb25zb2xlIC52Yy10YWJiYXIgLnZjLXRhYjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xNSl9I19fdmNvbnNvbGUgLnZjLXRhYmJhciAudmMtdGFiLnZjLWFjdGl2ZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmfSNfX3Zjb25zb2xlIC52Yy1jb250ZW50e2JhY2tncm91bmQtY29sb3I6I2ZmZjtvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OmF1dG87cG9zaXRpb246YWJzb2x1dGU7dG9wOjMuMDc2OTIzMDhlbTtsZWZ0OjA7cmlnaHQ6MDtib3R0b206My4wNzY5MjMwOGVtOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNofSNfX3Zjb25zb2xlIC52Yy1jb250ZW50LnZjLWhhcy10b3BiYXJ7dG9wOjUuNDYxNTM4NDZlbX0jX192Y29uc29sZSAudmMtdG9wYmFye2JhY2tncm91bmQtY29sb3I6I2ZiZjlmZTtkaXNwbGF5OmZsZXg7ZGlzcGxheTotd2Via2l0LWJveDtmbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC13cmFwOndyYXA7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOnJvdzstd2Via2l0LWZsZXgtd3JhcDp3cmFwO3dpZHRoOjEwMCV9I19fdmNvbnNvbGUgLnZjLXRvcGJhciAudmMtdG9wdGFie2Rpc3BsYXk6bm9uZTtmbGV4OjE7LXdlYmtpdC1ib3gtZmxleDoxO2xpbmUtaGVpZ2h0OjIuMzA3NjkyMzFlbTtwYWRkaW5nOjAgMS4xNTM4NDYxNWVtO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkOWQ5ZDk7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6IzAwMDstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmV9I19fdmNvbnNvbGUgLnZjLXRvcGJhciAudmMtdG9wdGFiLnZjLXRvZ2dsZXtkaXNwbGF5OmJsb2NrfSNfX3Zjb25zb2xlIC52Yy10b3BiYXIgLnZjLXRvcHRhYjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xNSl9I19fdmNvbnNvbGUgLnZjLXRvcGJhciAudmMtdG9wdGFiLnZjLWFjdGl2ZWR7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzNlODJmN30jX192Y29uc29sZSAudmMtbG9nYm94e2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTttaW4taGVpZ2h0OjEwMCV9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCBpe2ZvbnQtc3R5bGU6bm9ybWFsfSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWxvZ3twYWRkaW5nLWJvdHRvbTozZW07LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50fSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWxvZzplbXB0eTpiZWZvcmV7Y29udGVudDpcIkVtcHR5XCI7Y29sb3I6Izk5OTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NDUlO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO2ZvbnQtc2l6ZToxLjE1Mzg0NjE1ZW07dGV4dC1hbGlnbjpjZW50ZXJ9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtaXRlbXttYXJnaW46MDtwYWRkaW5nOi40NjE1Mzg0NmVtIC42MTUzODQ2MmVtO292ZXJmbG93OmhpZGRlbjtsaW5lLWhlaWdodDoxLjM7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VlZTt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtaXRlbS1pbmZve2NvbG9yOiM2YTVhY2R9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtaXRlbS1kZWJ1Z3tjb2xvcjojZGFhNTIwfSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWl0ZW0td2Fybntjb2xvcjpvcmFuZ2U7Ym9yZGVyLWNvbG9yOiNmZmI5MzA7YmFja2dyb3VuZC1jb2xvcjojZmZmYWNkfSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWl0ZW0tZXJyb3J7Y29sb3I6I2RjMTQzYztib3JkZXItY29sb3I6I2Y0YTBhYjtiYWNrZ3JvdW5kLWNvbG9yOiNmZmU0ZTF9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtbG9nLnZjLWxvZy1wYXJ0bHkgLnZjLWl0ZW17ZGlzcGxheTpub25lfSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWxvZy52Yy1sb2ctcGFydGx5LWVycm9yIC52Yy1pdGVtLWVycm9yLCNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWxvZy52Yy1sb2ctcGFydGx5LWluZm8gLnZjLWl0ZW0taW5mbywjX192Y29uc29sZSAudmMtbG9nYm94IC52Yy1sb2cudmMtbG9nLXBhcnRseS1sb2cgLnZjLWl0ZW0tbG9nLCNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWxvZy52Yy1sb2ctcGFydGx5LXdhcm4gLnZjLWl0ZW0td2FybntkaXNwbGF5OmJsb2NrfSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWl0ZW0gLnZjLWl0ZW0tY29udGVudHttYXJnaW4tcmlnaHQ6NC42MTUzODQ2MmVtO2Rpc3BsYXk6YmxvY2t9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtaXRlbSAudmMtaXRlbS1tZXRhe2NvbG9yOiM4ODg7ZmxvYXQ6cmlnaHQ7d2lkdGg6NC42MTUzODQ2MmVtO3RleHQtYWxpZ246cmlnaHR9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtaXRlbS52Yy1pdGVtLW5vbWV0YSAudmMtaXRlbS1jb250ZW50e21hcmdpbi1yaWdodDowfSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWl0ZW0udmMtaXRlbS1ub21ldGEgLnZjLWl0ZW0tbWV0YXtkaXNwbGF5Om5vbmV9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtaXRlbSAudmMtaXRlbS1jb2Rle2Rpc3BsYXk6YmxvY2s7d2hpdGUtc3BhY2U6cHJlLXdyYXA7b3ZlcmZsb3c6YXV0bztwb3NpdGlvbjpyZWxhdGl2ZX0jX192Y29uc29sZSAudmMtbG9nYm94IC52Yy1pdGVtIC52Yy1pdGVtLWNvZGUudmMtaXRlbS1jb2RlLWlucHV0LCNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWl0ZW0gLnZjLWl0ZW0tY29kZS52Yy1pdGVtLWNvZGUtb3V0cHV0e3BhZGRpbmctbGVmdDouOTIzMDc2OTJlbX0jX192Y29uc29sZSAudmMtbG9nYm94IC52Yy1pdGVtIC52Yy1pdGVtLWNvZGUudmMtaXRlbS1jb2RlLWlucHV0OmJlZm9yZSwjX192Y29uc29sZSAudmMtbG9nYm94IC52Yy1pdGVtIC52Yy1pdGVtLWNvZGUudmMtaXRlbS1jb2RlLW91dHB1dDpiZWZvcmV7Y29udGVudDpcIlxcXFwyMDNBXCI7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0uMjMwNzY5MjNlbTtsZWZ0OjA7Zm9udC1zaXplOjEuMjMwNzY5MjNlbTtjb2xvcjojNmE1YWNkfSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWl0ZW0gLnZjLWl0ZW0tY29kZS52Yy1pdGVtLWNvZGUtb3V0cHV0OmJlZm9yZXtjb250ZW50OlwiXFxcXDIwMzlcIn0jX192Y29uc29sZSAudmMtbG9nYm94IC52Yy1pdGVtIC52Yy1mb2xke2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6YXV0bzstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH0jX192Y29uc29sZSAudmMtbG9nYm94IC52Yy1pdGVtIC52Yy1mb2xkIC52Yy1mb2xkLW91dGVye2Rpc3BsYXk6YmxvY2s7Zm9udC1zdHlsZTppdGFsaWM7cGFkZGluZy1sZWZ0Oi43NjkyMzA3N2VtO3Bvc2l0aW9uOnJlbGF0aXZlfSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWl0ZW0gLnZjLWZvbGQgLnZjLWZvbGQtb3V0ZXI6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I2U2ZTZlNn0jX192Y29uc29sZSAudmMtbG9nYm94IC52Yy1pdGVtIC52Yy1mb2xkIC52Yy1mb2xkLW91dGVyOmJlZm9yZXtjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7dG9wOi4zMDc2OTIzMWVtO2xlZnQ6LjE1Mzg0NjE1ZW07d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXI6LjMwNzY5MjMxZW0gc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWxlZnQtY29sb3I6IzAwMH0jX192Y29uc29sZSAudmMtbG9nYm94IC52Yy1pdGVtIC52Yy1mb2xkIC52Yy1mb2xkLW91dGVyLnZjLXRvZ2dsZTpiZWZvcmV7dG9wOi40NjE1Mzg0NmVtO2xlZnQ6MDtib3JkZXItdG9wLWNvbG9yOiMwMDA7Ym9yZGVyLWxlZnQtY29sb3I6dHJhbnNwYXJlbnR9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtaXRlbSAudmMtZm9sZCAudmMtZm9sZC1pbm5lcntkaXNwbGF5Om5vbmU7bWFyZ2luLWxlZnQ6Ljc2OTIzMDc3ZW19I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtaXRlbSAudmMtZm9sZCAudmMtZm9sZC1pbm5lci52Yy10b2dnbGV7ZGlzcGxheTpibG9ja30jX192Y29uc29sZSAudmMtbG9nYm94IC52Yy1pdGVtIC52Yy1mb2xkIC52Yy1mb2xkLWlubmVyIC52Yy1jb2RlLWtleXttYXJnaW4tbGVmdDouNzY5MjMwNzdlbX0jX192Y29uc29sZSAudmMtbG9nYm94IC52Yy1pdGVtIC52Yy1mb2xkIC52Yy1mb2xkLW91dGVyIC52Yy1jb2RlLWtleXttYXJnaW4tbGVmdDowfSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWNvZGUta2V5e2NvbG9yOiM5MDV9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtY29kZS1wcml2YXRlLWtleXtjb2xvcjojZDM5MWI1fSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWNvZGUtZnVuY3Rpb257Y29sb3I6IzkwNTtmb250LXN0eWxlOml0YWxpY30jX192Y29uc29sZSAudmMtbG9nYm94IC52Yy1jb2RlLWJvb2xlYW4sI19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtY29kZS1udW1iZXJ7Y29sb3I6IzAwODZiM30jX192Y29uc29sZSAudmMtbG9nYm94IC52Yy1jb2RlLXN0cmluZ3tjb2xvcjojMTgzNjkxfSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWNvZGUtbnVsbCwjX192Y29uc29sZSAudmMtbG9nYm94IC52Yy1jb2RlLXVuZGVmaW5lZHtjb2xvcjojNjY2fSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWNtZHtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6My4wNzY5MjMwOGVtO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO2JvcmRlci10b3A6MXB4IHNvbGlkICNkOWQ5ZDk7ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtY21kIC52Yy1jbWQtaW5wdXQtd3JhcHtkaXNwbGF5OmJsb2NrO2hlaWdodDoyLjE1Mzg0NjE1ZW07bWFyZ2luLXJpZ2h0OjMuMDc2OTIzMDhlbTtwYWRkaW5nOi40NjE1Mzg0NmVtIC42MTUzODQ2MmVtfSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWNtZCAudmMtY21kLWlucHV0e3dpZHRoOjEwMCU7Ym9yZGVyOm5vbmU7cmVzaXplOm5vbmU7b3V0bGluZTpub25lO3BhZGRpbmc6MDtmb250LXNpemU6LjkyMzA3NjkyZW19I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtY21kIC52Yy1jbWQtaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7bGluZS1oZWlnaHQ6Mi4xNTM4NDYxNWVtfSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWNtZCAudmMtY21kLWJ0bntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO3dpZHRoOjMuMDc2OTIzMDhlbTtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiNlZmVmZjQ7b3V0bGluZTpub25lOy13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lO2ZvbnQtc2l6ZToxZW19I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtY21kIC52Yy1jbWQtYnRuOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjE1KX0jX192Y29uc29sZSAudmMtbG9nYm94IC52Yy1ncm91cCAudmMtZ3JvdXAtcHJldmlld3std2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZX0jX192Y29uc29sZSAudmMtbG9nYm94IC52Yy1ncm91cCAudmMtZ3JvdXAtcHJldmlldzphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZTZlNmU2fSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWdyb3VwIC52Yy1ncm91cC1kZXRhaWx7ZGlzcGxheTpub25lO3BhZGRpbmc6MCAwIC43NjkyMzA3N2VtIDEuNTM4NDYxNTRlbTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWVlfSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWdyb3VwLnZjLWFjdGl2ZWQgLnZjLWdyb3VwLWRldGFpbHtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQtY29sb3I6I2ZiZjlmZX0jX192Y29uc29sZSAudmMtbG9nYm94IC52Yy1ncm91cC52Yy1hY3RpdmVkIC52Yy10YWJsZS1yb3d7YmFja2dyb3VuZC1jb2xvcjojZmZmfSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLWdyb3VwLnZjLWFjdGl2ZWQgLnZjLWdyb3VwLXByZXZpZXd7YmFja2dyb3VuZC1jb2xvcjojZmJmOWZlfSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLXRhYmxlIC52Yy10YWJsZS1yb3d7ZGlzcGxheTpmbGV4O2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LXdyYXA6d3JhcDstd2Via2l0LWJveC1kaXJlY3Rpb246cm93Oy13ZWJraXQtZmxleC13cmFwOndyYXA7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlZWV9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtdGFibGUgLnZjLXRhYmxlLXJvdy52Yy1sZWZ0LWJvcmRlcntib3JkZXItbGVmdDoxcHggc29saWQgI2VlZX0jX192Y29uc29sZSAudmMtbG9nYm94IC52Yy10YWJsZSAudmMtdGFibGUtY29se2ZsZXg6MTstd2Via2l0LWJveC1mbGV4OjE7cGFkZGluZzouMjMwNzY5MjNlbSAuMzA3NjkyMzFlbTtib3JkZXItbGVmdDoxcHggc29saWQgI2VlZTtvdmVyZmxvdzphdXRvO3doaXRlLXNwYWNlOnByZS13cmFwO3dvcmQtYnJlYWs6YnJlYWstd29yZDstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH0jX192Y29uc29sZSAudmMtbG9nYm94IC52Yy10YWJsZSAudmMtdGFibGUtY29sOmZpcnN0LWNoaWxke2JvcmRlcjpub25lfSNfX3Zjb25zb2xlIC52Yy1sb2dib3ggLnZjLXRhYmxlIC52Yy1zbWFsbCAudmMtdGFibGUtY29se3BhZGRpbmc6MCAuMzA3NjkyMzFlbTtmb250LXNpemU6LjkyMzA3NjkyZW19I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtdGFibGUgLnZjLXRhYmxlLWNvbC0ye2ZsZXg6Mjstd2Via2l0LWJveC1mbGV4OjJ9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtdGFibGUgLnZjLXRhYmxlLWNvbC0ze2ZsZXg6Mzstd2Via2l0LWJveC1mbGV4OjN9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtdGFibGUgLnZjLXRhYmxlLWNvbC00e2ZsZXg6NDstd2Via2l0LWJveC1mbGV4OjR9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtdGFibGUgLnZjLXRhYmxlLWNvbC01e2ZsZXg6NTstd2Via2l0LWJveC1mbGV4OjV9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtdGFibGUgLnZjLXRhYmxlLWNvbC02e2ZsZXg6Njstd2Via2l0LWJveC1mbGV4OjZ9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtdGFibGUgLnZjLXRhYmxlLXJvdy1lcnJvcntib3JkZXItY29sb3I6I2Y0YTBhYjtiYWNrZ3JvdW5kLWNvbG9yOiNmZmU0ZTF9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtdGFibGUgLnZjLXRhYmxlLXJvdy1lcnJvciAudmMtdGFibGUtY29se2NvbG9yOiNkYzE0M2M7Ym9yZGVyLWNvbG9yOiNmNGEwYWJ9I19fdmNvbnNvbGUgLnZjLWxvZ2JveCAudmMtdGFibGUgLnZjLXRhYmxlLWNvbC10aXRsZXtmb250LXdlaWdodDo3MDB9I19fdmNvbnNvbGUgLnZjLWxvZ2JveC52Yy1hY3RpdmVke2Rpc3BsYXk6YmxvY2t9I19fdmNvbnNvbGUgLnZjLXRvb2xiYXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgI2Q5ZDlkOTtsaW5lLWhlaWdodDozZW07cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7ZGlzcGxheTpmbGV4O2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZmxleC1kaXJlY3Rpb246cm93Oy13ZWJraXQtYm94LWRpcmVjdGlvbjpyb3d9I19fdmNvbnNvbGUgLnZjLXRvb2xiYXIgLnZjLXRvb2x7ZGlzcGxheTpub25lO3RleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiMwMDA7d2lkdGg6NTAlO2ZsZXg6MTstd2Via2l0LWJveC1mbGV4OjE7dGV4dC1hbGlnbjpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmV9I19fdmNvbnNvbGUgLnZjLXRvb2xiYXIgLnZjLXRvb2wudmMtZ2xvYmFsLXRvb2wsI19fdmNvbnNvbGUgLnZjLXRvb2xiYXIgLnZjLXRvb2wudmMtdG9nZ2xle2Rpc3BsYXk6YmxvY2t9I19fdmNvbnNvbGUgLnZjLXRvb2xiYXIgLnZjLXRvb2w6YWN0aXZle2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTUpfSNfX3Zjb25zb2xlIC52Yy10b29sYmFyIC52Yy10b29sOmFmdGVye2NvbnRlbnQ6XCIgXCI7cG9zaXRpb246YWJzb2x1dGU7dG9wOi41Mzg0NjE1NGVtO2JvdHRvbTouNTM4NDYxNTRlbTtyaWdodDowO2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjZDlkOWQ5fSNfX3Zjb25zb2xlIC52Yy10b29sYmFyIC52Yy10b29sLWxhc3Q6YWZ0ZXJ7Ym9yZGVyOm5vbmV9I19fdmNvbnNvbGUudmMtdG9nZ2xlIC52Yy1zd2l0Y2h7ZGlzcGxheTpub25lfSNfX3Zjb25zb2xlLnZjLXRvZ2dsZSAudmMtbWFza3tiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjYpO2Rpc3BsYXk6YmxvY2t9I19fdmNvbnNvbGUudmMtdG9nZ2xlIC52Yy1wYW5lbHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKX0nLFwiXCJdKX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgZT1bXTtyZXR1cm4gZS50b1N0cmluZz1mdW5jdGlvbigpe2Zvcih2YXIgZT1bXSx0PTA7dDx0aGlzLmxlbmd0aDt0Kyspe3ZhciBvPXRoaXNbdF07b1syXT9lLnB1c2goXCJAbWVkaWEgXCIrb1syXStcIntcIitvWzFdK1wifVwiKTplLnB1c2gob1sxXSl9cmV0dXJuIGUuam9pbihcIlwiKX0sZS5pPWZ1bmN0aW9uKHQsbyl7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PVtbbnVsbCx0LFwiXCJdXSk7Zm9yKHZhciBuPXt9LGk9MDtpPHRoaXMubGVuZ3RoO2krKyl7dmFyIGE9dGhpc1tpXVswXTtcIm51bWJlclwiPT10eXBlb2YgYSYmKG5bYV09ITApfWZvcihpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciByPXRbaV07XCJudW1iZXJcIj09dHlwZW9mIHJbMF0mJm5bclswXV18fChvJiYhclsyXT9yWzJdPW86byYmKHJbMl09XCIoXCIrclsyXStcIikgYW5kIChcIitvK1wiKVwiKSxlLnB1c2gocikpfX0sZX19LGZ1bmN0aW9uKGUsdCxvKXtmdW5jdGlvbiBuKGUsdCl7Zm9yKHZhciBvPTA7bzxlLmxlbmd0aDtvKyspe3ZhciBuPWVbb10saT1mW24uaWRdO2lmKGkpe2kucmVmcysrO2Zvcih2YXIgYT0wO2E8aS5wYXJ0cy5sZW5ndGg7YSsrKWkucGFydHNbYV0obi5wYXJ0c1thXSk7Zm9yKDthPG4ucGFydHMubGVuZ3RoO2ErKylpLnBhcnRzLnB1c2gocyhuLnBhcnRzW2FdLHQpKX1lbHNle2Zvcih2YXIgcj1bXSxhPTA7YTxuLnBhcnRzLmxlbmd0aDthKyspci5wdXNoKHMobi5wYXJ0c1thXSx0KSk7ZltuLmlkXT17aWQ6bi5pZCxyZWZzOjEscGFydHM6cn19fX1mdW5jdGlvbiBpKGUpe2Zvcih2YXIgdD1bXSxvPXt9LG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIGk9ZVtuXSxhPWlbMF0scj1pWzFdLGw9aVsyXSxjPWlbM10scz17Y3NzOnIsbWVkaWE6bCxzb3VyY2VNYXA6Y307b1thXT9vW2FdLnBhcnRzLnB1c2gocyk6dC5wdXNoKG9bYV09e2lkOmEscGFydHM6W3NdfSl9cmV0dXJuIHR9ZnVuY3Rpb24gYShlLHQpe3ZhciBvPWcoKSxuPXlbeS5sZW5ndGgtMV07aWYoXCJ0b3BcIj09PWUuaW5zZXJ0QXQpbj9uLm5leHRTaWJsaW5nP28uaW5zZXJ0QmVmb3JlKHQsbi5uZXh0U2libGluZyk6by5hcHBlbmRDaGlsZCh0KTpvLmluc2VydEJlZm9yZSh0LG8uZmlyc3RDaGlsZCkseS5wdXNoKHQpO2Vsc2V7aWYoXCJib3R0b21cIiE9PWUuaW5zZXJ0QXQpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO28uYXBwZW5kQ2hpbGQodCl9fWZ1bmN0aW9uIHIoZSl7ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpO3ZhciB0PXkuaW5kZXhPZihlKTt0Pj0wJiZ5LnNwbGljZSh0LDEpfWZ1bmN0aW9uIGwoZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3JldHVybiB0LnR5cGU9XCJ0ZXh0L2Nzc1wiLGEoZSx0KSx0fWZ1bmN0aW9uIGMoZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7cmV0dXJuIHQucmVsPVwic3R5bGVzaGVldFwiLGEoZSx0KSx0fWZ1bmN0aW9uIHMoZSx0KXt2YXIgbyxuLGk7aWYodC5zaW5nbGV0b24pe3ZhciBhPW0rKztvPWJ8fChiPWwodCkpLG49ZC5iaW5kKG51bGwsbyxhLCExKSxpPWQuYmluZChudWxsLG8sYSwhMCl9ZWxzZSBlLnNvdXJjZU1hcCYmXCJmdW5jdGlvblwiPT10eXBlb2YgVVJMJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBCbG9iJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hPyhvPWModCksbj12LmJpbmQobnVsbCxvKSxpPWZ1bmN0aW9uKCl7cihvKSxvLmhyZWYmJlVSTC5yZXZva2VPYmplY3RVUkwoby5ocmVmKX0pOihvPWwodCksbj11LmJpbmQobnVsbCxvKSxpPWZ1bmN0aW9uKCl7cihvKX0pO3JldHVybiBuKGUpLGZ1bmN0aW9uKHQpe2lmKHQpe2lmKHQuY3NzPT09ZS5jc3MmJnQubWVkaWE9PT1lLm1lZGlhJiZ0LnNvdXJjZU1hcD09PWUuc291cmNlTWFwKXJldHVybjtuKGU9dCl9ZWxzZSBpKCl9fWZ1bmN0aW9uIGQoZSx0LG8sbil7dmFyIGk9bz9cIlwiOm4uY3NzO2lmKGUuc3R5bGVTaGVldCllLnN0eWxlU2hlZXQuY3NzVGV4dD1fKHQsaSk7ZWxzZXt2YXIgYT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpKSxyPWUuY2hpbGROb2RlcztyW3RdJiZlLnJlbW92ZUNoaWxkKHJbdF0pLHIubGVuZ3RoP2UuaW5zZXJ0QmVmb3JlKGEsclt0XSk6ZS5hcHBlbmRDaGlsZChhKX19ZnVuY3Rpb24gdShlLHQpe3ZhciBvPXQuY3NzLG49dC5tZWRpYTtpZihuJiZlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsbiksZS5zdHlsZVNoZWV0KWUuc3R5bGVTaGVldC5jc3NUZXh0PW87ZWxzZXtmb3IoO2UuZmlyc3RDaGlsZDspZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpO2UuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobykpfX1mdW5jdGlvbiB2KGUsdCl7dmFyIG89dC5jc3Msbj10LnNvdXJjZU1hcDtuJiYobys9XCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpK1wiICovXCIpO3ZhciBpPW5ldyBCbG9iKFtvXSx7dHlwZTpcInRleHQvY3NzXCJcclxufSksYT1lLmhyZWY7ZS5ocmVmPVVSTC5jcmVhdGVPYmplY3RVUkwoaSksYSYmVVJMLnJldm9rZU9iamVjdFVSTChhKX12YXIgZj17fSxwPWZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBmdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiB0JiYodD1lLmFwcGx5KHRoaXMsYXJndW1lbnRzKSksdH19LGg9cChmdW5jdGlvbigpe3JldHVybi9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpfSksZz1wKGZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50LmhlYWR8fGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXX0pLGI9bnVsbCxtPTAseT1bXTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXt0PXR8fHt9LFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0LnNpbmdsZXRvbiYmKHQuc2luZ2xldG9uPWgoKSksXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQuaW5zZXJ0QXQmJih0Lmluc2VydEF0PVwiYm90dG9tXCIpO3ZhciBvPWkoZSk7cmV0dXJuIG4obyx0KSxmdW5jdGlvbihlKXtmb3IodmFyIGE9W10scj0wO3I8by5sZW5ndGg7cisrKXt2YXIgbD1vW3JdLGM9ZltsLmlkXTtjLnJlZnMtLSxhLnB1c2goYyl9aWYoZSl7dmFyIHM9aShlKTtuKHMsdCl9Zm9yKHZhciByPTA7cjxhLmxlbmd0aDtyKyspe3ZhciBjPWFbcl07aWYoMD09PWMucmVmcyl7Zm9yKHZhciBkPTA7ZDxjLnBhcnRzLmxlbmd0aDtkKyspYy5wYXJ0c1tkXSgpO2RlbGV0ZSBmW2MuaWRdfX19fTt2YXIgXz1mdW5jdGlvbigpe3ZhciBlPVtdO3JldHVybiBmdW5jdGlvbih0LG8pe3JldHVybiBlW3RdPW8sZS5maWx0ZXIoQm9vbGVhbikuam9pbihcIlxcblwiKX19KCl9LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPSc8ZGl2IGlkPVwiX192Y29uc29sZVwiIGNsYXNzPVwiXCI+XFxuICA8ZGl2IGNsYXNzPVwidmMtc3dpdGNoXCI+dkNvbnNvbGU8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XCJ2Yy1tYXNrXCI+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XCJ2Yy1wYW5lbFwiPlxcbiAgICA8ZGl2IGNsYXNzPVwidmMtdGFiYmFyXCI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVwidmMtdG9wYmFyXCI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVwidmMtY29udGVudFwiPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cInZjLXRvb2xiYXJcIj5cXG4gICAgICA8YSBjbGFzcz1cInZjLXRvb2wgdmMtZ2xvYmFsLXRvb2wgdmMtdG9vbC1sYXN0IHZjLWhpZGVcIj5IaWRlPC9hPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2Pid9LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPSc8YSBjbGFzcz1cInZjLXRhYlwiIGRhdGEtdGFiPVwie3tpZH19XCIgaWQ9XCJfX3ZjX3RhYl97e2lkfX1cIj57e25hbWV9fTwvYT4nfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz0nPGRpdiBjbGFzcz1cInZjLWxvZ2JveFwiIGlkPVwiX192Y19sb2dfe3tpZH19XCI+XFxuICBcXG48L2Rpdj4nfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz0nPGEgY2xhc3M9XCJ2Yy10b3B0YWIgdmMtdG9wYmFyLXt7cGx1Z2luSUR9fXt7aWYgKGNsYXNzTmFtZSl9fSB7e2NsYXNzTmFtZX19e3svaWZ9fVwiPnt7bmFtZX19PC9hPid9LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPSc8YSBjbGFzcz1cInZjLXRvb2wgdmMtdG9vbC17e3BsdWdpbklEfX1cIj57e25hbWV9fTwvYT4nfSxmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtpZihlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHQ9e307aWYobnVsbCE9ZSlmb3IodmFyIG8gaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxvKSYmKHRbb109ZVtvXSk7cmV0dXJuIHRbXCJkZWZhdWx0XCJdPWUsdH1mdW5jdGlvbiBpKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19ZnVuY3Rpb24gYShlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gcihlLHQpe2lmKCFlKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZTp0fWZ1bmN0aW9uIGwoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgdCk7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KTplLl9fcHJvdG9fXz10KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG89MDtvPHQubGVuZ3RoO28rKyl7dmFyIG49dFtvXTtuLmVudW1lcmFibGU9bi5lbnVtZXJhYmxlfHwhMSxuLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBuJiYobi53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbi5rZXksbil9fXJldHVybiBmdW5jdGlvbih0LG8sbil7cmV0dXJuIG8mJmUodC5wcm90b3R5cGUsbyksbiYmZSh0LG4pLHR9fSgpLHM9ZnVuY3Rpb24gdyhlLHQsbyl7bnVsbD09PWUmJihlPUZ1bmN0aW9uLnByb3RvdHlwZSk7dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpO2lmKHZvaWQgMD09PW4pe3ZhciBpPU9iamVjdC5nZXRQcm90b3R5cGVPZihlKTtyZXR1cm4gbnVsbD09PWk/dm9pZCAwOncoaSx0LG8pfWlmKFwidmFsdWVcImluIG4pcmV0dXJuIG4udmFsdWU7dmFyIGE9bi5nZXQ7aWYodm9pZCAwIT09YSlyZXR1cm4gYS5jYWxsKG8pfSxkPW8oNSksdT1pKGQpLHY9byg0KSxmPW4odikscD1vKDE3KSxoPWkocCksZz1vKDIyKSxiPWkoZyksbT1vKDIzKSx5PWkobSksXz1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KCl7dmFyIGU7YSh0aGlzLHQpO2Zvcih2YXIgbz1hcmd1bWVudHMubGVuZ3RoLG49QXJyYXkobyksaT0wO28+aTtpKyspbltpXT1hcmd1bWVudHNbaV07dmFyIGw9cih0aGlzLChlPU9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbC5hcHBseShlLFt0aGlzXS5jb25jYXQobikpKTtyZXR1cm4gbC50cGxUYWJib3g9YltcImRlZmF1bHRcIl0sbC53aW5kb3dPbkVycm9yPW51bGwsbH1yZXR1cm4gbCh0LGUpLGModCxbe2tleTpcIm9uUmVhZHlcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7cyhPYmplY3QuZ2V0UHJvdG90eXBlT2YodC5wcm90b3R5cGUpLFwib25SZWFkeVwiLHRoaXMpLmNhbGwodGhpcyksdVtcImRlZmF1bHRcIl0uYmluZCh1W1wiZGVmYXVsdFwiXS5vbmUoXCIudmMtY21kXCIsdGhpcy4kdGFiYm94KSxcInN1Ym1pdFwiLGZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKTt2YXIgbz11W1wiZGVmYXVsdFwiXS5vbmUoXCIudmMtY21kLWlucHV0XCIsdC50YXJnZXQpLG49by52YWx1ZTtvLnZhbHVlPVwiXCIsXCJcIiE9PW4mJmUuZXZhbENvbW1hbmQobil9KTt2YXIgbz1cIlwiO28rPVwiaWYgKCEhd2luZG93KSB7XCIsbys9XCJ3aW5kb3cuX192Q29uc29sZV9jbWRfcmVzdWx0ID0gdW5kZWZpbmVkO1wiLG8rPVwid2luZG93Ll9fdkNvbnNvbGVfY21kX2Vycm9yID0gZmFsc2U7XCIsbys9XCJ9XCI7dmFyIG49ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIiksaT1cIlwiO24ubGVuZ3RoPjAmJihpPW5bMF0uZ2V0QXR0cmlidXRlKFwibm9uY2VcIil8fFwiXCIpO3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTQ1JJUFRcIik7YS5pbm5lckhUTUw9byxhLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsaSksZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGEpLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZChhKX19LHtrZXk6XCJtb2NrQ29uc29sZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cyhPYmplY3QuZ2V0UHJvdG90eXBlT2YodC5wcm90b3R5cGUpLFwibW9ja0NvbnNvbGVcIix0aGlzKS5jYWxsKHRoaXMpO3ZhciBlPXRoaXM7Zi5pc0Z1bmN0aW9uKHdpbmRvdy5vbmVycm9yKSYmKHRoaXMud2luZG93T25FcnJvcj13aW5kb3cub25lcnJvciksd2luZG93Lm9uZXJyb3I9ZnVuY3Rpb24odCxvLG4saSxhKXt2YXIgcj10O28mJihyKz1cIlxcblwiK28ucmVwbGFjZShsb2NhdGlvbi5vcmlnaW4sXCJcIikpLChufHxpKSYmKHIrPVwiOlwiK24rXCI6XCIraSk7dmFyIGw9ISFhJiYhIWEuc3RhY2ssYz1sJiZhLnN0YWNrLnRvU3RyaW5nKCl8fFwiXCI7ZS5wcmludExvZyh7bG9nVHlwZTpcImVycm9yXCIsbG9nczpbcixjXSxub09yaWdpbjohMH0pLGYuaXNGdW5jdGlvbihlLndpbmRvd09uRXJyb3IpJiZlLndpbmRvd09uRXJyb3IuY2FsbCh3aW5kb3csdCxvLG4saSxhKX19fSx7a2V5OlwiZXZhbENvbW1hbmRcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnByaW50TG9nKHtsb2dUeXBlOlwibG9nXCIsY29udGVudDp1W1wiZGVmYXVsdFwiXS5yZW5kZXIoeVtcImRlZmF1bHRcIl0se2NvbnRlbnQ6ZSx0eXBlOlwiaW5wdXRcIn0pLG5vTWV0YTohMCxzdHlsZTpcIlwifSk7dmFyIHQ9XCJcIjt0Kz1cInRyeSB7XFxuXCIsdCs9XCJ3aW5kb3cuX192Q29uc29sZV9jbWRfcmVzdWx0ID0gKGZ1bmN0aW9uKCkge1xcblwiLHQrPVwicmV0dXJuIFwiK2UrXCI7XFxuXCIsdCs9XCJ9KSgpO1xcblwiLHQrPVwid2luZG93Ll9fdkNvbnNvbGVfY21kX2Vycm9yID0gZmFsc2U7XFxuXCIsdCs9XCJ9IGNhdGNoIChlKSB7XFxuXCIsdCs9XCJ3aW5kb3cuX192Q29uc29sZV9jbWRfcmVzdWx0ID0gZS5tZXNzYWdlO1xcblwiLHQrPVwid2luZG93Ll9fdkNvbnNvbGVfY21kX2Vycm9yID0gdHJ1ZTtcXG5cIix0Kz1cIn1cIjt2YXIgbz1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKSxuPVwiXCI7by5sZW5ndGg+MCYmKG49b1swXS5nZXRBdHRyaWJ1dGUoXCJub25jZVwiKXx8XCJcIik7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNDUklQVFwiKTtpLmlubmVySFRNTD10LGkuc2V0QXR0cmlidXRlKFwibm9uY2VcIixuKSxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaSk7dmFyIGE9d2luZG93Ll9fdkNvbnNvbGVfY21kX3Jlc3VsdCxyPXdpbmRvdy5fX3ZDb25zb2xlX2NtZF9lcnJvcjtpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaSksMD09cil7dmFyIGw9dm9pZCAwO2YuaXNBcnJheShhKXx8Zi5pc09iamVjdChhKT9sPXRoaXMuZ2V0Rm9sZGVkTGluZShhKTooZi5pc051bGwoYSk/YT1cIm51bGxcIjpmLmlzVW5kZWZpbmVkKGEpP2E9XCJ1bmRlZmluZWRcIjpmLmlzRnVuY3Rpb24oYSk/YT1cImZ1bmN0aW9uKClcIjpmLmlzU3RyaW5nKGEpJiYoYT0nXCInK2ErJ1wiJyksbD11W1wiZGVmYXVsdFwiXS5yZW5kZXIoeVtcImRlZmF1bHRcIl0se2NvbnRlbnQ6YSx0eXBlOlwib3V0cHV0XCJ9KSksdGhpcy5wcmludExvZyh7bG9nVHlwZTpcImxvZ1wiLGNvbnRlbnQ6bCxub01ldGE6ITAsc3R5bGU6XCJcIn0pfWVsc2UgdGhpcy5wcmludExvZyh7bG9nVHlwZTpcImVycm9yXCIsbG9nczpbYV0sbm9NZXRhOiEwLHN0eWxlOlwiXCJ9KX19XSksdH0oaFtcImRlZmF1bHRcIl0pO3RbXCJkZWZhdWx0XCJdPV8sZS5leHBvcnRzPXRbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fWZ1bmN0aW9uIGkoZSl7aWYoZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciB0PXt9O2lmKG51bGwhPWUpZm9yKHZhciBvIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0W1wiZGVmYXVsdFwiXT1lLHR9ZnVuY3Rpb24gYShlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gcihlLHQpe2lmKCFlKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZTp0fWZ1bmN0aW9uIGwoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgdCk7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KTplLl9fcHJvdG9fXz10KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sP1wic3ltYm9sXCI6dHlwZW9mIGV9LHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciBuPXRbb107bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX1yZXR1cm4gZnVuY3Rpb24odCxvLG4pe3JldHVybiBvJiZlKHQucHJvdG90eXBlLG8pLG4mJmUodCxuKSx0fX0oKSxkPW8oNCksdT1pKGQpLHY9byg1KSxmPW4odikscD1vKDE4KSxoPW4ocCksZz1vKDE5KSxiPW4oZyksbT1vKDIwKSx5PW4obSksXz1vKDIxKSx3PW4oXykseD0xZTMsaz1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KCl7dmFyIGU7YSh0aGlzLHQpO2Zvcih2YXIgbz1hcmd1bWVudHMubGVuZ3RoLG49QXJyYXkobyksaT0wO28+aTtpKyspbltpXT1hcmd1bWVudHNbaV07dmFyIGw9cih0aGlzLChlPU9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbC5hcHBseShlLFt0aGlzXS5jb25jYXQobikpKTtyZXR1cm4gbC50cGxUYWJib3g9XCJcIixsLmFsbG93VW5mb3JtYXR0ZWRMb2c9ITAsbC5pc1JlYWR5PSExLGwuaXNTaG93PSExLGwuJHRhYmJveD1udWxsLGwuY29uc29sZT17fSxsLmxvZ0xpc3Q9W10sbC5pc0luQm90dG9tPSEwLGwubWF4TG9nTnVtYmVyPXgsbC5sb2dOdW1iZXI9MCxsLm1vY2tDb25zb2xlKCksbH1yZXR1cm4gbCh0LGUpLHModCxbe2tleTpcIm9uSW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy4kdGFiYm94PWZbXCJkZWZhdWx0XCJdLnJlbmRlcih0aGlzLnRwbFRhYmJveCx7fSksdGhpcy51cGRhdGVNYXhMb2dOdW1iZXIoKX19LHtrZXk6XCJvblJlbmRlclRhYlwiLHZhbHVlOmZ1bmN0aW9uKGUpe2UodGhpcy4kdGFiYm94KX19LHtrZXk6XCJvbkFkZFRvcEJhclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD10aGlzLG89W1wiQWxsXCIsXCJMb2dcIixcIkluZm9cIixcIldhcm5cIixcIkVycm9yXCJdLG49W10saT0wO2k8by5sZW5ndGg7aSsrKW4ucHVzaCh7bmFtZTpvW2ldLGRhdGE6e3R5cGU6b1tpXS50b0xvd2VyQ2FzZSgpfSxjbGFzc05hbWU6XCJcIixvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIGZbXCJkZWZhdWx0XCJdLmhhc0NsYXNzKHRoaXMsXCJ2Yy1hY3RpdmVkXCIpPyExOnZvaWQgdC5zaG93TG9nVHlwZSh0aGlzLmRhdGFzZXQudHlwZXx8XCJhbGxcIil9fSk7blswXS5jbGFzc05hbWU9XCJ2Yy1hY3RpdmVkXCIsZShuKX19LHtrZXk6XCJvbkFkZFRvb2xcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLG89W3tuYW1lOlwiQ2xlYXJcIixnbG9iYWw6ITEsb25DbGljazpmdW5jdGlvbigpe3QuY2xlYXJMb2coKSx0LnZDb25zb2xlLnRyaWdnZXJFdmVudChcImNsZWFyTG9nXCIpfX1dO2Uobyl9fSx7a2V5Olwib25SZWFkeVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLmlzUmVhZHk9ITA7dmFyIHQ9ZltcImRlZmF1bHRcIl0uYWxsKFwiLnZjLXN1YnRhYlwiLGUuJHRhYmJveCk7ZltcImRlZmF1bHRcIl0uYmluZCh0LFwiY2xpY2tcIixmdW5jdGlvbihvKXtpZihvLnByZXZlbnREZWZhdWx0KCksZltcImRlZmF1bHRcIl0uaGFzQ2xhc3ModGhpcyxcInZjLWFjdGl2ZWRcIikpcmV0dXJuITE7ZltcImRlZmF1bHRcIl0ucmVtb3ZlQ2xhc3ModCxcInZjLWFjdGl2ZWRcIiksZltcImRlZmF1bHRcIl0uYWRkQ2xhc3ModGhpcyxcInZjLWFjdGl2ZWRcIik7dmFyIG49dGhpcy5kYXRhc2V0LnR5cGUsaT1mW1wiZGVmYXVsdFwiXS5vbmUoXCIudmMtbG9nXCIsZS4kdGFiYm94KTtmW1wiZGVmYXVsdFwiXS5yZW1vdmVDbGFzcyhpLFwidmMtbG9nLXBhcnRseS1sb2dcIiksZltcImRlZmF1bHRcIl0ucmVtb3ZlQ2xhc3MoaSxcInZjLWxvZy1wYXJ0bHktaW5mb1wiKSxmW1wiZGVmYXVsdFwiXS5yZW1vdmVDbGFzcyhpLFwidmMtbG9nLXBhcnRseS13YXJuXCIpLGZbXCJkZWZhdWx0XCJdLnJlbW92ZUNsYXNzKGksXCJ2Yy1sb2ctcGFydGx5LWVycm9yXCIpLFwiYWxsXCI9PW4/ZltcImRlZmF1bHRcIl0ucmVtb3ZlQ2xhc3MoaSxcInZjLWxvZy1wYXJ0bHlcIik6KGZbXCJkZWZhdWx0XCJdLmFkZENsYXNzKGksXCJ2Yy1sb2ctcGFydGx5XCIpLGZbXCJkZWZhdWx0XCJdLmFkZENsYXNzKGksXCJ2Yy1sb2ctcGFydGx5LVwiK24pKX0pO3ZhciBvPWZbXCJkZWZhdWx0XCJdLm9uZShcIi52Yy1jb250ZW50XCIpO2ZbXCJkZWZhdWx0XCJdLmJpbmQobyxcInNjcm9sbFwiLGZ1bmN0aW9uKHQpe2UuaXNTaG93JiYoby5zY3JvbGxUb3Arby5vZmZzZXRIZWlnaHQ+PW8uc2Nyb2xsSGVpZ2h0P2UuaXNJbkJvdHRvbT0hMDplLmlzSW5Cb3R0b209ITEpfSk7Zm9yKHZhciBuPTA7bjxlLmxvZ0xpc3QubGVuZ3RoO24rKyllLnByaW50TG9nKGUubG9nTGlzdFtuXSk7ZS5sb2dMaXN0PVtdfX0se2tleTpcIm9uUmVtb3ZlXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cuY29uc29sZS5sb2c9dGhpcy5jb25zb2xlLmxvZyx3aW5kb3cuY29uc29sZS5pbmZvPXRoaXMuY29uc29sZS5pbmZvLHdpbmRvdy5jb25zb2xlLndhcm49dGhpcy5jb25zb2xlLndhcm4sd2luZG93LmNvbnNvbGUuZGVidWc9dGhpcy5jb25zb2xlLmRlYnVnLHdpbmRvdy5jb25zb2xlLmVycm9yPXRoaXMuY29uc29sZS5lcnJvcix3aW5kb3cuY29uc29sZS50aW1lPXRoaXMuY29uc29sZS50aW1lLHdpbmRvdy5jb25zb2xlLnRpbWVFbmQ9dGhpcy5jb25zb2xlLnRpbWVFbmQsd2luZG93LmNvbnNvbGUuY2xlYXI9dGhpcy5jb25zb2xlLmNsZWFyLHRoaXMuY29uc29sZT17fX19LHtrZXk6XCJvblNob3dcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaXNTaG93PSEwLDE9PXRoaXMuaXNJbkJvdHRvbSYmdGhpcy5hdXRvU2Nyb2xsVG9Cb3R0b20oKX19LHtrZXk6XCJvbkhpZGVcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaXNTaG93PSExfX0se2tleTpcIm9uU2hvd0NvbnNvbGVcIix2YWx1ZTpmdW5jdGlvbigpezE9PXRoaXMuaXNJbkJvdHRvbSYmdGhpcy5hdXRvU2Nyb2xsVG9Cb3R0b20oKX19LHtrZXk6XCJvblVwZGF0ZU9wdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy52Q29uc29sZS5vcHRpb24ubWF4TG9nTnVtYmVyIT10aGlzLm1heExvZ051bWJlciYmKHRoaXMudXBkYXRlTWF4TG9nTnVtYmVyKCksdGhpcy5saW1pdE1heExvZ3MoKSl9fSx7a2V5OlwidXBkYXRlTWF4TG9nTnVtYmVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLm1heExvZ051bWJlcj10aGlzLnZDb25zb2xlLm9wdGlvbi5tYXhMb2dOdW1iZXJ8fHgsdGhpcy5tYXhMb2dOdW1iZXI9TWF0aC5tYXgoMSx0aGlzLm1heExvZ051bWJlcil9fSx7a2V5OlwibGltaXRNYXhMb2dzXCIsdmFsdWU6ZnVuY3Rpb24oKXtpZih0aGlzLmlzUmVhZHkpZm9yKDt0aGlzLmxvZ051bWJlcj50aGlzLm1heExvZ051bWJlcjspe3ZhciBlPWZbXCJkZWZhdWx0XCJdLm9uZShcIi52Yy1pdGVtXCIsdGhpcy4kdGFiYm94KTtpZighZSlicmVhaztlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksdGhpcy5sb2dOdW1iZXItLX19fSx7a2V5Olwic2hvd0xvZ1R5cGVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1mW1wiZGVmYXVsdFwiXS5vbmUoXCIudmMtbG9nXCIsdGhpcy4kdGFiYm94KTtmW1wiZGVmYXVsdFwiXS5yZW1vdmVDbGFzcyh0LFwidmMtbG9nLXBhcnRseS1sb2dcIiksZltcImRlZmF1bHRcIl0ucmVtb3ZlQ2xhc3ModCxcInZjLWxvZy1wYXJ0bHktaW5mb1wiKSxmW1wiZGVmYXVsdFwiXS5yZW1vdmVDbGFzcyh0LFwidmMtbG9nLXBhcnRseS13YXJuXCIpLGZbXCJkZWZhdWx0XCJdLnJlbW92ZUNsYXNzKHQsXCJ2Yy1sb2ctcGFydGx5LWVycm9yXCIpLFwiYWxsXCI9PWU/ZltcImRlZmF1bHRcIl0ucmVtb3ZlQ2xhc3ModCxcInZjLWxvZy1wYXJ0bHlcIik6KGZbXCJkZWZhdWx0XCJdLmFkZENsYXNzKHQsXCJ2Yy1sb2ctcGFydGx5XCIpLGZbXCJkZWZhdWx0XCJdLmFkZENsYXNzKHQsXCJ2Yy1sb2ctcGFydGx5LVwiK2UpKX19LHtrZXk6XCJhdXRvU2Nyb2xsVG9Cb3R0b21cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMudkNvbnNvbGUub3B0aW9uLmRpc2FibGVMb2dTY3JvbGxpbmd8fHRoaXMuc2Nyb2xsVG9Cb3R0b20oKX19LHtrZXk6XCJzY3JvbGxUb0JvdHRvbVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9ZltcImRlZmF1bHRcIl0ub25lKFwiLnZjLWNvbnRlbnRcIik7ZSYmKGUuc2Nyb2xsVG9wPWUuc2Nyb2xsSGVpZ2h0LWUub2Zmc2V0SGVpZ2h0KX19LHtrZXk6XCJtb2NrQ29uc29sZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PXRoaXMsbz1bXCJsb2dcIixcImluZm9cIixcIndhcm5cIixcImRlYnVnXCIsXCJlcnJvclwiXTt3aW5kb3cuY29uc29sZT8oby5tYXAoZnVuY3Rpb24oZSl7dC5jb25zb2xlW2VdPXdpbmRvdy5jb25zb2xlW2VdfSksdC5jb25zb2xlLnRpbWU9d2luZG93LmNvbnNvbGUudGltZSx0LmNvbnNvbGUudGltZUVuZD13aW5kb3cuY29uc29sZS50aW1lRW5kLHQuY29uc29sZS5jbGVhcj13aW5kb3cuY29uc29sZS5jbGVhcik6d2luZG93LmNvbnNvbGU9e30sby5tYXAoZnVuY3Rpb24odCl7d2luZG93LmNvbnNvbGVbdF09ZnVuY3Rpb24oKXtmb3IodmFyIG89YXJndW1lbnRzLmxlbmd0aCxuPUFycmF5KG8pLGk9MDtvPmk7aSsrKW5baV09YXJndW1lbnRzW2ldO2UucHJpbnRMb2coe2xvZ1R5cGU6dCxsb2dzOm59KX19KTt2YXIgbj17fTt3aW5kb3cuY29uc29sZS50aW1lPWZ1bmN0aW9uKGUpe25bZV09RGF0ZS5ub3coKX0sd2luZG93LmNvbnNvbGUudGltZUVuZD1mdW5jdGlvbihlKXt2YXIgdD1uW2VdO3Q/KGNvbnNvbGUubG9nKGUrXCI6XCIsRGF0ZS5ub3coKS10K1wibXNcIiksZGVsZXRlIG5bZV0pOmNvbnNvbGUubG9nKGUrXCI6IDBtc1wiKX0sd2luZG93LmNvbnNvbGUuY2xlYXI9ZnVuY3Rpb24oKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCxvPUFycmF5KGUpLG49MDtlPm47bisrKW9bbl09YXJndW1lbnRzW25dO3QuY2xlYXJMb2coKSx0LmNvbnNvbGUuY2xlYXIuYXBwbHkod2luZG93LmNvbnNvbGUsbyl9fX0se2tleTpcImNsZWFyTG9nXCIsdmFsdWU6ZnVuY3Rpb24oKXtmW1wiZGVmYXVsdFwiXS5vbmUoXCIudmMtbG9nXCIsdGhpcy4kdGFiYm94KS5pbm5lckhUTUw9XCJcIn19LHtrZXk6XCJwcmludE9yaWdpbkxvZ1wiLHZhbHVlOmZ1bmN0aW9uKGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuY29uc29sZVtlLmxvZ1R5cGVdJiZ0aGlzLmNvbnNvbGVbZS5sb2dUeXBlXS5hcHBseSh3aW5kb3cuY29uc29sZSxlLmxvZ3MpfX0se2tleTpcInByaW50TG9nXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5sb2dzfHxbXTtpZih0Lmxlbmd0aHx8ZS5jb250ZW50KXt0PVtdLnNsaWNlLmNhbGwodHx8W10pO3ZhciBvPSEwLG49L15cXFsoXFx3KylcXF0kL2ksaT1cIlwiO2lmKHUuaXNTdHJpbmcodFswXSkpe3ZhciBhPXRbMF0ubWF0Y2gobik7bnVsbCE9PWEmJmEubGVuZ3RoPjAmJihpPWFbMV0udG9Mb3dlckNhc2UoKSl9aWYoaT9vPWk9PXRoaXMuaWQ6MD09dGhpcy5hbGxvd1VuZm9ybWF0dGVkTG9nJiYobz0hMSksIW8pcmV0dXJuIHZvaWQoZS5ub09yaWdpbnx8dGhpcy5wcmludE9yaWdpbkxvZyhlKSk7aWYoZS5kYXRlfHwoZS5kYXRlPStuZXcgRGF0ZSksIXRoaXMuaXNSZWFkeSlyZXR1cm4gdm9pZCB0aGlzLmxvZ0xpc3QucHVzaChlKTtpZih1LmlzU3RyaW5nKHRbMF0pJiYodFswXT10WzBdLnJlcGxhY2UobixcIlwiKSxcIlwiPT09dFswXSYmdC5zaGlmdCgpKSwhZS5tZXRhKXt2YXIgcj11LmdldERhdGUoZS5kYXRlKTtlLm1ldGE9ci5ob3VyK1wiOlwiK3IubWludXRlK1wiOlwiK3Iuc2Vjb25kfWZvcih2YXIgbD1mW1wiZGVmYXVsdFwiXS5yZW5kZXIoYltcImRlZmF1bHRcIl0se2xvZ1R5cGU6ZS5sb2dUeXBlLG5vTWV0YTohIWUubm9NZXRhLG1ldGE6ZS5tZXRhLHN0eWxlOmUuc3R5bGV8fFwiXCJ9KSxzPWZbXCJkZWZhdWx0XCJdLm9uZShcIi52Yy1pdGVtLWNvbnRlbnRcIixsKSxkPTA7ZDx0Lmxlbmd0aDtkKyspe3ZhciB2PXZvaWQgMDt0cnl7aWYoXCJcIj09PXRbZF0pY29udGludWU7dj11LmlzRnVuY3Rpb24odFtkXSk/XCI8c3Bhbj4gXCIrdFtkXS50b1N0cmluZygpK1wiPC9zcGFuPlwiOnUuaXNPYmplY3QodFtkXSl8fHUuaXNBcnJheSh0W2RdKT90aGlzLmdldEZvbGRlZExpbmUodFtkXSk6XCI8c3Bhbj4gXCIrdS5odG1sRW5jb2RlKHRbZF0pLnJlcGxhY2UoL1xcbi9nLFwiPGJyLz5cIikrXCI8L3NwYW4+XCJ9Y2F0Y2gocCl7dj1cIjxzcGFuPiBbXCIrYyh0W2RdKStcIl08L3NwYW4+XCJ9diYmKFwic3RyaW5nXCI9PXR5cGVvZiB2P3MuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsdik6cy5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIix2KSl9dS5pc09iamVjdChlLmNvbnRlbnQpJiZzLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLGUuY29udGVudCksZltcImRlZmF1bHRcIl0ub25lKFwiLnZjLWxvZ1wiLHRoaXMuJHRhYmJveCkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsbCksdGhpcy5sb2dOdW1iZXIrKyx0aGlzLmxpbWl0TWF4TG9ncygpLHRoaXMuaXNJbkJvdHRvbSYmdGhpcy5hdXRvU2Nyb2xsVG9Cb3R0b20oKSxlLm5vT3JpZ2lufHx0aGlzLnByaW50T3JpZ2luTG9nKGUpfX19LHtrZXk6XCJnZXRGb2xkZWRMaW5lXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbz10aGlzO2lmKCF0KXt2YXIgbj11LkpTT05TdHJpbmdpZnkoZSksaT1uLnN1YnN0cigwLDI2KTt0PXUuZ2V0T2JqTmFtZShlKSxuLmxlbmd0aD4yNiYmKGkrPVwiLi4uXCIpLHQrPVwiIFwiK2l9dmFyIGE9ZltcImRlZmF1bHRcIl0ucmVuZGVyKHlbXCJkZWZhdWx0XCJdLHtvdXRlcjp0LGxpbmVUeXBlOlwib2JqXCJ9KTtyZXR1cm4gZltcImRlZmF1bHRcIl0uYmluZChmW1wiZGVmYXVsdFwiXS5vbmUoXCIudmMtZm9sZC1vdXRlclwiLGEpLFwiY2xpY2tcIixmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKSxmW1wiZGVmYXVsdFwiXS5oYXNDbGFzcyhhLFwidmMtdG9nZ2xlXCIpPyhmW1wiZGVmYXVsdFwiXS5yZW1vdmVDbGFzcyhhLFwidmMtdG9nZ2xlXCIpLGZbXCJkZWZhdWx0XCJdLnJlbW92ZUNsYXNzKGZbXCJkZWZhdWx0XCJdLm9uZShcIi52Yy1mb2xkLWlubmVyXCIsYSksXCJ2Yy10b2dnbGVcIiksZltcImRlZmF1bHRcIl0ucmVtb3ZlQ2xhc3MoZltcImRlZmF1bHRcIl0ub25lKFwiLnZjLWZvbGQtb3V0ZXJcIixhKSxcInZjLXRvZ2dsZVwiKSk6KGZbXCJkZWZhdWx0XCJdLmFkZENsYXNzKGEsXCJ2Yy10b2dnbGVcIiksZltcImRlZmF1bHRcIl0uYWRkQ2xhc3MoZltcImRlZmF1bHRcIl0ub25lKFwiLnZjLWZvbGQtaW5uZXJcIixhKSxcInZjLXRvZ2dsZVwiKSxmW1wiZGVmYXVsdFwiXS5hZGRDbGFzcyhmW1wiZGVmYXVsdFwiXS5vbmUoXCIudmMtZm9sZC1vdXRlclwiLGEpLFwidmMtdG9nZ2xlXCIpKTt2YXIgbj1mW1wiZGVmYXVsdFwiXS5vbmUoXCIudmMtZm9sZC1pbm5lclwiLGEpO2lmKDA9PW4uY2hpbGRyZW4ubGVuZ3RoJiZlKXtmb3IodmFyIGk9dS5nZXRPYmpBbGxLZXlzKGUpLHI9MDtyPGkubGVuZ3RoO3IrKyl7dmFyIGw9ZVtpW3JdXSxjPVwidW5kZWZpbmVkXCIscz1cIlwiO3UuaXNTdHJpbmcobCk/KGM9XCJzdHJpbmdcIixsPSdcIicrbCsnXCInKTp1LmlzTnVtYmVyKGwpP2M9XCJudW1iZXJcIjp1LmlzQm9vbGVhbihsKT9jPVwiYm9vbGVhblwiOnUuaXNOdWxsKGwpPyhjPVwibnVsbFwiLGw9XCJudWxsXCIpOnUuaXNVbmRlZmluZWQobCk/KGM9XCJ1bmRlZmluZWRcIixsPVwidW5kZWZpbmVkXCIpOnUuaXNGdW5jdGlvbihsKT8oYz1cImZ1bmN0aW9uXCIsbD1cImZ1bmN0aW9uKClcIik6dS5pc1N5bWJvbChsKSYmKGM9XCJzeW1ib2xcIik7dmFyIGQ9dm9pZCAwO2lmKHUuaXNBcnJheShsKSl7dmFyIHY9dS5nZXRPYmpOYW1lKGwpK1wiW1wiK2wubGVuZ3RoK1wiXVwiO2Q9by5nZXRGb2xkZWRMaW5lKGwsZltcImRlZmF1bHRcIl0ucmVuZGVyKHdbXCJkZWZhdWx0XCJdLHtrZXk6aVtyXSxrZXlUeXBlOnMsdmFsdWU6dix2YWx1ZVR5cGU6XCJhcnJheVwifSwhMCkpfWVsc2UgaWYodS5pc09iamVjdChsKSl7dmFyIHA9dS5nZXRPYmpOYW1lKGwpO2Q9by5nZXRGb2xkZWRMaW5lKGwsZltcImRlZmF1bHRcIl0ucmVuZGVyKHdbXCJkZWZhdWx0XCJdLHtrZXk6dS5odG1sRW5jb2RlKGlbcl0pLGtleVR5cGU6cyx2YWx1ZTpwLHZhbHVlVHlwZTpcIm9iamVjdFwifSwhMCkpfWVsc2V7ZS5oYXNPd25Qcm9wZXJ0eSYmIWUuaGFzT3duUHJvcGVydHkoaVtyXSkmJihzPVwicHJpdmF0ZVwiKTt2YXIgaD17bGluZVR5cGU6XCJrdlwiLGtleTp1Lmh0bWxFbmNvZGUoaVtyXSksa2V5VHlwZTpzLHZhbHVlOnUuaHRtbEVuY29kZShsKSx2YWx1ZVR5cGU6Y307ZD1mW1wiZGVmYXVsdFwiXS5yZW5kZXIoeVtcImRlZmF1bHRcIl0saCl9bi5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIixkKX1pZih1LmlzT2JqZWN0KGUpKXt2YXIgZz1lLl9fcHJvdG9fXyxiPXZvaWQgMDtiPXUuaXNPYmplY3QoZyk/by5nZXRGb2xkZWRMaW5lKGcsZltcImRlZmF1bHRcIl0ucmVuZGVyKHdbXCJkZWZhdWx0XCJdLHtrZXk6XCJfX3Byb3RvX19cIixrZXlUeXBlOlwicHJpdmF0ZVwiLHZhbHVlOnUuZ2V0T2JqTmFtZShnKSx2YWx1ZVR5cGU6XCJvYmplY3RcIn0sITApKTpmW1wiZGVmYXVsdFwiXS5yZW5kZXIod1tcImRlZmF1bHRcIl0se2tleTpcIl9fcHJvdG9fX1wiLGtleVR5cGU6XCJwcml2YXRlXCIsdmFsdWU6XCJudWxsXCIsdmFsdWVUeXBlOlwibnVsbFwifSksbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIixiKX19cmV0dXJuITF9KSxhfX1dKSx0fShoW1wiZGVmYXVsdFwiXSk7dFtcImRlZmF1bHRcIl09ayxlLmV4cG9ydHM9dFtcImRlZmF1bHRcIl19LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciBuPXRbb107bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX1yZXR1cm4gZnVuY3Rpb24odCxvLG4pe3JldHVybiBvJiZlKHQucHJvdG90eXBlLG8pLG4mJmUodCxuKSx0fX0oKSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPD0xfHx2b2lkIDA9PT1hcmd1bWVudHNbMV0/XCJuZXdQbHVnaW5cIjphcmd1bWVudHNbMV07byh0aGlzLGUpLHRoaXMuaWQ9dCx0aGlzLm5hbWU9bix0aGlzLmlzUmVhZHk9ITEsdGhpcy5ldmVudExpc3Q9e319cmV0dXJuIG4oZSxbe2tleTpcIm9uXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5ldmVudExpc3RbZV09dCx0aGlzfX0se2tleTpcInRyaWdnZXJcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuZXZlbnRMaXN0W2VdKXRoaXMuZXZlbnRMaXN0W2VdLmNhbGwodGhpcyx0KTtlbHNle3ZhciBvPVwib25cIitlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSk7XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpc1tvXSYmdGhpc1tvXS5jYWxsKHRoaXMsdCl9cmV0dXJuIHRoaXN9fSx7a2V5OlwiaWRcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faWR9LHNldDpmdW5jdGlvbihlKXtpZighZSl0aHJvd1wiUGx1Z2luIElEIGNhbm5vdCBiZSBlbXB0eVwiO3RoaXMuX2lkPWUudG9Mb3dlckNhc2UoKX19LHtrZXk6XCJuYW1lXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX25hbWV9LHNldDpmdW5jdGlvbihlKXtpZighZSl0aHJvd1wiUGx1Z2luIG5hbWUgY2Fubm90IGJlIGVtcHR5XCI7dGhpcy5fbmFtZT1lfX0se2tleTpcInZDb25zb2xlXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3ZDb25zb2xlfHx2b2lkIDB9LHNldDpmdW5jdGlvbihlKXtpZighZSl0aHJvd1widkNvbnNvbGUgY2Fubm90IGJlIGVtcHR5XCI7dGhpcy5fdkNvbnNvbGU9ZX19XSksZX0oKTt0W1wiZGVmYXVsdFwiXT1pLGUuZXhwb3J0cz10W1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9JzxkaXYgY2xhc3M9XCJ2Yy1pdGVtIHZjLWl0ZW0te3tsb2dUeXBlfX0ge3tpZiAoIW5vTWV0YSl9fXZjLWl0ZW0tbm9tZXRhe3svaWZ9fSB7e3N0eWxlfX1cIj5cXG5cdDxzcGFuIGNsYXNzPVwidmMtaXRlbS1tZXRhXCI+e3tpZiAoIW5vTWV0YSl9fXt7bWV0YX19e3svaWZ9fTwvc3Bhbj5cXG5cdDxkaXYgY2xhc3M9XCJ2Yy1pdGVtLWNvbnRlbnRcIj48L2Rpdj5cXG48L2Rpdj4nfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz0nPGRpdiBjbGFzcz1cInZjLWZvbGRcIj5cXG4gIHt7aWYgKGxpbmVUeXBlID09IFxcJ29ialxcJyl9fVxcbiAgICA8aSBjbGFzcz1cInZjLWZvbGQtb3V0ZXJcIj57e291dGVyfX08L2k+XFxuICAgIDxkaXYgY2xhc3M9XCJ2Yy1mb2xkLWlubmVyXCI+PC9kaXY+XFxuICB7e2Vsc2UgaWYgKGxpbmVUeXBlID09IFxcJ3ZhbHVlXFwnKX19XFxuICAgIDxpIGNsYXNzPVwidmMtY29kZS17e3ZhbHVlVHlwZX19XCI+e3t2YWx1ZX19PC9pPlxcbiAge3tlbHNlIGlmIChsaW5lVHlwZSA9PSBcXCdrdlxcJyl9fVxcbiAgICA8aSBjbGFzcz1cInZjLWNvZGUta2V5e3tpZiAoa2V5VHlwZSl9fSB2Yy1jb2RlLXt7a2V5VHlwZX19LWtleXt7L2lmfX1cIj57e2tleX19PC9pPjogPGkgY2xhc3M9XCJ2Yy1jb2RlLXt7dmFsdWVUeXBlfX1cIj57e3ZhbHVlfX08L2k+XFxuICB7ey9pZn19XFxuPC9kaXY+J30sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9JzxzcGFuPlxcbiAgPGkgY2xhc3M9XCJ2Yy1jb2RlLWtleXt7aWYgKGtleVR5cGUpfX0gdmMtY29kZS17e2tleVR5cGV9fS1rZXl7ey9pZn19XCI+e3trZXl9fTwvaT46IDxpIGNsYXNzPVwidmMtY29kZS17e3ZhbHVlVHlwZX19XCI+e3t2YWx1ZX19PC9pPlxcbjwvc3Bhbj4nfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz0nPGRpdj5cXG4gIDxkaXYgY2xhc3M9XCJ2Yy1sb2dcIj48L2Rpdj5cXG4gIDxmb3JtIGNsYXNzPVwidmMtY21kXCI+XFxuICAgIDxidXR0b24gY2xhc3M9XCJ2Yy1jbWQtYnRuXCIgdHlwZT1cInN1Ym1pdFwiPk9LPC9idXR0b24+XFxuICAgIDxkaXYgY2xhc3M9XCJ2Yy1jbWQtaW5wdXQtd3JhcFwiPlxcbiAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cInZjLWNtZC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiY29tbWFuZC4uLlwiPjwvdGV4dGFyZWE+XFxuICAgIDwvZGl2PlxcbiAgPC9mb3JtPlxcbjwvZGl2Pid9LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPSc8cHJlIGNsYXNzPVwidmMtaXRlbS1jb2RlIHZjLWl0ZW0tY29kZS17e3R5cGV9fVwiPnt7Y29udGVudH19PC9wcmU+J30sZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1mdW5jdGlvbiBpKGUpe2lmKGUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgdD17fTtpZihudWxsIT1lKWZvcih2YXIgbyBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdFtcImRlZmF1bHRcIl09ZSx0fWZ1bmN0aW9uIGEoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIHIoZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH1mdW5jdGlvbiBsKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciBuPXRbb107bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX1yZXR1cm4gZnVuY3Rpb24odCxvLG4pe3JldHVybiBvJiZlKHQucHJvdG90eXBlLG8pLG4mJmUodCxuKSx0fX0oKSxzPWZ1bmN0aW9uIGcoZSx0LG8pe251bGw9PT1lJiYoZT1GdW5jdGlvbi5wcm90b3R5cGUpO3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KTtpZih2b2lkIDA9PT1uKXt2YXIgaT1PYmplY3QuZ2V0UHJvdG90eXBlT2YoZSk7cmV0dXJuIG51bGw9PT1pP3ZvaWQgMDpnKGksdCxvKX1pZihcInZhbHVlXCJpbiBuKXJldHVybiBuLnZhbHVlO3ZhciBhPW4uZ2V0O2lmKHZvaWQgMCE9PWEpcmV0dXJuIGEuY2FsbChvKX0sZD1vKDQpLHU9KGkoZCksbygxNykpLHY9bih1KSxmPW8oMjUpLHA9bihmKSxoPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoKXt2YXIgZTthKHRoaXMsdCk7Zm9yKHZhciBvPWFyZ3VtZW50cy5sZW5ndGgsbj1BcnJheShvKSxpPTA7bz5pO2krKyluW2ldPWFyZ3VtZW50c1tpXTt2YXIgbD1yKHRoaXMsKGU9T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5jYWxsLmFwcGx5KGUsW3RoaXNdLmNvbmNhdChuKSkpO3JldHVybiBsLnRwbFRhYmJveD1wW1wiZGVmYXVsdFwiXSxsLmFsbG93VW5mb3JtYXR0ZWRMb2c9ITEsbH1yZXR1cm4gbCh0LGUpLGModCxbe2tleTpcIm9uSW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cyhPYmplY3QuZ2V0UHJvdG90eXBlT2YodC5wcm90b3R5cGUpLFwib25Jbml0XCIsdGhpcykuY2FsbCh0aGlzKSx0aGlzLnByaW50U3lzdGVtSW5mbygpfX0se2tleTpcInByaW50U3lzdGVtSW5mb1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9bmF2aWdhdG9yLnVzZXJBZ2VudCx0PVwiXCIsbz1lLm1hdGNoKC8oaXBvZCkuKlxccyhbXFxkX10rKS9pKSxuPWUubWF0Y2goLyhpcGFkKS4qXFxzKFtcXGRfXSspL2kpLGk9ZS5tYXRjaCgvKGlwaG9uZSlcXHNvc1xccyhbXFxkX10rKS9pKSxhPWUubWF0Y2goLyhhbmRyb2lkKVxccyhbXFxkXFwuXSspL2kpO3Q9XCJVbmtub3duXCIsYT90PVwiQW5kcm9pZCBcIithWzJdOmk/dD1cImlQaG9uZSwgaU9TIFwiK2lbMl0ucmVwbGFjZSgvXy9nLFwiLlwiKTpuP3Q9XCJpUGFkLCBpT1MgXCIrblsyXS5yZXBsYWNlKC9fL2csXCIuXCIpOm8mJih0PVwiaVBvZCwgaU9TIFwiK29bMl0ucmVwbGFjZSgvXy9nLFwiLlwiKSk7dmFyIHI9dCxsPWUubWF0Y2goL01pY3JvTWVzc2VuZ2VyXFwvKFtcXGRcXC5dKykvaSk7dD1cIlVua25vd25cIixsJiZsWzFdPyh0PWxbMV0scis9XCIsIFdlQ2hhdCBcIit0LGNvbnNvbGUuaW5mbyhcIltzeXN0ZW1dXCIsXCJTeXN0ZW06XCIscikpOmNvbnNvbGUuaW5mbyhcIltzeXN0ZW1dXCIsXCJTeXN0ZW06XCIsciksdD1cIlVua25vd25cIix0PVwiaHR0cHM6XCI9PWxvY2F0aW9uLnByb3RvY29sP1wiSFRUUFNcIjpcImh0dHA6XCI9PWxvY2F0aW9uLnByb3RvY29sP1wiSFRUUFwiOmxvY2F0aW9uLnByb3RvY29sLnJlcGxhY2UoXCI6XCIsXCJcIikscj10O3ZhciBjPWUudG9Mb3dlckNhc2UoKS5tYXRjaCgvIG5ldHR5cGVcXC8oW14gXSspL2cpO3Q9XCJVbmtub3duXCIsYyYmY1swXT8oYz1jWzBdLnNwbGl0KFwiL1wiKSx0PWNbMV0scis9XCIsIFwiK3QsY29uc29sZS5pbmZvKFwiW3N5c3RlbV1cIixcIk5ldHdvcms6XCIscikpOmNvbnNvbGUuaW5mbyhcIltzeXN0ZW1dXCIsXCJQcm90b2NvbDpcIixyKSxjb25zb2xlLmluZm8oXCJbc3lzdGVtXVwiLFwiVUE6XCIsZSksc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBlPXdpbmRvdy5wZXJmb3JtYW5jZXx8d2luZG93Lm1zUGVyZm9ybWFuY2V8fHdpbmRvdy53ZWJraXRQZXJmb3JtYW5jZTtpZihlJiZlLnRpbWluZyl7dmFyIHQ9ZS50aW1pbmc7dC5uYXZpZ2F0aW9uU3RhcnQmJmNvbnNvbGUuaW5mbyhcIltzeXN0ZW1dXCIsXCJuYXZpZ2F0aW9uU3RhcnQ6XCIsdC5uYXZpZ2F0aW9uU3RhcnQpLHQubmF2aWdhdGlvblN0YXJ0JiZ0LmRvbWFpbkxvb2t1cFN0YXJ0JiZjb25zb2xlLmluZm8oXCJbc3lzdGVtXVwiLFwibmF2aWdhdGlvbjpcIix0LmRvbWFpbkxvb2t1cFN0YXJ0LXQubmF2aWdhdGlvblN0YXJ0K1wibXNcIiksdC5kb21haW5Mb29rdXBFbmQmJnQuZG9tYWluTG9va3VwU3RhcnQmJmNvbnNvbGUuaW5mbyhcIltzeXN0ZW1dXCIsXCJkbnM6XCIsdC5kb21haW5Mb29rdXBFbmQtdC5kb21haW5Mb29rdXBTdGFydCtcIm1zXCIpLHQuY29ubmVjdEVuZCYmdC5jb25uZWN0U3RhcnQmJih0LmNvbm5lY3RFbmQmJnQuc2VjdXJlQ29ubmVjdGlvblN0YXJ0P2NvbnNvbGUuaW5mbyhcIltzeXN0ZW1dXCIsXCJ0Y3AgKHNzbCk6XCIsdC5jb25uZWN0RW5kLXQuY29ubmVjdFN0YXJ0K1wibXMgKFwiKyh0LmNvbm5lY3RFbmQtdC5zZWN1cmVDb25uZWN0aW9uU3RhcnQpK1wibXMpXCIpOmNvbnNvbGUuaW5mbyhcIltzeXN0ZW1dXCIsXCJ0Y3A6XCIsdC5jb25uZWN0RW5kLXQuY29ubmVjdFN0YXJ0K1wibXNcIikpLHQucmVzcG9uc2VTdGFydCYmdC5yZXF1ZXN0U3RhcnQmJmNvbnNvbGUuaW5mbyhcIltzeXN0ZW1dXCIsXCJyZXF1ZXN0OlwiLHQucmVzcG9uc2VTdGFydC10LnJlcXVlc3RTdGFydCtcIm1zXCIpLHQucmVzcG9uc2VFbmQmJnQucmVzcG9uc2VTdGFydCYmY29uc29sZS5pbmZvKFwiW3N5c3RlbV1cIixcInJlc3BvbnNlOlwiLHQucmVzcG9uc2VFbmQtdC5yZXNwb25zZVN0YXJ0K1wibXNcIiksdC5kb21Db21wbGV0ZSYmdC5kb21Mb2FkaW5nJiYodC5kb21Db250ZW50TG9hZGVkRXZlbnRTdGFydCYmdC5kb21Mb2FkaW5nP2NvbnNvbGUuaW5mbyhcIltzeXN0ZW1dXCIsXCJkb21Db21wbGV0ZSAoZG9tTG9hZGVkKTpcIix0LmRvbUNvbXBsZXRlLXQuZG9tTG9hZGluZytcIm1zIChcIisodC5kb21Db250ZW50TG9hZGVkRXZlbnRTdGFydC10LmRvbUxvYWRpbmcpK1wibXMpXCIpOmNvbnNvbGUuaW5mbyhcIltzeXN0ZW1dXCIsXCJkb21Db21wbGV0ZTpcIix0LmRvbUNvbXBsZXRlLXQuZG9tTG9hZGluZytcIm1zXCIpKSx0LmxvYWRFdmVudEVuZCYmdC5sb2FkRXZlbnRTdGFydCYmY29uc29sZS5pbmZvKFwiW3N5c3RlbV1cIixcImxvYWRFdmVudDpcIix0LmxvYWRFdmVudEVuZC10LmxvYWRFdmVudFN0YXJ0K1wibXNcIiksdC5uYXZpZ2F0aW9uU3RhcnQmJnQubG9hZEV2ZW50RW5kJiZjb25zb2xlLmluZm8oXCJbc3lzdGVtXVwiLFwidG90YWwgKERPTSk6XCIsdC5sb2FkRXZlbnRFbmQtdC5uYXZpZ2F0aW9uU3RhcnQrXCJtcyAoXCIrKHQuZG9tQ29tcGxldGUtdC5uYXZpZ2F0aW9uU3RhcnQpK1wibXMpXCIpfX0sMCl9fV0pLHR9KHZbXCJkZWZhdWx0XCJdKTt0W1wiZGVmYXVsdFwiXT1oLGUuZXhwb3J0cz10W1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9JzxkaXY+XFxuICA8ZGl2IGNsYXNzPVwidmMtbG9nXCI+PC9kaXY+XFxuPC9kaXY+J30sZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7aWYoZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciB0PXt9O2lmKG51bGwhPWUpZm9yKHZhciBvIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0W1wiZGVmYXVsdFwiXT1lLHR9ZnVuY3Rpb24gaShlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fWZ1bmN0aW9uIGEoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIHIoZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH1mdW5jdGlvbiBsKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciBuPXRbb107bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX1yZXR1cm4gZnVuY3Rpb24odCxvLG4pe3JldHVybiBvJiZlKHQucHJvdG90eXBlLG8pLG4mJmUodCxuKSx0fX0oKSxzPW8oNSksZD1pKHMpLHU9byg0KSx2PW4odSksZj1vKDE4KSxwPWkoZiksaD1vKDI3KSxnPWkoaCksYj1vKDI4KSxtPWkoYikseT1vKDI5KSxfPWkoeSksdz1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KCl7dmFyIGU7YSh0aGlzLHQpO2Zvcih2YXIgbz1hcmd1bWVudHMubGVuZ3RoLG49QXJyYXkobyksaT0wO28+aTtpKyspbltpXT1hcmd1bWVudHNbaV07dmFyIGw9cih0aGlzLChlPU9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbC5hcHBseShlLFt0aGlzXS5jb25jYXQobikpKTtyZXR1cm4gbC4kdGFiYm94PWRbXCJkZWZhdWx0XCJdLnJlbmRlcihnW1wiZGVmYXVsdFwiXSx7fSksbC4kaGVhZGVyPW51bGwsbC5yZXFMaXN0PXt9LGwuZG9tTGlzdD17fSxsLmlzUmVhZHk9ITEsbC5pc1Nob3c9ITEsbC5pc0luQm90dG9tPSEwLGwuX29wZW49dm9pZCAwLGwuX3NlbmQ9dm9pZCAwLGwubW9ja0FqYXgoKSxsfXJldHVybiBsKHQsZSksYyh0LFt7a2V5Olwib25SZW5kZXJUYWJcIix2YWx1ZTpmdW5jdGlvbihlKXtlKHRoaXMuJHRhYmJveCl9fSx7a2V5Olwib25BZGRUb29sXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxvPVt7bmFtZTpcIkNsZWFyXCIsZ2xvYmFsOiExLG9uQ2xpY2s6ZnVuY3Rpb24oZSl7dC5jbGVhckxvZygpfX1dO2Uobyl9fSx7a2V5Olwib25SZWFkeVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLmlzUmVhZHk9ITAsdGhpcy5yZW5kZXJIZWFkZXIoKSxkW1wiZGVmYXVsdFwiXS5kZWxlZ2F0ZShkW1wiZGVmYXVsdFwiXS5vbmUoXCIudmMtbG9nXCIsdGhpcy4kdGFiYm94KSxcImNsaWNrXCIsXCIudmMtZ3JvdXAtcHJldmlld1wiLGZ1bmN0aW9uKHQpe3ZhciBvPXRoaXMuZGF0YXNldC5yZXFpZCxuPXRoaXMucGFyZW50Tm9kZTtkW1wiZGVmYXVsdFwiXS5oYXNDbGFzcyhuLFwidmMtYWN0aXZlZFwiKT8oZFtcImRlZmF1bHRcIl0ucmVtb3ZlQ2xhc3MobixcInZjLWFjdGl2ZWRcIiksZS51cGRhdGVSZXF1ZXN0KG8se2FjdGl2ZWQ6ITF9KSk6KGRbXCJkZWZhdWx0XCJdLmFkZENsYXNzKG4sXCJ2Yy1hY3RpdmVkXCIpLGUudXBkYXRlUmVxdWVzdChvLHthY3RpdmVkOiEwfSkpLHQucHJldmVudERlZmF1bHQoKX0pO3ZhciB0PWRbXCJkZWZhdWx0XCJdLm9uZShcIi52Yy1jb250ZW50XCIpO2RbXCJkZWZhdWx0XCJdLmJpbmQodCxcInNjcm9sbFwiLGZ1bmN0aW9uKG8pe2UuaXNTaG93JiYodC5zY3JvbGxUb3ArdC5vZmZzZXRIZWlnaHQ+PXQuc2Nyb2xsSGVpZ2h0P2UuaXNJbkJvdHRvbT0hMDplLmlzSW5Cb3R0b209ITEpfSk7Zm9yKHZhciBvIGluIGUucmVxTGlzdCllLnVwZGF0ZVJlcXVlc3Qobyx7fSl9fSx7a2V5Olwib25SZW1vdmVcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5YTUxIdHRwUmVxdWVzdCYmKHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3Blbj10aGlzLl9vcGVuLHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZD10aGlzLl9zZW5kLHRoaXMuX29wZW49dm9pZCAwLHRoaXMuX3NlbmQ9dm9pZCAwKX19LHtrZXk6XCJvblNob3dcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaXNTaG93PSEwLDE9PXRoaXMuaXNJbkJvdHRvbSYmdGhpcy5zY3JvbGxUb0JvdHRvbSgpfX0se2tleTpcIm9uSGlkZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5pc1Nob3c9ITF9fSx7a2V5Olwib25TaG93Q29uc29sZVwiLHZhbHVlOmZ1bmN0aW9uKCl7MT09dGhpcy5pc0luQm90dG9tJiZ0aGlzLnNjcm9sbFRvQm90dG9tKCl9fSx7a2V5Olwic2Nyb2xsVG9Cb3R0b21cIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWRbXCJkZWZhdWx0XCJdLm9uZShcIi52Yy1jb250ZW50XCIpO2Uuc2Nyb2xsVG9wPWUuc2Nyb2xsSGVpZ2h0LWUub2Zmc2V0SGVpZ2h0fX0se2tleTpcImNsZWFyTG9nXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnJlcUxpc3Q9e307Zm9yKHZhciBlIGluIHRoaXMuZG9tTGlzdCl0aGlzLmRvbUxpc3RbZV0ucmVtb3ZlKCksdGhpcy5kb21MaXN0W2VdPXZvaWQgMDt0aGlzLmRvbUxpc3Q9e30sdGhpcy5yZW5kZXJIZWFkZXIoKX19LHtrZXk6XCJyZW5kZXJIZWFkZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPU9iamVjdC5rZXlzKHRoaXMucmVxTGlzdCkubGVuZ3RoLHQ9ZFtcImRlZmF1bHRcIl0ucmVuZGVyKG1bXCJkZWZhdWx0XCJdLHtjb3VudDplfSksbz1kW1wiZGVmYXVsdFwiXS5vbmUoXCIudmMtbG9nXCIsdGhpcy4kdGFiYm94KTt0aGlzLiRoZWFkZXI/dGhpcy4kaGVhZGVyLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHQsdGhpcy4kaGVhZGVyKTpvLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsbyksdGhpcy4kaGVhZGVyPXR9fSx7a2V5OlwidXBkYXRlUmVxdWVzdFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG89T2JqZWN0LmtleXModGhpcy5yZXFMaXN0KS5sZW5ndGgsbj10aGlzLnJlcUxpc3RbZV18fHt9O2Zvcih2YXIgaSBpbiB0KW5baV09dFtpXTtpZih0aGlzLnJlcUxpc3RbZV09bix0aGlzLmlzUmVhZHkpe3ZhciBhPXtpZDplLHVybDpuLnVybCxzdGF0dXM6bi5zdGF0dXMsbWV0aG9kOm4ubWV0aG9kfHxcIi1cIixjb3N0VGltZTpuLmNvc3RUaW1lPjA/bi5jb3N0VGltZStcIm1zXCI6XCItXCIsaGVhZGVyOm4uaGVhZGVyfHxudWxsLGdldERhdGE6bi5nZXREYXRhfHxudWxsLHBvc3REYXRhOm4ucG9zdERhdGF8fG51bGwscmVzcG9uc2U6bnVsbCxhY3RpdmVkOiEhbi5hY3RpdmVkfTtzd2l0Y2gobi5yZXNwb25zZVR5cGUpe2Nhc2VcIlwiOmNhc2VcInRleHRcIjppZih2LmlzU3RyaW5nKG4ucmVzcG9uc2UpKXRyeXthLnJlc3BvbnNlPUpTT04ucGFyc2Uobi5yZXNwb25zZSksYS5yZXNwb25zZT1KU09OLnN0cmluZ2lmeShhLnJlc3BvbnNlLG51bGwsMSksYS5yZXNwb25zZT12Lmh0bWxFbmNvZGUoYS5yZXNwb25zZSl9Y2F0Y2gocil7YS5yZXNwb25zZT12Lmh0bWxFbmNvZGUobi5yZXNwb25zZSl9ZWxzZVwidW5kZWZpbmVkXCIhPXR5cGVvZiBuLnJlc3BvbnNlJiYoYS5yZXNwb25zZT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobi5yZXNwb25zZSkpO2JyZWFrO2Nhc2VcImpzb25cIjpcInVuZGVmaW5lZFwiIT10eXBlb2Ygbi5yZXNwb25zZSYmKGEucmVzcG9uc2U9SlNPTi5zdHJpbmdpZnkobi5yZXNwb25zZSxudWxsLDEpKTticmVhaztjYXNlXCJibG9iXCI6Y2FzZVwiZG9jdW1lbnRcIjpjYXNlXCJhcnJheWJ1ZmZlclwiOmRlZmF1bHQ6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG4ucmVzcG9uc2UmJihhLnJlc3BvbnNlPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuLnJlc3BvbnNlKSl9MD09bi5yZWFkeVN0YXRlfHwxPT1uLnJlYWR5U3RhdGU/YS5zdGF0dXM9XCJQZW5kaW5nXCI6Mj09bi5yZWFkeVN0YXRlfHwzPT1uLnJlYWR5U3RhdGU/YS5zdGF0dXM9XCJMb2FkaW5nXCI6ND09bi5yZWFkeVN0YXRlfHwoYS5zdGF0dXM9XCJVbmtub3duXCIpO3ZhciBsPWRbXCJkZWZhdWx0XCJdLnJlbmRlcihfW1wiZGVmYXVsdFwiXSxhKSxjPXRoaXMuZG9tTGlzdFtlXTtuLnN0YXR1cz49NDAwJiZkW1wiZGVmYXVsdFwiXS5hZGRDbGFzcyhkW1wiZGVmYXVsdFwiXS5vbmUoXCIudmMtZ3JvdXAtcHJldmlld1wiLGwpLFwidmMtdGFibGUtcm93LWVycm9yXCIpLGM/Yy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChsLGMpOmRbXCJkZWZhdWx0XCJdLm9uZShcIi52Yy1sb2dcIix0aGlzLiR0YWJib3gpLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLGwpLHRoaXMuZG9tTGlzdFtlXT1sO3ZhciBzPU9iamVjdC5rZXlzKHRoaXMucmVxTGlzdCkubGVuZ3RoO3MhPW8mJnRoaXMucmVuZGVySGVhZGVyKCksdGhpcy5pc0luQm90dG9tJiZ0aGlzLnNjcm9sbFRvQm90dG9tKCl9fX0se2tleTpcIm1vY2tBamF4XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT13aW5kb3cuWE1MSHR0cFJlcXVlc3Q7aWYoZSl7dmFyIHQ9dGhpcyxvPXdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3BlbixuPXdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZDt0Ll9vcGVuPW8sdC5fc2VuZD1uLHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3Blbj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsbj1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cyksaT1uWzBdLGE9blsxXSxyPXQuZ2V0VW5pcXVlSUQoKSxsPW51bGw7ZS5fcmVxdWVzdElEPXIsZS5fbWV0aG9kPWksZS5fdXJsPWE7dmFyIGM9ZS5vbnJlYWR5c3RhdGVjaGFuZ2V8fGZ1bmN0aW9uKCl7fSxzPWZ1bmN0aW9uKCl7dmFyIG89dC5yZXFMaXN0W3JdfHx7fTtpZihvLnJlYWR5U3RhdGU9ZS5yZWFkeVN0YXRlLG8uc3RhdHVzPTAsZS5yZWFkeVN0YXRlPjEmJihvLnN0YXR1cz1lLnN0YXR1cyksby5yZXNwb25zZVR5cGU9ZS5yZXNwb25zZVR5cGUsMD09ZS5yZWFkeVN0YXRlKW8uc3RhcnRUaW1lfHwoby5zdGFydFRpbWU9K25ldyBEYXRlKTtlbHNlIGlmKDE9PWUucmVhZHlTdGF0ZSlvLnN0YXJ0VGltZXx8KG8uc3RhcnRUaW1lPStuZXcgRGF0ZSk7ZWxzZSBpZigyPT1lLnJlYWR5U3RhdGUpe28uaGVhZGVyPXt9O2Zvcih2YXIgbj1lLmdldEFsbFJlc3BvbnNlSGVhZGVycygpfHxcIlwiLGk9bi5zcGxpdChcIlxcblwiKSxhPTA7YTxpLmxlbmd0aDthKyspe3ZhciBzPWlbYV07aWYocyl7dmFyIGQ9cy5zcGxpdChcIjogXCIpLHU9ZFswXSx2PWQuc2xpY2UoMSkuam9pbihcIjogXCIpO28uaGVhZGVyW3VdPXZ9fX1lbHNlIDM9PWUucmVhZHlTdGF0ZXx8KDQ9PWUucmVhZHlTdGF0ZT8oY2xlYXJJbnRlcnZhbChsKSxvLmVuZFRpbWU9K25ldyBEYXRlLG8uY29zdFRpbWU9by5lbmRUaW1lLShvLnN0YXJ0VGltZXx8by5lbmRUaW1lKSxvLnJlc3BvbnNlPWUucmVzcG9uc2UpOmNsZWFySW50ZXJ2YWwobCkpO3JldHVybiBlLl9ub1ZDb25zb2xlfHx0LnVwZGF0ZVJlcXVlc3QocixvKSxjLmFwcGx5KGUsYXJndW1lbnRzKX07ZS5vbnJlYWR5c3RhdGVjaGFuZ2U9czt2YXIgZD0tMTtyZXR1cm4gbD1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2QhPWUucmVhZHlTdGF0ZSYmKGQ9ZS5yZWFkeVN0YXRlLHMuY2FsbChlKSl9LDEwKSxvLmFwcGx5KGUsbil9LHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZD1mdW5jdGlvbigpe3ZhciBlPXRoaXMsbz1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cyksaT1vWzBdLGE9dC5yZXFMaXN0W2UuX3JlcXVlc3RJRF18fHt9O2EubWV0aG9kPWUuX21ldGhvZC50b1VwcGVyQ2FzZSgpO3ZhciByPWUuX3VybC5zcGxpdChcIj9cIik7aWYoYS51cmw9ci5zaGlmdCgpLHIubGVuZ3RoPjApe2EuZ2V0RGF0YT17fSxyPXIuam9pbihcIj9cIikscj1yLnNwbGl0KFwiJlwiKTt2YXIgbD0hMCxjPSExLHM9dm9pZCAwO3RyeXtmb3IodmFyIGQsdT1yW1N5bWJvbC5pdGVyYXRvcl0oKTshKGw9KGQ9dS5uZXh0KCkpLmRvbmUpO2w9ITApe3ZhciBmPWQudmFsdWU7Zj1mLnNwbGl0KFwiPVwiKSxhLmdldERhdGFbZlswXV09ZlsxXX19Y2F0Y2gocCl7Yz0hMCxzPXB9ZmluYWxseXt0cnl7IWwmJnVbXCJyZXR1cm5cIl0mJnVbXCJyZXR1cm5cIl0oKX1maW5hbGx5e2lmKGMpdGhyb3cgc319fWlmKFwiUE9TVFwiPT1hLm1ldGhvZClpZih2LmlzU3RyaW5nKGkpKXt2YXIgaD1pLnNwbGl0KFwiJlwiKTthLnBvc3REYXRhPXt9O3ZhciBnPSEwLGI9ITEsbT12b2lkIDA7dHJ5e2Zvcih2YXIgeSxfPWhbU3ltYm9sLml0ZXJhdG9yXSgpOyEoZz0oeT1fLm5leHQoKSkuZG9uZSk7Zz0hMCl7dmFyIHc9eS52YWx1ZTt3PXcuc3BsaXQoXCI9XCIpLGEucG9zdERhdGFbd1swXV09d1sxXX19Y2F0Y2gocCl7Yj0hMCxtPXB9ZmluYWxseXt0cnl7IWcmJl9bXCJyZXR1cm5cIl0mJl9bXCJyZXR1cm5cIl0oKX1maW5hbGx5e2lmKGIpdGhyb3cgbX19fWVsc2Ugdi5pc1BsYWluT2JqZWN0KGkpJiYoYS5wb3N0RGF0YT1pKTtyZXR1cm4gZS5fbm9WQ29uc29sZXx8dC51cGRhdGVSZXF1ZXN0KGUuX3JlcXVlc3RJRCxhKSxuLmFwcGx5KGUsbyl9fX19LHtrZXk6XCJnZXRVbmlxdWVJRFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9XCJ4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcIi5yZXBsYWNlKC9beHldL2csZnVuY3Rpb24oZSl7dmFyIHQ9MTYqTWF0aC5yYW5kb20oKXwwLG89XCJ4XCI9PWU/dDozJnR8ODtyZXR1cm4gby50b1N0cmluZygxNil9KTtyZXR1cm4gZX19XSksdH0ocFtcImRlZmF1bHRcIl0pO3RbXCJkZWZhdWx0XCJdPXcsZS5leHBvcnRzPXRbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz0nPGRpdiBjbGFzcz1cInZjLXRhYmxlXCI+XFxuICA8ZGl2IGNsYXNzPVwidmMtbG9nXCI+PC9kaXY+XFxuPC9kaXY+J30sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9JzxkbCBjbGFzcz1cInZjLXRhYmxlLXJvd1wiPlxcbiAgPGRkIGNsYXNzPVwidmMtdGFibGUtY29sIHZjLXRhYmxlLWNvbC00XCI+TmFtZSB7e2lmIChjb3VudCA+IDApfX0oe3tjb3VudH19KXt7L2lmfX08L2RkPlxcbiAgPGRkIGNsYXNzPVwidmMtdGFibGUtY29sXCI+TWV0aG9kPC9kZD5cXG4gIDxkZCBjbGFzcz1cInZjLXRhYmxlLWNvbFwiPlN0YXR1czwvZGQ+XFxuICA8ZGQgY2xhc3M9XCJ2Yy10YWJsZS1jb2xcIj5UaW1lPC9kZD5cXG48L2RsPid9LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPSc8ZGl2IGNsYXNzPVwidmMtZ3JvdXAge3thY3RpdmVkID8gXFwndmMtYWN0aXZlZFxcJyA6IFxcJ1xcJ319XCI+XFxuICA8ZGwgY2xhc3M9XCJ2Yy10YWJsZS1yb3cgdmMtZ3JvdXAtcHJldmlld1wiIGRhdGEtcmVxaWQ9XCJ7e2lkfX1cIj5cXG4gICAgPGRkIGNsYXNzPVwidmMtdGFibGUtY29sIHZjLXRhYmxlLWNvbC00XCI+e3t1cmx9fTwvZGQ+XFxuICAgIDxkZCBjbGFzcz1cInZjLXRhYmxlLWNvbFwiPnt7bWV0aG9kfX08L2RkPlxcbiAgICA8ZGQgY2xhc3M9XCJ2Yy10YWJsZS1jb2xcIj57e3N0YXR1c319PC9kZD5cXG4gICAgPGRkIGNsYXNzPVwidmMtdGFibGUtY29sXCI+e3tjb3N0VGltZX19PC9kZD5cXG4gIDwvZGw+XFxuICA8ZGl2IGNsYXNzPVwidmMtZ3JvdXAtZGV0YWlsXCI+XFxuICAgIHt7aWYgKGhlYWRlciAhPT0gbnVsbCl9fVxcbiAgICA8ZGl2PlxcbiAgICAgIDxkbCBjbGFzcz1cInZjLXRhYmxlLXJvdyB2Yy1sZWZ0LWJvcmRlclwiPlxcbiAgICAgICAgPGR0IGNsYXNzPVwidmMtdGFibGUtY29sIHZjLXRhYmxlLWNvbC10aXRsZVwiPkhlYWRlcnM8L2R0PlxcbiAgICAgIDwvZGw+XFxuICAgICAge3tmb3IgKHZhciBrZXkgaW4gaGVhZGVyKX19XFxuICAgICAgPGRpdiBjbGFzcz1cInZjLXRhYmxlLXJvdyB2Yy1sZWZ0LWJvcmRlciB2Yy1zbWFsbFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cInZjLXRhYmxlLWNvbCB2Yy10YWJsZS1jb2wtMlwiPnt7a2V5fX08L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2Yy10YWJsZS1jb2wgdmMtdGFibGUtY29sLTQgdmMtbWF4LWhlaWdodC1saW5lXCI+e3toZWFkZXJba2V5XX19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAge3svZm9yfX1cXG4gICAgPC9kaXY+XFxuICAgIHt7L2lmfX1cXG4gICAge3tpZiAoZ2V0RGF0YSAhPT0gbnVsbCl9fVxcbiAgICA8ZGl2PlxcbiAgICAgIDxkbCBjbGFzcz1cInZjLXRhYmxlLXJvdyB2Yy1sZWZ0LWJvcmRlclwiPlxcbiAgICAgICAgPGR0IGNsYXNzPVwidmMtdGFibGUtY29sIHZjLXRhYmxlLWNvbC10aXRsZVwiPlF1ZXJ5IFN0cmluZyBQYXJhbWV0ZXJzPC9kdD5cXG4gICAgICA8L2RsPlxcbiAgICAgIHt7Zm9yICh2YXIga2V5IGluIGdldERhdGEpfX1cXG4gICAgICA8ZGl2IGNsYXNzPVwidmMtdGFibGUtcm93IHZjLWxlZnQtYm9yZGVyIHZjLXNtYWxsXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwidmMtdGFibGUtY29sIHZjLXRhYmxlLWNvbC0yXCI+e3trZXl9fTwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cInZjLXRhYmxlLWNvbCB2Yy10YWJsZS1jb2wtNCB2Yy1tYXgtaGVpZ2h0LWxpbmVcIj57e2dldERhdGFba2V5XX19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAge3svZm9yfX1cXG4gICAgPC9kaXY+XFxuICAgIHt7L2lmfX1cXG4gICAge3tpZiAocG9zdERhdGEgIT09IG51bGwpfX1cXG4gICAgPGRpdj5cXG4gICAgICA8ZGwgY2xhc3M9XCJ2Yy10YWJsZS1yb3cgdmMtbGVmdC1ib3JkZXJcIj5cXG4gICAgICAgIDxkdCBjbGFzcz1cInZjLXRhYmxlLWNvbCB2Yy10YWJsZS1jb2wtdGl0bGVcIj5Gb3JtIERhdGE8L2R0PlxcbiAgICAgIDwvZGw+XFxuICAgICAge3tmb3IgKHZhciBrZXkgaW4gcG9zdERhdGEpfX1cXG4gICAgICA8ZGl2IGNsYXNzPVwidmMtdGFibGUtcm93IHZjLWxlZnQtYm9yZGVyIHZjLXNtYWxsXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwidmMtdGFibGUtY29sIHZjLXRhYmxlLWNvbC0yXCI+e3trZXl9fTwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cInZjLXRhYmxlLWNvbCB2Yy10YWJsZS1jb2wtNCB2Yy1tYXgtaGVpZ2h0LWxpbmVcIj57e3Bvc3REYXRhW2tleV19fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIHt7L2Zvcn19XFxuICAgIDwvZGl2PlxcbiAgICB7ey9pZn19XFxuICAgIDxkaXY+XFxuICAgICAgPGRsIGNsYXNzPVwidmMtdGFibGUtcm93IHZjLWxlZnQtYm9yZGVyXCI+XFxuICAgICAgICA8ZHQgY2xhc3M9XCJ2Yy10YWJsZS1jb2wgdmMtdGFibGUtY29sLXRpdGxlXCI+UmVzcG9uc2U8L2R0PlxcbiAgICAgIDwvZGw+XFxuICAgICAgPGRpdiBjbGFzcz1cInZjLXRhYmxlLXJvdyB2Yy1sZWZ0LWJvcmRlciB2Yy1zbWFsbFwiPlxcbiAgICAgICAgPHByZSBjbGFzcz1cInZjLXRhYmxlLWNvbCB2Yy1tYXgtaGVpZ2h0IHZjLW1pbi1oZWlnaHRcIj57e3Jlc3BvbnNlIHx8IFxcJ1xcJ319PC9wcmU+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+J30sZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7aWYoZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciB0PXt9O2lmKG51bGwhPWUpZm9yKHZhciBvIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0W1wiZGVmYXVsdFwiXT1lLHR9ZnVuY3Rpb24gaShlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fWZ1bmN0aW9uIGEoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xyXG59ZnVuY3Rpb24gcihlLHQpe2lmKCFlKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZTp0fWZ1bmN0aW9uIGwoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgdCk7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KTplLl9fcHJvdG9fXz10KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG89MDtvPHQubGVuZ3RoO28rKyl7dmFyIG49dFtvXTtuLmVudW1lcmFibGU9bi5lbnVtZXJhYmxlfHwhMSxuLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBuJiYobi53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbi5rZXksbil9fXJldHVybiBmdW5jdGlvbih0LG8sbil7cmV0dXJuIG8mJmUodC5wcm90b3R5cGUsbyksbiYmZSh0LG4pLHR9fSgpO28oMzEpO3ZhciBzPW8oMTgpLGQ9aShzKSx1PW8oMzMpLHY9aSh1KSxmPW8oMzQpLHA9aShmKSxoPW8oNCksZz0obihoKSxvKDUpKSxiPWkoZyksbT1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KCl7dmFyIGU7YSh0aGlzLHQpO2Zvcih2YXIgbz1hcmd1bWVudHMubGVuZ3RoLG49QXJyYXkobyksaT0wO28+aTtpKyspbltpXT1hcmd1bWVudHNbaV07dmFyIGw9cih0aGlzLChlPU9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbC5hcHBseShlLFt0aGlzXS5jb25jYXQobikpKSxjPWw7Yy5pc0luaXRlZD0hMSxjLm5vZGU9e30sYy4kdGFiYm94PWJbXCJkZWZhdWx0XCJdLnJlbmRlcih2W1wiZGVmYXVsdFwiXSx7fSksYy5ub2Rlcz1bXSxjLmFjdGl2ZWRFbGVtPXt9O3ZhciBzPXdpbmRvdy5NdXRhdGlvbk9ic2VydmVyfHx3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcnx8d2luZG93Lk1vek11dGF0aW9uT2JzZXJ2ZXI7cmV0dXJuIGMub2JzZXJ2ZXI9bmV3IHMoZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe3ZhciBvPWVbdF07Yy5faXNJblZDb25zb2xlKG8udGFyZ2V0KXx8Yy5vbk11dGF0aW9uKG8pfX0pLGx9cmV0dXJuIGwodCxlKSxjKHQsW3trZXk6XCJvblJlbmRlclRhYlwiLHZhbHVlOmZ1bmN0aW9uKGUpe2UodGhpcy4kdGFiYm94KX19LHtrZXk6XCJvbkFkZFRvb2xcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLG89W3tuYW1lOlwiRXhwZW5kXCIsZ2xvYmFsOiExLG9uQ2xpY2s6ZnVuY3Rpb24oZSl7aWYodC5hY3RpdmVkRWxlbSlpZihiW1wiZGVmYXVsdFwiXS5oYXNDbGFzcyh0LmFjdGl2ZWRFbGVtLFwidmMtdG9nZ2xlXCIpKWZvcih2YXIgbz0wO288dC5hY3RpdmVkRWxlbS5jaGlsZE5vZGVzLmxlbmd0aDtvKyspe3ZhciBuPXQuYWN0aXZlZEVsZW0uY2hpbGROb2Rlc1tvXTtpZihiW1wiZGVmYXVsdFwiXS5oYXNDbGFzcyhuLFwidmNlbG0tbFwiKSYmIWJbXCJkZWZhdWx0XCJdLmhhc0NsYXNzKG4sXCJ2Y2VsbS1ub2NcIikmJiFiW1wiZGVmYXVsdFwiXS5oYXNDbGFzcyhuLFwidmMtdG9nZ2xlXCIpKXtiW1wiZGVmYXVsdFwiXS5vbmUoXCIudmNlbG0tbm9kZVwiLG4pLmNsaWNrKCk7YnJlYWt9fWVsc2UgYltcImRlZmF1bHRcIl0ub25lKFwiLnZjZWxtLW5vZGVcIix0LmFjdGl2ZWRFbGVtKS5jbGljaygpfX0se25hbWU6XCJDb2xsYXBzZVwiLGdsb2JhbDohMSxvbkNsaWNrOmZ1bmN0aW9uKGUpe3QuYWN0aXZlZEVsZW0mJihiW1wiZGVmYXVsdFwiXS5oYXNDbGFzcyh0LmFjdGl2ZWRFbGVtLFwidmMtdG9nZ2xlXCIpP2JbXCJkZWZhdWx0XCJdLm9uZShcIi52Y2VsbS1ub2RlXCIsdC5hY3RpdmVkRWxlbSkuY2xpY2soKTp0LmFjdGl2ZWRFbGVtLnBhcmVudE5vZGUmJmJbXCJkZWZhdWx0XCJdLmhhc0NsYXNzKHQuYWN0aXZlZEVsZW0ucGFyZW50Tm9kZSxcInZjZWxtLWxcIikmJmJbXCJkZWZhdWx0XCJdLm9uZShcIi52Y2VsbS1ub2RlXCIsdC5hY3RpdmVkRWxlbS5wYXJlbnROb2RlKS5jbGljaygpKX19XTtlKG8pfX0se2tleTpcIm9uU2hvd1wiLHZhbHVlOmZ1bmN0aW9uKCl7aWYoIXRoaXMuaXNJbml0ZWQpe3RoaXMuaXNJbml0ZWQ9ITAsdGhpcy5ub2RlPXRoaXMuZ2V0Tm9kZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO3ZhciBlPXRoaXMucmVuZGVyVmlldyh0aGlzLm5vZGUsYltcImRlZmF1bHRcIl0ub25lKFwiLnZjLWxvZ1wiLHRoaXMuJHRhYmJveCkpLHQ9YltcImRlZmF1bHRcIl0ub25lKFwiLnZjZWxtLW5vZGVcIixlKTt0JiZ0LmNsaWNrKCk7dmFyIG89e2F0dHJpYnV0ZXM6ITAsY2hpbGRMaXN0OiEwLGNoYXJhY3RlckRhdGE6ITAsc3VidHJlZTohMH07dGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxvKX19fSx7a2V5Olwib25SZW1vdmVcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpfX0se2tleTpcIm9uTXV0YXRpb25cIix2YWx1ZTpmdW5jdGlvbihlKXtzd2l0Y2goZS50eXBlKXtjYXNlXCJjaGlsZExpc3RcIjplLnJlbW92ZWROb2Rlcy5sZW5ndGg+MCYmdGhpcy5vbkNoaWxkUmVtb3ZlKGUpLGUuYWRkZWROb2Rlcy5sZW5ndGg+MCYmdGhpcy5vbkNoaWxkQWRkKGUpO2JyZWFrO2Nhc2VcImF0dHJpYnV0ZXNcIjp0aGlzLm9uQXR0cmlidXRlc0NoYW5nZShlKTticmVhaztjYXNlXCJjaGFyYWN0ZXJEYXRhXCI6dGhpcy5vbkNoYXJhY3RlckRhdGFDaGFuZ2UoZSl9fX0se2tleTpcIm9uQ2hpbGRSZW1vdmVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldCxvPXQuX192Y29uc29sZV9ub2RlO2lmKG8pe2Zvcih2YXIgbj0wO248ZS5yZW1vdmVkTm9kZXMubGVuZ3RoO24rKyl7dmFyIGk9ZS5yZW1vdmVkTm9kZXNbbl0sYT1pLl9fdmNvbnNvbGVfbm9kZTthJiZhLnZpZXcmJmEudmlldy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEudmlldyl9dGhpcy5nZXROb2RlKHQpfX19LHtrZXk6XCJvbkNoaWxkQWRkXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQsbz10Ll9fdmNvbnNvbGVfbm9kZTtpZihvKXt0aGlzLmdldE5vZGUodCksby52aWV3JiZiW1wiZGVmYXVsdFwiXS5yZW1vdmVDbGFzcyhvLnZpZXcsXCJ2Y2VsbS1ub2NcIik7Zm9yKHZhciBuPTA7bjxlLmFkZGVkTm9kZXMubGVuZ3RoO24rKyl7dmFyIGk9ZS5hZGRlZE5vZGVzW25dLGE9aS5fX3Zjb25zb2xlX25vZGU7aWYoYSlpZihudWxsIT09ZS5uZXh0U2libGluZyl7dmFyIHI9ZS5uZXh0U2libGluZy5fX3Zjb25zb2xlX25vZGU7ci52aWV3JiZ0aGlzLnJlbmRlclZpZXcoYSxyLnZpZXcsXCJpbnNlcnRCZWZvcmVcIil9ZWxzZSBvLnZpZXcmJihvLnZpZXcubGFzdENoaWxkP3RoaXMucmVuZGVyVmlldyhhLG8udmlldy5sYXN0Q2hpbGQsXCJpbnNlcnRCZWZvcmVcIik6dGhpcy5yZW5kZXJWaWV3KGEsby52aWV3KSl9fX19LHtrZXk6XCJvbkF0dHJpYnV0ZXNDaGFuZ2VcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldC5fX3Zjb25zb2xlX25vZGU7dCYmKHQ9dGhpcy5nZXROb2RlKGUudGFyZ2V0KSx0LnZpZXcmJnRoaXMucmVuZGVyVmlldyh0LHQudmlldywhMCkpfX0se2tleTpcIm9uQ2hhcmFjdGVyRGF0YUNoYW5nZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0Ll9fdmNvbnNvbGVfbm9kZTt0JiYodD10aGlzLmdldE5vZGUoZS50YXJnZXQpLHQudmlldyYmdGhpcy5yZW5kZXJWaWV3KHQsdC52aWV3LCEwKSl9fSx7a2V5OlwicmVuZGVyVmlld1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxvKXt2YXIgbj10aGlzLGk9bmV3IHBbXCJkZWZhdWx0XCJdKGUpLmdldCgpO3N3aXRjaChlLnZpZXc9aSxiW1wiZGVmYXVsdFwiXS5kZWxlZ2F0ZShpLFwiY2xpY2tcIixcIi52Y2VsbS1ub2RlXCIsZnVuY3Rpb24odCl7dC5zdG9wUHJvcGFnYXRpb24oKTt2YXIgbz10aGlzLnBhcmVudE5vZGU7aWYoIWJbXCJkZWZhdWx0XCJdLmhhc0NsYXNzKG8sXCJ2Y2VsbS1ub2NcIikpe24uYWN0aXZlZEVsZW09byxiW1wiZGVmYXVsdFwiXS5oYXNDbGFzcyhvLFwidmMtdG9nZ2xlXCIpP2JbXCJkZWZhdWx0XCJdLnJlbW92ZUNsYXNzKG8sXCJ2Yy10b2dnbGVcIik6YltcImRlZmF1bHRcIl0uYWRkQ2xhc3MobyxcInZjLXRvZ2dsZVwiKTtmb3IodmFyIGk9LTEsYT0wO2E8by5jaGlsZHJlbi5sZW5ndGg7YSsrKXt2YXIgcj1vLmNoaWxkcmVuW2FdO2JbXCJkZWZhdWx0XCJdLmhhc0NsYXNzKHIsXCJ2Y2VsbS1sXCIpJiYoaSsrLHIuY2hpbGRyZW4ubGVuZ3RoPjB8fChlLmNoaWxkTm9kZXNbaV0/bi5yZW5kZXJWaWV3KGUuY2hpbGROb2Rlc1tpXSxyLFwicmVwbGFjZVwiKTpyLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpKX19fSksbyl7Y2FzZVwicmVwbGFjZVwiOnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaSx0KTticmVhaztjYXNlXCJpbnNlcnRCZWZvcmVcIjp0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGksdCk7YnJlYWs7ZGVmYXVsdDp0LmFwcGVuZENoaWxkKGkpfXJldHVybiBpfX0se2tleTpcImdldE5vZGVcIix2YWx1ZTpmdW5jdGlvbihlKXtpZighdGhpcy5faXNJZ25vcmVkRWxlbWVudChlKSl7dmFyIHQ9ZS5fX3Zjb25zb2xlX25vZGV8fHt9O2lmKHQubm9kZVR5cGU9ZS5ub2RlVHlwZSx0Lm5vZGVOYW1lPWUubm9kZU5hbWUsdC50YWdOYW1lPWUudGFnTmFtZXx8XCJcIix0LnRleHRDb250ZW50PVwiXCIsdC5ub2RlVHlwZSE9ZS5URVhUX05PREUmJnQubm9kZVR5cGUhPWUuRE9DVU1FTlRfVFlQRV9OT0RFfHwodC50ZXh0Q29udGVudD1lLnRleHRDb250ZW50KSx0LmlkPWUuaWR8fFwiXCIsdC5jbGFzc05hbWU9ZS5jbGFzc05hbWV8fFwiXCIsdC5hdHRyaWJ1dGVzPVtdLGUuaGFzQXR0cmlidXRlcyYmZS5oYXNBdHRyaWJ1dGVzKCkpZm9yKHZhciBvPTA7bzxlLmF0dHJpYnV0ZXMubGVuZ3RoO28rKyl0LmF0dHJpYnV0ZXMucHVzaCh7bmFtZTplLmF0dHJpYnV0ZXNbb10ubmFtZSx2YWx1ZTplLmF0dHJpYnV0ZXNbb10udmFsdWV8fFwiXCJ9KTtpZih0LmNoaWxkTm9kZXM9W10sZS5jaGlsZE5vZGVzLmxlbmd0aD4wKWZvcih2YXIgbj0wO248ZS5jaGlsZE5vZGVzLmxlbmd0aDtuKyspe3ZhciBpPXRoaXMuZ2V0Tm9kZShlLmNoaWxkTm9kZXNbbl0pO2kmJnQuY2hpbGROb2Rlcy5wdXNoKGkpfXJldHVybiBlLl9fdmNvbnNvbGVfbm9kZT10LHR9fX0se2tleTpcIl9pc0lnbm9yZWRFbGVtZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUubm9kZVR5cGU9PWUuVEVYVF9OT0RFJiZcIlwiPT1lLnRleHRDb250ZW50LnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJHxcXG4rL2csXCJcIil9fSx7a2V5OlwiX2lzSW5WQ29uc29sZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lO3ZvaWQgMCE9dDspe2lmKFwiX192Y29uc29sZVwiPT10LmlkKXJldHVybiEwO3Q9dC5wYXJlbnROb2RlfHx2b2lkIDB9cmV0dXJuITF9fV0pLHR9KGRbXCJkZWZhdWx0XCJdKTt0W1wiZGVmYXVsdFwiXT1tLGUuZXhwb3J0cz10W1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oZSx0LG8pe3ZhciBuPW8oMzIpO1wic3RyaW5nXCI9PXR5cGVvZiBuJiYobj1bW2UuaWQsbixcIlwiXV0pO28oMTApKG4se30pO24ubG9jYWxzJiYoZS5leHBvcnRzPW4ubG9jYWxzKX0sZnVuY3Rpb24oZSx0LG8pe3Q9ZS5leHBvcnRzPW8oOSkoKSx0LnB1c2goW2UuaWQsJy52Y2VsbS1ub2Rle2NvbG9yOiMxODM2OTF9LnZjZWxtLWt7Y29sb3I6IzAwODZiM30udmNlbG0tdntjb2xvcjojOTA1fS52Y2VsbS1se3BhZGRpbmctbGVmdDo4cHg7cG9zaXRpb246cmVsYXRpdmU7d29yZC13cmFwOmJyZWFrLXdvcmQ7bGluZS1oZWlnaHQ6MX0udmNlbG0tbC52Yy10b2dnbGU+LnZjZWxtLW5vZGV7ZGlzcGxheTpibG9ja30udmNlbG0tbCAudmNlbG0tbm9kZTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xNSl9LnZjZWxtLWwudmNlbG0tbm9jIC52Y2VsbS1ub2RlOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS52Y2VsbS10e3doaXRlLXNwYWNlOnByZS13cmFwO3dvcmQtd3JhcDpicmVhay13b3JkfS52Y2VsbS1sIC52Y2VsbS1se2Rpc3BsYXk6bm9uZX0udmNlbG0tbC52Yy10b2dnbGU+LnZjZWxtLWx7bWFyZ2luLWxlZnQ6NHB4O2Rpc3BsYXk6YmxvY2t9LnZjZWxtLWw6YmVmb3Jle2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo2cHg7bGVmdDozcHg7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXI6M3B4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1sZWZ0LWNvbG9yOiMwMDB9LnZjZWxtLWwudmMtdG9nZ2xlOmJlZm9yZXtkaXNwbGF5OmJsb2NrO3RvcDo2cHg7bGVmdDowO2JvcmRlci10b3AtY29sb3I6IzAwMDtib3JkZXItbGVmdC1jb2xvcjp0cmFuc3BhcmVudH0udmNlbG0tbC52Y2VsbS1ub2M6YmVmb3Jle2Rpc3BsYXk6bm9uZX0nLFwiXCJdKX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9JzxkaXY+XFxuICA8ZGl2IGNsYXNzPVwidmMtbG9nXCI+PC9kaXY+XFxuPC9kaXY+J30sZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7aWYoZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciB0PXt9O2lmKG51bGwhPWUpZm9yKHZhciBvIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0W1wiZGVmYXVsdFwiXT1lLHR9ZnVuY3Rpb24gaShlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fWZ1bmN0aW9uIGEoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIHIoZSl7dmFyIHQ9W1wiYnJcIixcImhyXCIsXCJpbWdcIixcImlucHV0XCIsXCJsaW5rXCIsXCJtZXRhXCJdO3JldHVybiBlPWU/ZS50b0xvd2VyQ2FzZSgpOlwiXCIsdC5pbmRleE9mKGUpPi0xfWZ1bmN0aW9uIGwoZSl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGUpfWZ1bmN0aW9uIGMoZSl7cmV0dXJuIGUucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csXCJcIil9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciBuPXRbb107bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX1yZXR1cm4gZnVuY3Rpb24odCxvLG4pe3JldHVybiBvJiZlKHQucHJvdG90eXBlLG8pLG4mJmUodCxuKSx0fX0oKSxkPW8oMzUpLHU9aShkKSx2PW8oMzYpLGY9aSh2KSxwPW8oNCksaD0obihwKSxvKDUpKSxnPWkoaCksYj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7YSh0aGlzLGUpLHRoaXMubm9kZT10LHRoaXMudmlldz10aGlzLl9jcmVhdGUodGhpcy5ub2RlKX1yZXR1cm4gcyhlLFt7a2V5OlwiZ2V0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52aWV3fX0se2tleTpcIl9jcmVhdGVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7c3dpdGNoKGdbXCJkZWZhdWx0XCJdLmFkZENsYXNzKG8sXCJ2Y2VsbS1sXCIpLGUubm9kZVR5cGUpe2Nhc2Ugby5FTEVNRU5UX05PREU6dGhpcy5fY3JlYXRlRWxlbWVudE5vZGUoZSxvKTticmVhaztjYXNlIG8uVEVYVF9OT0RFOnRoaXMuX2NyZWF0ZVRleHROb2RlKGUsbyk7YnJlYWs7Y2FzZSBvLkNPTU1FTlRfTk9ERTpjYXNlIG8uRE9DVU1FTlRfTk9ERTpjYXNlIG8uRE9DVU1FTlRfVFlQRV9OT0RFOmNhc2Ugby5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFOn1yZXR1cm4gb319LHtrZXk6XCJfY3JlYXRlVGV4dE5vZGVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2dbXCJkZWZhdWx0XCJdLmFkZENsYXNzKHQsXCJ2Y2VsbS10IHZjZWxtLW5vY1wiKSxlLnRleHRDb250ZW50JiZ0LmFwcGVuZENoaWxkKGwoYyhlLnRleHRDb250ZW50KSkpfX0se2tleTpcIl9jcmVhdGVFbGVtZW50Tm9kZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG89cihlLnRhZ05hbWUpLG49bzswPT1lLmNoaWxkTm9kZXMubGVuZ3RoJiYobj0hMCk7dmFyIGk9Z1tcImRlZmF1bHRcIl0ucmVuZGVyKHVbXCJkZWZhdWx0XCJdLHtub2RlOmV9KSxhPWdbXCJkZWZhdWx0XCJdLnJlbmRlcihmW1wiZGVmYXVsdFwiXSx7bm9kZTplfSk7aWYobilnW1wiZGVmYXVsdFwiXS5hZGRDbGFzcyh0LFwidmNlbG0tbm9jXCIpLHQuYXBwZW5kQ2hpbGQoaSksb3x8dC5hcHBlbmRDaGlsZChhKTtlbHNle3QuYXBwZW5kQ2hpbGQoaSk7Zm9yKHZhciBsPTA7bDxlLmNoaWxkTm9kZXMubGVuZ3RoO2wrKyl7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtnW1wiZGVmYXVsdFwiXS5hZGRDbGFzcyhjLFwidmNlbG0tbFwiKSx0LmFwcGVuZENoaWxkKGMpfW98fHQuYXBwZW5kQ2hpbGQoYSl9fX1dKSxlfSgpO3RbXCJkZWZhdWx0XCJdPWIsZS5leHBvcnRzPXRbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz0nPHNwYW4gY2xhc3M9XCJ2Y2VsbS1ub2RlXCI+Jmx0O3t7bm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCl9fXt7aWYgKG5vZGUuY2xhc3NOYW1lIHx8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGgpfX1cXG4gIDxpIGNsYXNzPVwidmNlbG0ta1wiPlxcbiAgICB7e2ZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKX19XFxuICAgICAge3tpZiAobm9kZS5hdHRyaWJ1dGVzW2ldLnZhbHVlICE9PSBcXCdcXCcpfX1cXG4gICAgICAgIHt7bm9kZS5hdHRyaWJ1dGVzW2ldLm5hbWV9fT1cIjxpIGNsYXNzPVwidmNlbG0tdlwiPnt7bm9kZS5hdHRyaWJ1dGVzW2ldLnZhbHVlfX08L2k+XCJ7e2Vsc2V9fVxcbiAgICAgICAge3tub2RlLmF0dHJpYnV0ZXNbaV0ubmFtZX19e3svaWZ9fXt7L2Zvcn19PC9pPnt7L2lmfX0mZ3Q7PC9zcGFuPid9LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPSc8c3BhbiBjbGFzcz1cInZjZWxtLW5vZGVcIj4mbHQ7L3t7bm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCl9fSZndDs8L3NwYW4+J30sZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7aWYoZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciB0PXt9O2lmKG51bGwhPWUpZm9yKHZhciBvIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0W1wiZGVmYXVsdFwiXT1lLHR9ZnVuY3Rpb24gaShlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fWZ1bmN0aW9uIGEoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIHIoZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH1mdW5jdGlvbiBsKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciBuPXRbb107bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX1yZXR1cm4gZnVuY3Rpb24odCxvLG4pe3JldHVybiBvJiZlKHQucHJvdG90eXBlLG8pLG4mJmUodCxuKSx0fX0oKSxzPW8oMTgpLGQ9aShzKSx1PW8oMzgpLHY9aSh1KSxmPW8oMzkpLHA9aShmKSxoPW8oNCksZz1uKGgpLGI9byg1KSxtPWkoYikseT1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KCl7dmFyIGU7YSh0aGlzLHQpO2Zvcih2YXIgbz1hcmd1bWVudHMubGVuZ3RoLG49QXJyYXkobyksaT0wO28+aTtpKyspbltpXT1hcmd1bWVudHNbaV07dmFyIGw9cih0aGlzLChlPU9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbC5hcHBseShlLFt0aGlzXS5jb25jYXQobikpKTtyZXR1cm4gbC4kdGFiYm94PW1bXCJkZWZhdWx0XCJdLnJlbmRlcih2W1wiZGVmYXVsdFwiXSx7fSksbC5jdXJyZW50VHlwZT1cIlwiLGwudHlwZU5hbWVNYXA9e2Nvb2tpZXM6XCJDb29raWVzXCIsbG9jYWxzdG9yYWdlOlwiTG9jYWxTdG9yYWdlXCJ9LGx9cmV0dXJuIGwodCxlKSxjKHQsW3trZXk6XCJvblJlbmRlclRhYlwiLHZhbHVlOmZ1bmN0aW9uKGUpe2UodGhpcy4kdGFiYm94KX19LHtrZXk6XCJvbkFkZFRvcEJhclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD10aGlzLG89W1wiQ29va2llc1wiLFwiTG9jYWxTdG9yYWdlXCJdLG49W10saT0wO2k8by5sZW5ndGg7aSsrKW4ucHVzaCh7bmFtZTpvW2ldLGRhdGE6e3R5cGU6b1tpXS50b0xvd2VyQ2FzZSgpfSxjbGFzc05hbWU6XCJcIixvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIG1bXCJkZWZhdWx0XCJdLmhhc0NsYXNzKHRoaXMsXCJ2Yy1hY3RpdmVkXCIpPyExOih0LmN1cnJlbnRUeXBlPXRoaXMuZGF0YXNldC50eXBlLHZvaWQgdC5yZW5kZXJTdG9yYWdlKCkpfX0pO25bMF0uY2xhc3NOYW1lPVwidmMtYWN0aXZlZFwiLGUobil9fSx7a2V5Olwib25BZGRUb29sXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxvPVt7bmFtZTpcIlJlZnJlc2hcIixnbG9iYWw6ITEsb25DbGljazpmdW5jdGlvbihlKXt0LnJlbmRlclN0b3JhZ2UoKX19LHtuYW1lOlwiQ2xlYXJcIixnbG9iYWw6ITEsb25DbGljazpmdW5jdGlvbihlKXt0LmNsZWFyTG9nKCl9fV07ZShvKX19LHtrZXk6XCJvblJlYWR5XCIsdmFsdWU6ZnVuY3Rpb24oKXt9fSx7a2V5Olwib25TaG93XCIsdmFsdWU6ZnVuY3Rpb24oKXtcIlwiPT10aGlzLmN1cnJlbnRUeXBlJiYodGhpcy5jdXJyZW50VHlwZT1cImNvb2tpZXNcIix0aGlzLnJlbmRlclN0b3JhZ2UoKSl9fSx7a2V5OlwiY2xlYXJMb2dcIix2YWx1ZTpmdW5jdGlvbigpe2lmKHRoaXMuY3VycmVudFR5cGUmJndpbmRvdy5jb25maXJtKXt2YXIgZT13aW5kb3cuY29uZmlybShcIlJlbW92ZSBhbGwgXCIrdGhpcy50eXBlTmFtZU1hcFt0aGlzLmN1cnJlbnRUeXBlXStcIj9cIik7aWYoIWUpcmV0dXJuITF9c3dpdGNoKHRoaXMuY3VycmVudFR5cGUpe2Nhc2VcImNvb2tpZXNcIjp0aGlzLmNsZWFyQ29va2llTGlzdCgpO2JyZWFrO2Nhc2VcImxvY2Fsc3RvcmFnZVwiOnRoaXMuY2xlYXJMb2NhbFN0b3JhZ2VMaXN0KCk7YnJlYWs7ZGVmYXVsdDpyZXR1cm4hMX10aGlzLnJlbmRlclN0b3JhZ2UoKX19LHtrZXk6XCJyZW5kZXJTdG9yYWdlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1bXTtzd2l0Y2godGhpcy5jdXJyZW50VHlwZSl7Y2FzZVwiY29va2llc1wiOmU9dGhpcy5nZXRDb29raWVMaXN0KCk7YnJlYWs7Y2FzZVwibG9jYWxzdG9yYWdlXCI6ZT10aGlzLmdldExvY2FsU3RvcmFnZUxpc3QoKTticmVhaztkZWZhdWx0OnJldHVybiExfXZhciB0PW1bXCJkZWZhdWx0XCJdLm9uZShcIi52Yy1sb2dcIix0aGlzLiR0YWJib3gpO2lmKDA9PWUubGVuZ3RoKXQuaW5uZXJIVE1MPVwiXCI7ZWxzZXtmb3IodmFyIG89MDtvPGUubGVuZ3RoO28rKyllW29dLm5hbWU9Zy5odG1sRW5jb2RlKGVbb10ubmFtZSksZVtvXS52YWx1ZT1nLmh0bWxFbmNvZGUoZVtvXS52YWx1ZSk7dC5pbm5lckhUTUw9bVtcImRlZmF1bHRcIl0ucmVuZGVyKHBbXCJkZWZhdWx0XCJdLHtsaXN0OmV9LCEwKX19fSx7a2V5OlwiZ2V0Q29va2llTGlzdFwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYoIWRvY3VtZW50LmNvb2tpZXx8IW5hdmlnYXRvci5jb29raWVFbmFibGVkKXJldHVybltdO2Zvcih2YXIgZT1bXSx0PWRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIiksbz0wO288dC5sZW5ndGg7bysrKXt2YXIgbj10W29dLnNwbGl0KFwiPVwiKSxpPW4uc2hpZnQoKS5yZXBsYWNlKC9eIC8sXCJcIiksYT1uLmpvaW4oXCI9XCIpO2UucHVzaCh7bmFtZTpkZWNvZGVVUklDb21wb25lbnQoaSksdmFsdWU6ZGVjb2RlVVJJQ29tcG9uZW50KGEpfSl9cmV0dXJuIGV9fSx7a2V5OlwiZ2V0TG9jYWxTdG9yYWdlTGlzdFwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYoIXdpbmRvdy5sb2NhbFN0b3JhZ2UpcmV0dXJuW107dHJ5e2Zvcih2YXIgZT1bXSx0PTA7dDxsb2NhbFN0b3JhZ2UubGVuZ3RoO3QrKyl7dmFyIG89bG9jYWxTdG9yYWdlLmtleSh0KSxuPWxvY2FsU3RvcmFnZS5nZXRJdGVtKG8pO2UucHVzaCh7bmFtZTpvLHZhbHVlOm59KX1yZXR1cm4gZX1jYXRjaChpKXtyZXR1cm5bXX19fSx7a2V5OlwiY2xlYXJDb29raWVMaXN0XCIsdmFsdWU6ZnVuY3Rpb24oKXtpZihkb2N1bWVudC5jb29raWUmJm5hdmlnYXRvci5jb29raWVFbmFibGVkKXtmb3IodmFyIGU9dGhpcy5nZXRDb29raWVMaXN0KCksdD0wO3Q8ZS5sZW5ndGg7dCsrKWRvY3VtZW50LmNvb2tpZT1lW3RdLm5hbWUrXCI9O2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRcIjt0aGlzLnJlbmRlclN0b3JhZ2UoKX19fSx7a2V5OlwiY2xlYXJMb2NhbFN0b3JhZ2VMaXN0XCIsdmFsdWU6ZnVuY3Rpb24oKXtpZih3aW5kb3cubG9jYWxTdG9yYWdlKXRyeXtsb2NhbFN0b3JhZ2UuY2xlYXIoKSx0aGlzLnJlbmRlclN0b3JhZ2UoKX1jYXRjaChlKXthbGVydChcImxvY2FsU3RvcmFnZS5jbGVhcigpIGZhaWwuXCIpfX19XSksdH0oZFtcImRlZmF1bHRcIl0pO3RbXCJkZWZhdWx0XCJdPXksZS5leHBvcnRzPXRbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz0nPGRpdiBjbGFzcz1cInZjLXRhYmxlXCI+XFxuICA8ZGl2IGNsYXNzPVwidmMtbG9nXCI+PC9kaXY+XFxuPC9kaXY+J30sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9JzxkaXY+XFxuICA8ZGwgY2xhc3M9XCJ2Yy10YWJsZS1yb3dcIj5cXG4gICAgPGRkIGNsYXNzPVwidmMtdGFibGUtY29sXCI+TmFtZTwvZGQ+XFxuICAgIDxkZCBjbGFzcz1cInZjLXRhYmxlLWNvbCB2Yy10YWJsZS1jb2wtMlwiPlZhbHVlPC9kZD5cXG4gIDwvZGw+XFxuICB7e2ZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKyl9fVxcbiAgPGRsIGNsYXNzPVwidmMtdGFibGUtcm93XCI+XFxuICAgIDxkZCBjbGFzcz1cInZjLXRhYmxlLWNvbFwiPnt7bGlzdFtpXS5uYW1lfX08L2RkPlxcbiAgICA8ZGQgY2xhc3M9XCJ2Yy10YWJsZS1jb2wgdmMtdGFibGUtY29sLTJcIj57e2xpc3RbaV0udmFsdWV9fTwvZGQ+XFxuICA8L2RsPlxcbiAge3svZm9yfX1cXG48L2Rpdj4nfV0pfSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */
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
/* 45 */
/*!**************************************************!*\
  !*** D:/Develop/ASIA-POTASH/Utils/HZRecorder.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.HZRecorder = HZRecorder;\nfunction HZRecorder(stream, config) {\n  config = config || {};\n  config.sampleBits = config.sampleBits || 16; //采样数位 8, 16\n  config.sampleRate = config.sampleRate || 16000; //采样率16khz\n\n  var context = new (window.webkitAudioContext || window.AudioContext)();\n  var audioInput = context.createMediaStreamSource(stream);\n  var createScript = context.createScriptProcessor || context.createJavaScriptNode;\n  var recorder = createScript.apply(context, [4096, 1, 1]);\n  var audioData = {\n    size: 0 //录音文件长度\n    ,\n    buffer: [] //录音缓存\n    ,\n    inputSampleRate: context.sampleRate //输入采样率\n    ,\n    inputSampleBits: 16 //输入采样数位 8, 16\n    ,\n    outputSampleRate: config.sampleRate //输出采样率\n    ,\n    oututSampleBits: config.sampleBits //输出采样数位 8, 16\n    ,\n    input: function input(data) {\n      this.buffer.push(new Float32Array(data));\n      this.size += data.length;\n    },\n    compress: function compress() {\n      //合并压缩\n      //合并\n      var data = new Float32Array(this.size);\n      var offset = 0;\n      for (var i = 0; i < this.buffer.length; i++) {\n        data.set(this.buffer[i], offset);\n        offset += this.buffer[i].length;\n      }\n      //压缩\n      var compression = parseInt(this.inputSampleRate / this.outputSampleRate);\n      var length = data.length / compression;\n      var result = new Float32Array(length);\n      var index = 0,\n        j = 0;\n      while (index < length) {\n        result[index] = data[j];\n        j += compression;\n        index++;\n      }\n      return result;\n    },\n    encodeWAV: function encodeWAV() {\n      var sampleRate = Math.min(this.inputSampleRate, this.outputSampleRate);\n      var sampleBits = Math.min(this.inputSampleBits, this.oututSampleBits);\n      var bytes = this.compress();\n      var dataLength = bytes.length * (sampleBits / 8);\n      var buffer = new ArrayBuffer(44 + dataLength);\n      var data = new DataView(buffer);\n      var channelCount = 1; //单声道\n      var offset = 0;\n      var writeString = function writeString(str) {\n        for (var i = 0; i < str.length; i++) {\n          data.setUint8(offset + i, str.charCodeAt(i));\n        }\n      };\n\n      // 资源交换文件标识符 \n      writeString('RIFF');\n      offset += 4;\n      // 下个地址开始到文件尾总字节数,即文件大小-8 \n      data.setUint32(offset, 36 + dataLength, true);\n      offset += 4;\n      // WAV文件标志\n      writeString('WAVE');\n      offset += 4;\n      // 波形格式标志 \n      writeString('fmt ');\n      offset += 4;\n      // 过滤字节,一般为 0x10 = 16 \n      data.setUint32(offset, 16, true);\n      offset += 4;\n      // 格式类别 (PCM形式采样数据) \n      data.setUint16(offset, 1, true);\n      offset += 2;\n      // 通道数 \n      data.setUint16(offset, channelCount, true);\n      offset += 2;\n      // 采样率,每秒样本数,表示每个通道的播放速度 \n      data.setUint32(offset, sampleRate, true);\n      offset += 4;\n      // 波形数据传输率 (每秒平均字节数) 单声道×每秒数据位数×每样本数据位/8 \n      data.setUint32(offset, channelCount * sampleRate * (sampleBits / 8), true);\n      offset += 4;\n      // 快数据调整数 采样一次占用字节数 单声道×每样本的数据位数/8 \n      data.setUint16(offset, channelCount * (sampleBits / 8), true);\n      offset += 2;\n      // 每样本数据位数 \n      data.setUint16(offset, sampleBits, true);\n      offset += 2;\n      // 数据标识符 \n      writeString('data');\n      offset += 4;\n      // 采样数据总数,即数据总大小-44 \n      data.setUint32(offset, dataLength, true);\n      offset += 4;\n      // 写入采样数据 \n      if (sampleBits === 8) {\n        for (var i = 0; i < bytes.length; i++, offset++) {\n          var s = Math.max(-1, Math.min(1, bytes[i]));\n          var val = s < 0 ? s * 0x8000 : s * 0x7FFF;\n          val = parseInt(255 / (65535 / (val + 32768)));\n          data.setInt8(offset, val, true);\n        }\n      } else {\n        for (var i = 0; i < bytes.length; i++, offset += 2) {\n          var s = Math.max(-1, Math.min(1, bytes[i]));\n          data.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);\n        }\n      }\n      return new Blob([data], {\n        type: 'audio/wav'\n      });\n    }\n  };\n  //开始录音\n  this.start = function () {\n    audioInput.connect(recorder);\n    recorder.connect(context.destination);\n  };\n\n  //停止\n  this.stop = function () {\n    recorder.disconnect();\n  };\n\n  //获取音频文件\n  this.getBlob = function () {\n    this.stop();\n    return audioData.encodeWAV();\n  };\n\n  //回放\n  this.play = function (audio) {\n    var blob = this.getBlob();\n    // saveAs(blob, \"F:/3.wav\");\n    audio.src = window.URL.createObjectURL(this.getBlob());\n  };\n\n  //上传\n  this.upload = function () {\n    return this.getBlob();\n  };\n\n  //音频采集\n  recorder.onaudioprocess = function (e) {\n    audioData.input(e.inputBuffer.getChannelData(0));\n    //record(e.inputBuffer.getChannelData(0));\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vVXRpbHMvSFpSZWNvcmRlci5qcyJdLCJuYW1lcyI6WyJIWlJlY29yZGVyIiwic3RyZWFtIiwiY29uZmlnIiwic2FtcGxlQml0cyIsInNhbXBsZVJhdGUiLCJjb250ZXh0Iiwid2luZG93Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiQXVkaW9Db250ZXh0IiwiYXVkaW9JbnB1dCIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiY3JlYXRlU2NyaXB0IiwiY3JlYXRlU2NyaXB0UHJvY2Vzc29yIiwiY3JlYXRlSmF2YVNjcmlwdE5vZGUiLCJyZWNvcmRlciIsImFwcGx5IiwiYXVkaW9EYXRhIiwic2l6ZSIsImJ1ZmZlciIsImlucHV0U2FtcGxlUmF0ZSIsImlucHV0U2FtcGxlQml0cyIsIm91dHB1dFNhbXBsZVJhdGUiLCJvdXR1dFNhbXBsZUJpdHMiLCJpbnB1dCIsImRhdGEiLCJwdXNoIiwiRmxvYXQzMkFycmF5IiwibGVuZ3RoIiwiY29tcHJlc3MiLCJvZmZzZXQiLCJpIiwic2V0IiwiY29tcHJlc3Npb24iLCJwYXJzZUludCIsInJlc3VsdCIsImluZGV4IiwiaiIsImVuY29kZVdBViIsIk1hdGgiLCJtaW4iLCJieXRlcyIsImRhdGFMZW5ndGgiLCJBcnJheUJ1ZmZlciIsIkRhdGFWaWV3IiwiY2hhbm5lbENvdW50Iiwid3JpdGVTdHJpbmciLCJzdHIiLCJzZXRVaW50OCIsImNoYXJDb2RlQXQiLCJzZXRVaW50MzIiLCJzZXRVaW50MTYiLCJzIiwibWF4IiwidmFsIiwic2V0SW50OCIsInNldEludDE2IiwiQmxvYiIsInR5cGUiLCJzdGFydCIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsInN0b3AiLCJkaXNjb25uZWN0IiwiZ2V0QmxvYiIsInBsYXkiLCJhdWRpbyIsImJsb2IiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ1cGxvYWQiLCJvbmF1ZGlvcHJvY2VzcyIsImUiLCJpbnB1dEJ1ZmZlciIsImdldENoYW5uZWxEYXRh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Q3ZCakQsVUFBVSxDQUFDa0QsT0FBTyxDQUFDN0MsUUFBUSxDQUFDO0lBQzVCQSxRQUFRLENBQUM2QyxPQUFPLENBQUN0RCxPQUFPLENBQUN1RCxXQUFXLENBQUM7RUFDdkMsQ0FBQzs7RUFFRDtFQUNBLElBQUksQ0FBQ0MsSUFBSSxHQUFHLFlBQVk7SUFDdEIvQyxRQUFRLENBQUNnRCxVQUFVLEVBQUU7RUFDdkIsQ0FBQzs7RUFFRDtFQUNBLElBQUksQ0FBQ0MsT0FBTyxHQUFHLFlBQVk7SUFDekIsSUFBSSxDQUFDRixJQUFJLEVBQUU7SUFDWCxPQUFPN0MsU0FBUyxDQUFDcUIsU0FBUyxFQUFFO0VBQzlCLENBQUM7O0VBRUQ7RUFDQSxJQUFJLENBQUMyQixJQUFJLEdBQUcsVUFBVUMsS0FBSyxFQUFFO0lBQzVCLElBQUlDLElBQUksR0FBQyxJQUFJLENBQUNILE9BQU8sRUFBRTtJQUN2QjtJQUNBRSxLQUFLLENBQUNFLEdBQUcsR0FBRzdELE1BQU0sQ0FBQzhELEdBQUcsQ0FBQ0MsZUFBZSxDQUFDLElBQUksQ0FBQ04sT0FBTyxFQUFFLENBQUM7RUFDdkQsQ0FBQzs7RUFFRDtFQUNBLElBQUksQ0FBQ08sTUFBTSxHQUFHLFlBQVk7SUFDekIsT0FBTyxJQUFJLENBQUNQLE9BQU8sRUFBRTtFQUN0QixDQUFDOztFQUVEO0VBQ0FqRCxRQUFRLENBQUN5RCxjQUFjLEdBQUcsVUFBVUMsQ0FBQyxFQUFFO0lBQ3JDeEQsU0FBUyxDQUFDTyxLQUFLLENBQUNpRCxDQUFDLENBQUNDLFdBQVcsQ0FBQ0MsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hEO0VBQ0YsQ0FBQztBQUVIIiwiZmlsZSI6IjQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIEhaUmVjb3JkZXIoc3RyZWFtLCBjb25maWcpIHtcclxuICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgY29uZmlnLnNhbXBsZUJpdHMgPSBjb25maWcuc2FtcGxlQml0cyB8fCAxNjsgICAvL+mHh+agt+aVsOS9jSA4LCAxNlxyXG4gIGNvbmZpZy5zYW1wbGVSYXRlID0gY29uZmlnLnNhbXBsZVJhdGUgfHwgMTYwMDA7ICAvL+mHh+agt+eOhzE2a2h6XHJcblxyXG4gIHZhciBjb250ZXh0ID0gbmV3ICh3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0IHx8IHdpbmRvdy5BdWRpb0NvbnRleHQpKCk7XHJcbiAgdmFyIGF1ZGlvSW5wdXQgPSBjb250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHN0cmVhbSk7XHJcbiAgdmFyIGNyZWF0ZVNjcmlwdCA9IGNvbnRleHQuY3JlYXRlU2NyaXB0UHJvY2Vzc29yIHx8IGNvbnRleHQuY3JlYXRlSmF2YVNjcmlwdE5vZGU7XHJcbiAgdmFyIHJlY29yZGVyID0gY3JlYXRlU2NyaXB0LmFwcGx5KGNvbnRleHQsIFs0MDk2LCAxLCAxXSk7XHJcblxyXG4gIHZhciBhdWRpb0RhdGEgPSB7XHJcbiAgICBzaXplOiAwICAgICAvL+W9lemfs+aWh+S7tumVv+W6plxyXG4gICAgLCBidWZmZXI6IFtdICAgLy/lvZXpn7PnvJPlrZhcclxuICAgICwgaW5wdXRTYW1wbGVSYXRlOiBjb250ZXh0LnNhbXBsZVJhdGUgIC8v6L6T5YWl6YeH5qC3546HXHJcbiAgICAsIGlucHV0U2FtcGxlQml0czogMTYgICAgLy/ovpPlhaXph4fmoLfmlbDkvY0gOCwgMTZcclxuICAgICwgb3V0cHV0U2FtcGxlUmF0ZTogY29uZmlnLnNhbXBsZVJhdGUgIC8v6L6T5Ye66YeH5qC3546HXHJcbiAgICAsIG91dHV0U2FtcGxlQml0czogY29uZmlnLnNhbXBsZUJpdHMgICAgLy/ovpPlh7rph4fmoLfmlbDkvY0gOCwgMTZcclxuICAgICwgaW5wdXQ6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgIHRoaXMuYnVmZmVyLnB1c2gobmV3IEZsb2F0MzJBcnJheShkYXRhKSk7XHJcbiAgICAgIHRoaXMuc2l6ZSArPSBkYXRhLmxlbmd0aDtcclxuICAgIH1cclxuICAgICwgY29tcHJlc3M6IGZ1bmN0aW9uICgpIHsgLy/lkIjlubbljovnvKlcclxuICAgICAgLy/lkIjlubZcclxuICAgICAgdmFyIGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuc2l6ZSk7XHJcbiAgICAgIHZhciBvZmZzZXQgPSAwO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYnVmZmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZGF0YS5zZXQodGhpcy5idWZmZXJbaV0sIG9mZnNldCk7XHJcbiAgICAgICAgb2Zmc2V0ICs9IHRoaXMuYnVmZmVyW2ldLmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgICAvL+WOi+e8qVxyXG4gICAgICB2YXIgY29tcHJlc3Npb24gPSBwYXJzZUludCh0aGlzLmlucHV0U2FtcGxlUmF0ZSAvIHRoaXMub3V0cHV0U2FtcGxlUmF0ZSk7XHJcbiAgICAgIHZhciBsZW5ndGggPSBkYXRhLmxlbmd0aCAvIGNvbXByZXNzaW9uO1xyXG4gICAgICB2YXIgcmVzdWx0ID0gbmV3IEZsb2F0MzJBcnJheShsZW5ndGgpO1xyXG4gICAgICB2YXIgaW5kZXggPSAwLCBqID0gMDtcclxuICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IGRhdGFbal07XHJcbiAgICAgICAgaiArPSBjb21wcmVzc2lvbjtcclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICAsIGVuY29kZVdBVjogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgc2FtcGxlUmF0ZSA9IE1hdGgubWluKHRoaXMuaW5wdXRTYW1wbGVSYXRlLCB0aGlzLm91dHB1dFNhbXBsZVJhdGUpO1xyXG4gICAgICB2YXIgc2FtcGxlQml0cyA9IE1hdGgubWluKHRoaXMuaW5wdXRTYW1wbGVCaXRzLCB0aGlzLm91dHV0U2FtcGxlQml0cyk7XHJcbiAgICAgIHZhciBieXRlcyA9IHRoaXMuY29tcHJlc3MoKTtcclxuICAgICAgdmFyIGRhdGFMZW5ndGggPSBieXRlcy5sZW5ndGggKiAoc2FtcGxlQml0cyAvIDgpO1xyXG4gICAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDQ0ICsgZGF0YUxlbmd0aCk7XHJcbiAgICAgIHZhciBkYXRhID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XHJcblxyXG4gICAgICB2YXIgY2hhbm5lbENvdW50ID0gMTsvL+WNleWjsOmBk1xyXG4gICAgICB2YXIgb2Zmc2V0ID0gMDtcclxuXHJcbiAgICAgIHZhciB3cml0ZVN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgZGF0YS5zZXRVaW50OChvZmZzZXQgKyBpLCBzdHIuY2hhckNvZGVBdChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyDotYTmupDkuqTmjaLmlofku7bmoIfor4bnrKYgXHJcbiAgICAgIHdyaXRlU3RyaW5nKCdSSUZGJyk7IG9mZnNldCArPSA0O1xyXG4gICAgICAvLyDkuIvkuKrlnLDlnYDlvIDlp4vliLDmlofku7blsL7mgLvlrZfoioLmlbAs5Y2z5paH5Lu25aSn5bCPLTggXHJcbiAgICAgIGRhdGEuc2V0VWludDMyKG9mZnNldCwgMzYgKyBkYXRhTGVuZ3RoLCB0cnVlKTsgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgIC8vIFdBVuaWh+S7tuagh+W/l1xyXG4gICAgICB3cml0ZVN0cmluZygnV0FWRScpOyBvZmZzZXQgKz0gNDtcclxuICAgICAgLy8g5rOi5b2i5qC85byP5qCH5b+XIFxyXG4gICAgICB3cml0ZVN0cmluZygnZm10ICcpOyBvZmZzZXQgKz0gNDtcclxuICAgICAgLy8g6L+H5ruk5a2X6IqCLOS4gOiIrOS4uiAweDEwID0gMTYgXHJcbiAgICAgIGRhdGEuc2V0VWludDMyKG9mZnNldCwgMTYsIHRydWUpOyBvZmZzZXQgKz0gNDtcclxuICAgICAgLy8g5qC85byP57G75YirIChQQ03lvaLlvI/ph4fmoLfmlbDmja4pIFxyXG4gICAgICBkYXRhLnNldFVpbnQxNihvZmZzZXQsIDEsIHRydWUpOyBvZmZzZXQgKz0gMjtcclxuICAgICAgLy8g6YCa6YGT5pWwIFxyXG4gICAgICBkYXRhLnNldFVpbnQxNihvZmZzZXQsIGNoYW5uZWxDb3VudCwgdHJ1ZSk7IG9mZnNldCArPSAyO1xyXG4gICAgICAvLyDph4fmoLfnjocs5q+P56eS5qC35pys5pWwLOihqOekuuavj+S4qumAmumBk+eahOaSreaUvumAn+W6piBcclxuICAgICAgZGF0YS5zZXRVaW50MzIob2Zmc2V0LCBzYW1wbGVSYXRlLCB0cnVlKTsgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgIC8vIOazouW9ouaVsOaNruS8oOi+k+eOhyAo5q+P56eS5bmz5Z2H5a2X6IqC5pWwKSDljZXlo7DpgZPDl+avj+enkuaVsOaNruS9jeaVsMOX5q+P5qC35pys5pWw5o2u5L2NLzggXHJcbiAgICAgIGRhdGEuc2V0VWludDMyKG9mZnNldCwgY2hhbm5lbENvdW50ICogc2FtcGxlUmF0ZSAqIChzYW1wbGVCaXRzIC8gOCksIHRydWUpOyBvZmZzZXQgKz0gNDtcclxuICAgICAgLy8g5b+r5pWw5o2u6LCD5pW05pWwIOmHh+agt+S4gOasoeWNoOeUqOWtl+iKguaVsCDljZXlo7DpgZPDl+avj+agt+acrOeahOaVsOaNruS9jeaVsC84IFxyXG4gICAgICBkYXRhLnNldFVpbnQxNihvZmZzZXQsIGNoYW5uZWxDb3VudCAqIChzYW1wbGVCaXRzIC8gOCksIHRydWUpOyBvZmZzZXQgKz0gMjtcclxuICAgICAgLy8g5q+P5qC35pys5pWw5o2u5L2N5pWwIFxyXG4gICAgICBkYXRhLnNldFVpbnQxNihvZmZzZXQsIHNhbXBsZUJpdHMsIHRydWUpOyBvZmZzZXQgKz0gMjtcclxuICAgICAgLy8g5pWw5o2u5qCH6K+G56ymIFxyXG4gICAgICB3cml0ZVN0cmluZygnZGF0YScpOyBvZmZzZXQgKz0gNDtcclxuICAgICAgLy8g6YeH5qC35pWw5o2u5oC75pWwLOWNs+aVsOaNruaAu+Wkp+Wwjy00NCBcclxuICAgICAgZGF0YS5zZXRVaW50MzIob2Zmc2V0LCBkYXRhTGVuZ3RoLCB0cnVlKTsgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgIC8vIOWGmeWFpemHh+agt+aVsOaNriBcclxuICAgICAgaWYgKHNhbXBsZUJpdHMgPT09IDgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrLCBvZmZzZXQrKykge1xyXG4gICAgICAgICAgdmFyIHMgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgYnl0ZXNbaV0pKTtcclxuICAgICAgICAgIHZhciB2YWwgPSBzIDwgMCA/IHMgKiAweDgwMDAgOiBzICogMHg3RkZGO1xyXG4gICAgICAgICAgdmFsID0gcGFyc2VJbnQoMjU1IC8gKDY1NTM1IC8gKHZhbCArIDMyNzY4KSkpO1xyXG4gICAgICAgICAgZGF0YS5zZXRJbnQ4KG9mZnNldCwgdmFsLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKywgb2Zmc2V0ICs9IDIpIHtcclxuICAgICAgICAgIHZhciBzID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGJ5dGVzW2ldKSk7XHJcbiAgICAgICAgICBkYXRhLnNldEludDE2KG9mZnNldCwgcyA8IDAgPyBzICogMHg4MDAwIDogcyAqIDB4N0ZGRiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEJsb2IoW2RhdGFdLCB7IHR5cGU6ICdhdWRpby93YXYnIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy/lvIDlp4vlvZXpn7NcclxuICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgYXVkaW9JbnB1dC5jb25uZWN0KHJlY29yZGVyKTtcclxuICAgIHJlY29yZGVyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XHJcbiAgfVxyXG5cclxuICAvL+WBnOatolxyXG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJlY29yZGVyLmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcblxyXG4gIC8v6I635Y+W6Z+z6aKR5paH5Lu2XHJcbiAgdGhpcy5nZXRCbG9iID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zdG9wKCk7XHJcbiAgICByZXR1cm4gYXVkaW9EYXRhLmVuY29kZVdBVigpO1xyXG4gIH1cclxuXHJcbiAgLy/lm57mlL5cclxuICB0aGlzLnBsYXkgPSBmdW5jdGlvbiAoYXVkaW8pIHtcclxuICAgdmFyIGJsb2I9dGhpcy5nZXRCbG9iKCk7XHJcbiAgIC8vIHNhdmVBcyhibG9iLCBcIkY6LzMud2F2XCIpO1xyXG4gICBhdWRpby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLmdldEJsb2IoKSk7XHJcbiAgfVxyXG5cclxuICAvL+S4iuS8oFxyXG4gIHRoaXMudXBsb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICByZXR1cm4gdGhpcy5nZXRCbG9iKClcclxuICB9XHJcblxyXG4gIC8v6Z+z6aKR6YeH6ZuGXHJcbiAgcmVjb3JkZXIub25hdWRpb3Byb2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgYXVkaW9EYXRhLmlucHV0KGUuaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCkpO1xyXG4gICAgLy9yZWNvcmQoZS5pbnB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YSgwKSk7XHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///45\n");

/***/ }),
/* 46 */
/*!******************************************!*\
  !*** D:/Develop/ASIA-POTASH/Utils/ws.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.websocketOnmessagePotassium = exports.sendDataPotassium = exports.initWebSocketPotassium = exports.closeWebsocketPotassium = void 0;\nvar ws = null;\nvar weboscketPotassium_callback = null;\n//避免重复连接\nvar lockReconnect = false;\nvar timeoutnum = null; //断开 重连倒计时\nvar initWebSocketPotassium = function initWebSocketPotassium(wsurl, callback) {\n  weboscketPotassium_callback = callback;\n  // let wsurl = \"wss://share-test.metazen-tech.com:3000/\";\n  // let wsurl = \"wss://10.10.110.60:3000/\";\n  // let wsurl = \"ws://10.10.10.216:3000/\";\n  // let wsurl = \"wss://i25817465a.imdo.co\";\n\n  //初始化 websocket\n  if ('WebSocket' in window) {\n    ws = new WebSocket(wsurl);\n    ws.onmessage = websocketOnmessagePotassium;\n    ws.onopen = websocketOnopen;\n    ws.onerror = websocketOnerror;\n    ws.onclose = websocketClose;\n  } else {\n    __f__(\"log\", 'Current browser Not support websocket', \" at Utils/ws.js:22\");\n  }\n};\n//获取 websocket 推送的数据\nexports.initWebSocketPotassium = initWebSocketPotassium;\nvar websocketOnmessagePotassium = function websocketOnmessagePotassium(msg) {\n  // console.log(msg);\n  heartCheck.reset().start();\n  var result = null;\n  if (msg.data instanceof Blob) {\n    var reader = new FileReader();\n    reader.readAsText(msg.data, 'UTF-8');\n    reader.onload = function (e) {\n      result = JSON.parse(reader.result);\n      // console.log(\"主监websocket收到\", result);\n      weboscketPotassium_callback(msg);\n    };\n  } else {\n    // result = msg.data;\n    // console.log(\"主监websocket收到\", msg);\n    //console.log(\"websocket收到\", result);\n    weboscketPotassium_callback(msg);\n  }\n};\n\n// 发送数据\nexports.websocketOnmessagePotassium = websocketOnmessagePotassium;\nvar sendDataPotassium = function sendDataPotassium(data) {\n  //  判断 data 数据类型\n  if (typeof data == 'string') {\n    data = data;\n  } else {\n    data = JSON.stringify(data);\n  }\n  //  判断 websocket 的状态\n  if (ws.readyState === ws.OPEN) {\n    __f__(\"log\", '双开发送信息：', data, \" at Utils/ws.js:56\");\n    // 已经打开,可以直接发送\n    ws.send(data);\n  } else if (ws.readyState === ws.CONNECTING) {\n    // 正在开启状态中,则 1 秒后重新发送\n    setTimeout(function () {\n      ws.send(data);\n    }, 1000);\n  } else {\n    // 未打开，则开启后重新调用\n    initWebSocketPotassium();\n    sendData(data);\n  }\n};\n// 连接关闭事件\nexports.sendDataPotassium = sendDataPotassium;\nvar websocketClose = function websocketClose(e) {\n  __f__(\"log\", '双开连接关闭', e, \" at Utils/ws.js:72\");\n  heartCheck.reset(); //心跳检测\n  // reconnect();\n};\n// 连接失败时重新连接\nvar websocketOnerror = function websocketOnerror() {\n  lockReconnect = false;\n  // reconnect();\n};\n// 手动关闭 websocket\nvar closeWebsocketPotassium = function closeWebsocketPotassium() {\n  __f__(\"log\", '双开手动关闭 websocket', \" at Utils/ws.js:84\");\n  if (ws) ws.close();\n};\n// 重连\nexports.closeWebsocketPotassium = closeWebsocketPotassium;\nvar reconnect = function reconnect() {\n  if (lockReconnect) {\n    return;\n  }\n  // 没连接上会一直重连，设置延迟避免请求过多\n  timeoutnum && clearTimeout(timeoutnum);\n  timeoutnum = setTimeout(function () {\n    lockReconnect = false;\n    __f__(\"log\", '双开重连中...', \" at Utils/ws.js:97\");\n    initWebSocketPotassium();\n  }, 5000);\n};\nvar websocketOnopen = function websocketOnopen() {\n  __f__(\"log\", '双开连接打开！', \" at Utils/ws.js:102\");\n  heartCheck.reset().start();\n};\nvar heartCheck = {\n  //心跳检测\n  // timeout: 240 * 1000,\n  timeout: 5000,\n  timeoutObj: null,\n  serverTimeoutObj: null,\n  reset: function reset() {\n    clearTimeout(this.timeoutObj);\n    clearTimeout(this.serverTimeoutObj);\n    return this;\n  },\n  start: function start() {\n    var _this = this;\n    var that = this;\n    this.timeoutObj = setTimeout(function () {\n      __f__(\"log\", 'ping', \" at Utils/ws.js:118\");\n      //发送数据，如果onmessage能接收到数据，表示连接正常,然后在onmessage里面执行reset方法清除定时器\n      ws.send(JSON.stringify({\n        talk_data: 'ping'\n      }));\n      _this.serverTimeoutObj = setTimeout(function () {\n        ws.close();\n      }, that.timeout);\n    }, this.timeout);\n  }\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vVXRpbHMvd3MuanMiXSwibmFtZXMiOlsid3MiLCJ3ZWJvc2NrZXRQb3Rhc3NpdW1fY2FsbGJhY2siLCJsb2NrUmVjb25uZWN0IiwidGltZW91dG51bSIsImluaXRXZWJTb2NrZXRQb3Rhc3NpdW0iLCJ3c3VybCIsImNhbGxiYWNrIiwid2luZG93IiwiV2ViU29ja2V0Iiwib25tZXNzYWdlIiwid2Vic29ja2V0T25tZXNzYWdlUG90YXNzaXVtIiwib25vcGVuIiwid2Vic29ja2V0T25vcGVuIiwib25lcnJvciIsIndlYnNvY2tldE9uZXJyb3IiLCJvbmNsb3NlIiwid2Vic29ja2V0Q2xvc2UiLCJtc2ciLCJoZWFydENoZWNrIiwicmVzZXQiLCJzdGFydCIsInJlc3VsdCIsImRhdGEiLCJCbG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc1RleHQiLCJvbmxvYWQiLCJlIiwiSlNPTiIsInBhcnNlIiwic2VuZERhdGFQb3Rhc3NpdW0iLCJzdHJpbmdpZnkiLCJyZWFkeVN0YXRlIiwiT1BFTiIsInNlbmQiLCJDT05ORUNUSU5HIiwic2V0VGltZW91dCIsInNlbmREYXRhIiwiY2xvc2VXZWJzb2NrZXRQb3Rhc3NpdW0iLCJjbG9zZSIsInJlY29ubmVjdCIsImNsZWFyVGltZW91dCIsInRpbWVvdXQiLCJ0aW1lb3V0T2JqIiwic2VydmVyVGltZW91dE9iaiIsInRoYXQiLCJ0YWxrX2RhdGEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLElBQUlBLEVBQUUsR0FBRyxJQUFJO0FBQ2IsSUFBSUMsMkJBQTJCLEdBQUcsSUFBSTtBQUN0QztBQUNBLElBQUlDLGFBQWEsR0FBRyxLQUFLO0FBQ3pCLElBQUlDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUN2QixJQUFJQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXNCLENBQUlDLEtBQUssRUFBQ0MsUUFBUSxFQUFLO0VBQzdDTCwyQkFBMkIsR0FBR0ssUUFBUTtFQUN0QztFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBLElBQUksV0FBVyxJQUFJQyxNQUFNLEVBQUU7SUFDdkJQLEVBQUUsR0FBRyxJQUFJUSxTQUFTLENBQUNILEtBQUssQ0FBQztJQUN6QkwsRUFBRSxDQUFDUyxTQUFTLEdBQUdDLDJCQUEyQjtJQUMxQ1YsRUFBRSxDQUFDVyxNQUFNLEdBQUdDLGVBQWU7SUFDM0JaLEVBQUUsQ0FBQ2EsT0FBTyxHQUFHQyxnQkFBZ0I7SUFDN0JkLEVBQUUsQ0FBQ2UsT0FBTyxHQUFHQyxjQUFjO0VBQy9CLENBQUMsTUFBTTtJQUNILGFBQVksdUNBQXVDO0VBQ3ZEO0FBQ0osQ0FBQztBQUNEO0FBQUE7QUFDQSxJQUFJTiwyQkFBMkIsR0FBRyxTQUE5QkEsMkJBQTJCLENBQUdPLEdBQUcsRUFBSTtFQUNyQztFQUNBQyxVQUFVLENBQUNDLEtBQUssRUFBRSxDQUFDQyxLQUFLLEVBQUU7RUFDMUIsSUFBSUMsTUFBTSxHQUFHLElBQUk7RUFDakIsSUFBSUosR0FBRyxDQUFDSyxJQUFJLFlBQVlDLElBQUksRUFBRTtJQUMxQixJQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBVSxFQUFFO0lBQy9CRCxNQUFNLENBQUNFLFVBQVUsQ0FBQ1QsR0FBRyxDQUFDSyxJQUFJLEVBQUUsT0FBTyxDQUFDO0lBQ3BDRSxNQUFNLENBQUNHLE1BQU0sR0FBRyxVQUFDQyxDQUFDLEVBQUs7TUFDbkJQLE1BQU0sR0FBR1EsSUFBSSxDQUFDQyxLQUFLLENBQUNOLE1BQU0sQ0FBQ0gsTUFBTSxDQUFDO01BQ2xDO01BQ0FwQiwyQkFBMkIsQ0FBQ2dCLEdBQUcsQ0FBQztJQUNwQyxDQUFDO0VBQ0wsQ0FBQyxNQUFNO0lBQ0g7SUFDQTtJQUNBO0lBQ0FoQiwyQkFBMkIsQ0FBQ2dCLEdBQUcsQ0FBQztFQUNwQztBQUNKLENBQUM7O0FBRUQ7QUFBQTtBQUNBLElBQUljLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUIsQ0FBSVQsSUFBSSxFQUFLO0VBQzlCO0VBQ0EsSUFBSSxPQUFPQSxJQUFJLElBQUksUUFBUSxFQUFFO0lBQ3pCQSxJQUFJLEdBQUdBLElBQUk7RUFDZixDQUFDLE1BQU07SUFDSEEsSUFBSSxHQUFHTyxJQUFJLENBQUNHLFNBQVMsQ0FBQ1YsSUFBSSxDQUFDO0VBQy9CO0VBQ0E7RUFDQSxJQUFJdEIsRUFBRSxDQUFDaUMsVUFBVSxLQUFLakMsRUFBRSxDQUFDa0MsSUFBSSxFQUFFO0lBQzNCLGFBQVksU0FBUyxFQUFFWixJQUFJO0lBQzNCO0lBQ0F0QixFQUFFLENBQUNtQyxJQUFJLENBQUNiLElBQUksQ0FBQztFQUNqQixDQUFDLE1BQU0sSUFBSXRCLEVBQUUsQ0FBQ2lDLFVBQVUsS0FBS2pDLEVBQUUsQ0FBQ29DLFVBQVUsRUFBRTtJQUN4QztJQUNBQyxVQUFVLENBQUMsWUFBTTtNQUNickMsRUFBRSxDQUFDbUMsSUFBSSxDQUFDYixJQUFJLENBQUM7SUFDakIsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNaLENBQUMsTUFBTTtJQUNIO0lBQ0FsQixzQkFBc0IsRUFBRTtJQUN4QmtDLFFBQVEsQ0FBQ2hCLElBQUksQ0FBQztFQUNsQjtBQUNKLENBQUM7QUFDRDtBQUFBO0FBQ0EsSUFBSU4sY0FBYyxHQUFHLFNBQWpCQSxjQUFjLENBQUlZLENBQUMsRUFBSztFQUN4QixhQUFZLFFBQVEsRUFBRUEsQ0FBQztFQUN2QlYsVUFBVSxDQUFDQyxLQUFLLEVBQUUsQ0FBQztFQUNuQjtBQUVKLENBQUM7QUFDRDtBQUNBLElBQUlMLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0IsR0FBUztFQUN6QlosYUFBYSxHQUFHLEtBQUs7RUFDckI7QUFDSixDQUFDO0FBQ0Q7QUFDQSxJQUFJcUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUF1QixHQUFTO0VBQ2hDLGFBQVksa0JBQWtCO0VBQzlCLElBQUl2QyxFQUFFLEVBQ0ZBLEVBQUUsQ0FBQ3dDLEtBQUssRUFBRTtBQUNsQixDQUFDO0FBQ0Q7QUFBQTtBQUNBLElBQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFTLEdBQVM7RUFDbEIsSUFBSXZDLGFBQWEsRUFBRTtJQUNmO0VBQ0o7RUFDQTtFQUNBQyxVQUFVLElBQUl1QyxZQUFZLENBQUN2QyxVQUFVLENBQUM7RUFDdENBLFVBQVUsR0FBR2tDLFVBQVUsQ0FBQyxZQUFZO0lBQ2hDbkMsYUFBYSxHQUFHLEtBQUs7SUFDckIsYUFBWSxVQUFVO0lBQ3RCRSxzQkFBc0IsRUFBRTtFQUM1QixDQUFDLEVBQUUsSUFBSSxDQUFDO0FBQ1osQ0FBQztBQUNELElBQUlRLGVBQWUsR0FBRyxTQUFsQkEsZUFBZSxHQUFTO0VBQ3hCLGFBQVksU0FBUztFQUNyQk0sVUFBVSxDQUFDQyxLQUFLLEVBQUUsQ0FBQ0MsS0FBSyxFQUFFO0FBQzlCLENBQUM7QUFDRCxJQUFJRixVQUFVLEdBQUc7RUFBRTtFQUNmO0VBQ0F5QixPQUFPLEVBQUUsSUFBSTtFQUNiQyxVQUFVLEVBQUUsSUFBSTtFQUNoQkMsZ0JBQWdCLEVBQUUsSUFBSTtFQUN0QjFCLEtBQUssbUJBQUc7SUFDSnVCLFlBQVksQ0FBQyxJQUFJLENBQUNFLFVBQVUsQ0FBQztJQUM3QkYsWUFBWSxDQUFDLElBQUksQ0FBQ0csZ0JBQWdCLENBQUM7SUFDbkMsT0FBTyxJQUFJO0VBQ2YsQ0FBQztFQUNEekIsS0FBSyxtQkFBRztJQUFBO0lBQ0osSUFBSTBCLElBQUksR0FBRyxJQUFJO0lBQ2YsSUFBSSxDQUFDRixVQUFVLEdBQUdQLFVBQVUsQ0FBQyxZQUFNO01BQy9CLGFBQVksTUFBTTtNQUNsQjtNQUNBckMsRUFBRSxDQUFDbUMsSUFBSSxDQUFDTixJQUFJLENBQUNHLFNBQVMsQ0FBQztRQUFFZSxTQUFTLEVBQUU7TUFBTyxDQUFDLENBQUMsQ0FBQztNQUM5QyxLQUFJLENBQUNGLGdCQUFnQixHQUFHUixVQUFVLENBQUMsWUFBTTtRQUNyQ3JDLEVBQUUsQ0FBQ3dDLEtBQUssRUFBRTtNQUNkLENBQUMsRUFBRU0sSUFBSSxDQUFDSCxPQUFPLENBQUM7SUFDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQ0EsT0FBTyxDQUFDO0VBQ3BCO0FBQ0osQ0FBQyxDIiwiZmlsZSI6IjQ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmxldCB3cyA9IG51bGw7XHJcbmxldCB3ZWJvc2NrZXRQb3Rhc3NpdW1fY2FsbGJhY2sgPSBudWxsO1xyXG4vL+mBv+WFjemHjeWkjei/nuaOpVxyXG5sZXQgbG9ja1JlY29ubmVjdCA9IGZhbHNlO1xyXG5sZXQgdGltZW91dG51bSA9IG51bGw7IC8v5pat5byAIOmHjei/nuWAkuiuoeaXtlxyXG5sZXQgaW5pdFdlYlNvY2tldFBvdGFzc2l1bSA9ICh3c3VybCxjYWxsYmFjaykgPT4ge1xyXG4gICAgd2Vib3Nja2V0UG90YXNzaXVtX2NhbGxiYWNrID0gY2FsbGJhY2tcclxuICAgIC8vIGxldCB3c3VybCA9IFwid3NzOi8vc2hhcmUtdGVzdC5tZXRhemVuLXRlY2guY29tOjMwMDAvXCI7XHJcbiAgICAvLyBsZXQgd3N1cmwgPSBcIndzczovLzEwLjEwLjExMC42MDozMDAwL1wiO1xyXG4gICAgLy8gbGV0IHdzdXJsID0gXCJ3czovLzEwLjEwLjEwLjIxNjozMDAwL1wiO1xyXG4gICAgLy8gbGV0IHdzdXJsID0gXCJ3c3M6Ly9pMjU4MTc0NjVhLmltZG8uY29cIjtcclxuXHRcclxuICAgIC8v5Yid5aeL5YyWIHdlYnNvY2tldFxyXG4gICAgaWYgKCdXZWJTb2NrZXQnIGluIHdpbmRvdykge1xyXG4gICAgICAgIHdzID0gbmV3IFdlYlNvY2tldCh3c3VybClcclxuICAgICAgICB3cy5vbm1lc3NhZ2UgPSB3ZWJzb2NrZXRPbm1lc3NhZ2VQb3Rhc3NpdW1cclxuICAgICAgICB3cy5vbm9wZW4gPSB3ZWJzb2NrZXRPbm9wZW5cclxuICAgICAgICB3cy5vbmVycm9yID0gd2Vic29ja2V0T25lcnJvclxyXG4gICAgICAgIHdzLm9uY2xvc2UgPSB3ZWJzb2NrZXRDbG9zZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ3VycmVudCBicm93c2VyIE5vdCBzdXBwb3J0IHdlYnNvY2tldCcpXHJcbiAgICB9XHJcbn1cclxuLy/ojrflj5Ygd2Vic29ja2V0IOaOqOmAgeeahOaVsOaNrlxyXG5sZXQgd2Vic29ja2V0T25tZXNzYWdlUG90YXNzaXVtID0gbXNnID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICBoZWFydENoZWNrLnJlc2V0KCkuc3RhcnQoKTtcclxuICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgaWYgKG1zZy5kYXRhIGluc3RhbmNlb2YgQmxvYikge1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQobXNnLmRhdGEsICdVVEYtOCcpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuS4u+ebkXdlYnNvY2tldOaUtuWIsFwiLCByZXN1bHQpO1xyXG4gICAgICAgICAgICB3ZWJvc2NrZXRQb3Rhc3NpdW1fY2FsbGJhY2sobXNnKTtcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyByZXN1bHQgPSBtc2cuZGF0YTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuS4u+ebkXdlYnNvY2tldOaUtuWIsFwiLCBtc2cpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ3ZWJzb2NrZXTmlLbliLBcIiwgcmVzdWx0KTtcclxuICAgICAgICB3ZWJvc2NrZXRQb3Rhc3NpdW1fY2FsbGJhY2sobXNnKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8g5Y+R6YCB5pWw5o2uXHJcbmxldCBzZW5kRGF0YVBvdGFzc2l1bSA9IChkYXRhKSA9PiB7XHJcbiAgICAvLyAg5Yik5patIGRhdGEg5pWw5o2u57G75Z6LXHJcbiAgICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICBkYXRhID0gZGF0YVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgIH1cclxuICAgIC8vICDliKTmlq0gd2Vic29ja2V0IOeahOeKtuaAgVxyXG4gICAgaWYgKHdzLnJlYWR5U3RhdGUgPT09IHdzLk9QRU4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5Y+M5byA5Y+R6YCB5L+h5oGv77yaJywgZGF0YSk7XHJcbiAgICAgICAgLy8g5bey57uP5omT5byALOWPr+S7peebtOaOpeWPkemAgVxyXG4gICAgICAgIHdzLnNlbmQoZGF0YSlcclxuICAgIH0gZWxzZSBpZiAod3MucmVhZHlTdGF0ZSA9PT0gd3MuQ09OTkVDVElORykge1xyXG4gICAgICAgIC8vIOato+WcqOW8gOWQr+eKtuaAgeS4rSzliJkgMSDnp5LlkI7ph43mlrDlj5HpgIFcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgd3Muc2VuZChkYXRhKVxyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIOacquaJk+W8gO+8jOWImeW8gOWQr+WQjumHjeaWsOiwg+eUqFxyXG4gICAgICAgIGluaXRXZWJTb2NrZXRQb3Rhc3NpdW0oKVxyXG4gICAgICAgIHNlbmREYXRhKGRhdGEpXHJcbiAgICB9XHJcbn1cclxuLy8g6L+e5o6l5YWz6Zet5LqL5Lu2XHJcbmxldCB3ZWJzb2NrZXRDbG9zZSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygn5Y+M5byA6L+e5o6l5YWz6ZetJywgZSlcclxuICAgIGhlYXJ0Q2hlY2sucmVzZXQoKTsvL+W/g+i3s+ajgOa1i1xyXG4gICAgLy8gcmVjb25uZWN0KCk7XHJcblxyXG59XHJcbi8vIOi/nuaOpeWksei0peaXtumHjeaWsOi/nuaOpVxyXG5sZXQgd2Vic29ja2V0T25lcnJvciA9ICgpID0+IHtcclxuICAgIGxvY2tSZWNvbm5lY3QgPSBmYWxzZTtcclxuICAgIC8vIHJlY29ubmVjdCgpO1xyXG59XHJcbi8vIOaJi+WKqOWFs+mXrSB3ZWJzb2NrZXRcclxubGV0IGNsb3NlV2Vic29ja2V0UG90YXNzaXVtID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ+WPjOW8gOaJi+WKqOWFs+mXrSB3ZWJzb2NrZXQnKTtcclxuICAgIGlmICh3cylcclxuICAgICAgICB3cy5jbG9zZSgpXHJcbn1cclxuLy8g6YeN6L+eXHJcbmxldCByZWNvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9ja1JlY29ubmVjdCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIOayoei/nuaOpeS4iuS8muS4gOebtOmHjei/nu+8jOiuvue9ruW7tui/n+mBv+WFjeivt+axgui/h+WkmlxyXG4gICAgdGltZW91dG51bSAmJiBjbGVhclRpbWVvdXQodGltZW91dG51bSk7XHJcbiAgICB0aW1lb3V0bnVtID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbG9ja1JlY29ubmVjdCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCflj4zlvIDph43ov57kuK0uLi4nKTtcclxuICAgICAgICBpbml0V2ViU29ja2V0UG90YXNzaXVtKCk7XHJcbiAgICB9LCA1MDAwKTtcclxufVxyXG5sZXQgd2Vic29ja2V0T25vcGVuID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ+WPjOW8gOi/nuaOpeaJk+W8gO+8gScpO1xyXG4gICAgaGVhcnRDaGVjay5yZXNldCgpLnN0YXJ0KClcclxufVxyXG5sZXQgaGVhcnRDaGVjayA9IHsgLy/lv4Pot7Pmo4DmtYtcclxuICAgIC8vIHRpbWVvdXQ6IDI0MCAqIDEwMDAsXHJcbiAgICB0aW1lb3V0OiA1MDAwLFxyXG4gICAgdGltZW91dE9iajogbnVsbCxcclxuICAgIHNlcnZlclRpbWVvdXRPYmo6IG51bGwsXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0T2JqKVxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNlcnZlclRpbWVvdXRPYmopXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudGltZW91dE9iaiA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGluZycpO1xyXG4gICAgICAgICAgICAvL+WPkemAgeaVsOaNru+8jOWmguaenG9ubWVzc2FnZeiDveaOpeaUtuWIsOaVsOaNru+8jOihqOekuui/nuaOpeato+W4uCznhLblkI7lnKhvbm1lc3NhZ2Xph4zpnaLmiafooYxyZXNldOaWueazlea4hemZpOWumuaXtuWZqFxyXG4gICAgICAgICAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdGFsa19kYXRhOiAncGluZycgfSkpXHJcbiAgICAgICAgICAgIHRoaXMuc2VydmVyVGltZW91dE9iaiA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd3MuY2xvc2UoKVxyXG4gICAgICAgICAgICB9LCB0aGF0LnRpbWVvdXQpXHJcbiAgICAgICAgfSwgdGhpcy50aW1lb3V0KVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7IGluaXRXZWJTb2NrZXRQb3Rhc3NpdW0sIHNlbmREYXRhUG90YXNzaXVtLCB3ZWJzb2NrZXRPbm1lc3NhZ2VQb3Rhc3NpdW0sIGNsb3NlV2Vic29ja2V0UG90YXNzaXVtIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///46\n");

/***/ }),
/* 47 */
/*!**********************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = exports.VERSION = exports.HttpStatusCode = exports.CanceledError = exports.CancelToken = exports.Cancel = exports.AxiosHeaders = exports.AxiosError = exports.Axios = void 0;
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _axios.default;
  }
});
exports.toFormData = exports.spread = exports.mergeConfig = exports.isCancel = exports.isAxiosError = exports.formToJSON = void 0;
var _axios = _interopRequireDefault(__webpack_require__(/*! ./lib/axios.js */ 48));
// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
var Axios = _axios.default.Axios,
  AxiosError = _axios.default.AxiosError,
  CanceledError = _axios.default.CanceledError,
  isCancel = _axios.default.isCancel,
  CancelToken = _axios.default.CancelToken,
  VERSION = _axios.default.VERSION,
  all = _axios.default.all,
  Cancel = _axios.default.Cancel,
  isAxiosError = _axios.default.isAxiosError,
  spread = _axios.default.spread,
  toFormData = _axios.default.toFormData,
  AxiosHeaders = _axios.default.AxiosHeaders,
  HttpStatusCode = _axios.default.HttpStatusCode,
  formToJSON = _axios.default.formToJSON,
  mergeConfig = _axios.default.mergeConfig;
exports.mergeConfig = mergeConfig;
exports.formToJSON = formToJSON;
exports.HttpStatusCode = HttpStatusCode;
exports.AxiosHeaders = AxiosHeaders;
exports.toFormData = toFormData;
exports.spread = spread;
exports.isAxiosError = isAxiosError;
exports.Cancel = Cancel;
exports.all = all;
exports.VERSION = VERSION;
exports.CancelToken = CancelToken;
exports.isCancel = isCancel;
exports.CanceledError = CanceledError;
exports.AxiosError = AxiosError;
exports.Axios = Axios;

/***/ }),
/* 48 */
/*!**************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/axios.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(__webpack_require__(/*! ./utils.js */ 49));
var _bind = _interopRequireDefault(__webpack_require__(/*! ./helpers/bind.js */ 51));
var _Axios = _interopRequireDefault(__webpack_require__(/*! ./core/Axios.js */ 52));
var _mergeConfig = _interopRequireDefault(__webpack_require__(/*! ./core/mergeConfig.js */ 92));
var _index = _interopRequireDefault(__webpack_require__(/*! ./defaults/index.js */ 65));
var _formDataToJSON = _interopRequireDefault(__webpack_require__(/*! ./helpers/formDataToJSON.js */ 73));
var _CanceledError = _interopRequireDefault(__webpack_require__(/*! ./cancel/CanceledError.js */ 81));
var _CancelToken = _interopRequireDefault(__webpack_require__(/*! ./cancel/CancelToken.js */ 95));
var _isCancel = _interopRequireDefault(__webpack_require__(/*! ./cancel/isCancel.js */ 80));
var _data = __webpack_require__(/*! ./env/data.js */ 94);
var _toFormData = _interopRequireDefault(__webpack_require__(/*! ./helpers/toFormData.js */ 55));
var _AxiosError = _interopRequireDefault(__webpack_require__(/*! ./core/AxiosError.js */ 60));
var _spread = _interopRequireDefault(__webpack_require__(/*! ./helpers/spread.js */ 96));
var _isAxiosError = _interopRequireDefault(__webpack_require__(/*! ./helpers/isAxiosError.js */ 97));
var _AxiosHeaders = _interopRequireDefault(__webpack_require__(/*! ./core/AxiosHeaders.js */ 74));
var _HttpStatusCode = _interopRequireDefault(__webpack_require__(/*! ./helpers/HttpStatusCode.js */ 98));
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new _Axios.default(defaultConfig);
  var instance = (0, _bind.default)(_Axios.default.prototype.request, context);

  // Copy axios.prototype to instance
  _utils.default.extend(instance, _Axios.default.prototype, context, {
    allOwnKeys: true
  });

  // Copy context to instance
  _utils.default.extend(instance, context, null, {
    allOwnKeys: true
  });

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance((0, _mergeConfig.default)(defaultConfig, instanceConfig));
  };
  return instance;
}

// Create the default instance to be exported
var axios = createInstance(_index.default);

// Expose Axios class to allow class inheritance
axios.Axios = _Axios.default;

// Expose Cancel & CancelToken
axios.CanceledError = _CanceledError.default;
axios.CancelToken = _CancelToken.default;
axios.isCancel = _isCancel.default;
axios.VERSION = _data.VERSION;
axios.toFormData = _toFormData.default;

// Expose AxiosError class
axios.AxiosError = _AxiosError.default;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = _spread.default;

// Expose isAxiosError
axios.isAxiosError = _isAxiosError.default;

// Expose mergeConfig
axios.mergeConfig = _mergeConfig.default;
axios.AxiosHeaders = _AxiosHeaders.default;
axios.formToJSON = function (thing) {
  return (0, _formDataToJSON.default)(_utils.default.isHTMLForm(thing) ? new FormData(thing) : thing);
};
axios.HttpStatusCode = _HttpStatusCode.default;
axios.default = axios;

// this module should only have a default export
var _default = axios;
exports.default = _default;

/***/ }),
/* 49 */
/*!**************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));
var _bind = _interopRequireDefault(__webpack_require__(/*! ./helpers/bind.js */ 51));
// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;
var getPrototypeOf = Object.getPrototypeOf;
var kindOf = function (cache) {
  return function (thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
}(Object.create(null));
var kindOfTest = function kindOfTest(type) {
  type = type.toLowerCase();
  return function (thing) {
    return kindOf(thing) === type;
  };
};
var typeOfTest = function typeOfTest(type) {
  return function (thing) {
    return (0, _typeof2.default)(thing) === type;
  };
};

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
var isArray = Array.isArray;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
var isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
var isArrayBuffer = kindOfTest('ArrayBuffer');

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
var isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
var isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
var isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
var isObject = function isObject(thing) {
  return thing !== null && (0, _typeof2.default)(thing) === 'object';
};

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
var isBoolean = function isBoolean(thing) {
  return thing === true || thing === false;
};

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
var isPlainObject = function isPlainObject(val) {
  if (kindOf(val) !== 'object') {
    return false;
  }
  var prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
var isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
var isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
var isStream = function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
};

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
var isFormData = function isFormData(thing) {
  var kind;
  return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' ||
  // detect form-data instance
  kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
var isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
var trim = function trim(str) {
  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$allOwnKeys = _ref.allOwnKeys,
    allOwnKeys = _ref$allOwnKeys === void 0 ? false : _ref$allOwnKeys;
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }
  var i;
  var l;

  // Force an array if not already something iterable
  if ((0, _typeof2.default)(obj) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }
  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    var keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    var len = keys.length;
    var key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  var keys = Object.keys(obj);
  var i = keys.length;
  var _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
var _global = function () {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
}();
var isContextDefined = function isContextDefined(context) {
  return !isUndefined(context) && context !== _global;
};

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge( /* obj1, obj2, obj3, ... */
) {
  var _ref2 = isContextDefined(this) && this || {},
    caseless = _ref2.caseless;
  var result = {};
  var assignValue = function assignValue(val, key) {
    var targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (var i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
var extend = function extend(a, b, thisArg) {
  var _ref3 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
    allOwnKeys = _ref3.allOwnKeys;
  forEach(b, function (val, key) {
    if (thisArg && isFunction(val)) {
      a[key] = (0, _bind.default)(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {
    allOwnKeys: allOwnKeys
  });
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
var stripBOM = function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
var inherits = function inherits(constructor, superConstructor, props, descriptors) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
var toFlatObject = function toFlatObject(sourceObj, destObj, filter, propFilter) {
  var props;
  var i;
  var prop;
  var merged = {};
  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
var endsWith = function endsWith(str, searchString, position) {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};

/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
var toArray = function toArray(thing) {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  var i = thing.length;
  if (!isNumber(i)) return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
var isTypedArray = function (TypedArray) {
  // eslint-disable-next-line func-names
  return function (thing) {
    return TypedArray && thing instanceof TypedArray;
  };
}(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
var forEachEntry = function forEachEntry(obj, fn) {
  var generator = obj && obj[Symbol.iterator];
  var iterator = generator.call(obj);
  var result;
  while ((result = iterator.next()) && !result.done) {
    var pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
var matchAll = function matchAll(regExp, str) {
  var matches;
  var arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
var isHTMLForm = kindOfTest('HTMLFormElement');
var toCamelCase = function toCamelCase(str) {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};

/* Creating a function that will check if an object has a property. */
var hasOwnProperty = function (_ref4) {
  var hasOwnProperty = _ref4.hasOwnProperty;
  return function (obj, prop) {
    return hasOwnProperty.call(obj, prop);
  };
}(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
var isRegExp = kindOfTest('RegExp');
var reduceDescriptors = function reduceDescriptors(obj, reducer) {
  var descriptors = Object.getOwnPropertyDescriptors(obj);
  var reducedDescriptors = {};
  forEach(descriptors, function (descriptor, name) {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

var freezeMethods = function freezeMethods(obj) {
  reduceDescriptors(obj, function (descriptor, name) {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }
    var value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;
    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = function () {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};
var toObjectSet = function toObjectSet(arrayOrString, delimiter) {
  var obj = {};
  var define = function define(arr) {
    arr.forEach(function (value) {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
var noop = function noop() {};
var toFiniteNumber = function toFiniteNumber(value, defaultValue) {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};
var ALPHA = 'abcdefghijklmnopqrstuvwxyz';
var DIGIT = '0123456789';
var ALPHABET = {
  DIGIT: DIGIT,
  ALPHA: ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
var generateString = function generateString() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
  var alphabet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ALPHABET.ALPHA_DIGIT;
  var str = '';
  var length = alphabet.length;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}
var toJSONObject = function toJSONObject(obj) {
  var stack = new Array(10);
  var visit = function visit(source, i) {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!('toJSON' in source)) {
        stack[i] = source;
        var target = isArray(source) ? [] : {};
        forEach(source, function (value, key) {
          var reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = undefined;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
var isAsyncFn = kindOfTest('AsyncFunction');
var isThenable = function isThenable(thing) {
  return thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
};
var _default = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isBoolean: isBoolean,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isRegExp: isRegExp,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isTypedArray: isTypedArray,
  isFileList: isFileList,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM,
  inherits: inherits,
  toFlatObject: toFlatObject,
  kindOf: kindOf,
  kindOfTest: kindOfTest,
  endsWith: endsWith,
  toArray: toArray,
  forEachEntry: forEachEntry,
  matchAll: matchAll,
  isHTMLForm: isHTMLForm,
  hasOwnProperty: hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: reduceDescriptors,
  freezeMethods: freezeMethods,
  toObjectSet: toObjectSet,
  toCamelCase: toCamelCase,
  noop: noop,
  toFiniteNumber: toFiniteNumber,
  findKey: findKey,
  global: _global,
  isContextDefined: isContextDefined,
  ALPHABET: ALPHABET,
  generateString: generateString,
  isSpecCompliantForm: isSpecCompliantForm,
  toJSONObject: toJSONObject,
  isAsyncFn: isAsyncFn,
  isThenable: isThenable
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 50)))

/***/ }),
/* 50 */
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
/* 51 */
/*!*********************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/bind.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bind;
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

/***/ }),
/* 52 */
/*!*******************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/core/Axios.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 26));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 27));
var _utils = _interopRequireDefault(__webpack_require__(/*! ./../utils.js */ 49));
var _buildURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/buildURL.js */ 53));
var _InterceptorManager = _interopRequireDefault(__webpack_require__(/*! ./InterceptorManager.js */ 62));
var _dispatchRequest = _interopRequireDefault(__webpack_require__(/*! ./dispatchRequest.js */ 63));
var _mergeConfig = _interopRequireDefault(__webpack_require__(/*! ./mergeConfig.js */ 92));
var _buildFullPath = _interopRequireDefault(__webpack_require__(/*! ./buildFullPath.js */ 86));
var _validator = _interopRequireDefault(__webpack_require__(/*! ../helpers/validator.js */ 93));
var _AxiosHeaders = _interopRequireDefault(__webpack_require__(/*! ./AxiosHeaders.js */ 74));
var validators = _validator.default.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
var Axios = /*#__PURE__*/function () {
  function Axios(instanceConfig) {
    (0, _classCallCheck2.default)(this, Axios);
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new _InterceptorManager.default(),
      response: new _InterceptorManager.default()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  (0, _createClass2.default)(Axios, [{
    key: "request",
    value: function request(configOrUrl, config) {
      /*eslint no-param-reassign:0*/
      // Allow for axios('example/url'[, config]) a la fetch API
      if (typeof configOrUrl === 'string') {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = (0, _mergeConfig.default)(this.defaults, config);
      var _config = config,
        transitional = _config.transitional,
        paramsSerializer = _config.paramsSerializer,
        headers = _config.headers;
      if (transitional !== undefined) {
        _validator.default.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (_utils.default.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          _validator.default.assertOptions(paramsSerializer, {
            encode: validators.function,
            serialize: validators.function
          }, true);
        }
      }

      // Set config.method
      config.method = (config.method || this.defaults.method || 'get').toLowerCase();
      var contextHeaders;

      // Flatten headers
      contextHeaders = headers && _utils.default.merge(headers.common, headers[config.method]);
      contextHeaders && _utils.default.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (method) {
        delete headers[method];
      });
      config.headers = _AxiosHeaders.default.concat(contextHeaders, headers);

      // filter out skipped interceptors
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      var i = 0;
      var len;
      if (!synchronousRequestInterceptors) {
        var chain = [_dispatchRequest.default.bind(this), undefined];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      var newConfig = config;
      i = 0;
      while (i < len) {
        var onFulfilled = requestInterceptorChain[i++];
        var onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = _dispatchRequest.default.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
  }, {
    key: "getUri",
    value: function getUri(config) {
      config = (0, _mergeConfig.default)(this.defaults, config);
      var fullPath = (0, _buildFullPath.default)(config.baseURL, config.url);
      return (0, _buildURL.default)(fullPath, config.params, config.paramsSerializer);
    }
  }]);
  return Axios;
}(); // Provide aliases for supported request methods
_utils.default.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request((0, _mergeConfig.default)(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});
_utils.default.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request((0, _mergeConfig.default)(config || {}, {
        method: method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url: url,
        data: data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
var _default = Axios;
exports.default = _default;

/***/ }),
/* 53 */
/*!*************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/buildURL.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildURL;
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils.js */ 49));
var _AxiosURLSearchParams = _interopRequireDefault(__webpack_require__(/*! ../helpers/AxiosURLSearchParams.js */ 54));
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  var _encode = options && options.encode || encode;
  var serializeFn = options && options.serialize;
  var serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = _utils.default.isURLSearchParams(params) ? params.toString() : new _AxiosURLSearchParams.default(params, options).toString(_encode);
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
}

/***/ }),
/* 54 */
/*!*************************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toFormData = _interopRequireDefault(__webpack_require__(/*! ./toFormData.js */ 55));
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  var charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && (0, _toFormData.default)(params, this, options);
}
var prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString(encoder) {
  var _encode = encoder ? function (value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};
var _default = AxiosURLSearchParams;
exports.default = _default;

/***/ }),
/* 55 */
/*!***************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/toFormData.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils.js */ 49));
var _AxiosError = _interopRequireDefault(__webpack_require__(/*! ../core/AxiosError.js */ 60));
var _FormData = _interopRequireDefault(__webpack_require__(/*! ../platform/node/classes/FormData.js */ 61));
// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return _utils.default.isPlainObject(thing) || _utils.default.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return _utils.default.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return _utils.default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = _utils.default.toFlatObject(_utils.default, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!_utils.default.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (_FormData.default || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = _utils.default.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !_utils.default.isUndefined(source[option]);
  });
  var metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  var visitor = options.visitor || defaultVisitor;
  var dots = options.dots;
  var indexes = options.indexes;
  var _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  var useBlob = _Blob && _utils.default.isSpecCompliantForm(formData);
  if (!_utils.default.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }
  function convertValue(value) {
    if (value === null) return '';
    if (_utils.default.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && _utils.default.isBlob(value)) {
      throw new _AxiosError.default('Blob is not supported. Use a Buffer instead.');
    }
    if (_utils.default.isArrayBuffer(value) || _utils.default.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    var arr = value;
    if (value && !path && (0, _typeof2.default)(value) === 'object') {
      if (_utils.default.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (_utils.default.isArray(value) && isFlatArray(value) || (_utils.default.isFileList(value) || _utils.default.endsWith(key, '[]')) && (arr = _utils.default.toArray(value))) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(_utils.default.isUndefined(el) || el === null) && formData.append(
          // eslint-disable-next-line no-nested-ternary
          indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  var stack = [];
  var exposedHelpers = Object.assign(predicates, {
    defaultVisitor: defaultVisitor,
    convertValue: convertValue,
    isVisitable: isVisitable
  });
  function build(value, path) {
    if (_utils.default.isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }
    stack.push(value);
    _utils.default.forEach(value, function each(el, key) {
      var result = !(_utils.default.isUndefined(el) || el === null) && visitor.call(formData, el, _utils.default.isString(key) ? key.trim() : key, path, exposedHelpers);
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!_utils.default.isObject(obj)) {
    throw new TypeError('data must be an object');
  }
  build(obj);
  return formData;
}
var _default = toFormData;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/buffer/index.js */ 56).Buffer))

/***/ }),
/* 56 */
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ 57)
var ieee754 = __webpack_require__(/*! ieee754 */ 58)
var isArray = __webpack_require__(/*! isarray */ 59)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 50)))

/***/ }),
/* 57 */
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 58 */
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 59 */
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 60 */
/*!************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/core/AxiosError.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils.js */ 49));
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}
_utils.default.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _utils.default.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError.prototype;
var descriptors = {};
['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(function (code) {
  descriptors[code] = {
    value: code
  };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {
  value: true
});

// eslint-disable-next-line func-names
AxiosError.from = function (error, code, config, request, response, customProps) {
  var axiosError = Object.create(prototype);
  _utils.default.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, function (prop) {
    return prop !== 'isAxiosError';
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
var _default = AxiosError;
exports.default = _default;

/***/ }),
/* 61 */
/*!*********************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/null.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// eslint-disable-next-line strict
var _default = null;
exports.default = _default;

/***/ }),
/* 62 */
/*!********************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/core/InterceptorManager.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 26));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 27));
var _utils = _interopRequireDefault(__webpack_require__(/*! ./../utils.js */ 49));
var InterceptorManager = /*#__PURE__*/function () {
  function InterceptorManager() {
    (0, _classCallCheck2.default)(this, InterceptorManager);
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  (0, _createClass2.default)(InterceptorManager, [{
    key: "use",
    value: function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }

    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
  }, {
    key: "eject",
    value: function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }

    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
  }, {
    key: "clear",
    value: function clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }

    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
  }, {
    key: "forEach",
    value: function forEach(fn) {
      _utils.default.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  }]);
  return InterceptorManager;
}();
var _default = InterceptorManager;
exports.default = _default;

/***/ }),
/* 63 */
/*!*****************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/core/dispatchRequest.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dispatchRequest;
var _transformData = _interopRequireDefault(__webpack_require__(/*! ./transformData.js */ 64));
var _isCancel = _interopRequireDefault(__webpack_require__(/*! ../cancel/isCancel.js */ 80));
var _index = _interopRequireDefault(__webpack_require__(/*! ../defaults/index.js */ 65));
var _CanceledError = _interopRequireDefault(__webpack_require__(/*! ../cancel/CanceledError.js */ 81));
var _AxiosHeaders = _interopRequireDefault(__webpack_require__(/*! ../core/AxiosHeaders.js */ 74));
var _adapters = _interopRequireDefault(__webpack_require__(/*! ../adapters/adapters.js */ 82));
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new _CanceledError.default(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = _AxiosHeaders.default.from(config.headers);

  // Transform request data
  config.data = _transformData.default.call(config, config.transformRequest);
  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }
  var adapter = _adapters.default.getAdapter(config.adapter || _index.default.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = _transformData.default.call(config, config.transformResponse, response);
    response.headers = _AxiosHeaders.default.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!(0, _isCancel.default)(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = _transformData.default.call(config, config.transformResponse, reason.response);
        reason.response.headers = _AxiosHeaders.default.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

/***/ }),
/* 64 */
/*!***************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/core/transformData.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformData;
var _utils = _interopRequireDefault(__webpack_require__(/*! ./../utils.js */ 49));
var _index = _interopRequireDefault(__webpack_require__(/*! ../defaults/index.js */ 65));
var _AxiosHeaders = _interopRequireDefault(__webpack_require__(/*! ../core/AxiosHeaders.js */ 74));
/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  var config = this || _index.default;
  var context = response || config;
  var headers = _AxiosHeaders.default.from(context.headers);
  var data = context.data;
  _utils.default.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });
  headers.normalize();
  return data;
}

/***/ }),
/* 65 */
/*!***********************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/defaults/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils.js */ 49));
var _AxiosError = _interopRequireDefault(__webpack_require__(/*! ../core/AxiosError.js */ 60));
var _transitional = _interopRequireDefault(__webpack_require__(/*! ./transitional.js */ 66));
var _toFormData = _interopRequireDefault(__webpack_require__(/*! ../helpers/toFormData.js */ 55));
var _toURLEncodedForm = _interopRequireDefault(__webpack_require__(/*! ../helpers/toURLEncodedForm.js */ 67));
var _index = _interopRequireDefault(__webpack_require__(/*! ../platform/index.js */ 68));
var _formDataToJSON = _interopRequireDefault(__webpack_require__(/*! ../helpers/formDataToJSON.js */ 73));
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': undefined
};

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (_utils.default.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return _utils.default.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: _transitional.default,
  adapter: ['xhr', 'http'],
  transformRequest: [function transformRequest(data, headers) {
    var contentType = headers.getContentType() || '';
    var hasJSONContentType = contentType.indexOf('application/json') > -1;
    var isObjectPayload = _utils.default.isObject(data);
    if (isObjectPayload && _utils.default.isHTMLForm(data)) {
      data = new FormData(data);
    }
    var isFormData = _utils.default.isFormData(data);
    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify((0, _formDataToJSON.default)(data)) : data;
    }
    if (_utils.default.isArrayBuffer(data) || _utils.default.isBuffer(data) || _utils.default.isStream(data) || _utils.default.isFile(data) || _utils.default.isBlob(data)) {
      return data;
    }
    if (_utils.default.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (_utils.default.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }
    var isFileList;
    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return (0, _toURLEncodedForm.default)(data, this.formSerializer).toString();
      }
      if ((isFileList = _utils.default.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        var _FormData = this.env && this.env.FormData;
        return (0, _toFormData.default)(isFileList ? {
          'files[]': data
        } : data, _FormData && new _FormData(), this.formSerializer);
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var JSONRequested = this.responseType === 'json';
    if (data && _utils.default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      var silentJSONParsing = transitional && transitional.silentJSONParsing;
      var strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw _AxiosError.default.from(e, _AxiosError.default.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: _index.default.classes.FormData,
    Blob: _index.default.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};
_utils.default.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
_utils.default.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = _utils.default.merge(DEFAULT_CONTENT_TYPE);
});
var _default = defaults;
exports.default = _default;

/***/ }),
/* 66 */
/*!******************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/defaults/transitional.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
exports.default = _default;

/***/ }),
/* 67 */
/*!*********************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toURLEncodedForm;
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils.js */ 49));
var _toFormData = _interopRequireDefault(__webpack_require__(/*! ./toFormData.js */ 55));
var _index = _interopRequireDefault(__webpack_require__(/*! ../platform/index.js */ 68));
function toURLEncodedForm(data, options) {
  return (0, _toFormData.default)(data, new _index.default.classes.URLSearchParams(), Object.assign({
    visitor: function visitor(value, key, path, helpers) {
      if (_index.default.isNode && _utils.default.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/***/ }),
/* 68 */
/*!***********************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/platform/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _index.default;
  }
});
var _index = _interopRequireDefault(__webpack_require__(/*! ./node/index.js */ 69));

/***/ }),
/* 69 */
/*!*******************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/platform/browser/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _URLSearchParams = _interopRequireDefault(__webpack_require__(/*! ./classes/URLSearchParams.js */ 70));
var _FormData = _interopRequireDefault(__webpack_require__(/*! ./classes/FormData.js */ 71));
var _Blob = _interopRequireDefault(__webpack_require__(/*! ./classes/Blob.js */ 72));
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
var isStandardBrowserEnv = function () {
  var product;
  if (typeof navigator !== 'undefined' && ((product = navigator.product) === 'ReactNative' || product === 'NativeScript' || product === 'NS')) {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
var isStandardBrowserWebWorkerEnv = function () {
  return typeof WorkerGlobalScope !== 'undefined' &&
  // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
}();
var _default = {
  isBrowser: true,
  classes: {
    URLSearchParams: _URLSearchParams.default,
    FormData: _FormData.default,
    Blob: _Blob.default
  },
  isStandardBrowserEnv: isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv: isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};
exports.default = _default;

/***/ }),
/* 70 */
/*!*************************************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AxiosURLSearchParams = _interopRequireDefault(__webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ 54));
var _default = typeof URLSearchParams !== 'undefined' ? URLSearchParams : _AxiosURLSearchParams.default;
exports.default = _default;

/***/ }),
/* 71 */
/*!******************************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = typeof FormData !== 'undefined' ? FormData : null;
exports.default = _default;

/***/ }),
/* 72 */
/*!**************************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/platform/browser/classes/Blob.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = typeof Blob !== 'undefined' ? Blob : null;
exports.default = _default;

/***/ }),
/* 73 */
/*!*******************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils.js */ 49));
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return _utils.default.matchAll(/\w+|\[(\w*)]/g, name).map(function (match) {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  var obj = {};
  var keys = Object.keys(arr);
  var i;
  var len = keys.length;
  var key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    var name = path[index++];
    var isNumericKey = Number.isFinite(+name);
    var isLast = index >= path.length;
    name = !name && _utils.default.isArray(target) ? target.length : name;
    if (isLast) {
      if (_utils.default.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !_utils.default.isObject(target[name])) {
      target[name] = [];
    }
    var result = buildPath(path, value, target[name], index);
    if (result && _utils.default.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (_utils.default.isFormData(formData) && _utils.default.isFunction(formData.entries)) {
    var obj = {};
    _utils.default.forEachEntry(formData, function (name, value) {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
var _default = formDataToJSON;
exports.default = _default;

/***/ }),
/* 74 */
/*!**************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/core/AxiosHeaders.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 75));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 26));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 27));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils.js */ 49));
var _parseHeaders = _interopRequireDefault(__webpack_require__(/*! ../helpers/parseHeaders.js */ 79));
var $internals = Symbol('internals');
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return _utils.default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  var tokens = Object.create(null);
  var tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  var match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
var isValidHeaderName = function isValidHeaderName(str) {
  return /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
};
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (_utils.default.isFunction(filter)) {
    return filter.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!_utils.default.isString(value)) return;
  if (_utils.default.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }
  if (_utils.default.isRegExp(filter)) {
    return filter.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, function (w, char, str) {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  var accessorName = _utils.default.toCamelCase(' ' + header);
  ['get', 'set', 'has'].forEach(function (methodName) {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function value(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
var AxiosHeaders = /*#__PURE__*/function (_Symbol$iterator, _Symbol$toStringTag) {
  function AxiosHeaders(headers) {
    (0, _classCallCheck2.default)(this, AxiosHeaders);
    headers && this.set(headers);
  }
  (0, _createClass2.default)(AxiosHeaders, [{
    key: "set",
    value: function set(header, valueOrRewrite, rewrite) {
      var self = this;
      function setHeader(_value, _header, _rewrite) {
        var lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error('header name must be a non-empty string');
        }
        var key = _utils.default.findKey(self, lHeader);
        if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
          self[key || _header] = normalizeValue(_value);
        }
      }
      var setHeaders = function setHeaders(headers, _rewrite) {
        return _utils.default.forEach(headers, function (_value, _header) {
          return setHeader(_value, _header, _rewrite);
        });
      };
      if (_utils.default.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (_utils.default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders((0, _parseHeaders.default)(header), valueOrRewrite);
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
  }, {
    key: "get",
    value: function get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        var key = _utils.default.findKey(this, header);
        if (key) {
          var value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (_utils.default.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (_utils.default.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError('parser must be boolean|regexp|function');
        }
      }
    }
  }, {
    key: "has",
    value: function has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        var key = _utils.default.findKey(this, header);
        return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
  }, {
    key: "delete",
    value: function _delete(header, matcher) {
      var self = this;
      var deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          var key = _utils.default.findKey(self, _header);
          if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
            delete self[key];
            deleted = true;
          }
        }
      }
      if (_utils.default.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
  }, {
    key: "clear",
    value: function clear(matcher) {
      var keys = Object.keys(this);
      var i = keys.length;
      var deleted = false;
      while (i--) {
        var key = keys[i];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
  }, {
    key: "normalize",
    value: function normalize(format) {
      var self = this;
      var headers = {};
      _utils.default.forEach(this, function (value, header) {
        var key = _utils.default.findKey(headers, header);
        if (key) {
          self[key] = normalizeValue(value);
          delete self[header];
          return;
        }
        var normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self[header];
        }
        self[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
  }, {
    key: "concat",
    value: function concat() {
      var _this$constructor;
      for (var _len = arguments.length, targets = new Array(_len), _key = 0; _key < _len; _key++) {
        targets[_key] = arguments[_key];
      }
      return (_this$constructor = this.constructor).concat.apply(_this$constructor, [this].concat(targets));
    }
  }, {
    key: "toJSON",
    value: function toJSON(asStrings) {
      var obj = Object.create(null);
      _utils.default.forEach(this, function (value, header) {
        value != null && value !== false && (obj[header] = asStrings && _utils.default.isArray(value) ? value.join(', ') : value);
      });
      return obj;
    }
  }, {
    key: _Symbol$iterator,
    value: function value() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
  }, {
    key: "toString",
    value: function toString() {
      return Object.entries(this.toJSON()).map(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
          header = _ref2[0],
          value = _ref2[1];
        return header + ': ' + value;
      }).join('\n');
    }
  }, {
    key: _Symbol$toStringTag,
    get: function get() {
      return 'AxiosHeaders';
    }
  }], [{
    key: "from",
    value: function from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
  }, {
    key: "concat",
    value: function concat(first) {
      var computed = new this(first);
      for (var _len2 = arguments.length, targets = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        targets[_key2 - 1] = arguments[_key2];
      }
      targets.forEach(function (target) {
        return computed.set(target);
      });
      return computed;
    }
  }, {
    key: "accessor",
    value: function accessor(header) {
      var internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      var accessors = internals.accessors;
      var prototype = this.prototype;
      function defineAccessor(_header) {
        var lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype, _header);
          accessors[lHeader] = true;
        }
      }
      _utils.default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  }]);
  return AxiosHeaders;
}(Symbol.iterator, Symbol.toStringTag);
AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
_utils.default.freezeMethods(AxiosHeaders.prototype);
_utils.default.freezeMethods(AxiosHeaders);
var _default = AxiosHeaders;
exports.default = _default;

/***/ }),
/* 75 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 76);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 77);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 23);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 78);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 76 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 77 */
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 78 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 79 */
/*!*****************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(__webpack_require__(/*! ./../utils.js */ 49));
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = _utils.default.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var _default = function _default(rawHeaders) {
  var parsed = {};
  var key;
  var val;
  var i;
  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });
  return parsed;
};
exports.default = _default;

/***/ }),
/* 80 */
/*!************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/cancel/isCancel.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCancel;
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/***/ }),
/* 81 */
/*!*****************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/cancel/CanceledError.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AxiosError = _interopRequireDefault(__webpack_require__(/*! ../core/AxiosError.js */ 60));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils.js */ 49));
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  _AxiosError.default.call(this, message == null ? 'canceled' : message, _AxiosError.default.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}
_utils.default.inherits(CanceledError, _AxiosError.default, {
  __CANCEL__: true
});
var _default = CanceledError;
exports.default = _default;

/***/ }),
/* 82 */
/*!**************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/adapters/adapters.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils.js */ 49));
var _http = _interopRequireDefault(__webpack_require__(/*! ./http.js */ 61));
var _xhr = _interopRequireDefault(__webpack_require__(/*! ./xhr.js */ 83));
var _AxiosError = _interopRequireDefault(__webpack_require__(/*! ../core/AxiosError.js */ 60));
var knownAdapters = {
  http: _http.default,
  xhr: _xhr.default
};
_utils.default.forEach(knownAdapters, function (fn, value) {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {
        value: value
      });
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {
      value: value
    });
  }
});
var _default = {
  getAdapter: function getAdapter(adapters) {
    adapters = _utils.default.isArray(adapters) ? adapters : [adapters];
    var _adapters = adapters,
      length = _adapters.length;
    var nameOrAdapter;
    var adapter;
    for (var i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if (adapter = _utils.default.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
        break;
      }
    }
    if (!adapter) {
      if (adapter === false) {
        throw new _AxiosError.default("Adapter ".concat(nameOrAdapter, " is not supported by the environment"), 'ERR_NOT_SUPPORT');
      }
      throw new Error(_utils.default.hasOwnProp(knownAdapters, nameOrAdapter) ? "Adapter '".concat(nameOrAdapter, "' is not available in the build") : "Unknown adapter '".concat(nameOrAdapter, "'"));
    }
    if (!_utils.default.isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }
    return adapter;
  },
  adapters: knownAdapters
};
exports.default = _default;

/***/ }),
/* 83 */
/*!*********************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/adapters/xhr.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(__webpack_require__(/*! ./../utils.js */ 49));
var _settle = _interopRequireDefault(__webpack_require__(/*! ./../core/settle.js */ 84));
var _cookies = _interopRequireDefault(__webpack_require__(/*! ./../helpers/cookies.js */ 85));
var _buildURL = _interopRequireDefault(__webpack_require__(/*! ./../helpers/buildURL.js */ 53));
var _buildFullPath = _interopRequireDefault(__webpack_require__(/*! ../core/buildFullPath.js */ 86));
var _isURLSameOrigin = _interopRequireDefault(__webpack_require__(/*! ./../helpers/isURLSameOrigin.js */ 89));
var _transitional = _interopRequireDefault(__webpack_require__(/*! ../defaults/transitional.js */ 66));
var _AxiosError = _interopRequireDefault(__webpack_require__(/*! ../core/AxiosError.js */ 60));
var _CanceledError = _interopRequireDefault(__webpack_require__(/*! ../cancel/CanceledError.js */ 81));
var _parseProtocol = _interopRequireDefault(__webpack_require__(/*! ../helpers/parseProtocol.js */ 90));
var _index = _interopRequireDefault(__webpack_require__(/*! ../platform/index.js */ 68));
var _AxiosHeaders = _interopRequireDefault(__webpack_require__(/*! ../core/AxiosHeaders.js */ 74));
var _speedometer2 = _interopRequireDefault(__webpack_require__(/*! ../helpers/speedometer.js */ 91));
function progressEventReducer(listener, isDownloadStream) {
  var bytesNotified = 0;
  var _speedometer = (0, _speedometer2.default)(50, 250);
  return function (e) {
    var loaded = e.loaded;
    var total = e.lengthComputable ? e.total : undefined;
    var progressBytes = loaded - bytesNotified;
    var rate = _speedometer(progressBytes);
    var inRange = loaded <= total;
    bytesNotified = loaded;
    var data = {
      loaded: loaded,
      total: total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };
    data[isDownloadStream ? 'download' : 'upload'] = true;
    listener(data);
  };
}
var isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
var _default = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = _AxiosHeaders.default.from(config.headers).normalize();
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }
    if (_utils.default.isFormData(requestData)) {
      if (_index.default.isStandardBrowserEnv || _index.default.isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else {
        requestHeaders.setContentType('multipart/form-data;', false); // mobile/desktop app frameworks
      }
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }
    var fullPath = (0, _buildFullPath.default)(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), (0, _buildURL.default)(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = _AxiosHeaders.default.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
      var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      (0, _settle.default)(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }
    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new _AxiosError.default('Request aborted', _AxiosError.default.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new _AxiosError.default('Network Error', _AxiosError.default.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || _transitional.default;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new _AxiosError.default(timeoutErrorMessage, transitional.clarifyTimeoutError ? _AxiosError.default.ETIMEDOUT : _AxiosError.default.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (_index.default.isStandardBrowserEnv) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || (0, _isURLSameOrigin.default)(fullPath)) && config.xsrfCookieName && _cookies.default.read(config.xsrfCookieName);
      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      _utils.default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!_utils.default.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }
    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function onCanceled(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new _CanceledError.default(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }
    var protocol = (0, _parseProtocol.default)(fullPath);
    if (protocol && _index.default.protocols.indexOf(protocol) === -1) {
      reject(new _AxiosError.default('Unsupported protocol ' + protocol + ':', _AxiosError.default.ERR_BAD_REQUEST, config));
      return;
    }

    // Send the request
    request.send(requestData || null);
  });
};
exports.default = _default;

/***/ }),
/* 84 */
/*!********************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/core/settle.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = settle;
var _AxiosError = _interopRequireDefault(__webpack_require__(/*! ./AxiosError.js */ 60));
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new _AxiosError.default('Request failed with status code ' + response.status, [_AxiosError.default.ERR_BAD_REQUEST, _AxiosError.default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
  }
}

/***/ }),
/* 85 */
/*!************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/cookies.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(__webpack_require__(/*! ./../utils.js */ 49));
var _index = _interopRequireDefault(__webpack_require__(/*! ../platform/index.js */ 68));
var _default = _index.default.isStandardBrowserEnv ?
// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));
      if (_utils.default.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }
      if (_utils.default.isString(path)) {
        cookie.push('path=' + path);
      }
      if (_utils.default.isString(domain)) {
        cookie.push('domain=' + domain);
      }
      if (secure === true) {
        cookie.push('secure');
      }
      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :
// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();
exports.default = _default;

/***/ }),
/* 86 */
/*!***************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/core/buildFullPath.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildFullPath;
var _isAbsoluteURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/isAbsoluteURL.js */ 87));
var _combineURLs = _interopRequireDefault(__webpack_require__(/*! ../helpers/combineURLs.js */ 88));
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0, _isAbsoluteURL.default)(requestedURL)) {
    return (0, _combineURLs.default)(baseURL, requestedURL);
  }
  return requestedURL;
}

/***/ }),
/* 87 */
/*!******************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAbsoluteURL;
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/***/ }),
/* 88 */
/*!****************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/combineURLs.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineURLs;
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}

/***/ }),
/* 89 */
/*!********************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(__webpack_require__(/*! ./../utils.js */ 49));
var _index = _interopRequireDefault(__webpack_require__(/*! ../platform/index.js */ 68));
var _default = _index.default.isStandardBrowserEnv ?
// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;
    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = _utils.default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :
// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();
exports.default = _default;

/***/ }),
/* 90 */
/*!******************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/parseProtocol.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseProtocol;
function parseProtocol(url) {
  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

/***/ }),
/* 91 */
/*!****************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/speedometer.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  var bytes = new Array(samplesCount);
  var timestamps = new Array(samplesCount);
  var head = 0;
  var tail = 0;
  var firstSampleTS;
  min = min !== undefined ? min : 1000;
  return function push(chunkLength) {
    var now = Date.now();
    var startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    var i = tail;
    var bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    var passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}
var _default = speedometer;
exports.default = _default;

/***/ }),
/* 92 */
/*!*************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/core/mergeConfig.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeConfig;
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils.js */ 49));
var _AxiosHeaders = _interopRequireDefault(__webpack_require__(/*! ./AxiosHeaders.js */ 74));
var headersToObject = function headersToObject(thing) {
  return thing instanceof _AxiosHeaders.default ? thing.toJSON() : thing;
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  function getMergedValue(target, source, caseless) {
    if (_utils.default.isPlainObject(target) && _utils.default.isPlainObject(source)) {
      return _utils.default.merge.call({
        caseless: caseless
      }, target, source);
    } else if (_utils.default.isPlainObject(source)) {
      return _utils.default.merge({}, source);
    } else if (_utils.default.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!_utils.default.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!_utils.default.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!_utils.default.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!_utils.default.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!_utils.default.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }
  var mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: function headers(a, b) {
      return mergeDeepProperties(headersToObject(a), headersToObject(b), true);
    }
  };
  _utils.default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(config1[prop], config2[prop], prop);
    _utils.default.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}

/***/ }),
/* 93 */
/*!**************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/validator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));
var _data = __webpack_require__(/*! ../env/data.js */ 94);
var _AxiosError = _interopRequireDefault(__webpack_require__(/*! ../core/AxiosError.js */ 60));
var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (type, i) {
  validators[type] = function validator(thing) {
    return (0, _typeof2.default)(thing) === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});
var deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + _data.VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function (value, opt, opts) {
    if (validator === false) {
      throw new _AxiosError.default(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), _AxiosError.default.ERR_DEPRECATED);
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      __f__("warn", formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'), " at node_modules/axios/lib/helpers/validator.js:43");
    }
    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if ((0, _typeof2.default)(options) !== 'object') {
    throw new _AxiosError.default('options must be an object', _AxiosError.default.ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new _AxiosError.default('option ' + opt + ' must be ' + result, _AxiosError.default.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new _AxiosError.default('Unknown option ' + opt, _AxiosError.default.ERR_BAD_OPTION);
    }
  }
}
var _default = {
  assertOptions: assertOptions,
  validators: validators
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)["default"]))

/***/ }),
/* 94 */
/*!*****************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/env/data.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERSION = void 0;
var VERSION = "1.4.0";
exports.VERSION = VERSION;

/***/ }),
/* 95 */
/*!***************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/cancel/CancelToken.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 26));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 27));
var _CanceledError = _interopRequireDefault(__webpack_require__(/*! ./CanceledError.js */ 81));
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
var CancelToken = /*#__PURE__*/function () {
  function CancelToken(executor) {
    (0, _classCallCheck2.default)(this, CancelToken);
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    var token = this;

    // eslint-disable-next-line func-names
    this.promise.then(function (cancel) {
      if (!token._listeners) return;
      var i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = function (onfulfilled) {
      var _resolve;
      // eslint-disable-next-line func-names
      var promise = new Promise(function (resolve) {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
      token.reason = new _CanceledError.default(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  (0, _createClass2.default)(CancelToken, [{
    key: "throwIfRequested",
    value: function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }

    /**
     * Subscribe to the cancel signal
     */
  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }

    /**
     * Unsubscribe from the cancel signal
     */
  }, {
    key: "unsubscribe",
    value: function unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      var index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }

    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
  }], [{
    key: "source",
    value: function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token: token,
        cancel: cancel
      };
    }
  }]);
  return CancelToken;
}();
var _default = CancelToken;
exports.default = _default;

/***/ }),
/* 96 */
/*!***********************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/spread.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = spread;
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/***/ }),
/* 97 */
/*!*****************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/isAxiosError.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAxiosError;
var _utils = _interopRequireDefault(__webpack_require__(/*! ./../utils.js */ 49));
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return _utils.default.isObject(payload) && payload.isAxiosError === true;
}

/***/ }),
/* 98 */
/*!*******************************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 75));
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(function (_ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    key = _ref2[0],
    value = _ref2[1];
  HttpStatusCode[value] = key;
});
var _default = HttpStatusCode;
exports.default = _default;

/***/ }),
/* 99 */
/*!**************************************!*\
  !*** D:/Develop/ASIA-POTASH/App.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 100);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 28);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDdUs7QUFDdkssZ0JBQWdCLHVMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6Ijk5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vSGJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///99\n");

/***/ }),
/* 100 */
/*!***************************************************************!*\
  !*** D:/Develop/ASIA-POTASH/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 101);\n/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStpQixDQUFnQixpbUJBQUcsRUFBQyIsImZpbGUiOiIxMDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL0hidWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL0hidWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uL0hidWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi9IYnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9IYnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9IYnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi9IYnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vSGJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///100\n");

/***/ }),
/* 101 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Develop/ASIA-POTASH/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjEwMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQge1xuXHRvbkxhdW5jaDogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBMYXVuY2gnKVxuXHR9LFxuXHRvblNob3c6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgU2hvdycpXG5cdH0sXG5cdG9uSGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBIaWRlJylcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///101\n");

/***/ }),
/* 102 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })
],[[0,"app-config"]]]);