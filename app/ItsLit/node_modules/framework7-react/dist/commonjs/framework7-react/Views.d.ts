/// <reference types="react" />
import * as React from 'react';
export interface IViewsProps {
    navbarFixed?: boolean;
    navbarThrough?: boolean;
    toolbarFixed?: boolean;
    toolbarThrough?: boolean;
    tabbarFixed?: boolean;
    tabbarThrough?: boolean;
    tabbarLabelsFixed?: boolean;
    tabbarLabelsThrough?: boolean;
    tabs?: boolean;
    theme?: string;
    layout?: string;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Views: React.ComponentClass<IViewsProps>;
