/// <reference types="react" />
import * as React from 'react';
export interface IListGroupProps {
    mediaList?: boolean;
    sortable?: boolean;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const ListGroup: React.ComponentClass<IListGroupProps>;
