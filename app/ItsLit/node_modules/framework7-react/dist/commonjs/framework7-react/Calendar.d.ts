/// <reference types="react" />
import * as React from 'react';
import { ICalendarDatePickerMixinProps } from './CalendarDatePickerMixin';
export interface ICalendarProps extends ICalendarDatePickerMixinProps {
    onChange?: (eventArgs?: any) => void;
    onMonthadd?: (eventArgs?: any) => void;
    onDayclick?: (eventArgs?: any) => void;
    onMonthyearchangestart?: (eventArgs?: any) => void;
    onMonthyearchangeend?: (eventArgs?: any) => void;
    onOpen?: (eventArgs?: any) => void;
    onClose?: (eventArgs?: any) => void;
    id?: string;
    className?: string;
    style?: {
        [cssAttribute: string]: string;
    };
}
export declare const Calendar: React.ComponentClass<ICalendarProps>;
