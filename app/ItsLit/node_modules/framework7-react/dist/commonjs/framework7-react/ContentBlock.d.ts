/// <reference types="react" />
import * as React from 'react';
export interface IContentBlockProps {
    inset?: boolean;
    tabletInset?: boolean;
    inner?: boolean;
    tabs?: boolean;
    tab?: boolean;
    active?: boolean;
    noHairlines?: boolean;
    noHairlinesBetween?: boolean;
    onTabShow?: (eventArgs?: any) => void;
    onTabHide?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const ContentBlock: React.ComponentClass<IContentBlockProps>;
