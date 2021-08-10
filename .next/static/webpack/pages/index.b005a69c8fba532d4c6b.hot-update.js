/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Index/Map.tsx":
/*!**********************************!*\
  !*** ./components/Index/Map.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kiguchi_Documents_myproj_temporary_pop_mesh_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var maplibre_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! maplibre-gl */ \"./node_modules/maplibre-gl/dist/maplibre-gl.js\");\n/* harmony import */ var maplibre_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(maplibre_gl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var maplibre_gl_dist_maplibre_gl_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! maplibre-gl/dist/maplibre-gl.css */ \"./node_modules/maplibre-gl/dist/maplibre-gl.css\");\n/* harmony import */ var maplibre_gl_dist_maplibre_gl_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(maplibre_gl_dist_maplibre_gl_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _maplibre_gl_temporal_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../maplibre-gl-temporal-controller */ \"./maplibre-gl-temporal-controller/index.ts\");\n/* harmony import */ var _DataSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DataSelector */ \"./components/Index/DataSelector.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/kiguchi/Documents/myproj/temporary-pop-mesh/components/Index/Map.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar temporalLayerNames = ['201901', '201902', '201903', '201904', '201905', '201906', '201907', '201908', '201909', '201910', '201911', '201912', '202001', '202002', '202003', '202004', '202005', '202006', '202007', '202008', '202009', '202010', '202011', '202012'];\n\nvar getTemporalLayers = function getTemporalLayers(targetData) {\n  return temporalLayerNames.map(function (id) {\n    return {\n      id: id,\n      type: 'fill',\n      source: 'mesh',\n      'source-layer': id,\n      paint: {\n        'fill-color': ['interpolate', ['linear'], ['get', targetData], 0, '#ffffff', 100, '#0000ff', 5000, '#00ff00', 10000, '#ffff00', 30000, '#ff0000', 100000, '#990000'],\n        'fill-opacity': ['interpolate', ['linear'], ['get', targetData], 0, 0, 100, 0.1, 5000, 0.2, 10000, 0.3, 30000, 0.4, 100000, 0.4]\n      },\n      filter: ['boolean', false]\n    };\n  });\n};\n\nvar initialStyle = {\n  version: 8,\n  sources: {},\n  layers: []\n};\n\nvar Map = function Map() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      mapInstance = _useState[0],\n      setMapInstance = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(initialStyle),\n      mapStyle = _useState2[0],\n      setMapStyle = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('d0t0'),\n      targetData = _useState3[0],\n      setTargetData = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      temporalController = _useState4[0],\n      setTemporalController = _useState4[1];\n\n  var mapContainer = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    if (mapContainer.current === null) return;\n    var map = new (maplibre_gl__WEBPACK_IMPORTED_MODULE_2___default().Map)({\n      container: mapContainer.current,\n      style: mapStyle,\n      center: [139.7, 35.7],\n      zoom: 9,\n      minZoom: 6,\n      maxZoom: 18,\n      customAttribution: \"<a href='https://www.geospatial.jp/ckan/dataset/mlit-1km-fromto' target='_blank'>全国の人流オープンデータ</a> | <a href='https://twitter.com/kanahiro_iguchi' target='_blank'>@kanahiro_iguchi</a>\"\n    });\n    setMapInstance(map);\n    var control = new _maplibre_gl_temporal_controller__WEBPACK_IMPORTED_MODULE_5__.default(temporalLayerNames.map(function (name) {\n      return {\n        id: name,\n        title: name.substring(0, 4) + '/' + name.substring(4, 7)\n      };\n    }));\n    map.addControl(control);\n    setTemporalController(control);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    var newStyle = {\n      version: 8,\n      sources: {\n        OSM: {\n          type: 'raster',\n          tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],\n          tileSize: 256,\n          attribution: '<a href=\"http://osm.org/copyright\">© OpenStreetMap contributors</a>'\n        },\n        mesh: {\n          type: 'vector',\n          tiles: ['https://kanahiro.github.io/temporal-pop-mesh/meshes/{z}/{x}/{y}.pbf'],\n          minzoom: 9,\n          maxzoom: 9\n        }\n      },\n      layers: [{\n        id: 'OSM',\n        type: 'raster',\n        source: 'OSM',\n        minzoom: 0,\n        maxzoom: 18\n      }].concat((0,_Users_kiguchi_Documents_myproj_temporary_pop_mesh_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(getTemporalLayers(targetData)))\n    };\n    setMapStyle(newStyle);\n  }, [targetData]);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    mapInstance === null || mapInstance === void 0 ? void 0 : mapInstance.setStyle(mapStyle);\n    temporalController === null || temporalController === void 0 ? void 0 : temporalController.refresh();\n  }, [mapStyle]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      height: '80vh'\n    },\n    ref: mapContainer,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"absolute left-2 top-2 z-10\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DataSelector__WEBPACK_IMPORTED_MODULE_6__.default, {\n        targetData: targetData,\n        setTargetData: setTargetData\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 163,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 161,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Map, \"MUE+v5Djc2lAMygFd80NFMdKstI=\");\n\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmRleC9NYXAudHN4P2JjZWQiXSwibmFtZXMiOlsidGVtcG9yYWxMYXllck5hbWVzIiwiZ2V0VGVtcG9yYWxMYXllcnMiLCJ0YXJnZXREYXRhIiwibWFwIiwiaWQiLCJ0eXBlIiwic291cmNlIiwicGFpbnQiLCJmaWx0ZXIiLCJpbml0aWFsU3R5bGUiLCJ2ZXJzaW9uIiwic291cmNlcyIsImxheWVycyIsIk1hcCIsInVzZVN0YXRlIiwibWFwSW5zdGFuY2UiLCJzZXRNYXBJbnN0YW5jZSIsIm1hcFN0eWxlIiwic2V0TWFwU3R5bGUiLCJzZXRUYXJnZXREYXRhIiwidGVtcG9yYWxDb250cm9sbGVyIiwic2V0VGVtcG9yYWxDb250cm9sbGVyIiwibWFwQ29udGFpbmVyIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsIm1hcGxpYnJlZ2wiLCJjb250YWluZXIiLCJzdHlsZSIsImNlbnRlciIsInpvb20iLCJtaW5ab29tIiwibWF4Wm9vbSIsImN1c3RvbUF0dHJpYnV0aW9uIiwiY29udHJvbCIsIlRlbXBvcmFsQ29udHJvbCIsIm5hbWUiLCJ0aXRsZSIsInN1YnN0cmluZyIsImFkZENvbnRyb2wiLCJuZXdTdHlsZSIsIk9TTSIsInRpbGVzIiwidGlsZVNpemUiLCJhdHRyaWJ1dGlvbiIsIm1lc2giLCJtaW56b29tIiwibWF4em9vbSIsInNldFN0eWxlIiwicmVmcmVzaCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsQ0FDdkIsUUFEdUIsRUFFdkIsUUFGdUIsRUFHdkIsUUFIdUIsRUFJdkIsUUFKdUIsRUFLdkIsUUFMdUIsRUFNdkIsUUFOdUIsRUFPdkIsUUFQdUIsRUFRdkIsUUFSdUIsRUFTdkIsUUFUdUIsRUFVdkIsUUFWdUIsRUFXdkIsUUFYdUIsRUFZdkIsUUFadUIsRUFhdkIs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LENBQXNCL0IsUUFBdEI7QUFDQUcsc0JBQWtCLFNBQWxCLElBQUFBLGtCQUFrQixXQUFsQixZQUFBQSxrQkFBa0IsQ0FBRTZCLE9BQXBCO0FBQ0gsR0FIUSxFQUdOLENBQUNoQyxRQUFELENBSE0sQ0FBVDtBQUtBLHNCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVpQyxZQUFNLEVBQUU7QUFBVixLQUFaO0FBQWdDLE9BQUcsRUFBRTVCLFlBQXJDO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsNEJBQWY7QUFBQSw2QkFDSSw4REFBQyxrREFBRDtBQUNJLGtCQUFVLEVBQUVwQixVQURoQjtBQUVJLHFCQUFhLEVBQUVpQjtBQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBbEZEOztHQUFNTixHOztLQUFBQSxHO0FBbUZOLCtEQUFlQSxHQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbmRleC9NYXAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hcGxpYnJlZ2wsIHsgRmlsbExheWVyIH0gZnJvbSAnbWFwbGlicmUtZ2wnO1xuaW1wb3J0ICdtYXBsaWJyZS1nbC9kaXN0L21hcGxpYnJlLWdsLmNzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFRlbXBvcmFsQ29udHJvbCBmcm9tICcuLi8uLi9tYXBsaWJyZS1nbC10ZW1wb3JhbC1jb250cm9sbGVyJztcblxuaW1wb3J0IERhdGFTZWxlY3RvciBmcm9tICcuL0RhdGFTZWxlY3Rvcic7XG5cbmNvbnN0IHRlbXBvcmFsTGF5ZXJOYW1lcyA9IFtcbiAgICAnMjAxOTAxJyxcbiAgICAnMjAxOTAyJyxcbiAgICAnMjAxOTAzJyxcbiAgICAnMjAxOTA0JyxcbiAgICAnMjAxOTA1JyxcbiAgICAnMjAxOTA2JyxcbiAgICAnMjAxOTA3JyxcbiAgICAnMjAxOTA4JyxcbiAgICAnMjAxOTA5JyxcbiAgICAnMjAxOTEwJyxcbiAgICAnMjAxOTExJyxcbiAgICAnMjAxOTEyJyxcbiAgICAnMjAyMDAxJyxcbiAgICAnMjAyMDAyJyxcbiAgICAnMjAyMDAzJyxcbiAgICAnMjAyMDA0JyxcbiAgICAnMjAyMDA1JyxcbiAgICAnMjAyMDA2JyxcbiAgICAnMjAyMDA3JyxcbiAgICAnMjAyMDA4JyxcbiAgICAnMjAyMDA5JyxcbiAgICAnMjAyMDEwJyxcbiAgICAnMjAyMDExJyxcbiAgICAnMjAyMDEyJyxcbl07XG5cbmNvbnN0IGdldFRlbXBvcmFsTGF5ZXJzID0gKHRhcmdldERhdGE6IHN0cmluZyk6IEZpbGxMYXllcltdID0+IHtcbiAgICByZXR1cm4gdGVtcG9yYWxMYXllck5hbWVzLm1hcCgoaWQpID0+ICh7XG4gICAgICAgIGlkLFxuICAgICAgICB0eXBlOiAnZmlsbCcsXG4gICAgICAgIHNvdXJjZTogJ21lc2gnLFxuICAgICAgICAnc291cmNlLWxheWVyJzogaWQsXG4gICAgICAgIHBhaW50OiB7XG4gICAgICAgICAgICAnZmlsbC1jb2xvcic6IFtcbiAgICAgICAgICAgICAgICAnaW50ZXJwb2xhdGUnLFxuICAgICAgICAgICAgICAgIFsnbGluZWFyJ10sXG4gICAgICAgICAgICAgICAgWydnZXQnLCB0YXJnZXREYXRhXSxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICAxMDAsXG4gICAgICAgICAgICAgICAgJyMwMDAwZmYnLFxuICAgICAgICAgICAgICAgIDUwMDAsXG4gICAgICAgICAgICAgICAgJyMwMGZmMDAnLFxuICAgICAgICAgICAgICAgIDEwMDAwLFxuICAgICAgICAgICAgICAgICcjZmZmZjAwJyxcbiAgICAgICAgICAgICAgICAzMDAwMCxcbiAgICAgICAgICAgICAgICAnI2ZmMDAwMCcsXG4gICAgICAgICAgICAgICAgMTAwMDAwLFxuICAgICAgICAgICAgICAgICcjOTkwMDAwJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAnZmlsbC1vcGFjaXR5JzogW1xuICAgICAgICAgICAgICAgICdpbnRlcnBvbGF0ZScsXG4gICAgICAgICAgICAgICAgWydsaW5lYXInXSxcbiAgICAgICAgICAgICAgICBbJ2dldCcsIHRhcmdldERhdGFdLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAxMDAsXG4gICAgICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgICAgIDUwMDAsXG4gICAgICAgICAgICAgICAgMC4yLFxuICAgICAgICAgICAgICAgIDEwMDAwLFxuICAgICAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgICAgICAzMDAwMCxcbiAgICAgICAgICAgICAgICAwLjQsXG4gICAgICAgICAgICAgICAgMTAwMDAwLFxuICAgICAgICAgICAgICAgIDAuNCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcjogWydib29sZWFuJywgZmFsc2VdLFxuICAgIH0pKTtcbn07XG5cbmNvbnN0IGluaXRpYWxTdHlsZTogbWFwbGlicmVnbC5TdHlsZSA9IHtcbiAgICB2ZXJzaW9uOiA4LFxuICAgIHNvdXJjZXM6IHt9LFxuICAgIGxheWVyczogW10sXG59O1xuXG5jb25zdCBNYXA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IFttYXBJbnN0YW5jZSwgc2V0TWFwSW5zdGFuY2VdID0gdXNlU3RhdGU8bWFwbGlicmVnbC5NYXAgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBbbWFwU3R5bGUsIHNldE1hcFN0eWxlXSA9IHVzZVN0YXRlPG1hcGxpYnJlZ2wuU3R5bGU+KGluaXRpYWxTdHlsZSk7XG4gICAgY29uc3QgW3RhcmdldERhdGEsIHNldFRhcmdldERhdGFdID0gdXNlU3RhdGUoJ2QwdDAnKTtcbiAgICBjb25zdCBbdGVtcG9yYWxDb250cm9sbGVyLCBzZXRUZW1wb3JhbENvbnRyb2xsZXJdID1cbiAgICAgICAgdXNlU3RhdGU8VGVtcG9yYWxDb250cm9sIHwgbnVsbD4obnVsbCk7XG5cbiAgICBjb25zdCBtYXBDb250YWluZXIgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChtYXBDb250YWluZXIuY3VycmVudCA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyBtYXBsaWJyZWdsLk1hcCh7XG4gICAgICAgICAgICBjb250YWluZXI6IG1hcENvbnRhaW5lci5jdXJyZW50LFxuICAgICAgICAgICAgc3R5bGU6IG1hcFN0eWxlLFxuICAgICAgICAgICAgY2VudGVyOiBbMTM5LjcsIDM1LjddLFxuICAgICAgICAgICAgem9vbTogOSxcbiAgICAgICAgICAgIG1pblpvb206IDYsXG4gICAgICAgICAgICBtYXhab29tOiAxOCxcbiAgICAgICAgICAgIGN1c3RvbUF0dHJpYnV0aW9uOlxuICAgICAgICAgICAgICAgIFwiPGEgaHJlZj0naHR0cHM6Ly93d3cuZ2Vvc3BhdGlhbC5qcC9ja2FuL2RhdGFzZXQvbWxpdC0xa20tZnJvbXRvJyB0YXJnZXQ9J19ibGFuayc+5YWo5Zu944Gu5Lq65rWB44Kq44O844OX44Oz44OH44O844K/PC9hPiB8IDxhIGhyZWY9J2h0dHBzOi8vdHdpdHRlci5jb20va2FuYWhpcm9faWd1Y2hpJyB0YXJnZXQ9J19ibGFuayc+QGthbmFoaXJvX2lndWNoaTwvYT5cIixcbiAgICAgICAgfSk7XG4gICAgICAgIHNldE1hcEluc3RhbmNlKG1hcCk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBuZXcgVGVtcG9yYWxDb250cm9sKFxuICAgICAgICAgICAgdGVtcG9yYWxMYXllck5hbWVzLm1hcCgobmFtZSkgPT4gKHtcbiAgICAgICAgICAgICAgICBpZDogbmFtZSxcbiAgICAgICAgICAgICAgICB0aXRsZTogbmFtZS5zdWJzdHJpbmcoMCwgNCkgKyAnLycgKyBuYW1lLnN1YnN0cmluZyg0LCA3KSxcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgKTtcbiAgICAgICAgbWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgICAgIHNldFRlbXBvcmFsQ29udHJvbGxlcihjb250cm9sKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdTdHlsZTogbWFwbGlicmVnbC5TdHlsZSA9IHtcbiAgICAgICAgICAgIHZlcnNpb246IDgsXG4gICAgICAgICAgICBzb3VyY2VzOiB7XG4gICAgICAgICAgICAgICAgT1NNOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyYXN0ZXInLFxuICAgICAgICAgICAgICAgICAgICB0aWxlczogWydodHRwczovL3RpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJ10sXG4gICAgICAgICAgICAgICAgICAgIHRpbGVTaXplOiAyNTYsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgJzxhIGhyZWY9XCJodHRwOi8vb3NtLm9yZy9jb3B5cmlnaHRcIj7CqSBPcGVuU3RyZWV0TWFwIGNvbnRyaWJ1dG9yczwvYT4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWVzaDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndmVjdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgdGlsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL2thbmFoaXJvLmdpdGh1Yi5pby90ZW1wb3JhbC1wb3AtbWVzaC9tZXNoZXMve3p9L3t4fS97eX0ucGJmJyxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgbWluem9vbTogOSxcbiAgICAgICAgICAgICAgICAgICAgbWF4em9vbTogOSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxheWVyczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdPU00nLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmFzdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiAnT1NNJyxcbiAgICAgICAgICAgICAgICAgICAgbWluem9vbTogMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4em9vbTogMTgsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAuLi5nZXRUZW1wb3JhbExheWVycyh0YXJnZXREYXRhKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICAgIHNldE1hcFN0eWxlKG5ld1N0eWxlKTtcbiAgICB9LCBbdGFyZ2V0RGF0YV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbWFwSW5zdGFuY2U/LnNldFN0eWxlKG1hcFN0eWxlKTtcbiAgICAgICAgdGVtcG9yYWxDb250cm9sbGVyPy5yZWZyZXNoKCk7XG4gICAgfSwgW21hcFN0eWxlXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzgwdmgnIH19IHJlZj17bWFwQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0yIHRvcC0yIHotMTBcIj5cbiAgICAgICAgICAgICAgICA8RGF0YVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldERhdGE9e3RhcmdldERhdGF9XG4gICAgICAgICAgICAgICAgICAgIHNldFRhcmdldERhdGE9e3NldFRhcmdldERhdGF9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1hcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Index/Map.tsx\n");

/***/ })

});