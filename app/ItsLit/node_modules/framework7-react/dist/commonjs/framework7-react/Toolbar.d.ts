/// <reference types="react" />
import * as React from 'react';
export interface IToolbarProps {
    bottom?: boolean;
    tabbar?: boolean;
    labels?: boolean;
    scrollable?: boolean;
    theme?: string;
    layout?: string;
    hidden?: boolean;
    noShadow?: boolean;
    beforeInnerSlot?: React.ReactElement<any>;
    afterInnerSlot?: React.ReactElement<any>;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Toolbar: React.ComponentClass<IToolbarProps>;
