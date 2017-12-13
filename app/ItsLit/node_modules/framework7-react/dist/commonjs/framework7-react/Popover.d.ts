/// <reference types="react" />
import * as React from 'react';
export interface IPopoverProps {
    onPopoverOpen?: (eventArgs?: any) => void;
    onPopoverOpened?: (eventArgs?: any) => void;
    onPopoverClose?: (eventArgs?: any) => void;
    onPopoverClosed?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Popover: React.ComponentClass<IPopoverProps>;
