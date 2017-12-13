/// <reference types="react" />
import * as React from 'react';
export interface IFabProps {
    color?: string;
    onClick?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Fab: React.ComponentClass<IFabProps>;
