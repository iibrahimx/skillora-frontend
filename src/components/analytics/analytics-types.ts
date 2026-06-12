export interface CompletionRateData {
  name: string;
  value: number;
  color: string;
}

export interface EngagementMetric {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  type: "time" | "sessions" | "interaction" | "clicks";
}

export interface EngagementChartData {
  date: string;
  clicks: number;
}

export interface QuizScoreData {
  range: string;
  count: number;
}

export interface SparklineData {
  value: number;
}

export interface IncompleteUser {
  id: string;
  name: string;
  email: string;
  lastActivity: string;
  progress: number;
}
