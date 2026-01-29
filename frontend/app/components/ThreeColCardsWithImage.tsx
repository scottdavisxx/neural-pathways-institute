import Badge from "./ui/Badge";
import Cta from "./ui/Cta";
import ImageCard from "./ui/ImageCard";

export default function ThreeColCardsWithImage() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center px-24 py-16 bg-light-gray text-brand-blue">
      <Badge text="In Their Own Words" textColor="dark-blue" bgColor="transparent" />
      <h2 className="text-6xl text-center">Practitioners Who Made the Shift</h2>
      <p className="text-xl font-satoshi text-center max-w-[45%]">If you&apos;re ready to deepen your understanding,
        elevate your outcomes, and practice with greater confidence, the next step is simple.
      </p>
      <div className="flex gap-8">
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
      <Cta href="/" buttonText="Start Your NPI Journey" newTab={false} buttonColor="brand-teal" />
    </div>
  )
}