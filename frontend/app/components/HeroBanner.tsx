import { CtaProps } from "./Cta";
import Image from "next/image";
import Cta from "./Cta";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  cta: CtaProps[];
  image: string;
  bgImage?: string;
  altText: string;
}

export default function HeroBanner({ title, subtitle, cta, image, bgImage, altText }: HeroBannerProps) {
  return (
    <div className="flex items-center justify-between h-[630px] bg-brand-blue text-white pl-20 overflow-hidden relative mt-20">
      <div className="flex flex-col gap-8 w-[45%] mb-20">
        <h1 className="text-6xl text-white leading-snug">{title}</h1>
        <h2 className="text-2xl font-satoshi text-white leading-snug font-normal">{subtitle}</h2>
        <div className="flex gap-6">
          {cta.map((cta) => (
            <Cta key={cta.buttonText} href={cta.href} buttonText={cta.buttonText} newTab={cta.newTab} buttonColor={cta.buttonColor} />
          ))}
        </div>
      </div>
      <div className="h-full w-1/2 relative">
        <Image src={image} alt={altText} width={1000} height={1000} className="absolute right-0 bottom-0 z-10 max-h-full w-auto" />
        {bgImage && (
          <Image src={bgImage} alt={altText} width={1000} height={1000} className="absolute right-0 top-2" />
        )}
      </div>
    </div>
  )
}