export interface Assignment {
  _id: string;

  moduleId: {
    _id: string;
    title: string;
    status: string;
  };

  assignedTo: {
    _id: string;
    name: string;
    email: string;
  };

  department: {
    _id: string;
    name: string;
  };

  dueDate: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
