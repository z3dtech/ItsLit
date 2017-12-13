/// <reference types="react" />
import * as React from 'react';
export interface IDataTableProps {
    card?: boolean;
    collapsible?: boolean;
    selectable?: boolean;
    items?: any[];
    title?: string;
    headings?: any[];
    columns?: any[];
    beforeTableSlot?: React.ReactElement<any>;
    afterTableSlot?: React.ReactElement<any>;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const DataTable: React.ComponentClass<IDataTableProps>;
