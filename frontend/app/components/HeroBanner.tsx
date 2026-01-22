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
    <div className="flex items-center justify-between h-screen bg-brand-blue text-white pl-20">
      <div className="flex flex-col gap-8">
        <h1 className="text-6xl text-white">{title}</h1>
        <h2 className="text-2xl text-white">{subtitle}</h2>
        <div className="flex gap-4">
          {cta.map((cta) => (
            <Cta key={cta.href} href={cta.href} buttonText={cta.buttonText} newTab={cta.newTab} buttonColor={cta.buttonColor} />
          ))}
        </div>
      </div>
      <Image src={image} alt={altText} width={1000} height={1000} className="w-full h-full object-cover" />
    </div>
  )
}