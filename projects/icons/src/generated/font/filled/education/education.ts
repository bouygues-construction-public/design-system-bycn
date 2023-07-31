export type EducationId =
  | "book-bookmark-filled"
  | "book-filled"
  | "book-open-filled"
  | "book-open-text-filled"
  | "bookmark-filled"
  | "bookmark-simple-filled"
  | "bookmarks-filled"
  | "bookmarks-simple-filled"
  | "books-filled"
  | "certificate-filled"
  | "chalkboard-filled"
  | "chalkboard-simple-filled"
  | "chalkboard-teacher-filled"
  | "exam-filled"
  | "graduation-cap-filled"
  | "student-filled"
  | "video-filled";

export type EducationKey =
  | "BookBookmarkFilled"
  | "BookFilled"
  | "BookOpenFilled"
  | "BookOpenTextFilled"
  | "BookmarkFilled"
  | "BookmarkSimpleFilled"
  | "BookmarksFilled"
  | "BookmarksSimpleFilled"
  | "BooksFilled"
  | "CertificateFilled"
  | "ChalkboardFilled"
  | "ChalkboardSimpleFilled"
  | "ChalkboardTeacherFilled"
  | "ExamFilled"
  | "GraduationCapFilled"
  | "StudentFilled"
  | "VideoFilled";

export enum Education {
  BookBookmarkFilled = "book-bookmark-filled",
  BookFilled = "book-filled",
  BookOpenFilled = "book-open-filled",
  BookOpenTextFilled = "book-open-text-filled",
  BookmarkFilled = "bookmark-filled",
  BookmarkSimpleFilled = "bookmark-simple-filled",
  BookmarksFilled = "bookmarks-filled",
  BookmarksSimpleFilled = "bookmarks-simple-filled",
  BooksFilled = "books-filled",
  CertificateFilled = "certificate-filled",
  ChalkboardFilled = "chalkboard-filled",
  ChalkboardSimpleFilled = "chalkboard-simple-filled",
  ChalkboardTeacherFilled = "chalkboard-teacher-filled",
  ExamFilled = "exam-filled",
  GraduationCapFilled = "graduation-cap-filled",
  StudentFilled = "student-filled",
  VideoFilled = "video-filled",
}

export const EDUCATION_CODEPOINTS: { [key in Education]: string } = {
  [Education.BookBookmarkFilled]: "61697",
  [Education.BookFilled]: "61698",
  [Education.BookOpenFilled]: "61699",
  [Education.BookOpenTextFilled]: "61700",
  [Education.BookmarkFilled]: "61701",
  [Education.BookmarkSimpleFilled]: "61702",
  [Education.BookmarksFilled]: "61703",
  [Education.BookmarksSimpleFilled]: "61704",
  [Education.BooksFilled]: "61705",
  [Education.CertificateFilled]: "61706",
  [Education.ChalkboardFilled]: "61707",
  [Education.ChalkboardSimpleFilled]: "61708",
  [Education.ChalkboardTeacherFilled]: "61709",
  [Education.ExamFilled]: "61710",
  [Education.GraduationCapFilled]: "61711",
  [Education.StudentFilled]: "61712",
  [Education.VideoFilled]: "61713",
};
