import Cta from "./Cta";

export default function AppointmentForm() {
  return (
    <div className="relative h-[700px] w-full bg-brand-beige">
      {/* Light Blue */}
      <div className="flex flex-col gap-2 absolute bottom-20 left-32 bg-brand-light-blue rounded-2xl p-6 text-brand-blue">
        <div className="w-1/4">
          <span className="text-4xl font-semibold">Book an Appointment at Neural Pathway Institute</span>
          <p className="text-xl font-satoshi"> Whether you&apos;re looking for answers,
            exploring a new path,or simply curious if
            NPI is the right fit, you&apos;re in the
            right place.
          </p>
        </div>
      </div>
      {/* Dark Blue */}
      <form className="flex flex-col absolute top-20 right-32 bg-baby-blue rounded-2xl p-6 w-7/12">
        <div className="flex">
          <label htmlFor="first-name">First Name</label>
          <input type="text" placeholder="First Name" />
          <label htmlFor="last-name">Last Name</label>
          <input type="text" placeholder="Last Name" />
        </div>
        <label htmlFor="inquiry">Inquiry</label>
        <textarea placeholder="Inquiry" />
        <Cta href="/" buttonText="Submit" newTab={false} buttonColor="brand-yellow" />
      </form>
    </div>
  )
}