export interface BadgeProps {
  text: string;
  textColor: string;
  bgColor: string;
}

export default function Badge({ text, textColor, bgColor }: BadgeProps) {
  const textColorVariants: Record<string, string> = {
    "dark-blue": "text-brand-blue",
    "brand-blue": "text-brand-blue",
    "brand-teal": "text-brand-teal",
    "brand-yellow": "text-brand-yellow",
    "white": "text-white",
    "black": "text-black",
  };

  const bgColorVariants: Record<string, string> = {
    "transparent": "bg-transparent",
    "brand-blue": "bg-brand-blue",
    "brand-light-blue": "bg-brand-light-blue",
    "baby-blue": "bg-baby-blue",
    "brand-teal": "bg-brand-teal",
    "brand-yellow": "bg-brand-yellow",
    "white": "bg-white",
  };

  const borderColorVariants: Record<string, string> = {
    "dark-blue": "border-brand-blue",
    "brand-blue": "border-brand-blue",
    "brand-teal": "border-brand-teal",
    "brand-yellow": "border-brand-yellow",
    "white": "border-white",
    "black": "border-black",
  };

  const textClass = textColorVariants[textColor] || "text-black";
  const bgClass = bgColorVariants[bgColor] || "bg-white";
  const borderClass = bgColor === "transparent" ? `border-2 ${borderColorVariants[textColor] || "border-black"}` : "";

  return (
    <div className={`text-xl text-center px-6 py-2 uppercase w-fit rounded-2xl ${textClass} ${bgClass} ${borderClass}`}>
      {text}
    </div>
  )
}