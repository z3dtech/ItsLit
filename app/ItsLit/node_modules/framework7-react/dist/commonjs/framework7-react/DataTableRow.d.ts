/// <reference types="react" />
import * as React from 'react';
export interface IDataTableRowProps {
    heading?: boolean;
    selectable?: boolean;
    selected?: boolean;
    onChange?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const DataTableRow: React.ComponentClass<IDataTableRowProps>;
