import { IQuestion, ISubQuestion } from "../question/QuestionTypes";

export interface IExam {
  id: string;
  userId: string;
  examCode: string;
  startTime: string;
  endTime: string;
  isDeleted: boolean;
  isActive: boolean;
  isDone: boolean;
}

export interface IExamSkillStatus {
  id: string;
  examId: string;
  skillId: string;
  skill: {
    name: string;
    expiredTime: string;
  };
  startTime: string;
  endTime: string;
  order: number;
  status: "IN_PROGRESS" | "COMPLETED" | "NOT_STARTED";
}

export interface IExamSubQuestion extends ISubQuestion {
  selectedAnswerId?: string;
}

export interface IExamQuestion extends IQuestion {
  subQuestions?: IExamSubQuestion[];
  questionData?: string;
}

export interface IContinueExamResponse {
  exam: IExam;
  questions: Array<{
    examId: string;
    questionId: string;
    id: string;
    question: IExamQuestion;
  }>;
  skill: IExamSkillStatus;
}

export interface ISubmitSkillRequest {
  skillId: string;
  questions: IExamQuestion[];
}
