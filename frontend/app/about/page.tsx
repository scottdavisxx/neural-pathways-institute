import CardGrid from "../components/CardGrid";
import FullWidthVideo from "../components/FullWidthVideo";
import HeroBanner from "../components/HeroBanner";
import ThreeColCards from "../components/ThreeColCards";
import TwoColCardsWithCta from "../components/TwoColCardsWithCta";
import TwoColCtaWithImage from "../components/TwoColCtaWithImage";

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

const twoColCtaWithImage = {
  image: "/fpo-two-col-cta.jpg",
  altText: "Two Col CTA With Image",
  badgeText: "For Practitioners",
  cardBackgroundColor: "brand-dark-teal",
  title: "The Future of Clinical Practice",
  imageOverflow: true,
  blurb: "NPI isn't only transforming the lives of patients; reshaping the future of practitioners. Instead of memorizing protocols that crumble in real-world practice, clinicians learn a mastery-level skill that elevates their confidence, strengthens their reputation, and grows their practice through undeniable patient success.",
  accentImageLeft: "/two-col-cta-accent.png",
  cta: [
    {
      href: "/",
      buttonText: "Start Your NPI Journey",
      buttonColor: "brand-yellow"
    },
  ],
  badgeProps: {
    text: "For Practitioners",
    textColor: "white",
    bgColor: "transparent",
  },
}

const FullWidthVideoBlurb = `Developed at Utah's Neural Pathway Institute by Dr. Eric Rawlin, our innovative method is built on one simple truth: every function in the body begins with communication from the brain. When that communication breaks down, so does your health. \n\n That's why NPI uses a non-invasive neurological technique to restore the pathways that control movement, sensation, healing, and overall function, helping people of every age find relieve, resolve unexplained symptoms, and finally feel like themselves again.`

export default function About() {
  return (
    <>
      <HeroBanner title={heroBanner.title} subtitle={heroBanner.subtitle} cta={heroBanner.cta} image={heroBanner.image} bgImage={heroBanner.bgImage} altText={heroBanner.altText} />
      <FullWidthVideo
        badgeText="About NPI"
        badgeTextColor="dark-blue"
        badgeBgColor="transparent"
        title="Proof that Healing is Possible"
        videoImage="/fpo-fwv-2.jpg"
        videoAltText="Full Width Video"
        blurb={FullWidthVideoBlurb}
      />
      <TwoColCtaWithImage
        image={twoColCtaWithImage.image}
        cardBackgroundColor={twoColCtaWithImage.cardBackgroundColor}
        imageSide="right"
        imageOverflow={twoColCtaWithImage.imageOverflow}
        altText={twoColCtaWithImage.altText}
        badgeText={twoColCtaWithImage.badgeText}
        title={twoColCtaWithImage.title}
        blurb={twoColCtaWithImage.blurb}
        accentImageLeft={twoColCtaWithImage.accentImageLeft}
        ctaProps={twoColCtaWithImage.cta[0]}
        badgeProps={twoColCtaWithImage.badgeProps}
      />
      <ThreeColCards />
      <TwoColCardsWithCta />
      <CardGrid />
    </>
  )
}