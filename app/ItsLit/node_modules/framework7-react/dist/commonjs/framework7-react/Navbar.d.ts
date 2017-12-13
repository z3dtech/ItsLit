/// <reference types="react" />
import * as React from 'react';
export interface INavbarProps {
    backLink?: boolean | string;
    backLinkUrl?: string;
    backLinkHref?: string;
    sliding?: boolean;
    title?: string;
    theme?: string;
    layout?: string;
    hidden?: boolean;
    noShadow?: boolean;
    inner?: boolean;
    onNavbarBeforeinit?: (eventArgs?: any) => void;
    onNavbarInit?: (eventArgs?: any) => void;
    onNavbarReinit?: (eventArgs?: any) => void;
    onNavbarBeforeremove?: (eventArgs?: any) => void;
    onBackClick?: (eventArgs?: any) => void;
    onClickBack?: (eventArgs?: any) => void;
    beforeInnerSlot?: React.ReactElement<any>;
    afterInnerSlot?: React.ReactElement<any>;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Navbar: React.ComponentClass<INavbarProps>;
