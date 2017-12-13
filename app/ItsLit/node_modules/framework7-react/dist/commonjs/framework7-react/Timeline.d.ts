/// <reference types="react" />
import * as React from 'react';
export interface ITimelineProps {
    sides?: boolean;
    tabletSides?: boolean;
    col?: number | string;
    tabletCol?: number | string;
    horizontal?: boolean;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Timeline: React.ComponentClass<ITimelineProps>;
