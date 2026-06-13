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
}
