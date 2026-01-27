import Image from "next/image";
import Badge from "./Badge";
import Cta from "./Cta";
import { BadgeProps } from "./Badge";
import { CtaProps } from "./Cta";

interface TwoColCtaWithImageProps {
  image: string;
  accentImage?: string;
  altText: string;
  badgeText: string;
  title: string;
  blurb: string;
  textColor?: string;
  ctaProps?: CtaProps;
  badgeProps?: BadgeProps;
  imageOverflow?: boolean
  imageSide?: "left" | "right";
  cardBackgroundColor?: string;
}

export default function TwoColCtaWithImage({ image, accentImage, altText, badgeText, title, blurb, ctaProps, badgeProps, imageOverflow, textColor = "white", imageSide, cardBackgroundColor = "light-gray" }: TwoColCtaWithImageProps) {

  const cardBackgroundColorVariants: Record<string, string> = {
    "brand-dark-teal": "bg-brand-dark-teal",
    "brand-light-blue": "bg-brand-light-blue",
    "baby-blue": "bg-baby-blue",
    "brand-yellow": "bg-brand-yellow",
    "light-gray": "bg-light-gray",
  };

  const textColorVariants: Record<string, string> = {
    "brand-dark-teal": "text-brand-dark-teal",
    "brand-light-blue": "text-brand-light-blue",
    "baby-blue": "text-baby-blue",
    "brand-yellow": "text-brand-yellow",
    "light-gray": "text-light-gray",
    "white": "text-white",
    "black": "text-black",
  };

  return (
    <div className={`flex items-center px-16 py-16 relative ${cardBackgroundColorVariants[cardBackgroundColor]}`}>
      {accentImage && (
        <Image src={accentImage} alt="Two Col CTA With Image" width={250} height={250} className="absolute -left-10 -top-10 z-10" />
      )}
      {imageSide === "left" && (
        <Image
          src={image}
          alt={altText}
          width={598} height={709}
          className="rounded-2xl"
        />
      )}
      <div className={`flex flex-col gap-8 items-center justify-center px-10 py-20 bg-brand-dark-teal rounded-l-2xl relative h-[650px] ${textColorVariants[textColor]}`}>
        <div className="">
          <Badge text="For Practitioners" textColor="white" bgColor="transparent" />
          <h2 className="text-6xl font-semibold leading-snug">{title}</h2>
          <p className="font-satoshi mb-8">{blurb}</p>
          {ctaProps && (
            <Cta href={ctaProps.href} buttonText={ctaProps.buttonText} newTab={ctaProps.newTab} buttonColor={ctaProps.buttonColor} textColor={ctaProps.textColor} />
          )}
        </div>
      </div>
      {imageSide === "right" && (
        <Image
          src={image}
          alt={altText}
          width={598} height={709}
          className="rounded-2xl"
        />
      )}
    </div>
  )
}