/// <reference types="react" />
import * as React from 'react';
import { ILinkMixinProps } from './LinkMixin';
export interface ILinkProps extends ILinkMixinProps {
    onClick?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Link: React.ComponentClass<ILinkProps>;
