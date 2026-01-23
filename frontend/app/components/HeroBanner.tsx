import { CtaProps } from "./Cta";
import Image from "next/image";
import Cta from "./Cta";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  cta: CtaProps[];
  image: string;
  altText: string;
}

export default function HeroBanner({ title, subtitle, cta, image, altText }: HeroBannerProps) {
  return (
    <div className="flex items-center justify-between h-[800px] bg-brand-blue text-white pl-20 overflow-visible">
      <div className="flex flex-col gap-8 w-1/2">
        <h1 className="text-6xl text-white leading-snug">{title}</h1>
        <h2 className="text-2xl font-satoshi text-white leading-snug font-normal">{subtitle}</h2>
        <div className="flex gap-6">
          {cta.map((cta) => (
            <Cta key={cta.buttonText} href={cta.href} buttonText={cta.buttonText} newTab={cta.newTab} buttonColor={cta.buttonColor} />
          ))}
        </div>
      </div>
      <Image src={image} alt={altText} width={1000} height={1000} className="absolute right-0 bottom-0 max-w-1/2 w-auto h-[650px] object-cover" />
    </div>
  )
}