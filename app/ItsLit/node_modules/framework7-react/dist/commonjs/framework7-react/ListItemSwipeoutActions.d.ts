/// <reference types="react" />
import * as React from 'react';
export interface IListItemSwipeoutActionsProps {
    left?: boolean;
    right?: boolean;
    side?: string;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const ListItemSwipeoutActions: React.ComponentClass<IListItemSwipeoutActionsProps>;
