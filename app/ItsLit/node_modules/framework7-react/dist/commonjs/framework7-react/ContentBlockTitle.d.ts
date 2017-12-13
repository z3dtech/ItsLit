/// <reference types="react" />
import * as React from 'react';
export interface IContentBlockTitleProps {
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const ContentBlockTitle: React.ComponentClass<IContentBlockTitleProps>;
