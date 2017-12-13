/// <reference types="react" />
import * as React from 'react';
export interface IDataTableCellProps {
    label?: boolean;
    numeric?: boolean;
    actions?: boolean;
    sortable?: boolean;
    checkbox?: boolean;
    order?: string;
    sortableActive?: boolean;
    collapsibleTitle?: string;
    activeSorting?: boolean;
    tabletOnly?: boolean;
    tabletLandscapeOnly?: boolean;
    onClick?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const DataTableCell: React.ComponentClass<IDataTableCellProps>;
