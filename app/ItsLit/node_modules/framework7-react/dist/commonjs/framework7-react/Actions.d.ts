/// <reference types="react" />
import * as React from 'react';
export interface IActionsProps {
    opened?: boolean;
    onActionsOpen?: (eventArgs?: any) => void;
    onActionsOpened?: (eventArgs?: any) => void;
    onActionsClose?: (eventArgs?: any) => void;
    onActionsClosed?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Actions: React.ComponentClass<IActionsProps>;
