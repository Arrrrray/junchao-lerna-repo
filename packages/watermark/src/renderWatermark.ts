export interface WatermarkProps {
    /**
     * 被挂载的元素类命，默认body
     */
    className?: string;
    /**
     * 水印文案
     */
    text?: string;
    /**
     * 水印文案颜色, #222
     */
    color?: string;
    /**
    * 字号
  */
    size?: number;
    /**
      * 旋转角度
    */
    rotate?: number;
    /**
      * 字体格式
    */
    font?: string;
    /**
      * 透明度
    */
    transparency?: number;
    /**
      * 水印层级
    */
    zIndex?: number;

}

// 获取屏幕像素比
const getPixelRatio = function (context: any) {
    const backingStore = context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;
    return (window.devicePixelRatio || 1) / backingStore;
};

// 根据屏幕像素比，转化canvas绘制参数
const scaleOptions = function (ratio: number, options: Record<string, any>) {
    let newOptions = { ...options };

    const scaleKeys: string[] = ["size", 'offsetX', 'offsetY', 'mal_offset'];
    if (!Object.entries) {
        Object.entries = function (obj: any) {
            const ownProps = Object.keys(obj);
            let i = ownProps.length;
            const resArray = new Array(i); // preallocate the Array
            while (i--) {
                resArray[i] = [ownProps[i], obj[ownProps[i]]];
            }
            return resArray;
        };
    }
    Object.entries(newOptions).forEach(([key, value]) => {
        if (scaleKeys.includes(key)) {
            newOptions[key] = value * ratio;
        }
    });
    return newOptions;
};

const createImageBase = (props: WatermarkProps) => {
    const { className = 'body', text = '水印文案', color = '#222', size = 13, rotate = 10, font = 'sans-serif', transparency = 0.5, zIndex = 1000 } = props;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const ratio = getPixelRatio(ctx);
    const newOptions = scaleOptions(ratio, { size, rotate, font, transparency, zIndex });
    const { size: fontSize, offsetX, offsetY, mal_offset, transparency: alpha, zIndex: zIndexNum } = newOptions;
    if (ctx) {

        const textWidth = ctx.measureText(text).width;
        const currentWidth = textWidth * ratio;
        const currentHeight = textWidth * ratio;
        canvas.width = currentWidth;
        canvas.height = currentHeight;
        ctx.font = `${fontSize}px ${font}`;
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.translate(currentWidth / 2, currentHeight / 2);
        ctx.rotate(-rotate * Math.PI / 180);
        return canvas.toDataURL('image/png');
    }
}

export const renderWatermark = (props: WatermarkProps) => {
    const { className = 'body', text = '水印文案', color = '#222', size = 13, rotate = 10, font = 'sans-serif', transparency = 0.5, zIndex = 1000 } = props;
    const top = 0;
    const left = 0;
    const dataUrl = createImageBase(props);
    let defaultStyle = document.createElement('style');
    defaultStyle.innerHTML = `${className} :after {
        content: '';
      display: block;
      width: 100%;
      height: 100%;
      ${top || top === 0 ? `top: ${top}px;` : ''}
      ${left || left === 0 ? `left: ${left}px;` : ''}
      background-repeat: repeat;
      pointer-events: none;
    }`;
    document.head.appendChild(defaultStyle);
}
