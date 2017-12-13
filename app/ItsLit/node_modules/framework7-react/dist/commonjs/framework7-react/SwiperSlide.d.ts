/// <reference types="react" />
import * as React from 'react';
export interface ISwiperSlideProps {
    zoom?: boolean;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const SwiperSlide: React.ComponentClass<ISwiperSlideProps>;
