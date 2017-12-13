/// <reference types="react" />
import * as React from 'react';
export interface IStatusbarProps {
    theme?: string;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Statusbar: React.ComponentClass<IStatusbarProps>;
