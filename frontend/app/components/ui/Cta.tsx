import Link from "next/link";


export interface CtaProps {
  href: string;
  buttonText: string;
  newTab?: boolean;
  buttonColor: string;
  textColor?: string;
  fill?: boolean;
}

export default function Cta({ href, buttonText = "Learn More", newTab, buttonColor = "brand-teal", textColor = "brand-blue", fill = false }: CtaProps) {
  const colorVariants: Record<string, string> = {
    "brand-teal": "bg-brand-teal",
    "brand-blue": "bg-brand-blue",
    "brand-light-blue": "bg-brand-light-blue",
    "baby-blue": "bg-baby-blue",
    "brand-yellow": "bg-brand-yellow",
  };

  const textColorVariants: Record<string, string> = {
    "brand-blue": "text-brand-blue",
    "brand-light-blue": "text-brand-light-blue",
    "baby-blue": "text-baby-blue",
    "brand-teal": "text-brand-teal",
    "brand-yellow": "text-brand-yellow",
    "white": "text-white",
    "black": "text-black",
  };

  const bgClass = colorVariants[buttonColor] || "bg-brand-teal";
  const textClass = textColorVariants[textColor] || "text-brand-blue";

  return (
    <Link rel={newTab ? "noopener noreferrer" : undefined} target={newTab ? "_blank" : "_self"} href={href} className={`${textClass} text-xl text-center px-4 py-2 rounded-lg uppercase w-1/2 ${fill ? "w-1/2" : "w-fit px-6"} ${bgClass}`}>
      {buttonText}
    </Link>
  );
}