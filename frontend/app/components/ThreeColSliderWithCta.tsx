import Image from "next/image";
import Cta from "./ui/Cta";

export default function ThreeColSliderWithCta() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center px-24 py-16 bg-light-gray text-brand-blue">
      <div className="flex gap-8">
        <div className="flex flex-col rounded-2xl bg-brand-light-blue p-8 justify-between w-1/3 gap-10">
          <p>Dr Ferrin listened to me, as usual, and was able to put pieces together.
            He is amazing at working to find out what my body needs and what will help!</p>
          <div className="flex flex-col gap-4">
            <div className="h-px w-full bg-gray-500"></div>
            <div className="flex items-center gap-4">
              <Image src="/fpo-avatar.jpg"
                alt="Avatar"
                width={62}
                height={62}
                className="rounded-full"
              />
              <span className="text-4xl">First Last</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-2xl bg-brand-light-blue p-8 justify-between w-1/3 gap-10">
          <p>Non-invasive neurological care that restores the brain-to-body pathways and
            helps you finally experience real change.</p>
          <div className="flex flex-col gap-4">
            <div className="h-px w-full bg-gray-500"></div>
            <div className="flex items-center gap-4">
              <Image src="/fpo-avatar.jpg"
                alt="Avatar"
                width={62}
                height={62}
                className="rounded-full"
              />
              <span className="text-4xl">First Last</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-2xl bg-brand-light-blue p-8 justify-between w-1/3 gap-10">
          <p>Dr Rawlin and staff has helped me so much with my back and neck. I used to have
            to adjust my neck several times a day and now I rarely need to. I highly recommend this office.</p>
          <div className="flex flex-col gap-4">
            <div className="h-px w-full bg-gray-500"></div>
            <div className="flex items-center gap-4">
              <Image src="/fpo-avatar.jpg"
                alt="Avatar"
                width={62}
                height={62}
                className="rounded-full"
              />
              <span className="text-4xl">First Last</span>
            </div>
          </div>
        </div>
      </div>
      <Cta href="#" buttonText="Google Reviews" newTab={false} buttonColor="brand-teal" />
    </div>
  )
}