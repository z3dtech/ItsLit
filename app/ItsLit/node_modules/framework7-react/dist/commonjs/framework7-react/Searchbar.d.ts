/// <reference types="react" />
import * as React from 'react';
export interface ISearchbarProps {
    noShadow?: boolean;
    form?: boolean;
    placeholder?: string;
    cancelLink?: string;
    clear?: boolean;
    clearButton?: boolean;
    params?: Object;
    searchList?: string | Object;
    searchIn?: string;
    searchBy?: string;
    found?: string | Object;
    notFound?: string | Object;
    overlay?: string | Object;
    ignore?: string;
    customSearch?: boolean;
    removeDiacritics?: boolean;
    hideDividers?: boolean;
    hideGroups?: boolean;
    init?: boolean;
    onChange?: (eventArgs?: any) => void;
    onInput?: (eventArgs?: any) => void;
    onFocus?: (eventArgs?: any) => void;
    onBlur?: (eventArgs?: any) => void;
    onSubmit?: (eventArgs?: any) => void;
    onSearchbarSearch?: (eventArgs?: any) => void;
    onSearchbarClear?: (eventArgs?: any) => void;
    onSearchbarEnable?: (eventArgs?: any) => void;
    onSearchbarDisable?: (eventArgs?: any) => void;
    onClickClear?: (eventArgs?: any) => void;
    onClickCancel?: (eventArgs?: any) => void;
    beforeInputSlot?: React.ReactElement<any>;
    afterInputSlot?: React.ReactElement<any>;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Searchbar: React.ComponentClass<ISearchbarProps>;
