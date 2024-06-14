export interface User {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
}

export interface UsersState {
  users: User[];
  isLoading: boolean;
  error?: string | null;
}

export interface ErrorMsgResponse {
  message: string;
}
