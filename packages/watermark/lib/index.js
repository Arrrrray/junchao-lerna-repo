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

/***/ "./src/renderWatermark.ts":
/*!********************************!*\
  !*** ./src/renderWatermark.ts ***!
  \********************************/
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
exports.renderWatermark = void 0;
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
var createImageBase = function (props) {
    var width = props.width, height = props.height, text = props.text, color = props.color, fontSize = props.fontSize, x = props.x, y = props.y, rotate = props.rotate, font = props.font, alpha = props.alpha;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.font = "".concat(fontSize, "px ").concat(font);
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
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
var renderWatermark = function (props) {
    var _a = props.className, className = _a === void 0 ? 'body' : _a, _b = props.text, text = _b === void 0 ? '水印文案' : _b, _c = props.color, color = _c === void 0 ? '#222' : _c, _d = props.size, size = _d === void 0 ? 13 : _d, _e = props.rotate, rotate = _e === void 0 ? 10 : _e, _f = props.offsetX, offsetX = _f === void 0 ? 15 : _f, _g = props.offsetY, offsetY = _g === void 0 ? 30 : _g, _h = props.font, font = _h === void 0 ? 'sans-serif' : _h, _j = props.transparency, transparency = _j === void 0 ? 0.5 : _j, _k = props.zIndex, zIndex = _k === void 0 ? 1000 : _k;
    // 创建一个canvas，获取文案的宽度，计算出需要设置的canvas的宽高
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    // 获取屏幕像素比
    var ratio = getPixelRatio(ctx);
    var newOptions = scaleOptions(ratio, { size: size, rotate: rotate, font: font, offsetX: offsetX, offsetY: offsetY, transparency: transparency, zIndex: zIndex });
    var fontSize = newOptions.size, x = newOptions.offsetX, y = newOptions.offsetY, mal_offset = newOptions.mal_offset, alpha = newOptions.transparency, zIndexNum = newOptions.zIndex;
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
        var dataUrl1 = createImageBase({
            width: currentWidth,
            height: currentHeight * 2,
            text: text,
            color: color,
            fontSize: fontSize,
            x: -(Math.ceil(currentHeight * Math.sin(rotate * Math.PI / 180)) - fontSize),
            y: Math.ceil(currentHeight * Math.cos(rotate * Math.PI / 180)),
            rotate: rotate,
            font: font,
            alpha: alpha,
        });
        var dataUrl2 = createImageBase({
            width: currentWidth,
            height: currentHeight * 2,
            text: text,
            color: color,
            fontSize: fontSize,
            x: -(Math.ceil(currentHeight * Math.sin(rotate * Math.PI / 180)) - fontSize) + x,
            y: Math.ceil(currentHeight * Math.cos(rotate * Math.PI / 180)) + y,
            rotate: rotate,
            font: font,
            alpha: alpha,
        });
        var defaultStyle = document.createElement('style');
        defaultStyle.innerHTML = "".concat(className, ":after {\n      content: '';\n      display: block;\n      width: 100%;\n      height: 100%;\n      ").concat(top_1 || top_1 === 0 ? "top: ".concat(top_1, "px;") : '', "\n      ").concat(left || left === 0 ? "left: ".concat(left, "px;") : '', "\n      background-repeat: repeat;\n      pointer-events: none;\n    }");
        var styleEl = document.createElement('style');
        styleEl.innerHTML = "".concat(className, ":after\n    {\n      ").concat(position ? "position: ".concat(position) : '', ";\n      ").concat(zIndex ? "z-index:".concat(zIndex) : '', ";\n      background-image: url(").concat(dataUrl1, "), url(").concat(dataUrl2, ");\n    }");
        document.head.appendChild(defaultStyle);
        document.head.appendChild(styleEl);
    }
};
exports.renderWatermark = renderWatermark;


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
exports.renderWatermark = void 0;
var renderWatermark_1 = __webpack_require__(/*! ./renderWatermark */ "./src/renderWatermark.ts");
Object.defineProperty(exports, "renderWatermark", ({ enumerable: true, get: function () { return renderWatermark_1.renderWatermark; } }));

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUN0QkEsaUdBQW9FO0FBQzNELGlHQURBLGlDQUFlLFFBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXRlcm1hcmsvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3dhdGVybWFyay8uL3NyYy9yZW5kZXJXYXRlcm1hcmsudHMiLCJ3ZWJwYWNrOi8vd2F0ZXJtYXJrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dhdGVybWFyay8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3YXRlcm1hcmtcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wid2F0ZXJtYXJrXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZXhwb3J0IGludGVyZmFjZSBXYXRlcm1hcmtQcm9wcyB7XG4gICAgLyoqXG4gICAgICog6KKr5oyC6L2955qE5YWD57Sg57G75ZG977yM6buY6K6kYm9keVxuICAgICAqL1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiDmsLTljbDmlofmoYhcbiAgICAgKi9cbiAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIOawtOWNsOaWh+ahiOminOiJsiwgIzIyMlxuICAgICAqL1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICog5a2X5Y+3XG4gICovXG4gICAgc2l6ZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgICog5peL6L2s6KeS5bqmIDDvvZ43NVxuICAgICovXG4gICAgcm90YXRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAgKiDlrZfkvZPmoLzlvI9cbiAgICAqL1xuICAgIGZvbnQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICAqIOmAj+aYjuW6plxuICAgICovXG4gICAgdHJhbnNwYXJlbmN5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAgKiB45pa55ZCR5YGP56e7XG4gICAgKi9cbiAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAgKiB55pa55ZCR5YGP56e7XG4gICAgKi9cbiAgICBvZmZzZXRZPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAgKiDmsLTljbDlsYLnuqdcbiAgICAqL1xuICAgIHpJbmRleD86IG51bWJlcjtcblxufVxuZXhwb3J0IGludGVyZmFjZSBJUmVuZGVyQmFzZUltYWdlUHJvcHMge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXJcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBmb250U2l6ZTogbnVtYmVyO1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgcm90YXRlOiBudW1iZXI7XG4gICAgZm9udDogc3RyaW5nO1xuICAgIGFscGhhOiBudW1iZXI7XG59XG5cbi8vIOiOt+WPluWxj+W5leWDj+e0oOavlFxuY29uc3QgZ2V0UGl4ZWxSYXRpbyA9IGZ1bmN0aW9uIChjb250ZXh0OiBhbnkpIHtcbiAgICBjb25zdCBiYWNraW5nU3RvcmUgPSBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAgICAgY29udGV4dC53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgIGNvbnRleHQubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgICAgICBjb250ZXh0Lm1zQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgICAgICBjb250ZXh0Lm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgIGNvbnRleHQuYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCAxO1xuICAgIHJldHVybiAod2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSkgLyBiYWNraW5nU3RvcmU7XG59O1xuXG4vLyDmoLnmja7lsY/luZXlg4/ntKDmr5TvvIzovazljJZjYW52YXPnu5jliLblj4LmlbBcbmNvbnN0IHNjYWxlT3B0aW9ucyA9IGZ1bmN0aW9uIChyYXRpbzogbnVtYmVyLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgbGV0IG5ld09wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcblxuICAgIGNvbnN0IHNjYWxlS2V5czogc3RyaW5nW10gPSBbXCJzaXplXCIsICdvZmZzZXRYJywgJ29mZnNldFknLCAnbWFsX29mZnNldCddO1xuICAgIGlmICghT2JqZWN0LmVudHJpZXMpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMgPSBmdW5jdGlvbiAob2JqOiBhbnkpIHtcbiAgICAgICAgICAgIGNvbnN0IG93blByb3BzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgICAgIGxldCBpID0gb3duUHJvcHMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgcmVzQXJyYXkgPSBuZXcgQXJyYXkoaSk7IC8vIHByZWFsbG9jYXRlIHRoZSBBcnJheVxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIHJlc0FycmF5W2ldID0gW293blByb3BzW2ldLCBvYmpbb3duUHJvcHNbaV1dXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNBcnJheTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgT2JqZWN0LmVudHJpZXMobmV3T3B0aW9ucykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGlmIChzY2FsZUtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgbmV3T3B0aW9uc1trZXldID0gdmFsdWUgKiByYXRpbztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdPcHRpb25zO1xufTtcblxuY29uc3QgY3JlYXRlSW1hZ2VCYXNlID0gKHByb3BzOiBJUmVuZGVyQmFzZUltYWdlUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRleHQsIGNvbG9yLCBmb250U2l6ZSwgeCwgeSwgcm90YXRlLCBmb250LCBhbHBoYSB9ID0gcHJvcHM7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKGN0eCkge1xuICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRTaXplfXB4ICR7Zm9udH1gO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjdHgucm90YXRlKC1yb3RhdGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgICAgICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyV2F0ZXJtYXJrID0gKHByb3BzOiBXYXRlcm1hcmtQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lID0gJ2JvZHknLCB0ZXh0ID0gJ+awtOWNsOaWh+ahiCcsIGNvbG9yID0gJyMyMjInLCBzaXplID0gMTMsIHJvdGF0ZSA9IDEwLCBvZmZzZXRYID0gMTUsIG9mZnNldFkgPSAzMCwgZm9udCA9ICdzYW5zLXNlcmlmJywgdHJhbnNwYXJlbmN5ID0gMC41LCB6SW5kZXggPSAxMDAwIH0gPSBwcm9wcztcbiAgICAvLyDliJvlu7rkuIDkuKpjYW52YXPvvIzojrflj5bmlofmoYjnmoTlrr3luqbvvIzorqHnrpflh7rpnIDopoHorr7nva7nmoRjYW52YXPnmoTlrr3pq5hcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAvLyDojrflj5blsY/luZXlg4/ntKDmr5RcbiAgICBjb25zdCByYXRpbyA9IGdldFBpeGVsUmF0aW8oY3R4KTtcbiAgICBjb25zdCBuZXdPcHRpb25zID0gc2NhbGVPcHRpb25zKHJhdGlvLCB7IHNpemUsIHJvdGF0ZSwgZm9udCwgb2Zmc2V0WCwgb2Zmc2V0WSwgdHJhbnNwYXJlbmN5LCB6SW5kZXggfSk7XG4gICAgY29uc3QgeyBzaXplOiBmb250U2l6ZSwgb2Zmc2V0WDogeCwgb2Zmc2V0WTogeSwgbWFsX29mZnNldCwgdHJhbnNwYXJlbmN5OiBhbHBoYSwgekluZGV4OiB6SW5kZXhOdW0gfSA9IG5ld09wdGlvbnM7XG4gICAgaWYgKGN0eCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbmV3T3B0aW9uczogJywgbmV3T3B0aW9ucylcbiAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250U2l6ZX1weCAke2ZvbnR9YDtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgLy8g6I635Y+W5paH5qGI5a696auYXG4gICAgICAgIGNvbnN0IHRleHRXaWR0aCA9IE1hdGguY2VpbChjdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGgpO1xuXG4gICAgICAgIC8vIOiuoeeul+WHuumcgOimgeiuvue9rueahGNhbnZhc+eahOWuvemrmO+8jOWKoGZvbnRTaXpl5L2c5Li655WZ55m9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXaWR0aCA9IE1hdGguY2VpbCh0ZXh0V2lkdGggKiBNYXRoLmNvcyhyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKSkgLyByYXRpbyArIGZvbnRTaXplO1xuICAgICAgICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gTWF0aC5jZWlsKHRleHRXaWR0aCAqIE1hdGguc2luKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApKSAvIHJhdGlvICsgZm9udFNpemU7XG4gICAgICAgIGNvbnN0IHRvcCA9IDA7XG4gICAgICAgIGNvbnN0IGxlZnQgPSAwO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIGNvbnN0IGRhdGFVcmwxID0gY3JlYXRlSW1hZ2VCYXNlKHtcbiAgICAgICAgICAgIHdpZHRoOiBjdXJyZW50V2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGN1cnJlbnRIZWlnaHQgKiAyLFxuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgZm9udFNpemUsXG4gICAgICAgICAgICB4OiAtKE1hdGguY2VpbChjdXJyZW50SGVpZ2h0ICogTWF0aC5zaW4ocm90YXRlICogTWF0aC5QSSAvIDE4MCkpIC0gZm9udFNpemUpLFxuICAgICAgICAgICAgeTogTWF0aC5jZWlsKGN1cnJlbnRIZWlnaHQgKiBNYXRoLmNvcyhyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKSksXG4gICAgICAgICAgICByb3RhdGUsXG4gICAgICAgICAgICBmb250LFxuICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkYXRhVXJsMiA9IGNyZWF0ZUltYWdlQmFzZSh7XG4gICAgICAgICAgICB3aWR0aDogY3VycmVudFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBjdXJyZW50SGVpZ2h0ICogMixcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGZvbnRTaXplLFxuICAgICAgICAgICAgeDogLShNYXRoLmNlaWwoY3VycmVudEhlaWdodCAqIE1hdGguc2luKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApKSAtIGZvbnRTaXplKSArIHgsXG4gICAgICAgICAgICB5OiBNYXRoLmNlaWwoY3VycmVudEhlaWdodCAqIE1hdGguY29zKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApKSArIHksXG4gICAgICAgICAgICByb3RhdGUsXG4gICAgICAgICAgICBmb250LFxuICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGVmYXVsdFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgZGVmYXVsdFN0eWxlLmlubmVySFRNTCA9IGAke2NsYXNzTmFtZX06YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgJHt0b3AgfHwgdG9wID09PSAwID8gYHRvcDogJHt0b3B9cHg7YCA6ICcnfVxuICAgICAgJHtsZWZ0IHx8IGxlZnQgPT09IDAgPyBgbGVmdDogJHtsZWZ0fXB4O2AgOiAnJ31cbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9YDtcblxuICAgICAgICBsZXQgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlRWwuaW5uZXJIVE1MID0gYCR7Y2xhc3NOYW1lfTphZnRlclxuICAgIHtcbiAgICAgICR7cG9zaXRpb24gPyBgcG9zaXRpb246ICR7cG9zaXRpb259YCA6ICcnfTtcbiAgICAgICR7ekluZGV4ID8gYHotaW5kZXg6JHt6SW5kZXh9YCA6ICcnfTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2RhdGFVcmwxfSksIHVybCgke2RhdGFVcmwyfSk7XG4gICAgfWA7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZGVmYXVsdFN0eWxlKTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgcmVuZGVyV2F0ZXJtYXJrLCBXYXRlcm1hcmtQcm9wcyB9IGZyb20gJy4vcmVuZGVyV2F0ZXJtYXJrJztcbmV4cG9ydCB7IHJlbmRlcldhdGVybWFyaywgV2F0ZXJtYXJrUHJvcHMgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=