/// <reference types="react" />
import * as React from 'react';
export interface IFormRangeProps {
    name?: string;
    id?: string;
    value?: string | number;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    inputStyle?: string;
    max?: string | number;
    min?: string | number;
    step?: string | number;
    color?: string;
    onInput?: (eventArgs?: any) => void;
    onChange?: (eventArgs?: any) => void;
    onClick?: (eventArgs?: any) => void;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const FormRange: React.ComponentClass<IFormRangeProps>;
