import HeroBanner from "./components/HeroBanner";
import Navigation from "./components/Navigation";
import SideImageWithCta from "./components/SideImageWithCta";

export default async function Page() {

  const heroBanner = {
    title: "Reconnecting the Body. Rewriting What's Possible.",
    subtitle: "Neuro-driven healing for patients and practitioners ready for real results.",
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
    image: "/fpo-hero-banner.png",
    altText: "Hero Banner Image",
  }

  const sideImageWithCta = {
    image: "/fpo-side-image-with-cta.jpg",
    altText: "Side Image With CTA",
  }

  return (
    <>
      <Navigation />
      <HeroBanner title={heroBanner.title} subtitle={heroBanner.subtitle} cta={heroBanner.cta} image={heroBanner.image} altText={heroBanner.altText} />
      <SideImageWithCta image={sideImageWithCta.image} altText={sideImageWithCta.altText} />
    </>
  )
}