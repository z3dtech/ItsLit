/// <reference types="react" />
import * as React from 'react';
export interface IAccordionItemProps {
    expanded?: boolean;
    onAccordionOpen?: (eventArgs?: any) => void;
    onAccordionOpened?: (eventArgs?: any) => void;
    onAccordionClose?: (eventArgs?: any) => void;
    onAccordionClosed?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const AccordionItem: React.ComponentClass<IAccordionItemProps>;
