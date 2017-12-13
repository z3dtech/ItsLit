/// <reference types="react" />
import * as React from 'react';
export interface ICardProps {
    title?: string | number;
    content?: string | number;
    footer?: string | number;
    inner?: boolean;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Card: React.ComponentClass<ICardProps>;
