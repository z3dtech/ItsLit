/// <reference types="react" />
import * as React from 'react';
export interface IFormSwitchProps {
    name?: string;
    id?: string;
    value?: string | number | boolean | any[];
    inputValue?: string | number;
    checked?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    inputStyle?: string;
    color?: string;
    onInput?: (eventArgs?: any) => void;
    onChange?: (eventArgs?: any) => void;
    onClick?: (eventArgs?: any) => void;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const FormSwitch: React.ComponentClass<IFormSwitchProps>;
