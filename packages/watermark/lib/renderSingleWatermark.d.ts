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