export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  isActive: boolean;
  badges: string[];
  createdAt: string;
  updatedAt: string;
  onboardingStatus?: string;
  tracking?: string;
  assignments?: string[];
  modules?: string[];
}
