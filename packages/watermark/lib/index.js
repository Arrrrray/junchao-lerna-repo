(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["watermark"] = factory();
	else
		root["watermark"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/renderDoubleWatermark.ts":
/*!**************************************!*\
  !*** ./src/renderDoubleWatermark.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderDoubleWatermark = void 0;
var index_1 = __webpack_require__(/*! ./util/index */ "./src/util/index.ts");
var renderDoubleWatermark = function (props) {
    var _a = props.className, className = _a === void 0 ? 'body' : _a, _b = props.text, text = _b === void 0 ? '水印文案' : _b, _c = props.color, color = _c === void 0 ? '#222' : _c, _d = props.size, size = _d === void 0 ? 13 : _d, _e = props.rotate, rotate = _e === void 0 ? 10 : _e, _f = props.offsetX, offsetX = _f === void 0 ? 15 : _f, _g = props.offsetY, offsetY = _g === void 0 ? 30 : _g, _h = props.font, font = _h === void 0 ? 'sans-serif' : _h, _j = props.transparency, transparency = _j === void 0 ? 0.5 : _j, _k = props.zIndex, zIndex = _k === void 0 ? 1000 : _k;
    // 创建一个canvas，获取文案的宽度，计算出需要设置的canvas的宽高
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    // 获取屏幕像素比
    var ratio = (0, index_1.getPixelRatio)(ctx);
    var newOptions = (0, index_1.scaleOptions)(ratio, { size: size, offsetX: offsetX, offsetY: offsetY, });
    var fontSize = newOptions.size, x = newOptions.offsetX, y = newOptions.offsetY, mal_offset = newOptions.mal_offset;
    if (ctx) {
        console.log('newOptions: ', newOptions);
        ctx.font = "".concat(fontSize, "px ").concat(font);
        ctx.translate(0, 0);
        // 获取文案宽高
        var textWidth = Math.ceil(ctx.measureText(text).width);
        // 计算出需要设置的canvas的宽高，加fontSize作为安全距离
        var currentWidth = Math.ceil(textWidth * Math.cos(rotate * Math.PI / 180)) / ratio + fontSize;
        var currentHeight = Math.ceil(textWidth * Math.sin(rotate * Math.PI / 180)) / ratio + fontSize;
        var top_1 = 0;
        var left = 0;
        var position = 'absolute';
        var dataUrl1 = (0, index_1.createImageBase)({
            width: currentWidth,
            height: currentHeight * 2,
            text: text,
            color: color,
            fontSize: fontSize,
            x: -(Math.ceil(currentHeight * Math.sin(rotate * Math.PI / 180)) - fontSize),
            y: Math.ceil(currentHeight * Math.cos(rotate * Math.PI / 180)),
            rotate: rotate,
            font: font,
            transparency: transparency,
        });
        var dataUrl2 = (0, index_1.createImageBase)({
            width: currentWidth,
            height: currentHeight * 2,
            text: text,
            color: color,
            fontSize: fontSize,
            x: -(Math.ceil(currentHeight * Math.sin(rotate * Math.PI / 180)) - fontSize) + x,
            y: Math.ceil(currentHeight * Math.cos(rotate * Math.PI / 180)) + y,
            rotate: rotate,
            font: font,
            transparency: transparency,
        });
        var defaultStyle = document.createElement('style');
        defaultStyle.innerHTML = "".concat(className, ":after {\n      content: '';\n      display: block;\n      width: 100%;\n      height: 100%;\n      ").concat(top_1 || top_1 === 0 ? "top: ".concat(top_1, "px;") : '', "\n      ").concat(left || left === 0 ? "left: ".concat(left, "px;") : '', "\n      background-repeat: repeat;\n      pointer-events: none;\n    }");
        var styleEl = document.createElement('style');
        styleEl.innerHTML = "".concat(className, ":after\n    {\n      ").concat(position ? "position: ".concat(position) : '', ";\n      ").concat(zIndex ? "z-index:".concat(zIndex) : '', ";\n      background-image: url(").concat(dataUrl1, "), url(").concat(dataUrl2, ");\n      background-size: inherit;\n    }");
        document.head.appendChild(defaultStyle);
        document.head.appendChild(styleEl);
    }
};
exports.renderDoubleWatermark = renderDoubleWatermark;


/***/ }),

