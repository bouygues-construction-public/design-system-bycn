export type TimeId =
  | "alarm-outlined"
  | "calendar-blank-outlined"
  | "calendar-check-outlined"
  | "calendar-outlined"
  | "calendar-plus-outlined"
  | "calendar-x-outlined"
  | "clock-afternoon-outlined"
  | "clock-clockwise-outlined"
  | "clock-countdown-outlined"
  | "clock-counter-clockwise-outlined"
  | "clock-outlined"
  | "hourglass-high-outlined"
  | "hourglass-low-outlined"
  | "hourglass-medium-outlined"
  | "hourglass-outlined"
  | "hourglass-simple-high-outlined"
  | "hourglass-simple-low-outlined"
  | "hourglass-simple-medium-outlined"
  | "hourglass-simple-outlined"
  | "timer-outlined"
  | "watch-outlined";

export type TimeKey =
  | "AlarmOutlined"
  | "CalendarBlankOutlined"
  | "CalendarCheckOutlined"
  | "CalendarOutlined"
  | "CalendarPlusOutlined"
  | "CalendarXOutlined"
  | "ClockAfternoonOutlined"
  | "ClockClockwiseOutlined"
  | "ClockCountdownOutlined"
  | "ClockCounterClockwiseOutlined"
  | "ClockOutlined"
  | "HourglassHighOutlined"
  | "HourglassLowOutlined"
  | "HourglassMediumOutlined"
  | "HourglassOutlined"
  | "HourglassSimpleHighOutlined"
  | "HourglassSimpleLowOutlined"
  | "HourglassSimpleMediumOutlined"
  | "HourglassSimpleOutlined"
  | "TimerOutlined"
  | "WatchOutlined";

export enum Time {
  AlarmOutlined = "alarm-outlined",
  CalendarBlankOutlined = "calendar-blank-outlined",
  CalendarCheckOutlined = "calendar-check-outlined",
  CalendarOutlined = "calendar-outlined",
  CalendarPlusOutlined = "calendar-plus-outlined",
  CalendarXOutlined = "calendar-x-outlined",
  ClockAfternoonOutlined = "clock-afternoon-outlined",
  ClockClockwiseOutlined = "clock-clockwise-outlined",
  ClockCountdownOutlined = "clock-countdown-outlined",
  ClockCounterClockwiseOutlined = "clock-counter-clockwise-outlined",
  ClockOutlined = "clock-outlined",
  HourglassHighOutlined = "hourglass-high-outlined",
  HourglassLowOutlined = "hourglass-low-outlined",
  HourglassMediumOutlined = "hourglass-medium-outlined",
  HourglassOutlined = "hourglass-outlined",
  HourglassSimpleHighOutlined = "hourglass-simple-high-outlined",
  HourglassSimpleLowOutlined = "hourglass-simple-low-outlined",
  HourglassSimpleMediumOutlined = "hourglass-simple-medium-outlined",
  HourglassSimpleOutlined = "hourglass-simple-outlined",
  TimerOutlined = "timer-outlined",
  WatchOutlined = "watch-outlined",
}

export const TIME_CODEPOINTS: { [key in Time]: string } = {
  [Time.AlarmOutlined]: "61697",
  [Time.CalendarBlankOutlined]: "61698",
  [Time.CalendarCheckOutlined]: "61699",
  [Time.CalendarOutlined]: "61700",
  [Time.CalendarPlusOutlined]: "61701",
  [Time.CalendarXOutlined]: "61702",
  [Time.ClockAfternoonOutlined]: "61703",
  [Time.ClockClockwiseOutlined]: "61704",
  [Time.ClockCountdownOutlined]: "61705",
  [Time.ClockCounterClockwiseOutlined]: "61706",
  [Time.ClockOutlined]: "61707",
  [Time.HourglassHighOutlined]: "61708",
  [Time.HourglassLowOutlined]: "61709",
  [Time.HourglassMediumOutlined]: "61710",
  [Time.HourglassOutlined]: "61711",
  [Time.HourglassSimpleHighOutlined]: "61712",
  [Time.HourglassSimpleLowOutlined]: "61713",
  [Time.HourglassSimpleMediumOutlined]: "61714",
  [Time.HourglassSimpleOutlined]: "61715",
  [Time.TimerOutlined]: "61716",
  [Time.WatchOutlined]: "61717",
};
