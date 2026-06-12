export interface Module {
  _id: string;
  title: string;
  description: string;
  lessons: string[];
  totalLessons: number;
  reflectionQuestion: string;
  duration: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}
