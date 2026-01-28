import AccordionCardsCta from "../components/AccordionCardsCta";
import HeroBanner from "../components/HeroBanner";
import TwoColCtaWithImage from "../components/TwoColCtaWithImage";
import HandsOnHeartIcon from "../components/icons/hands-on-heart-icon";

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
  cardBackgroundColor: "brand-dark-beige",
  title: "Stop Chasing Short-Term Relief",
  imageSide: "left" as const,
  textColor: "brand-blue",
  imageOverflow: false,
  blurb: "If relief only Lasts until your next appointment, something deeper is being missed. We are here to change that. Our approach restores the pathways that allow the body to heal itself, breaking the cycle of temporary fixes. NPI isn't designed to keep people in treatment forever; it's designed to help them get their life back.",
  accentImageRight: "/accent-right-fpo.png",
  cta: [
    {
      href: "/",
      buttonText: "Talk to a Specialist",
      buttonColor: "brand-teal"
    },
  ],
  badgeProps: {
    text: "Break the Cycle",
    textColor: "dark-blue",
    bgColor: "transparent",
  },
}
const twoColCtaWithImageTwo = {
  image: "/fpo-two-col-cta.jpg",
  altText: "Two Col CTA With Image",
  cardBackgroundColor: "brand-dark-beige",
  title: "Stop Chasing Short-Term Relief",
  imageSide: "right" as const,
  textColor: "brand-blue",
  imageOverflow: false,
  blurb: "If relief only Lasts until your next appointment, something deeper is being missed. We are here to change that. Our approach restores the pathways that allow the body to heal itself, breaking the cycle of temporary fixes. NPI isn't designed to keep people in treatment forever; it's designed to help them get their life back.",
  cta: [
    {
      href: "/",
      buttonText: "Talk to a Specialist",
      buttonColor: "brand-teal"
    },
  ],
  badgeProps: {
    text: "Break the Cycle",
    textColor: "dark-blue",
    bgColor: "transparent",
  },
}

const accordionCards = [
  {
    icon: <HandsOnHeartIcon />,
    title: "Physical Impairment",
    blurb: `Chronic pain, limited mobility, weakness, 
    and recurring injuries often come from disrupted 
    neurological signals, not from the muscles alone. 
    NPI clears and restores the pathways that tell your 
    muscles how to activate, stabilize, and move. Once 
    those pathways are restored, the body regains strength, 
    stability, and function; often faster and more completely 
    than people expected.`,
  },
  {
    icon: <HandsOnHeartIcon />,
    title: "Cognitive Decline",
    blurb: `Chronic pain, limited mobility, weakness, 
    and recurring injuries often come from disrupted 
    neurological signals, not from the muscles alone. 
    NPI clears and restores the pathways that tell your 
    muscles how to activate, stabilize, and move. Once 
    those pathways are restored, the body regains strength, 
    stability, and function; often faster and more completely 
    than people expected.`,
  },
  {
    icon: <HandsOnHeartIcon />,
    title: "Emotional Stability",
    blurb: `Chronic pain, limited mobility, weakness, 
    and recurring injuries often come from disrupted 
    neurological signals, not from the muscles alone. 
    NPI clears and restores the pathways that tell your 
    muscles how to activate, stabilize, and move. Once 
    those pathways are restored, the body regains strength, 
    stability, and function; often faster and more completely 
    than people expected.`,
  },
  {
    icon: <HandsOnHeartIcon />,
    title: "Overall Well-being",
    blurb: `Chronic pain, limited mobility, weakness, 
    and recurring injuries often come from disrupted 
    neurological signals, not from the muscles alone. 
    NPI clears and restores the pathways that tell your 
    muscles how to activate, stabilize, and move. Once 
    those pathways are restored, the body regains strength, 
    stability, and function; often faster and more completely 
    than people expected.`,
  },
]


export default function Patients() {
  return (
    <>
      <HeroBanner title={heroBanner.title} subtitle={heroBanner.subtitle} cta={heroBanner.cta} image={heroBanner.image} bgImage={heroBanner.bgImage} altText={heroBanner.altText} />
      <TwoColCtaWithImage
        image={twoColCtaWithImage.image}
        cardBackgroundColor={twoColCtaWithImage.cardBackgroundColor}
        imageSide={twoColCtaWithImage.imageSide}
        textColor={twoColCtaWithImage.textColor}
        altText={twoColCtaWithImage.altText}
        badgeText={twoColCtaWithImage.badgeProps.text}
        title={twoColCtaWithImage.title}
        blurb={twoColCtaWithImage.blurb}
        accentImageRight={twoColCtaWithImage.accentImageRight}
        ctaProps={twoColCtaWithImage.cta[0]}
        badgeProps={twoColCtaWithImage.badgeProps}
      />
      <TwoColCtaWithImage
        image={twoColCtaWithImageTwo.image}
        cardBackgroundColor={twoColCtaWithImageTwo.cardBackgroundColor}
        imageSide={twoColCtaWithImageTwo.imageSide}
        textColor={twoColCtaWithImageTwo.textColor}
        altText={twoColCtaWithImageTwo.altText}
        badgeText={twoColCtaWithImageTwo.badgeProps.text}
        title={twoColCtaWithImageTwo.title}
        blurb={twoColCtaWithImageTwo.blurb}
        ctaProps={twoColCtaWithImageTwo.cta[0]}
        badgeProps={twoColCtaWithImageTwo.badgeProps}
      />
      <AccordionCardsCta cards={accordionCards} />
    </>
  )
}