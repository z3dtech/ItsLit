/// <reference types="react" />
import * as React from 'react';
export interface IListButtonProps {
    title?: string | number;
    link?: boolean | string;
    href?: boolean | string;
    tabindex?: number | string;
    external?: boolean;
    linkExternal?: boolean;
    back?: boolean;
    linkBack?: boolean;
    noFastclick?: boolean;
    linkNoFastlick?: boolean;
    color?: string;
    force?: boolean;
    reload?: boolean;
    animatePages?: boolean;
    ignoreCache?: boolean;
    pageName?: string;
    template?: string;
    view?: string;
    openPanel?: boolean | string;
    closePanel?: boolean | string;
    openPopup?: boolean | string;
    closePopup?: boolean | string;
    openPopover?: boolean | string;
    closePopover?: boolean | string;
    openLoginScreen?: boolean | string;
    closeLoginScreen?: boolean | string;
    openPicker?: boolean | string;
    closePicker?: boolean | string;
    tabLink?: boolean | string;
    openSortable?: boolean | string;
    closeSortable?: boolean | string;
    toggleSortable?: boolean | string;
    onClick?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const ListButton: React.ComponentClass<IListButtonProps>;
