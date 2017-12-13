/// <reference types="react" />
import * as React from 'react';
export interface IFabSpeedDialActionsProps {
    theme?: string;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const FabSpeedDialActions: React.ComponentClass<IFabSpeedDialActionsProps>;
