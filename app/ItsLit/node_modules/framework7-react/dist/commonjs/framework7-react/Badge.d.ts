/// <reference types="react" />
import * as React from 'react';
export interface IBadgeProps {
    color?: string;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Badge: React.ComponentClass<IBadgeProps>;
