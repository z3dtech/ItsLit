/// <reference types="react" />
import * as React from 'react';
export interface IFabSpeedDialActionProps {
    color?: string;
    closeSpeedDial?: boolean;
    onClick?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const FabSpeedDialAction: React.ComponentClass<IFabSpeedDialActionProps>;
