import Badge from "./ui/Badge";
import Cta from "./ui/Cta";
import NumberCard from "./ui/NumberCard";

export default function NumberCardGrid() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center px-20 py-16 bg-light-gray text-brand-blue">
      <Badge text="Step-by-Step" textColor="dark-blue" bgColor="transparent" />
      <h2 className="text-6xl">Your Path to Becoming an NPI Practitioner</h2>
      <div className="flex flex-wrap justify-center gap-10">
        <NumberCard />
        <NumberCard />
        <NumberCard />
        <NumberCard />
        <NumberCard />
        <NumberCard />
      </div>
      <Cta href="/" buttonText="Get Started Today" newTab={false} buttonColor="brand-yellow" />
    </div>
  )
}