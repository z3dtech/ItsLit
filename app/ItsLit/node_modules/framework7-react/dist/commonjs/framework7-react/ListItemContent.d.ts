/// <reference types="react" />
import * as React from 'react';
export interface IListItemContentProps {
    title?: string | number;
    text?: string | number;
    media?: string;
    subtitle?: string | number;
    after?: string | number;
    badge?: string | number;
    badgeColor?: string;
    mediaList?: boolean;
    checkbox?: boolean;
    checked?: boolean;
    radio?: boolean;
    name?: string;
    value?: string | number | boolean | any[];
    inputValue?: string | number;
    readonly?: boolean;
    required?: boolean;
    disabled?: boolean;
    onClick?: (eventArgs?: any) => void;
    onChange?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const ListItemContent: React.ComponentClass<IListItemContentProps>;
