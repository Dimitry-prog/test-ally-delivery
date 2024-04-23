import { InputHTMLAttributes } from "react";
import { cn } from "@/shared/libs/utils";

type InputProps = {
  name?: string;
  type?: string;
  label?: string;
  error?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  type = "text",
  name,
  label,
  error,
  placeholder,
  disabled,
  className = "",
  ...restProps
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={`input-${name}`} className="self-start">
          {label}
        </label>
      )}

      <input
        type={type}
        id={`input-${name}`}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        className={cn(
          "w-full py-3 px-4 border outline-none border-gray-300 transition-all duration-300 hover:border-gray-400 focus:border-gray-500 invalid:text-red-400 invalid:border-red-400",
          className,
        )}
        {...restProps}
      />

      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
};

export default Input;
