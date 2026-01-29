import Image from "next/image";
import Badge from "./ui/Badge";
import Cta from "./ui/Cta";

export default function CtaBanner() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center px-28 py-24 bg-brand-beige text-brand-blue relative">
      <Image src="/fpo-cta-banner-accent.png" alt="Accent" width={250} height={1000} className="absolute left-0 z-10" />
      <div className="flex flex-col gap-8 items-center text-center bg-brand-dark-beige rounded-2xl py-16 px-28">
        <Badge text="For Practitioners" textColor="dark-blue" bgColor="transparent" />
        <h2 className="text-6xl font-semibold">
          Is NPI Right for Your Practice?
        </h2>
        <p className="text-xl font-satoshi text-black">
          NPI isn&apos;t only transforming the lives of patients;
          reshaping the future of practitioners. Instead of memorizing
          protocols that crumble in real-world practice, clinicians
          learn a mastery-level skill that elevates their confidence,
          strengthens their reputation, and grows their practice through
          undeniable patient success.
        </p>
        <p className="text-xl font-satoshi text-black">
          NPI isn&apos;t only transforming the lives of patients;
          reshaping the future of practitioners. Instead of memorizing
          protocols that crumble in real-world practice, clinicians
          learn a mastery-level skill that elevates their confidence,
          strengthens their reputation, and grows their practice through
          undeniable patient success.
        </p>
        <Cta href="/" buttonText="Get NPI Certified" newTab={false} buttonColor="brand-teal" />
      </div>
    </div>
  )
}