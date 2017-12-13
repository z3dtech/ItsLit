/// <reference types="react" />
import * as React from 'react';
export interface IPopupProps {
    tabletFullscreen?: boolean;
    theme?: string;
    layout?: string;
    opened?: boolean;
    onPopupOpen?: (eventArgs?: any) => void;
    onPopupOpened?: (eventArgs?: any) => void;
    onPopupClose?: (eventArgs?: any) => void;
    onPopupClosed?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Popup: React.ComponentClass<IPopupProps>;
