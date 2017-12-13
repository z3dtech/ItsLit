/// <reference types="react" />
import * as React from 'react';
export interface IPickerModalProps {
    opened?: boolean;
    theme?: string;
    layout?: string;
    overlay?: boolean;
    onPickerOpen?: (eventArgs?: any) => void;
    onPickerOpened?: (eventArgs?: any) => void;
    onPickerClose?: (eventArgs?: any) => void;
    onPickerClosed?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const PickerModal: React.ComponentClass<IPickerModalProps>;
