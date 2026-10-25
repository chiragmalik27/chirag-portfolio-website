import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().email("Please provide a valid email address"),
  projectType: z.string().min(1, "Please select an area of interest"),
  budget: z.string().optional(),
  message: z.string().min(10, "Please share a brief description (at least 10 characters)").max(2000),
  honeypot: z.string().max(0, "Bot detected").optional()
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
