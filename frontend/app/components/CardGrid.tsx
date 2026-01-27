import Image from "next/image";
import Badge from "./Badge";

export default function CardGrid() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center px-24 py-16 bg-light-gray text-brand-blue">
      <Badge text="Why NPI is Different" textColor="dark-blue" bgColor="transparent" />
      <h2 className="text-6xl">The Team Behind the Breakthrough</h2>
      <div className="flex gap-12 flex-wrap justify-between">
        {/* Card */}
        <div className="flex rounded-2xl bg-brand-light-blue max-w-[47%] min-w-[500px]">
          <Image className="object-cover" src="/fpo-hero-banner-1.png" alt="Dr. Eric Rawlin" width={263} height={333} />
          <div className="flex flex-col gap-4 bg-baby-blue rounded-r-2xl p-8">
            <span className="text-2xl">Dr. Eric Rawlin</span>
            <p className="font-satoshi text-xl">Founder of Neural Pathway Integration Dr. Rawlin helps
              patients restore full-body function by reconnecting brain
              and body pathways for lasting healing
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="flex rounded-2xl bg-brand-light-blue max-w-[47%] min-w-[500px]">
          <Image className="object-cover" src="/fpo-hero-banner-1.png" alt="Dr. Eric Rawlin" width={263} height={333} />
          <div className="flex flex-col gap-4 bg-baby-blue rounded-r-2xl p-8">
            <span className="text-2xl">Dr. Eric Rawlin</span>
            <p className="font-satoshi text-xl">Founder of Neural Pathway Integration Dr. Rawlin helps
              patients restore full-body function by reconnecting brain
              and body pathways for lasting healing
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="flex rounded-2xl bg-brand-light-blue max-w-[47%] min-w-[500px]">
          <Image className="object-cover" src="/fpo-hero-banner-1.png" alt="Dr. Eric Rawlin" width={263} height={333} />
          <div className="flex flex-col gap-4 bg-baby-blue rounded-r-2xl p-8">
            <span className="text-2xl">Dr. Eric Rawlin</span>
            <p className="font-satoshi text-xl">Founder of Neural Pathway Integration Dr. Rawlin helps
              patients restore full-body function by reconnecting brain
              and body pathways for lasting healing
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="flex rounded-2xl bg-brand-light-blue max-w-[47%] min-w-[500px]">
          <Image className="object-cover" src="/fpo-hero-banner-1.png" alt="Dr. Eric Rawlin" width={263} height={333} />
          <div className="flex flex-col gap-4 bg-baby-blue rounded-r-2xl p-8">
            <span className="text-2xl">Dr. Eric Rawlin</span>
            <p className="font-satoshi text-xl">Founder of Neural Pathway Integration Dr. Rawlin helps
              patients restore full-body function by reconnecting brain
              and body pathways for lasting healing
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}