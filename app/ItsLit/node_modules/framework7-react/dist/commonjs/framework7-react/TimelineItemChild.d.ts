/// <reference types="react" />
import * as React from 'react';
export interface ITimelineItemChildProps {
    inner?: boolean;
    content?: string;
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
export declare const TimelineItemChild: React.ComponentClass<ITimelineItemChildProps>;
