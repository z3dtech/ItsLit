/// <reference types="react" />
import * as React from 'react';
export interface IMessagesProps {
    autoLayout?: boolean;
    newMessagesFirst?: boolean;
    messages?: any[];
    scrollMessages?: boolean;
    scrollMessagesOnlyOnEdge?: boolean;
    init?: boolean;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Messages: React.ComponentClass<IMessagesProps>;
