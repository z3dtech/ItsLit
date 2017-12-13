/// <reference types="react" />
import * as React from 'react';
export interface IChipProps {
    media?: string;
    text?: string | number;
    deleteable?: boolean;
    color?: string;
    bg?: string;
    mediaBg?: string;
    mediaColor?: string;
    onClick?: (eventArgs?: any) => void;
    onDelete?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Chip: React.ComponentClass<IChipProps>;
