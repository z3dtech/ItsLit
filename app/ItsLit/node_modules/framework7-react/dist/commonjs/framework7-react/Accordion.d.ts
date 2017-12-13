/// <reference types="react" />
import * as React from 'react';
export interface IAccordionProps {
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Accordion: React.ComponentClass<IAccordionProps>;
