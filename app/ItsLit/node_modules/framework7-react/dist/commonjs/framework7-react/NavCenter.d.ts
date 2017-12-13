/// <reference types="react" />
import * as React from 'react';
export interface INavCenterProps {
    sliding?: boolean;
    title?: string;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const NavCenter: React.ComponentClass<INavCenterProps>;
