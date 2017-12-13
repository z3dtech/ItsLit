/// <reference types="react" />
import * as React from 'react';
export interface ISubnavbarProps {
    sliding?: boolean;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Subnavbar: React.ComponentClass<ISubnavbarProps>;
