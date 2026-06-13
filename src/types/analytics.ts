export interface AnalyticsOverview {
  totalModules: number;
  totalAssignments: number;
  totalProgressRecords: number;
  completedCount: number;
  completionRate: number;
  avgQuizScore: number;
  reflectionSubmissionRate: number;
  totalDepartment: number;
  activeUsers: number;
  overdueTraining: number;
  completedPercentage: number;
  inProgressPercentage: number;
  notStartedPercentage: number;
}

export interface AnalyticsResponse {
  success: boolean;
  data: AnalyticsOverview;
}
