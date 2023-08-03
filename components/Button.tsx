
import { MouseEventHandler } from "react";
import BlurredImage from "./BlurredImage";

type Props = {
  type?: string;
  leftIcon?: string;
  rightIcon?: string;
  title: string;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  bgColor?: string;
  textColor?: string;
};
const Button = ({
  type,
  leftIcon,
  rightIcon,
  title,
  handleClick,
  isSubmitting,
  bgColor,
  textColor
}: Props) => {
  return (
    <button
      //@ts-ignore
      type={type || "button"}
      disabled={isSubmitting}
      className={`${isSubmitting
        ? "bg-black/50"
        : "bg-primary-purple"} ${textColor
        ? textColor
        : "text-white"} flexCenter gap-3 px-4 py-3 rounded-xl text-sm font-medium max-md:w-full`}
      onClick={handleClick}
    >
      {leftIcon && <BlurredImage src={leftIcon} width={14} height={14} alt="left" />}
      {title}
      {rightIcon &&
        <BlurredImage src={rightIcon} width={14} height={14} alt="right" />}
    </button>
  );
};

export default Button;