/***/ "./src/renderSingleWatermark.ts":
/*!**************************************!*\
  !*** ./src/renderSingleWatermark.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderSingleWatermark = void 0;
var index_1 = __webpack_require__(/*! ./util/index */ "./src/util/index.ts");
var renderSingleWatermark = function (props) {
    var _a = props.className, className = _a === void 0 ? 'body' : _a, _b = props.text, text = _b === void 0 ? '水印文案' : _b, _c = props.color, color = _c === void 0 ? '#222' : _c, _d = props.size, size = _d === void 0 ? 13 : _d, _e = props.rotate, rotate = _e === void 0 ? 10 : _e, _f = props.font, font = _f === void 0 ? 'sans-serif' : _f, _g = props.transparency, transparency = _g === void 0 ? 0.5 : _g, _h = props.zIndex, zIndex = _h === void 0 ? 1000 : _h;
    // 创建一个canvas，获取文案的宽度，计算出需要设置的canvas的宽高
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    // 获取屏幕像素比
    var ratio = (0, index_1.getPixelRatio)(ctx);
    var newOptions = (0, index_1.scaleOptions)(ratio, { size: size, font: font });
    var fontSize = newOptions.size, x = newOptions.offsetX, y = newOptions.offsetY, mal_offset = newOptions.mal_offset;
    if (ctx) {
        console.log('newOptions: ', newOptions);
        ctx.font = "".concat(fontSize, "px ").concat(font);
        ctx.translate(0, 0);
        // 获取文案宽高
        var textWidth = Math.ceil(ctx.measureText(text).width);
        // 计算出需要设置的canvas的宽高，加fontSize作为安全距离
        var currentWidth = Math.ceil(textWidth * Math.cos(rotate * Math.PI / 180)) / ratio + fontSize;
        var currentHeight = Math.ceil(textWidth * Math.sin(rotate * Math.PI / 180)) / ratio + fontSize;
        var top_1 = 0;
        var left = 0;
        var position = 'absolute';
        var dataUrl1 = (0, index_1.createImageBase)({
            width: currentWidth,
            height: currentHeight,
            text: text,
            color: color,
            fontSize: fontSize,
            x: -(Math.ceil(currentHeight * Math.sin(rotate * Math.PI / 180)) - fontSize),
            y: Math.ceil(currentHeight * Math.cos(rotate * Math.PI / 180)),
            rotate: rotate,
            font: font,
            transparency: transparency,
        });
        var defaultStyle = document.createElement('style');
        defaultStyle.innerHTML = "".concat(className, ":after {\n      content: '';\n      display: block;\n      width: 100%;\n      height: 100%;\n      ").concat(top_1 || top_1 === 0 ? "top: ".concat(top_1, "px;") : '', "\n      ").concat(left || left === 0 ? "left: ".concat(left, "px;") : '', "\n      background-repeat: repeat;\n      pointer-events: none;\n      ").concat(position ? "position: ".concat(position) : '', ";\n      ").concat(zIndex ? "z-index:".concat(zIndex) : '', ";\n      background-image: url(").concat(dataUrl1, ");\n      background-size: inherit;\n    }");
        document.head.appendChild(defaultStyle);
    }
};
exports.renderSingleWatermark = renderSingleWatermark;


/***/ }),

