"use client";

import { KeyboardEventHandler, forwardRef } from "react";
import { useFormStatus } from "react-dom";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { FormErrors } from "./form-errors";

interface FormTextAreaProps {
  id: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[]>;
  className?: string;
  onClick?: () => void;
  onBlur?: () => void;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement> | undefined;
  defaultValue?: string;
}

export const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  (
    {
      id,
      label,
      placeholder,
      required,
      disabled,
      errors,
      className,
      onClick,
      onBlur,
      onKeyDown,
      defaultValue,
    },
    ref,
  ) => {
    const { pending } = useFormStatus();

    return (
      <div className="space-y-2 w-full">
        <div className="space-y-1 w-full">
          (label ? (
          <Label
            htmlFor={id}
            className="font-semibold text-xs text-neutral-700"
          >
            {label}
          </Label>
          ): null)
          <Textarea
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            onClick={onClick}
            ref={ref}
            required={required}
            placeholder={placeholder}
            name={id}
            id={id}
            disabled={pending || disabled}
            className={cn(
              "resize-none focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 shadow-sm outline-none",
              className,
            )}
            aria-describedby={`${id}-error`}
            defaultValue={defaultValue}
          />
        </div>
        <FormErrors id={id} errors={errors} />
      </div>
    );
  },
);

FormTextArea.displayName = "FormTextArea";
