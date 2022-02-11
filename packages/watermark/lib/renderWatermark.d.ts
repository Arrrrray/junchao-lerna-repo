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
export interface IRenderBaseImageProps {
    width: number;
    height: number;
    text: string;
    color: string;
    fontSize: number;
    x: number;
    y: number;
    rotate: number;
    font: string;
    transparency: number;
}
export declare const renderDoubleWatermark: (props: IRenderDoubleWatermarkProps) => void;
export interface IRenderSingleWatermarkProps {
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
      * 水印层级
    */
    zIndex?: number;
}
export declare const renderSingleWatermark: (props: IRenderSingleWatermarkProps) => void;
