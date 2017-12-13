/// <reference types="react" />
import * as React from 'react';
export interface ICardContentProps {
    inner?: boolean;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const CardContent: React.ComponentClass<ICardContentProps>;
