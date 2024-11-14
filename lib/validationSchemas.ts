// utils/validationSchemas.ts

import { z } from "zod";

export const loginSchema = z.object({
  identifier: z.string().min(1, "Identifier is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerStudentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  studentNumber: z.string().min(1, "Student number is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterStudentInput = z.infer<typeof registerStudentSchema>;
