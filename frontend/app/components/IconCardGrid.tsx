import Badge from "./ui/Badge";
import Cta from "./ui/Cta";
import IconCard from "./ui/IconCard";

export default function IconCardGrid() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center px-20 py-16 bg-light-gray text-brand-blue">
      <Badge text="A New Way Forward" textColor="dark-blue" bgColor="transparent" />
      <h2 className="text-6xl">What Changes When You Add NPI</h2>
      <Cta href="/" buttonText="Join the NPI Network" newTab={false} buttonColor="brand-yellow" />
      <div className="flex gap-6 flex-wrap justify-center">
        {/* Card */}
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
      </div>
    </div>
  )
}