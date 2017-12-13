/// <reference types="react" />
import * as React from 'react';
export interface IGridColProps {
    width?: number | string;
    tabletWidth?: number | string;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const GridCol: React.ComponentClass<IGridColProps>;
