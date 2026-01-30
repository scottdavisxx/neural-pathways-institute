import Image from "next/image";
import Badge, { BadgeProps } from "./ui/Badge";
import Cta, { CtaProps } from "./ui/Cta";

interface CtaBannerProps {
  badge?: BadgeProps,
  title: string,
  textColor?: string,
  bgColor?: string,
  blurb: string,
  cta: CtaProps,
  accentImage?: string,
}

const textColorVariants: Record<string, string> = {
  "brand-blue": "text-brand-blue",
  "brand-dark-beige": "text-brand-dark-beige",
  "brand-beige": "text-brand-beige",
  "brand-light-blue": "text-brand-light-blue",
  "baby-blue": "text-baby-blue",
  "brand-yellow": "text-brand-yellow",
  "white": "text-white",
  "black": "text-black",
};

const bgColorVariants: Record<string, string> = {
  "brand-beige": "bg-brand-beige",
  "brand-dark-beige": "bg-brand-dark-beige",
  "brand-blue": "bg-brand-blue",
  "brand-light-blue": "bg-brand-light-blue",
  "baby-blue": "bg-baby-blue",
  "brand-yellow": "bg-brand-yellow",
  "white": "bg-white",
  "black": "bg-black",
};

export default function CtaBanner({ badge, title, textColor = "brand-blue", blurb, cta, accentImage, bgColor = "brand--dark-beige" }: CtaBannerProps) {
  return (
    <div className={`flex flex-col gap-8 items-center justify-center px-28 py-24 relative bg-brand-beige ${textColorVariants[textColor]} `}>
      {accentImage && (
        <Image src={accentImage} alt="Accent" width={250} height={1000} className="absolute left-0 z-10" />
      )}
      <div className={`flex flex-col gap-8 items-center text-center rounded-2xl py-16 ${bgColorVariants[bgColor]}`}>
        {badge && (
          <Badge text={badge.text} textColor={badge.textColor} bgColor={badge.bgColor} />
        )}
        <div className="max-w-9/12">
          <h2 className="text-6xl font-semibold leading-snug">
            {title}
          </h2>
          <p className="text-xl font-satoshi whitespace-pre-line">
            {blurb}
          </p>
        </div>
        {cta && (
          <Cta href={cta.href} buttonText={cta.buttonText} newTab={cta.newTab} buttonColor={cta.buttonColor} />
        )}
      </div>
    </div>
  )
}