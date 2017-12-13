/// <reference types="react" />
import * as React from 'react';
export interface IFabSpeedDialProps {
    theme?: string;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const FabSpeedDial: React.ComponentClass<IFabSpeedDialProps>;
