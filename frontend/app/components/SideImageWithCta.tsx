import Image from "next/image";
import Cta from "./ui/Cta";
import Badge from "./ui/Badge";

interface SideImageWithCtaProps {
  image: string;
  altText: string;
}

export default function SideImageWithCta({ image, altText }: SideImageWithCtaProps) {
  return (
    <div className="flex items-center justify-between px-20 bg-light-gray text-brand-blue">
      <Image
        src={image}
        alt={altText}
        width={450}
        height={450}
        className="w-[45%] h-full object-cover py-16"
      />
      <div className="flex flex-col gap-8 w-1/2">
        <Badge text="Beyond the cure" textColor="dark-blue" bgColor="transparent" />
        <h2 className="text-6xl font-semibold">
          More Than a Technique. A turning Point.
        </h2>
        <p>
          Developed by Dr, Eric Rawlin, this breakthrouh techique resores the brain-to-body
          pathways that control how you move, feel, and function, unclocking results that
          traditional treamtnets often miss, Fro chronic pain to subtle everyday
          frustations, from infancts to adults, NPI gives people a safe, gentl,
          non-invasive way to reclaim thieir lives.
        </p>
        <Cta href="/" buttonText="Learn More" newTab={false} buttonColor="brand-teal" />
      </div>
    </div >
  )
}