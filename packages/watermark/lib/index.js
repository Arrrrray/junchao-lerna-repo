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
    var _a = props.className, className = _a === void 0 ? 'body' : _a, _b = props.text, text = _b === void 0 ? '水印文案' : _b, _c = props.color, color = _c === void 0 ? '#222' : _c, _d = props.size, size = _d === void 0 ? 13 : _d, _e = props.rotate, rotate = _e === void 0 ? 10 : _e, _f = props.font, font = _f === void 0 ? 'sans-serif' : _f, _g = props.transparency, transparency = _g === void 0 ? 0.5 : _g, _h = props.zIndex, zIndex = _h === void 0 ? 1000 : _h;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var ratio = getPixelRatio(ctx);
    var newOptions = scaleOptions(ratio, { size: size, rotate: rotate, font: font, transparency: transparency, zIndex: zIndex });
    var fontSize = newOptions.size, offsetX = newOptions.offsetX, offsetY = newOptions.offsetY, mal_offset = newOptions.mal_offset, alpha = newOptions.transparency, zIndexNum = newOptions.zIndex;
    if (ctx) {
        var textWidth = ctx.measureText(text).width;
        var currentWidth = textWidth * ratio;
        var currentHeight = textWidth * ratio;
        canvas.width = currentWidth;
        canvas.height = currentHeight;
        ctx.font = "".concat(fontSize, "px ").concat(font);
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.translate(currentWidth / 2, currentHeight / 2);
        ctx.rotate(-rotate * Math.PI / 180);
        return canvas.toDataURL('image/png');
    }
};
var renderWatermark = function (props) {
    var _a = props.className, className = _a === void 0 ? 'body' : _a, _b = props.text, text = _b === void 0 ? '水印文案' : _b, _c = props.color, color = _c === void 0 ? '#222' : _c, _d = props.size, size = _d === void 0 ? 13 : _d, _e = props.rotate, rotate = _e === void 0 ? 10 : _e, _f = props.font, font = _f === void 0 ? 'sans-serif' : _f, _g = props.transparency, transparency = _g === void 0 ? 0.5 : _g, _h = props.zIndex, zIndex = _h === void 0 ? 1000 : _h;
    var top = 0;
    var left = 0;
    var dataUrl = createImageBase(props);
    var defaultStyle = document.createElement('style');
    defaultStyle.innerHTML = "".concat(className, " :after {\n        content: '';\n      display: block;\n      width: 100%;\n      height: 100%;\n      ").concat(top || top === 0 ? "top: ".concat(top, "px;") : '', "\n      ").concat(left || left === 0 ? "left: ".concat(left, "px;") : '', "\n      background-repeat: repeat;\n      pointer-events: none;\n    }");
    document.head.appendChild(defaultStyle);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0QkEsaUdBQW9EO0FBQzNDLGlHQURBLGlDQUFlLFFBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXRlcm1hcmsvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3dhdGVybWFyay8uL3NyYy9yZW5kZXJXYXRlcm1hcmsudHMiLCJ3ZWJwYWNrOi8vd2F0ZXJtYXJrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dhdGVybWFyay8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3YXRlcm1hcmtcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wid2F0ZXJtYXJrXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZXhwb3J0IGludGVyZmFjZSBXYXRlcm1hcmtQcm9wcyB7XG4gICAgLyoqXG4gICAgICog6KKr5oyC6L2955qE5YWD57Sg57G75ZG977yM6buY6K6kYm9keVxuICAgICAqL1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiDmsLTljbDmlofmoYhcbiAgICAgKi9cbiAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIOawtOWNsOaWh+ahiOminOiJsiwgIzIyMlxuICAgICAqL1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICog5a2X5Y+3XG4gICovXG4gICAgc2l6ZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgICog5peL6L2s6KeS5bqmXG4gICAgKi9cbiAgICByb3RhdGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICAqIOWtl+S9k+agvOW8j1xuICAgICovXG4gICAgZm9udD86IHN0cmluZztcbiAgICAvKipcbiAgICAgICog6YCP5piO5bqmXG4gICAgKi9cbiAgICB0cmFuc3BhcmVuY3k/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICAqIOawtOWNsOWxgue6p1xuICAgICovXG4gICAgekluZGV4PzogbnVtYmVyO1xuXG59XG5cbi8vIOiOt+WPluWxj+W5leWDj+e0oOavlFxuY29uc3QgZ2V0UGl4ZWxSYXRpbyA9IGZ1bmN0aW9uIChjb250ZXh0OiBhbnkpIHtcbiAgICBjb25zdCBiYWNraW5nU3RvcmUgPSBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAgICAgY29udGV4dC53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgIGNvbnRleHQubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgICAgICBjb250ZXh0Lm1zQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgICAgICBjb250ZXh0Lm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgIGNvbnRleHQuYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCAxO1xuICAgIHJldHVybiAod2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSkgLyBiYWNraW5nU3RvcmU7XG59O1xuXG4vLyDmoLnmja7lsY/luZXlg4/ntKDmr5TvvIzovazljJZjYW52YXPnu5jliLblj4LmlbBcbmNvbnN0IHNjYWxlT3B0aW9ucyA9IGZ1bmN0aW9uIChyYXRpbzogbnVtYmVyLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgbGV0IG5ld09wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcblxuICAgIGNvbnN0IHNjYWxlS2V5czogc3RyaW5nW10gPSBbXCJzaXplXCIsICdvZmZzZXRYJywgJ29mZnNldFknLCAnbWFsX29mZnNldCddO1xuICAgIGlmICghT2JqZWN0LmVudHJpZXMpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMgPSBmdW5jdGlvbiAob2JqOiBhbnkpIHtcbiAgICAgICAgICAgIGNvbnN0IG93blByb3BzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgICAgIGxldCBpID0gb3duUHJvcHMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgcmVzQXJyYXkgPSBuZXcgQXJyYXkoaSk7IC8vIHByZWFsbG9jYXRlIHRoZSBBcnJheVxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIHJlc0FycmF5W2ldID0gW293blByb3BzW2ldLCBvYmpbb3duUHJvcHNbaV1dXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNBcnJheTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgT2JqZWN0LmVudHJpZXMobmV3T3B0aW9ucykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGlmIChzY2FsZUtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgbmV3T3B0aW9uc1trZXldID0gdmFsdWUgKiByYXRpbztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdPcHRpb25zO1xufTtcblxuY29uc3QgY3JlYXRlSW1hZ2VCYXNlID0gKHByb3BzOiBXYXRlcm1hcmtQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lID0gJ2JvZHknLCB0ZXh0ID0gJ+awtOWNsOaWh+ahiCcsIGNvbG9yID0gJyMyMjInLCBzaXplID0gMTMsIHJvdGF0ZSA9IDEwLCBmb250ID0gJ3NhbnMtc2VyaWYnLCB0cmFuc3BhcmVuY3kgPSAwLjUsIHpJbmRleCA9IDEwMDAgfSA9IHByb3BzO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnN0IHJhdGlvID0gZ2V0UGl4ZWxSYXRpbyhjdHgpO1xuICAgIGNvbnN0IG5ld09wdGlvbnMgPSBzY2FsZU9wdGlvbnMocmF0aW8sIHsgc2l6ZSwgcm90YXRlLCBmb250LCB0cmFuc3BhcmVuY3ksIHpJbmRleCB9KTtcbiAgICBjb25zdCB7IHNpemU6IGZvbnRTaXplLCBvZmZzZXRYLCBvZmZzZXRZLCBtYWxfb2Zmc2V0LCB0cmFuc3BhcmVuY3k6IGFscGhhLCB6SW5kZXg6IHpJbmRleE51bSB9ID0gbmV3T3B0aW9ucztcbiAgICBpZiAoY3R4KSB7XG5cbiAgICAgICAgY29uc3QgdGV4dFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xuICAgICAgICBjb25zdCBjdXJyZW50V2lkdGggPSB0ZXh0V2lkdGggKiByYXRpbztcbiAgICAgICAgY29uc3QgY3VycmVudEhlaWdodCA9IHRleHRXaWR0aCAqIHJhdGlvO1xuICAgICAgICBjYW52YXMud2lkdGggPSBjdXJyZW50V2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjdXJyZW50SGVpZ2h0O1xuICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRTaXplfXB4ICR7Zm9udH1gO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoY3VycmVudFdpZHRoIC8gMiwgY3VycmVudEhlaWdodCAvIDIpO1xuICAgICAgICBjdHgucm90YXRlKC1yb3RhdGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlcldhdGVybWFyayA9IChwcm9wczogV2F0ZXJtYXJrUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSA9ICdib2R5JywgdGV4dCA9ICfmsLTljbDmlofmoYgnLCBjb2xvciA9ICcjMjIyJywgc2l6ZSA9IDEzLCByb3RhdGUgPSAxMCwgZm9udCA9ICdzYW5zLXNlcmlmJywgdHJhbnNwYXJlbmN5ID0gMC41LCB6SW5kZXggPSAxMDAwIH0gPSBwcm9wcztcbiAgICBjb25zdCB0b3AgPSAwO1xuICAgIGNvbnN0IGxlZnQgPSAwO1xuICAgIGNvbnN0IGRhdGFVcmwgPSBjcmVhdGVJbWFnZUJhc2UocHJvcHMpO1xuICAgIGxldCBkZWZhdWx0U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGRlZmF1bHRTdHlsZS5pbm5lckhUTUwgPSBgJHtjbGFzc05hbWV9IDphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICR7dG9wIHx8IHRvcCA9PT0gMCA/IGB0b3A6ICR7dG9wfXB4O2AgOiAnJ31cbiAgICAgICR7bGVmdCB8fCBsZWZ0ID09PSAwID8gYGxlZnQ6ICR7bGVmdH1weDtgIDogJyd9XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfWA7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkZWZhdWx0U3R5bGUpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IHJlbmRlcldhdGVybWFyayB9IGZyb20gJy4vcmVuZGVyV2F0ZXJtYXJrJztcbmV4cG9ydCB7IHJlbmRlcldhdGVybWFyayB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==