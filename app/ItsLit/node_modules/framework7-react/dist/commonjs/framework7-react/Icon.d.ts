/// <reference types="react" />
import * as React from 'react';
export interface IIconProps {
    color?: string;
    material?: string;
    f7?: string;
    ion?: string;
    fa?: string;
    icon?: string;
    ifMaterial?: string;
    ifIos?: string;
    size?: string | number;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Icon: React.ComponentClass<IIconProps>;
