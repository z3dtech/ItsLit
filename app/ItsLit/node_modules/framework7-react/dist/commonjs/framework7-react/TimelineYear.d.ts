/// <reference types="react" />
import * as React from 'react';
export interface ITimelineYearProps {
    year?: number | string;
    title?: number | string;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const TimelineYear: React.ComponentClass<ITimelineYearProps>;
