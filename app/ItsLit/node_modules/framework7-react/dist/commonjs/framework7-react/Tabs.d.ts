/// <reference types="react" />
import * as React from 'react';
export interface ITabsProps {
    animated?: boolean;
    swipeable?: boolean;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Tabs: React.ComponentClass<ITabsProps>;
