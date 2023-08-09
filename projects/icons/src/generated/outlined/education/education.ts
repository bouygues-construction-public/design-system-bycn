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
  [Education.BookBookmarkOutlined]: "59082",
  [Education.BookOpenOutlined]: "59083",
  [Education.BookOpenTextOutlined]: "59084",
  [Education.BookOutlined]: "59085",
  [Education.BookmarkOutlined]: "59086",
  [Education.BookmarkSimpleOutlined]: "59087",
  [Education.BookmarksOutlined]: "59088",
  [Education.BookmarksSimpleOutlined]: "59089",
  [Education.BooksOutlined]: "59090",
  [Education.CertificateOutlined]: "59091",
  [Education.ChalkboardOutlined]: "59092",
  [Education.ChalkboardSimpleOutlined]: "59093",
  [Education.ChalkboardTeacherOutlined]: "59094",
  [Education.ExamOutlined]: "59095",
  [Education.GraduationCapOutlined]: "59096",
  [Education.StudentOutlined]: "59097",
  [Education.VideoOutlined]: "59098",
};
