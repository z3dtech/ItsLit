/// <reference types="react" />
import * as React from 'react';
export interface IMessagebarProps {
    placeholder?: string;
    init?: boolean;
    maxHeight?: number;
    sendLink?: string;
    value?: string | number;
    disabled?: boolean;
    readonly?: boolean;
    name?: string;
    onChange?: (eventArgs?: any) => void;
    onInput?: (eventArgs?: any) => void;
    onFocus?: (eventArgs?: any) => void;
    onBlur?: (eventArgs?: any) => void;
    onSubmit?: (eventArgs?: any) => void;
    onClick?: (eventArgs?: any) => void;
    beforeInnerSlot?: React.ReactElement<any>;
    beforeTextareaSlot?: React.ReactElement<any>;
    afterTextareaSlot?: React.ReactElement<any>;
    afterInnerSlot?: React.ReactElement<any>;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Messagebar: React.ComponentClass<IMessagebarProps>;
