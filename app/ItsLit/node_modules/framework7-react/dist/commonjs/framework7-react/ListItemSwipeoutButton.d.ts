/// <reference types="react" />
import * as React from 'react';
export interface IListItemSwipeoutButtonProps {
    text?: string;
    overswipe?: boolean;
    close?: boolean;
    delete?: boolean;
    color?: string;
    bg?: string;
    onClick?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const ListItemSwipeoutButton: React.ComponentClass<IListItemSwipeoutButtonProps>;
