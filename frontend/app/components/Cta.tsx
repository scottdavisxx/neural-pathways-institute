import Link from "next/link";


export interface CtaProps {
  href: string;
  buttonText: string;
  newTab?: boolean;
  buttonColor: string;
  fill?: boolean;
}

export default function Cta({ href, buttonText, newTab, buttonColor = "brand-teal", fill = false }: CtaProps) {
  const colorVariants: Record<string, string> = {
    "brand-teal": "bg-brand-teal",
    "brand-blue": "bg-brand-blue",
    "brand-light-blue": "bg-brand-light-blue",
    "baby-blue": "bg-baby-blue",
    "brand-yellow": "bg-brand-yellow",
  };

  return (
    <Link target={newTab ? "_blank" : "_self"} href={href} className={`text-black text-xl text-center px-4 py-2 rounded-lg uppercase w-1/2 ${fill ? "w-1/2" : "w-fit px-6"} ${colorVariants[buttonColor] || "bg-brand-teal"}`}>
      {buttonText}
    </Link>
  );
}