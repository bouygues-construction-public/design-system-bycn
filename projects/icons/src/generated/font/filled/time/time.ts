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
  [Time.AlarmFilled]: "58519",
  [Time.CalendarBlankFilled]: "58520",
  [Time.CalendarCheckFilled]: "58521",
  [Time.CalendarFilled]: "58522",
  [Time.CalendarPlusFilled]: "58523",
  [Time.CalendarXFilled]: "58524",
  [Time.ClockAfternoonFilled]: "58525",
  [Time.ClockClockwiseFilled]: "58526",
  [Time.ClockCountdownFilled]: "58527",
  [Time.ClockCounterClockwiseFilled]: "58528",
  [Time.ClockFilled]: "58529",
  [Time.HourglassFilled]: "58530",
  [Time.HourglassHighFilled]: "58531",
  [Time.HourglassLowFilled]: "58532",
  [Time.HourglassMediumFilled]: "58533",
  [Time.HourglassSimpleFilled]: "58534",
  [Time.HourglassSimpleHighFilled]: "58535",
  [Time.HourglassSimpleLowFilled]: "58536",
  [Time.HourglassSimpleMediumFilled]: "58537",
  [Time.TimerFilled]: "58538",
  [Time.WatchFilled]: "58539",
};
