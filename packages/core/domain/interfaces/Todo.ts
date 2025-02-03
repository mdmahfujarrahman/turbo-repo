export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}


export interface TodoFilterTypes {
  id: number,
  name: string
}

export interface TodoSummary{
  total: number,
  completed: number,
  pending: number
}