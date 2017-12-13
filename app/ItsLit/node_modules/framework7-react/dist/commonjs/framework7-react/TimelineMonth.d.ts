/// <reference types="react" />
import * as React from 'react';
export interface ITimelineMonthProps {
    month?: number | string;
    title?: number | string;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const TimelineMonth: React.ComponentClass<ITimelineMonthProps>;
