export type QuestionType = 'MCQ' | 'INTEGER' | 'BOTH';
export type TestFormat = 'CHAPTER_WISE' | 'FULL_PAPER' | 'PRACTICE';
export type TestMode = 'TEST' | 'TEST_AND_LEARN';

export interface Chapter {
  id: string;
  name: string;
  totalQuestions: number;
}

export interface TestConfig {
  chapters: string[];
  format: TestFormat;
  questionType: QuestionType;
  mode: TestMode;
  breakLargeQuestions: boolean;
}

export interface UserProgress {
  strongTopics: string[];
  weakTopics: string[];
  testsCompleted: number;
  averageScore: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  progress: UserProgress;
}