import Badge from "./Badge";
import HandOnHeartIcon from "./icons/hand-on-heart-icon";
import HealingIcon from "./icons/healing-icon";
import MagnifyingGlassIcon from "./icons/magnifying-glass-icon";

export default function ThreeColCards() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center px-24 py-16 bg-light-gray text-brand-blue">
      <Badge text="Why NPI is Different" textColor="dark-blue" bgColor="transparent" />
      <h2 className="text-6xl">Built to go Beyond the Cure</h2>
      <div className="flex gap-8">
        <div className="bg-brand-beige rounded-2xl flex flex-col items-center p-10 gap-6">
          <MagnifyingGlassIcon />
          <span className="text-3xl font-semibold">Treat the Source</span>
          <p className="text-xl font-satoshi text-center">We don&apos;t chase symptoms. NPI addresses the brain-to-body
            communication most methods never reach. Restoring control,
            function, and healing at the source. </p>
        </div>
        <div className="bg-brand-beige rounded-2xl flex flex-col items-center p-10 gap-6">
          <HandOnHeartIcon />
          <span className="text-3xl font-semibold">Non-Invasive</span>
          <p className="text-xl font-satoshi text-center">We don&apos;t chase symptoms. NPI addresses the brain-to-body
            communication most methods never reach. Restoring control,
            function, and healing at the source. </p>
        </div>
        <div className="bg-brand-beige rounded-2xl flex flex-col items-center p-10 gap-6">
          <HealingIcon />
          <span className="text-3xl font-semibold">Real Healing</span>
          <p className="text-xl font-satoshi text-center">We don&apos;t chase symptoms. NPI addresses the brain-to-body
            communication most methods never reach. Restoring control,
            function, and healing at the source. </p>
        </div>
      </div>
    </div>
  )
}