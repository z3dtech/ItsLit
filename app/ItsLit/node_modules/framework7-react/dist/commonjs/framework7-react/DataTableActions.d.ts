/// <reference types="react" />
import * as React from 'react';
export interface IDataTableActionsProps {
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const DataTableActions: React.ComponentClass<IDataTableActionsProps>;
