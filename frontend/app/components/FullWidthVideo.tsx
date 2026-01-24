import Image from "next/image";
import Badge from "./Badge";

export default function FullWidthVideo() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center px-24 pb-16 bg-light-gray">
      <Badge text="Patient Results" textColor="dark-blue" bgColor="transparent" />
      <h2 className="text-6xl font-semibold leading-snug text-brand-blue">Proof that Healing is Possible</h2>
      <Image className="rounded-4xl" src="/fpo-video-1.jpg" alt="Full Width Video" width={1205} height={630} />
    </div>
  )
}