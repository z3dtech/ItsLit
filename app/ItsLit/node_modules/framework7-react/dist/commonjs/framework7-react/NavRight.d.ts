/// <reference types="react" />
import * as React from 'react';
export interface INavRightProps {
    sliding?: boolean;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const NavRight: React.ComponentClass<INavRightProps>;
