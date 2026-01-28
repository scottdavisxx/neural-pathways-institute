import Image from "next/image";
import Badge from "./ui/Badge";

interface FullWidthVideoProps {
  badgeText: string;
  badgeTextColor: string;
  badgeBgColor: string;
  title: string;
  videoImage: string;
  videoAltText: string;
  blurb?: string;
}

export default function FullWidthVideo({ badgeText, badgeTextColor, badgeBgColor, title, videoImage, videoAltText, blurb }: FullWidthVideoProps) {
  return (
    <div className="flex flex-col gap-8 items-center justify-center px-24 py-10 bg-light-gray">
      <Badge text={badgeText} textColor={badgeTextColor} bgColor={badgeBgColor} />
      <h2 className="text-6xl font-semibold leading-snug text-brand-blue">{title}</h2>
      <Image className="rounded-4xl" src={videoImage} alt={videoAltText} width={1205} height={630} />
      {blurb && (
        <p className="w-11/12 text-center font-light whitespace-pre-line">{blurb}</p>
      )}
    </div>
  )
}