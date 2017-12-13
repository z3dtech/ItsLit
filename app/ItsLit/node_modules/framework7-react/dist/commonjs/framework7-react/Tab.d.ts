/// <reference types="react" />
import * as React from 'react';
export interface ITabProps {
    active?: boolean;
    id?: string;
    onTabShow?: (eventArgs?: any) => void;
    onTabHide?: (eventArgs?: any) => void;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Tab: React.ComponentClass<ITabProps>;
