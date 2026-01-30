import AppointmentForm from "@/app/components/ui/AppointmentForm";
import Cta from "@/app/components/ui/Cta";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center mt-20 bg-brand-beige pt-10">
        <h1 className="text-6xl font-semibold leading-snug text-brand-blue">Take the Next Step</h1>
        <div className="flex gap-6">
          <Cta href="/" buttonText="Practitioner" newTab={false} buttonColor="brand-teal" />
          <Cta href="/" buttonText="Patient" newTab={false} buttonColor="brand-teal" />
        </div>
        <AppointmentForm />
      </div>
    </>
  )
}