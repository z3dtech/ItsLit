/// <reference types="react" />
import * as React from 'react';
export interface INavLeftProps {
    backLink?: boolean | string;
    backLinkUrl?: string;
    backLinkHref?: string;
    sliding?: boolean;
    onBackClick?: (eventArgs?: any) => void;
    onClickBack?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const NavLeft: React.ComponentClass<INavLeftProps>;
