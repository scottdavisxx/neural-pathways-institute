import Image from "next/image";
import Badge from "./Badge";
import Cta from "./Cta";

export default function TwoColCtaWithImage() {
  return (
    <div className="bg-light-gray text-white px-10 py-10 relative h-[750px]">
      <Image src="/two-col-cta-accent.png" alt="Two Col CTA With Image" width={250} height={250} className="absolute -left-10 -top-10 z-10" />
      <div className="flex flex-col gap-8 items-start justify-center px-10 py-10 bg-brand-dark-teal rounded-2xl relative h-[95%]">
        <Image
          src="/fpo-two-col-cta.jpg"
          alt="Two Col CTA With Image"
          width={598} height={709}
          className="absolute right-0 rounded-2xl" />
        <div className="w-6/12">
          <Badge text="For Practitioners" textColor="white" bgColor="transparent" />
          <h2 className="text-6xl font-semibold leading-snug">The Future of Clinical Practice</h2>
          <p className="font-satoshi mb-8">NPI isn&apos;t only transforming the lives of patients;
            reshaping the future of practitioners. Instead of memorizing protocols that crumble
            in real-world practice, clinicians learn a mastery-level skill that elevates their
            confidence, strengthens their reputation, and grows their practice through undeniable
            patient success.</p>
          <Cta href="#" buttonText="Start Your Journey" newTab={false} buttonColor="brand-yellow" textColor="black" />
        </div>
      </div>
    </div>
  )
}