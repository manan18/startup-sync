import React from "react";
import clsx from "clsx";

interface IconButtonProps {
  icon: React.ReactNode;
  variant?: "pill" | "rounded";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className,
  disabled,
  variant,
}) => {
  return (
    <button
      className={clsx(
        "p-2 hover:bg-[#f1f1f1] transition-all duration-150 disabled:text-gray-500 dark:hover:text-black disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:cursor-not-allowed",
        {
          "rounded-full": variant === "pill",
          "rounded-md": variant === "rounded",
        },
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};

export default IconButton;
