import Image from "next/image";
import Badge from "./ui/Badge";
import Cta from "./ui/Cta";
import { BadgeProps } from "./ui/Badge";
import { CtaProps } from "./ui/Cta";

interface TwoColCtaWithImageProps {
  image: string;
  accentImageLeft?: string;
  accentImageRight?: string;
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

export default function TwoColCtaWithImage({
  image,
  accentImageLeft,
  accentImageRight,
  altText,
  title,
  blurb,
  ctaProps,
  badgeProps,
  imageOverflow = false,
  textColor = "white",
  imageSide = "right",
  cardBackgroundColor = "light-gray"
}: TwoColCtaWithImageProps) {

  const cardBackgroundColorVariants: Record<string, string> = {
    "brand-dark-teal": "bg-brand-dark-teal",
    "brand-light-blue": "bg-brand-light-blue",
    "baby-blue": "bg-baby-blue",
    "brand-yellow": "bg-brand-yellow",
    "light-gray": "bg-light-gray",
    "brand-beige": "bg-brand-beige",
    "brand-teal": "bg-brand-teal",
    "brand-dark-beige": "bg-brand-dark-beige",
    "sky-blue-20": "bg-sky-blue-20",
  };

  const textColorVariants: Record<string, string> = {
    "brand-dark-teal": "text-brand-dark-teal",
    "brand-light-blue": "text-brand-light-blue",
    "baby-blue": "text-baby-blue",
    "brand-yellow": "text-brand-yellow",
    "brand-blue": "text-brand-blue",
    "light-gray": "text-light-gray",
    "brand-beige": "text-brand-blue",
    "white": "text-white",
    "black": "text-black",
  };

  const imageSideBorders: Record<string, string> = {
    "left": "rounded-r-2xl",
    "right": "rounded-l-2xl",
  };

  return (
    <div className={`flex items-center px-16 py-16 relative bg-light-gray`}>
      {accentImageLeft && (
        <Image src={accentImageLeft} alt="Accent Image" width={250} height={250} className="absolute -left-10 -top-10 z-10" />
      )}
      {accentImageRight && (
        <Image src={accentImageRight} alt="Accent Image" width={250} height={250} className="absolute -right-10 -top-10 z-10" />
      )}
      {imageSide === "left" && (
        <Image
          src={image}
          alt={altText}
          width={598} height={709}
          className="rounded-2xl z-10"
        />
      )}
      <div className={`flex flex-col gap-8 items-center justify-center px-16 py-20 relative 
        ${imageOverflow ? 'h-[650px]' : 'h-[709px]'} 
        ${imageSideBorders[imageSide]} 
        ${cardBackgroundColorVariants[cardBackgroundColor]} 
        ${imageOverflow === false && imageSide === "left" && '-ml-3'} 
        ${imageOverflow === false && imageSide === "right" && '-mr-3'}`
      }>
        <div className={`${textColorVariants[textColor]} `}>
          {badgeProps && (
            <Badge text={badgeProps?.text} textColor={badgeProps?.textColor} bgColor={badgeProps?.bgColor} />
          )}
          <h2 className="text-6xl font-semibold leading-snug">{title}</h2>
          <p className="font-satoshi mb-8">{blurb}</p>
          {ctaProps && (
            <Cta href={ctaProps.href} buttonText={ctaProps.buttonText} newTab={ctaProps.newTab} buttonColor={ctaProps.buttonColor} textColor={ctaProps.textColor} />
          )}
        </div>
      </div>
      {
        imageSide === "right" && (
          <Image
            src={image}
            alt={altText}
            width={598} height={709}
            className="rounded-2xl z-10"
          />
        )
      }
    </div >
  )
}