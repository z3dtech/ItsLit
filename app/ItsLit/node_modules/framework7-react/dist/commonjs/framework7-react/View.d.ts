/// <reference types="react" />
import * as React from 'react';
export interface IViewProps {
    main?: boolean;
    navbarFixed?: boolean;
    navbarThrough?: boolean;
    toolbarFixed?: boolean;
    toolbarThrough?: boolean;
    tabbarFixed?: boolean;
    tabbarThrough?: boolean;
    tabbarLabelsFixed?: boolean;
    tabbarLabelsThrough?: boolean;
    tab?: boolean;
    active?: boolean;
    dynamicNavbar?: boolean;
    domCache?: boolean;
    linksView?: string | Object;
    reloadPages?: boolean;
    uniqueHistory?: boolean;
    uniqueHistoryIgnoreGetParameters?: boolean;
    allowDuplicateUrls?: boolean;
    swipeBackPage?: boolean;
    swipeBackPageAnimateShadow?: boolean;
    swipeBackPageAnimateOpacity?: boolean;
    swipeBackPageActiveArea?: boolean;
    swipeBackPageThreshold?: boolean;
    animatePages?: boolean;
    preloadPreviousPage?: boolean;
    name?: string;
    params?: Object;
    url?: string;
    init?: boolean;
    theme?: string;
    layout?: string;
    onSwipebackMove?: (eventArgs?: any) => void;
    onSwipebackBeforechange?: (eventArgs?: any) => void;
    onSwipebackAfterchange?: (eventArgs?: any) => void;
    onSwipebackBeforereset?: (eventArgs?: any) => void;
    onSwipebackAfterreset?: (eventArgs?: any) => void;
    onTabShow?: (eventArgs?: any) => void;
    onTabHide?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const View: React.ComponentClass<IViewProps>;
