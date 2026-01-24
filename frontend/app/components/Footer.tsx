import Image from "next/image";
import FacebookLogo from "./icons/facebook-logo";
import YoutubeLogo from "./icons/youtube-logo";
import InstagramLogo from "./icons/instagram-logo";

export default function Footer() {
  return (
    <footer className="bg-brand-blue flex flex-col gap-8 px-16 py-10">
      <div className="flex justify-between items-start">
        {/* NPI Logo */}
        <Image src="/npi-logo-teal.png" alt="NPI Logo" width={389} height={123} />
        {/* Hours of Operation */}
        <div className="flex flex-col gap-2 text-white text-center">
          <span className="text-4xl text-brand-teal mb-4">Hours of Operation</span>
          <p>Monday: 9:00AM - 6:00PM</p>
          <p>Tuesday: 9:00AM - 6:00PM</p>
          <p>Wednesday: 8:00AM - 5:00PM</p>
          <p>Thursday: 9:00AM - 6:00PM</p>
          <p>Friday: 8:00AM - 12:30PM</p>
          <p>Saturday & Sunday: Closed</p>

        </div>
        {/* Contact Info */}
        <div className="flex flex-col gap-4 items-center text-white text-center">
          <span className="text-4xl text-brand-teal">Follow Us:</span>
          <div className="flex gap-2">
            <FacebookLogo />
            <YoutubeLogo />
            <InstagramLogo />
          </div>
          <span className="text-4xl text-brand-teal"> Contact Us:</span>
          <div>
            <p>124 S Fairfield Rd, Suite B, Layton UT 84041</p>
            <p>Office: (801) 774-0266 | Email: phcutah@gmail.com</p>
          </div>
        </div>
      </div>
      <p className="text-white text-center self-end">
        &copy; {new Date().getFullYear()} Neural Pathway Institute. Formerly Performance & Healing Chiropractic.
      </p>
    </footer>
  )
}