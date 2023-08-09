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
  [Time.AlarmOutlined]: "59767",
  [Time.CalendarBlankOutlined]: "59768",
  [Time.CalendarCheckOutlined]: "59769",
  [Time.CalendarOutlined]: "59770",
  [Time.CalendarPlusOutlined]: "59771",
  [Time.CalendarXOutlined]: "59772",
  [Time.ClockAfternoonOutlined]: "59773",
  [Time.ClockClockwiseOutlined]: "59774",
  [Time.ClockCountdownOutlined]: "59775",
  [Time.ClockCounterClockwiseOutlined]: "59776",
  [Time.ClockOutlined]: "59777",
  [Time.HourglassHighOutlined]: "59778",
  [Time.HourglassLowOutlined]: "59779",
  [Time.HourglassMediumOutlined]: "59780",
  [Time.HourglassOutlined]: "59781",
  [Time.HourglassSimpleHighOutlined]: "59782",
  [Time.HourglassSimpleLowOutlined]: "59783",
  [Time.HourglassSimpleMediumOutlined]: "59784",
  [Time.HourglassSimpleOutlined]: "59785",
  [Time.TimerOutlined]: "59786",
  [Time.WatchOutlined]: "59787",
};
