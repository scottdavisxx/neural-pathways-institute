import HeroBanner from "../components/HeroBanner";

const heroBanner = {
  title: "Rooted in Neurology. Proven Through Outcomes.",
  subtitle: "A Breakthrough Neurological Technique, Not Another Surface-Level Fix.",
  cta: [
    {
      href: "/",
      buttonText: "Book an Appointment",
      newTab: false,
      buttonColor: "brand-teal"
    },
    {
      href: "/",
      buttonText: "Become a Practitioner",
      newTab: false,
      buttonColor: "brand-teal"
    },
  ],
  image: "/fpo-hero-banner-1.png",
  bgImage: "/fpo-hero-banner-bg.png",
  altText: "Hero Banner Image",
}

export default function About() {
  return (
    <>
      <HeroBanner title={heroBanner.title} subtitle={heroBanner.subtitle} cta={heroBanner.cta} image={heroBanner.image} bgImage={heroBanner.bgImage} altText={heroBanner.altText} />
    </>
  )
}