/***/ "./src/util/index.ts":
/*!***************************!*\
  !*** ./src/util/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createImageBase = exports.scaleOptions = exports.getPixelRatio = void 0;
// 获取屏幕像素比
var getPixelRatio = function (context) {
    var backingStore = context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;
    return (window.devicePixelRatio || 1) / backingStore;
};
exports.getPixelRatio = getPixelRatio;
// 根据屏幕像素比，转化canvas绘制参数
var scaleOptions = function (ratio, options) {
    var newOptions = __assign({}, options);
    var scaleKeys = ["size", 'offsetX', 'offsetY', 'mal_offset'];
    if (!Object.entries) {
        Object.entries = function (obj) {
            var ownProps = Object.keys(obj);
            var i = ownProps.length;
            var resArray = new Array(i); // preallocate the Array
            while (i--) {
                resArray[i] = [ownProps[i], obj[ownProps[i]]];
            }
            return resArray;
        };
    }
    Object.entries(newOptions).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (scaleKeys.includes(key)) {
            newOptions[key] = value * ratio;
        }
    });
    return newOptions;
};
exports.scaleOptions = scaleOptions;
var createImageBase = function (props) {
    var width = props.width, height = props.height, text = props.text, color = props.color, fontSize = props.fontSize, x = props.x, y = props.y, rotate = props.rotate, font = props.font, transparency = props.transparency;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.font = "".concat(fontSize, "px ").concat(font);
        ctx.fillStyle = color;
        ctx.globalAlpha = transparency;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.translate(0, 0);
        canvas.width = width;
        canvas.height = height;
        ctx.rotate(-rotate * Math.PI / 180);
        ctx.fillText(text, x, y);
        return canvas.toDataURL('image/png');
    }
};
exports.createImageBase = createImageBase;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderSingleWatermark = exports.renderDoubleWatermark = void 0;
var renderDoubleWatermark_1 = __webpack_require__(/*! ./renderDoubleWatermark */ "./src/renderDoubleWatermark.ts");
Object.defineProperty(exports, "renderDoubleWatermark", ({ enumerable: true, get: function () { return renderDoubleWatermark_1.renderDoubleWatermark; } }));
var renderSingleWatermark_1 = __webpack_require__(/*! ./renderSingleWatermark */ "./src/renderSingleWatermark.ts");
Object.defineProperty(exports, "renderSingleWatermark", ({ enumerable: true, get: function () { return renderSingleWatermark_1.renderSingleWatermark; } }));

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksQ0FBQztRQUMvQixHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN2QixHQUFHLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztRQUM1QixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN4QztBQUNMLENBQUM7QUFqQlksdUJBQWUsbUJBaUIzQjs7Ozs7OztVQ25FRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7O0FDdEJBLG1IQUE4RjtBQUdyRix1R0FIQSw2Q0FBcUIsUUFHQTtBQUY5QixtSEFBNkY7QUFFaEMsdUdBRnBELDZDQUFxQixRQUVvRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dhdGVybWFyay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vd2F0ZXJtYXJrLy4vc3JjL3JlbmRlckRvdWJsZVdhdGVybWFyay50cyIsIndlYnBhY2s6Ly93YXRlcm1hcmsvLi9zcmMvcmVuZGVyU2luZ2xlV2F0ZXJtYXJrLnRzIiwid2VicGFjazovL3dhdGVybWFyay8uL3NyYy91dGlsL2luZGV4LnRzIiwid2VicGFjazovL3dhdGVybWFyay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93YXRlcm1hcmsvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2F0ZXJtYXJrXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIndhdGVybWFya1wiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImltcG9ydCB7IGdldFBpeGVsUmF0aW8sIHNjYWxlT3B0aW9ucywgY3JlYXRlSW1hZ2VCYXNlIH0gZnJvbSAnLi91dGlsL2luZGV4JztcbmV4cG9ydCBpbnRlcmZhY2UgSVJlbmRlckRvdWJsZVdhdGVybWFya1Byb3BzIHtcbiAgLyoqXG4gICAqIOiiq+aMgui9veeahOWFg+e0oOexu+WRve+8jOm7mOiupGJvZHlcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOawtOWNsOaWh+ahiFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOawtOWNsOaWh+ahiOminOiJsiwgIzIyMlxuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG4gIC8qKlxuICAqIOWtl+WPt1xuKi9cbiAgc2l6ZT86IG51bWJlcjtcbiAgLyoqXG4gICAgKiDml4vovazop5LluqYgMO+9njc1XG4gICovXG4gIHJvdGF0ZT86IG51bWJlcjtcbiAgLyoqXG4gICAgKiDlrZfkvZPmoLzlvI9cbiAgKi9cbiAgZm9udD86IHN0cmluZztcbiAgLyoqXG4gICAgKiDpgI/mmI7luqZcbiAgKi9cbiAgdHJhbnNwYXJlbmN5PzogbnVtYmVyO1xuICAvKipcbiAgICAqIHjmlrnlkJHlgY/np7tcbiAgKi9cbiAgb2Zmc2V0WD86IG51bWJlcjtcbiAgLyoqXG4gICAgKiB55pa55ZCR5YGP56e7XG4gICovXG4gIG9mZnNldFk/OiBudW1iZXI7XG4gIC8qKlxuICAgICog5rC05Y2w5bGC57qnXG4gICovXG4gIHpJbmRleD86IG51bWJlcjtcblxufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyRG91YmxlV2F0ZXJtYXJrID0gKHByb3BzOiBJUmVuZGVyRG91YmxlV2F0ZXJtYXJrUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUgPSAnYm9keScsIHRleHQgPSAn5rC05Y2w5paH5qGIJywgY29sb3IgPSAnIzIyMicsIHNpemUgPSAxMywgcm90YXRlID0gMTAsIG9mZnNldFggPSAxNSwgb2Zmc2V0WSA9IDMwLCBmb250ID0gJ3NhbnMtc2VyaWYnLCB0cmFuc3BhcmVuY3kgPSAwLjUsIHpJbmRleCA9IDEwMDAgfSA9IHByb3BzO1xuICAvLyDliJvlu7rkuIDkuKpjYW52YXPvvIzojrflj5bmlofmoYjnmoTlrr3luqbvvIzorqHnrpflh7rpnIDopoHorr7nva7nmoRjYW52YXPnmoTlrr3pq5hcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAvLyDojrflj5blsY/luZXlg4/ntKDmr5RcbiAgY29uc3QgcmF0aW8gPSBnZXRQaXhlbFJhdGlvKGN0eCk7XG4gIGNvbnN0IG5ld09wdGlvbnMgPSBzY2FsZU9wdGlvbnMocmF0aW8sIHsgc2l6ZSwgb2Zmc2V0WCwgb2Zmc2V0WSwgfSk7XG4gIGNvbnN0IHsgc2l6ZTogZm9udFNpemUsIG9mZnNldFg6IHgsIG9mZnNldFk6IHksIG1hbF9vZmZzZXQsIH0gPSBuZXdPcHRpb25zO1xuICBpZiAoY3R4KSB7XG4gICAgY29uc29sZS5sb2coJ25ld09wdGlvbnM6ICcsIG5ld09wdGlvbnMpXG4gICAgY3R4LmZvbnQgPSBgJHtmb250U2l6ZX1weCAke2ZvbnR9YDtcbiAgICBjdHgudHJhbnNsYXRlKDAsIDApO1xuICAgIC8vIOiOt+WPluaWh+ahiOWuvemrmFxuICAgIGNvbnN0IHRleHRXaWR0aCA9IE1hdGguY2VpbChjdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGgpO1xuXG4gICAgLy8g6K6h566X5Ye66ZyA6KaB6K6+572u55qEY2FudmFz55qE5a696auY77yM5YqgZm9udFNpemXkvZzkuLrlronlhajot53nprtcbiAgICBjb25zdCBjdXJyZW50V2lkdGggPSBNYXRoLmNlaWwodGV4dFdpZHRoICogTWF0aC5jb3Mocm90YXRlICogTWF0aC5QSSAvIDE4MCkpIC8gcmF0aW8gKyBmb250U2l6ZTtcbiAgICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gTWF0aC5jZWlsKHRleHRXaWR0aCAqIE1hdGguc2luKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApKSAvIHJhdGlvICsgZm9udFNpemU7XG4gICAgY29uc3QgdG9wID0gMDtcbiAgICBjb25zdCBsZWZ0ID0gMDtcbiAgICBjb25zdCBwb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgY29uc3QgZGF0YVVybDEgPSBjcmVhdGVJbWFnZUJhc2Uoe1xuICAgICAgd2lkdGg6IGN1cnJlbnRXaWR0aCxcbiAgICAgIGhlaWdodDogY3VycmVudEhlaWdodCAqIDIsXG4gICAgICB0ZXh0LFxuICAgICAgY29sb3IsXG4gICAgICBmb250U2l6ZSxcbiAgICAgIHg6IC0oTWF0aC5jZWlsKGN1cnJlbnRIZWlnaHQgKiBNYXRoLnNpbihyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKSkgLSBmb250U2l6ZSksXG4gICAgICB5OiBNYXRoLmNlaWwoY3VycmVudEhlaWdodCAqIE1hdGguY29zKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApKSxcbiAgICAgIHJvdGF0ZSxcbiAgICAgIGZvbnQsXG4gICAgICB0cmFuc3BhcmVuY3ksXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YVVybDIgPSBjcmVhdGVJbWFnZUJhc2Uoe1xuICAgICAgd2lkdGg6IGN1cnJlbnRXaWR0aCxcbiAgICAgIGhlaWdodDogY3VycmVudEhlaWdodCAqIDIsXG4gICAgICB0ZXh0LFxuICAgICAgY29sb3IsXG4gICAgICBmb250U2l6ZSxcbiAgICAgIHg6IC0oTWF0aC5jZWlsKGN1cnJlbnRIZWlnaHQgKiBNYXRoLnNpbihyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKSkgLSBmb250U2l6ZSkgKyB4LFxuICAgICAgeTogTWF0aC5jZWlsKGN1cnJlbnRIZWlnaHQgKiBNYXRoLmNvcyhyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKSkgKyB5LFxuICAgICAgcm90YXRlLFxuICAgICAgZm9udCxcbiAgICAgIHRyYW5zcGFyZW5jeSxcbiAgICB9KTtcbiAgICBsZXQgZGVmYXVsdFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBkZWZhdWx0U3R5bGUuaW5uZXJIVE1MID0gYCR7Y2xhc3NOYW1lfTphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAke3RvcCB8fCB0b3AgPT09IDAgPyBgdG9wOiAke3RvcH1weDtgIDogJyd9XG4gICAgICAke2xlZnQgfHwgbGVmdCA9PT0gMCA/IGBsZWZ0OiAke2xlZnR9cHg7YCA6ICcnfVxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1gO1xuXG4gICAgbGV0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlRWwuaW5uZXJIVE1MID0gYCR7Y2xhc3NOYW1lfTphZnRlclxuICAgIHtcbiAgICAgICR7cG9zaXRpb24gPyBgcG9zaXRpb246ICR7cG9zaXRpb259YCA6ICcnfTtcbiAgICAgICR7ekluZGV4ID8gYHotaW5kZXg6JHt6SW5kZXh9YCA6ICcnfTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2RhdGFVcmwxfSksIHVybCgke2RhdGFVcmwyfSk7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGluaGVyaXQ7XG4gICAgfWA7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkZWZhdWx0U3R5bGUpO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFBpeGVsUmF0aW8sIHNjYWxlT3B0aW9ucywgY3JlYXRlSW1hZ2VCYXNlIH0gZnJvbSAnLi91dGlsL2luZGV4JztcblxuZXhwb3J0IGludGVyZmFjZSBJUmVuZGVyU2luZ2xlV2F0ZXJtYXJrUHJvcHMge1xuICAvKipcbiog6KKr5oyC6L2955qE5YWD57Sg57G75ZG977yM6buY6K6kYm9keVxuKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICog5rC05Y2w5paH5qGIXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5rC05Y2w5paH5qGI6aKc6ImyLCAjMjIyXG4gICAqL1xuICBjb2xvcj86IHN0cmluZztcbiAgLyoqXG4gICog5a2X5Y+3XG4qL1xuICBzaXplPzogbnVtYmVyO1xuICAvKipcbiAgICAqIOaXi+i9rOinkuW6piAw772eNzVcbiAgKi9cbiAgcm90YXRlPzogbnVtYmVyO1xuICAvKipcbiAgICAqIOWtl+S9k+agvOW8j1xuICAqL1xuICBmb250Pzogc3RyaW5nO1xuICAvKipcbiAgICAqIOmAj+aYjuW6plxuICAqL1xuICB0cmFuc3BhcmVuY3k/OiBudW1iZXI7XG4gIC8qKlxuICAgICog5rC05Y2w5bGC57qnXG4gICovXG4gIHpJbmRleD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlclNpbmdsZVdhdGVybWFyayA9IChwcm9wczogSVJlbmRlclNpbmdsZVdhdGVybWFya1Byb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lID0gJ2JvZHknLCB0ZXh0ID0gJ+awtOWNsOaWh+ahiCcsIGNvbG9yID0gJyMyMjInLCBzaXplID0gMTMsIHJvdGF0ZSA9IDEwLCBmb250ID0gJ3NhbnMtc2VyaWYnLCB0cmFuc3BhcmVuY3kgPSAwLjUsIHpJbmRleCA9IDEwMDAgfSA9IHByb3BzO1xuICAvLyDliJvlu7rkuIDkuKpjYW52YXPvvIzojrflj5bmlofmoYjnmoTlrr3luqbvvIzorqHnrpflh7rpnIDopoHorr7nva7nmoRjYW52YXPnmoTlrr3pq5hcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAvLyDojrflj5blsY/luZXlg4/ntKDmr5RcbiAgY29uc3QgcmF0aW8gPSBnZXRQaXhlbFJhdGlvKGN0eCk7XG4gIGNvbnN0IG5ld09wdGlvbnMgPSBzY2FsZU9wdGlvbnMocmF0aW8sIHsgc2l6ZSwgZm9udCB9KTtcbiAgY29uc3QgeyBzaXplOiBmb250U2l6ZSwgb2Zmc2V0WDogeCwgb2Zmc2V0WTogeSwgbWFsX29mZnNldCwgfSA9IG5ld09wdGlvbnM7XG4gIGlmIChjdHgpIHtcbiAgICBjb25zb2xlLmxvZygnbmV3T3B0aW9uczogJywgbmV3T3B0aW9ucylcbiAgICBjdHguZm9udCA9IGAke2ZvbnRTaXplfXB4ICR7Zm9udH1gO1xuICAgIGN0eC50cmFuc2xhdGUoMCwgMCk7XG4gICAgLy8g6I635Y+W5paH5qGI5a696auYXG4gICAgY29uc3QgdGV4dFdpZHRoID0gTWF0aC5jZWlsKGN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aCk7XG5cbiAgICAvLyDorqHnrpflh7rpnIDopoHorr7nva7nmoRjYW52YXPnmoTlrr3pq5jvvIzliqBmb250U2l6ZeS9nOS4uuWuieWFqOi3neemu1xuICAgIGNvbnN0IGN1cnJlbnRXaWR0aCA9IE1hdGguY2VpbCh0ZXh0V2lkdGggKiBNYXRoLmNvcyhyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKSkgLyByYXRpbyArIGZvbnRTaXplO1xuICAgIGNvbnN0IGN1cnJlbnRIZWlnaHQgPSBNYXRoLmNlaWwodGV4dFdpZHRoICogTWF0aC5zaW4ocm90YXRlICogTWF0aC5QSSAvIDE4MCkpIC8gcmF0aW8gKyBmb250U2l6ZTtcbiAgICBjb25zdCB0b3AgPSAwO1xuICAgIGNvbnN0IGxlZnQgPSAwO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBjb25zdCBkYXRhVXJsMSA9IGNyZWF0ZUltYWdlQmFzZSh7XG4gICAgICB3aWR0aDogY3VycmVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiBjdXJyZW50SGVpZ2h0LFxuICAgICAgdGV4dCxcbiAgICAgIGNvbG9yLFxuICAgICAgZm9udFNpemUsXG4gICAgICB4OiAtKE1hdGguY2VpbChjdXJyZW50SGVpZ2h0ICogTWF0aC5zaW4ocm90YXRlICogTWF0aC5QSSAvIDE4MCkpIC0gZm9udFNpemUpLFxuICAgICAgeTogTWF0aC5jZWlsKGN1cnJlbnRIZWlnaHQgKiBNYXRoLmNvcyhyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKSksXG4gICAgICByb3RhdGUsXG4gICAgICBmb250LFxuICAgICAgdHJhbnNwYXJlbmN5LFxuICAgIH0pO1xuICAgIGxldCBkZWZhdWx0U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGRlZmF1bHRTdHlsZS5pbm5lckhUTUwgPSBgJHtjbGFzc05hbWV9OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICR7dG9wIHx8IHRvcCA9PT0gMCA/IGB0b3A6ICR7dG9wfXB4O2AgOiAnJ31cbiAgICAgICR7bGVmdCB8fCBsZWZ0ID09PSAwID8gYGxlZnQ6ICR7bGVmdH1weDtgIDogJyd9XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAke3Bvc2l0aW9uID8gYHBvc2l0aW9uOiAke3Bvc2l0aW9ufWAgOiAnJ307XG4gICAgICAke3pJbmRleCA/IGB6LWluZGV4OiR7ekluZGV4fWAgOiAnJ307XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtkYXRhVXJsMX0pO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBpbmhlcml0O1xuICAgIH1gO1xuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkZWZhdWx0U3R5bGUpO1xuICB9XG59IiwiXG4vLyDojrflj5blsY/luZXlg4/ntKDmr5RcbmV4cG9ydCBjb25zdCBnZXRQaXhlbFJhdGlvID0gZnVuY3Rpb24gKGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IGJhY2tpbmdTdG9yZSA9IGNvbnRleHQuYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgICAgICBjb250ZXh0LndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAgICAgY29udGV4dC5tb3pCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgIGNvbnRleHQubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgIGNvbnRleHQub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAgICAgY29udGV4dC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IDE7XG4gICAgcmV0dXJuICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSAvIGJhY2tpbmdTdG9yZTtcbn07XG5cbi8vIOagueaNruWxj+W5leWDj+e0oOavlO+8jOi9rOWMlmNhbnZhc+e7mOWItuWPguaVsFxuZXhwb3J0IGNvbnN0IHNjYWxlT3B0aW9ucyA9IGZ1bmN0aW9uIChyYXRpbzogbnVtYmVyLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgbGV0IG5ld09wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcblxuICAgIGNvbnN0IHNjYWxlS2V5czogc3RyaW5nW10gPSBbXCJzaXplXCIsICdvZmZzZXRYJywgJ29mZnNldFknLCAnbWFsX29mZnNldCddO1xuICAgIGlmICghT2JqZWN0LmVudHJpZXMpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMgPSBmdW5jdGlvbiAob2JqOiBhbnkpIHtcbiAgICAgICAgICAgIGNvbnN0IG93blByb3BzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgICAgIGxldCBpID0gb3duUHJvcHMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgcmVzQXJyYXkgPSBuZXcgQXJyYXkoaSk7IC8vIHByZWFsbG9jYXRlIHRoZSBBcnJheVxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIHJlc0FycmF5W2ldID0gW293blByb3BzW2ldLCBvYmpbb3duUHJvcHNbaV1dXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNBcnJheTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgT2JqZWN0LmVudHJpZXMobmV3T3B0aW9ucykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGlmIChzY2FsZUtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgbmV3T3B0aW9uc1trZXldID0gdmFsdWUgKiByYXRpbztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdPcHRpb25zO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBJUmVuZGVyQmFzZUltYWdlUHJvcHMge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXJcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBmb250U2l6ZTogbnVtYmVyO1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgcm90YXRlOiBudW1iZXI7XG4gICAgZm9udDogc3RyaW5nO1xuICAgIHRyYW5zcGFyZW5jeTogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVJbWFnZUJhc2UgPSAocHJvcHM6IElSZW5kZXJCYXNlSW1hZ2VQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGV4dCwgY29sb3IsIGZvbnRTaXplLCB4LCB5LCByb3RhdGUsIGZvbnQsIHRyYW5zcGFyZW5jeSB9ID0gcHJvcHM7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKGN0eCkge1xuICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRTaXplfXB4ICR7Zm9udH1gO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IHRyYW5zcGFyZW5jeTtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgICBjdHgudHJhbnNsYXRlKDAsIDApO1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY3R4LnJvdGF0ZSgtcm90YXRlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICAgICAgcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgcmVuZGVyRG91YmxlV2F0ZXJtYXJrLCBJUmVuZGVyRG91YmxlV2F0ZXJtYXJrUHJvcHMsIH0gZnJvbSAnLi9yZW5kZXJEb3VibGVXYXRlcm1hcmsnO1xuaW1wb3J0IHsgcmVuZGVyU2luZ2xlV2F0ZXJtYXJrLCBJUmVuZGVyU2luZ2xlV2F0ZXJtYXJrUHJvcHMgfSBmcm9tICcuL3JlbmRlclNpbmdsZVdhdGVybWFyayc7XG5cbmV4cG9ydCB7IHJlbmRlckRvdWJsZVdhdGVybWFyaywgSVJlbmRlckRvdWJsZVdhdGVybWFya1Byb3BzLCByZW5kZXJTaW5nbGVXYXRlcm1hcmssIElSZW5kZXJTaW5nbGVXYXRlcm1hcmtQcm9wcyB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==