import { getPixelRatio, scaleOptions, createImageBase } from './util/index';
export interface IRenderDoubleWatermarkProps {
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
    * 旋转角度 0～75
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
    * x方向偏移
  */
  offsetX?: number;
  /**
    * y方向偏移
  */
  offsetY?: number;
  /**
    * 水印层级
  */
  zIndex?: number;

}


export const renderDoubleWatermark = (props: IRenderDoubleWatermarkProps) => {
  const { className = 'body', text = '水印文案', color = '#222', size = 13, rotate = 10, offsetX = 15, offsetY = 30, font = 'sans-serif', transparency = 0.5, zIndex = 1000 } = props;
  // 创建一个canvas，获取文案的宽度，计算出需要设置的canvas的宽高
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  // 获取屏幕像素比
  const ratio = getPixelRatio(ctx);
  const newOptions = scaleOptions(ratio, { size, offsetX, offsetY, });
  const { size: fontSize, offsetX: x, offsetY: y, mal_offset, } = newOptions;
  if (ctx) {
    console.log('newOptions: ', newOptions)
    ctx.font = `${fontSize}px ${font}`;
    ctx.translate(0, 0);
    // 获取文案宽高
    const textWidth = Math.ceil(ctx.measureText(text).width);

    // 计算出需要设置的canvas的宽高，加fontSize作为留白
    const currentWidth = Math.ceil(textWidth * Math.cos(rotate * Math.PI / 180)) / ratio + fontSize;
    const currentHeight = Math.ceil(textWidth * Math.sin(rotate * Math.PI / 180)) / ratio + fontSize;
    const top = 0;
    const left = 0;
    const position = 'absolute';
    const dataUrl1 = createImageBase({
      width: currentWidth,
      height: currentHeight * 2,
      text,
      color,
      fontSize,
      x: -(Math.ceil(currentHeight * Math.sin(rotate * Math.PI / 180)) - fontSize),
      y: Math.ceil(currentHeight * Math.cos(rotate * Math.PI / 180)),
      rotate,
      font,
      transparency,
    });
    const dataUrl2 = createImageBase({
      width: currentWidth,
      height: currentHeight * 2,
      text,
      color,
      fontSize,
      x: -(Math.ceil(currentHeight * Math.sin(rotate * Math.PI / 180)) - fontSize) + x,
      y: Math.ceil(currentHeight * Math.cos(rotate * Math.PI / 180)) + y,
      rotate,
      font,
      transparency,
    });
    let defaultStyle = document.createElement('style');
    defaultStyle.innerHTML = `${className}:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      ${top || top === 0 ? `top: ${top}px;` : ''}
      ${left || left === 0 ? `left: ${left}px;` : ''}
      background-repeat: repeat;
      pointer-events: none;
    }`;

    let styleEl = document.createElement('style');
    styleEl.innerHTML = `${className}:after
    {
      ${position ? `position: ${position}` : ''};
      ${zIndex ? `z-index:${zIndex}` : ''};
      background-image: url(${dataUrl1}), url(${dataUrl2});
      background-size: inherit;
    }`;
    document.head.appendChild(defaultStyle);
    document.head.appendChild(styleEl);
  }
}
