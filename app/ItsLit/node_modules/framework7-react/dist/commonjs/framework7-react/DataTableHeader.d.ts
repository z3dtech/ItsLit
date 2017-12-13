/// <reference types="react" />
import * as React from 'react';
export interface IDataTableHeaderProps {
    title?: string;
    selected?: boolean;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const DataTableHeader: React.ComponentClass<IDataTableHeaderProps>;
