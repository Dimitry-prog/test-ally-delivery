import { InputHTMLAttributes, useState } from "react";
import { cn } from "@/shared/libs/utils";
import Button from "@/shared/components/ui/button";

type InputPasswordProps = {
  name?: string;
  label?: string;
  error?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputPassword = ({
  name,
  label,
  error,
  placeholder,
  disabled,
  className = "",
  ...restProps
}: InputPasswordProps) => {
  const [showPas, setShowPas] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={`input-${name}`} className="self-start">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={showPas ? "text" : "password"}
          id={`input-${name}`}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          className={cn(
            "w-full py-3 px-4 pr-9 border outline-none border-gray-300 transition-all duration-300 hover:border-gray-400 focus:border-gray-500 invalid:text-red-400 invalid:border-red-400",
            className,
          )}
          {...restProps}
        />

        <Button
          onClick={() => setShowPas(!showPas)}
          className="absolute right-1 top-[20%] border-none p-1"
        >
          {showPas ? "👁️" : "🙈"}
        </Button>
      </div>

      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
};

export default InputPassword;
