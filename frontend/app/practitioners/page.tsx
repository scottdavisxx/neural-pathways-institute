import CtaBanner from "../components/CtaBanner";
import HeroBanner from "../components/HeroBanner";
import IconCardGrid from "../components/IconCardGrid";
import NumberCardGrid from "../components/NumberCardGrid";

const heroBanner = {
  title: "The Breakthrough You've Been Looking For",
  subtitle: "A mastery-level understanding of brain-to-body function so you can grow your practice and solve cases other practitioners can't",
  cta: [
    {
      href: "/",
      buttonText: "Become a Practitioner",
      newTab: false,
      buttonColor: "brand-yellow"
    },
  ],
  image: "/hero-banner-patients-fpo.png",
  bgImage: "/fpo-hero-banner-bg-2.png",
  altText: "Hero Banner Image",
}

export default function Practitioners() {
  return (
    <>
      <HeroBanner {...heroBanner} />
      <CtaBanner />
      <IconCardGrid />
      <NumberCardGrid />
    </>
  )
}