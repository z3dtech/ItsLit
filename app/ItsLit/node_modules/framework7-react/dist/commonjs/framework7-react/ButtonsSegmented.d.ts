/// <reference types="react" />
import * as React from 'react';
export interface IButtonsSegmentedProps {
    color?: string;
    theme?: string;
    bg?: string;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const ButtonsSegmented: React.ComponentClass<IButtonsSegmentedProps>;
