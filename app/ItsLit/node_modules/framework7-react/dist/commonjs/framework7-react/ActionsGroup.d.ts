/// <reference types="react" />
import * as React from 'react';
export interface IActionsGroupProps {
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const ActionsGroup: React.ComponentClass<IActionsGroupProps>;
