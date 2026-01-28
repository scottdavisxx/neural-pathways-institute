import AccordionCard, { AccordionCardProps } from "./ui/AccordionCard";
import Badge from "./ui/Badge";
import Cta from "./ui/Cta";

interface AccordionCardsCtaProps {
  cards: AccordionCardProps[];
}

export default function AccordionCardsCta({ cards }: AccordionCardsCtaProps) {
  return (
    <div className="flex flex-col gap-8 items-center justify-center px-24 py-16 bg-brand-light-blue text-brand-blue">
      <Badge text="Commonly Treated Conditions" textColor="dark-blue" bgColor="transparent" />
      <div className="flex flex-col gap-8 w-8/12">
        <h2 className="text-6xl text-center">You Don&apos;t have to Live Around Your Symptoms</h2>
        <p className="text-xl font-satoshi text-center">
          If you see yourself here, know you&apos;re not alone.
          Our patients arrive feeling discouraged, unheard, and
          unsure what else to try. This is where their healing
          story begins to change.
        </p>
      </div>
      <Cta href="/" buttonText="Book an Appointment Today" newTab={false} buttonColor="brand-yellow" textColor="brand-blue" />
      <div className="flex flex-col w-full gap-8 relative">
        {cards.map((card) => (
          <AccordionCard key={card.title} {...card} />
        ))}
      </div>
    </div >
  )
}