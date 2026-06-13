export interface ModuleProgress {
  moduleId: string;
  title: string;
  status: string;
  progressPercentage: number;
  completedLessons: number;
  totalLessons: number;
}
