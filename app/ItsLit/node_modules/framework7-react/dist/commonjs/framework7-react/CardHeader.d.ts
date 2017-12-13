/// <reference types="react" />
import * as React from 'react';
export interface ICardHeaderProps {
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const CardHeader: React.ComponentClass<ICardHeaderProps>;
