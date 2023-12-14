import { z } from "zod";

export const CreateCard = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be valid",
    })
    .min(3, {
      message: "Title is invalidj",
    }),
  boardId: z.string(),
  listId: z.string(),
});
