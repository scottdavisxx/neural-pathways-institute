import Cta from "./Cta";

export default function TwoColCardsWithCta() {
  return (
    <div className="flex gap-8 items-center justify-between px-24 py-16 bg-light-gray">
      <div className="flex flex-col text-center items-center">
        <div className="bg-baby-blue rounded-2xl flex flex-col items-center gap-4 px-6 py-8">
          <span className="uppercase">Patients</span>
          <h4>Get Back to Living, Not managing Symptoms</h4>
          <p>Non-invasive neurological care that restores the
            brain-to-body pathways and helps you finally
            experience real chang.
          </p>
          <Cta href="/" buttonText="Learn More" newTab={false} buttonColor="brand-dark-blue" />
        </div>
      </div>
      <div className="flex flex-col text-center items-center">
        <div className="bg-baby-blue rounded-2xl flex flex-col items-center gap-4 px-6 py-8">
          <span className="uppercase">Patients</span>
          <h4>Get Back to Living, Not managing Symptoms</h4>
          <p>Non-invasive neurological care that restores the
            brain-to-body pathways and helps you finally
            experience real chang.
          </p>
          <Cta href="/" buttonText="Learn More" newTab={false} buttonColor="brand-dark-blue" />
        </div>
      </div>
    </div>
  )
}