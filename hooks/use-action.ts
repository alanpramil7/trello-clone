import { ActionState, FieldErrors } from "@/lib/create-safe-action";
import { useCallback, useState } from "react";

type Action<TInput, TOutput> = (
  data: TInput,
) => Promise<ActionState<TInput, TOutput>>;

interface UseActionProps<TOutput> {
  onSuccess?: (data: TOutput) => void;
  onError?: (error: string) => void;
  onComplete?: () => void;
}

export const useAction = <TInput, TOutput>(
  action: Action<TInput, TOutput>,
  options: UseActionProps<TOutput> = {},
) => {
  const [fieldErrors, setFieldErrors] = useState<
    FieldErrors<TInput> | undefined
  >(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<TOutput | undefined>(undefined);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const execute = useCallback(
    async (input: TInput) => {
      setIsloading(true);

      try {
        const result = await action(input);

        if (!result) {
          return null;
        }

        setFieldErrors(result.fieldErrors);

        if (result.error) {
          setError(result.error);
          options.onError?.(result.error);
        }

        if (result.data) {
          setData(result.data);
          options.onSuccess?.(result.data);
        }
      } finally {
        setIsloading(false);
        options.onComplete?.();
      }
    },
    [options, action],
  );

  return {
    execute,
    fieldErrors,
    error,
    data,
    isLoading,
  };
};
