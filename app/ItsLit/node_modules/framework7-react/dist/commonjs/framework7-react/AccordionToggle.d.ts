/// <reference types="react" />
import * as React from 'react';
export interface IAccordionToggleProps {
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const AccordionToggle: React.ComponentClass<IAccordionToggleProps>;
