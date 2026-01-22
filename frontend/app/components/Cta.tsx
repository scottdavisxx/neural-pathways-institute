import Link from "next/link";


export interface CtaProps {
  href: string;
  buttonText: string;
  newTab?: boolean;
  buttonColor: string;
}

export default function Cta({ href, buttonText, newTab, buttonColor = "brand-teal" }: CtaProps) {

  const buttonColorClass = `bg-${buttonColor}`;
  return (
    <Link target={newTab ? "_blank" : "_self"} href={href} className={`text-black text-xl px-4 py-2 rounded-sm ${buttonColorClass}`}>
      {buttonText}
    </Link>
  );
}