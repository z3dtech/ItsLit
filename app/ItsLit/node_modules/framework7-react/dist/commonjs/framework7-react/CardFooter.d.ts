/// <reference types="react" />
import * as React from 'react';
export interface ICardFooterProps {
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const CardFooter: React.ComponentClass<ICardFooterProps>;
