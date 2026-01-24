import Image from "next/image";
import Cta from "./Cta";

export default function TwoColCardsWithCta() {
  return (
    <div className="flex gap-8 items-center justify-between px-24 py-16 bg-light-gray">
      <div className="flex flex-col text-center items-center rounded-2xl overflow-visible relative">
        <div className="bg-brand-light-blue rounded-2xl overflow-visible w-full block absolute h-[500px] translate-y-16"></div>
        <Image className="z-8" src="/twoColCardsCta-fpo-1.png" alt="Two Col Cards With CTA 1" width={500} height={500} />
        <div className="bg-baby-blue rounded-2xl flex flex-col items-center gap-4 px-12 py-8 z-10">
          <span className="uppercase text-2xl">Patients</span>
          <h4 className="text-4xl">Get Back to Living, Not managing Symptoms</h4>
          <p>Non-invasive neurological care that restores the
            brain-to-body pathways and helps you finally
            experience real chang.
          </p>
          <Cta href="/" buttonText="Learn More" newTab={false} buttonColor="brand-blue" textColor="white" />
        </div>
      </div>
      <div className="flex flex-col text-center items-center rounded-2xl overflow-visible relative">
        <div className="bg-brand-light-blue rounded-2xl overflow-visible w-full block absolute h-[500px] translate-y-16"></div>
        <Image className="z-10" src="/twoColCardsCta-fpo-1.png" alt="Two Col Cards With CTA 1" width={500} height={500} />
        <div className="bg-baby-blue rounded-2xl flex flex-col items-center gap-4 px-12 py-8 z-10">
          <span className="uppercase text-2xl">Patients</span>
          <h4 className="text-4xl">Get Back to Living, Not managing Symptoms</h4>
          <p>Non-invasive neurological care that restores the
            brain-to-body pathways and helps you finally
            experience real chang.
          </p>
          <Cta href="/" buttonText="Learn More" newTab={false} buttonColor="brand-blue" textColor="white" />
        </div>
      </div>
    </div>
  )
}