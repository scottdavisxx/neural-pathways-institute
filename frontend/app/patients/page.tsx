import HeroBanner from "../components/HeroBanner";
import TwoColCtaWithImage from "../components/TwoColCtaWithImage";

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

const twoColCtaWithImage = {
  image: "/fpo-two-col-cta.jpg",
  altText: "Two Col CTA With Image",
  badgeText: "For Practitioners",
  title: "The Future of Clinical Practice",
  blurb: "NPI isn't only transforming the lives of patients; reshaping the future of practitioners. Instead of memorizing protocols that crumble in real-world practice, clinicians learn a mastery-level skill that elevates their confidence, strengthens their reputation, and grows their practice through undeniable patient success.",
  accentImage: "/two-col-cta-accent.png",
  cta: [
    {
      href: "/",
      buttonText: "Start Your Journey",
      newTab: false,
      buttonColor: "brand-yellow"
    },
  ],
}



export default function Patients() {
  return (
    <>
      <HeroBanner title={heroBanner.title} subtitle={heroBanner.subtitle} cta={heroBanner.cta} image={heroBanner.image} bgImage={heroBanner.bgImage} altText={heroBanner.altText} />
      <TwoColCtaWithImage
        image={twoColCtaWithImage.image}
        imageSide="right"
        altText={twoColCtaWithImage.altText}
        badgeText={twoColCtaWithImage.badgeText}
        title={twoColCtaWithImage.title}
        blurb={twoColCtaWithImage.blurb}
        accentImage={twoColCtaWithImage.accentImage}
      />
    </>
  )
}