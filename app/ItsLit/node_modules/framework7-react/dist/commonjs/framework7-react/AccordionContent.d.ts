/// <reference types="react" />
import * as React from 'react';
export interface IAccordionContentProps {
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const AccordionContent: React.ComponentClass<IAccordionContentProps>;
