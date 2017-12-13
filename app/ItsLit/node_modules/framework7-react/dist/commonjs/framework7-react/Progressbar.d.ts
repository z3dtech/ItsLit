/// <reference types="react" />
import * as React from 'react';
export interface IProgressbarProps {
    color?: string;
    progress?: number;
    infinite?: boolean;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Progressbar: React.ComponentClass<IProgressbarProps>;
