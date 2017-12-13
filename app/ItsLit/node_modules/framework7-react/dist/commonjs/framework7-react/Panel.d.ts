/// <reference types="react" />
import * as React from 'react';
export interface IPanelProps {
    side?: string;
    effect?: string;
    cover?: boolean;
    reveal?: boolean;
    left?: boolean;
    right?: boolean;
    theme?: string;
    layout?: string;
    opened?: boolean;
    onPanelOpen?: (eventArgs?: any) => void;
    onPanelOpened?: (eventArgs?: any) => void;
    onPanelClosed?: (eventArgs?: any) => void;
    onPanelOverlayClick?: (eventArgs?: any) => void;
    onPanelSwipe?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Panel: React.ComponentClass<IPanelProps>;
