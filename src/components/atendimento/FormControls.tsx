import { type ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Choice({
  selected,
  onClick,
  children,
  className,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        "flex min-h-12 items-center justify-between gap-3 rounded-lg border px-4 py-3 text-left text-[0.95rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        selected
          ? "border-primary bg-accent text-primary"
          : "border-input bg-background text-foreground hover:border-lilac hover:bg-surface",
        className,
      )}
    >
      <span>{children}</span>
      {selected && <Check className="h-4 w-4 shrink-0" aria-hidden />}
    </button>
  );
}

export function ChoiceGrid({
  label,
  options,
  value,
  onChange,
  columns = 2,
  allowDeselect = true,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  columns?: 1 | 2;
  allowDeselect?: boolean;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn("grid gap-3", columns === 2 && "sm:grid-cols-2")}
    >
      {options.map((option) => (
        <Choice
          key={option}
          selected={value === option}
          onClick={() => {
            if (value === option) {
              if (allowDeselect) onChange("");
            } else {
              onChange(option);
            }
          }}
        >
          {option}
        </Choice>
      ))}
    </div>
  );
}

export function FieldWrap({
  id,
  label,
  optional,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean | undefined;
  error?: string | undefined;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label} {optional && <span className="font-normal text-muted-foreground">(opcional)</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
      {error && (
        <p id={`${id}-err`} className="mt-1 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export type TextFieldProps = {
  id: string;
  label: string;
  value?: string | undefined;
  defaultValue?: string | undefined;
  onChange?: ((value: string) => void) | undefined;
  onChangeEvent?:
    ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined;
  onBlur?: (() => void) | undefined;
  onBlurEvent?:
    ((event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined;
  error?: string | undefined;
  optional?: boolean | undefined;
  hint?: string | undefined;
  type?: "text" | "email" | "tel";
  textarea?: boolean | undefined;
  autoComplete?: string | undefined;
  maxLength?: number | undefined;
  inputMode?: "text" | "email" | "tel" | "numeric" | undefined;
};

export function TextField({
  id,
  label,
  value,
  defaultValue,
  onChange,
  onChangeEvent,
  onBlur,
  onBlurEvent,
  error,
  optional,
  hint,
  type = "text",
  textarea,
  autoComplete,
  maxLength,
  inputMode,
}: TextFieldProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange?.(event.target.value);
    onChangeEvent?.(event);
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onBlur?.();
    onBlurEvent?.(event);
  };
  const common = {
    id,
    name: id,
    ...(value !== undefined ? { value } : {}),
    ...(defaultValue !== undefined ? { defaultValue } : {}),
    "aria-invalid": !!error,
    "aria-describedby": error ? `${id}-err` : undefined,
    className: error ? "field field-invalid" : "field",
    onBlur: handleBlur,
    maxLength: maxLength ?? (textarea ? 1500 : 160),
    ...(autoComplete ? { autoComplete } : {}),
  };
  return (
    <FieldWrap id={id} label={label} optional={optional} error={error} {...(hint ? { hint } : {})}>
      {textarea ? (
        <textarea {...common} rows={5} onChange={handleChange} />
      ) : (
        <input
          {...common}
          type={type}
          {...(inputMode ? { inputMode } : {})}
          onChange={handleChange}
        />
      )}
    </FieldWrap>
  );
}
