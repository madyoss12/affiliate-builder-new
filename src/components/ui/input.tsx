import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Props for the Input component.
 *
 * @extends React.InputHTMLAttributes<HTMLInputElement>
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Additional class names to apply to the input */
  className?: string;
  /** Type of the input (e.g., 'text', 'password', 'email', etc.) */
  type?: string;
  /** Reference to the input element */
  ref?: React.Ref<HTMLInputElement>;
}

/**
 * A customizable input component.
 *
 * @param props InputProps
 * @param ref React.Ref<HTMLInputElement>
 * @returns JSX.Element
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
