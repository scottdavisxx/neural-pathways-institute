import CtaBanner from "../components/CtaBanner";
import HeroBanner from "../components/HeroBanner";
import IconCardGrid from "../components/IconCardGrid";
import NumberCardGrid from "../components/NumberCardGrid";
import ThreeColCardsWithImage from "../components/ThreeColCardsWithImage";
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
  cardBackgroundColor: "sky-blue-20",
  title: "Results that Market Themselves",
  imageSide: "left" as const,
  textColor: "brand-blue",
  imageOverflow: false,
  blurb: "If relief only Lasts until your next appointment, something deeper is being missed. We are here to change that. Our approach restores the pathways that allow the body to heal itself, breaking the cycle of temporary fixes. NPI isn't designed to keep people in treatment forever; it's designed to help them get their life back.",
  cta: [
    {
      href: "/",
      buttonText: "Elevate Your Practice",
      buttonColor: "brand-yellow"
    },
  ],
  badgeProps: {
    text: "Grow Your Practice",
    textColor: "dark-blue",
    bgColor: "transparent",
  },
}
const twoColCtaWithImageTwo = {
  image: "/fpo-two-col-cta.jpg",
  altText: "Two Col CTA With Image",
  cardBackgroundColor: "sky-blue-20",
  title: "Built for Mastery, not Memorization",
  imageSide: "right" as const,
  textColor: "brand-blue",
  imageOverflow: false,
  blurb: "If relief only Lasts until your next appointment, something deeper is being missed. We are here to change that. Our approach restores the pathways that allow the body to heal itself, breaking the cycle of temporary fixes. NPI isn't designed to keep people in treatment forever; it's designed to help them get their life back.",
  cta: [
    {
      href: "/",
      buttonText: "Talk to a Specialist",
      buttonColor: "brand-yellow"
    },
  ],
  badgeProps: {
    text: "Beyond the Seminars",
    textColor: "dark-blue",
    bgColor: "transparent",
  },
}

const ctaBanner = {
  accentImage: "/fpo-cta-banner-accent.png",
  badge: {
    text: "For Practitioners",
    textColor: "dark-blue",
    bgColor: "transparent",
  },
  title: "Is NPI Right for Your Practice?",
  textColor: "brand-blue",
  bgColor: "brand-dark-beige",
  blurb: `If you've ever felt boxed in by protocols Unsure why certain patients don't respond, or frustrated by approaches that work inconsistently, you're not alone. Many practitioners come to NPI not because they lack skill, but because they want a deeper understanding.
  
  Neural pathway integration is designed for clinician to value clarity over complexity, principles over protocols, and results of repetition. If you're looking for a system that strengthen your decision-making and elevate your outcomes, NPI was built for you.`,
  cta:
  {
    href: "/",
    buttonText: "Get NPI Certified",
    buttonColor: "brand-teal"
  },

}
const ctaBannerTwo = {
  badge: {
    text: "Start your journey",
    textColor: "white",
    bgColor: "transparent",
  },
  title: "Set Yourself Apart in a Crowded Market",
  bgColor: "brand-blue",
  textColor: "white",
  blurb: `if you're ready to deepen your understanding, elevate your outcomes, and practice with greater confidence, the next step is simple`,
  cta:
  {
    href: "/",
    buttonText: "Talk with the NPI Team",
    buttonColor: "brand-yellow"
  },

}

export default function Practitioners() {
  return (
    <>
      <HeroBanner {...heroBanner} />
      <CtaBanner {...ctaBanner} />
      <IconCardGrid />
      <NumberCardGrid />
      <TwoColCtaWithImage
        image={twoColCtaWithImage.image}
        cardBackgroundColor={twoColCtaWithImage.cardBackgroundColor}
        imageSide={twoColCtaWithImage.imageSide}
        textColor={twoColCtaWithImage.textColor}
        altText={twoColCtaWithImage.altText}
        imageOverflow={twoColCtaWithImage.imageOverflow}
        badgeText={twoColCtaWithImage.badgeProps.text}
        title={twoColCtaWithImage.title}
        blurb={twoColCtaWithImage.blurb}
        ctaProps={twoColCtaWithImage.cta[0]}
        badgeProps={twoColCtaWithImage.badgeProps}
      />
      <TwoColCtaWithImage
        image={twoColCtaWithImageTwo.image}
        cardBackgroundColor={twoColCtaWithImageTwo.cardBackgroundColor}
        imageSide={twoColCtaWithImageTwo.imageSide}
        textColor={twoColCtaWithImageTwo.textColor}
        imageOverflow={twoColCtaWithImageTwo.imageOverflow}
        altText={twoColCtaWithImageTwo.altText}
        badgeText={twoColCtaWithImageTwo.badgeProps.text}
        title={twoColCtaWithImageTwo.title}
        blurb={twoColCtaWithImageTwo.blurb}
        ctaProps={twoColCtaWithImageTwo.cta[0]}
        badgeProps={twoColCtaWithImageTwo.badgeProps}
      />
      <ThreeColCardsWithImage />
      <CtaBanner {...ctaBannerTwo} />
    </>
  )
}