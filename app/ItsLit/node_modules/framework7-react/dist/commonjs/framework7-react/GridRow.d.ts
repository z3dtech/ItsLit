/// <reference types="react" />
import * as React from 'react';
export interface IGridRowProps {
    noGutter?: boolean;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const GridRow: React.ComponentClass<IGridRowProps>;
