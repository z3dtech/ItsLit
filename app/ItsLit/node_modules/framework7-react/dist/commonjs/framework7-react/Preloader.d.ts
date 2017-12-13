/// <reference types="react" />
import * as React from 'react';
export interface IPreloaderProps {
    color?: string;
    size?: number | string;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Preloader: React.ComponentClass<IPreloaderProps>;
