/// <reference types="react" />
import * as React from 'react';
export interface IFormLabelProps {
    floating?: boolean;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const FormLabel: React.ComponentClass<IFormLabelProps>;
