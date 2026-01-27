import HeroBanner from "../components/HeroBanner";

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

export default function Patients() {
  return (
    <>
      <HeroBanner title={heroBanner.title} subtitle={heroBanner.subtitle} cta={heroBanner.cta} image={heroBanner.image} bgImage={heroBanner.bgImage} altText={heroBanner.altText} />
    </>
  )
}