/// <reference types="react" />
import * as React from 'react';
export interface IDataTableTitleProps {
    selected?: boolean;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const DataTableTitle: React.ComponentClass<IDataTableTitleProps>;
