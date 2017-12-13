/// <reference types="react" />
import * as React from 'react';
export interface IPhotoBrowserProps {
    init?: boolean;
    params?: Object;
    photos?: any[];
    initialSlide?: number;
    spaceBetween?: number;
    speed?: number;
    zoom?: boolean;
    zoomMax?: number;
    zoomMin?: number;
    exposition?: boolean;
    expositionHideCaptions?: boolean;
    type?: string;
    navbar?: boolean;
    toolbar?: boolean;
    theme?: string;
    captionsTheme?: string;
    swipeToClose?: boolean;
    backLinkText?: string;
    ofText?: string;
    loop?: boolean;
    lazyLoading?: boolean;
    lazyLoadingInPrevNext?: boolean;
    lazyLoadingOnTransitionStart?: boolean;
    onOpen?: (eventArgs?: any) => void;
    onClose?: (eventArgs?: any) => void;
    onSwipetoclose?: (eventArgs?: any) => void;
    onSlidechangestart?: (eventArgs?: any) => void;
    onSlidechangeend?: (eventArgs?: any) => void;
    onTransitionstart?: (eventArgs?: any) => void;
    onTransitionend?: (eventArgs?: any) => void;
    onClick?: (eventArgs?: any) => void;
    onTap?: (eventArgs?: any) => void;
    onDoubletap?: (eventArgs?: any) => void;
    onLazyimageload?: (eventArgs?: any) => void;
    onLazyimageready?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const PhotoBrowser: React.ComponentClass<IPhotoBrowserProps>;
