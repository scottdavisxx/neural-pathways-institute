import Cta from "./Cta";

export default function TwoCtasWithIntro() {
  return (
    <div>
      <h2>
        Because the Problem Isn&apos;t the Muscle; It&apos;s the Signal.
      </h2>
      {/* Consider Rich Text/WYSIWYG editor for this */}
      <p>
        Most practices focus on what they can see: tight muscles,
        inflamed tissues, misalignments, and pain points. NPI goes
        to the one place they overlook; the neurological source controlling it all.
      </p>
      <p>
        Our technique doesn&apos;t chase symptoms or offer temporary relief.
        It restores the actual brain-to-body pathways responsible for healing
        and function. NPI fixes the communication breakdown, not just the
        discomfort it creates.
      </p>
      <div>
        <Cta href="/" buttonText="Book an Appointment" newTab={false} buttonColor="brand-yellow" />
        <Cta href="/" buttonText="Become a Practitioner" newTab={false} buttonColor="brand-yellow" />
      </div>
    </div>
  )
}