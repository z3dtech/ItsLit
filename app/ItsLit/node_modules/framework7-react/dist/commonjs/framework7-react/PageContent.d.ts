/// <reference types="react" />
import * as React from 'react';
export interface IPageContentProps {
    tab?: boolean;
    active?: boolean;
    onTabShow?: (eventArgs?: any) => void;
    onTabHide?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const PageContent: React.ComponentClass<IPageContentProps>;
