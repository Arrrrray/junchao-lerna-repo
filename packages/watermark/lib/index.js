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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7QUNWQSw2RUFBNEU7QUE2Q3JFLElBQU0scUJBQXFCLEdBQUcsVUFBQyxLQUFrQztJQUM5RCxTQUFrSyxLQUFLLFVBQXJKLEVBQWxCLFNBQVMsbUJBQUcsTUFBTSxPQUFFLEtBQThJLEtBQUssS0FBdEksRUFBYixJQUFJLG1CQUFHLE1BQU0sT0FBRSxLQUErSCxLQUFLLE1BQXRILEVBQWQsS0FBSyxtQkFBRyxNQUFNLE9BQUUsS0FBK0csS0FBSyxLQUEzRyxFQUFULElBQUksbUJBQUcsRUFBRSxPQUFFLEtBQW9HLEtBQUssT0FBOUYsRUFBWCxNQUFNLG1CQUFHLEVBQUUsT0FBRSxLQUF1RixLQUFLLFFBQWhGLEVBQVosT0FBTyxtQkFBRyxFQUFFLE9BQUUsS0FBeUUsS0FBSyxRQUFsRSxFQUFaLE9BQU8sbUJBQUcsRUFBRSxPQUFFLEtBQTJELEtBQUssS0FBN0MsRUFBbkIsSUFBSSxtQkFBRyxZQUFZLE9BQUUsS0FBc0MsS0FBSyxhQUF6QixFQUFsQixZQUFZLG1CQUFHLEdBQUcsT0FBRSxLQUFrQixLQUFLLE9BQVYsRUFBYixNQUFNLG1CQUFHLElBQUksTUFBVztJQUNoTCx1Q0FBdUM7SUFDdkMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLFVBQVU7SUFDVixJQUFNLEtBQUssR0FBRyx5QkFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLElBQU0sVUFBVSxHQUFHLHdCQUFZLEVBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxRQUFFLE9BQU8sV0FBRSxPQUFPLFlBQUcsQ0FBQyxDQUFDO0lBQzVELElBQU0sUUFBUSxHQUEwQyxVQUFVLEtBQXBELEVBQVcsQ0FBQyxHQUE4QixVQUFVLFFBQXhDLEVBQVcsQ0FBQyxHQUFrQixVQUFVLFFBQTVCLEVBQUUsVUFBVSxHQUFNLFVBQVUsV0FBaEIsQ0FBaUI7SUFDM0UsSUFBSSxHQUFHLEVBQUU7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUM7UUFDdkMsR0FBRyxDQUFDLElBQUksR0FBRyxVQUFHLFFBQVEsZ0JBQU0sSUFBSSxDQUFFLENBQUM7UUFDbkMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsU0FBUztRQUNULElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6RCxrQ0FBa0M7UUFDbEMsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDaEcsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDakcsSUFBTSxLQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzVCLElBQU0sUUFBUSxHQUFHLDJCQUFlLEVBQUM7WUFDL0IsS0FBSyxFQUFFLFlBQVk7WUFDbkIsTUFBTSxFQUFFLGFBQWEsR0FBRyxDQUFDO1lBQ3pCLElBQUk7WUFDSixLQUFLO1lBQ0wsUUFBUTtZQUNSLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztZQUM1RSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUM5RCxNQUFNO1lBQ04sSUFBSTtZQUNKLFlBQVk7U0FDYixDQUFDLENBQUM7UUFDSCxJQUFNLFFBQVEsR0FBRywyQkFBZSxFQUFDO1lBQy9CLEtBQUssRUFBRSxZQUFZO1lBQ25CLE1BQU0sRUFBRSxhQUFhLEdBQUcsQ0FBQztZQUN6QixJQUFJO1lBQ0osS0FBSztZQUNMLFFBQVE7WUFDUixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ2hGLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNsRSxNQUFNO1lBQ04sSUFBSTtZQUNKLFlBQVk7U0FDYixDQUFDLENBQUM7UUFDSCxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELFlBQVksQ0FBQyxTQUFTLEdBQUcsVUFBRyxTQUFTLGlIQUtqQyxLQUFHLElBQUksS0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBUSxLQUFHLFFBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxxQkFDeEMsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFTLElBQUksUUFBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLDJFQUc5QyxDQUFDO1FBRUgsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQUcsU0FBUyxrQ0FFNUIsUUFBUSxDQUFDLENBQUMsQ0FBQyxvQkFBYSxRQUFRLENBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxzQkFDdkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxrQkFBVyxNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSw0Q0FDWCxRQUFRLG9CQUFVLFFBQVEsK0NBRWxELENBQUM7UUFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNwQztBQUNILENBQUM7QUFyRVksNkJBQXFCLHlCQXFFakM7Ozs7Ozs7Ozs7Ozs7O0FDbEhELDZFQUE0RTtBQXFDckUsSUFBTSxxQkFBcUIsR0FBRyxVQUFDLEtBQWtDO0lBQzlELFNBQXNJLEtBQUssVUFBekgsRUFBbEIsU0FBUyxtQkFBRyxNQUFNLE9BQUUsS0FBa0gsS0FBSyxLQUExRyxFQUFiLElBQUksbUJBQUcsTUFBTSxPQUFFLEtBQW1HLEtBQUssTUFBMUYsRUFBZCxLQUFLLG1CQUFHLE1BQU0sT0FBRSxLQUFtRixLQUFLLEtBQS9FLEVBQVQsSUFBSSxtQkFBRyxFQUFFLE9BQUUsS0FBd0UsS0FBSyxPQUFsRSxFQUFYLE1BQU0sbUJBQUcsRUFBRSxPQUFFLEtBQTJELEtBQUssS0FBN0MsRUFBbkIsSUFBSSxtQkFBRyxZQUFZLE9BQUUsS0FBc0MsS0FBSyxhQUF6QixFQUFsQixZQUFZLG1CQUFHLEdBQUcsT0FBRSxLQUFrQixLQUFLLE9BQVYsRUFBYixNQUFNLG1CQUFHLElBQUksTUFBVztJQUNwSix1Q0FBdUM7SUFDdkMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLFVBQVU7SUFDVixJQUFNLEtBQUssR0FBRyx5QkFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLElBQU0sVUFBVSxHQUFHLHdCQUFZLEVBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxRQUFFLElBQUksUUFBRSxDQUFDLENBQUM7SUFDL0MsSUFBTSxRQUFRLEdBQTBDLFVBQVUsS0FBcEQsRUFBVyxDQUFDLEdBQThCLFVBQVUsUUFBeEMsRUFBVyxDQUFDLEdBQWtCLFVBQVUsUUFBNUIsRUFBRSxVQUFVLEdBQU0sVUFBVSxXQUFoQixDQUFpQjtJQUMzRSxJQUFJLEdBQUcsRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQztRQUN2QyxHQUFHLENBQUMsSUFBSSxHQUFHLFVBQUcsUUFBUSxnQkFBTSxJQUFJLENBQUUsQ0FBQztRQUNuQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixTQUFTO1FBQ1QsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpELGtDQUFrQztRQUNsQyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUNoRyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUNqRyxJQUFNLEtBQUcsR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFNLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZixJQUFNLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDNUIsSUFBTSxRQUFRLEdBQUcsMkJBQWUsRUFBQztZQUMvQixLQUFLLEVBQUUsWUFBWTtZQUNuQixNQUFNLEVBQUUsYUFBYSxHQUFHLENBQUM7WUFDekIsSUFBSTtZQUNKLEtBQUs7WUFDTCxRQUFRO1lBQ1IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO1lBQzVFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzlELE1BQU07WUFDTixJQUFJO1lBQ0osWUFBWTtTQUNiLENBQUMsQ0FBQztRQUNILElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsWUFBWSxDQUFDLFNBQVMsR0FBRyxVQUFHLFNBQVMsaUhBS2pDLEtBQUcsSUFBSSxLQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFRLEtBQUcsUUFBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLHFCQUN4QyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQVMsSUFBSSxRQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsb0ZBRzVDLFFBQVEsQ0FBQyxDQUFDLENBQUMsb0JBQWEsUUFBUSxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsc0JBQ3ZDLE1BQU0sQ0FBQyxDQUFDLENBQUMsa0JBQVcsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsNENBQ1gsUUFBUSwrQ0FFaEMsQ0FBQztRQUVILFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3pDO0FBQ0gsQ0FBQztBQXBEWSw2QkFBcUIseUJBb0RqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGRCxVQUFVO0FBQ0gsSUFBTSxhQUFhLEdBQUcsVUFBVSxPQUFZO0lBQy9DLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0I7UUFDL0MsT0FBTyxDQUFDLDRCQUE0QjtRQUNwQyxPQUFPLENBQUMseUJBQXlCO1FBQ2pDLE9BQU8sQ0FBQyx3QkFBd0I7UUFDaEMsT0FBTyxDQUFDLHVCQUF1QjtRQUMvQixPQUFPLENBQUMsc0JBQXNCLElBQUksQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDO0FBQ3pELENBQUMsQ0FBQztBQVJXLHFCQUFhLGlCQVF4QjtBQUVGLHVCQUF1QjtBQUNoQixJQUFNLFlBQVksR0FBRyxVQUFVLEtBQWEsRUFBRSxPQUE0QjtJQUM3RSxJQUFJLFVBQVUsZ0JBQVEsT0FBTyxDQUFFLENBQUM7SUFFaEMsSUFBTSxTQUFTLEdBQWEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN6RSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUNqQixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBUTtZQUMvQixJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDeEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7WUFDdkQsT0FBTyxDQUFDLEVBQUUsRUFBRTtnQkFDUixRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakQ7WUFDRCxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDLENBQUM7S0FDTDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBWTtZQUFYLEdBQUcsVUFBRSxLQUFLO1FBQzNDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBckJXLG9CQUFZLGdCQXFCdkI7QUFnQkssSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUE0QjtJQUNoRCxTQUFLLEdBQXNFLEtBQUssTUFBM0UsRUFBRSxNQUFNLEdBQThELEtBQUssT0FBbkUsRUFBRSxJQUFJLEdBQXdELEtBQUssS0FBN0QsRUFBRSxLQUFLLEdBQWlELEtBQUssTUFBdEQsRUFBRSxRQUFRLEdBQXVDLEtBQUssU0FBNUMsRUFBRSxDQUFDLEdBQW9DLEtBQUssRUFBekMsRUFBRSxDQUFDLEdBQWlDLEtBQUssRUFBdEMsRUFBRSxNQUFNLEdBQXlCLEtBQUssT0FBOUIsRUFBRSxJQUFJLEdBQW1CLEtBQUssS0FBeEIsRUFBRSxZQUFZLEdBQUssS0FBSyxhQUFWLENBQVc7SUFDekYsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLElBQUksR0FBRyxFQUFFO1FBQ0wsR0FBRyxDQUFDLElBQUksR0FBRyxVQUFHLFFBQVEsZ0JBQU0sSUFBSSxDQUFFLENBQUM7UUFDbkMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdEIsR0FBRyxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7UUFDL0IsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDdkIsR0FBRyxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7UUFDNUIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckIsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDeEM7QUFDTCxDQUFDO0FBakJZLHVCQUFlLG1CQWlCM0I7Ozs7Ozs7VUNuRUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7OztBQ3RCQSxtSEFBOEY7QUFHckYsdUdBSEEsNkNBQXFCLFFBR0E7QUFGOUIsbUhBQTZGO0FBRWhDLHVHQUZwRCw2Q0FBcUIsUUFFb0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXRlcm1hcmsvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3dhdGVybWFyay8uL3NyYy9yZW5kZXJEb3VibGVXYXRlcm1hcmsudHMiLCJ3ZWJwYWNrOi8vd2F0ZXJtYXJrLy4vc3JjL3JlbmRlclNpbmdsZVdhdGVybWFyay50cyIsIndlYnBhY2s6Ly93YXRlcm1hcmsvLi9zcmMvdXRpbC9pbmRleC50cyIsIndlYnBhY2s6Ly93YXRlcm1hcmsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2F0ZXJtYXJrLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndhdGVybWFya1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3YXRlcm1hcmtcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJpbXBvcnQgeyBnZXRQaXhlbFJhdGlvLCBzY2FsZU9wdGlvbnMsIGNyZWF0ZUltYWdlQmFzZSB9IGZyb20gJy4vdXRpbC9pbmRleCc7XG5leHBvcnQgaW50ZXJmYWNlIElSZW5kZXJEb3VibGVXYXRlcm1hcmtQcm9wcyB7XG4gIC8qKlxuICAgKiDooqvmjILovb3nmoTlhYPntKDnsbvlkb3vvIzpu5jorqRib2R5XG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmsLTljbDmlofmoYhcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmsLTljbDmlofmoYjpopzoibIsICMyMjJcbiAgICovXG4gIGNvbG9yPzogc3RyaW5nO1xuICAvKipcbiAgKiDlrZflj7dcbiovXG4gIHNpemU/OiBudW1iZXI7XG4gIC8qKlxuICAgICog5peL6L2s6KeS5bqmIDDvvZ43NVxuICAqL1xuICByb3RhdGU/OiBudW1iZXI7XG4gIC8qKlxuICAgICog5a2X5L2T5qC85byPXG4gICovXG4gIGZvbnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgICog6YCP5piO5bqmXG4gICovXG4gIHRyYW5zcGFyZW5jeT86IG51bWJlcjtcbiAgLyoqXG4gICAgKiB45pa55ZCR5YGP56e7XG4gICovXG4gIG9mZnNldFg/OiBudW1iZXI7XG4gIC8qKlxuICAgICogeeaWueWQkeWBj+enu1xuICAqL1xuICBvZmZzZXRZPzogbnVtYmVyO1xuICAvKipcbiAgICAqIOawtOWNsOWxgue6p1xuICAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG5cbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlckRvdWJsZVdhdGVybWFyayA9IChwcm9wczogSVJlbmRlckRvdWJsZVdhdGVybWFya1Byb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lID0gJ2JvZHknLCB0ZXh0ID0gJ+awtOWNsOaWh+ahiCcsIGNvbG9yID0gJyMyMjInLCBzaXplID0gMTMsIHJvdGF0ZSA9IDEwLCBvZmZzZXRYID0gMTUsIG9mZnNldFkgPSAzMCwgZm9udCA9ICdzYW5zLXNlcmlmJywgdHJhbnNwYXJlbmN5ID0gMC41LCB6SW5kZXggPSAxMDAwIH0gPSBwcm9wcztcbiAgLy8g5Yib5bu65LiA5LiqY2FudmFz77yM6I635Y+W5paH5qGI55qE5a695bqm77yM6K6h566X5Ye66ZyA6KaB6K6+572u55qEY2FudmFz55qE5a696auYXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgLy8g6I635Y+W5bGP5bmV5YOP57Sg5q+UXG4gIGNvbnN0IHJhdGlvID0gZ2V0UGl4ZWxSYXRpbyhjdHgpO1xuICBjb25zdCBuZXdPcHRpb25zID0gc2NhbGVPcHRpb25zKHJhdGlvLCB7IHNpemUsIG9mZnNldFgsIG9mZnNldFksIH0pO1xuICBjb25zdCB7IHNpemU6IGZvbnRTaXplLCBvZmZzZXRYOiB4LCBvZmZzZXRZOiB5LCBtYWxfb2Zmc2V0LCB9ID0gbmV3T3B0aW9ucztcbiAgaWYgKGN0eCkge1xuICAgIGNvbnNvbGUubG9nKCduZXdPcHRpb25zOiAnLCBuZXdPcHRpb25zKVxuICAgIGN0eC5mb250ID0gYCR7Zm9udFNpemV9cHggJHtmb250fWA7XG4gICAgY3R4LnRyYW5zbGF0ZSgwLCAwKTtcbiAgICAvLyDojrflj5bmlofmoYjlrr3pq5hcbiAgICBjb25zdCB0ZXh0V2lkdGggPSBNYXRoLmNlaWwoY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoKTtcblxuICAgIC8vIOiuoeeul+WHuumcgOimgeiuvue9rueahGNhbnZhc+eahOWuvemrmO+8jOWKoGZvbnRTaXpl5L2c5Li655WZ55m9XG4gICAgY29uc3QgY3VycmVudFdpZHRoID0gTWF0aC5jZWlsKHRleHRXaWR0aCAqIE1hdGguY29zKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApKSAvIHJhdGlvICsgZm9udFNpemU7XG4gICAgY29uc3QgY3VycmVudEhlaWdodCA9IE1hdGguY2VpbCh0ZXh0V2lkdGggKiBNYXRoLnNpbihyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKSkgLyByYXRpbyArIGZvbnRTaXplO1xuICAgIGNvbnN0IHRvcCA9IDA7XG4gICAgY29uc3QgbGVmdCA9IDA7XG4gICAgY29uc3QgcG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGNvbnN0IGRhdGFVcmwxID0gY3JlYXRlSW1hZ2VCYXNlKHtcbiAgICAgIHdpZHRoOiBjdXJyZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IGN1cnJlbnRIZWlnaHQgKiAyLFxuICAgICAgdGV4dCxcbiAgICAgIGNvbG9yLFxuICAgICAgZm9udFNpemUsXG4gICAgICB4OiAtKE1hdGguY2VpbChjdXJyZW50SGVpZ2h0ICogTWF0aC5zaW4ocm90YXRlICogTWF0aC5QSSAvIDE4MCkpIC0gZm9udFNpemUpLFxuICAgICAgeTogTWF0aC5jZWlsKGN1cnJlbnRIZWlnaHQgKiBNYXRoLmNvcyhyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKSksXG4gICAgICByb3RhdGUsXG4gICAgICBmb250LFxuICAgICAgdHJhbnNwYXJlbmN5LFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGFVcmwyID0gY3JlYXRlSW1hZ2VCYXNlKHtcbiAgICAgIHdpZHRoOiBjdXJyZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IGN1cnJlbnRIZWlnaHQgKiAyLFxuICAgICAgdGV4dCxcbiAgICAgIGNvbG9yLFxuICAgICAgZm9udFNpemUsXG4gICAgICB4OiAtKE1hdGguY2VpbChjdXJyZW50SGVpZ2h0ICogTWF0aC5zaW4ocm90YXRlICogTWF0aC5QSSAvIDE4MCkpIC0gZm9udFNpemUpICsgeCxcbiAgICAgIHk6IE1hdGguY2VpbChjdXJyZW50SGVpZ2h0ICogTWF0aC5jb3Mocm90YXRlICogTWF0aC5QSSAvIDE4MCkpICsgeSxcbiAgICAgIHJvdGF0ZSxcbiAgICAgIGZvbnQsXG4gICAgICB0cmFuc3BhcmVuY3ksXG4gICAgfSk7XG4gICAgbGV0IGRlZmF1bHRTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgZGVmYXVsdFN0eWxlLmlubmVySFRNTCA9IGAke2NsYXNzTmFtZX06YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgJHt0b3AgfHwgdG9wID09PSAwID8gYHRvcDogJHt0b3B9cHg7YCA6ICcnfVxuICAgICAgJHtsZWZ0IHx8IGxlZnQgPT09IDAgPyBgbGVmdDogJHtsZWZ0fXB4O2AgOiAnJ31cbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9YDtcblxuICAgIGxldCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZUVsLmlubmVySFRNTCA9IGAke2NsYXNzTmFtZX06YWZ0ZXJcbiAgICB7XG4gICAgICAke3Bvc2l0aW9uID8gYHBvc2l0aW9uOiAke3Bvc2l0aW9ufWAgOiAnJ307XG4gICAgICAke3pJbmRleCA/IGB6LWluZGV4OiR7ekluZGV4fWAgOiAnJ307XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtkYXRhVXJsMX0pLCB1cmwoJHtkYXRhVXJsMn0pO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBpbmhlcml0O1xuICAgIH1gO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZGVmYXVsdFN0eWxlKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlRWwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRQaXhlbFJhdGlvLCBzY2FsZU9wdGlvbnMsIGNyZWF0ZUltYWdlQmFzZSB9IGZyb20gJy4vdXRpbC9pbmRleCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlbmRlclNpbmdsZVdhdGVybWFya1Byb3BzIHtcbiAgLyoqXG4qIOiiq+aMgui9veeahOWFg+e0oOexu+WRve+8jOm7mOiupGJvZHlcbiovXG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOawtOWNsOaWh+ahiFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOawtOWNsOaWh+ahiOminOiJsiwgIzIyMlxuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG4gIC8qKlxuICAqIOWtl+WPt1xuKi9cbiAgc2l6ZT86IG51bWJlcjtcbiAgLyoqXG4gICAgKiDml4vovazop5LluqYgMO+9njc1XG4gICovXG4gIHJvdGF0ZT86IG51bWJlcjtcbiAgLyoqXG4gICAgKiDlrZfkvZPmoLzlvI9cbiAgKi9cbiAgZm9udD86IHN0cmluZztcbiAgLyoqXG4gICAgKiDpgI/mmI7luqZcbiAgKi9cbiAgdHJhbnNwYXJlbmN5PzogbnVtYmVyO1xuICAvKipcbiAgICAqIOawtOWNsOWxgue6p1xuICAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJTaW5nbGVXYXRlcm1hcmsgPSAocHJvcHM6IElSZW5kZXJTaW5nbGVXYXRlcm1hcmtQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSA9ICdib2R5JywgdGV4dCA9ICfmsLTljbDmlofmoYgnLCBjb2xvciA9ICcjMjIyJywgc2l6ZSA9IDEzLCByb3RhdGUgPSAxMCwgZm9udCA9ICdzYW5zLXNlcmlmJywgdHJhbnNwYXJlbmN5ID0gMC41LCB6SW5kZXggPSAxMDAwIH0gPSBwcm9wcztcbiAgLy8g5Yib5bu65LiA5LiqY2FudmFz77yM6I635Y+W5paH5qGI55qE5a695bqm77yM6K6h566X5Ye66ZyA6KaB6K6+572u55qEY2FudmFz55qE5a696auYXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgLy8g6I635Y+W5bGP5bmV5YOP57Sg5q+UXG4gIGNvbnN0IHJhdGlvID0gZ2V0UGl4ZWxSYXRpbyhjdHgpO1xuICBjb25zdCBuZXdPcHRpb25zID0gc2NhbGVPcHRpb25zKHJhdGlvLCB7IHNpemUsIGZvbnQgfSk7XG4gIGNvbnN0IHsgc2l6ZTogZm9udFNpemUsIG9mZnNldFg6IHgsIG9mZnNldFk6IHksIG1hbF9vZmZzZXQsIH0gPSBuZXdPcHRpb25zO1xuICBpZiAoY3R4KSB7XG4gICAgY29uc29sZS5sb2coJ25ld09wdGlvbnM6ICcsIG5ld09wdGlvbnMpXG4gICAgY3R4LmZvbnQgPSBgJHtmb250U2l6ZX1weCAke2ZvbnR9YDtcbiAgICBjdHgudHJhbnNsYXRlKDAsIDApO1xuICAgIC8vIOiOt+WPluaWh+ahiOWuvemrmFxuICAgIGNvbnN0IHRleHRXaWR0aCA9IE1hdGguY2VpbChjdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGgpO1xuXG4gICAgLy8g6K6h566X5Ye66ZyA6KaB6K6+572u55qEY2FudmFz55qE5a696auY77yM5YqgZm9udFNpemXkvZzkuLrnlZnnmb1cbiAgICBjb25zdCBjdXJyZW50V2lkdGggPSBNYXRoLmNlaWwodGV4dFdpZHRoICogTWF0aC5jb3Mocm90YXRlICogTWF0aC5QSSAvIDE4MCkpIC8gcmF0aW8gKyBmb250U2l6ZTtcbiAgICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gTWF0aC5jZWlsKHRleHRXaWR0aCAqIE1hdGguc2luKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApKSAvIHJhdGlvICsgZm9udFNpemU7XG4gICAgY29uc3QgdG9wID0gMDtcbiAgICBjb25zdCBsZWZ0ID0gMDtcbiAgICBjb25zdCBwb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgY29uc3QgZGF0YVVybDEgPSBjcmVhdGVJbWFnZUJhc2Uoe1xuICAgICAgd2lkdGg6IGN1cnJlbnRXaWR0aCxcbiAgICAgIGhlaWdodDogY3VycmVudEhlaWdodCAqIDIsXG4gICAgICB0ZXh0LFxuICAgICAgY29sb3IsXG4gICAgICBmb250U2l6ZSxcbiAgICAgIHg6IC0oTWF0aC5jZWlsKGN1cnJlbnRIZWlnaHQgKiBNYXRoLnNpbihyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKSkgLSBmb250U2l6ZSksXG4gICAgICB5OiBNYXRoLmNlaWwoY3VycmVudEhlaWdodCAqIE1hdGguY29zKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApKSxcbiAgICAgIHJvdGF0ZSxcbiAgICAgIGZvbnQsXG4gICAgICB0cmFuc3BhcmVuY3ksXG4gICAgfSk7XG4gICAgbGV0IGRlZmF1bHRTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgZGVmYXVsdFN0eWxlLmlubmVySFRNTCA9IGAke2NsYXNzTmFtZX06YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgJHt0b3AgfHwgdG9wID09PSAwID8gYHRvcDogJHt0b3B9cHg7YCA6ICcnfVxuICAgICAgJHtsZWZ0IHx8IGxlZnQgPT09IDAgPyBgbGVmdDogJHtsZWZ0fXB4O2AgOiAnJ31cbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICR7cG9zaXRpb24gPyBgcG9zaXRpb246ICR7cG9zaXRpb259YCA6ICcnfTtcbiAgICAgICR7ekluZGV4ID8gYHotaW5kZXg6JHt6SW5kZXh9YCA6ICcnfTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2RhdGFVcmwxfSk7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGluaGVyaXQ7XG4gICAgfWA7XG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGRlZmF1bHRTdHlsZSk7XG4gIH1cbn0iLCJcbi8vIOiOt+WPluWxj+W5leWDj+e0oOavlFxuZXhwb3J0IGNvbnN0IGdldFBpeGVsUmF0aW8gPSBmdW5jdGlvbiAoY29udGV4dDogYW55KSB7XG4gICAgY29uc3QgYmFja2luZ1N0b3JlID0gY29udGV4dC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgIGNvbnRleHQud2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgICAgICBjb250ZXh0Lm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAgICAgY29udGV4dC5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAgICAgY29udGV4dC5vQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgICAgICBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgMTtcbiAgICByZXR1cm4gKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIC8gYmFja2luZ1N0b3JlO1xufTtcblxuLy8g5qC55o2u5bGP5bmV5YOP57Sg5q+U77yM6L2s5YyWY2FudmFz57uY5Yi25Y+C5pWwXG5leHBvcnQgY29uc3Qgc2NhbGVPcHRpb25zID0gZnVuY3Rpb24gKHJhdGlvOiBudW1iZXIsIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICBsZXQgbmV3T3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuXG4gICAgY29uc3Qgc2NhbGVLZXlzOiBzdHJpbmdbXSA9IFtcInNpemVcIiwgJ29mZnNldFgnLCAnb2Zmc2V0WScsICdtYWxfb2Zmc2V0J107XG4gICAgaWYgKCFPYmplY3QuZW50cmllcykge1xuICAgICAgICBPYmplY3QuZW50cmllcyA9IGZ1bmN0aW9uIChvYmo6IGFueSkge1xuICAgICAgICAgICAgY29uc3Qgb3duUHJvcHMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICAgICAgbGV0IGkgPSBvd25Qcm9wcy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCByZXNBcnJheSA9IG5ldyBBcnJheShpKTsgLy8gcHJlYWxsb2NhdGUgdGhlIEFycmF5XG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgcmVzQXJyYXlbaV0gPSBbb3duUHJvcHNbaV0sIG9ialtvd25Qcm9wc1tpXV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc0FycmF5O1xuICAgICAgICB9O1xuICAgIH1cbiAgICBPYmplY3QuZW50cmllcyhuZXdPcHRpb25zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgaWYgKHNjYWxlS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBuZXdPcHRpb25zW2tleV0gPSB2YWx1ZSAqIHJhdGlvO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld09wdGlvbnM7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZW5kZXJCYXNlSW1hZ2VQcm9wcyB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlclxuICAgIHRleHQ6IHN0cmluZztcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGZvbnRTaXplOiBudW1iZXI7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICByb3RhdGU6IG51bWJlcjtcbiAgICBmb250OiBzdHJpbmc7XG4gICAgdHJhbnNwYXJlbmN5OiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUltYWdlQmFzZSA9IChwcm9wczogSVJlbmRlckJhc2VJbWFnZVByb3BzKSA9PiB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0ZXh0LCBjb2xvciwgZm9udFNpemUsIHgsIHksIHJvdGF0ZSwgZm9udCwgdHJhbnNwYXJlbmN5IH0gPSBwcm9wcztcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAoY3R4KSB7XG4gICAgICAgIGN0eC5mb250ID0gYCR7Zm9udFNpemV9cHggJHtmb250fWA7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gdHJhbnNwYXJlbmN5O1xuICAgICAgICBjdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjdHgucm90YXRlKC1yb3RhdGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgICAgICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyByZW5kZXJEb3VibGVXYXRlcm1hcmssIElSZW5kZXJEb3VibGVXYXRlcm1hcmtQcm9wcywgfSBmcm9tICcuL3JlbmRlckRvdWJsZVdhdGVybWFyayc7XG5pbXBvcnQgeyByZW5kZXJTaW5nbGVXYXRlcm1hcmssIElSZW5kZXJTaW5nbGVXYXRlcm1hcmtQcm9wcyB9IGZyb20gJy4vcmVuZGVyU2luZ2xlV2F0ZXJtYXJrJztcblxuZXhwb3J0IHsgcmVuZGVyRG91YmxlV2F0ZXJtYXJrLCBJUmVuZGVyRG91YmxlV2F0ZXJtYXJrUHJvcHMsIHJlbmRlclNpbmdsZVdhdGVybWFyaywgSVJlbmRlclNpbmdsZVdhdGVybWFya1Byb3BzIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9