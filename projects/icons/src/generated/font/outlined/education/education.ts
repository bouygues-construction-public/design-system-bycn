export type EducationId =
  | "book-bookmark-outlined"
  | "book-open-outlined"
  | "book-open-text-outlined"
  | "book-outlined"
  | "bookmark-outlined"
  | "bookmark-simple-outlined"
  | "bookmarks-outlined"
  | "bookmarks-simple-outlined"
  | "books-outlined"
  | "certificate-outlined"
  | "chalkboard-outlined"
  | "chalkboard-simple-outlined"
  | "chalkboard-teacher-outlined"
  | "exam-outlined"
  | "graduation-cap-outlined"
  | "student-outlined"
  | "video-outlined";

export type EducationKey =
  | "BookBookmarkOutlined"
  | "BookOpenOutlined"
  | "BookOpenTextOutlined"
  | "BookOutlined"
  | "BookmarkOutlined"
  | "BookmarkSimpleOutlined"
  | "BookmarksOutlined"
  | "BookmarksSimpleOutlined"
  | "BooksOutlined"
  | "CertificateOutlined"
  | "ChalkboardOutlined"
  | "ChalkboardSimpleOutlined"
  | "ChalkboardTeacherOutlined"
  | "ExamOutlined"
  | "GraduationCapOutlined"
  | "StudentOutlined"
  | "VideoOutlined";

export enum Education {
  BookBookmarkOutlined = "book-bookmark-outlined",
  BookOpenOutlined = "book-open-outlined",
  BookOpenTextOutlined = "book-open-text-outlined",
  BookOutlined = "book-outlined",
  BookmarkOutlined = "bookmark-outlined",
  BookmarkSimpleOutlined = "bookmark-simple-outlined",
  BookmarksOutlined = "bookmarks-outlined",
  BookmarksSimpleOutlined = "bookmarks-simple-outlined",
  BooksOutlined = "books-outlined",
  CertificateOutlined = "certificate-outlined",
  ChalkboardOutlined = "chalkboard-outlined",
  ChalkboardSimpleOutlined = "chalkboard-simple-outlined",
  ChalkboardTeacherOutlined = "chalkboard-teacher-outlined",
  ExamOutlined = "exam-outlined",
  GraduationCapOutlined = "graduation-cap-outlined",
  StudentOutlined = "student-outlined",
  VideoOutlined = "video-outlined",
}

export const EDUCATION_CODEPOINTS: { [key in Education]: string } = {
  [Education.BookBookmarkOutlined]: "61697",
  [Education.BookOpenOutlined]: "61698",
  [Education.BookOpenTextOutlined]: "61699",
  [Education.BookOutlined]: "61700",
  [Education.BookmarkOutlined]: "61701",
  [Education.BookmarkSimpleOutlined]: "61702",
  [Education.BookmarksOutlined]: "61703",
  [Education.BookmarksSimpleOutlined]: "61704",
  [Education.BooksOutlined]: "61705",
  [Education.CertificateOutlined]: "61706",
  [Education.ChalkboardOutlined]: "61707",
  [Education.ChalkboardSimpleOutlined]: "61708",
  [Education.ChalkboardTeacherOutlined]: "61709",
  [Education.ExamOutlined]: "61710",
  [Education.GraduationCapOutlined]: "61711",
  [Education.StudentOutlined]: "61712",
  [Education.VideoOutlined]: "61713",
};
