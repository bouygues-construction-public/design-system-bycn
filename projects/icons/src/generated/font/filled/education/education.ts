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
  [Education.BookBookmarkFilled]: "57834",
  [Education.BookFilled]: "57835",
  [Education.BookOpenFilled]: "57836",
  [Education.BookOpenTextFilled]: "57837",
  [Education.BookmarkFilled]: "57838",
  [Education.BookmarkSimpleFilled]: "57839",
  [Education.BookmarksFilled]: "57840",
  [Education.BookmarksSimpleFilled]: "57841",
  [Education.BooksFilled]: "57842",
  [Education.CertificateFilled]: "57843",
  [Education.ChalkboardFilled]: "57844",
  [Education.ChalkboardSimpleFilled]: "57845",
  [Education.ChalkboardTeacherFilled]: "57846",
  [Education.ExamFilled]: "57847",
  [Education.GraduationCapFilled]: "57848",
  [Education.StudentFilled]: "57849",
  [Education.VideoFilled]: "57850",
};
