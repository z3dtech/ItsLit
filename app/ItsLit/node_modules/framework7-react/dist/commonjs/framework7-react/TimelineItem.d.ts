/// <reference types="react" />
import * as React from 'react';
export interface ITimelineItemProps {
    date?: string | number | string;
    day?: string | number;
    month?: string | number;
    inner?: boolean;
    content?: string;
    side?: string;
    time?: string;
    title?: string;
    subtitle?: string;
    text?: string;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const TimelineItem: React.ComponentClass<ITimelineItemProps>;
