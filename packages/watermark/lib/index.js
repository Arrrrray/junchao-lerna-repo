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
        // 计算出需要设置的canvas的宽高，加fontSize作为留白
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
        // 计算出需要设置的canvas的宽高，加fontSize作为留白
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxHQUFHLFlBQVksQ0FBQztRQUMvQixHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN2QixHQUFHLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztRQUM1QixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN4QztBQUNMLENBQUM7QUFqQlksdUJBQWUsbUJBaUIzQjs7Ozs7OztVQ2xFRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7O0FDdEJBLG1IQUE4RjtBQUVyRix1R0FGQSw2Q0FBcUIsUUFFQTtBQUQ5QixtSEFBNkY7QUFDaEMsdUdBRHBELDZDQUFxQixRQUNvRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dhdGVybWFyay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vd2F0ZXJtYXJrLy4vc3JjL3JlbmRlckRvdWJsZVdhdGVybWFyay50cyIsIndlYnBhY2s6Ly93YXRlcm1hcmsvLi9zcmMvcmVuZGVyU2luZ2xlV2F0ZXJtYXJrLnRzIiwid2VicGFjazovL3dhdGVybWFyay8uL3NyYy91dGlsL2luZGV4LnRzIiwid2VicGFjazovL3dhdGVybWFyay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93YXRlcm1hcmsvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2F0ZXJtYXJrXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIndhdGVybWFya1wiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImltcG9ydCB7IGdldFBpeGVsUmF0aW8sIHNjYWxlT3B0aW9ucywgY3JlYXRlSW1hZ2VCYXNlIH0gZnJvbSAnLi91dGlsL2luZGV4JztcbmV4cG9ydCBpbnRlcmZhY2UgSVJlbmRlckRvdWJsZVdhdGVybWFya1Byb3BzIHtcbiAgLyoqXG4gICAqIOiiq+aMgui9veeahOWFg+e0oOexu+WRve+8jOm7mOiupGJvZHlcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOawtOWNsOaWh+ahiFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOawtOWNsOaWh+ahiOminOiJsiwgIzIyMlxuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG4gIC8qKlxuICAqIOWtl+WPt1xuKi9cbiAgc2l6ZT86IG51bWJlcjtcbiAgLyoqXG4gICAgKiDml4vovazop5LluqYgMO+9njc1XG4gICovXG4gIHJvdGF0ZT86IG51bWJlcjtcbiAgLyoqXG4gICAgKiDlrZfkvZPmoLzlvI9cbiAgKi9cbiAgZm9udD86IHN0cmluZztcbiAgLyoqXG4gICAgKiDpgI/mmI7luqZcbiAgKi9cbiAgdHJhbnNwYXJlbmN5PzogbnVtYmVyO1xuICAvKipcbiAgICAqIHjmlrnlkJHlgY/np7tcbiAgKi9cbiAgb2Zmc2V0WD86IG51bWJlcjtcbiAgLyoqXG4gICAgKiB55pa55ZCR5YGP56e7XG4gICovXG4gIG9mZnNldFk/OiBudW1iZXI7XG4gIC8qKlxuICAgICog5rC05Y2w5bGC57qnXG4gICovXG4gIHpJbmRleD86IG51bWJlcjtcblxufVxuXG5cbmV4cG9ydCBjb25zdCByZW5kZXJEb3VibGVXYXRlcm1hcmsgPSAocHJvcHM6IElSZW5kZXJEb3VibGVXYXRlcm1hcmtQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSA9ICdib2R5JywgdGV4dCA9ICfmsLTljbDmlofmoYgnLCBjb2xvciA9ICcjMjIyJywgc2l6ZSA9IDEzLCByb3RhdGUgPSAxMCwgb2Zmc2V0WCA9IDE1LCBvZmZzZXRZID0gMzAsIGZvbnQgPSAnc2Fucy1zZXJpZicsIHRyYW5zcGFyZW5jeSA9IDAuNSwgekluZGV4ID0gMTAwMCB9ID0gcHJvcHM7XG4gIC8vIOWIm+W7uuS4gOS4qmNhbnZhc++8jOiOt+WPluaWh+ahiOeahOWuveW6pu+8jOiuoeeul+WHuumcgOimgeiuvue9rueahGNhbnZhc+eahOWuvemrmFxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIC8vIOiOt+WPluWxj+W5leWDj+e0oOavlFxuICBjb25zdCByYXRpbyA9IGdldFBpeGVsUmF0aW8oY3R4KTtcbiAgY29uc3QgbmV3T3B0aW9ucyA9IHNjYWxlT3B0aW9ucyhyYXRpbywgeyBzaXplLCBvZmZzZXRYLCBvZmZzZXRZLCB9KTtcbiAgY29uc3QgeyBzaXplOiBmb250U2l6ZSwgb2Zmc2V0WDogeCwgb2Zmc2V0WTogeSwgbWFsX29mZnNldCwgfSA9IG5ld09wdGlvbnM7XG4gIGlmIChjdHgpIHtcbiAgICBjb25zb2xlLmxvZygnbmV3T3B0aW9uczogJywgbmV3T3B0aW9ucylcbiAgICBjdHguZm9udCA9IGAke2ZvbnRTaXplfXB4ICR7Zm9udH1gO1xuICAgIGN0eC50cmFuc2xhdGUoMCwgMCk7XG4gICAgLy8g6I635Y+W5paH5qGI5a696auYXG4gICAgY29uc3QgdGV4dFdpZHRoID0gTWF0aC5jZWlsKGN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aCk7XG5cbiAgICAvLyDorqHnrpflh7rpnIDopoHorr7nva7nmoRjYW52YXPnmoTlrr3pq5jvvIzliqBmb250U2l6ZeS9nOS4uueVmeeZvVxuICAgIGNvbnN0IGN1cnJlbnRXaWR0aCA9IE1hdGguY2VpbCh0ZXh0V2lkdGggKiBNYXRoLmNvcyhyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKSkgLyByYXRpbyArIGZvbnRTaXplO1xuICAgIGNvbnN0IGN1cnJlbnRIZWlnaHQgPSBNYXRoLmNlaWwodGV4dFdpZHRoICogTWF0aC5zaW4ocm90YXRlICogTWF0aC5QSSAvIDE4MCkpIC8gcmF0aW8gKyBmb250U2l6ZTtcbiAgICBjb25zdCB0b3AgPSAwO1xuICAgIGNvbnN0IGxlZnQgPSAwO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBjb25zdCBkYXRhVXJsMSA9IGNyZWF0ZUltYWdlQmFzZSh7XG4gICAgICB3aWR0aDogY3VycmVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiBjdXJyZW50SGVpZ2h0ICogMixcbiAgICAgIHRleHQsXG4gICAgICBjb2xvcixcbiAgICAgIGZvbnRTaXplLFxuICAgICAgeDogLShNYXRoLmNlaWwoY3VycmVudEhlaWdodCAqIE1hdGguc2luKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApKSAtIGZvbnRTaXplKSxcbiAgICAgIHk6IE1hdGguY2VpbChjdXJyZW50SGVpZ2h0ICogTWF0aC5jb3Mocm90YXRlICogTWF0aC5QSSAvIDE4MCkpLFxuICAgICAgcm90YXRlLFxuICAgICAgZm9udCxcbiAgICAgIHRyYW5zcGFyZW5jeSxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhVXJsMiA9IGNyZWF0ZUltYWdlQmFzZSh7XG4gICAgICB3aWR0aDogY3VycmVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiBjdXJyZW50SGVpZ2h0ICogMixcbiAgICAgIHRleHQsXG4gICAgICBjb2xvcixcbiAgICAgIGZvbnRTaXplLFxuICAgICAgeDogLShNYXRoLmNlaWwoY3VycmVudEhlaWdodCAqIE1hdGguc2luKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApKSAtIGZvbnRTaXplKSArIHgsXG4gICAgICB5OiBNYXRoLmNlaWwoY3VycmVudEhlaWdodCAqIE1hdGguY29zKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApKSArIHksXG4gICAgICByb3RhdGUsXG4gICAgICBmb250LFxuICAgICAgdHJhbnNwYXJlbmN5LFxuICAgIH0pO1xuICAgIGxldCBkZWZhdWx0U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGRlZmF1bHRTdHlsZS5pbm5lckhUTUwgPSBgJHtjbGFzc05hbWV9OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICR7dG9wIHx8IHRvcCA9PT0gMCA/IGB0b3A6ICR7dG9wfXB4O2AgOiAnJ31cbiAgICAgICR7bGVmdCB8fCBsZWZ0ID09PSAwID8gYGxlZnQ6ICR7bGVmdH1weDtgIDogJyd9XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfWA7XG5cbiAgICBsZXQgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGVFbC5pbm5lckhUTUwgPSBgJHtjbGFzc05hbWV9OmFmdGVyXG4gICAge1xuICAgICAgJHtwb3NpdGlvbiA/IGBwb3NpdGlvbjogJHtwb3NpdGlvbn1gIDogJyd9O1xuICAgICAgJHt6SW5kZXggPyBgei1pbmRleDoke3pJbmRleH1gIDogJyd9O1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7ZGF0YVVybDF9KSwgdXJsKCR7ZGF0YVVybDJ9KTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogaW5oZXJpdDtcbiAgICB9YDtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGRlZmF1bHRTdHlsZSk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0UGl4ZWxSYXRpbywgc2NhbGVPcHRpb25zLCBjcmVhdGVJbWFnZUJhc2UgfSBmcm9tICcuL3V0aWwvaW5kZXgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZW5kZXJTaW5nbGVXYXRlcm1hcmtQcm9wcyB7XG4gIC8qKlxuKiDooqvmjILovb3nmoTlhYPntKDnsbvlkb3vvIzpu5jorqRib2R5XG4qL1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmsLTljbDmlofmoYhcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmsLTljbDmlofmoYjpopzoibIsICMyMjJcbiAgICovXG4gIGNvbG9yPzogc3RyaW5nO1xuICAvKipcbiAgKiDlrZflj7dcbiovXG4gIHNpemU/OiBudW1iZXI7XG4gIC8qKlxuICAgICog5peL6L2s6KeS5bqmIDDvvZ43NVxuICAqL1xuICByb3RhdGU/OiBudW1iZXI7XG4gIC8qKlxuICAgICog5a2X5L2T5qC85byPXG4gICovXG4gIGZvbnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgICog6YCP5piO5bqmXG4gICovXG4gIHRyYW5zcGFyZW5jeT86IG51bWJlcjtcbiAgLyoqXG4gICAgKiDmsLTljbDlsYLnuqdcbiAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyU2luZ2xlV2F0ZXJtYXJrID0gKHByb3BzOiBJUmVuZGVyU2luZ2xlV2F0ZXJtYXJrUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUgPSAnYm9keScsIHRleHQgPSAn5rC05Y2w5paH5qGIJywgY29sb3IgPSAnIzIyMicsIHNpemUgPSAxMywgcm90YXRlID0gMTAsIGZvbnQgPSAnc2Fucy1zZXJpZicsIHRyYW5zcGFyZW5jeSA9IDAuNSwgekluZGV4ID0gMTAwMCB9ID0gcHJvcHM7XG4gIC8vIOWIm+W7uuS4gOS4qmNhbnZhc++8jOiOt+WPluaWh+ahiOeahOWuveW6pu+8jOiuoeeul+WHuumcgOimgeiuvue9rueahGNhbnZhc+eahOWuvemrmFxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIC8vIOiOt+WPluWxj+W5leWDj+e0oOavlFxuICBjb25zdCByYXRpbyA9IGdldFBpeGVsUmF0aW8oY3R4KTtcbiAgY29uc3QgbmV3T3B0aW9ucyA9IHNjYWxlT3B0aW9ucyhyYXRpbywgeyBzaXplLCBmb250IH0pO1xuICBjb25zdCB7IHNpemU6IGZvbnRTaXplLCBvZmZzZXRYOiB4LCBvZmZzZXRZOiB5LCBtYWxfb2Zmc2V0LCB9ID0gbmV3T3B0aW9ucztcbiAgaWYgKGN0eCkge1xuICAgIGNvbnNvbGUubG9nKCduZXdPcHRpb25zOiAnLCBuZXdPcHRpb25zKVxuICAgIGN0eC5mb250ID0gYCR7Zm9udFNpemV9cHggJHtmb250fWA7XG4gICAgY3R4LnRyYW5zbGF0ZSgwLCAwKTtcbiAgICAvLyDojrflj5bmlofmoYjlrr3pq5hcbiAgICBjb25zdCB0ZXh0V2lkdGggPSBNYXRoLmNlaWwoY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoKTtcblxuICAgIC8vIOiuoeeul+WHuumcgOimgeiuvue9rueahGNhbnZhc+eahOWuvemrmO+8jOWKoGZvbnRTaXpl5L2c5Li655WZ55m9XG4gICAgY29uc3QgY3VycmVudFdpZHRoID0gTWF0aC5jZWlsKHRleHRXaWR0aCAqIE1hdGguY29zKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApKSAvIHJhdGlvICsgZm9udFNpemU7XG4gICAgY29uc3QgY3VycmVudEhlaWdodCA9IE1hdGguY2VpbCh0ZXh0V2lkdGggKiBNYXRoLnNpbihyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKSkgLyByYXRpbyArIGZvbnRTaXplO1xuICAgIGNvbnN0IHRvcCA9IDA7XG4gICAgY29uc3QgbGVmdCA9IDA7XG4gICAgY29uc3QgcG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGNvbnN0IGRhdGFVcmwxID0gY3JlYXRlSW1hZ2VCYXNlKHtcbiAgICAgIHdpZHRoOiBjdXJyZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IGN1cnJlbnRIZWlnaHQgKiAyLFxuICAgICAgdGV4dCxcbiAgICAgIGNvbG9yLFxuICAgICAgZm9udFNpemUsXG4gICAgICB4OiAtKE1hdGguY2VpbChjdXJyZW50SGVpZ2h0ICogTWF0aC5zaW4ocm90YXRlICogTWF0aC5QSSAvIDE4MCkpIC0gZm9udFNpemUpLFxuICAgICAgeTogTWF0aC5jZWlsKGN1cnJlbnRIZWlnaHQgKiBNYXRoLmNvcyhyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKSksXG4gICAgICByb3RhdGUsXG4gICAgICBmb250LFxuICAgICAgdHJhbnNwYXJlbmN5LFxuICAgIH0pO1xuICAgIGxldCBkZWZhdWx0U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGRlZmF1bHRTdHlsZS5pbm5lckhUTUwgPSBgJHtjbGFzc05hbWV9OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICR7dG9wIHx8IHRvcCA9PT0gMCA/IGB0b3A6ICR7dG9wfXB4O2AgOiAnJ31cbiAgICAgICR7bGVmdCB8fCBsZWZ0ID09PSAwID8gYGxlZnQ6ICR7bGVmdH1weDtgIDogJyd9XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAke3Bvc2l0aW9uID8gYHBvc2l0aW9uOiAke3Bvc2l0aW9ufWAgOiAnJ307XG4gICAgICAke3pJbmRleCA/IGB6LWluZGV4OiR7ekluZGV4fWAgOiAnJ307XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtkYXRhVXJsMX0pO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBpbmhlcml0O1xuICAgIH1gO1xuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkZWZhdWx0U3R5bGUpO1xuICB9XG59IiwiXG4vLyDojrflj5blsY/luZXlg4/ntKDmr5RcbmV4cG9ydCBjb25zdCBnZXRQaXhlbFJhdGlvID0gZnVuY3Rpb24gKGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IGJhY2tpbmdTdG9yZSA9IGNvbnRleHQuYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgICAgICBjb250ZXh0LndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAgICAgY29udGV4dC5tb3pCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgIGNvbnRleHQubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgIGNvbnRleHQub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAgICAgY29udGV4dC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IDE7XG4gICAgcmV0dXJuICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSAvIGJhY2tpbmdTdG9yZTtcbn07XG5cbi8vIOagueaNruWxj+W5leWDj+e0oOavlO+8jOi9rOWMlmNhbnZhc+e7mOWItuWPguaVsFxuZXhwb3J0IGNvbnN0IHNjYWxlT3B0aW9ucyA9IGZ1bmN0aW9uIChyYXRpbzogbnVtYmVyLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgbGV0IG5ld09wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcblxuICAgIGNvbnN0IHNjYWxlS2V5czogc3RyaW5nW10gPSBbXCJzaXplXCIsICdvZmZzZXRYJywgJ29mZnNldFknLCAnbWFsX29mZnNldCddO1xuICAgIGlmICghT2JqZWN0LmVudHJpZXMpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMgPSBmdW5jdGlvbiAob2JqOiBhbnkpIHtcbiAgICAgICAgICAgIGNvbnN0IG93blByb3BzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgICAgIGxldCBpID0gb3duUHJvcHMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgcmVzQXJyYXkgPSBuZXcgQXJyYXkoaSk7IC8vIHByZWFsbG9jYXRlIHRoZSBBcnJheVxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIHJlc0FycmF5W2ldID0gW293blByb3BzW2ldLCBvYmpbb3duUHJvcHNbaV1dXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNBcnJheTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgT2JqZWN0LmVudHJpZXMobmV3T3B0aW9ucykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGlmIChzY2FsZUtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgbmV3T3B0aW9uc1trZXldID0gdmFsdWUgKiByYXRpbztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdPcHRpb25zO1xufTtcbmV4cG9ydCBpbnRlcmZhY2UgSVJlbmRlckJhc2VJbWFnZVByb3BzIHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyXG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgZm9udFNpemU6IG51bWJlcjtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHJvdGF0ZTogbnVtYmVyO1xuICAgIGZvbnQ6IHN0cmluZztcbiAgICB0cmFuc3BhcmVuY3k6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY29uc3QgY3JlYXRlSW1hZ2VCYXNlID0gKHByb3BzOiBJUmVuZGVyQmFzZUltYWdlUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRleHQsIGNvbG9yLCBmb250U2l6ZSwgeCwgeSwgcm90YXRlLCBmb250LCB0cmFuc3BhcmVuY3kgfSA9IHByb3BzO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChjdHgpIHtcbiAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250U2l6ZX1weCAke2ZvbnR9YDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0cmFuc3BhcmVuY3k7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGN0eC5yb3RhdGUoLXJvdGF0ZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgeCwgeSk7XG4gICAgICAgIHJldHVybiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IHJlbmRlckRvdWJsZVdhdGVybWFyaywgSVJlbmRlckRvdWJsZVdhdGVybWFya1Byb3BzLCB9IGZyb20gJy4vcmVuZGVyRG91YmxlV2F0ZXJtYXJrJztcbmltcG9ydCB7IHJlbmRlclNpbmdsZVdhdGVybWFyaywgSVJlbmRlclNpbmdsZVdhdGVybWFya1Byb3BzIH0gZnJvbSAnLi9yZW5kZXJTaW5nbGVXYXRlcm1hcmsnO1xuZXhwb3J0IHsgcmVuZGVyRG91YmxlV2F0ZXJtYXJrLCBJUmVuZGVyRG91YmxlV2F0ZXJtYXJrUHJvcHMsIHJlbmRlclNpbmdsZVdhdGVybWFyaywgSVJlbmRlclNpbmdsZVdhdGVybWFya1Byb3BzIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9