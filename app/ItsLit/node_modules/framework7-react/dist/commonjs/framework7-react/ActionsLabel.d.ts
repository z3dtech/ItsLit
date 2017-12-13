/// <reference types="react" />
import * as React from 'react';
export interface IActionsLabelProps {
    color?: string;
    bold?: boolean;
    onClick?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const ActionsLabel: React.ComponentClass<IActionsLabelProps>;
