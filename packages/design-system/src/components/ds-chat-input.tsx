"use client";

import DsButton from "@workspace/design-system/components/ds-button";
import { Textarea } from "@workspace/ui/components/textarea";
import { useCallback, useRef, useState } from "react";

export interface DsChatInputProps {
  /** Whether the input and submit button are disabled */
  disabled?: boolean;
  /** Called with the trimmed message when submitted */
  onSubmit?: (value: string) => void;
  /** Textarea placeholder */
  placeholder?: string;
  /** Label for the submit button */
  submitLabel?: string;
}

/**
 * Chat / comment input with a multiline textarea and submit button.
 */
export default function DsChatInput({
  placeholder = "Leave a comment…",
  submitLabel = "Submit",
  disabled = false,
  onSubmit,
}: DsChatInputProps) {
  const [value, setValue] = useState("");
  const trimmedValue = value.trim();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const canSubmit = trimmedValue.length > 0 && !disabled;

  const handleSubmit = useCallback(() => {
    if (!trimmedValue) {
      return;
    }
    onSubmit?.(trimmedValue);
    setValue("");
    textareaRef.current?.focus();
  }, [trimmedValue, onSubmit]);

  return (
    <div className="flex flex-col gap-3">
      <Textarea
        className="min-h-30 resize-none border-foreground-muted"
        disabled={disabled}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        ref={textareaRef}
        value={value}
      />
      <div className="flex justify-end">
        <DsButton
          className="bg-(--chat-send-button) px-5 text-foreground/60 hover:bg-(--chat-send-button)/80"
          disabled={!canSubmit}
          onClick={handleSubmit}
          size="lg"
          type="button"
          variant="secondary"
        >
          {submitLabel}
        </DsButton>
      </div>
    </div>
  );
}
