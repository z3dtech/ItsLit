/// <reference types="react" />
import * as React from 'react';
export interface IMessageProps {
    text?: string;
    name?: string;
    avatar?: string;
    type?: string;
    label?: string;
    day?: string;
    date?: string;
    time?: string;
    last?: boolean;
    first?: boolean;
    onClick?: (eventArgs?: any) => void;
    onClickName?: (eventArgs?: any) => void;
    onClickText?: (eventArgs?: any) => void;
    onClickAvatar?: (eventArgs?: any) => void;
    startSlot?: React.ReactElement<any>;
    endSlot?: React.ReactElement<any>;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Message: React.ComponentClass<IMessageProps>;
