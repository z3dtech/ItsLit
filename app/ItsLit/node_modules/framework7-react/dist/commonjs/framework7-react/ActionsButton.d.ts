/// <reference types="react" />
import * as React from 'react';
export interface IActionsButtonProps {
    color?: string;
    bold?: boolean;
    close?: boolean;
    onClick?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const ActionsButton: React.ComponentClass<IActionsButtonProps>;
