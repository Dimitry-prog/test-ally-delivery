import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/shared/libs/utils";

type ButtonProps = {
  type?: "submit" | "button" | "reset" | undefined;
  children: ReactNode;
  href?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  type = "button",
  children,
  href,
  disabled,
  className,
  ...restProps
}: ButtonProps) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={cn(
            "p-2 w-fit hover:opacity-70 transition-all duration-30",
            className,
          )}
        >
          {children}
        </Link>
      ) : (
        <button
          type={type}
          disabled={disabled}
          className={cn(
            "px-4 py-2 w-fit border rounded-md hover:opacity-70 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          {...restProps}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
