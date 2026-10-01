import { api } from "../lib/api";
import type { LoginFormData } from "../schemas/auth.schema";
import type { LoginResponse } from "../types/auth";

export const loginUser = async (
  credentials: LoginFormData,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/auth/login", {
    username: credentials.username,
    password: credentials.password,
  });

  return response.data;
};
