export type TimeId =
  | "alarm-filled"
  | "calendar-blank-filled"
  | "calendar-check-filled"
  | "calendar-filled"
  | "calendar-plus-filled"
  | "calendar-x-filled"
  | "clock-afternoon-filled"
  | "clock-clockwise-filled"
  | "clock-countdown-filled"
  | "clock-counter-clockwise-filled"
  | "clock-filled"
  | "hourglass-filled"
  | "hourglass-high-filled"
  | "hourglass-low-filled"
  | "hourglass-medium-filled"
  | "hourglass-simple-filled"
  | "hourglass-simple-high-filled"
  | "hourglass-simple-low-filled"
  | "hourglass-simple-medium-filled"
  | "timer-filled"
  | "watch-filled";

export type TimeKey =
  | "AlarmFilled"
  | "CalendarBlankFilled"
  | "CalendarCheckFilled"
  | "CalendarFilled"
  | "CalendarPlusFilled"
  | "CalendarXFilled"
  | "ClockAfternoonFilled"
  | "ClockClockwiseFilled"
  | "ClockCountdownFilled"
  | "ClockCounterClockwiseFilled"
  | "ClockFilled"
  | "HourglassFilled"
  | "HourglassHighFilled"
  | "HourglassLowFilled"
  | "HourglassMediumFilled"
  | "HourglassSimpleFilled"
  | "HourglassSimpleHighFilled"
  | "HourglassSimpleLowFilled"
  | "HourglassSimpleMediumFilled"
  | "TimerFilled"
  | "WatchFilled";

export enum Time {
  AlarmFilled = "alarm-filled",
  CalendarBlankFilled = "calendar-blank-filled",
  CalendarCheckFilled = "calendar-check-filled",
  CalendarFilled = "calendar-filled",
  CalendarPlusFilled = "calendar-plus-filled",
  CalendarXFilled = "calendar-x-filled",
  ClockAfternoonFilled = "clock-afternoon-filled",
  ClockClockwiseFilled = "clock-clockwise-filled",
  ClockCountdownFilled = "clock-countdown-filled",
  ClockCounterClockwiseFilled = "clock-counter-clockwise-filled",
  ClockFilled = "clock-filled",
  HourglassFilled = "hourglass-filled",
  HourglassHighFilled = "hourglass-high-filled",
  HourglassLowFilled = "hourglass-low-filled",
  HourglassMediumFilled = "hourglass-medium-filled",
  HourglassSimpleFilled = "hourglass-simple-filled",
  HourglassSimpleHighFilled = "hourglass-simple-high-filled",
  HourglassSimpleLowFilled = "hourglass-simple-low-filled",
  HourglassSimpleMediumFilled = "hourglass-simple-medium-filled",
  TimerFilled = "timer-filled",
  WatchFilled = "watch-filled",
}

export const TIME_CODEPOINTS: { [key in Time]: string } = {
  [Time.AlarmFilled]: "61697",
  [Time.CalendarBlankFilled]: "61698",
  [Time.CalendarCheckFilled]: "61699",
  [Time.CalendarFilled]: "61700",
  [Time.CalendarPlusFilled]: "61701",
  [Time.CalendarXFilled]: "61702",
  [Time.ClockAfternoonFilled]: "61703",
  [Time.ClockClockwiseFilled]: "61704",
  [Time.ClockCountdownFilled]: "61705",
  [Time.ClockCounterClockwiseFilled]: "61706",
  [Time.ClockFilled]: "61707",
  [Time.HourglassFilled]: "61708",
  [Time.HourglassHighFilled]: "61709",
  [Time.HourglassLowFilled]: "61710",
  [Time.HourglassMediumFilled]: "61711",
  [Time.HourglassSimpleFilled]: "61712",
  [Time.HourglassSimpleHighFilled]: "61713",
  [Time.HourglassSimpleLowFilled]: "61714",
  [Time.HourglassSimpleMediumFilled]: "61715",
  [Time.TimerFilled]: "61716",
  [Time.WatchFilled]: "61717",
};
