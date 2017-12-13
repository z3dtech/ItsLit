/// <reference types="react" />
import * as React from 'react';
export interface ILoginScreenProps {
    theme?: string;
    layout?: string;
    opened?: boolean;
    onLoginscreenOpen?: (eventArgs?: any) => void;
    onLoginscreenOpened?: (eventArgs?: any) => void;
    onLoginscreenClose?: (eventArgs?: any) => void;
    onLoginscreenClosed?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const LoginScreen: React.ComponentClass<ILoginScreenProps>;
