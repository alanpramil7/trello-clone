import { z } from "zod";

export const CreateList = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be valid",
    })
    .min(3, {
      message: "Title is small",
    }),
  boardId: z.string(),
});
