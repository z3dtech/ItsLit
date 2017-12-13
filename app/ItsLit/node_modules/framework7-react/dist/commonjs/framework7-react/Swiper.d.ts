/// <reference types="react" />
import * as React from 'react';
export interface ISwiperProps {
    params?: Object;
    pagination?: boolean | string | Object;
    scrollbar?: boolean | string | Object;
    nextButton?: boolean | string | Object;
    prevButton?: boolean | string | Object;
    init?: boolean;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Swiper: React.ComponentClass<ISwiperProps>;
