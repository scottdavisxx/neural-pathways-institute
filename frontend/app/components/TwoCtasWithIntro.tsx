import Image from "next/image";
import Badge from "./ui/Badge";
import Cta from "./ui/Cta";

export default function TwoCtasWithIntro() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center px-64 py-16 bg-brand-light-blue text-brand-blue text-center relative overflow-visible">
      <Image src="/accent.png" alt="Accent" width={250} height={1000} className="absolute left-0 z-10" />
      <Badge text="Why it works" textColor="dark-blue" bgColor="transparent" />
      <h2 className="text-6xl font-semibold leading-snug">
        Because the Problem Isn&apos;t the Muscle; It&apos;s the Signal.
      </h2>
      {/* Consider Rich Text/WYSIWYG editor for this */}
      <p>
        Most practices focus on what they can see: tight muscles,
        inflamed tissues, misalignments, and pain points. NPI goes
        to the one place they overlook; the neurological source controlling it all...
      </p>
      <p>
        Our technique doesn&apos;t chase symptoms or offer temporary relief.
        It restores the actual brain-to-body pathways responsible for healing
        and function. NPI fixes the communication breakdown, not just the
        discomfort it creates.
      </p>
      <div className="flex gap-8">
        <Cta href="/" buttonText="Book an Appointment" newTab={false} buttonColor="brand-yellow" />
        <Cta href="/" buttonText="Become a Practitioner" newTab={false} buttonColor="brand-yellow" />
      </div>
    </div>
  )
}