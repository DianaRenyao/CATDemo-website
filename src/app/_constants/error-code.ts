export enum ErrorCode {
  UNKNOWN = 0,
  RAW_HTTP_ERROR = 1,
  ASSERTION = 2,
  UNAUTHENTICATED = 10001,
  FORBIDDEN = 10002,
  POST_SESSION_INVALID_USERNAME_OR_PASSWORD = 20201,
  GET_STUDENT_NO_SUCH_STUDENT = 30101,
  POST_STUDENT_USERNAME_ALREADY_EXISTS = 30201,
  GET_NOTICE_NO_SUCH_NOTICE = 40101,
  PUT_NOTICE_NO_SUCH_NOTICE = 40302,
  DELETE_NOTICE_NO_SUCH_NOTICE = 40403,
  GET_TEACHER_NO_SUCH_TEACHER = 50101,
  POST_TEACHER_USERNAME_ALREADY_EXISTS = 50201,
  GET_COURSE_NO_SUCH_COURSE = 60101,
  GET_APPLICATION_NO_SUCH_COURSE = 80101,
  GET_APPLICATION_NO_SUCH_APPLICATION = 80102,
  GET_APPLICATION_NO_SUCH_USER = 80103,
  POST_APPLICATION_NO_SUCH_COURSE = 80201,
  POST_APPLICATION_COURSE_CAN_NOT_BE_APPLIED = 80202,
  POST_APPLICATION_ALREADY_APPLIED = 80203,
  PUT_APPLICATION_NO_SUCH_APPLICATION = 80301,
  PUT_APPLICATION_CAN_NOT_REJECT_APPLICATION_ALREADY_PASSED = 80302,
  POST_CHAPTER_CAN_NOT_BE_INSERTED = 90201,
  POST_CHAPTER_COURSE_DO_NOT_EXISTS = 90202,
  PUT_CHAPTER_NO_SUCH_CHAPTER = 90301,
  DELETE_CHAPTER_COURSE_DO_NOT_EXISTS = 90401,
  POST_SECTION_CAN_NOT_BE_INSERTED = 100201,
  POST_SECTION_CHAPTER_DO_NOT_EXISTS = 100202,
  POST_SECTION_COURSE_DO_NOT_EXISTS = 100202,
  PUT_SECTION_NO_SUCH_SECTION = 100301,
  PUT_SECTION_NO_SUCH_CHAPTER = 100302,
  DELETE_SECTION_COURSE_DO_NOT_EXISTS = 100401,
  POST_STATIC_FILE_FAILED_TO_STORE = 110201,
  POST_STATIC_FILE_FAILED_TO_INSERT_DB = 110202,
  POST_STATIC_FILE_UNACCEPTABLE_FILE_TYPE = 110203,
  GET_STATIC_FILE_FAILED_TO_DOWNLOAD_FILE = 110101,
  DELETE_STATIC_FILE_NO_SUCH_FILE = 110401,
  DELETE_STATIC_FILE_FAILED_DELETE = 110402,
  PUT_SECTION_FILE_NO_SUCH_COURSE = 120301,
  PUT_SECTION_FILE_NO_SUCH_SECTION = 120302,
  PUT_SECTION_FILE_NO_SUCH_FILE = 120303,
  DELETE_SECTION_FILE_NO_SUCH_COURSE = 120401,
  DELETE_SECTION_FILE_NO_SUCH_FILE = 120402,
  GET_EXAM_STUDENT_NOT_ALLOW = 130102,
  GET_EXAM_COURSE_DO_NOT_EXISTS = 130103,
  POST_EXAM_COURSE_DO_NOT_EXISTS = 130301,
  POST_EXAM_CHAPTER_DO_NOT_EXISTS = 130302,
  POST_EXAM_ID_WRONG = 130303,
  POST_EXAM_SCORE_ALREADY_EXISTS = 130304,
  POST_EXPERIMENT_NO_SUCH_COURSE = 140201,
  POST_EXPERIMENT_FILE_NO_SUCH_EXPERIMENT = 140202,
  POST_EXPERIMENT_FILE_NO_SUCH_FILE = 140203,
}