export declare const getPixelRatio: (context: any) => number;
export declare const scaleOptions: (ratio: number, options: Record<string, any>) => {
    [x: string]: any;
};
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
export declare const createImageBase: (props: IRenderBaseImageProps) => string | undefined;
