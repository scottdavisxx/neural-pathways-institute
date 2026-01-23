import Image from "next/image";
import Link from "next/link";
import Cta from "./Cta";

export default function Navigation() {
  return (
    <nav
      className="flex justify-between items-center text-white mt-8 mx-11 uppercase fixed top-0 left-0 right-0 z-50 font-bold"
    >
      <Link href="/">
        <Image src="/npi-logo.png" alt="NPI Logo" width={186} height={55} />
      </Link>
      <div className="flex justify-center items-center gap-28">
        <Link href="/admissions">About</Link>
        <Link href="/about">Patients</Link>
        <Link href="/academics">Practitioners</Link>
        <Cta href="/" buttonText="Contact Us" newTab={false} buttonColor="brand-yellow" />
      </div>
    </nav>
  );
}
