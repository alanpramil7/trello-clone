import { z } from "zod";

export const UpdateList = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be valid",
    })
    .min(3, {
      message: "Title must be valid",
    }),
  id: z.string(),
  boardId: z.string(),
});
