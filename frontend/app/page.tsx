import HeroBanner from "./components/HeroBanner";
import Navigation from "./components/Navigation";
import SideImageWithCta from "./components/SideImageWithCta";
import TwoColCardsWithCta from "./components/TwoColCardsWithCta";
import TwoCtasWithIntro from "./components/TwoCtasWithIntro";
import FullWidthVideo from "./components/FullWidthVideo";
import ThreeColSliderWithCta from "./components/ThreeColSliderWithCta";

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
    bgImage: "/fpo-hero-banner-bg-1.png",
    altText: "Hero Banner Image",
  }

  const sideImageWithCta = {
    image: "/fpo-side-image-with-cta.jpg",
    altText: "Side Image With CTA",
  }

  return (
    <>
      <HeroBanner title={heroBanner.title} subtitle={heroBanner.subtitle} cta={heroBanner.cta} bgImage={heroBanner.bgImage} image={heroBanner.image} altText={heroBanner.altText} />
      <SideImageWithCta image={sideImageWithCta.image} altText={sideImageWithCta.altText} />
      <TwoCtasWithIntro />
      <TwoColCardsWithCta />
      <FullWidthVideo />
      <ThreeColSliderWithCta />
    </>
  )
}