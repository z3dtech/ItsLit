/// <reference types="react" />
import * as React from 'react';
export interface IListLabelProps {
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const ListLabel: React.ComponentClass<IListLabelProps>;
