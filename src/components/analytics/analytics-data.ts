import {
  CompletionRateData,
  EngagementChartData,
  EngagementMetric,
  IncompleteUser,
  QuizScoreData,
} from "./analytics-types";

export const completionData: CompletionRateData[] = [
  { name: "Completed", value: 1092, color: "#22c55e" },
  { name: "In Progress", value: 448, color: "#a3a3a3" },
  { name: "Not Started", value: 70, color: "#bbf7d0" },
];

export const engagementMetrics: EngagementMetric[] = [
  {
    title: "Average Time Spent",
    value: "43m",
    change: "10%",
    isPositive: true,
    type: "time",
  },
  {
    title: "Sessions",
    value: "1,175",
    change: "8%",
    isPositive: true,
    type: "sessions",
  },
  {
    title: "Interaction",
    value: "6,784",
    change: "14%",
    isPositive: true,
    type: "interaction",
  },
  {
    title: "Clicks",
    value: "14,500",
    change: "10%",
    isPositive: true,
    type: "clicks",
  },
];

export const engagementTimeline: EngagementChartData[] = [
  { date: "May 12", clicks: 200 },
  { date: "May 13", clicks: 600 },
  { date: "May 14", clicks: 1000 },
  { date: "May 15", clicks: 1000 },
  { date: "May 16", clicks: 1400 },
  { date: "May 17", clicks: 1350 },
  { date: "May 18", clicks: 1750 },
  { date: "May 19", clicks: 1400 },
];

export const quizPerformanceData: QuizScoreData[] = [
  { range: "0-20%", count: 140 },
  { range: "21-40%", count: 380 },
  { range: "41-60%", count: 476 },
  { range: "61-80%", count: 972 },
  { range: "81-100%", count: 602 },
];

export const sparklineScores = [
  { value: 30 },
  { value: 45 },
  { value: 25 },
  { value: 60 },
  { value: 50 },
  { value: 72 },
];
export const sparklineQuizzes = [
  { value: 20 },
  { value: 40 },
  { value: 15 },
  { value: 50 },
  { value: 30 },
  { value: 45 },
];
export const sparklinePassRate = [
  { value: 40 },
  { value: 20 },
  { value: 55 },
  { value: 35 },
  { value: 68 },
  { value: 50 },
];

export const incompleteUsers: IncompleteUser[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john5@example.com",
    lastActivity: "May 12, 2026",
    progress: 45,
  },
  {
    id: "2",
    name: "Sarah Davis",
    email: "sarah.d@example.com",
    lastActivity: "May 7, 2026",
    progress: 35,
  },
  {
    id: "3",
    name: "Emily Brow",
    email: "emily.b@example.com",
    lastActivity: "May 18, 2026",
    progress: 55,
  },
];
