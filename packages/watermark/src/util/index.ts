
// 获取屏幕像素比
export const getPixelRatio = function (context: any) {
    const backingStore = context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;
    return (window.devicePixelRatio || 1) / backingStore;
};

// 根据屏幕像素比，转化canvas绘制参数
export const scaleOptions = function (ratio: number, options: Record<string, any>) {
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
export interface IRenderBaseImageProps {
    width: number;
    height: number
    text: string;
    color: string;
    fontSize: number;
    x: number;
    y: number;
    rotate: number;
    font: string;
    transparency: number;
}


export const createImageBase = (props: IRenderBaseImageProps) => {
    const { width, height, text, color, fontSize, x, y, rotate, font, transparency } = props;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.font = `${fontSize}px ${font}`;
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
}