/// <reference types="react" />
import * as React from 'react';
export interface IListProps {
    inset?: boolean;
    tabletInset?: boolean;
    mediaList?: boolean;
    grouped?: boolean;
    sortable?: boolean;
    label?: string;
    accordion?: boolean;
    contacts?: boolean;
    noHairlines?: boolean;
    noHairlinesBetween?: boolean;
    tab?: boolean;
    active?: boolean;
    form?: boolean;
    storeData?: boolean;
    virtual?: boolean;
    virtualInit?: boolean;
    virtualItems?: any[] | Object;
    virtualHeight?: number | Function;
    virtualRowsBefore?: number;
    virtualRowsAfter?: number;
    virtualCols?: number;
    virtualCache?: boolean;
    virtualFilteredOnly?: boolean;
    virtualSearchByItem?: Function;
    virtualSearchAll?: Function;
    virtualRenderItem?: Function;
    virtualEmptyTemplate?: string;
    virtualRenderExternal?: Function;
    onSortableOpen?: (eventArgs?: any) => void;
    onSortableClose?: (eventArgs?: any) => void;
    onSortableSort?: (eventArgs?: any) => void;
    onTabShow?: (eventArgs?: any) => void;
    onTabHide?: (eventArgs?: any) => void;
    onVirtualItembeforeinsert?: (eventArgs?: any) => void;
    onVirtualBeforeclear?: (eventArgs?: any) => void;
    onVirtualItemsbeforeinsert?: (eventArgs?: any) => void;
    onVirtualItemsafterinsert?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const List: React.ComponentClass<IListProps>;
