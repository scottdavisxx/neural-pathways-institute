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

export default function Practitioners() {
  return (
    <>
      <HeroBanner {...heroBanner} />
      <CtaBanner />
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
    </>
  )
}